# LAUNCH.md — Go-to-market playbook for the Creator Ops Stack

The product is done enough. This is the promotion plan. It combines the
go-to-market, content, and readiness work into one place so it isn't trapped in
a chat. Freeze the roadmap except conversion plumbing (below) and real bugs.

---

## 0. Verdict

**Promote now. No 5th app.** Four live apps + a live site + working email
capture + zero distribution is distribution debt, not a product gap. Every
feature built before the first 100 users is a guess on a guess. The next 90 days
of learning can only come from users.

Day-30 north star: **100+ emails captured, 3+ services calls booked, one
repeatable content format identified.**

---

## 1. Your 20-minute account checklist (do this first — I can't create accounts for you)

Promoting into a site with no analytics and no email list wastes your best
one-time assets (launch day, the loss story). Knock these out before posting:

1. **Analytics (10 min).** Create a free GoatCounter account (goatcounter.com).
   Then tell me your site code (or find/replace `MJMCODE`) and I'll flip on the
   commented `<script>` block already placed in every app's `index.html` and the
   site's `index.html`. Add events later for "app opened" and "API key added"
   (activation) — without activation you can't tell tourists from users.
2. **Email list with a spine (10 min).** Formspree currently just forwards form
   fills to your inbox — there's no list, no welcome email, no way to launch to
   these people later. Create a Buttondown or ConvertKit account, point the
   forms at it (change `FORMSPREE_ENDPOINT` in `EmailCapture.jsx` /
   `ContactFormMini.jsx` / `Contact.jsx`, or connect Formspree → ESP), and write
   ONE welcome email that delivers the stack links + a reply hook ("what show
   are you running? I'll tell you how I'd set up your pipeline"). The BLAST
   waitlist is only an asset if you can email it on launch day.
3. **Booking + payment links (for the outreach kit).** Create a free Calendly
   and a Stripe payment link, then find/replace across the `outreach` repo:
   `{{CALENDLY_URL}}` and `{{PAYMENT_LINK}}` appear in `templatesemail.md`,
   `templatesdm.md`, `templateslinkedin.md`, `linkedinprofile.md`,
   `proposalinvoice.md`. Until these are filled, the outreach templates are not
   runnable. (See `outreach/STATUS.md`.)

Email-copy rule (standing): **no em dashes in email copy.** Periods, commas,
colons, semicolons, or parentheses instead. Ordinary hyphens are fine.

---

## 2. Positioning

**Core frame (sovereignty, not sympathy):**
> The platform can take your audience. It can't take your system. So I turned
> my system into software I own.

One-paragraph narrative: *I ran short-form for a major personal-development
brand: 314K followers, 50M+ views a month. Platform enforcement erased it in an
afternoon, no appeal. What survived wasn't the audience. It was the operating
system in my head: how to find the moment, know a hook will land, be everywhere
at once, learn from every view. I spent months turning that into four free apps.
Now I'm rebuilding from zero, in public, using nothing but my own stack. Every
post you see me make is a live demo.*

**Three content pillars** (every piece belongs to one):
1. **The Rebuild** — the loss story, day-N updates, transparent PULSE numbers.
2. **The Stack** — each app shown solving a real problem on a real post.
3. **The Craft** — hook theory from the HOOKLAB ledger, repurposing, reading
   analytics. This pillar carries the services funnel.

**Signature closing line (say or show it in every piece):** "This video was
found with RECALL, underwritten in HOOKLAB, posted with BLAST, and PULSE is
tracking it right now." The meta-loop is the marketing.

---

## 3. Who to target (two-layer funnel)

**ICP-A (revenue — target with outbound): podcasters and coaches running a clips
operation.** Solo/small-team, weekly long-form, 5K-200K audience, already paying
for tools (Opus Clip, Descript, Riverside) or a VA/clipper $500-2K/mo. They feel
every pain the stack solves and they are the $500-$10K custom-build buyer. RECALL
and PULSE are literally demos of what you'd build for them.
- **Buying signals to hunt:** just launched a clips channel; hiring a
  "short-form editor/clipper" (Upwork, X, podcast communities); publicly
  complaining about Opus Clip pricing / repurposing workload; just hired a VA.
- **Disqualify:** creators under ~1K followers; agencies wanting free white-label.

**ICP-B (audience / word of mouth): short-form-native creators and freelance
clippers/editors.** They adopt free tools fast and talk. One clipper serves
several ICP-A podcasters, so a clipper is a channel into multiple accounts. No
budget expectation — they are distribution, not revenue.

**The funnel:** free apps (BYO key, no signup friction) → email capture → weekly
email showing your own posting data → two paid exits: (a) "want this workflow
customized for your show?" $500-10K builds, (b) social-media-marketing retainer
backed by the 314K/50M record. The apps are the most credible lead magnet the
services will ever have. (The in-app footer bridge lines now link app →
`/#/webdev?utm_source=<app>`.)

---

## 4. First 30 days — three motions in parallel

**Motion 1 — Dogfood on camera (daily, the core play).** Use the stack on camera
to rebuild a channel in public. 1 short/day (TikTok + YT Shorts + Reels via
BLAST): "here's today's post going through my pipeline," "HOOKLAB said this hook
would flop, I posted it anyway, here's the 6-hour PULSE checkpoint." PULSE
screenshots ARE the content. 1/week longer build-in-public thread on X + a
LinkedIn post (LinkedIn is where the coach ICP lives).

**Motion 2 — Community seeding (2-3 posts/week, value-first).**
- Reddit: r/NewTubers, r/PartneredYouTube, r/podcasting (RECALL angle: "search
  every episode transcript for the moment"), r/SmallYTChannel, r/SideProject and
  r/InternetIsBeautiful (the "4 free apps, no backend, data stays in your
  browser" angle lands hard), r/ClaudeAI-type subs for the BYO-key story.
- Indie Hackers (build-in-public log), Podcast Movement / "Podcast Editors Club"
  FB groups (ICP-A dense), 2-3 creator Discords.
- Rule: lead with the workflow problem and data; link in a comment or once.
  Reddit smells self-promo instantly.

**Motion 3 — Signal-based outbound (15-20/week, manual, personal).** Hunt ICP-A
signals (hiring a clipper, announcing a clips channel, complaining about
repurposing). Never generic. Template shape: "Saw you're hiring a clipper for
[show]. Before you spend $1,500/mo, I built a free tool that finds every
clippable moment by searching your transcripts. No signup, data stays in your
browser: [link]. I ran short-form for a brand doing 50M monthly views; happy to
share how I'd structure the pipeline." Signal-triggered → target 15%+ replies.
This is where $500-10K conversations come from. Queues live in `outreach/`
(leads.csv ~298, leadschristian.csv ~220) with templates + playbooks.

**Weekly double-down signals (review every Sunday):**
- The email `source` field tells you which app/page converts best → that becomes
  the Product Hunt lead and content focus.
- Any short that beats your median views 3x defines next week's angle (use
  HOOKLAB on your own promo).
- Which outbound signal type gets replies → kill the losers by day 21.

---

## 5. Two-week launch calendar (16 written hooks)

Convention: "Short" = one vertical video, adapted + posted to all 9 platforms via
BLAST; its hook underwritten in HOOKLAB on camera; next-day PULSE screenshots
become follow-up posts.

**Week 1 — the story and the system**
- **D1 Loss story (short, 9 platforms, whole stack):** "I ran a page doing 50
  million views a month. One email ended it."
- **D1 X thread + LinkedIn:** "314K followers. 50M+ monthly views. Gone in one
  afternoon with no appeal. Here's what I own now that no platform can take."
- **D2 Pipeline reveal (short):** "This video was found, written, posted, and
  tracked by four apps I built myself. Watch the whole pipeline in 60 seconds."
- **D3 RECALL demo (short):** "I never lose a clip anymore. I search everything
  I've ever said on camera like it's Google."
- **D3 LinkedIn builder post:** "I lost 314,000 followers to a decision I
  couldn't appeal. So I built the system I wished I owned. Solo. Four apps. Free."
- **D4 HOOKLAB demo (short):** "Before I post a hook, I underwrite it like a loan
  officer. Approved, declined, or needs more collateral."
- **D5 BLAST demo (short):** "I post to 9 platforms in the time it used to take
  me to post to one."
- **D6 PULSE demo (short):** "I know within 60 minutes whether a post is going to
  die. Here's the checkpoint system."
- **D7 Week-1 receipts (thread + newsletter):** "7 days ago I started rebuilding
  from zero. Here are the exact numbers from my own analytics app. The good, the
  dead, and what changed for week 2." (Newsletter subject: "Week 1 from zero:
  the exact numbers")

**Week 2 — flagship, Product Hunt, craft**
- **D8 Flagship long-form drops + trailer short:** "I got deplatformed at 314K.
  So I built my own creator ops stack. The full story just went live."
- **D9 Product Hunt (BLAST) day:** "My 9-platform posting command center is live
  on Product Hunt today. It's free. Here's why I'm giving it away."
- **D10 Craft piece (short + thread):** "Hooks aren't creative. They're
  actuarial. 3 patterns from my personal win/loss ledger that keep printing."
- **D11 The learning loop (short):** "My analytics app talks to my hook app. My
  workflow literally learns from every post I publish."
- **D12 Services bridge (short + LinkedIn):** "If you're a coach sitting on 200
  podcast episodes, you're sitting on a year of content. Here's how I'd mine it
  in an afternoon." (CTA: work-with-me / webdev page)
- **D13 Steal my stack (UGC seed):** "Steal my entire stack. All four apps, free.
  Publish your first video through BLAST, tag me, and I'll underwrite your hook
  live on camera."
- **D14 Meta retro (thread + newsletter):** "I published 14 days of launch
  content using only tools I built. Here's what the data says worked, what
  flopped, and the hook that outperformed everything 4 to 1." (Subject: "14 days,
  every number, no spin")

---

## 6. Flagship long-form: "I Lost 314K Followers, So I Built My Own Creator Ops Stack"

YouTube, 12-16 min (also an article on the site for SEO: "creator ops stack,"
"free tools for short form creators," "post to multiple platforms").
1. Cold open (0:00-0:40): the moment of loss. Straight into stakes.
2. The machine at peak (0:40-2:30): what running 50M monthly views looked like —
   the process was the asset, not the account.
3. The collapse (2:30-4:00): enforcement, no appeal. "Everything lived on land I
   rented."
4. The reframe (4:00-5:00): the audience was deletable; the operating system
   wasn't. "So I stopped posting and started building."
5. Build montage, 4 mini-arcs (5:00-10:00): RECALL / HOOKLAB / BLAST / PULSE,
   each problem → tool → live demo. Name the PULSE→HOOKLAB loop.
6. Pipeline end-to-end (10:00-12:00): make one real post live on camera.
7. Receipts (12:00-13:30): week-1 rebuild numbers from PULSE, including a flop.
8. Philosophy (13:30-14:30): rented reach vs owned infrastructure; why all four
   are free; one line for coaches ("if you want a machine like this built around
   your content, that's what I do now").
9. Meta payoff + CTA (14:30-end): "The hook that opened this video was
   underwritten in HOOKLAB; RECALL will clip it, BLAST will blast it, PULSE is
   timing it as you watch." Links, all free, subscribe to watch the rebuild.

Thumbnail: face + "314K → 0" or a red BANNED overlay; A/B a "So I built my own
apps" variant.

---

## 7. Product Hunt / directories

**Staggered individual launches, not the suite as one** (a 4-app bundle dilutes
the tagline and burns four spikes in one). One every 2-3 weeks:
1. **BLAST** first — widest, most self-explanatory. Tagline: "Adapt one caption.
   Post to 9 platforms. Free."
2. **PULSE** — natural sequel. "Know in 60 minutes if your post will live or die."
3. **HOOKLAB** — most novel; launch once you have ledger data to show.
   "Underwrite your hooks before you bet a post on them."
4. **RECALL** — last; completes the story. "Google for everything you've ever
   said on camera."

Suite umbrella line (bios, maker comments, site): "The Creator Ops Stack: find
the moment, underwrite the hook, post everywhere, learn from every view. Four
free apps, built by a creator who lost everything to a platform and rebuilt what
he could own."

Maker comment each launch: the 314K loss story in 3 sentences, why the app
exists, why it's free, "I make every one of my own posts with it — here's
yesterday's PULSE screenshot." Launch Tue/Wed, 12:01am PT; each launch day gets
its own short + thread. Also: Show HN (RECALL or the stack story), Indie Hackers
build post per app, and set-and-forget AI/tool directories (There's An AI For
That, Futurepedia, Toolify, AlternativeTo).

---

## 8. Repurposing map — 1 week of dogfooding → 16 pieces → ~80 placements

From one 15-min flagship recording: 5 shorts (moments found via RECALL, hooks
underwritten in HOOKLAB), 1 X thread, 1 LinkedIn post, 1 SEO article. From the
week's screen recordings: a 60-sec speedrun, a feature tutorial, a 4-step
carousel. From PULSE data: a weekly numbers thread, an "autopsy" of the worst
post, a "winner breakdown" traced through HOOKLAB→PULSE→ledger. From community: a
live hook-underwriting reaction short, and the weekly newsletter. That's 16
pieces; BLAST fans the ~8 video pieces to 9 platforms each = ~80 placements/week,
all tracked in PULSE, all feeding the HOOKLAB ledger that writes next week's
craft content. The loop is circular by design, and saying that out loud is the
best ad the stack will ever get.

---

## 9. Do NOT

- Do not build anything new, and specifically do not "finish BLAST auto-posting."
  The waitlist IS the demand test; if 30 days of promotion can't put 100 emails
  on it, more engineering was never the bottleneck.
- Do not start project N+1 (PriceSpy, a 5th app) the moment promotion gets
  uncomfortable. Ready was two apps ago.
- Fixed rule for the month: code only for the Section 1 conversion items and
  user-reported bugs. Nothing else.
