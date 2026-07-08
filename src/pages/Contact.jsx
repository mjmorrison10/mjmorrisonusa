import { useState } from 'react';

// Formspree endpoint — replace YOUR_FORM_ID with the real form ID after
// creating a free form at https://formspree.io tied to michael@mjmorrisonusa.com
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeebpvej';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
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

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              📧 Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you need a website, social media strategy, or help liquidating inventory, 
              I'm ready to help you conquer your next challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Message Sent!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Thanks for reaching out — I'll get back to you within 24 hours. If you don't hear back, reach me directly at:
              </p>
              <a 
                href="mailto:michael@mjmorrisonusa.com"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                michael@mjmorrisonusa.com
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value={`${formData.service || 'General Inquiry'} - New message from mjmorrisonusa.com`} />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  What Do You Need?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service...</option>
                  <option value="AI App Build">AI App Build</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Inventory Liquidation">Inventory Liquidation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-sm text-center">
                  Something went wrong sending that. Please email me directly at{' '}
                  <a href="mailto:michael@mjmorrisonusa.com" className="underline">michael@mjmorrisonusa.com</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          {/* Alternative Contact Methods */}
          <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Other Ways to Reach Me
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="mailto:michael@mjmorrisonusa.com"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">📧</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Email</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">michael@mjmorrisonusa.com</span>
              </a>
              <a
                href="https://linkedin.com/in/mjmorrisonusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">💼</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Connect with me</span>
              </a>
              <a
                href="https://github.com/mjmorrison10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">💻</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">GitHub</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">View my code</span>
              </a>
              <a
                href="https://youtube.com/@mjmorrisonusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">🎬</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">YouTube</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">@mjmorrisonusa</span>
              </a>
              <a
                href="https://instagram.com/mjmorrisonusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">📸</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Instagram</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">@mjmorrisonusa</span>
              </a>
              <a
                href="https://facebook.com/mjmorrisonusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">👥</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Facebook</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">@mjmorrisonusa</span>
              </a>
              <a
                href="https://twitter.com/mmorrisonusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">🐦</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Twitter/X</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">@mmorrisonusa</span>
              </a>
              <a
                href="https://snapchat.com/add/mjmorrisonusa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="text-2xl">👻</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Snapchat</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">@mjmorrisonusa</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
