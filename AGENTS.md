# AGENTS.md

## Scope

These instructions apply to the entire repository. Treat the current source code as the implementation source of truth. Strategy documents such as `nubo_static_site_implementation_brief.md`, `content_strategy.md`, and `site_architecture_proposal.md` provide context, but do not override working code unless the user asks for a strategy refresh.

## Project Overview

This is the static marketing site for `www.nubotracker.com`, the public-facing site for the Nubo baby tracking ecosystem: the free iOS and Android app, Premium app features, the one-tap Nubo device with dedicated event buttons, and the Nubo Alexa skill.

The site is informational. It should send visitors directly to Amazon, the App Store, Google Play, and the Alexa skill page. Do not build local commerce flows.

## Tech Stack

- Astro 4 with static output and TypeScript.
- MDX content collections for blog posts and guides.
- `@astrojs/sitemap` with `site: https://www.nubotracker.com`, static output, and `trailingSlash: 'always'`.
- GitHub Actions deployment to GitHub Pages from `main`.
- Self-hosted Quicksand fonts in `public/fonts/`.
- Privacy-friendly, cookieless analytics may be used. Plausible is approved. Ad pixels, retargeting scripts, heatmaps, session replay, and cookie-banner-dependent tracking are prohibited.

## Repository Map

- `src/components/`: shared Astro UI components.
- `src/content/`: MDX content collections for `blog` and `guides`.
- `src/layouts/`: `BaseLayout`, `BlogLayout`, and `GuideLayout`.
- `src/pages/`: static and dynamic Astro routes.
- `public/fonts/`: self-hosted font files.
- `public/images/`: product, app, badge, and article assets.
- `public/CNAME` and `public/robots.txt`: GitHub Pages domain and crawler controls.
- `.github/workflows/deploy.yml`: production deployment workflow.

## Routes

Core static routes live in `src/pages/`:

- `/`
- `/pricing/`
- `/device/`
- `/app/`
- `/compare/`
- `/caregivers/`
- `/privacy/`
- `/resources/`
- `/about/`
- `/alexa/`
- `/gift/`
- `/privacy-policy/`
- `/terms-of-use/`
- `/contact/`
- `/faq/`
- `/support/`, which must remain a meta-refresh redirect to `/contact/`
- `/how-it-works/`, which must remain a meta-refresh redirect to `/`

Content routes:

- `/blog/`
- `/blog/[category]/`
- `/blog/[category]/[slug]/`
- `/guides/`
- `/guides/[slug]/`

Do not create `/buy/`, `/shop/`, `/cart/`, `/checkout/`, or `/wishlist/`. Purchase CTAs should link directly to Amazon. App install CTAs should link directly to the App Store or Google Play.

## URL Preservation

Preserve these indexed WordPress-era URLs exactly:

- `/`
- `/privacy-policy/`
- `/contact/`
- `/faq/`

Keep `/support/` as a meta-refresh redirect to `/contact/`.

## Content Collections

Blog posts live in `src/content/blog/*.mdx` and use this frontmatter:

- `title`
- `description`
- `datePublished`
- `dateModified`
- `author`, defaulting to `Nubo Team`
- `category`: one of `sleep`, `feeding`, `tracking`, `caregiver`, `privacy`, `product`, or `gifts`
- `primaryKeyword`
- optional `heroImage`, `ogImage`, `excerpt`, and `tags`

Guides live in `src/content/guides/*.mdx` and use this frontmatter:

- `title`
- `description`
- `datePublished`
- `dateModified`
- `author`, defaulting to `Nubo Team`
- optional `heroImage`, `ogImage`, `excerpt`, and `tags`

When adding content, include relevant internal links to product pages, privacy pages, pricing, related posts, or marketplace CTAs. Avoid thin SEO pages, filler copy, fake comparisons, and unsupported claims.

## Blog Writing Workflow

When creating blog content, first read `content_strategy.md`. It contains brand voice rules, post specs, SEO guidance, the three-ways narrative framework, citation guidance, and the internal linking map.

Use this workflow:

1. Identify the next pending post in phase order unless the user requests a specific post.
2. Read related published posts in `src/content/blog/` and guides in `src/content/guides/` for tone and format.
3. Verify any academic citation with the source listed in the content strategy or through a reliable web fetch. Do not invent citations.
4. Create the MDX file in `src/content/blog/` using the strategy slug in kebab case.
5. Self-edit against the quality gates below.
6. Run `npm run build`.
7. For publish-style writing sessions, update `content_strategy.md` by marking the post done with the completion date and appending an execution log entry.

Blog quality gates:

- Every paragraph must contain a genuine insight, real product detail, or specific parenting scenario.
- The primary keyword should appear in the first 80 to 100 words.
- H2 and H3 headings should use sentence case and include secondary keywords where natural.
- Use the three-ways dosage specified in the strategy: Light, Medium, or Heavy.
- Mention Nubo naturally in the context of a real parenting problem. Avoid promotional blocks.
- Use descriptive internal link anchors. Never use "click here".
- Link only to posts that already exist as files.
- Do not add visible published dates to the post body.
- Stay within the strategy word count range. Shorter with substance is better than padded copy.

## Product Messaging

- Position Nubo as an ecosystem: device tap, app Quick Log, in-app voice catch-up, caregiver sync, and Alexa support all feed one baby timeline.
- Avoid hard-coding the number of ways to log. Use flexible language such as "use what fits the moment" or "tap as it happens, talk to catch up".
- The app is free on iOS and Android. It includes routine tracking, unlimited caregivers, cloud backup, offline mode, quick logs, and in-app voice logging.
- Premium is an app upgrade for advanced tools such as reminders, exports, Alexa, Live Activities, private pumping, and advanced views. Current site copy uses `$39.99/year`.
- The Nubo device is sold through Amazon. Current site copy uses `$89.99` and says each phone that syncs with the device receives a refreshed 30-day Premium window.
- Nubo is not a medical device. Do not imply diagnosis, treatment, cure, prevention, or clinical monitoring.
- Use reassuring wording. Avoid copy that plants doubt about app or device reliability.

## Copy Rules

- Do not use em dashes in copy, alt text, titles, metadata, or new documentation. Use commas, periods, colons, semicolons, or parentheses.
- Keep the voice warm, direct, practical, and non-judgmental.
- Validate parent exhaustion first, then offer practical help.
- Avoid generic AI-sounding copy.
- Do not use scare tactics, guilt, fake urgency, or exaggerated claims.
- Do not present the marketing site as the checkout destination.
- CTA labels should stay direct and familiar, such as "Buy on Amazon", "Download on the App Store", and "Get it on Google Play".
- External marketplace, store, social, and video links need `target="_blank"` and `rel="noopener noreferrer"`.

## SEO and Metadata

- Every page needs a unique title, meta description, canonical URL, Open Graph tags, Twitter card tags, and appropriate JSON-LD where useful.
- Use `BaseLayout` props instead of duplicating SEO markup.
- Static product and trust pages should pass JSON-LD when appropriate, for example `Product`, `MobileApplication`, `Organization`, `FAQPage`, `CollectionPage`, or `Article`.
- Blog and guide detail pages use `ogType="article"` through their layouts.
- Keep pages crawlable as static HTML. Do not hide important content behind client-side JavaScript.
- Keep `robots.txt` and the generated sitemap available.

## Design and Frontend Conventions

- Use mobile-first responsive design. Many visitors are parents using phones.
- Use semantic HTML5: `header`, `main`, `section`, `article`, `nav`, and `footer`.
- Prioritize accessibility: meaningful alt text, ARIA labels where needed, keyboard-friendly controls, and sufficient contrast.
- Use the visual system from `BaseLayout.astro`: Quicksand, `--color-brand`, `--color-brand-dark`, `--color-brand-light`, text tokens, soft backgrounds, and shared button and link classes.
- Prefer existing shared components and global classes before introducing new abstractions.
- Keep page-specific CSS colocated in the relevant `.astro` file unless the pattern is already shared.
- Use real product, app, and badge assets from `public/images/` and `public/images/appscreens/`.
- Prefer responsive WebP assets and `srcset` where variants exist.
- Lazy-load non-critical images. Use eager loading and `fetchpriority="high"` only for expected LCP images.
- Keep pages product-forward, practical, warm, and easy to scan.

## Shared Components and Layouts

- `BaseLayout.astro` owns the HTML shell, SEO tags, canonical URLs, OG and Twitter tags, optional JSON-LD, favicon links, font preloads, global CSS tokens, and the mobile sticky CTA.
- `Header.astro` and `Footer.astro` provide shared navigation and marketplace links.
- `BlogLayout.astro` renders blog posts with Article JSON-LD and category-specific next-step CTAs.
- `GuideLayout.astro` renders guide articles with Article JSON-LD.
- Existing reusable section components include `SpeedComparison.astro`, `CaregiverEconomics.astro`, `PremiumFollowsDevice.astro`, and `MobileStickyCTA.astro`.

## Build and Verification

Use npm scripts:

```sh
npm install
npm run dev
npm run build
npm run preview
```

Use `npm ci` in CI-style environments when installing from the lockfile. After edits, run `npm run build`. For visual or copy changes, also start `npm run dev` and verify the relevant page in a browser. If the default port is taken, Astro will choose another port.

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

- Trigger: push to `main` or manual `workflow_dispatch`.
- Runner: `ubuntu-latest`.
- Node: version 20 via `actions/setup-node`.
- Install: `npm ci`.
- Build: `npm run build`.
- Artifact: `dist/`.
- Deploy: GitHub Pages through `actions/deploy-pages`.

Do not edit deployment settings casually. Keep static output compatible with GitHub Pages.
