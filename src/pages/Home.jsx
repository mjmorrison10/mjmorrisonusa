import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ContactFormMini from '../components/ContactFormMini';

const services = [
  {
    icon: '🤖',
    title: 'AI Apps',
    description: 'I build AI-powered web apps that solve real business problems — clip finders, content tools, workflow automation. Production-ready in days, not months.',
    link: '/webdev',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'I grew 314K followers and generated 50M+ views. I can do the same for your brand.',
    link: '/smma',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: '🔄',
    title: 'Flipping & Liquidation',
    description: 'Turn your clutter into cash. I buy your inventory, you get paid today. Simple.',
    link: '/flipping',
    color: 'from-orange-600 to-yellow-500',
  },
];

const stats = [
  { value: '314,300', label: 'Followers Built' },
  { value: '50M+', label: 'Monthly Views Generated' },
  { value: '9+', label: 'Platforms Dominated' },
  { value: '5', label: 'Person Elite Team' },
];

export default function Home() {
  const [statsRef, statsVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Profile Picture */}
          <div className="mb-8">
            <img loading="lazy" 
              src={import.meta.env.BASE_URL + 'profile.webp'} 
              alt="Michael Morrison"
              className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Heritage badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400">🏴󠁧󠁢󠁳󠁣󠁴󠁿 🇮🇹 🇵🇭</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Cypress, CA</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-gray-900 dark:text-white">Michael Morrison</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AI Apps &amp; Growth Strategist
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            314,000 followers built from scratch. 50 million monthly views. Banned from 4 platforms for being too effective.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm text-blue-700 dark:text-blue-300">
              💻 <strong>For businesses:</strong> Websites that increase your revenue
            </span>
            <span className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 rounded-full text-sm text-orange-700 dark:text-orange-300">
              🔄 <strong>For flippers:</strong> I buy your inventory for cash
            </span>
            <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full text-sm text-purple-700 dark:text-purple-300">
              📱 <strong>For creators:</strong> I grow your audience
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              Get Your Free Quote
            </Link>
            <Link
              to="/webdev"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              View My Work
            </Link>
          </div>

          {/* Capacity note */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
              I take on a small, limited number of web projects at a time so every client gets real attention
            </span>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://linkedin.com/in/mjmorrisonusa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://youtube.com/@mjmorrisonusa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://instagram.com/mjmorrisonusa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
            <a href="https://snapchat.com/add/mjmorrisonusa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors" aria-label="Snapchat">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.165-.075.374-.06.544.046.524.205 1.034.39 1.394.165.314.359.569.569.764.209.196.434.345.659.435.27.12.524.164.764.194.135.015.255.03.374.045.464.075.839.27 1.169.584.389.375.674.885.824 1.574.164.764.164 1.454-.016 2.009-.345 1.095-1.258 1.8-2.397 2.114-.225.06-.464.104-.704.135-.36.045-.734.075-1.109.075-.24 0-.464-.015-.689-.074-.345-.075-.704-.135-1.078-.135-.135 0-.27.015-.404.03-.375.045-.75.135-1.124.3-.524.225-.974.569-1.333.989-.524.615-.944 1.334-1.303 2.069-.18.375-.345.764-.479 1.139-.105.284-.209.554-.314.809-.075.18-.135.345-.195.494-.074.21-.18.375-.344.48-.165.09-.375.135-.585.135-.27 0-.539-.09-.749-.239-.27-.195-.464-.465-.659-.735-.27-.375-.539-.764-.854-1.109-.375-.404-.779-.764-1.258-1.034-.36-.21-.749-.375-1.169-.494-.375-.105-.764-.165-1.169-.165-.27 0-.539.03-.794.075-.375.075-.734.195-1.079.345-.404.195-.779.404-1.154.614-.225.135-.434.27-.644.404-.27.18-.539.345-.809.465-.255.105-.494.18-.734.225-.345.059-.674.074-.989.074-.27 0-.539-.015-.794-.045-.375-.045-.734-.135-1.079-.27-.375-.135-.734-.314-1.064-.524-.285-.18-.539-.404-.779-.614-.255-.24-.464-.465-.629-.675-.195-.24-.345-.48-.435-.704-.075-.18-.135-.375-.165-.555-.03-.18-.045-.36-.045-.524 0-.3.059-.585.18-.839.135-.3.345-.585.629-.824.27-.24.585-.465.944-.645.345-.18.704-.345 1.079-.464.285-.09.554-.15.794-.195.27-.045.494-.075.689-.09.404-.045.704-.104.944-.195.135-.045.255-.104.359-.18.105-.075.165-.18.195-.3.03-.135.045-.285.045-.465 0-.27-.075-.539-.209-.764-.165-.27-.375-.494-.614-.659-.27-.195-.569-.329-.869-.389-.18-.045-.36-.059-.539-.075-.27-.015-.539-.045-.809-.074-.404-.045-.764-.12-1.079-.24-.27-.09-.509-.224-.704-.374-.195-.165-.329-.36-.404-.57-.075-.21-.104-.435-.104-.675 0-.329.09-.644.255-.929.18-.3.419-.569.704-.779.27-.21.585-.375.914-.495.27-.09.554-.15.839-.18.285-.045.569-.059.854-.059.464 0 .929.045 1.363.15.375.075.734.209 1.079.389.329.165.629.39.884.644.255.255.464.555.585.885.075.18.135.375.165.554.03.18.045.36.045.539 0 .18-.015.345-.045.51-.03.18-.09.345-.165.495-.09.18-.225.345-.375.48-.165.135-.345.27-.555.36-.255.12-.539.195-.839.225-.18.015-.36.045-.539.059-.285.03-.554.06-.794.09-.285.045-.524.105-.719.165-.135.045-.255.105-.344.165-.105.075-.165.18-.195.3-.03.135-.045.285-.045.465z"/></svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Start Here — Free 30-minute AI audit */}
      <section className="py-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/40 dark:via-gray-950 dark:to-cyan-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-10 border border-blue-200 dark:border-blue-800 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-600/30">
                🎯 START HERE
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-4">
              Not sure what to build?<br />
              <span className="text-blue-600 dark:text-blue-400">Start with a free 30-min AI audit.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 text-lg">
              I listen to what you're trying to do, tell you honestly whether an AI app would help, and give you a rough cost estimate. No commitment, no pitch — even if the answer is "you don't need an app."
            </p>
            <Link
              to="/webdev#audit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-colors shadow-lg shadow-blue-600/25"
            >
              Book Free Audit →
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-gray-500 dark:text-gray-400">
              <span>⏱️ 30 minutes</span>
              <span>·</span>
              <span>💸 No commitment</span>
              <span>·</span>
              <span>🔒 NDA available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className={`py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-all duration-700 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 dark:text-gray-500 mb-6 uppercase tracking-wider">
            By the Numbers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-lg">👻</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">168.7K Snapchat Followers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-lg">📊</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">50M+ Monthly Views Generated</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-lg">🌐</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">9+ Platforms Managed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How My Business Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Three revenue streams. One mission: help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">AI Apps</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                AI-powered web apps for creators and small businesses — clip finders, content tools, workflow automation, niche SaaS.
              </p>
              <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
                Revenue: Project-based ($2,500-$15,000+) + retainers
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Social Media Marketing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                I help brands grow their audience and generate revenue through social media. Strategy, content, and execution.
              </p>
              <div className="text-xs font-medium text-purple-600 dark:text-purple-400">
                Revenue: Consulting + Retainer
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Flipping Business</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                I buy inventory from vendors and resell for profit. Video games, electronics, collectibles, and more.
              </p>
              <div className="text-xs font-medium text-orange-600 dark:text-orange-400">
                Revenue: Buy low, sell high
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trends & Why Now Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Now is the Time
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The market is shifting. Here's why you need to act now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI App Trends */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">🤖 AI App Trends</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-400">↑</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">AI-Assisted Development</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">AI tools are making developers 10x faster. I leverage them to deliver in 48 hours.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-400">↑</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">PWA Revolution</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Progressive Web Apps are replacing native apps. No App Store fees, instant updates.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-400">↑</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Conversion-Focused Design</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Pretty websites don't pay bills. Revenue-generating websites do.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SMMA Trends */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">📱 Social Media Trends</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-400">↑</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Short-Form Video Dominance</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">TikTok, Reels, Shorts. I pioneered this with podcast clips before it was mainstream.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-400">↑</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Facebook Resurgence</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">While others chased TikTok, I proved Facebook is the most stable platform. I was right.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-xs font-bold text-green-600 dark:text-green-400">↑</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Multi-Platform Strategy</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">One piece of content, every platform. I pioneered this approach at scale.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Opportunity */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">📊 Market Opportunity</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$15.7B</div>
                  <div className="text-sm text-blue-100">AI Apps & Automation Market</div>
                  <div className="text-xs text-blue-200">Growing 26% annually</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$15.4B</div>
                  <div className="text-sm text-blue-100">Social Media Marketing</div>
                  <div className="text-xs text-blue-200">Growing 12% annually</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$2.1B</div>
                  <div className="text-sm text-blue-100">Flipping/Resale Market</div>
                  <div className="text-xs text-blue-200">Growing 15% annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Results That Speak
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Real metrics from real projects. No vanity numbers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">314K+</div>
              <div className="text-blue-100 text-sm">Followers Built</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">50M+</div>
              <div className="text-blue-100 text-sm">Monthly Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">48hr</div>
              <div className="text-blue-100 text-sm">Fastest Build</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">28+</div>
              <div className="text-blue-100 text-sm">Websites Built</div>
            </div>
          </div>
          <p className="text-blue-100/70 text-xs text-center mt-4 max-w-2xl mx-auto">
            48-hour builds are my own solo projects (CurveRunner, PriceSpy, Cypress Flips) with no client feedback cycles. Client projects typically take longer due to revisions and approval rounds — see individual project timelines for details.
          </p>
        </div>
      </section>

      {/* Quick Win Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here's what I can do for you in the next 48 hours:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Landing Page</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                A professional landing page that converts visitors into customers. Mobile responsive, SEO optimized, ready to generate leads.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium text-sm">Ready in 24 hours</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Content Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                A 30-day content plan tailored to your brand. Platform-specific strategies, posting schedules, and content ideas that convert.
              </p>
              <div className="text-purple-600 dark:text-purple-400 font-medium text-sm">Ready in 48 hours</div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Inventory Quote</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Send me photos of what you want to sell. I'll give you a fair cash offer within 24 hours. No pressure, no obligation.
              </p>
              <div className="text-orange-600 dark:text-orange-400 font-medium text-sm">Quote in 24 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className={`py-20 bg-gray-50 dark:bg-gray-950 transition-all duration-700 delay-100 ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three ways I make you money. Pick your lane.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Story
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From Uber driver to platform captain. Here's the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl">
                  🚗
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">The Beginning</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Started as an Uber driver. Transitioned to delivery. Then discovered a fast-growing online business education community in October 2021, early enough to help shape it from the ground up.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">The Rise</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Built a social media growth engine generating 50M+ monthly views. Became Facebook & Snapchat captain. Recruited to a 5-person exclusive team working directly with senior brand leadership.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-2xl">
                  🚫
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">The Fall</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Banned from 4 platforms. Not for policy violations, but for being too effective. Lost 250K+ followers overnight.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-2xl">
                  💻
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">The Pivot</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Taught myself to code. Built PriceSpy in 48 hours. Built Cypress Flips in 48 hours. Built CurveRunner in 2 days (still in progress). Now combining marketing, sales, and development to build revenue machines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">By the Numbers</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Followers Built</span>
                    <span className="font-bold text-gray-900 dark:text-white">314,300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Monthly Views Generated</span>
                    <span className="font-bold text-gray-900 dark:text-white">50M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Platforms Dominated</span>
                    <span className="font-bold text-gray-900 dark:text-white">9+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fastest Build Time</span>
                    <span className="font-bold text-gray-900 dark:text-white">48 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Biggest Single Video</span>
                    <span className="font-bold text-gray-900 dark:text-white">20M Views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section 
        ref={aboutRef}
        className={`py-20 bg-gray-50 dark:bg-gray-950 transition-all duration-700 delay-200 ${
          aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Story Behind the Name
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I built a social media growth engine that generated 50 million views per month across 9+ platforms, then got banned from four of them, not for breaking any rules, but because the content was performing too well for the platforms' liking. Before that, I drove Uber. After that, I taught myself to code and built two production applications. Now I do all three: build, market, and sell.
                </p>
                <p>
                  Along the way, I became a platform captain inside a fast-growing digital education community, 
                  pioneered Facebook marketing when everyone else said it wouldn't work, and was recruited 
                  to an exclusive 5-person growth team working directly with senior brand leadership.
                </p>
                <p>
                  Now I'm combining everything I've learned, marketing, development, sales, 
                  and relentless work ethic, to help businesses grow and individuals succeed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-1">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        🎯
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Platform Captain</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Facebook & Snapchat</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        🚀
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Exclusive Marketing Team</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">5-Person Growth & Content Team</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        💻
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Full-Stack Developer</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">React, JavaScript, Python</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        🏍️
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Survivor</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">400ft flight, walked away</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Build Something They Can't Ignore.
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-4">
              Whether you need a website, social media strategy, or help liquidating inventory, 
              let's talk about how I can help you conquer your next challenge.
            </p>
            <p className="text-blue-200 text-sm">
              Not happy with the first draft? I keep working until you are. 100% satisfaction guaranteed.
            </p>
          </div>
          <ContactFormMini service="General Inquiry" />
        </div>
      </section>
    </div>
  );
}
