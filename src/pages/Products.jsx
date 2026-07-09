import { Link } from 'react-router-dom';
import ProductStack from '../components/ProductStack';

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
            Three tools.{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              One pipeline.
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            RECALL finds it. HOOKLAB underwrites the open. BLAST gets it out the door.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Short-form creators lose leverage in three places: they can't find the moment they know they saw, they guess at the opening line, and they drown re-posting the same clip across every platform. Each product kills one of those failure modes.
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
              One workflow, start to finish — not three disconnected apps.
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Write the caption once, adapt it per platform, and track exactly where the clip has — and hasn't — gone across 8 platforms.</p>
              </div>
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
            RECALL and HOOKLAB are free today. BLAST is opening access now — grab your spot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/recall" className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Get RECALL — Free →
            </Link>
            <Link to="/hooklab" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              HOOKLAB — Free
            </Link>
            <Link to="/blast" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              BLAST waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
