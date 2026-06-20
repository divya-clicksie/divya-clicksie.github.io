# Nubo SEO Improvement Plan

Updated: 2026-06-20

## Executive take

The ChatGPT advice is directionally right. Nubo does not primarily have a keyword stuffing problem. It has an intent hierarchy problem.

The current site already has a healthy base of newborn advice, practical tracking articles, product pages, category pages, structured metadata, crawlable static HTML, a sitemap, `robots.txt`, and AI-readable summaries. The next SEO step should be sharper relevance, not more general baby content.

Nubo's strongest organic wedge is not "newborn advice." That space is crowded by pediatric sources, hospital systems, large parenting publishers, app stores, and established baby apps. Nubo should compete where it has unique product truth:

- A physical one-tap baby tracker for screen-free logging.
- A free iOS and Android baby tracker app with caregiver sync.
- Voice catch-up and Alexa logging for hands-full moments.
- One shared baby timeline across parents, grandparents, nannies, and other caregivers.
- Privacy-forward tracking with no ads and no local commerce flow on the site.

The goal is to make Nubo the best answer for parents searching for a baby tracker that solves a specific real-life moment: night feeds, one-handed logging, nanny handoffs, grandparent care, shared tracking, and privacy concerns.

This document is a plan only. Do not change pages as part of this pass.

## Grounding principles

Use these official Google guidance points as the operating constraints:

- Google Search Essentials says to create helpful, reliable, people-first content, use words people would use in prominent locations, and make links crawlable.
- The SEO Starter Guide frames SEO as helping search engines understand content and helping users decide whether to visit from search.
- Google's helpful content guidance emphasizes content created to benefit people, not content created mainly to manipulate rankings.
- Google's structured data docs say structured data can help Google understand page content and qualify pages for richer appearances, but markup must accurately represent visible page content.
- Search Console reports should be read through clicks, impressions, CTR, and average position, with query and page views used together.

Reference sources:

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Structured data gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product)
- [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Search Console performance metrics](https://support.google.com/webmasters/answer/7042828)

## Current-state read

### What is already strong

- Static Astro output, crawlable routes, canonical tags, Open Graph tags, Twitter tags, sitemap generation, and breadcrumb JSON-LD are already centralized through `BaseLayout.astro`.
- Core commercial routes exist: `/`, `/device/`, `/app/`, `/pricing/`, `/compare/`, `/caregivers/`, `/privacy/`, `/resources/`, `/alexa/`, `/gift/`, `/faq/`, and legal/support pages.
- The site already avoids local commerce routes and sends purchase intent to Amazon, the App Store, Google Play, and the Alexa skill page.
- The blog has strong coverage across sleep, feeding, tracking, caregiver, privacy, product, and gifts.
- Product-led posts already exist for physical tracking, breastfeeding without phone use, caregiver tracking, privacy architecture, Bluetooth sync, and Nubo ecosystem messaging.
- `search-indexing-setup.md` already covers Search Console, Bing Webmaster Tools, sitemap submission, indexing requests, Plausible, and AI crawler setup.

### What is under-leveraged

- Several high-intent search patterns are handled mostly by blog posts, not by durable feature landing pages.
- The blog index is still mostly chronological. `/resources/` is better, but it can become a stronger intent hub.
- Some article titles are warmer than they are search-aligned. Warm titles are good for brand, but many should carry clearer query language.
- Comparison SEO is thin. `/compare/talli/` exists, but other comparison and alternative queries are not yet covered.
- Search Console should decide which pages get rewritten first. Without query data, the team risks polishing pages that have no impressions.
- FAQ schema should be used only where the questions are visible and genuinely useful. It should support decision-stage pages, not decorate every article.

## First-month Search Console read

The site only has about one month of Google Search Console history as of this export. Treat the data as directional, not statistically strong.

Files reviewed:

- `/Users/guru/Downloads/nubotracker.com-Performance-on-Search-2026-06-20/Pages.csv`
- `/Users/guru/Downloads/nubotracker.com-Performance-on-Search-2026-06-20/Queries.csv`
- `/Users/guru/Downloads/nubotracker.com-Performance-on-Search-2026-06-20/Search appearance.csv`

Important caveat: the Pages export shows 56 clicks and 7,336 impressions, while the Queries export shows 7 clicks and 1,100 impressions. This mismatch is normal for young and low-volume properties because Search Console query exports omit or anonymize some query data. For now, page-level data is more useful than query-level data.

### Early signals worth acting on

| Page or area | First-month signal | Interpretation |
|---|---:|---|
| `/` | 1,306 impressions, 19 clicks, 1.45% CTR, 5.74 average position | The homepage is visible, but brand and broad Nubo queries may be suppressing CTR. Keep improving brand clarity and sitelink paths. |
| `/device/` | 123 impressions, 6 clicks, 4.88% CTR, 6.37 average position | This is a good early signal. Device intent is converting better than most pages. Strengthen this page before creating a new physical tracker page. |
| `/app/` | 354 impressions, 2 clicks, 0.56% CTR, 5.57 average position | This is the clearest low-data opportunity. Good position, weak CTR. Improve title, meta, H1, and free app intent. |
| `/caregivers/` | 112 impressions, 2 clicks, 1.79% CTR, 7.65 average position | Useful early signal. Strengthen nanny, grandparent, shared tracking, and multiple caregiver language. |
| `/pricing/` | 170 impressions, 0 clicks, 7.26 average position | Decision intent may be visible but not earning clicks. Improve title and search snippet alignment after core product pages. |
| `/blog/tracking/newborn-diaper-output-normal/` | 1,757 impressions, 5 clicks, 0.28% CTR, 9.27 average position | High impressions for a young site. This is likely broad informational traffic, but it is worth a title/meta and intro review. |
| `/blog/tracking/physical-baby-tracker-vs-app/` | 200 impressions, 3 clicks, 1.5% CTR, 9.02 average position | Good fit with Nubo's differentiator. Refresh internal links and make `/device/` the clear next step. |
| `/blog/privacy/what-data-does-baby-tracking-app-collect/` | 351 impressions, 0 clicks, 8.09 average position | Strong candidate for snippet and title work, but only after privacy disclosure alignment is verified. |

### Early query hints

The query file is thin, but it still shows useful hints:

- Brand visibility exists: `nubo`, `nubo baby`, `nubo baby tracker`, and `nubo app` account for most reported query impressions.
- `baby tracker device` appears with 22 impressions at 13.14 average position. That is small, but it directly supports the physical tracker/device strategy.
- Gift queries are showing earlier than expected. This is not the core strategic wedge, but the gift page and gift article should continue linking into the device page.
- The diaper article is gaining impressions mostly through many small, long-tail queries that are not fully visible in the query export.

### Search appearance signal

The Search appearance export shows:

- Product snippets: 112 impressions, 6 clicks, 5.36% CTR, 8.35 average position.
- Review snippet: 100 impressions, 0 clicks, 7.73 average position.

Action: audit review/rating structured data before expanding structured data. `AggregateRating` appears on `/device/` and `/pricing/`. Keep it only if the rating and review count are accurate, current, and sufficiently supported by visible page content or a clearly linked source. If not, remove the rating markup in a future implementation pass. This is not a page copy change for this planning pass, but it belongs in the technical SEO backlog.

### Low-data operating mode

Because the property is young, do not wait for 3 to 6 months of perfect data before making obvious improvements. Use this priority order:

1. Product truth: improve pages where Nubo has a real differentiated answer.
2. Early impressions: prioritize pages already visible in Search Console.
3. Conversion value: favor pages that route to Amazon, App Store, Google Play, Alexa, `/pricing/`, `/device/`, or `/app/`.
4. Low-risk snippet work: rewrite titles and descriptions before creating new pages.
5. New URLs: create only when an existing page cannot satisfy the intent.

For the next implementation pass, the data supports improving existing pages in this order:

1. `/app/`
2. `/device/`
3. `/caregivers/`
4. `/pricing/`
5. `/blog/tracking/newborn-diaper-output-normal/`
6. `/blog/tracking/physical-baby-tracker-vs-app/`
7. `/blog/privacy/what-data-does-baby-tracking-app-collect/`

## Plausible traffic and conversion read

The Plausible export covers 2026-03-21 through 2026-06-19. This data is more useful than early GSC for understanding page quality after the click.

Files reviewed:

- `/Users/guru/Downloads/Plausible export nubotracker.com 2026-03-21  to 2026-06-19 /channels.csv`
- `/Users/guru/Downloads/Plausible export nubotracker.com 2026-03-21  to 2026-06-19 /conversions.csv`
- `/Users/guru/Downloads/Plausible export nubotracker.com 2026-03-21  to 2026-06-19 /custom_props.csv`
- `/Users/guru/Downloads/Plausible export nubotracker.com 2026-03-21  to 2026-06-19 /entry_pages.csv`

### Channel mix

| Channel | Visitors | Share | Bounce | Visit duration |
|---|---:|---:|---:|---:|
| Organic Search | 75 | 36.4% | 55% | 101s |
| AI Assistants | 67 | 32.5% | 29% | 38s |
| Direct | 63 | 30.6% | 79% | 45s |
| Referral | 1 | 0.5% | 100% | 0s |

Implications:

- Organic Search is already the largest channel, even with young GSC data.
- AI Assistant traffic is unusually meaningful and has the best bounce rate. Keep `llms.txt`, `llms-full.txt`, clear product pages, and Bing indexing healthy.
- Direct traffic has high bounce. Some of this may be low-intent, bots, or visitors checking a single link, but homepage and app page clarity still matter.
- Mobile dominates the traffic mix: 159 mobile visitors, 46 desktop, and 1 tablet. SEO pages and CTAs should be designed mobile-first.

### Conversion signals

Across 206 channel-attributed visitors:

| Conversion | Unique conversions | Total conversions | Visitor-rate |
|---|---:|---:|---:|
| Outbound Link: Click | 76 | 92 | 36.9% |
| Visited App | 68 | 79 | 33.0% |
| Visited Pricing | 26 | 30 | 12.6% |
| Visited Device | 21 | 27 | 10.2% |
| Scroll 50% on `/blog/**` | 16 | n/a | 7.8% |
| Scroll 75% on `/app/` | 7 | n/a | 3.4% |
| Scroll 50% on `/pricing/` | 7 | n/a | 3.4% |
| Scroll 75% on `/pricing/` | 6 | n/a | 2.9% |
| Scroll 75% on `/device/` | 3 | n/a | 1.5% |

Outbound marketplace clicks:

| Destination | Visitors | Events | Visitor-rate |
|---|---:|---:|---:|
| App Store | 36 | 37 | 17.5% |
| Amazon device listing | 26 | 33 | 12.6% |
| Google Play | 18 | 19 | 8.7% |
| Secondary Amazon listing | 2 | 2 | 1.0% |
| YouTube unboxing | 1 | 1 | 0.5% |

Implications:

- Marketplace clicks are already happening. The site is not merely informational traffic.
- App Store clicks lead, then Amazon, then Google Play. This supports making `/app/` the first SEO improvement target.
- `/device/` has fewer visitors than `/app/`, but the Amazon click volume is strong relative to total traffic. Device intent is valuable.
- Use outbound clicks as success events. A high exit rate on `/app/` or `/device/` is not automatically bad if users are clicking through to the App Store, Google Play, or Amazon.

### Entry page signals

| Entry page | Entrances | Bounce | Visit duration | Interpretation |
|---|---:|---:|---:|---|
| `/` | 73 | 62% | 73s | Homepage is a major entry and needs clear paths into app, device, and pricing. |
| `/app/` | 62 | 27% | 59s | Best product-entry signal. Improve this first. |
| `/blog/tracking/newborn-diaper-output-normal/` | 10 | 100% | 0s in entry report, 82s page time | People may read and leave. Add stronger contextual next steps, not just more copy. |
| `/pricing/` | 8 | 78% | 0s in entry report, 41s page time | Pricing is visible but likely needs clearer search snippet and above-fold decision framing. |
| `/device/` | 7 | 44% | 96s | Good engagement. Strengthen search-intent language and CTA paths. |
| `/alexa/` | 6 | 67% | 164s | Small but engaged. Keep as product support and AI/search answer page. |
| `/how-it-works/` | 5 | 40% | 397s | Strong engagement, but route is currently a redirect. Monitor because GSC also shows it. |
| `/blog/feeding/how-to-track-breastfeeding-without-phone/` | 4 | 75% | 23s | Strong strategic fit, but needs clearer next steps into device/app pages. |
| `/blog/tracking/physical-baby-tracker-vs-app/` | 4 | 100% | 0s in entry report, 56s page time | High-intent article is not moving visitors onward. Improve internal links and end CTA. |

### Plausible-adjusted priorities

Plausible reinforces the low-data GSC plan but changes the rationale:

1. `/app/`: highest product entry volume, strong bounce profile, and App Store clicks are the top outbound action.
2. `/device/`: lower volume, good engagement, and Amazon clicks are already meaningful.
3. `/pricing/`: conversion-critical but high bounce, needs clearer decision framing.
4. `/caregivers/`: low traffic but strategic SEO wedge, and existing article traffic should route here.
5. `/blog/tracking/newborn-diaper-output-normal/`: high GSC impressions and real reads, needs better next-step routing.
6. `/blog/tracking/physical-baby-tracker-vs-app/`: high strategic fit, needs stronger product-page routing.
7. `/blog/feeding/how-to-track-breastfeeding-without-phone/`: small volume, high relevance, improve device/app links.
8. `/blog/privacy/what-data-does-baby-tracking-app-collect/`: important trust page, but refresh only after privacy disclosure alignment.

### Measurement improvements to consider

Plausible is already useful, but SEO implementation would be easier to evaluate with more granular events:

- Track outbound clicks by source page, label, and destination category: App Store, Google Play, Amazon, Alexa, YouTube.
- Track clicks from blog posts into `/app/`, `/device/`, `/pricing/`, `/caregivers/`, and `/privacy/`.
- Track primary CTA clicks separately from footer or inline links.
- Track scroll milestones on `/device/`, `/caregivers/`, `/compare/`, and high-intent blog posts, not only `/app/`, `/pricing/`, and `/blog/**`.
- Track "copy route" or "internal decision click" events for `/resources/` and `/compare/` if those pages become stronger hubs.

## SEO objective

Increase relevant organic traffic from parents who are evaluating a baby tracker, not just reading general newborn advice.

Primary outcomes:

- More impressions for high-intent baby tracker, physical tracker, caregiver tracker, screen-free tracker, and privacy tracker queries.
- Better CTR on pages already getting impressions.
- More qualified clicks to Amazon, App Store, Google Play, Alexa, `/pricing/`, `/device/`, and `/app/`.
- More internal link flow from articles into feature and conversion pages.
- Less reliance on broad newborn topics where Nubo has weaker topical authority.

## Target audience and search intent

### Commercial intent

The user is choosing a product or setup.

Examples:

- baby tracker app
- newborn tracker app
- free baby tracker app
- baby tracker for iPhone and Android
- physical baby tracker
- baby tracking device
- one tap baby tracker
- screen free baby tracker
- baby tracker without phone
- baby tracker for two parents
- shared baby tracker app
- baby tracker for nanny
- baby tracker for grandparents
- private baby tracker app

Best page type: feature landing page, comparison page, pricing page, or caregiver page.

### Problem-solving intent

The user has a specific care scenario.

Examples:

- track night feeds without phone
- track breastfeeding without phone
- baby handoff checklist
- nanny baby daily log app
- newborn care handoff template
- how to share baby tracking with nanny
- what to bring to newborn pediatrician visit

Best page type: article, guide, template, or use-case landing page with a direct next step.

### Research intent

The user is learning whether tracking is worth doing or how normal baby behavior works.

Examples:

- should I track baby sleep and feeding
- newborn feeding schedule
- newborn wake windows
- newborn diaper output
- how many hours should newborn sleep

Best page type: article or guide. These pages should be helpful first, then link naturally to tracking methods and product pages.

## Positioning rule

Every SEO initiative should route back to this sentence:

"Nubo helps families track feeds, sleep, diapers, and care handoffs when they are exhausted, holding a baby, and relying on more than one caregiver."

That should shape page choice, keywords, headings, examples, screenshots, FAQs, and internal links.

## Keyword and page map

### Cluster 1: core baby tracker app keywords

Create or strengthen durable landing pages for these, rather than relying only on blog posts.

| Query family | Primary URL | Action |
|---|---|---|
| baby tracker app | `/app/` | Strengthen title, H1, intro, FAQ, and internal links around the phrase. |
| newborn tracker app | New `/newborn-tracker-app/` or strengthened `/app/` section | Decide after Search Console query data. |
| free baby tracker app | `/app/` plus existing article | Make `/app/` the commercial answer, and use the article as support. |
| baby tracker app for iPhone and Android | `/app/` | Add a clear cross-platform section and FAQ. |
| baby tracker app for two parents | New `/shared-baby-tracker-app/` or `/caregivers/` section | Treat as high-intent caregiver sync. |
| shared baby tracker app | `/caregivers/` or new feature page | Link from nanny, grandparent, co-parenting, and app pages. |

Recommendation: start by strengthening `/app/` before adding new app-adjacent URLs. Add a dedicated `/shared-baby-tracker-app/` only if GSC shows meaningful impressions or if `/caregivers/` cannot satisfy the intent cleanly.

### Cluster 2: physical and screen-free tracking

This is Nubo's clearest differentiator.

| Query family | Primary URL | Action |
|---|---|---|
| physical baby tracker | `/device/` and existing article | Make `/device/` the commercial page, article supports it. |
| baby tracking device | `/device/` | Add clearer category language above the fold. |
| one tap baby tracker | `/device/` and `/` | Keep in title and H1 language. |
| one touch baby tracker | `/device/` | Consider synonyms in body copy, not forced in title. |
| baby tracker button | `/device/` | Add FAQ or section using natural language. |
| screen free baby tracker | New `/screen-free-baby-tracker/` or strengthen `/device/` | High priority if GSC shows impressions. |
| baby tracker without phone | Existing article plus `/device/` | Add stronger links both directions. |
| track night feeds without phone | Existing breastfeeding article, `/device/`, possible new night-feed page | Good use-case page candidate. |

Recommendation: create one screen-free use-case landing page only if it can be meaningfully different from `/device/` and `how-to-track-breastfeeding-without-phone.mdx`. Otherwise, improve `/device/` and the existing article first.

### Cluster 3: caregiver tracking

This may be the easiest organic wedge because the problem is specific and Nubo has real product fit.

| Query family | Primary URL | Action |
|---|---|---|
| baby tracker for grandparents | `/caregivers/` plus existing posts | Add grandparent-specific section and FAQ on `/caregivers/`. |
| baby tracker for nanny | `/caregivers/` plus existing posts | Add nanny-specific section and FAQ on `/caregivers/`. |
| nanny baby daily log app | New article or template guide | Good downloadable template candidate. |
| baby log for nanny | Template guide | Create a practical template page if assets are available. |
| baby handoff checklist | Existing and future guides | Convert into a hub section with links. |
| newborn care handoff template | Template guide | High value for Pinterest and backlinks. |
| baby tracker for multiple caregivers | `/caregivers/` | Make this phrase visible in H2, FAQ, and internal links. |

Recommendation: make `/caregivers/` the canonical conversion page for caregiver intent. Use blog posts and templates to feed it.

### Cluster 4: privacy and trust

Proceed carefully. Privacy claims must match the app, website, app stores, privacy policy, and actual implementation.

| Query family | Primary URL | Action |
|---|---|---|
| private baby tracker app | `/privacy/` and `/app/` | Use only claims that are verified across disclosures. |
| baby tracker app privacy | Existing privacy article plus `/privacy/` | Link from article to privacy overview and policy. |
| baby app data privacy | Existing article | Keep as research-intent page. |
| encrypted baby tracker | `/privacy/` | Use only with accurate implementation detail. |
| baby tracker no ads | `/app/` and `/privacy/` | Good if app store listing and policy align. |
| baby tracker without account | `/app/` and `/privacy/` | Use only if fully accurate for all platforms and workflows. |

Recommendation: run a disclosure alignment audit before expanding privacy SEO. If Google Play, App Store, site copy, and privacy policy differ, fix alignment before pushing privacy keywords harder.

### Cluster 5: comparison and alternative queries

These are closer to purchase intent but carry higher accuracy and fairness risk.

| Query family | Primary URL | Action |
|---|---|---|
| Nubo vs Talli | Existing `/compare/talli/` | Keep updated and factual. |
| Talli alternative | Existing or new `/compare/talli/` section | Add naturally if the page supports it. |
| Nubo vs Huckleberry | New comparison page | App-only comparison, focus on input surfaces and privacy. |
| Huckleberry alternative | New comparison page or section | Avoid unsupported claims. |
| Nubo vs Baby Tracker app | New comparison page | Clarify which app is being compared. |
| Nubo vs Nara Baby | New comparison page | Verify current features before publishing. |
| Nubo vs paper baby log | `/compare/` or new section | Low risk, useful, and product-relevant. |

Recommendation: do not mass-produce comparison pages. Start with the pages that match real competitor demand and where Nubo has a clean, provable distinction.

## URL strategy

Do not create `/buy/`, `/shop/`, `/cart/`, `/checkout/`, or `/wishlist/`.

Preserve the indexed WordPress-era URLs:

- `/`
- `/privacy-policy/`
- `/contact/`
- `/faq/`

Keep redirect behavior:

- `/support/` meta-refreshes to `/contact/`
- `/how-it-works/` meta-refreshes to `/`

Candidate new URLs, in priority order:

| Priority | URL | Purpose | Notes |
|---|---|---|---|
| 1 | `/shared-baby-tracker-app/` | Capture two-parent and multi-caregiver app searches | Only if distinct from `/caregivers/`. |
| 1 | `/screen-free-baby-tracker/` | Capture physical, no-phone, and night-feed search intent | Could also be a major section on `/device/`. |
| 2 | `/compare/huckleberry/` | Decision-stage comparison | Verify current competitor feature set before writing. |
| 2 | `/compare/paper-baby-log/` | Low-risk comparison against notebooks and charts | Could live inside `/compare/`. |
| 3 | `/guides/nanny-baby-daily-log-template/` | Template-led traffic and backlink asset | Needs actual template content, not thin SEO copy. |
| 3 | `/guides/newborn-care-handoff-template/` | Caregiver handoff lead asset | Useful for Pinterest and organic links. |

Default rule: improve an existing page first unless a new URL serves a clearly different intent.

## Existing page improvement plan

### `/app/`

Goal: become the strongest commercial page for free baby tracker app, baby tracker app for iPhone and Android, voice catch-up, and caregiver sync.

Recommended changes for a future implementation pass:

- Adjust H1 or intro to include "free baby tracker app" more directly while keeping the warm voice.
- Add a visible section for "iPhone, Android, and every caregiver" with specific iOS and Android language.
- Add FAQ questions:
  - Is Nubo really free?
  - Can two parents use the same baby tracker?
  - Can caregivers use Nubo on both iPhone and Android?
  - Can I log baby events after they happen?
- Link to `/caregivers/`, `/privacy/`, `/pricing/`, and `/device/` with descriptive anchors.
- Keep App Store and Google Play CTAs direct with `target="_blank"` and `rel="noopener noreferrer"`.

### `/device/`

Goal: become the strongest commercial page for physical baby tracker, one-tap baby tracker, baby tracking device, screen-free baby tracker, and night feeds without phone use.

Recommended changes:

- Make "physical baby tracker" and "baby tracking device" visible in body copy, preferably near the top.
- Add a section that names the screen-free moment: night feeds, contact naps, diaper changes, and caregiver handoffs.
- Add FAQ questions:
  - What is a physical baby tracker?
  - Can I track feeds and diapers without opening my phone?
  - Does the device work for grandparents or nannies?
  - What happens when the phone is out of range?
- Link to the physical tracker article, Bluetooth sync article, caregiver page, and pricing page.

### `/caregivers/`

Goal: become the canonical landing page for baby tracker for grandparents, baby tracker for nanny, shared baby tracker app, and multiple caregivers.

Recommended changes:

- Split content into parent, nanny, grandparent, and occasional caregiver sections.
- Add screenshots or real product images showing caregiver timeline and device use.
- Add a practical handoff checklist block, then link to a guide or template.
- Add FAQ questions:
  - Can grandparents log feeds without learning a complicated app?
  - Can a nanny share baby logs with parents in real time?
  - Can multiple caregivers use the same baby tracker?
  - Does every caregiver need Premium?
- Add internal links from caregiver posts into this page using exact but natural anchors.

### `/compare/`

Goal: become the product decision hub, not just a broad comparison page.

Recommended changes:

- Keep the honest paper vs app vs device structure.
- Add a decision matrix for:
  - App-only families.
  - Night-feed-heavy families.
  - Nanny or grandparent households.
  - Privacy-sensitive families.
  - Gift buyers.
- Add comparison subpage links, starting with Talli and future Huckleberry.
- Add FAQ questions:
  - Is a physical baby tracker worth it?
  - Should I use a baby tracker app or paper log?
  - What is the easiest baby tracker for caregivers?

### `/resources/` and `/blog/`

Goal: turn resources into intent hubs instead of chronological browsing.

Recommended changes:

- Use `/resources/` as the human-facing hub.
- Keep `/blog/` as the archive, but add stronger internal routes from `/resources/`.
- Create hub sections:
  - Baby tracker app and device.
  - Screen-free night tracking.
  - Caregiver handoffs.
  - Feeding, sleep, and diapers.
  - Privacy and data.
  - Choosing a setup.
- Within each hub, list the best articles and the relevant product page.

## Content refresh plan

### Rewrite article titles where CTR or intent is weak

Do this based on Search Console data first. Candidate rewrites:

| Current title | Possible search-aligned title |
|---|---|
| One-Handed at 3am: How Phone Hand Mode Works | One-Handed Baby Tracker App: How Phone Hand Mode Helps at 3am |
| The Invisible Tracker: How Nubo Works When You're Not Looking | How Nubo Baby Tracker Works: Device, App, Voice, and Alexa |
| Baby Tracking for Grandparents: the Simpler, the Better | Baby Tracker for Grandparents: Simple One-Tap Logging |
| Pumping Data Is Yours Alone: How Nubo Keeps Milk Output Private | Private Pumping Tracker: How Nubo Keeps Milk Output Separate |
| Your Baby Tracker Is Only as Good as Its Worst Day | Baby Feeding Average Per Day: Why Missed Logs Skew the Number |
| Why Your Baby Tracker Night Mode Is Costing You Sleep | Baby Tracker Night Mode: Why Blue Light Matters at 3am |

Rule: never rewrite a strong brand title unless the page has impressions and low CTR, impressions for the wrong query, or average position 8 to 20 where clearer intent could help.

### Improve existing posts before adding many new ones

Priority refreshes:

1. `physical-baby-tracker-vs-app.mdx`
   - Add stronger links to `/device/`, `/compare/`, and `/pricing/`.
   - Ensure "physical baby tracker" appears early and naturally.
   - Add FAQ if visible content supports it.

2. `how-to-track-breastfeeding-without-phone.mdx`
   - Add night-feed and screen-free language.
   - Link to `/device/`, `/app/`, and `/privacy/` where relevant.

3. `best-baby-tracker-for-nanny-grandparents.mdx`
   - Link more strongly to `/caregivers/`.
   - Consider whether the combined nanny and grandparent page should stay combined or branch into two pages.

4. `free-baby-tracker-no-paywalls.mdx`
   - Link to `/app/` as the commercial answer.
   - Verify every free feature claim against current app behavior.

5. `what-data-does-baby-tracking-app-collect.mdx`
   - Link to `/privacy/` and `/privacy-policy/`.
   - Confirm claims match app store disclosures.

### New content candidates

Create only if each has a distinct use case and enough substance:

| Priority | Content | Best format | Why |
|---|---|---|---|
| 1 | Best baby tracker app for two parents | Landing page or article | High-intent shared tracking query. |
| 1 | Baby tracker without using your phone at night | Landing page or article | Strong Nubo differentiation. |
| 1 | Baby tracker for grandparents | Landing page or article refresh | Clear caregiver wedge. |
| 1 | Baby tracker for nannies | Landing page or article refresh | Clear caregiver wedge. |
| 2 | Baby feeding tracker: breastfeeding, bottles, pumping, and formula | Feature page or guide | Ties app and device together. |
| 2 | Baby diaper tracker: wet and dirty diaper logs by age | Feature page or guide | Already supported by diaper article. |
| 2 | Baby sleep tracker: naps, night sleep, and wake windows | Feature page or guide | Strong internal link opportunity. |
| 2 | Best free baby tracker app: what is actually free? | Refresh existing post | Avoid duplicate content. |
| 3 | Nanny baby daily log template | Guide with downloadable asset | Linkable, useful, caregiver-intent. |
| 3 | Newborn care handoff template | Guide with downloadable asset | Linkable, useful, caregiver-intent. |

## Internal linking plan

Build a deliberate link graph:

- Blog posts answer questions and link to commercial pages.
- Commercial pages link to the best supporting articles.
- `/resources/` groups pages by intent and routes people toward the right product page.
- Comparison pages link to `/pricing/`, `/device/`, `/app/`, and Amazon/App Store/Google Play where appropriate.

Anchor text examples:

- "free baby tracker app for iPhone and Android" to `/app/`
- "one-tap baby tracking device" to `/device/`
- "shared baby tracker for caregivers" to `/caregivers/`
- "compare baby tracker setups" to `/pricing/`
- "physical baby tracker vs app comparison" to the existing article
- "baby app data privacy checklist" to the existing privacy article

Avoid generic anchors such as "click here," "learn more," and repeated exact-match anchors in every paragraph.

## Structured data plan

Keep `BaseLayout.astro` as the owner of the JSON-LD graph and breadcrumb markup.

Use structured data only where visible content supports it:

- `Product` on `/device/`, with current price, marketplace URL, image, brand, and description. Avoid reviews or ratings unless they are real and visible.
- `MobileApplication` on `/app/`, with iOS and Android install URLs and accurate free/Premium offers.
- `FAQPage` on pages with visible FAQ sections, especially `/device/`, `/app/`, `/caregivers/`, `/compare/`, and `/pricing/`.
- `Article` through `BlogLayout.astro` and `GuideLayout.astro`.
- `CollectionPage` on `/resources/`, `/blog/`, `/guides/`, and category pages.
- `BreadcrumbList` remains centralized through `BaseLayout.astro`.

Validation:

- Run `npm run build`.
- Use Google's Rich Results Test for pages with Product, MobileApplication, and FAQPage markup.
- Check Search Console Rich Results after deployment.

## Search Console workflow

Use data before rewrites.

### Export monthly

From Google Search Console:

- Queries by page.
- Pages by impressions.
- Pages by clicks.
- Queries with average position 8 to 20.
- Queries with high impressions and low CTR.
- Pages with "Crawled, currently not indexed."

### Prioritize work

| Signal | Meaning | Action |
|---|---|---|
| High impressions, low CTR | Google sees relevance, searchers are not choosing the result | Rewrite title and meta description first. |
| Position 8 to 20 | Page is close enough to improve | Add internal links, clearer headings, FAQs, screenshots, and stronger answer coverage. |
| Impressions for wrong queries | Page intent is blurry | Retitle, refocus intro, adjust headings, or split page. |
| No impressions after indexing | Query may be too weak or page has low authority | Add internal links or merge into a hub. |
| Crawled but not indexed | Possible thin, duplicate, or low-value content | Improve, consolidate, or leave if noncritical. |

### Suggested first dashboard segments

- Query contains: `baby tracker`
- Query contains: `feeding tracker`
- Query contains: `diaper tracker`
- Query contains: `sleep tracker`
- Query contains: `nanny`
- Query contains: `grandparent`
- Query contains: `without phone`
- Query contains: `screen free`
- Query contains: `privacy`
- Page contains: `/device/`
- Page contains: `/app/`
- Page contains: `/caregivers/`
- Page contains: `/compare/`
- Page contains: `/blog/tracking/`

## Technical SEO checklist

Run this before and after implementation passes:

- `npm run build` passes.
- Generated sitemap includes all intended static, blog, and guide URLs.
- `robots.txt` still references the correct sitemap.
- Canonical URLs use `https://www.nubotracker.com` and trailing slashes.
- No forbidden commerce routes exist.
- `/support/` and `/how-it-works/` redirect behavior remains unchanged.
- Monitor stray low-volume GSC URLs such as `/shop/`, `http://` variants, and malformed `/blog//.../` paths. Do not create a `/shop/` route, but investigate redirect or canonical hygiene if these persist.
- External marketplace links use `target="_blank"` and `rel="noopener noreferrer"`.
- Image alt text describes the product, screenshot, or caregiver scenario.
- LCP images are not lazy-loaded.
- Noncritical images are lazy-loaded.
- No important content is hidden behind client-side JavaScript.
- Titles are unique.
- Meta descriptions are unique and written for the query intent.
- `AggregateRating` or review structured data is used only when current, accurate, and supported by visible content or a clearly linked source.
- No new copy contains unsupported medical, diagnostic, treatment, cure, prevention, or clinical monitoring claims.
- No visible published dates are added to evergreen blog bodies.

## Measurement plan

### Organic metrics

Track monthly:

- Google Search impressions by target cluster.
- Google Search clicks by target cluster.
- CTR for high-impression pages.
- Average position for pages in the 8 to 20 range.
- Indexed page count.
- Rich result eligibility and errors.
- Bing Webmaster Tools crawl/index status.

### Conversion support metrics

Track in Plausible:

- Amazon Device Click.
- App Store Click.
- Google Play Click.
- Download Intent Click.
- Decision Support Click.
- Source page and CTA label for outbound marketplace clicks.
- Blog-to-product internal clicks.
- Entry pages that lead to these events.
- Internal path from blog post to `/device/`, `/app/`, `/pricing/`, or `/caregivers/`.

### Success thresholds

First 90 days after implementation:

- Target pages gain impressions for the intended query clusters.
- CTR improves on rewritten high-impression pages.
- `/device/`, `/app/`, `/caregivers/`, and `/compare/` receive more internal entrances from articles.
- More organic sessions trigger marketplace or decision-support events.
- Blog pages with meaningful reads send more visitors into product or setup pages.

Do not judge new pages only by clicks in the first few weeks. For early SEO work, impressions and query relevance matter first.

## Phased implementation backlog

### Phase 0: data and alignment

No page changes yet.

- Confirm Google Search Console Domain property and sitemap are active.
- Export query and page performance for the last 3 months.
- Export Plausible channels, conversions, custom props, entry pages, pages, and exit pages for the same date range.
- Confirm Bing Webmaster Tools setup.
- Audit App Store, Google Play, privacy policy, `/privacy/`, and `/app/` for privacy and free-feature alignment.
- Identify top 10 pages by impressions and top 10 pages by low CTR.
- Identify top entry pages, high-bounce entry pages, and pages that produce outbound marketplace clicks.
- Identify queries where Nubo already appears for baby tracker, caregiver, no-phone, and privacy terms.

Acceptance:

- A spreadsheet or issue list exists with page, query, impressions, clicks, CTR, position, Plausible entrances, bounce, outbound-click role, and recommended action.

### Phase 1: improve existing commercial pages

- Refresh `/app/` for free baby tracker app, App Store and Google Play intent, and cross-platform caregiver intent.
- Refresh `/device/` for physical baby tracker, screen-free baby tracker, night-feed intent, and Amazon purchase intent.
- Refresh `/pricing/` for clearer setup decision framing because it is conversion-critical and currently high-bounce.
- Refresh `/caregivers/` for nanny, grandparent, two-parent, and multiple-caregiver intent.
- Refresh `/compare/` as the setup decision hub.
- Add visible FAQs and matching JSON-LD only where useful.

Acceptance:

- Each page has a clear primary query family.
- Each page links to at least 2 supporting articles.
- Each page has direct CTAs to the appropriate marketplace or setup path.
- Build passes.
- Rich Results Test passes for changed structured data.

### Phase 2: refocus existing content

- Rewrite selected article titles and meta descriptions based on GSC data.
- Strengthen intros, H2s, and internal links for top near-ranking posts.
- Add or improve FAQ sections on high-intent articles only.
- Consolidate overlapping caregiver posts if they compete with each other.

Acceptance:

- No duplicate or near-duplicate pages target the same query without a clear reason.
- Internal links route research-intent traffic into `/app/`, `/device/`, `/caregivers/`, `/privacy/`, `/pricing/`, and `/compare/`.
- Build passes.

### Phase 3: add one or two high-intent landing pages

Choose based on Search Console and Plausible data. Likely candidates:

- `/shared-baby-tracker-app/`
- `/screen-free-baby-tracker/`

Acceptance:

- Each page serves a distinct search intent not already satisfied by `/app/`, `/device/`, or `/caregivers/`.
- Each page includes real product screenshots or product imagery.
- Each page has unique title, description, canonical URL, Open Graph tags, and appropriate JSON-LD.
- Each page links to and receives links from relevant articles.
- Build passes.

### Phase 4: comparison expansion

- Update `/compare/talli/` if needed.
- Create `/compare/huckleberry/` only after verifying current competitor details.
- Consider paper log comparison inside `/compare/` before creating a new URL.

Acceptance:

- Claims are factual, dated internally in notes if competitor features were checked, and written fairly.
- No fake comparisons, invented limitations, or unsupported superiority claims.
- CTAs remain marketplace-directed and setup-directed.
- Build passes.

### Phase 5: templates and linkable assets

- Create nanny baby daily log template.
- Create newborn care handoff template.
- Consider pediatrician visit tracker or newborn feeding log PDF if it can be genuinely useful.

Acceptance:

- Template pages are useful without requiring a sale.
- Each template naturally links to `/caregivers/`, `/app/`, or `/device/`.
- Assets are accessible, printable if relevant, and mobile-friendly.
- Build passes.

## Risk controls

- Do not create thin SEO pages. If a page cannot offer a distinct practical answer, merge it into an existing hub.
- Do not overclaim privacy. Privacy SEO is powerful only if disclosures align.
- Do not overclaim medical value. Nubo is not a medical device.
- Do not let comparison pages become attack pages. Keep them factual and parent-centered.
- Do not introduce local commerce flows.
- Do not chase broad newborn advice at the expense of product-led relevance.
- Do not add structured data that is not represented in visible content.
- Do not add published dates to evergreen post bodies.

## My recommended first move

Start with the existing GSC and Plausible exports, then improve `/app/`, `/device/`, `/pricing/`, and `/caregivers/` before creating any new URLs.

Those pages already exist, already match Nubo's highest-value intent, and can absorb the keyword clusters from the advice without creating duplicate content. Once those pages are sharper, use articles and templates to support them.

The simple rule for the next implementation pass:

"Every article should help a tired parent, and every product page should make the right next step obvious."
