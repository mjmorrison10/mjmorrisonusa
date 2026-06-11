import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ContactFormMini from '../components/ContactFormMini';

const projects = [
  {
    title: 'CurveRunner',
    subtitle: 'Motorcycle Navigation PWA',
    icon: '🏍️',
    description: 'Motorcycle navigation PWA built for riders who love curves. Features GPS tracking, lean angle measurement, voice navigation, curvy route finding, cloud sync, ride replay, and installs as an app on iPhone without the App Store.',
    tech: ['JavaScript', 'PWA', 'Firebase', 'Leaflet', 'Service Workers'],
    liveUrl: 'https://mjmorrison10.github.io/CurveRunner/',
    githubUrl: 'https://github.com/mjmorrison10/CurveRunner',
    stats: ['PWA install on iPhone', 'GPS + lean tracking', 'Voice navigation'],
    badge: 'In Progress',
  },
  {
    title: 'PriceSpy',
    subtitle: 'Real-Time eBay Price Tool',
    icon: '💰',
    description: 'Real-time eBay price data, conditions, fees, liquidity, saturation, built for flippers. Features include Quick Deal analyzer, Watchlist, Inventory management, Lot Calculator, Bulk Price Check, and True ROI Calculator.',
    tech: ['Python', 'Flask', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://pricespy-yx00.onrender.com/',
    githubUrl: 'https://github.com/mjmorrison10/PriceSpy',
    stats: ['Real-time pricing', 'Multi-platform fees', 'Built in 48 hours'],
    badge: null,
  },
  {
    title: 'Cypress Flips',
    subtitle: 'E-Commerce Storefront',
    icon: '🛒',
    description: 'Professional storefront for a local flipping business. Features premium picks, category filtering, vendor intake system, and condition-first product listings.',
    tech: ['React', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://cypressflips.netlify.app/',
    githubUrl: 'https://github.com/mjmorrison10/cypress-flips',
    stats: ['Premium curation', 'Vendor system', 'Built in 48 hours'],
    badge: null,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'You tell me what you need. I ask the right questions to understand your business, audience, and goals.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Design & Build',
    description: 'I leverage AI-assisted development with my web dev knowledge to build fast. Simple sites in hours, complex apps in days.',
    icon: '⚡',
  },
  {
    step: '03',
    title: 'Deploy & Launch',
    description: 'Your site goes live. Hosted, optimized, and ready for customers. No waiting weeks for a developer.',
    icon: '🚀',
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Real applications, real problems solved. Built with modern tech stacks and deployed to production.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="order-1 lg:order-2 lg:-mt-4">
              <ProjectCard project={projects[0]} featured={true} />
            </div>
            <div className="order-2 lg:order-1 lg:mt-4">
              <ProjectCard project={projects[1]} />
            </div>
            <div className="order-3 lg:order-3 lg:mt-4">
              <ProjectCard project={projects[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How I Work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I combine my web development knowledge with AI-assisted tools to build websites faster than traditional developers. Simple sites in hours. Complex apps in days, not weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 h-full">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 dark:text-gray-600 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <span className="text-blue-600 dark:text-blue-400 font-medium">⏱️</span>
              <span className="text-gray-700 dark:text-gray-300">
                CurveRunner: 2 days and counting. PriceSpy: 48 hours. Cypress Flips: 48 hours.
              </span>
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
