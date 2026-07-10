---
approved: 2026-07-10
---

# Promotion readiness: conversion plumbing + committed launch playbook (mjmorrisonusa)

## Goal

The stack is feature-complete; the next move is promotion (agency assessment:
Outbound Strategist + Content Creator + repo sweep). Ship the conversion
plumbing and commit the full launch strategy so it isn't trapped in chat. No
product features.

## Steps

- **Email capture on the remaining product surfaces.** Recall/Hooklab/Blast
  pages already have `EmailCapture`. Add it (distinct `source`) to Pulse.jsx
  (`pulse-cta`), Workflow.jsx (`workflow-cta`), Products.jsx (`products-cta`),
  each a "get the stack + weekly rebuild numbers" card in the page CTA.
- **Funnel hygiene.** Generalize `EmailCapture` `_subject` from "RECALL signup"
  to "Creator stack signup" (it's stack-wide now); remove the stale
  "replace YOUR_FORM_ID" comments in ContactFormMini.jsx / Contact.jsx (the real
  Formspree id is wired).
- **Analytics wiring, off by default.** Commented GoatCounter block before
  `</body>` in index.html with a `TODO(user)`.
- **LAUNCH.md** (repo root): the committed go-to-market playbook — positioning,
  ICP, first-30-days motions, 2-week calendar (16 hooks), flagship outline,
  Product Hunt order, repurposing map, and the user's 20-minute account
  checklist (GoatCounter, ESP, Calendly/Stripe → outreach placeholders).

## Verification

`npm run build` passes. Headless against the built dist: each of pulse/workflow/
products renders a capture with the right `source`; a real submit POSTs to
Formspree carrying `source` + the "Creator stack signup" subject; analytics stays
off. 18/18 promo assertions pass.

## Rollback

Revert the branch; all changes are additive copy/markup + one doc (LAUNCH.md).
No storage or routing changes.
