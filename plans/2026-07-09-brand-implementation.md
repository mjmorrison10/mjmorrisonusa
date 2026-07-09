---
task: Brand implementation — reposition around the Creator Ops Stack
approved: 2026-07-09
---

# Brand Implementation — Creator Ops Stack

## Goal

Reposition the portfolio around the three-product "creator ops stack"
(RECALL / HOOKLAB / BLAST) instead of presenting AI apps, SMMA, and flipping
as co-equal businesses. Prompted by an external brand analysis whose core
diagnosis — the brand is overloaded and the stack is under-represented, with
HOOKLAB absent entirely — was fact-checked against the repo and confirmed.

Master line (canonical, used verbatim):
> Creator operations systems — RECALL finds it, HOOKLAB underwrites the open, BLAST gets it out the door.

## Steps (this repo)

1. New `src/components/ProductStack.jsx` — 3-card stack row (RECALL cyan /
   HOOKLAB purple / BLAST orange), JTBD lines, status chips, links to internal
   product pages. `compact` prop for embedding.
2. New `src/pages/Products.jsx` — stack page (hero + ProductStack + how-they-chain
   + CTA). New `src/pages/Hooklab.jsx` — waitlist page modeled on Blast.jsx,
   purple accent, factual claims only (no "6-question audit", no user counts,
   no live/repo links).
3. Routes `/products` and `/hooklab` in `src/App.jsx`.
4. `src/components/Layout.jsx` — nav → Home / Products / AI Apps / SMMA / Contact;
   footer product links row.
5. `src/pages/Home.jsx` — reorder to Hero → ProductStack → Services → Start-Here
   → Stats → Results → Flipping (demoted) → My Story → CTA. Cut Trusted By,
   "three revenue streams" Business Model, Trends/Market Opportunity, Quick Win,
   About Preview. Hero + services rewrite; flipping demoted to a slim band that
   keeps "I buy your inventory for cash"; "The Fall" softened.
6. `src/components/SEO.jsx` — update `/`; add `/products`, `/hooklab`, `/blast`
   (the last fixes a pre-existing missing-entry bug).
7. `index.html` — title/OG/Twitter/description/keywords + schema updated to new
   positioning; removed duplicate keywords tag. 314K/50M metrics + Cypress local
   SEO kept.
8. `src/pages/WebDev.jsx` + `src/pages/SMMA.jsx` — small stack cross-link strips.
   SMMA's banned-story framing left at full voltage (tone split); Home softened.

## Files touched

`src/App.jsx`, `src/components/{Layout,SEO,ProductStack}.jsx`,
`src/pages/{Home,Products,Hooklab,WebDev,SMMA}.jsx`, `index.html`.
(RECALL live links in Recall.jsx / WebDev.jsx projects[0] left untouched.)

## Rollback

Single commit on branch `claude/multi-claude-tmux-script-8fd0cx`, which does not
deploy (GitHub Pages tracks `main`). `git revert <sha>` or delete the branch;
production is untouched until the branch is merged to `main`.

## Verification

- `npm run lint` clean, `npm run build` succeeds (46 modules). — PASS
- Route-integrity grep: every internal `to="/..."` maps to a defined route. — PASS
- Forbidden-claims greps empty: "6-question", Tate/Real World in src, new
  github.io product URLs, "banned from 4" outside SMMA, `liveUrl` in Hooklab.jsx. — PASS
- Playwright on the built dist: 8 routes render with correct `<h1>`, nav shows the
  5 items, nav→Products and Products→HOOKLAB click-throughs resolve, no code
  console/page errors (one blocked external Google-Fonts request is environmental). — PASS
