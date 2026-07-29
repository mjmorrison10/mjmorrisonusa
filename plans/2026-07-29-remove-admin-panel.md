---
approved: 2026-07-29
---

# Remove the browser admin panel

## Why

Chrome flagged `n8n.mjmorrisonusa.com` with a Safe Browsing "Dangerous site"
warning. Investigating, the flag turned out to sit on the **apex** domain
(`mjmorrisonusa.com` — social-engineering category; the n8n subdomain has no
Safe Browsing record of its own), and the apex ships a page that looks exactly
like credential phishing to a classifier:

`#/admin` — titled "Site Admin", an `<input type="password">`, the prompt
"Paste a GitHub Personal Access Token" with placeholder `ghp_...`, stored in
`localStorage` and sent to `api.github.com`. A personal domain asking visitors
for another company's access token is the shape of a token harvester; nothing
distinguishes it from one automatically.

Git history shows the panel is also **dead code**:

| | |
|---|---|
| `2adc50a` (Jul 2) | Honesty pass hides the "Concept Projects" section behind `SHOW_CONCEPT_PROJECTS = false` in `WebDev.jsx` |
| `b9f1866` (Jul 2) | Admin panel built. Sole function: flip that one boolean via the GitHub Contents API |
| `061165b` (Jul 8) | Rebrand PR rewrites `WebDev.jsx`; the flag **and** the Concept Projects section are deleted. The panel is never updated |

So it has been broken since Jul 8 ("Could not find the SHOW_CONCEPT_PROJECTS
flag in the file"), it controls a switch that no longer exists, and it was
never used once. Independent of the Safe Browsing question, a repo-write PAT
parked in `localStorage` on a public site is real XSS exposure for no benefit.

Removing it first also means the eventual Search Console review can say the
page is gone, rather than arguing it was legitimate.

## Changes

- **Deleted** `src/pages/Admin.jsx`.
- `src/App.jsx` — dropped the `Admin` import and the `/admin` route. The
  existing catch-all now serves `NotFound` for `#/admin`.
- `src/components/SEO.jsx` — dropped the `'/admin'` `pageMeta` entry. The
  generic `noindex` mechanism stays (harmless, future-useful); its comment no
  longer claims token-gating is access control.
- `public/robots.txt` — dropped `Disallow: /admin` and `Disallow: /*#/admin`.
  A robots rule naming a path that no longer exists only advertises it.

Scope is this repo only. `cypress-flips` has its own `admin.html` on a
different domain; out of scope here.

## Follow-up the owner must do

A valid GitHub PAT was pasted into the panel on 2026-07-29 (the
flag-not-found error only appears *after* token auth succeeds), so it is in
browser localStorage under `mjmorrisonusa_admin_gh_token`. **Revoke it** at
github.com/settings/tokens — it carries repo write access and now has no
purpose. Clearing site data for mjmorrisonusa.com drops the local copy.

## Files

`src/pages/Admin.jsx` (deleted) · `src/App.jsx` ·
`src/components/SEO.jsx` · `public/robots.txt`

## Rollback

Revert the commit. The panel is inert either way — it cannot work without the
flag it was written to toggle.

## Verification

`npm run build`, then string-scan the emitted bundle; plus
`mjm-admin-removed-verify.mjs` (headless Playwright against `dist/`).

## Audit — 2026-07-29

| Step | Result |
|---|---|
| Built bundle contains none of: "Personal Access Token", "Site Admin", "ghp_", "mjmorrisonusa_admin_gh_token", "api.github.com" (all five confirmed present in the live bundle beforehand) | PASS |
| Bundle shrank 415,364 → 406,913 bytes | PASS |
| `#/admin` shows no token entry screen and no password input | PASS |
| `#/admin` falls through to NotFound, no page errors | PASS |
| Home page and `#/contact` (with its form) still render | PASS |
| No same-origin request failures (only off-origin fonts.googleapis.com / gc.zgo.at, which cannot resolve in the test sandbox) | PASS |
| `robots.txt` no longer names an `/admin` path | PASS |
| No remaining `admin` references in source except unrelated marketing copy in `WebDev.jsx` | PASS |
