import { Link } from 'react-router-dom';
import ProductStack from '../components/ProductStack';
import EmailCapture from '../components/EmailCapture';

// Live app URLs (open in a new tab). BLAST has no public URL yet — it routes to
// the internal waitlist page instead.
const RECALL_URL = 'https://mjmorrison10.github.io/recall/';
const HOOKLAB_URL = 'https://mjmorrison10.github.io/Hooklabs/';
const PULSE_URL = 'https://mjmorrison10.github.io/blast/pulse/';

// The end-to-end workflow, grounded in the real editing loop: download a
// podcast, export audio, transcribe, mine hooks, underwrite the open, ship,
// then feed outcomes back so the next pass is smarter. Each step carries the
// accent color of the tool it belongs to (RECALL cyan, HOOKLAB purple, BLAST
// orange; prep steps are neutral).
const phases = [
  {
    key: 'prep',
    label: 'Prep',
    tool: null,
    badge: 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200',
    ring: 'border-gray-200 dark:border-gray-700',
    steps: [
      {
        icon: '⬇️',
        title: 'Download the podcast or interview',
        body: 'Start from the full-length video you want to cut — the raw episode, before any edits.',
      },
      {
        icon: '🎧',
        title: 'Export an audio-only version',
        body: 'Drop the video into Premiere or CapCut and export audio only (mp3 / m4a / wav). Audio-only is the fastest thing to transcribe, and it is all RECALL needs to find your moments.',
      },
    ],
  },
  {
    key: 'recall',
    label: 'RECALL — find the moments',
    tool: { name: 'RECALL', href: RECALL_URL, cta: 'Open RECALL ↗' },
    badge: 'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300',
    ring: 'border-cyan-200 dark:border-cyan-800',
    steps: [
      {
        icon: '📝',
        title: 'Get a timecoded transcript',
        body: 'Two ways in. In-app: upload the audio and RECALL transcribes it with your own Gemini key. Manual: run the audio through a transcriber like TurboScribe and paste the text — RECALL reads TurboScribe’s "(0:04 - 0:23)" range format directly and splits long paragraphs into sentence-level moments so nothing gets buried.',
      },
      {
        icon: '✨',
        title: 'Run Top Clips',
        body: 'RECALL scans your whole library for lines that match proven hook patterns — and any winners you’ve logged in HOOKLAB — then ranks them with a visible proof trail. No fake virality scores; just evidence.',
      },
    ],
  },
  {
    key: 'hooklab',
    label: 'HOOKLAB — underwrite the open',
    tool: { name: 'HOOKLAB', href: HOOKLAB_URL, cta: 'Open HOOKLAB ↗' },
    badge: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
    ring: 'border-purple-200 dark:border-purple-800',
    steps: [
      {
        icon: '🎯',
        title: 'Pick the hook with a proof trail',
        body: 'Take the candidate into HOOKLAB. It ranks openers by evidence — your own proven winners first, then market comps, then pattern strength — so you commit to a line that has backing, not a hunch.',
      },
      {
        icon: '✂️',
        title: 'Edit the clip around that hook',
        body: 'The hook doesn’t have to be the literal first thing said in the source — move it to the front when you cut. Even better, place your strongest line at the very end so the clip loops seamlessly back into its own start; done right, that pushes watch time past 100%.',
      },
      {
        icon: '🏆',
        title: 'Log the outcome in your ledger',
        body: 'After it posts, mark the winners in your HOOKLAB ledger. That personal proof is exactly what RECALL reads back for ledger-proven matches next time — so open HOOKLAB on the same device to keep the loop closed.',
      },
    ],
  },
  {
    key: 'blast',
    label: 'BLAST — ship it everywhere',
    tool: { name: 'BLAST', href: '/blast', internal: true, cta: 'BLAST waitlist' },
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
    ring: 'border-orange-200 dark:border-orange-800',
    steps: [
      {
        icon: '⚡',
        title: 'Post once, everywhere',
        body: 'Hand the caption to BLAST, adapt it per platform, and track exactly where the clip has — and hasn’t — gone across every platform. One posting session, fully accounted for.',
      },
    ],
  },
  {
    key: 'pulse',
    label: 'PULSE — close the loop',
    tool: { name: 'PULSE', href: PULSE_URL, cta: 'Open PULSE ↗' },
    badge: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300',
    ring: 'border-pink-200 dark:border-pink-800',
    steps: [
      {
        icon: '📈',
        title: 'Track the velocity, not just the total',
        body: 'PULSE imports what you posted from BLAST and checks in at 1h, 2h, and 6h. YouTube updates itself; everything else is a two-second manual log. The slope in the first two hours is the signal.',
      },
      {
        icon: '🔁',
        title: 'Log the winner back to HOOKLAB',
        body: 'Mark each clip Winner, Meh, or Dead and PULSE writes it into your HOOKLAB ledger. Now the next scout in RECALL and the next hook you underwrite are backed by what actually worked, not a hunch. The loop is closed.',
      },
    ],
  },
];

export default function Workflow() {
  // Continuous step number across phases, computed purely (no render-time
  // mutation): sum of steps in all preceding phases + this step's index.
  const numberOf = (phaseIdx, stepIdx) =>
    phases.slice(0, phaseIdx).reduce((sum, p) => sum + p.steps.length, 0) + stepIdx + 1;

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 mb-6">
            🎬 THE CREATOR WORKFLOW
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.05]">
            One clip, start to finish with{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              RECALL → HOOKLAB → BLAST → PULSE
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            The exact loop for turning a long-form podcast into short-form clips that open strong and post everywhere.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find the moment, underwrite the hook with evidence, ship it across every platform — then feed the results back so the next pass is smarter.
          </p>
        </div>
      </section>

      {/* The stack */}
      <ProductStack />

      {/* Step-by-step */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The workflow, step by step</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Five phases, one continuous loop — not four disconnected apps.
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, phaseIdx) => (
              <div key={phase.key}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${phase.badge}`}>
                    {phase.label}
                  </span>
                  {phase.tool && (
                    phase.tool.internal ? (
                      <Link to={phase.tool.href} className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        {phase.tool.cta}
                      </Link>
                    ) : (
                      <a href={phase.tool.href} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        {phase.tool.cta}
                      </a>
                    )
                  )}
                </div>

                <div className="space-y-4">
                  {phase.steps.map((step, stepIdx) => (
                      <div key={step.title} className={`flex items-start gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border ${phase.ring}`}>
                        <div className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-200">
                          {numberOf(phaseIdx, stepIdx)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                            <span className="mr-2" aria-hidden="true">{step.icon}</span>
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.body}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* The loop closes */}
          <div className="mt-12 rounded-2xl p-6 bg-gradient-to-br from-cyan-50 via-purple-50 to-orange-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">🔁 The loop closes</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Every winner you log in HOOKLAB becomes ledger-proof that RECALL reads back on your next Top Clips pass. The more you ship, the more the whole stack ranks by <em>your</em> evidence — not generic patterns.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
              And because all four run in the same browser, one API key works across the whole stack, and a single backup file saves everything — RECALL library included — to restore anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-purple-600 to-orange-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Run the loop yourself.
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8 text-lg">
            RECALL and HOOKLAB are free and live. BLAST is opening access now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/recall" className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Start with RECALL — Free →
            </Link>
            <Link to="/hooklab" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              HOOKLAB — Free
            </Link>
            <Link to="/blast" className="px-6 py-3 bg-black/20 backdrop-blur text-white rounded-xl font-bold border border-white/20 hover:bg-black/30 transition-colors">
              BLAST waitlist
            </Link>
          </div>

          <div className="max-w-xl mx-auto mt-12 bg-black/20 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="text-center mb-4">
              <h3 className="text-white text-lg font-bold mb-1">Get the whole stack in one email</h3>
              <p className="text-white/70 text-sm">All four apps, plus the weekly numbers as I rebuild my own audience from zero using them. No spam.</p>
            </div>
            <EmailCapture
              source="workflow-cta"
              buttonLabel="Send me the stack →"
              successTitle="You're in."
              successBody="Check your inbox. The whole stack is free and live, and the weekly rebuild numbers are on the way."
              accent="cyan"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
