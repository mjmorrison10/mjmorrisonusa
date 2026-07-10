import { Link } from 'react-router-dom';
import ProductStack from '../components/ProductStack';
import EmailCapture from '../components/EmailCapture';

export default function Products() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 mb-6">
            🧰 THE CREATOR OPS STACK
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.05]">
            Four tools.{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              One pipeline.
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            RECALL finds it. HOOKLAB underwrites the open. BLAST gets it out the door. PULSE closes the loop.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Short-form creators lose leverage in four places: they can't find the moment they know they saw, they guess at the opening line, they drown re-posting the same clip across every platform, and they never learn which posts actually worked. Each product kills one of those failure modes.
          </p>
        </div>
      </section>

      {/* The stack */}
      <ProductStack />

      {/* How they chain */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How they chain</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              One workflow, start to finish — not four disconnected apps.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl">🔍</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">1. RECALL finds the moment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Search everything you've watched, surface the exact line with a timecode, and export a clean shot list.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">2. HOOKLAB underwrites the open</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Feed that moment in as source material. HOOKLAB retrieves proven hook structures and ranks candidates by evidence — your winners, market comps — instead of guessing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">3. BLAST gets it out the door</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Write the caption once, adapt it per platform, and track exactly where the clip has — and hasn't — gone across 9 platforms.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl">📈</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">4. PULSE closes the loop</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track each post's first hours — 1h, 2h, 6h checkpoints with YouTube stats pulled automatically — and log the winners back to your HOOKLAB ledger, so the next clip starts smarter instead of from scratch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One suite, shared */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">One suite, not four silos</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The four apps run in your browser and share the same device, so they behave like one system.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl mb-3">🔑</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">One key, all four apps</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enter your API key in any one app and the others pick it up automatically. No copying it into four settings screens.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl mb-3">💾</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">One file backs up everything</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">One export saves the whole stack, including your RECALL clip library, in a single file. Import it on a new device and all four apps come back exactly as they were.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-purple-600 to-orange-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start with the free ones.
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg">
            RECALL, HOOKLAB, and PULSE are free today. BLAST is opening access now — grab your spot.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <Link to="/recall" className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Get RECALL — Free →
            </Link>
            <Link to="/hooklab" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              HOOKLAB — Free
            </Link>
            <Link to="/pulse" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              PULSE — Free
            </Link>
            <Link to="/blast" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              BLAST waitlist
            </Link>
          </div>

          <div className="max-w-xl mx-auto mt-12 bg-black/20 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="text-center mb-4">
              <h3 className="text-white text-lg font-bold mb-1">Want all four in one email?</h3>
              <p className="text-white/70 text-sm">I'll send the whole stack plus the weekly numbers from rebuilding my own audience from zero with it. No spam.</p>
            </div>
            <EmailCapture
              source="products-cta"
              buttonLabel="Send me the stack →"
              successTitle="You're in."
              successBody="Check your inbox. All four apps are free and live, and the weekly rebuild numbers are on the way."
              accent="cyan"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
