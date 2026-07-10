---
approved: 2026-07-10
---

# mjmorrisonusa: reflect the four-app suite (PULSE) + light suite-features mention

## Goal

The marketing site still had copy from when the stack was three apps ("Three
tools. One pipeline.", "not three disconnected apps", enumerations ending at
BLAST) even though PULSE shipped as the fourth app and already has a card, page,
workflow phase, and footer link. Update all count/enumeration copy to four apps,
and add a light mention of the two new suite features (one shared API key across
all four apps; one-file whole-stack backup).

## Steps (all copy-only, no routing/data changes)

- `src/pages/Products.jsx`: "Three tools." → "Four tools."; hero subtitle +
  "PULSE closes the loop."; "three places" → four failure modes; "not three
  disconnected apps" → four; add chain step 4 (PULSE); "8 platforms" → "9
  platforms"; CTA line + new PULSE free button; NEW "One suite, not four silos"
  section (shared key + one-file backup).
- `src/pages/Home.jsx`: service card "Four products…"; hero subtitle + PULSE;
  badge chip `RECALL · HOOKLAB · BLAST · PULSE`.
- `src/pages/Hooklab.jsx`: "Three tools, one workflow" → "Four tools…".
- `src/pages/Workflow.jsx`: add a line to the "loop closes" callout about one
  shared key + one backup file.
- `src/components/SEO.jsx`: `/`, `/products`, `/workflow` titles/descriptions
  extended through PULSE.
- `index.html`: description, keywords, og:description, twitter:description
  extended through PULSE.
- `src/components/ProductStack.jsx`: two stale code comments (three→four,
  3-card→4-card).

Left alone: `Blast.jsx` "two tools" (intentional pairwise RECALL+BLAST),
`WebDev.jsx` "three milestones/tiers" (pricing, not apps), `Workflow.jsx:152`
(already "not four disconnected apps").

## Files touched

`src/pages/{Products,Home,Hooklab,Workflow}.jsx`,
`src/components/{SEO,ProductStack}.jsx`, `index.html`.

## Verification

`npm run build` passes. Headless Chromium against the built dist: 19 assertions
pass — "Four tools." hero, four-step chain, PULSE CTA button, suite-features
section, home hero/badge/service-card PULSE, workflow arrow + shared-key callout,
hooklab "Four tools" heading, and per-route meta titles carrying PULSE. No
remaining "three tools/products/disconnected" matches in src + index.html.

## Rollback

Single-branch revert; copy-only changes plus one new JSX section.
