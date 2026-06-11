import { useState } from 'react';

export default function ContactFormMini({ service = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${service || 'Inquiry'} - ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${service}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:mjmorrisonusa@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-white font-semibold text-lg mb-2">Message Ready!</p>
        <p className="text-white/80 text-sm">
          Your email client should have opened. If not, email me at{' '}
          <a href="mailto:mjmorrisonusa@gmail.com" className="underline">mjmorrisonusa@gmail.com</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
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
      <button
        type="submit"
        className="w-full px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
      >
        Get Your Free Quote
      </button>
    </form>
  );
}
