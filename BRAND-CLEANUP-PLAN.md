> **STATUS: IMPLEMENTED** — all code changes below were applied to `Home.jsx` and `SMMA.jsx`, verified with `npm run build` and `npm run lint`, and pushed to `main`. See "Implementation Notes" at the bottom for what changed vs. this original plan.

# Brand Cleanup Plan: Removing Andrew Tate / The Real World Association

**Prepared by:** Brand Guardian
**Goal:** Preserve the real, impressive story (audience growth, platform strategy, self-taught dev pivot) while removing every reference that ties the personal brand to Andrew Tate, The Real World / Hustler's University, Luc Tate, or "Fireblood/DNG."

**Guiding principle:** Reframe, don't erase. "Grew a 9-platform audience to 50M+ monthly views while working on an exclusive growth team, then pivoted into full-stack development after platform bans" is a strong, sellable story with zero mention of any specific person or organization. We're removing the name-drops and the polarizing affiliations, not the achievement.

---

## Full Inventory of Affected Content

### 1. `src/pages/Home.jsx` (7 locations)

| Line(s) | Current Content | Issue | Action |
|---|---|---|---|
| ~175-181 | "Featured On" badge linking to Rumble interview titled "...The Real World Interview..." | Direct brand link + org name | Remove the "Featured On" badge entirely, OR replace with a neutral "As Seen In" slot once/if you have unaffiliated press |
| ~482 | "Then discovered The Real World University in October 2021 with just 1,000 members." | Names the org | Reframe: "Then discovered a fast-growing online business education community in October 2021, early enough to help shape it from the ground up." |
| ~494 | "Recruited to a 5-person exclusive team working with Andrew Tate's project manager." | Names Andrew Tate directly | Reframe: "Recruited to a 5-person exclusive growth team working directly with a major media brand's leadership." |
| ~573 | "I became a platform captain in The Real World university...recruited to an exclusive 5-person team working directly with one of the most recognized figures on the internet" | Names org + strongly implies the figure | Reframe: "I became a platform captain for a fast-growing digital education brand, pioneered Facebook marketing when experts said it wouldn't work, and was recruited to an exclusive 5-person growth team." |
| ~603 | "5-Person Fireblood/DNG Squad" | Names Tate-affiliated products directly | Reframe: "5-Person Growth & Content Team" |
| ~640, ~647, ~652, ~657 | "Follow My Journey" section: full Rumble iframe embed, "Watch Full Interview" link, iframe title referencing "The Real World" | Embeds the actual interview + org name | **Remove this entire section.** The interview itself is hosted on the org's channel — keeping it live keeps the association alive regardless of surrounding text. |
| ~698-745 | Two testimonials: "Luc Tate, Professor, The Real World University" and "Tatoo, Instagram Captain, The Real World University," including their photos (`luc.jpg`, `tatoo.jpg`) | Names both people + org, uses their photos | **Remove both testimonials.** See "Testimonial Replacement" section below for what goes in their place. |
| ~752-757 | "Watch My Interview on The Real World" CTA button + pre-filled tweet text mentioning the story | Names org, links to interview | Remove alongside the "Follow My Journey" section |

### 2. `src/pages/SMMA.jsx` (entire page needs a rewrite pass — heaviest concentration)

| Section | Current Content | Action |
|---|---|---|
| `milestones` array (lines ~14-45) | "Joined The Real World," "Luc Tate," "Andrew Tate's project manager on Fireblood, DNG Comics, and Tate Merch," "brand accounts transferred to Andrew Tate's ownership" | Rewrite every milestone description to remove names. Timeline structure (dates, growth arc, ban, pivot) stays — see rewritten copy below. |
| "Story" tab narrative (lines ~140-165) | Multi-paragraph story naming "Luc Tate, Andrew Tate's cousin" three times, quotes attributed to him | Full rewrite — see below. The narrative arc ("I was told not to bother with Facebook, I did it anyway, I was proven right") is genuinely good and stays. |
| "Featured on The Real World" section (~342-357) | Rumble embed + title referencing The Real World | Remove entirely, same as Home.jsx |
| Page hero/subhead | No direct names but tonally tied to the "empire" narrative shared with Home.jsx | Light copy pass for consistency once other pages are fixed |

### 3. Site-wide / metadata

| Location | Issue | Action |
|---|---|---|
| `index.html` / `src/components/SEO.jsx` | Check meta descriptions and Open Graph tags for any auto-generated summary text that references the story | Audit for stray mentions once page copy is finalized |
| `public/luc.jpg`, `public/tatoo.jpg` | Photos of the two testimonial-givers | Delete once testimonials are removed from the code (no reason to ship unused images) |
| `AGENT-INSIGHTS.md` | Internal notes file, not user-facing, but contains extensive Tate-era strategy notes | Low priority — this isn't rendered on the site, but flag for cleanup if this repo/file is ever public-facing or shared with anyone |
| GitHub repo `mjmorrison10/mjmorrisonusa` commit history | Old commits may still reference this content in commit messages | Not urgent — git history isn't surfaced to site visitors, but worth knowing it's there if this repo is ever shown to a client |

---

## Testimonial Replacement — Needs Your Input

You currently have exactly two testimonials on the homepage, and both are from Luc Tate and "Tatoo," both explicitly tied to The Real World. Removing them without replacement leaves a "What People Say" section with nothing in it, which is worse than having none.

**Options, ranked by what I'd recommend:**

1. **Best: Swap in real client testimonials you already have.** You have two anonymized ones already live on the WebDev page ("JM," "Local Business Owner" and "SK," "E-Commerce Entrepreneur"). If those are real, feel free to duplicate one onto the homepage immediately. If you can get even one more real client quote (text message screenshot, email, anything), that's worth more than a hundred follower-count flexes.
2. **Acceptable short-term: Remove the "What People Say" section from the homepage entirely** until you have client-based testimonials to put there. An empty gap is invisible; a Tate-adjacent name is a red flag. Silence beats risk here.
3. **Not recommended: Ask former Real World colleagues for a "clean" testimonial that doesn't mention the org.** Even if worded carefully, it reintroduces the same people/association by name and photo, defeating the purpose.

**I recommend Option 2 for now, upgrading to Option 1 the moment you have a second real client quote.**

---

## Rewritten Copy — Ready to Drop In

### Home.jsx — "The Rise" (My Story section)
> Built a social media growth engine generating 50M+ monthly views across 9+ platforms. Became a platform captain for Facebook and Snapchat inside a fast-growing digital education community, and was recruited to an exclusive 5-person team working directly with senior leadership on brand growth and content strategy.

### Home.jsx — "Story Behind the Name" section
> I built a social media growth engine that generated 50 million views per month across 9+ platforms, then got banned from four of them, not for breaking any rules, but because the content was performing too well for the platforms' liking. Before that, I drove Uber. After that, I taught myself to code and built two production applications. Now I do all three: build, market, and sell.
>
> Along the way, I became a platform captain inside a fast-growing digital education community, pioneered Facebook marketing when everyone else said it wouldn't work, and was recruited to an exclusive 5-person growth team working directly with senior brand leadership.
>
> Now I'm combining everything I've learned — marketing, development, sales, and relentless work ethic — to help businesses grow and individuals succeed.

### Home.jsx — "By the Numbers" card
> Change "5-Person Fireblood/DNG Squad" → **"5-Person Growth & Content Team"**

### SMMA.jsx — milestones (rewritten, names removed)
```js
const milestones = [
  {
    date: 'October 2021',
    title: 'Joined a Growing Education Community',
    description: 'Joined a fast-growing online business education community at 1,000 members. Started learning affiliate marketing and content strategy from experienced mentors.',
    icon: '🎓',
  },
  {
    date: '2022',
    title: 'Pioneered Facebook & Snapchat',
    description: 'When conventional wisdom said Facebook and Snapchat weren\'t viable for growth, I ignored the advice and proved it wrong. Eventually became the unofficial Facebook & Snapchat captain.',
    icon: '🚀',
  },
  {
    date: '2022-2023',
    title: 'Built Multi-Platform Empire',
    description: 'Grew audiences across 9+ platforms simultaneously. Generated 5-50M monthly views. Most viral video hit 20M views.',
    icon: '📈',
  },
  {
    date: '2023',
    title: 'Recruited to Exclusive Team',
    description: 'Selected for a 5-6 person team working directly with senior leadership on flagship product launches and brand content.',
    icon: '⭐',
  },
  {
    date: '2023',
    title: 'Platform Captain',
    description: 'Became the official Facebook & Snapchat captain, managing brand accounts and testing official content strategy at scale.',
    icon: '👑',
  },
  {
    date: '2024',
    title: 'Platform Bans',
    description: 'Accounts banned due to content targeting (not policy violations). Pivoted skills into web development and flipping.',
    icon: '🔄',
  },
];
```

### SMMA.jsx — "Story" tab narrative (rewritten)
> October 2021. 1,000 members. That's when I joined a fast-growing online business education community teaching affiliate marketing on TikTok, Instagram, and YouTube.
>
> One day, a mentor gave a lesson: if you're already editing for Instagram, take the extra 5 minutes to upload to YouTube too. Most students took that literally. I took it to the extreme — **why not upload to every platform possible?**
>
> I started uploading to Facebook and Snapchat. When I told other affiliates about my success, the leadership told students **not to bother with Facebook or Snapchat because it was redundant.**
>
> I ignored that advice.
>
> I kept uploading. I kept growing. Eventually, one of my mentees started dominating Facebook, and leadership had to admit Facebook was viable. They changed their teaching to include all platforms.
>
> **Today, Facebook is one of the most stable and profitable platforms for affiliates.** YouTube and TikTok bans are rampant. Instagram is risky. But Facebook? It's thriving.
>
> Even fellow captains have said: *"If it weren't for Michael sticking it through on Facebook, we probably would've quit during those hard times."*

### SMMA.jsx — page header
> "Featured on The Real World" section header + Rumble embed → **remove entirely**, same treatment as Home.jsx.

---

## Priority Order (do these in this sequence)

1. **Remove the Rumble embeds and "Featured On" links** (Home.jsx x2, SMMA.jsx x1) — highest visibility, easiest to spot, most direct affiliation.
2. **Remove or replace the two testimonials** (your call on Option 1 vs. 2 above).
3. **Rewrite the milestone/timeline copy** in both Home.jsx and SMMA.jsx.
4. **Rewrite the narrative paragraphs** ("Story Behind the Name," SMMA story tab).
5. **Rename the "Fireblood/DNG Squad" label.**
6. **Delete unused images** (`luc.jpg`, `tatoo.jpg`) once testimonials are gone.
7. **Spot-check `AGENT-INSIGHTS.md`** — not public-facing, low priority, but good hygiene if you ever share this repo.
8. **Re-read the whole site once more** after edits, ideally the next day with fresh eyes, to confirm nothing implicit slipped through (e.g., the pre-filled tweet text, alt text on images, SEO meta descriptions).

---

## What I Need From You Before I Implement

1. **Testimonials: Option 1 (swap in real client quote) or Option 2 (remove section for now)?**
2. Confirm you're good with the reframed language above (I kept your voice/tone, just removed names) — flag anything that feels off and I'll adjust.
3. Once confirmed, I can make these edits directly in the cloned repo in your workspace, and you just review + push.

---

## Implementation Notes (post-execution)

**Decision made:** Went with **Option 2** — the "What People Say" testimonials section was removed entirely from `Home.jsx` rather than replaced, since your only existing testimonials were from Luc Tate and "Tatoo," both explicitly Real-World-branded, and there was no other real, quotable testimonial available yet.

**What actually changed in the code:**

- `src/pages/Home.jsx`
  - "Featured On" badge → renamed to "By the Numbers," Real World link removed, replaced with a third stat chip ("9+ Platforms Managed") so the section isn't lopsided.
  - "The Beginning" story card → reframed, no org name.
  - "The Rise" story card → reframed, "Andrew Tate's project manager" replaced with "senior brand leadership."
  - "Story Behind the Name" section → both paragraphs reframed, no org or person named.
  - "By the Numbers" panel → "5-Person Fireblood/DNG Squad" → "5-Person Growth & Content Team."
  - "Follow My Journey" section (Rumble embed + Watch Full Interview CTA) → **removed entirely.**
  - "What People Say" testimonials section (Luc Tate + Tatoo cards, plus the "Watch My Interview on The Real World" / pre-filled tweet CTAs beneath it) → **removed entirely**, along with the now-unused `testimonialsRef`/`testimonialsVisible` scroll-reveal hook.
  - `public/luc.jpg` and `public/tatoo.jpg` → deleted (git rm) since nothing references them anymore.

- `src/pages/SMMA.jsx`
  - `milestones` array → all 6 entries reframed, "The Real World," "Luc Tate," "Andrew Tate's project manager," "Fireblood, DNG Comics, and Tate Merch," and "Andrew Tate's ownership" all removed, replaced with neutral language that preserves the same growth arc.
  - "Story" tab narrative → fully rewritten, removed 3 direct Luc Tate name-drops and the "Andrew Tate's cousin" reference, kept the "I ignored the advice and was proven right" narrative beat intact.
  - "Featured on The Real World" section (Rumble embed) → **removed entirely.**

**Verified:**
- `npm run build` — succeeds, no errors.
- `npm run lint` — no new lint errors introduced by these changes (pre-existing, unrelated lint issues remain in `PageTransition.jsx`, `ThemeContext.jsx`, and `Flipping.jsx` — not touched here, flagging for a separate cleanup pass if you want it).

**New task queued for later, not done yet (needs your action, not mine):**
- You mentioned a client, **Paul Bauer / ComeOnManPod (Come On Man Podcast)**, who has repeatedly referred you for editing work despite low per-clip rates. This is a real, warm relationship and a legitimate future testimonial source — but no actual quote from him exists yet, so nothing was fabricated or added to the site. **Action for you:** next time you talk to him, ask directly for 1-2 sentences you can quote by name/show ("Come On Man Podcast") — that becomes your first real, verifiable testimonial and should go on the homepage the moment you have it (Option 1 from above).
- Your stated goal of landing web-dev clients via AI-assisted development as the next testimonial source is a good near-term plan — once you close even one paid client, get a quote in writing (text, email, or a review) before the project ends, while goodwill is highest.
