import { useState } from 'react';

// Brevo (Sendinblue) hosted form endpoint for the newsletter list. Public form
// URL — no API key, safe in this open-source client. The serve endpoint is
// cross-origin and returns an opaque response, so we POST with mode:'no-cors' +
// urlencoded (a CORS "simple" request); the request always reaches Brevo, and
// we treat a resolved fetch as success. Service/contact inquiries stay on
// Formspree (see ContactFormMini.jsx) — this keeps the two funnels separate.
const BREVO_ENDPOINT =
  'https://41867ea0.sibforms.com/serve/MUIFADTHAAL-0g_lol9TuoysJ8w5BFGe8U73k1ShmZtVKf9Whtqkb14HVnN9ZS6ucXK_Gu8Z8KeaBmWrb9Kc3ZyVg-wZ0Wl4gphKyQoC2WBCJI54geLHHNiFyzqpoZzbVxfEFS2cfPZs5g-N-2yvhZx_3d5fjeMOQ78rOZGUDFDZ098J9thZ51WoVCu2fq86Xgrz0aa5WJGm5Q6U9w==';

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
    // Brevo form fields: EMAIL (required), email_address_check (honeypot, must
    // stay empty), locale, html_type. FIRSTNAME is a Brevo default attribute.
    const body = new URLSearchParams({
      EMAIL: data.email,
      FIRSTNAME: data.name,
      email_address_check: '',
      locale: 'en',
      html_type: 'simple',
    });
    try {
      await fetch(BREVO_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body,
      });
      setStatus('success');
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
    <form onSubmit={handleSubmit} data-source={source} className="max-w-lg mx-auto space-y-3">
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
