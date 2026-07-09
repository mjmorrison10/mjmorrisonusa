import { useState } from 'react';
import EmailCapture from '../components/EmailCapture';

const benefits = [
  {
    icon: '🧠',
    title: 'Your own search engine',
    body: 'You consume hours of podcasts and interviews. RECALL indexes them so you can search any phrase and find every moment instantly — across every source.',
  },
  {
    icon: '⏱️',
    title: 'No more "I know it was in there somewhere"',
    body: 'Every line is timecoded. Click a moment and jump straight to it. No scrubbing, no rewinding, no losing the line you swore you\'d remember.',
  },
  {
    icon: '🧩',
    title: 'Cross-source callbacks, finally',
    body: 'The line from episode 47 + the callback from episode 112 = a banger clip. RECALL makes that stitch effortless.',
  },
  {
    icon: '📤',
    title: 'Ship shot lists, not vibe lists',
    body: 'Stack your moments into a bin, click export, get a clean numbered shot list with timecodes. Paste it into your notes app. Cut.',
  },
  {
    icon: '🎙️',
    title: 'Audio in, transcript out',
    body: 'Drop in an MP3 and Gemini transcribes it for you. ~$0.009/hour of audio. Your library stays on your device — audio only goes to Google for the transcription call.',
  },
  {
    icon: '📱',
    title: 'Installs like a real app',
    body: 'No App Store. Open in Safari, Share → Add to Home Screen. RECALL launches fullscreen, works offline, lives on your iPhone.',
  },
];

const proof = [
  { value: '1s', label: 'to find a line in your library' },
  { value: 'Free', label: 'to start, forever' },
  { value: 'Your device', label: 'library never leaves' },
  { value: 'No limits', label: 'on sources or moments' },
];

export default function Recall() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="relative">
      {/* HERO — value prop + email form above the fold */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-5">
              🆕 FREE TOOL · BUILT BY MICHAEL MORRISON
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.05]">
              Never lose a great{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
                moment
              </span>{' '}
              again.
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              RECALL turns every podcast, interview, and livestream you watch into a searchable memory layer.{' '}
              <strong>Find any line, in any source, in one keystroke.</strong>
            </p>

            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Built for podcasters, coaches, and personal-development creators who consume 10+ hours of long-form content a week and want every great moment to actually be usable — not forgotten.
            </p>
          </div>

          {/* Email capture form, prominent above the fold */}
          <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 border border-gray-700">
            <div className="text-center mb-5">
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">Step 1</div>
              <h2 className="text-white text-2xl font-bold mb-1">Get instant access</h2>
              <p className="text-white/70 text-sm">Drop your email. RECALL is free. No upsell.</p>
            </div>
            <EmailCapture
              source="recall-hero"
              buttonLabel="Send me RECALL →"
              accent="cyan"
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Or{' '}
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
              >
                try it instantly below
              </button>{' '}
              — no signup needed.
            </p>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="demo" className="py-12 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">Step 2</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Try it right here
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              RECALL running live. Add a source, search a phrase, bin the moments. Your library stays in this browser only.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-1 shadow-2xl shadow-cyan-500/20">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-600 dark:text-gray-300 truncate font-mono">
                  https://mjmorrison10.github.io/recall/
                </div>
                <a
                  href="https://mjmorrison10.github.io/recall/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  Open fullscreen ↗
                </a>
              </div>

              {/* Iframe */}
              <div className="relative bg-gray-50 dark:bg-gray-900" style={{ paddingBottom: '70%' }}>
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-3" />
                      <div className="text-sm text-gray-500 dark:text-gray-400">Loading RECALL…</div>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://mjmorrison10.github.io/recall/"
                  title="RECALL — Live Demo"
                  onLoad={() => setIframeLoaded(true)}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / CREDIBILITY */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proof.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed">
              "I built this because I needed it. Now I clip 3x faster."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              — Michael Morrison, who generated 50M+ monthly views across 9 platforms
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What you get
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Not a feature list. Real outcomes for creators who listen to a lot and ship clips.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA — second email capture */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stop losing the lines that matter.
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-2">
              RECALL is free. Your library lives on your device. Your email gets occasional creator-tips from me — nothing else.
            </p>
            <p className="text-white/70 text-sm">
              No upsell in the inbox. No "premium tier" popups. Just the tool and the list.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-black/20 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10">
            <EmailCapture
              source="recall-closing"
              buttonLabel="Get RECALL Now →"
              successTitle="You're on the list."
              successBody="RECALL is live at the link above. Search a phrase, bin a moment, ship a clip. I'll send creator-tips occasionally — unsubscribe anytime."
              accent="cyan"
            />
          </div>

          <p className="text-center text-white/70 text-xs mt-6">
            Or skip the email and just{' '}
            <a
              href="https://mjmorrison10.github.io/recall/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              open RECALL directly
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
