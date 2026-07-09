---
task: Site fixes batch (scroll/nav/UI) + HOOKLAB goes live
approved: 2026-07-09
---

# Site fixes batch + HOOKLAB live

## Goal

Fix the full bug list from the owner's site test pass, and flip HOOKLAB from an
early-access waitlist page to a live free tool (soft "get updates" capture only;
BLAST stays the only waitlist).

## Root causes found

1. **No scroll restoration** — no ScrollToTop existed; every route change
   inherited the previous page's scroll position (all "takes me somewhere
   random / should go to top" reports, including RECALL's "step 2 slightly
   above/below screen" randomness).
2. **Raw `<a href="#anchor">` under HashRouter** — clicking rewrote the router
   hash: `#portfolio` → nonexistent route → 404 ("See What I've Built");
   `#contact` accidentally routed to /contact mid-scroll.

## Steps

1. New `src/components/ScrollToTop.jsx`, mounted in App.jsx inside <Router>:
   hash → scroll to element after paint (respects scroll-mt-*); else (0,0).
2. Home.jsx: capacity note "web projects"→"AI projects"; hero content pb-20 so
   the absolute bottom-8 arrow no longer overlaps; START HERE card loses
   overflow-hidden (badge unclipped); ProductStack gets recallLink="/recall#demo".
3. ProductStack.jsx: recallLink prop (default /recall); HOOKLAB chip → "Free tool".
4. Recall.jsx: scroll-mt-24 on id="demo" (fixes offset for hash-nav AND the
   in-page scrollIntoView button, desktop + mobile).
5. WebDev.jsx: "See what I've built ↓" → in-page scrollIntoView button (+
   scroll-mt-24 on id="portfolio"); hero CTA, audit-section button, and all 3
   pricing-tier CTAs: href="#contact" → <Link to="/contact"> (land at top).
6. Contact.jsx: pb-2 on the gradient "Together" span (descender unclipped).
7. Hooklab.jsx: live-tool rework — FREE TOOL badge, Open-free + try-below CTAs,
   id="demo" live iframe (mjmorrison10.github.io/Hooklabs/) with spinner/chrome/
   fullscreen link, proof tile "Free · live right now", closing = Open button +
   soft EmailCapture source="hooklab-updates". SEO.jsx + Products.jsx copy synced.

## Files touched

src/components/{ScrollToTop.jsx (new), ProductStack.jsx, SEO.jsx},
src/pages/{Home,Recall,WebDev,Contact,Hooklab,Products}.jsx, src/App.jsx.

## Not fixable in code

Formspree delivers submissions to the gmail address via a dashboard setting —
zero gmail references exist in code (verified). Owner changes it at formspree.io
→ form → Settings → notification email.

## Rollback

Two commits on branch claude/site-fixes-hooklab-live; squash-merge to main;
revert redeploys prior site. Presentational/routing only.

## Verification

lint + build clean; Playwright vs built dist on desktop (1280x900) and mobile
(390x844): nav resets scroll; Home RECALL card lands on #demo cleanly both
viewports; Book Free Audit lands on #audit; See-what-I've-built stays on /webdev
(no 404) with portfolio in view; tier CTA → /contact top; START HERE badge
unclipped; Contact descender visible; Hooklab shows live iframe + FREE badge +
hooklab-updates capture and no waitlist text; zero console errors. PASS/FAIL
recorded below after execution.
