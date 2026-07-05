# Claude Code Subagents

Specialist agent personas installed into this repo so Claude Code can invoke them while
building, analyzing, and marketing this site.

## Source & provenance

- Corpus: [`msitarzewski/agency-agents`](https://github.com/msitarzewski/agency-agents) @ `217a63b8b6b6`
- These are a **curated subset** (web dev, design/brand, marketing/social/SEO) of the 230+ agent corpus.
- Only transform applied on import: the frontmatter `name:` field was slugified to a
  lowercase-hyphen identifier matching the filename (Claude Code requires this). `description`,
  `tools`, and other fields are unchanged from upstream.

To refresh or add more agents, re-copy from the corpus at a newer commit and re-run the same
name-slugification, then update the SHA above.

## How to use

In a Claude Code session in this repo, ask Claude to delegate to one by name, e.g.:

> "Use the **marketing-seo-specialist** subagent to audit the site’s on-page SEO."
> "Use the **design-brand-guardian** subagent to review brand consistency across pages."

## Installed roster (14)

### Engineering / web dev

- **`engineering-frontend-developer`** — Expert frontend developer specializing in modern web technologies, React/Vue/Angular frameworks, UI implementation, and performance optimization
- **`engineering-rapid-prototyper`** — Specialized in ultra-fast proof-of-concept development and MVP creation using efficient tools and frameworks
- **`engineering-devops-automator`** — Expert DevOps engineer specializing in infrastructure automation, CI/CD pipeline development, and cloud operations

### Design / brand

- **`design-brand-guardian`** — Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and strategic brand positioning
- **`design-ui-designer`** — Expert UI designer specializing in visual design systems, component libraries, and pixel-perfect interface creation. Creates beautiful, consistent, accessible user interfaces that enhance UX and reflect brand identity
- **`design-ux-researcher`** — Expert user experience researcher specializing in user behavior analysis, usability testing, and data-driven design insights. Provides actionable research findings that improve product usability and user satisfaction

### Marketing / social / SEO

- **`marketing-social-media-strategist`** — Expert social media strategist for LinkedIn, Twitter, and professional platforms. Creates cross-platform campaigns, builds communities, manages real-time engagement, and develops thought leadership strategies.
- **`marketing-seo-specialist`** — Expert search engine optimization strategist specializing in technical SEO, content optimization, link authority building, and organic search growth. Drives sustainable traffic through data-driven search strategies.
- **`marketing-content-creator`** — Expert content strategist and creator for multi-platform campaigns. Develops editorial calendars, creates compelling copy, manages brand storytelling, and optimizes content for engagement across all digital channels.
- **`marketing-growth-hacker`** — Expert growth strategist specializing in rapid user acquisition through data-driven experimentation. Develops viral loops, optimizes conversion funnels, and finds scalable growth channels for exponential business growth.
- **`marketing-tiktok-strategist`** — Expert TikTok marketing specialist focused on viral content creation, algorithm optimization, and community building. Masters TikTok's unique culture and features for brand growth.
- **`marketing-instagram-curator`** — Expert Instagram marketing specialist focused on visual storytelling, community building, and multi-format content optimization. Masters aesthetic development and drives meaningful engagement.
- **`marketing-linkedin-content-creator`** — Expert LinkedIn content strategist focused on thought leadership, personal brand building, and high-engagement professional content. Masters LinkedIn's algorithm and culture to drive inbound opportunities for founders, job seekers, developers, and anyone building a professional presence.
- **`marketing-multi-platform-publisher`** — Expert orchestrator for one-click Chinese blog publishing. Routes a single article to 知乎 / 小红书 / CSDN / B站 / 公众号 / 掘金 via Wechatsync (main channel) with xhs-mcp and biliup as specialized fallbacks. Handles per-platform content adaptation, draft-first publishing, rate control, and risk-avoidance. Does NOT auto-publish — always stops at draft for human review.

