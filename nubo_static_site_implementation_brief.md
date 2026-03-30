# Nubo Static Site Implementation Brief

## Purpose
This document is the implementation brief for rebuilding the public Nubo marketing site as a static site that is easy to iterate on with AI tools such as GitHub Copilot.

The site is **not** intended to sell directly on the website for now. Its job is to:

1. become the canonical public explainer for Nubo
2. improve organic search and AI search visibility
3. route visitors to Amazon, App Store, and Google Play
4. provide linkable resources for partners, reviewers, and parenting experts

## Success criteria
Build a fast, crawlable, static marketing site on the `www.nubotracker.com` domain that:

- preserves existing SEO value wherever possible
- clearly explains the product and its differentiation
- exposes structured data for search engines
- includes evergreen content pages that can rank and earn links
- sends users to Amazon and mobile app stores as the primary conversion points

---

# Product positioning to preserve everywhere
Use these pillars consistently across the site, Amazon, App Store, and Play Store.

## Core messages
- One-touch baby tracking
- Faster than app-only logging
- Privacy-first and local-first
- Easy caregiver sharing
- Hospital-bag ready

## Working product summary
Nubo is a baby tracking device and companion app that helps parents log feedings, sleep, and diapers faster than app-only workflows. It is designed to be easy to use during the newborn stage, supports caregiver collaboration, and emphasizes privacy.

---

# Technical decision
## Recommended stack
Use **Astro** with static output.

Why:
- good for content-heavy sites
- outputs static HTML by default
- easy to maintain with markdown or MDX content
- works well with GitHub Pages using GitHub Actions
- easy for Copilot to modify
- simpler than keeping WordPress

## Required tech
- Astro
- TypeScript
- MDX for content pages
- GitHub Actions for deploy
- GitHub Pages for hosting
- canonical domain: `www.nubotracker.com` (redirect apex `nubotracker.com` → `www.nubotracker.com`; GitHub Pages handles this automatically when custom domain is set to `www.nubotracker.com` with "Enforce HTTPS" enabled)

## Optional but useful
- `astro-seo` or manual SEO tags
- `@astrojs/sitemap`
- image optimization using Astro assets
- **Plausible Analytics** for privacy-friendly analytics (aligns with Nubo's privacy-first positioning; add in Phase 2 when shared components are built)

---

# Non-negotiable site constraints
1. The live public domain must remain `www.nubotracker.com` (apex `nubotracker.com` redirects to `www`)
2. Existing important URLs should be preserved where possible
3. If URLs change, permanent redirects must be added
4. The website must not present itself as the purchase destination
5. Every important page must link out clearly to Amazon, App Store, and Play Store where appropriate
6. Pages must render as crawlable HTML
7. Every important page must have title, meta description, canonical URL, open graph tags, and internal links
8. The site must include `robots.txt` and `sitemap.xml`
9. The site must be structured so AI tools can safely edit content and UI without breaking SEO basics

---

# Information architecture
Implement the following pages first.

## Core pages
1. `/` Home
2. `/product/` Product
3. `/how-it-works/` How It Works
4. `/why-hardware-vs-app-only/` Why Hardware Beats App-Only Logging
5. `/share-with-caregivers/` Share With Caregivers
6. `/privacy-policy/` Privacy and Security (preserves existing indexed WordPress URL)
7. `/compare/` Nubo vs Pen and Paper vs App-Only
8. `/buy/` Buy Nubo
9. `/reviews/` Reviews, Testimonials, Press

## Evergreen content pages
1. `/guides/track-feeding-sleep-diapers-first-12-weeks/`
2. `/guides/why-a-physical-baby-tracker-is-faster/`
3. `/guides/share-baby-logs-with-partner-grandparents-nanny/`
4. `/guides/privacy-first-baby-tracking/`
5. `/guides/hospital-bag-ready-baby-tracker-setup/`
6. `/guides/best-way-to-track-newborn-feedings-sleep-and-diapers/`

## Supporting pages
- `/about/`
- `/contact/` (preserves existing indexed WordPress URL)
- `/faq/` (preserves existing indexed WordPress URL)
- `/press/`

## Redirect pages (meta-refresh, no real content)
- `/support/` → `/contact/`
- `/shop/` → `/buy/`
- `/cart/` → `/buy/`
- `/checkout/` → `/buy/`
- `/wishlist/` → `/buy/`

---

# Primary CTA rules
The site is informational. CTA behavior must reflect that.

## Primary CTA labels
- Buy on Amazon
- Download on the App Store
- Get it on Google Play

## CTA behavior
- product pages and guides should route to `/buy/` or directly to the marketplaces
- do not add an on-site cart or checkout flow
- avoid confusing mixed goals such as "Buy now" if the user cannot buy on site

---

# URL migration requirements
Before launch, export all current WordPress URLs and classify each as:
- keep
- redirect
- merge
- retire

## Preserve if possible
- homepage
- privacy policy
- terms
- any page that already ranks or is indexed

## Redirect rules
If a current WordPress URL is being replaced by a new URL, create a permanent redirect mapping.

GitHub Pages does not support server-side redirects. Use lightweight HTML redirect pages with `<meta http-equiv="refresh" content="0; url=/target/">` and a canonical tag pointing to the new URL. Astro can generate these as pages.

### Concrete redirect map from WordPress crawl

```txt
# Preserved as-is (same URL path)
/                    → keep
/privacy-policy/     → keep (now the main privacy page)
/contact/            → keep
/faq/                → keep

# Redirects (old URL → new URL)
/support/            → /contact/
/shop/               → /buy/
/cart/               → /buy/
/checkout/           → /buy/
/wishlist/           → /buy/

# Retired (no redirect needed — placeholder/template content from 2020)
/blog/
/why-every-startup-should-adopt-amazons-hot-air-baloon-race/
/is-there-a-relation-between-organic-farming-and-greenhouse-pollution/
/how-to-hack-your-virtual-reality-life-for-max-efficiency/
/how-to-travel-the-world-and-get-big-companies-to-pay-for-it/
/selecting-a-social-media-marketing-strategy-is-easy-as-a-pie/
/photography-tip-how-to-make-simple-contact-sheets-in-seconds/
/amazons-next-alexa-devices-will-intercom-capabilities/
/tupac-tribute-murals-and-graffiti-from-around-the-world/
/explore-the-sea-world-with-deep-sea-fishing-miami-2018/
/in-defense-of-being-on-the-phone-all-the-damn-time-24-hours/
/category/*          → retired
/author/*            → retired
/elementor-hf/*      → retired
```

If redirect needs grow beyond this, consider putting Cloudflare in front of GitHub Pages for proper 301 support.

---

# SEO requirements
## Global SEO
Every page must include:
- unique `<title>`
- unique meta description
- canonical tag
- open graph title, description, image, and url
- twitter card tags
- semantic headings
- crawlable internal links

## Robots
Create `public/robots.txt` with at minimum:

```txt
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Disallow: /

Sitemap: https://www.nubotracker.com/sitemap.xml
```

This preserves eligibility for search discovery while opting out of GPTBot training crawls.

> **Note on GPTBot:** Blocking GPTBot prevents OpenAI from using site content for model training. `OAI-SearchBot` (ChatGPT search) is allowed separately. If AI search visibility becomes more important than training opt-out, this can be revisited.

## Sitemap
Generate `sitemap.xml` automatically at build time.

## Crawlability rules
- use normal anchor tags for internal navigation
- do not hide important content behind client-only rendering
- avoid infinite scroll for critical content
- avoid unlinked orphan pages

---

# Structured data requirements
Use JSON-LD.

## Homepage
Add `Organization` structured data with:
- name
- url
- logo
- sameAs links where relevant

## Product page
Add `Product` structured data with:
- name
- description
- brand
- image
- url
- aggregateRating only if valid and supportable
- offers only if appropriate for a referral page; if included, make sure visible content matches reality

## Article or guide pages
Add `Article` structured data with:
- headline
- description
- author
- datePublished
- dateModified
- image

## Optional
Add `BreadcrumbList` once navigation is stable.

---

# Content requirements
## Tone
- clear
- warm
- practical
- parent-friendly
- not overhyped
- not generic AI fluff

## Page writing requirements
Every important page should include at least one of:
- a real product screenshot
- an original device photo
- a founder insight
- a real customer scenario
- a concrete comparison

## Avoid
- thin SEO pages
- filler content
- keyword stuffing
- fake comparison claims

---

# Design requirements
## High-level UX goals
- mobile-first
- clean and trustworthy
- product-forward
- easy to scan quickly
- minimal navigation clutter

## Suggested global layout
- sticky header
- hero section
- proof or trust strip
- product explanation blocks
- comparison or benefits blocks
- testimonials
- CTA section
- footer

## Reusable sections/components
Create reusable components for:
- `Header`
- `Footer`
- `Hero`
- `CTAButtons`
- `MarketplaceButtons`
- `TrustStrip`
- `FeatureGrid`
- `ComparisonTable`
- `TestimonialCard`
- `FAQSection`
- `GuideCard`
- `SEOHead`
- `Schema` helper

## Visual content
The design should make space for:
- device photos
- app screenshots
- caregiver collaboration screenshots
- PDF export screenshots if available
- quote cards or review snippets

---

# Repo structure
Use a structure close to this.

```txt
/
  public/
    favicon.svg
    robots.txt
    redirects.txt            # optional internal mapping reference
    images/
  src/
    components/
      Header.astro
      Footer.astro
      Hero.astro
      CTAButtons.astro
      MarketplaceButtons.astro
      TrustStrip.astro
      FeatureGrid.astro
      ComparisonTable.astro
      TestimonialCard.astro
      SEOHead.astro
      JsonLd.astro
    layouts/
      BaseLayout.astro
      PageLayout.astro
      GuideLayout.astro
    content/
      config.ts
      guides/
        track-feeding-sleep-diapers-first-12-weeks.mdx
        why-a-physical-baby-tracker-is-faster.mdx
        share-baby-logs-with-partner-grandparents-nanny.mdx
        privacy-first-baby-tracking.mdx
        hospital-bag-ready-baby-tracker-setup.mdx
        best-way-to-track-newborn-feedings-sleep-and-diapers.mdx
    pages/
      index.astro             # /
      product.astro           # /product/
      how-it-works.astro      # /how-it-works/
      why-hardware-vs-app-only.astro
      share-with-caregivers.astro
      privacy-policy.astro    # /privacy-policy/ (preserved from WordPress)
      compare.astro           # /compare/
      buy.astro               # /buy/
      reviews.astro           # /reviews/
      about.astro             # /about/
      contact.astro           # /contact/ (preserved from WordPress)
      faq.astro               # /faq/ (preserved from WordPress)
      press.astro             # /press/
      support.astro           # /support/ → redirect to /contact/
      shop.astro              # /shop/ → redirect to /buy/
      cart.astro              # /cart/ → redirect to /buy/
      checkout.astro          # /checkout/ → redirect to /buy/
      wishlist.astro          # /wishlist/ → redirect to /buy/
  CNAME                       # www.nubotracker.com
  .github/
    copilot-instructions.md   # AI agent guidelines
    workflows/
      deploy.yml
  nubo_static_site_implementation_brief.md
  astro.config.mjs
  package.json
  tsconfig.json
  README.md
```

---

# Content model
Use a typed frontmatter schema for guides.

## Guide frontmatter fields
- title
- description
- slug
- datePublished
- dateModified
- author
- heroImage
- ogImage
- excerpt
- tags

Example:

```md
---
title: "How to Track Feeding, Sleep, and Diapers in the First 12 Weeks"
description: "A practical newborn tracking workflow for parents who want something faster and easier than constant phone entry."
slug: "track-feeding-sleep-diapers-first-12-weeks"
datePublished: "2026-03-29"
dateModified: "2026-03-29"
author: "Nubo Team"
heroImage: "/images/guides/first-12-weeks-hero.jpg"
ogImage: "/images/og/first-12-weeks.jpg"
excerpt: "A simple way to stay on top of newborn feeding, sleep, and diaper logs."
tags: ["newborn tracking", "feeding", "sleep", "diapers"]
---
```

---

# Page-by-page implementation notes
## Home page
### Goal
Explain what Nubo is in one screen and route visitors into the best next page.

### Required sections
- hero with product promise
- short explainer of hardware + app workflow
- top benefits
- proof and trust
- how it works preview
- comparison preview
- caregiver sharing preview
- privacy preview
- CTA block

## Product page
### Goal
Be the canonical explainer of the product.

### Required sections
- what it is
- who it is for
- what it tracks
- device + app workflow
- why it is faster than app-only
- caregiver sharing
- privacy stance
- buying options
- FAQs

## Buy page
### Goal
Be the clean outbound conversion hub.

### Required sections
- short explanation of where to buy
- Amazon block
- App Store block
- Google Play block
- note that website checkout is not currently supported

## Compare page
### Goal
Differentiate Nubo clearly.

### Required table rows
- speed of logging
- one-handed use
- caregiver sharing
- privacy
- learning curve
- hospital readiness
- hardware requirement

## Privacy page (`/privacy-policy/`)
### Goal
Make privacy discoverable and understandable. URL preserved from WordPress for SEO continuity.

### Required sections
- what data is stored where
- whether cloud storage is central or optional
- collaboration implications
- plain-language summary
- compliance certifications (carried over from current site)

---

# Internal linking rules
1. Every guide must link to:
   - `/product/`
   - `/buy/` or `/privacy-policy/` where relevant
   - at least 2 related guides
2. Homepage must link to all core pages
3. Footer must link to core trust pages
4. No important page should require search to discover it

---

# Performance requirements
- Lighthouse mobile performance target: 85+
- lazy-load non-critical images
- compress images
- avoid heavy client-side frameworks unless necessary
- keep JavaScript minimal on content pages
- use static rendering for all public marketing pages

---

# Accessibility requirements
- semantic HTML
- sufficient color contrast
- alt text for meaningful images
- keyboard accessible navigation
- buttons and links with clear labels
- proper heading hierarchy

---

# Analytics requirements
Use **Plausible Analytics** (privacy-friendly, no cookies, GDPR-compliant — consistent with Nubo's privacy-first positioning).

Track at minimum:
- outbound clicks to Amazon
- outbound clicks to App Store
- outbound clicks to Google Play
- pageviews for core pages
- traffic source breakdown if available

Use Plausible custom events:
- `click_amazon`
- `click_app_store`
- `click_google_play`
- `view_product_page`
- `view_buy_page`

---

# GitHub Actions deployment
Create a workflow that:
1. installs dependencies
2. builds the Astro site
3. publishes the static output to GitHub Pages

Use GitHub Pages with custom domain support. Keep the deployment predictable and automatic from the main branch.

---

# Copilot implementation phases
## Phase 1: bootstrap
Tasks:
- initialize Astro project
- configure TypeScript
- configure static output
- configure sitemap
- create base layout and SEO component
- create GitHub Actions deploy workflow
- create robots.txt
- create redirect pages for WordPress URLs (`/support/`, `/shop/`, `/cart/`, `/checkout/`, `/wishlist/`)

## Phase 2: design system and shared components
Tasks:
- implement header, footer, CTA buttons, marketplace buttons
- implement SEO head component
- implement JSON-LD helper
- implement shared section components

## Phase 3: core pages
Tasks:
- implement homepage
- implement product page
- implement how it works page
- implement privacy page
- implement compare page
- implement buy page
- implement reviews page

## Phase 4: content system
Tasks:
- implement MDX content collection
- implement guide template
- add first 6 evergreen guide pages
- add related guides block

## Phase 5: polish and migration
Tasks:
- verify redirect pages work correctly
- validate metadata
- validate structured data
- verify internal linking
- test on mobile
- switch domain to static site

---

# Week-by-week implementation plan
## Week 1
- ~~create repo~~ done
- bootstrap Astro app
- configure GitHub Pages deployment
- set up staging domain or staging path
- ~~export WordPress URLs into migration sheet~~ done (see redirect map above)

## Week 2
- implement base layout
- implement shared SEO component
- implement header and footer
- set up robots.txt and sitemap
- create page shells for all core pages

## Week 3
- implement homepage and product page
- implement buy page
- add marketplace CTA components
- draft core copy placeholders

## Week 4
- implement how-it-works, privacy, compare, and reviews pages
- add reusable trust, testimonial, and comparison components

## Week 5
- implement MDX guide system
- publish first 3 guide pages
- add article schema
- add related links blocks

## Week 6
- publish next 3 guide pages
- optimize images and alt text
- validate internal linking

## Week 7
- add Organization and Product JSON-LD
- validate structured data
- verify canonical tags and open graph tags

## Week 8
- test mobile UX
- improve page speed
- confirm crawlability
- prepare redirects

## Week 9
- switch custom domain to static site
- submit sitemap to search consoles
- monitor indexed pages

## Week 10+
- refine titles, descriptions, and page copy based on search data
- add new guides based on real query demand
- align site language with Amazon and app store experiments

---

# Acceptance checklist
Do not call the project complete unless all items below are true.

## Technical
- [ ] site builds successfully
- [ ] deploys automatically from GitHub
- [ ] custom domain `www.nubotracker.com` works
- [ ] apex `nubotracker.com` redirects to `www`
- [ ] HTTPS enforced
- [ ] sitemap exists
- [ ] robots.txt exists
- [ ] no broken internal links
- [ ] WordPress redirect pages work (`/support/` → `/contact/`, `/shop/` → `/buy/`, etc.)

## SEO
- [ ] every core page has unique title and meta description
- [ ] canonical tags are correct
- [ ] Organization schema exists on homepage
- [ ] Product schema exists on product page
- [ ] Article schema exists on guide pages
- [ ] old URLs are preserved or redirected

## UX
- [ ] homepage communicates Nubo clearly in under 30 seconds
- [ ] buy paths are obvious
- [ ] product screenshots and/or photos are present
- [ ] mobile layout feels polished

## Content
- [ ] at least 6 guide pages are live
- [ ] copy reflects the core positioning
- [ ] comparison page is live
- [ ] privacy page is easy to understand

---

# Copilot prompt starter
Use this prompt in GitHub Copilot Chat at the repo root.

```txt
Read nubo_static_site_implementation_brief.md and implement this project as a static Astro marketing site for www.nubotracker.com.

Requirements:
- Use Astro with static output and TypeScript
- Deploy to GitHub Pages with GitHub Actions
- Build the page structure, components, and content system described in the brief
- Prioritize crawlable HTML, strong SEO defaults, JSON-LD structured data, and mobile-first UX
- The site is informational only and routes users to Amazon, App Store, and Google Play
- Do not add e-commerce or checkout
- Keep code modular and easy to iterate on
- Add sensible placeholder content where final copy is not yet available
- Create reusable components and a clean content architecture
```

---

# Recommended next files to create in repo
1. `README.md` with setup and deploy instructions
2. `CONTENT_PLAN.md` for guide drafts and editorial backlog

---

# Final instruction for implementer
When there is ambiguity, prefer:
- simpler static rendering
- fewer dependencies
- stronger SEO defaults
- reusable components
- clean copy layout
- clear outbound conversion paths

Do not add complexity that is not directly useful for visibility, trust, or outbound conversion.
