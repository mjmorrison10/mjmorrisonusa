const businessModel = [
  {
    step: '01',
    title: 'You Have Stuff',
    description: 'You have stuff. You need money. I buy stuff.',
    icon: '📦',
  },
  {
    step: '02',
    title: 'I Make an Offer',
    description: 'Based on condition, demand, and market data. Fair pricing backed by real-time market analysis.',
    icon: '💰',
  },
  {
    step: '03',
    title: 'Quick Transaction',
    description: 'Fast pickup, local meetup, or delivery. No shipping hassles, no platform fees, no waiting.',
    icon: '🤝',
  },
  {
    step: '04',
    title: 'You Get Cash',
    description: 'Immediate payment. Space cleared. Problem solved.',
    icon: '✅',
  },
];

const categories = [
  { name: 'Video Games', description: 'Consoles, games, accessories, retro and modern', icon: '🎮', priority: 'Primary' },
  { name: 'Motorcycles', description: 'Parts, gear, accessories, and complete bikes', icon: '🏍️', priority: 'Secondary' },
  { name: 'Collectibles', description: 'TCG cards, figures, plush, vintage items', icon: '⭐', priority: 'Growing' },
  { name: 'Electronics', description: 'Laptops, phones, drones, gadgets', icon: '💻', priority: 'Active' },
  { name: 'Anything', description: 'If it has value and I can test it, I\'ll flip it', icon: '🔄', priority: 'Open' },
];

const projects = [
  {
    title: 'Cypress Flips',
    description: 'My storefront for local flipping. Condition-first listings, transparent pricing, and fair local deals.',
    url: 'https://cypressflips.netlify.app/',
    type: 'Storefront',
  },
  {
    title: 'PriceSpy',
    description: 'Real-time eBay pricing tool built for flippers. Fee calculators, deal analyzers, and market data.',
    url: 'https://pricespy-yx00.onrender.com/',
    type: 'Tool',
  },
];

import ContactFormMini from '../components/ContactFormMini';

export default function Flipping() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
              🔄 Flipping & Liquidation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Turn Your Clutter
              <span className="block bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                Into Cash
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Instant cash service for your inventory. I buy stuff. You get money. Same day. Cypress, CA based.
            </p>
          </div>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Think of it as an instant cash service for your inventory. You sell. I buy. Same day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModel.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                {index < businessModel.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 dark:text-gray-600">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            What I Flip
          </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
              If it has value and I can verify it, I'll buy it.
            </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        category.priority === 'Primary' 
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                          : category.priority === 'Secondary'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {category.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Built for the Business
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            I don't just flip — I build tools to flip smarter.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{project.title}</h3>
                  </div>
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Work With Me?
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-xl flex-shrink-0">
                  💵
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Fair Pricing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prices backed by real-time market data. I use PriceSpy to analyze actual selling prices, 
                    not guesswork.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-xl flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Fast Transactions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Local pickup, meetup, or delivery. No shipping, no platform fees, no waiting for payment.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-xl flex-shrink-0">
                  🔍
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Transparent Process</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I'll tell you exactly what something is worth and why. No lowballing, no pressure.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Cypress, CA Local</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Serving Cypress, Orange County, and the greater LA area. Public meetups, safe locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Turn Your Inventory Into Cash Today
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Whether it's one item or a warehouse full — I'll make you a fair offer and handle the rest.
            </p>
          </div>
          <ContactFormMini service="Inventory Liquidation" />
        </div>
      </section>
    </div>
  );
}
