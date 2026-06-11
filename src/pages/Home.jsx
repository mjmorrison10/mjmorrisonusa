import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ContactFormMini from '../components/ContactFormMini';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'I build websites that make you money while you sleep. Revenue-focused, conversion-optimized, ready in 48 hours.',
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
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();

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
            <img 
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
              Conqueror of Life
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
              Work With Me
            </Link>
            <Link
              to="/webdev"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            >
              View My Work
            </Link>
          </div>

          {/* Urgency */}
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Currently accepting 2 web dev clients per month | Limited inventory, check Cypress Flips daily
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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
            Featured On
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a 
              href="https://rumble.com/v2t456y-marketing-success-michael-the-real-world-interview-172.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
            >
              <span className="text-lg">🎬</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">The Real World University</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-lg">👻</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">168.7K Snapchat Followers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span className="text-lg">📊</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">50M+ Monthly Views Generated</span>
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

      {/* About Preview */}
      <section 
        ref={aboutRef}
        className={`py-20 bg-white dark:bg-gray-900 transition-all duration-700 delay-200 ${
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
                  I built a social media empire that generated 50 million views per month, then got banned from four platforms for being too effective. Before that, I drove Uber. After that, I taught myself to code and built two production applications. Now I do all three: build, market, and sell.
                </p>
                <p>
                  Along the way, I became a platform captain in The Real World university, 
                  pioneered Facebook marketing when experts said it wouldn't work, and was recruited 
                  to an exclusive 5-person team working directly with one of the most recognized 
                  figures on the internet.
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

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className={`py-20 bg-gray-50 dark:bg-gray-950 transition-all duration-700 delay-300 ${
          testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What People Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real feedback from real people who've worked with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 - Luc Tate */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic text-lg">
                "Ask <span className="text-gray-900 dark:text-white font-semibold not-italic">Michael</span> about Snapchat and Facebook."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={import.meta.env.BASE_URL + 'luc.jpg'} 
                  alt="Luc Tate"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Luc Tate</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Professor, The Real World University</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Tatoo */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                Student: "Who knows FB or SC?"
              </p>
              <p className="text-gray-900 dark:text-white mb-6 font-semibold text-lg">
                "Michael."
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={import.meta.env.BASE_URL + 'tatoo.jpg'} 
                  alt="Tatoo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Tatoo</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Instagram Captain, The Real World University</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Interview */}
          <div className="mt-12 text-center">
            <a 
              href="https://rumble.com/v2t456y-marketing-success-michael-the-real-world-interview-172.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
            >
              🎬 Watch My Interview on The Real World
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
