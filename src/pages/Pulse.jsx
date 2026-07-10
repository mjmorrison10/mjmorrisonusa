import { Link } from 'react-router-dom';
import ProductStack from '../components/ProductStack';

const LIVE_URL = 'https://mjmorrison10.github.io/pulse/';

const features = [
  {
    icon: '⬇️',
    title: 'Imports what you shipped',
    body: 'One click pulls in every clip you marked posted in BLAST — the live URL, the caption, and the exact time you posted it.',
  },
  {
    icon: '⏱️',
    title: 'Check-ins on a schedule',
    body: 'It tells you which posts are due for a look at 1h, 2h, 6h, and beyond, and records the actual elapsed time so a late check is logged honestly.',
  },
  {
    icon: '▶️',
    title: 'YouTube on autopilot',
    body: 'Add a free YouTube Data API key and PULSE pulls view, like, and comment counts for YouTube links by itself. Everything else is a two-second manual entry.',
  },
  {
    icon: '📈',
    title: 'Velocity, not just totals',
    body: 'A sparkline of views over time and a views-per-hour figure between your last two readings, because a clip\'s slope in the first two hours is the real signal.',
  },
  {
    icon: '🔁',
    title: 'Closes the loop',
    body: 'Mark a post Winner, Meh, or Dead and PULSE writes it straight into your HOOKLAB ledger. Next time you scout in RECALL, that outcome is already proof.',
  },
  {
    icon: '🔒',
    title: 'Yours, in your browser',
    body: 'Bring your own key, no backend. Your data and your key never leave this browser except for the YouTube calls you trigger.',
  },
];

export default function Pulse() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-xs font-bold text-pink-600 dark:text-pink-400 mb-6">
            📈 THE ANALYTICS LOOP · NEW
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.05]">
            The end of the{' '}
            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              manual Excel sheet
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            The top clip channels don't type view counts into a spreadsheet every hour. PULSE does the tracking for you, then feeds what actually worked back to HOOKLAB.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Post with BLAST, and PULSE picks it up, watches the numbers, and turns every clip into a logged Winner, Meh, or Dead. The loop closes itself.
          </p>
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3.5 bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
          >
            Open PULSE — Free →
          </a>
        </div>
      </section>

      {/* The stack */}
      <ProductStack />

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What PULSE does</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The data entry the top agencies automate — done for the solo creator, honestly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-pink-100 dark:border-pink-900/40">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest note */}
      <section className="py-14 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">The honest part</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Auto-fetching view counts from TikTok or Instagram in a plain web page isn't possible: they're behind logins and cross-origin rules. So PULSE automates YouTube completely and makes every other platform a two-second manual log. That is the real version of "automatic," not a scraper that breaks the first time a platform changes its page.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-rose-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Close your loop.</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg">
            Free, runs in your browser, and it makes the rest of the stack smarter every time you post.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Open PULSE — Free →
            </a>
            <Link to="/workflow" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              See the full workflow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
