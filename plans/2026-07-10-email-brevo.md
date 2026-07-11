---
approved: 2026-07-10
---

# Wire newsletter capture to Brevo; keep contact forms on Formspree

## Goal

Move newsletter signups from Formspree (inbox only) to Brevo (free ESP: real
list + welcome automation), and separate the funnels: newsletter → Brevo list,
service/contact inquiries → Formspree inbox.

## Steps

- `src/components/EmailCapture.jsx`: replace the Formspree endpoint with the
  Brevo hosted form URL (public, no API key). `handleSubmit` POSTs
  `mode:'no-cors'` with a `URLSearchParams` body — `EMAIL`, `FIRSTNAME`,
  `email_address_check` (empty honeypot), `locale=en`, `html_type=simple` — and
  treats a resolved fetch as success (opaque cross-origin response). Kept the
  name+email UI and success/error states; removed the dead Formspree hidden
  inputs.
- `ContactFormMini.jsx` / `Contact.jsx`: unchanged (service inquiries stay on
  Formspree).
- `LAUNCH.md`: marked analytics + email wiring done; documented the two Brevo
  dashboard steps (welcome email, opt-in) + optional SOURCE attribute.

## Verification

- `npm run build` passes.
- Headless (built dist): each newsletter capture POSTs to the Brevo serve URL
  with the correct urlencoded body (EMAIL, empty honeypot, locale, html_type,
  FIRSTNAME) and flips to the inline success state; contact/Contact forms still
  POST to Formspree. 23/23 assertions.
- Live endpoint check: a real POST with the exact payload returned
  `HTTP 200 {"success":true}` — Brevo accepts the format.

## Rollback

Revert the branch — the Formspree endpoint returns and capture works as before.
