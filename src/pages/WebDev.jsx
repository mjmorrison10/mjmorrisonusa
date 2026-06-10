import { useState } from 'react';
import ContactFormMini from '../components/ContactFormMini';

const projects = [
  {
    title: 'CurveRunner',
    description: 'Motorcycle navigation PWA built for riders who love curves. Features GPS tracking, lean angle measurement, voice navigation, curvy route finding, cloud sync, ride replay, and installs as an app on iPhone without the App Store.',
    tech: ['JavaScript', 'PWA', 'Firebase', 'Leaflet', 'Service Workers'],
    image: null,
    liveUrl: 'https://mjmorrison10.github.io/CurveRunner/',
    githubUrl: 'https://github.com/mjmorrison10/CurveRunner',
    featured: true,
    stats: ['PWA install on iPhone', 'GPS + lean tracking', 'Voice navigation'],
  },
  {
    title: 'PriceSpy',
    description: 'Real-time eBay price data, conditions, fees, liquidity, saturation, built for flippers. Features include Quick Deal analyzer, Watchlist, Inventory management, Lot Calculator, Bulk Price Check, and True ROI Calculator. Built in 48 hours using AI-assisted development.',
    tech: ['Python', 'Flask', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    image: null,
    liveUrl: 'https://pricespy-yx00.onrender.com/',
    githubUrl: 'https://github.com/mjmorrison10/PriceSpy',
    featured: true,
    stats: ['Real-time pricing', 'Multi-platform fees', 'Built in 48 hours'],
  },
  {
    title: 'Cypress Flips',
    description: 'Professional storefront for a local flipping business. Features premium picks, category filtering, vendor intake system, and condition-first product listings. Built in 48 hours. Now serves as the storefront for my flipping business.',
    tech: ['React', 'Tailwind CSS', 'Netlify'],
    image: null,
    liveUrl: 'https://cypressflips.netlify.app/',
    githubUrl: 'https://github.com/mjmorrison10/cypress-flips',
    featured: true,
    stats: ['Premium curation', 'Vendor system', 'Built in 48 hours'],
  },
];

const skills = ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Python', 'Git/GitHub', 'Responsive Design'];

const learningPath = [
  { year: '2021', title: 'Started Learning', description: 'Began with HTML, CSS, JavaScript fundamentals through Clever Programmer and Frontend Mentor' },
  { year: '2022', title: 'Built Projects', description: 'Created games, banking apps, MERN stack projects, and portfolio sites' },
  { year: '2023-24', title: 'Built Marketing Empire', description: 'Built marketing empire while maintaining development skills. Learned to ship fast under pressure.' },
  { year: '2025', title: 'Full-Stack Applications', description: 'Built PriceSpy and Cypress Flips, complex, production-ready applications' },
];

export default function WebDev() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              💻 Web Development
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              I Taught Myself to Code.
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Then I Built Tools That Make Me Money.
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From simple landing pages to complex full-stack applications, I build websites that work 
              as hard as you do. Self-taught, battle-tested, and always shipping.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Real applications, real problems solved. Built with modern tech stacks and deployed to production.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* #1 CurveRunner - Middle (Featured) - First on mobile */}
            <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:shadow-2xl shadow-lg shadow-blue-500/20 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{projects[1].title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {projects[1].tech.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/20 rounded text-xs text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs text-white font-medium">#2</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {projects[1].description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {projects[1].stats.map((stat, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                      ✓ {stat}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={projects[1].liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium text-center transition-colors">
                    View Live
                  </a>
                  <a href={projects[1].githubUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* #2 PriceSpy - Left - Second on mobile */}
            <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl lg:mt-8 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-white/30 rounded-full text-xs text-white font-bold">⭐ #1 FEATURED</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{projects[0].title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {projects[0].tech.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/20 rounded text-xs text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {projects[0].stats.map((stat, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm">
                      ✓ {stat}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={projects[0].liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium text-center transition-colors">
                    View Live
                  </a>
                  <a href={projects[0].githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* #3 Cypress Flips - Right - Third on mobile */}
            <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl lg:mt-8 order-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{projects[2].title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {projects[2].tech.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/20 rounded text-xs text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs text-white font-medium">#3</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {projects[2].description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {projects[2].stats.map((stat, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                      ✓ {stat}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={projects[2].liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium text-center transition-colors">
                    View Live
                  </a>
                  <a href={projects[2].githubUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What I Build With
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Technologies I work with daily to build modern web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="px-6 py-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 font-medium text-gray-900 dark:text-white">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            The Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-center">
            From "Hello World" to production applications.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2" />

            <div className="space-y-12">
              {learningPath.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.year}</span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Website That Converts?
            </h2>
            <p className="text-blue-100 mb-2 max-w-2xl mx-auto">
              Whether you need a landing page, e-commerce store, or a full-stack application, 
              I'll build it fast, clean, and ready to convert.
            </p>
            <p className="text-blue-200 text-sm">Currently accepting 2 clients per month</p>
          </div>
          <ContactFormMini service="Web Development" />
        </div>
      </section>
    </div>
  );
}
