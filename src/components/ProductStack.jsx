import { Link } from 'react-router-dom';

// The three products, in pipeline order. Accent colors match each product's
// own brand (RECALL cyan, HOOKLAB purple #7C5CFF, BLAST orange). Links point to
// the internal portfolio pages, never external product URLs.
const products = [
  {
    name: 'RECALL',
    icon: '🔍',
    jtbd: 'Finds the moment. Searchable clip-memory across everything you\'ve watched.',
    status: 'Free tool',
    link: '/recall',
    gradient: 'from-cyan-600 to-blue-500',
    border: 'border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600',
    chip: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
    cta: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    name: 'HOOKLAB',
    icon: '🎯',
    jtbd: 'Underwrites the open. Evidence-based hook selection — proof, not vibes.',
    status: 'Free tool',
    link: '/hooklab',
    gradient: 'from-purple-600 to-violet-500',
    border: 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600',
    chip: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    cta: 'text-purple-600 dark:text-purple-400',
  },
  {
    name: 'BLAST',
    icon: '⚡',
    jtbd: 'Gets it out the door. Posting command center across 8 platforms.',
    status: 'Waitlist open',
    link: '/blast',
    gradient: 'from-orange-600 to-pink-500',
    border: 'border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600',
    chip: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    cta: 'text-orange-600 dark:text-orange-400',
  },
];

// The stack shown as a connected 3-card row. `compact` drops the section
// header so the component can be embedded inside a page that already has one.
// `recallLink` lets a page deep-link the RECALL card (Home sends visitors
// straight to the live demo; catalog pages keep the page top).
export default function ProductStack({ heading = 'The Creator Ops Stack', compact = false, recallLink = '/recall' }) {
  return (
    <section className={compact ? '' : 'py-16 bg-gray-50 dark:bg-gray-950'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Creator operations systems — RECALL finds it, HOOKLAB underwrites the open, BLAST gets it out the door.
            </p>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-4">
          {products.map((product, i) => (
            <div key={product.name} className="flex items-center gap-4 md:flex-1">
              <Link
                to={product.name === 'RECALL' ? recallLink : product.link}
                className={`group flex-1 h-full bg-white dark:bg-gray-900 rounded-2xl p-6 border ${product.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl">{product.icon}</div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${product.chip}`}>
                    {product.status}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{product.jtbd}</p>
                <span className={`inline-flex items-center text-sm font-medium ${product.cta}`}>
                  Learn more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              {i < products.length - 1 && (
                <div className="hidden md:block text-2xl text-gray-300 dark:text-gray-600" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
