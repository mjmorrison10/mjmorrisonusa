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
    screenshots: [
      'curverunner-welcome-desktop.webp',
      'curverunner-desktop.webp',
    ],
    caseStudy: {
      problem: 'Motorcycle riders wanted a navigation app that finds the curviest, most fun roads instead of the fastest route.',
      solution: 'Built a PWA with GPS tracking, lean angle measurement, voice navigation, and curvy route finding using Valhalla routing API.',
      result: 'Working app with 24 commits, installs as native app on iPhone, still adding features like pocket mode calibration and off-route detection.',
      time: '2 days (ongoing)',
    },
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
    screenshots: [],
    caseStudy: {
      problem: 'Flippers needed a tool to quickly analyze eBay listings, calculate fees across platforms, and determine if items were worth buying.',
      solution: 'Built a full-stack Python/Flask app with real-time eBay API integration, multi-platform fee calculators, and a Quick Deal analyzer.',
      result: 'Production tool used for inventory analysis. Features 8+ tools including bulk CSV import, watchlist, and true ROI calculator.',
      time: '48 hours',
    },
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
    screenshots: [
      'cypressflips-desktop.webp',
      'cypressflips-items-desktop.webp',
      'cypressflips-items2-desktop.webp',
    ],
    caseStudy: {
      problem: 'Needed a professional storefront for local flipping business with condition-first listings and vendor intake.',
      solution: 'Built a React app with premium picks, category filtering, vendor intake forms, and condition-first product pages.',
      result: 'Live storefront serving Cypress, CA area. 19+ listings with professional presentation and transparent pricing.',
      time: '48 hours',
    },
  },
];

const moreProjects = [
  { name: 'Timeless Vintage', slug: 'timeless-vintage', category: 'E-Commerce' },
  { name: 'The Bakery Buena Park', slug: 'the-bakery-buena-park', category: 'Restaurant' },
  { name: 'Starline Nails', slug: 'starline-nails', category: 'Beauty' },
  { name: 'Salon 360', slug: 'salon-360', category: 'Beauty' },
  { name: 'Quality Auto Care', slug: 'quality-auto-care', category: 'Automotive' },
  { name: "Mr. D's Automotive", slug: 'mr-ds-automotive', category: 'Automotive' },
  { name: 'Manon', slug: 'manon', category: 'Business' },
  { name: 'Les Auto Repair', slug: 'les-auto-repair', category: 'Automotive' },
  { name: 'HYD K Hair Salon', slug: 'hyd-k-hair-salon', category: 'Beauty' },
  { name: "French's Pastry Bakery", slug: 'frenchs-pastry-bakery', category: 'Restaurant' },
  { name: 'Fish and Chips Downey', slug: 'fish-and-chips-downey', category: 'Restaurant' },
  { name: 'Euro Cleaning', slug: 'euro-cleaning', category: 'Services' },
  { name: 'Costco Business Center', slug: 'costco-business-center', category: 'Retail' },
  { name: 'Chris the Mobile Mechanic', slug: 'chris-the-mobile-mechanic', category: 'Automotive' },
  { name: 'Chopd', slug: 'chopd', category: 'Restaurant' },
  { name: 'Cal State Auto Center', slug: 'cal-state-auto-center', category: 'Automotive' },
  { name: 'Bag of Cakes', slug: 'bag-of-cakes', category: 'Restaurant' },
  { name: 'Antique Station', slug: 'antique-station', category: 'Retail' },
  { name: 'Antique Depot', slug: 'antique-depot', category: 'Retail' },
  { name: 'AEN Mobile Mechanic', slug: 'aen-mobile-mechanic', category: 'Automotive' },
  { name: "Dora's Cleaning Services", slug: 'doras-cleaning-services', category: 'Services' },
  { name: 'CT Auto Repair', slug: 'ct-auto-repair', category: 'Automotive' },
  { name: 'Big Q Auto Repair', slug: 'big-q-auto-repair', category: 'Automotive' },
  { name: 'Belmont Auto Repair', slug: 'belmont-auto-repair', category: 'Automotive' },
  { name: 'Long Beach 76 Auto Repair', slug: 'long-beach-76-auto-repair', category: 'Automotive' },
];

const processSteps = [
  {
    step: '01',
    title: 'Understand Your Revenue',
    description: "Before I write a single line of code, I learn how you make money. Who buys from you? Why do they buy? What makes them click \"Buy Now\" instead of clicking away? This is where most developers fail. They build pretty websites. I build money machines.",
    icon: '🎯',
  },
  {
    step: '02',
    title: 'Build the Asset',
    description: 'I combine my web development skills with sales copywriting, audience psychology, and conversion strategy learned from generating 50M+ monthly views. Every button, every headline, every section is designed to turn visitors into customers.',
    icon: '⚡',
  },
  {
    step: '03',
    title: 'Launch and Optimize',
    description: 'Your site goes live, but that is not the finish line. I help you understand what is working, what needs improvement, and how to scale. A website is not a brochure. It is your best salesperson, working 24/7.',
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

const faqItems = [
  {
    question: 'How much does it cost?',
    answer: 'It depends on the complexity. A simple landing page starts at $500. A full-stack application like PriceSpy or CurveRunner starts at $2,000. I provide a detailed quote after understanding your needs.',
  },
  {
    question: 'How long does it take?',
    answer: 'Simple sites: 24-48 hours. Complex applications: 2-7 days. I use AI-assisted development to build faster than traditional developers without sacrificing quality.',
  },
  {
    question: 'What do I get?',
    answer: 'A fully responsive, mobile-optimized website hosted and deployed. Plus, I include a 30-day support period for any bugs or minor changes.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. After the 30-day period, I offer monthly maintenance packages starting at $100/month for updates, security patches, and minor content changes.',
  },
  {
    question: 'What if I don\'t like it?',
    answer: 'If you\'re not happy with the first draft, I keep working until you are. 100% satisfaction guaranteed. I don\'t stop until you love it.',
  },
];

export default function WebDev() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

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
              I don't just build websites, I build revenue machines. Combining web development with 
              sales psychology, conversion copywriting, and marketing strategy. Self-taught, 
              battle-tested, and built to make you money.
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
              Any developer can build a website. I build revenue machines. I combine web development with sales psychology, conversion copywriting, and marketing strategy to create websites that don't just look good, they make you money.
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
                CurveRunner: 2 days. PriceSpy: 48 hours. Cypress Flips: 48 hours. How fast can I deliver YOUR project?
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What I Build With
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Technologies I work with daily to build modern web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="px-6 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-800 font-medium text-gray-900 dark:text-white">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            The Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-center">
            From "Hello World" to production applications.
          </p>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2" />

            <div className="space-y-12">
              {learningPath.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know before we work together.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
                  <svg className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white dark:bg-gray-900">
                    <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects - Hidden Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="flex items-center gap-2 mx-auto text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm"
          >
            <span>{showMoreProjects ? 'Hide' : 'Show'} all projects</span>
            <svg className={`w-4 h-4 transform transition-transform ${showMoreProjects ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showMoreProjects && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {moreProjects.map((project, index) => (
                <a
                  key={index}
                  href={`https://mjmorrison10.github.io/${project.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all text-center"
                >
                  <div className="text-xs font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                    {project.name}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {project.category}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Turn Your Website Into a Revenue Machine?
            </h2>
            <p className="text-blue-100 mb-2 max-w-2xl mx-auto">
              Most developers build websites. I build assets that pay you every month. 
              Let's talk about how I can increase your revenue.
            </p>
            <p className="text-blue-200 text-sm">Currently accepting 2 clients per month</p>
          </div>
          <ContactFormMini service="Web Development" />
        </div>
      </section>
    </div>
  );
}
