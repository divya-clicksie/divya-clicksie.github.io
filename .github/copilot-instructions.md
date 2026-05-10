# Project Guidelines

## Overview

Static marketing site for [www.nubotracker.com](https://www.nubotracker.com/), the public-facing site for the **Nubo baby tracking ecosystem**: the free iOS and Android app, Premium app features, the one-button Nubo device, and the Nubo Alexa skill. The site is informational only and sends visitors directly to Amazon, the App Store, Google Play, and the Alexa skill page.

The site is deployed as a static Astro build through GitHub Actions and GitHub Pages from the `main` branch. See `nubo_static_site_implementation_brief.md`, `content_strategy.md`, and related proposal docs for strategy, but treat the current source code as the implementation source of truth.

## Tech Stack

- **Astro 4** with static output and TypeScript
- **MDX** content collections for blog posts and guides
- **@astrojs/sitemap** with `site: https://www.nubotracker.com`, static output, and `trailingSlash: 'always'`
- **GitHub Actions** deployment to GitHub Pages
- **Self-hosted Quicksand fonts** in `public/fonts/`
- **No website analytics or tracking scripts** on the marketing site

## Current Architecture

```
/
├── src/
│   ├── components/       # Shared Astro UI pieces
│   ├── content/          # MDX content collections: blog and guides
│   ├── layouts/          # BaseLayout, BlogLayout, GuideLayout
│   └── pages/            # Static and dynamic Astro routes
├── public/
│   ├── fonts/            # Self-hosted font files
│   ├── images/           # Product, app, badge, and article assets
│   ├── CNAME
│   └── robots.txt
├── .github/
│   ├── workflows/deploy.yml
│   └── copilot-instructions.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Routes

Core static routes currently live in `src/pages/`:

- `/` Home
- `/pricing/` Pricing and setup chooser
- `/device/` Nubo device
- `/app/` Free app and Premium features
- `/compare/` Logging and setup comparison
- `/how-it-works/` Ecosystem explainer
- `/caregivers/` Caregiver sharing and Premium behavior
- `/privacy/` Plain-English privacy overview
- `/resources/` Resources hub
- `/about/` About
- `/alexa/` Alexa skill
- `/gift/` Gift landing page
- `/privacy-policy/` Privacy Policy
- `/terms-of-use/` Terms of Use
- `/contact/` Contact
- `/faq/` FAQ
- `/support/` Meta-refresh redirect to `/contact/`

Content routes:

- `/blog/` Blog index from `src/content/blog/`
- `/blog/[category]/` Category pages generated from blog frontmatter
- `/blog/[category]/[slug]/` Blog posts rendered with `BlogLayout.astro`
- `/guides/` Guides index from `src/content/guides/`
- `/guides/[slug]/` Guides rendered with `GuideLayout.astro`

Do not create `/buy/`, `/shop/`, `/cart/`, `/checkout/`, or `/wishlist/`. All purchase CTAs should link directly to Amazon. App install CTAs should link directly to the App Store or Google Play.

## Content Collections

Blog posts live in `src/content/blog/*.mdx` and use this schema:

- `title`
- `description`
- `datePublished`
- `dateModified`
- `author` defaults to `Nubo Team`
- `category`: one of `sleep`, `feeding`, `tracking`, `caregiver`, `privacy`, `product`, `gifts`
- `primaryKeyword`
- optional `heroImage`, `ogImage`, `excerpt`, `tags`

Guides live in `src/content/guides/*.mdx` and use this schema:

- `title`
- `description`
- `datePublished`
- `dateModified`
- `author` defaults to `Nubo Team`
- optional `heroImage`, `ogImage`, `excerpt`, `tags`

When adding content, include relevant internal links to product pages, privacy pages, pricing, related posts, or marketplace CTAs. Avoid thin SEO pages, filler copy, fake comparisons, or unsupported claims.

## Shared Layouts and Components

- `BaseLayout.astro` owns the HTML shell, SEO tags, canonical URLs, OG/Twitter tags, optional JSON-LD, favicon links, font preloads, global CSS tokens, and the mobile sticky CTA.
- `Header.astro` and `Footer.astro` provide shared navigation and marketplace links.
- `BlogLayout.astro` renders blog posts with Article JSON-LD and category-specific next-step CTAs.
- `GuideLayout.astro` renders guide articles with Article JSON-LD.
- Reusable section components include `SpeedComparison.astro`, `CaregiverEconomics.astro`, `PremiumFollowsDevice.astro`, and `MobileStickyCTA.astro`.

Prefer existing shared components and global classes before introducing new abstractions. Keep page-specific CSS colocated in the relevant `.astro` file unless the pattern is already shared.

## Product Messaging

- Position Nubo as an ecosystem: device tap, app Quick Log, in-app voice catch-up, caregiver sync, and Alexa support all feed one baby timeline.
- Avoid hard-coding the number of ways to log. Use flexible language like "use what fits the moment" or "tap as it happens, talk to catch up".
- The app is free on iOS and Android. It includes routine tracking, unlimited caregivers, cloud backup, offline mode, quick logs, and in-app voice logging.
- Premium is an app upgrade for advanced tools such as reminders, exports, Alexa, Live Activities, private pumping, and advanced views. Current site copy uses `$39.99/year`.
- The Nubo device is sold through Amazon. Current site copy uses `$89.99` and says each phone that syncs with the device receives a refreshed 30-day Premium window.
- Nubo is not a medical device. Do not imply diagnosis, treatment, cure, prevention, or clinical monitoring.
- Use reassuring wording. Avoid copy that plants doubt about app or device reliability.

## SEO and Metadata

- Every page needs a unique title, meta description, canonical URL, Open Graph tags, Twitter card tags, and appropriate JSON-LD where useful.
- Use `BaseLayout` props instead of duplicating SEO markup.
- Static product and trust pages should pass JSON-LD when appropriate, for example `Product`, `MobileApplication`, `Organization`, `FAQPage`, `CollectionPage`, or `Article`.
- Blog and guide detail pages use `ogType="article"` through their layouts.
- Keep pages crawlable as static HTML. Do not hide important content behind client-side JavaScript.
- `robots.txt` and the generated sitemap must remain available.

## Design and Frontend Conventions

- Mobile-first responsive design. Many visitors are parents using phones.
- Use semantic HTML5: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`.
- Keep accessibility in the foreground: meaningful alt text, ARIA labels where needed, keyboard-friendly controls, and sufficient color contrast.
- Use the existing visual system from `BaseLayout.astro`: Quicksand, `--color-brand`, `--color-brand-dark`, `--color-brand-light`, text tokens, soft backgrounds, and shared button/link classes.
- Use real product, app, and badge assets from `public/images/` and `public/images/appscreens/`. Prefer responsive WebP assets and `srcset` where variants exist.
- Lazy-load non-critical images. Use eager loading and `fetchpriority="high"` only for expected LCP images.
- Keep pages product-forward, practical, warm, and easy to scan. Avoid generic AI-sounding copy.

## Copy Rules

- No em dashes in copy, alt text, titles, metadata, or new documentation. Use commas, periods, colons, semicolons, or parentheses instead.
- Do not add website analytics, tracking pixels, retargeting scripts, session replay, heatmaps, or cookie banners.
- Do not present the marketing site as the checkout destination.
- CTA labels should stay direct and familiar, such as "Buy on Amazon", "Download on the App Store", and "Get it on Google Play".
- External marketplace, store, social, and video links need `target="_blank"` and `rel="noopener noreferrer"`.

## URL Preservation

These indexed WordPress-era URLs must be preserved exactly:

- `/`
- `/privacy-policy/`
- `/contact/`
- `/faq/`

`/support/` must remain a meta-refresh redirect to `/contact/`.

## Build and Verification

```sh
npm install          # Install dependencies
npm run dev          # Start Astro dev server, default http://localhost:4321
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
```

After edits, run `npm run build`. For visual or copy changes, also start `npm run dev` and verify the relevant page in a browser. If the default port is taken, Astro will choose another port.

## Deployment

Push to `main`, then GitHub Actions builds Astro and deploys the static site to GitHub Pages automatically.
