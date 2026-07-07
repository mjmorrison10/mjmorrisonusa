import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactFormMini from '../components/ContactFormMini';

const techStack = [
  { name: 'Vanilla JS', note: 'no framework, no build step' },
  { name: 'PWA', note: 'installs on iPhone home screen' },
  { name: 'Gemini 1.5 Flash', note: 'BYO API key for transcription' },
  { name: 'localStorage', note: 'library lives on device' },
  { name: 'Service Workers', note: 'works offline' },
];

const features = [
  {
    icon: '📥',
    title: 'Drop in any transcript',
    body: 'Paste a timestamped transcript, or upload an audio/video file and let Gemini transcribe it for you.',
  },
  {
    icon: '🔎',
    title: 'Search every phrase, every source',
    body: 'Type a word, a phrase, a running joke. RECALL surfaces every moment it appears across every source, with exact timecodes.',
  },
  {
    icon: '📌',
    title: 'Stack moments into a bin',
    body: 'Hit + BIN on the lines you want. They pile up into a clip concept — cross-source callbacks welcome.',
  },
  {
    icon: '📤',
    title: 'Export a clean shot list',
    body: 'One click copies a numbered, timecoded, source-labeled shot list to your clipboard. Paste into your editor and cut.',
  },
  {
    icon: '📱',
    title: 'Installs like a native app',
    body: 'PWA — Share → Add to Home Screen on iPhone. No App Store. Works offline after first launch.',
  },
  {
    icon: '🔒',
    title: 'Your data stays on your device',
    body: 'No backend, no account, no telemetry. Your library lives in browser localStorage. Export as JSON anytime.',
  },
];

const stats = [
  { value: '9', label: 'Clean commits' },
  { value: '0', label: 'Server dependencies' },
  { value: '~$0.009', label: 'Cost per audio hour' },
  { value: 'iOS + Android', label: 'Installable' },
];

export default function Recall() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">
              ⭐ FEATURED PROJECT
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">
              🆕 NEW
            </span>
            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold">
              🏆 BUILT IN ONE SESSION
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
              RECALL
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-3xl">
            Searchable clip-memory for short-form creators. Drop in the podcasts and interviews you consume. Search any phrase, get every moment it shows up across every source — with timecodes.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            The callback from 30 minutes earlier. The line you swore you'd remember. The cross-source thread that makes a banger clip. RECALL keeps them all, finds them in one keystroke, and hands you a shot list.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://mjmorrison10.github.io/recall/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/25"
            >
              Launch RECALL →
            </a>
            <a
              href="https://github.com/mjmorrison10/recall"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
            >
              View Source on GitHub
            </a>
            <a
              href="https://mjmorrison10.github.io/recall/howto.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors border border-gray-200 dark:border-gray-700"
            >
              How to Use →
            </a>
          </div>
        </div>
      </section>

      {/* Live embed */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Try it right here
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              RECALL running live below. Add a source, search a phrase, bin the moments. Your library stays in this browser only.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-1 shadow-2xl shadow-blue-500/20">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-600 dark:text-gray-300 truncate font-mono">
                  https://mjmorrison10.github.io/recall/
                </div>
                <a
                  href="https://mjmorrison10.github.io/recall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Open fullscreen ↗
                </a>
              </div>

              {/* Iframe */}
              <div className="relative bg-gray-50 dark:bg-gray-900" style={{ paddingBottom: '70%' }}>
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
                      <div className="text-sm text-gray-500 dark:text-gray-400">Loading RECALL…</div>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://mjmorrison10.github.io/recall/"
                  title="RECALL - Live Demo"
                  onLoad={() => setIframeLoaded(true)}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            Loads from GitHub Pages. Search and bin work the same way they do on the standalone site.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What it does
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Six features. One tool. Built for creators who listen to hundreds of hours of long-form content and want to find the best moments without losing them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tech stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The deliberate constraints: no backend, no build step, no framework. Just the platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="text-center p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30"
              >
                <div className="font-mono font-bold text-sm text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{tech.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Case study
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-red-400 border-y border-r border-gray-200 dark:border-gray-700">
              <div className="text-xs font-bold uppercase text-red-600 dark:text-red-400 mb-2">
                Problem
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Short-form creators consume 10+ hours of long-form content per week and lose track of the best lines. The existing search tools have two problems:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    <strong>Filmot</strong> indexes YouTube's public transcripts — but its index has been frozen since YouTube anti-crawling measures in June 2024. Every result it returns is content from 2+ years ago. Nobody watches short-form videos from 2 years ago.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Neither YouTube nor any existing tool gives you a private library of YOUR consumed content. You can search the world, but you can't search your own listening history.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-blue-400 border-y border-r border-gray-200 dark:border-gray-700">
              <div className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 mb-2">
                Solution
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Built a PWA with a single architectural rule: <strong>no backend, no serverless function, no key in the repo.</strong>
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    BYO Gemini API key stored in <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">localStorage</code>. Sent only to Google. No proxy, no server cost.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Single static file that installs on iPhone via Share → Add to Home Screen. No App Store gatekeeping.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Prompt-engineered Gemini 1.5 Flash to output <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">[HH:MM:SS]</code> lines that feed the existing transcript parser — zero custom parsing code.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Service worker caches the app shell for offline use. Library survives cache clears via JSON export/import.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-l-4 border-green-400 border-y border-r border-gray-200 dark:border-gray-700">
              <div className="text-xs font-bold uppercase text-green-600 dark:text-green-400 mb-2">
                Result
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Working product shipped in a single session across 9 clean commits:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Freeze fix:</strong> chunked parser prevents the main thread from blocking on hour-long pastes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>PWA:</strong> installable on iPhone home screen via Add to Home Screen, fullscreen, no Safari chrome</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Gemini transcription:</strong> upload audio, get timecoded lines back, runs at ~$0.009/hour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>How-to page:</strong> install + API key instructions for first-time users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Library export/import:</strong> JSON backup with schema versioning so the work is never at the mercy of browser state</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>CSS/JS split:</strong> file structure that scales past prototype</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <strong>Total operating cost:</strong> whatever Gemini charges per audio hour (~$0.009). <strong>Zero server costs.</strong> Zero accounts. Zero telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want something like this built for you?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-2">
              RECALL is an example of the kind of tool I can ship in a single session — single-file architecture, no backend, deployable to your own domain in hours.
            </p>
            <p className="text-blue-200 text-sm">
              If you have a workflow that's eating your time, let's talk about turning it into a tool.
            </p>
          </div>
          <ContactFormMini service="Custom Tool / RECALL-style Project" />
        </div>
      </section>
    </div>
  );
}
