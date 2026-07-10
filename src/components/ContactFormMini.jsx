import { useState } from 'react';

// Formspree endpoint (live), tied to michael@mjmorrisonusa.com. Shared across
// the contact + email-capture forms. See LAUNCH.md to split funnels / pipe to
// an ESP.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeebpvej';

export default function ContactFormMini({ service = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-white font-semibold text-lg mb-2">Message Sent!</p>
        <p className="text-white/80 text-sm">
          Thanks for reaching out — I'll get back to you within 24 hours. If you don't hear back, email me directly at{' '}
          <a href="mailto:michael@mjmorrisonusa.com" className="underline">michael@mjmorrisonusa.com</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <input type="hidden" name="service" value={service} />
      <input type="hidden" name="_subject" value={`${service || 'Inquiry'} - New message from mjmorrisonusa.com`} />
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
        />
      </div>
      <textarea
        name="message"
        required
        rows={3}
        placeholder="I respond within 24 hours..."
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
      />
      {status === 'error' && (
        <p className="text-red-200 text-sm text-center">
          Something went wrong sending that. Please email me directly at{' '}
          <a href="mailto:michael@mjmorrisonusa.com" className="underline">michael@mjmorrisonusa.com</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Get Your Free Quote'}
      </button>
      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-white/60 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Secure & Private</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/60 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>24hr Response</span>
        </div>
        <div className="flex items-center gap-1.5 text-white/60 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>100% Satisfaction</span>
        </div>
      </div>
    </form>
  );
}
