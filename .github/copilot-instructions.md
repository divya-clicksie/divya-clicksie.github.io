# Project Guidelines

## Overview

Static marketing site for [www.nubotracker.com](https://www.nubotracker.com/) — the public-facing site for the **Nubo baby activity tracker** (device + companion app). Hosted via **GitHub Pages** with **GitHub Actions** deploying an **Astro** static build from the `main` branch.

See `nubo_static_site_implementation_brief.md` for the full implementation brief, information architecture, and content plan.

## Tech Stack

- **Astro** with static output and **TypeScript**
- **MDX** for content pages (guides)
- **GitHub Actions** builds and deploys to GitHub Pages
- **Plausible Analytics** for privacy-friendly tracking
- Canonical domain: `www.nubotracker.com` (apex redirects to `www`)

## Architecture

```
/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Base, Page, and Guide layouts
│   ├── content/          # MDX content collections (guides)
│   └── pages/            # Astro page routes
├── public/               # Static assets (images, robots.txt, favicon)
├── .github/
│   ├── workflows/        # GitHub Actions deploy workflow
│   └── copilot-instructions.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Key Conventions

- **No em dashes** — never use the `—` character in copy, alt text, titles, or meta tags. Use periods, commas, or other punctuation instead.
- **Mobile-first responsive design** — the site promotes a mobile app
- **Semantic HTML5** — use `<header>`, `<main>`, `<section>`, `<footer>`, etc.
- **Accessible** — proper alt text, ARIA labels, sufficient color contrast, keyboard navigable
- **SEO-first** — every page needs unique `<title>`, meta description, canonical, OG tags, and JSON-LD structured data
- **No e-commerce** — the site is informational; CTAs route to Amazon, App Store, and Google Play
- New pages go in `src/pages/` as `.astro` files; Astro handles clean URL generation
- Guides use MDX content collections in `src/content/guides/`

## URL Preservation

These WordPress URLs must be preserved exactly (they are indexed by search engines):
- `/` `/privacy-policy/` `/contact/` `/faq/`

These must redirect via meta-refresh pages:
- `/support/` → `/contact/`
- `/shop/` `/cart/` `/checkout/` `/wishlist/` → `/buy/`

## Build & Dev

```sh
npm install          # Install dependencies
npm run dev          # Start Astro dev server (http://localhost:4321)
npm run build        # Production build to dist/
npm run preview      # Preview production build locally
```

## Deployment

Push to `main` → GitHub Actions builds Astro → deploys to GitHub Pages automatically.

## Local Preview

After making any changes, start the dev server to preview the site:

```sh
npm run dev
```

Always launch the dev server after edits so changes can be verified in the browser.
