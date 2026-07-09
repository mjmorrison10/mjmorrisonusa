import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ContactFormMini from '../components/ContactFormMini';

const projects = [
  {
    title: 'RECALL',
    subtitle: 'AI-powered clip-memory for creators',
    icon: '🔍',
    description: 'PWA that turns podcast and interview transcripts into a searchable memory layer for short-form creators. Drop in transcripts (paste or upload audio for Gemini-powered transcription), search any phrase, get every moment it appears across every source with exact timecodes. Stack moments into a clip concept, export a shot list, go cut.',
    tech: ['Vanilla JS', 'PWA', 'Gemini 1.5 Flash', 'localStorage', 'Service Workers', 'AI transcription'],
    liveUrl: 'https://mjmorrison10.github.io/recall/',
    githubUrl: 'https://github.com/mjmorrison10/recall',
    stats: ['AI transcription built in', 'Installs on iPhone', 'Works offline', 'Free tool / email capture'],
    badge: 'AI · Just shipped',
    screenshots: [],
    caseStudy: {
      problem: 'Short-form creators consume 10+ hours of long-form content per week and lose track of the best lines. Existing tools like Filmot have frozen transcript indexes (no new content since YouTube anti-crawling in 2024) and no private library.',
      solution: 'Single-file PWA (later split into HTML + CSS + JS) with client-side state in localStorage. BYO Gemini API key model — no backend. Prompt-engineered Gemini to output [HH:MM:SS] lines that feed the existing parser. Ships as installable iPhone PWA.',
      result: 'Working product with 11 clean commits. ~$0.009/hour of audio transcribed. Zero server costs. Live demo at github.io/recall with email capture for lead-gen.',
      time: 'Single session, 11 commits',
    },
  },
  {
    title: 'CurveRunner',
    subtitle: 'Motorcycle Navigation PWA',
    icon: '🏍️',
    description: 'Motorcycle navigation PWA built for riders who love curves. GPS tracking, lean angle measurement, voice navigation, curvy route finding, cloud sync, ride replay. Installs as an app on iPhone without the App Store.',
    tech: ['JavaScript', 'PWA', 'Firebase', 'Leaflet', 'Service Workers'],
    liveUrl: 'https://mjmorrison10.github.io/CurveRunner/',
    githubUrl: 'https://github.com/mjmorrison10/CurveRunner',
    stats: ['PWA install on iPhone', 'GPS + lean tracking', 'Voice navigation'],
    badge: 'In Progress',
    screenshots: [],
    caseStudy: {
      problem: 'Riders wanted navigation that finds the curviest roads, not the fastest.',
      solution: 'GPS tracking, lean angle measurement, voice navigation, curvy route finding using Valhalla routing API.',
      result: '24 commits, installs as native app on iPhone.',
      time: '2 days (ongoing)',
    },
  },
  {
    title: 'PriceSpy',
    subtitle: 'Real-time eBay pricing tool',
    icon: '💰',
    description: 'Real-time eBay price data, conditions, fees, liquidity, saturation — built for flippers. Quick Deal analyzer, Watchlist, Inventory, Lot Calculator, Bulk Price Check, True ROI Calculator.',
    tech: ['Python', 'Flask', 'Firebase', 'JavaScript'],
    liveUrl: 'https://pricespy-yx00.onrender.com/',
    githubUrl: 'https://github.com/mjmorrison10/PriceSpy',
    stats: ['Real-time pricing', 'Multi-platform fees', 'Built in 48 hours'],
    badge: null,
    screenshots: [],
    caseStudy: {
      problem: 'Flippers needed fast analysis of eBay listings, fees, and ROI.',
      solution: 'Python/Flask app with real-time eBay API, multi-platform fee calculators, Quick Deal analyzer.',
      result: 'Production tool with 8+ tools including bulk CSV import, watchlist, true ROI.',
      time: '48 hours',
    },
  },
  {
    title: 'Cypress Flips',
    subtitle: 'E-commerce storefront',
    icon: '🛒',
    description: 'Professional storefront for a local flipping business. Premium picks, category filtering, vendor intake system, condition-first product listings.',
    tech: ['React', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://cypressflips.netlify.app/',
    githubUrl: 'https://github.com/mjmorrison10/cypress-flips',
    stats: ['Premium curation', 'Vendor system', 'Built in 48 hours'],
    badge: null,
    screenshots: [],
    caseStudy: {
      problem: 'Local flipping business needed professional storefront with condition-first listings.',
      solution: 'React app with premium picks, category filtering, vendor intake forms, condition-first product pages.',
      result: 'Live storefront serving Cypress, CA. 19+ listings with transparent pricing.',
      time: '48 hours',
    },
  },
];

const whatIBuild = [
  {
    icon: '🧠',
    title: 'AI-powered web apps',
    body: 'Full web apps with AI features built in — transcription, search, generation, classification, recommendation. Built for client-side privacy + BYO-key model where possible.',
  },
  {
    icon: '⚙️',
    title: 'AI automation tools',
    body: 'Workflow tools that replace repetitive manual work — clip-finding, lead enrichment, content scoring, transcript search. Built to slot into how you already work.',
  },
  {
    icon: '🎯',
    title: 'Niche-specific apps',
    body: 'Apps built for a particular industry or workflow that general tools don\'t serve well. I pick use cases from creator and personal-development-brand pain points and ship working tools.',
  },
  {
    icon: '🔁',
    title: 'Recurring-revenue SaaS',
    body: 'Subscription web apps with monthly billing, user accounts, and a real product surface — not just a single landing page. Built for ongoing operation, not one-shot delivery.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Identify the workflow',
    body: 'You tell me what\'s eating your time. I listen — no pitch, no scope creep. We agree on what the first version should and shouldn\'t do.',
    icon: '🎯',
    duration: '~1 day',
  },
  {
    step: '02',
    title: 'Design the AI solution',
    body: 'I sketch the simplest version that solves the problem. BYO-API-key model when it makes sense (privacy, lower cost). Otherwise managed backend.',
    icon: '✏️',
    duration: '1-2 days',
  },
  {
    step: '03',
    title: 'Build the MVP',
    body: 'Single working version, deployable to your domain or mine. Real auth, real data, real UI — not a prototype. You see progress daily.',
    icon: '⚡',
    duration: '1-3 weeks',
  },
  {
    step: '04',
    title: 'Deploy + iterate',
    body: 'Live in production. Optional monthly retainer for new features, bug fixes, AI model swaps, and scaling. You own all the code and data.',
    icon: '🚀',
    duration: 'Ongoing',
  },
];

const pricingTiers = [
  {
    name: 'AI Tool / Feature',
    price: 'Starts at $2,500',
    description: 'Single-purpose AI tool or feature that plugs into your existing workflow.',
    examples: [
      'AI transcript search for your content library',
      'AI-powered clip finder for long-form video',
      'Auto-tagging or categorization tool',
      'Client-onboarding AI assistant for coaching programs',
    ],
    timeline: '~1 week',
    popular: false,
    cta: 'Get a quote',
    roi: 'Pays for itself when it saves you 5+ hours/week — most clients see payback within 60 days.',
    payment: '50% deposit, 50% on delivery. Monthly installments available on request.',
  },
  {
    name: 'AI-Powered Web App',
    price: 'Starts at $7,500',
    description: 'Full web app with AI features. Includes auth, data persistence, and a real product surface.',
    examples: [
      'RECALL-style clip-memory tool',
      'Custom AI dashboard for your business',
      'Membership/community platform for a coaching brand',
      'Client-facing AI feature for your customers',
    ],
    timeline: '2-4 weeks',
    popular: true,
    cta: 'Build an app',
    roi: 'Pays for itself when it replaces a $200-500/mo SaaS subscription OR when it generates measurable time savings across your team.',
    payment: '50% deposit, 25% at MVP delivery, 25% at final delivery. Monthly installments available.',
  },
  {
    name: 'Custom AI Platform',
    price: 'Starts at $15,000',
    description: 'Multi-feature AI platform with auth, billing, admin dashboard, and ongoing iteration support.',
    examples: [
      'Full SaaS product with subscription billing',
      'Multi-tenant AI automation suite',
      'Industry-specific AI tool you can sell to others',
    ],
    timeline: '4-8 weeks',
    popular: false,
    cta: 'Plan a platform',
    roi: 'Pays for itself when it generates recurring revenue, replaces enterprise SaaS spend ($1k+/mo), or unlocks a new business line.',
    payment: '33% deposit, 33% at MVP, 34% at launch. Monthly installments available.',
  },
];

const faqItems = [
  {
    question: 'Not sure what to build — can we just talk first?',
    answer: 'Yes. Free 30-minute call. I listen to what you\'re trying to do, tell you honestly whether an AI app would help, and give you a rough cost estimate. No commitment. If it\'s not a fit, I\'ll point you somewhere that is.',
  },
  {
    question: 'Can I pay in milestones instead of all upfront?',
    answer: 'Yes. Standard schedule is 50% deposit, 50% on delivery. Larger builds can be 33/33/34 across three milestones. Monthly installments available on request for builds $5k+. I keep your deposit refundable until week 2 if it turns out we\'re not a fit.',
  },
  {
    question: 'What if I don\'t like what you build?',
    answer: 'I iterate until you\'re happy. Two revision rounds are included in every project; more if needed. You own everything from day one, so even in the worst case you keep a working MVP and the option to hand it off to someone else.',
  },
  {
    question: 'How is this different from hiring a dev agency?',
    answer: 'Speed, cost, and AI fluency. Agencies charge $150-300/hr with project minimums of $15-30k and timelines of 2-6 months. I ship in days-to-weeks for $2.5-15k. I also pick AI models and prompt-engineer them — most agencies treat AI as a checkbox feature, not the core capability.',
  },
  {
    question: 'What AI models do you use?',
    answer: 'Google Gemini (1.5 Flash / Pro), OpenAI GPT-4 family, Claude, Whisper for transcription, plus specialized models when the use case calls for it. I pick the cheapest model that does the job — Gemini Flash for most things, GPT-4 only when reasoning matters.',
  },
  {
    question: 'Do I own the code?',
    answer: 'Yes. 100%. All code, all data, all infrastructure. I can hand off the repo, the deployment, and any accounts on day one of the project. You\'re not locked into me — and that\'s the point.',
  },
  {
    question: 'Can it run on my own domain?',
    answer: 'Yes. I deploy to your domain, GitHub, Vercel, Netlify, Render, or your own VPS — whatever you prefer. For AI apps that need a backend, I recommend Render or Vercel for zero-ops hosting.',
  },
  {
    question: 'What about ongoing maintenance?',
    answer: 'Optional monthly retainer: $500-$2,000/mo depending on app complexity. Covers bug fixes, AI model swaps, scaling, new features. You can also pay-as-you-go for changes — no forced retainer.',
  },
  {
    question: 'How do you handle AI costs?',
    answer: 'BYO API key model whenever possible (you own the key, pay Gemini/OpenAI directly — I never see your bill). For managed apps, costs are passed through at cost — no markup. Typical: ~$0.009 per hour of audio transcribed, ~$0.01-0.05 per AI search query.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes. Standard mutual NDA before any technical discussion of your business. Your ideas, your data, your workflow stays yours.',
  },
];

const techStack = [
  { name: 'AI', items: 'Gemini · GPT-4 · Claude · Whisper' },
  { name: 'Frontend', items: 'Vanilla JS · React · Tailwind · PWA' },
  { name: 'Backend', items: 'Node.js · Python · Firebase · Vercel' },
  { name: 'Data', items: 'Postgres · SQLite · localStorage · Firebase' },
];

export default function WebDev() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            🤖 AI Apps for Business
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            AI web apps that solve{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              real business problems.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            I build AI-powered web apps for coaches, podcasters, and creators in the personal-development space — clip finders, content tools, workflow automation, niche SaaS. Production-ready in days, not months. You own the code. No lock-in.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/25"
            >
              Tell me what app would change your business →
            </Link>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors border border-gray-200 dark:border-gray-700"
            >
              See what I've built ↓
            </button>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I build
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Four shapes of work. Each starts with "what's eating your time" and ends with a working app you own.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whatIBuild.map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real apps, shipped to production. Each one solves a specific problem and runs on real users.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="lg:col-span-2 lg:max-w-2xl lg:mx-auto">
              <ProjectCard project={projects[0]} featured={true} />
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                RECALL is one third of my creator ops stack —{' '}
                <Link to="/hooklab" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">HOOKLAB</Link>
                {' '}underwrites the open,{' '}
                <Link to="/blast" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">BLAST</Link>
                {' '}gets it out the door.{' '}
                <Link to="/products" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">See the stack →</Link>
              </p>
            </div>
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How I work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Same process I used to ship RECALL in a single session. Fast feedback, working software, no endless meetings.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                    <span className="flex-shrink-0 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit CTA — before pricing */}
      <section id="audit" className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800 shadow-lg text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4">
              🎯 START HERE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Not sure what AI app would change your business?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-5">
              Book a free 30-minute call. I listen to what you're trying to do, tell you honestly whether an AI app would help, and give you a rough cost estimate. No commitment, no pitch.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/25">
              Book Free Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pricing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three tiers. Pick what fits. Custom quotes for anything outside the box. All prices include milestone-based payment — never pay everything upfront.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-7 border-2 transition-colors relative ${
                  tier.popular
                    ? 'border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                    ⭐ MOST COMMON
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{tier.price}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tier.description}</p>
                <div className="mb-4">
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Example builds</div>
                  <ul className="space-y-2">
                    {tier.examples.map((ex, j) => (
                      <li key={j} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">▸</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider mb-1">💰 Pays for itself when</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tier.roi}</p>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-5 space-y-1">
                  <div>⏱️ Timeline: {tier.timeline}</div>
                  <div>💳 {tier.payment}</div>
                </div>
                <Link
                  to="/contact"
                  className={`block text-center px-5 py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Plus optional monthly retainers ($500-$2,000/mo) for ongoing iteration, AI model swaps, and scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Stack I work in</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Picked for speed, cost, and shipping — not resume padding.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((cat, i) => (
              <div key={i} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">{cat.name}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 font-mono">{cat.items}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Common questions</h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tell me what app would change your business.
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-4">
              I respond within 24 hours. NDA before any technical talk about your business — your workflow stays yours.
            </p>
            <p className="text-blue-200 text-sm">
              Or try <a href="https://mjmorrison10.github.io/recall/" target="_blank" rel="noopener" className="underline font-semibold">RECALL</a> first to see what an AI web app looks like in production.
            </p>
          </div>
          <ContactFormMini service="AI App Build" />
        </div>
      </section>
    </div>
  );
}
