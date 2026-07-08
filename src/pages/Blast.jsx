import EmailCapture from '../components/EmailCapture';

const benefits = [
  {
    icon: '⚡',
    title: 'One upload, every platform',
    body: 'Drop in your clip once. BLAST formats it for YouTube Shorts, TikTok, Instagram Reels, and Snapchat Spotlight — no re-exporting per platform.',
  },
  {
    icon: '🔁',
    title: 'Picks up where RECALL leaves off',
    body: 'Find the moment in RECALL, export it, hand it to BLAST. The two tools are built to work together — memory layer, then distribution layer.',
  },
  {
    icon: '✍️',
    title: 'Caption once, adapt per platform',
    body: 'Write your caption and hashtags once. BLAST adapts formatting per platform\'s conventions instead of you copy-pasting four times.',
  },
  {
    icon: '⏱️',
    title: 'Get the 20-40 minutes back',
    body: 'Manual reformatting and re-uploading across platforms is the single biggest time-sink after the edit is done. BLAST is built to kill exactly that step.',
  },
];

const proof = [
  { value: '1', label: 'upload, not four' },
  { value: 'Built for', label: 'coaches & creators' },
  { value: 'Pairs with', label: 'RECALL' },
  { value: 'Early access', label: 'waitlist open now' },
];

export default function Blast() {
  return (
    <div className="relative">
      {/* HERO — value prop + waitlist form above the fold */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold mb-5">
              🛠️ IN DEVELOPMENT · BUILT BY MICHAEL MORRISON
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.05]">
              Cut once.{' '}
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Post everywhere.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              BLAST takes the clip you just found and gets it formatted and posted across every platform your audience is on.{' '}
              <strong>No more re-uploading the same clip four times.</strong>
            </p>

            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              The natural next step after <a href="#/recall" className="text-orange-600 dark:text-orange-400 hover:underline font-medium">RECALL</a> — built for the same coaches, podcasters, and personal-development creators who don't want the moment they just found to sit in a folder.
            </p>
          </div>

          {/* Waitlist form, prominent above the fold */}
          <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-orange-500/10 border border-gray-700">
            <div className="text-center mb-5">
              <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">Early Access</div>
              <h2 className="text-white text-2xl font-bold mb-1">Join the waitlist</h2>
              <p className="text-white/70 text-sm">Drop your email. I'll reach out personally when BLAST is ready to test.</p>
            </div>
            <EmailCapture
              source="blast-hero"
              buttonLabel="Join the waitlist →"
              successTitle="You're on the list."
              successBody="I'll email you personally when BLAST is ready for early access. In the meantime, check out RECALL — it's live and free."
              accent="purple"
            />
          </div>
        </div>
      </section>

      {/* PROOF / CREDIBILITY */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proof.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed">
              "RECALL finds the line. BLAST gets it out the door. I built the first one because I needed it — building the second for the same reason."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              — Michael Morrison
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT FITS WITH RECALL */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Two tools, one workflow
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-left">
            <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
              <div className="text-2xl mb-2">🔍</div>
              <div className="font-bold text-gray-900 dark:text-white mb-1">RECALL</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Finds the moment across every source you've loaded. Free, live today.</div>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-bold text-gray-900 dark:text-white mb-1">BLAST</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Formats and distributes the clip across platforms. In development.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What BLAST does
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Not a video editor. A distribution tool for the clip you already cut.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA — second waitlist capture */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stop re-uploading the same clip four times.
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-2">
              BLAST is in development. Join the waitlist and I'll personally reach out when early access opens.
            </p>
            <p className="text-white/70 text-sm">
              No spam, no filler emails — just a heads-up when it's ready to test.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-black/20 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10">
            <EmailCapture
              source="blast-closing"
              buttonLabel="Join the waitlist →"
              successTitle="You're on the list."
              successBody="I'll email you personally when BLAST is ready for early access."
              accent="purple"
            />
          </div>

          <p className="text-center text-white/70 text-xs mt-6">
            Already using RECALL?{' '}
            <a
              href="https://mjmorrison10.github.io/recall/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Open it here
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
