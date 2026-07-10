import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmailCapture from '../components/EmailCapture';
import ProductStack from '../components/ProductStack';

const LIVE_URL = 'https://mjmorrison10.github.io/Hooklabs/';

const proof = [
  { value: '~95', label: 'hook structures in the bank' },
  { value: 'Offline', label: 'works with no API key' },
  { value: 'Your ledger', label: 'winners tracked on your device' },
  { value: 'Free', label: 'live right now — no signup' },
];

const benefits = [
  {
    icon: '📚',
    title: 'A tiered pattern bank, not a prompt',
    body: 'Core, extended, and historical hook structures — each with documented lineage. HOOKLAB retrieves proven patterns instead of inventing them on the spot.',
  },
  {
    icon: '📒',
    title: 'Your personal ledger',
    body: 'Log what you shipped and how it did — winner, meh, or dead. Over time HOOKLAB weights your own outcomes, so the advice gets more yours and less generic.',
  },
  {
    icon: '📊',
    title: 'Grounded in evidence',
    body: 'Candidates are ranked by proof — your winners first, then market comps, then pattern strength. You see why a hook is recommended, not just that it is.',
  },
  {
    icon: '🏷️',
    title: 'Honest provenance badges',
    body: 'Every candidate is labeled: "Proven for you", "Market-proven structure", "Hypothesis", or "Fatigued". No fake viral scores, no invented percentages.',
  },
  {
    icon: '🔌',
    title: 'AI is the glue, not the author',
    body: 'Offline, HOOKLAB fills scaffolds from the pattern bank. With a key, AI does constrained rewrites — always tied back to a labeled pattern, never freestyling.',
  },
  {
    icon: '🔒',
    title: 'Your data stays yours',
    body: 'Client-side by design. Your ledger and source material live on your device, not on someone else\'s server.',
  },
];

export default function Hooklab() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative">
      {/* HERO — value prop + live CTAs above the fold */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold mb-5">
              🎯 FREE TOOL · LIVE · BUILT BY MICHAEL MORRISON
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.05]">
              Stop guessing your{' '}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                opening line.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              HOOKLAB is a <strong>hook underwriting engine</strong>, not another AI hook generator. It retrieves proven hook structures, grounds them in evidence — your winners, market comps, your source material — ranks candidates by proof, and learns from your outcomes.
            </p>

            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Sits between{' '}
              <Link to="/recall" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">RECALL</Link>
              {' '}and{' '}
              <Link to="/blast" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">BLAST</Link>: RECALL finds it, HOOKLAB underwrites the open, BLAST gets it out the door.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-purple-500/25"
              >
                Open HOOKLAB — Free →
              </a>
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold transition-all border border-gray-200 dark:border-gray-700"
              >
                or try it right here ↓
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              No signup, no card. Your ledger stays in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="demo" className="py-12 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">Live</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Try it right here
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              HOOKLAB running live. Describe your video, underwrite the hooks, log your outcomes. Everything stays in this browser.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl p-1 shadow-2xl shadow-purple-500/20">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-600 dark:text-gray-300 truncate font-mono">
                  {LIVE_URL}
                </div>
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Open fullscreen ↗
                </a>
              </div>

              {/* Iframe */}
              <div className="relative bg-gray-50 dark:bg-gray-900" style={{ paddingBottom: '70%' }}>
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-3" />
                      <div className="text-sm text-gray-500 dark:text-gray-400">Loading HOOKLAB…</div>
                    </div>
                  </div>
                )}
                <iframe
                  src={LIVE_URL}
                  title="HOOKLAB — Live Demo"
                  onLoad={() => setIframeLoaded(true)}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / CREDIBILITY */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proof.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed">
              "A hook isn't a lottery ticket. It's a bet — and you should know the odds before you post. HOOKLAB underwrites the bet."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              — Michael Morrison
            </p>
          </div>
        </div>
      </section>

      {/* WHERE IT FITS — the stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Four tools, one workflow
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              HOOKLAB is the middle step — the one that decides whether the moment you found is worth posting the way you're about to.
            </p>
          </div>
          <ProductStack compact />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What HOOKLAB does
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Not a hook generator. An underwriting engine for the opening line you're about to bet on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING — open the tool + soft updates capture */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Know the odds before you post.
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-6">
              HOOKLAB is free and live right now — no signup, no card, your data stays on your device.
            </p>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Open HOOKLAB — Free →
            </a>
          </div>

          <div className="max-w-xl mx-auto bg-black/20 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="text-center mb-4">
              <h3 className="text-white text-lg font-bold mb-1">Want updates when new patterns drop?</h3>
              <p className="text-white/70 text-sm">Occasional emails when the pattern bank grows or new stack features ship. No spam.</p>
            </div>
            <EmailCapture
              source="hooklab-updates"
              buttonLabel="Get updates →"
              successTitle="You're in."
              successBody="I'll email you when new patterns or features land. Meanwhile — HOOKLAB is live, go underwrite something."
              accent="purple"
            />
          </div>

          <p className="text-center text-white/70 text-xs mt-6">
            Want the clip-finder too?{' '}
            <Link to="/recall" className="underline font-semibold">
              RECALL is free as well
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
