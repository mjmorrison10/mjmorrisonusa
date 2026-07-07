import { useState } from 'react';

// Formspree endpoint for the email list. Same pattern as ContactFormMini —
// owner can swap to ConvertKit / Mailchimp / Buttondown later by changing
// just this URL. Free tool = RECALL itself, delivered immediately on submit.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeebpvej';

export default function EmailCapture({
  source = 'recall',
  buttonLabel = 'Get Instant Access',
  successTitle = "You're in.",
  successBody = 'Check your inbox — RECALL is live and ready. Search a phrase, bin a moment, ship a clip.',
  accent = 'cyan',
}) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [data, setData] = useState({ name: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const accentClasses = {
    cyan: {
      ring: 'focus:ring-cyan-400/50',
      btn: 'bg-cyan-500 hover:bg-cyan-600 text-white',
      check: 'text-cyan-400',
    },
    purple: {
      ring: 'focus:ring-purple-400/50',
      btn: 'bg-purple-500 hover:bg-purple-600 text-white',
      check: 'text-purple-400',
    },
    blue: {
      ring: 'focus:ring-blue-400/50',
      btn: 'bg-blue-500 hover:bg-blue-600 text-white',
      check: 'text-blue-400',
    },
  }[accent] || {};

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <div className={`text-5xl mb-3 ${accentClasses.check}`}>✓</div>
        <p className="text-white font-bold text-2xl mb-2">{successTitle}</p>
        <p className="text-white/85 text-base max-w-md mx-auto">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-3">
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="_subject" value={`RECALL signup — ${source}`} />
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={data.name}
          onChange={(e) => setData(d => ({ ...d, name: e.target.value }))}
          className={`px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 ${accentClasses.ring} focus:border-transparent transition-all`}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          value={data.email}
          onChange={(e) => setData(d => ({ ...d, email: e.target.value }))}
          className={`px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 ${accentClasses.ring} focus:border-transparent transition-all`}
        />
      </div>
      {status === 'error' && (
        <p className="text-red-200 text-sm text-center">
          Something went wrong. Please email michael@mjmorrisonusa.com directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full px-8 py-4 ${accentClasses.btn} rounded-xl font-bold text-lg transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {status === 'sending' ? 'Sending...' : buttonLabel}
      </button>
      <p className="text-white/60 text-xs text-center mt-3">
        No spam. Unsubscribe anytime. By submitting you agree to receive email from Michael Morrison.
      </p>
    </form>
  );
}
