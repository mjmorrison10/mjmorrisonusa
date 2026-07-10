---
task: Add RECALL → HOOKLAB → BLAST workflow walkthrough page
date: 2026-07-09
approved: 2026-07-09
status: draft — content to be finalized with the user this session
---

# mjmorrisonusa — Creator Workflow page

## Goal

A step-by-step page walking creators through the real RECALL → HOOKLAB → BLAST
editing loop (download podcast → export audio → transcribe → mine hooks in
RECALL → underwrite the open in HOOKLAB → post via BLAST → log winners back).
The user will refine the copy through the session; this is the full draft.

## Changes

- **`src/pages/Workflow.jsx`** (new): hero, reused `<ProductStack />`, four
  phase groups (Prep / RECALL / HOOKLAB / BLAST) of numbered steps with each
  phase in its product accent color (RECALL cyan, HOOKLAB purple, BLAST orange),
  a "loop closes" callout, and a tri-color CTA. Content grounded in the user's
  real workflow, including audio-only export, the TurboScribe `(0:04 - 0:23)`
  format RECALL now parses, moving the hook to the front / end-of-clip loop
  watch-time trick, and logging winners to the HOOKLAB ledger. Live app links:
  `https://mjmorrison10.github.io/{recall,Hooklabs}/`.
- **`src/App.jsx`**: import + `/workflow` route (before the `*` catch-all).
- **`src/components/Layout.jsx`**: "Workflow" in the top `navLinks` and in the
  footer app-links row.
- **`src/components/SEO.jsx`**: `/workflow` `pageMeta` (title + description).
- **`public/sitemap.xml`**: `/#/workflow` entry.

## Verification — PASS

- `npm run lint` clean; `npm run build` succeeds.
- Playwright against the built `dist/` (HashRouter SPA): nav shows the Workflow
  link, `/#/workflow` loads with no page errors, hero names all three products,
  document title set, steps numbered continuously 1–8, links to the live RECALL
  and HOOKLAB apps present, real-workflow content present (Premiere/CapCut audio
  export, TurboScribe range format, the loop/watch-time trick, logging winners),
  dark-mode classes present. Light + dark screenshots captured.

## Follow-up

- Copy is a draft; finalize wording with the user before merging.
- BLAST has no public app URL yet — its links point to the internal `/blast`
  waitlist page; swap to the live URL once BLAST ships.

## Rollback

Revert this branch; new page + four small wiring edits, no shared-component
behavior changes.
