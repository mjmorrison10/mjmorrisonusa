import { Link } from 'react-router-dom';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies. From landing pages to full-stack applications.',
    link: '/webdev',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Proven track record of building audiences and driving engagement across all major platforms.',
    link: '/smma',
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: '🔄',
    title: 'Flipping & Liquidation',
    description: 'Helping vendors turn inventory into cash. Specializing in electronics, gaming, and collectibles.',
    link: '/flipping',
    color: 'from-orange-600 to-yellow-500',
  },
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50M+', label: 'Monthly Views Generated' },
  { value: '350K+', label: 'Followers Built' },
  { value: '∞', label: 'Problems Solved' },
];

export default function Home() {
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
          {/* Subtle heritage badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-8">
            <span className="text-xs text-gray-500 dark:text-gray-400">🏴󠁧󠁢󠁳󠁣󠁴󠁿 🇮🇹 🇵🇭</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Cypress, CA</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-gray-900 dark:text-white">Michael Morrison</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Conqueror of Life
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Whatever you need, I can get it done. Web development, social media marketing, 
            inventory liquidation — if you can describe it, I can build it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/webdev"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              View My Work
            </Link>
            <a
              href="mailto:mjmorrisonusa@gmail.com"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              Get In Touch
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

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three core services, one mission: help businesses and individuals succeed.
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

      {/* About Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Story Behind the Name
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I started as a rideshare driver, transitioned into delivery, then taught myself 
                  web development while building a social media empire that generated 50M+ monthly views.
                </p>
                <p>
                  Along the way, I became a platform captain in The Real World university, 
                  pioneered Facebook marketing when experts said it wouldn't work, and was recruited 
                  to an exclusive 5-person team working directly with one of the most recognized 
                  figures on the internet.
                </p>
                <p>
                  Now I'm combining everything I've learned — marketing, development, sales, 
                  and relentless work ethic — to help businesses grow and individuals succeed.
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
                        <div className="text-sm text-gray-500 dark:text-gray-400">5-Person Fireblood/DNG Squad</div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need a website, social media strategy, or help liquidating inventory — 
            let's talk about how I can help you conquer your next challenge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:mjmorrisonusa@gmail.com"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/mjmorrisonusa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-400 transition-colors border border-blue-400"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
