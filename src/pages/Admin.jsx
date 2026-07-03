import { useState, useEffect, useCallback } from 'react';

// GitHub repo this admin panel manages.
const REPO_OWNER = 'mjmorrison10';
const REPO_NAME = 'mjmorrisonusa';
const REPO_BRANCH = 'main';
const TARGET_FILE = 'src/pages/WebDev.jsx';

const TOKEN_STORAGE_KEY = 'mjmorrisonusa_admin_gh_token';

function githubApiUrl(path) {
  return `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${path}`;
}

// Base64 helpers that handle UTF-8 content safely (GitHub's Contents API
// requires base64, and btoa/atob alone choke on non-Latin1 characters).
function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function base64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str)));
}

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_STORAGE_KEY) || '');
  const [tokenInput, setTokenInput] = useState('');
  const [authStatus, setAuthStatus] = useState('idle'); // idle | checking | valid | invalid
  const [username, setUsername] = useState('');

  const [fileState, setFileState] = useState('idle'); // idle | loading | ready | error
  const [fileContent, setFileContent] = useState('');
  const [fileSha, setFileSha] = useState('');
  const [conceptEnabled, setConceptEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [commitStatus, setCommitStatus] = useState('idle'); // idle | committing | success | error

  const verifyToken = useCallback(async (tok) => {
    setAuthStatus('checking');
    setErrorMessage('');
    try {
      const res = await fetch('https://api.github.com/user', {
        headers: { Authorization: `Bearer ${tok}` },
      });
      if (!res.ok) {
        setAuthStatus('invalid');
        return;
      }
      const data = await res.json();
      setUsername(data.login || '');
      setAuthStatus('valid');
      localStorage.setItem(TOKEN_STORAGE_KEY, tok);
      setToken(tok);
    } catch {
      setAuthStatus('invalid');
      setErrorMessage('Could not reach GitHub. Check your connection and try again.');
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    queueMicrotask(() => verifyToken(token));
  }, [token, verifyToken]);

  const loadFile = useCallback(async () => {
    if (!token) return;
    setFileState('loading');
    setErrorMessage('');
    try {
      const res = await fetch(
        githubApiUrl(`/contents/${TARGET_FILE}?ref=${REPO_BRANCH}`),
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!res.ok) {
        throw new Error(`GitHub returned ${res.status} while reading ${TARGET_FILE}`);
      }
      const data = await res.json();
      const decoded = base64ToUtf8(data.content);
      setFileContent(decoded);
      setFileSha(data.sha);

      const match = decoded.match(/const SHOW_CONCEPT_PROJECTS = (true|false);/);
      if (!match) {
        throw new Error('Could not find the SHOW_CONCEPT_PROJECTS flag in the file. It may have been renamed or moved.');
      }
      setConceptEnabled(match[1] === 'true');
      setFileState('ready');
    } catch (err) {
      setErrorMessage(err.message || 'Failed to load file from GitHub.');
      setFileState('error');
    }
  }, [token]);

  useEffect(() => {
    if (authStatus !== 'valid') return;
    queueMicrotask(() => loadFile());
  }, [authStatus, loadFile]);

  const handleToggle = async () => {
    const newValue = !conceptEnabled;
    setCommitStatus('committing');
    setErrorMessage('');

    try {
      const newContent = fileContent.replace(
        /const SHOW_CONCEPT_PROJECTS = (true|false);/,
        `const SHOW_CONCEPT_PROJECTS = ${newValue};`
      );

      const res = await fetch(githubApiUrl(`/contents/${TARGET_FILE}`), {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Admin: ${newValue ? 'show' : 'hide'} concept projects section`,
          content: utf8ToBase64(newContent),
          sha: fileSha,
          branch: REPO_BRANCH,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || `GitHub returned ${res.status} while committing.`);
      }

      const result = await res.json();
      setFileContent(newContent);
      setFileSha(result.content.sha);
      setConceptEnabled(newValue);
      setCommitStatus('success');
      setTimeout(() => setCommitStatus('idle'), 4000);
    } catch (err) {
      setErrorMessage(err.message || 'Failed to commit the change.');
      setCommitStatus('error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setToken('');
    setTokenInput('');
    setAuthStatus('idle');
    setFileState('idle');
    setUsername('');
  };

  // --- Not authenticated yet: token entry screen ---
  if (!token || authStatus === 'invalid') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Site Admin</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Paste a GitHub Personal Access Token to manage site settings. It's stored only in this browser's local storage and sent only to GitHub's API — never anywhere else.
          </p>

          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            GitHub Token
          </label>
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="ghp_..."
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-3"
            autoComplete="off"
          />

          {authStatus === 'invalid' && (
            <p className="text-red-600 dark:text-red-400 text-sm mb-3">
              That token didn't work — GitHub rejected it. Make sure it's active, not expired, and has permission to write to <code>{REPO_OWNER}/{REPO_NAME}</code>.
            </p>
          )}
          {errorMessage && authStatus !== 'invalid' && (
            <p className="text-red-600 dark:text-red-400 text-sm mb-3">{errorMessage}</p>
          )}

          <button
            onClick={() => verifyToken(tokenInput.trim())}
            disabled={!tokenInput.trim() || authStatus === 'checking'}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {authStatus === 'checking' ? 'Checking...' : 'Connect'}
          </button>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 space-y-2">
            <p className="font-medium text-gray-700 dark:text-gray-300">Need a token?</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Go to GitHub → Settings → Developer settings → Personal access tokens</li>
              <li>Generate a new token (fine-grained, scoped to just this repo, with Contents: Read and write)</li>
              <li>Paste it above — nothing is sent anywhere except directly to GitHub's API from your browser</li>
            </ol>
            <p className="pt-2">
              Revoke the token from GitHub any time to instantly cut off access, including from this admin page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- Authenticated: admin dashboard ---
  return (
    <div className="min-h-[80vh] px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Site Admin</h1>
            {username && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Connected as <span className="font-medium">{username}</span>
              </p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
          >
            Disconnect
          </button>
        </div>

        {fileState === 'loading' && (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
            Loading site settings from GitHub...
          </div>
        )}

        {fileState === 'error' && (
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
            <p className="text-red-700 dark:text-red-300 text-sm mb-4">{errorMessage}</p>
            <button
              onClick={loadFile}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {fileState === 'ready' && (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white mb-1">Concept Projects Section</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                  Controls whether the "Concept Projects" section (unsolicited demo sites, clearly labeled and disclaimed) appears on the Web Dev page.
                </p>
              </div>
              <button
                onClick={handleToggle}
                disabled={commitStatus === 'committing'}
                className={`relative inline-flex h-8 w-14 flex-shrink-0 items-center rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                  conceptEnabled ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label="Toggle concept projects visibility"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${
                    conceptEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="mt-4 text-sm">
              <span className={`font-medium ${conceptEnabled ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
                Currently: {conceptEnabled ? 'Visible on site' : 'Hidden'}
              </span>
            </div>

            {commitStatus === 'committing' && (
              <p className="mt-4 text-sm text-blue-600 dark:text-blue-400">Committing change to GitHub...</p>
            )}
            {commitStatus === 'success' && (
              <p className="mt-4 text-sm text-green-600 dark:text-green-400">
                ✓ Committed. GitHub Pages will redeploy automatically in a minute or two.
              </p>
            )}
            {commitStatus === 'error' && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
            )}

            <p className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-500">
              This writes a real commit to <code>{REPO_OWNER}/{REPO_NAME}</code> on the <code>{REPO_BRANCH}</code> branch, which triggers the existing GitHub Pages deploy workflow. Changes go live after that workflow finishes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
