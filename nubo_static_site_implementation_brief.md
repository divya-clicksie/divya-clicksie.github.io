# Nubo Static Site Reference

## What this site does

Static marketing site for [www.nubotracker.com](https://www.nubotracker.com). Informational only. Routes visitors to Amazon, App Store, and Google Play. No on-site checkout.

## Product lineup

1. **Nubo App** (iOS + Android) - The companion app where all data lives. New features coming soon; we'll start talking about it on the site when ready.
2. **Nubo** (Hardware) - The physical one-touch baby tracker device. Sold on [Amazon](https://www.amazon.com/nubo-Newborn-Activity-Tracker-Color/dp/B0CJLNBG4P?maas=maas_adg_465D5CB69C73F660B7AD38831E2D680B_afap_abs&ref_=aa_maas&tag=maas).
3. **Nubo Alexa Skill** - Voice-based baby tracking via Alexa. Available on [Amazon](https://www.amazon.com/Clicksie-LLC-Nubo-Baby-Tracker/dp/B0FJ2N8XKB).

All three products feed into the same data in the Nubo App.

## Product positioning

Use these pillars consistently across the site, Amazon, App Store, and Play Store.

**Core messages:**
- One-touch baby tracking
- Faster than app-only logging
- Privacy-first and local-first
- Easy caregiver sharing
- Hospital-bag ready

**Working product summary:**
Nubo is a baby tracking ecosystem: a physical device, a companion app, and an Alexa skill that together help parents log feedings, sleep, and diapers faster than app-only workflows. Designed for the newborn stage, with caregiver collaboration and privacy at the core.

---

# Site rules

1. Domain is `www.nubotracker.com` (apex redirects to `www`)
2. The site must not present itself as the purchase destination
3. Every important page links to Amazon, App Store, and Play Store where appropriate
4. Pages must render as crawlable HTML
5. Every page needs unique `<title>`, meta description, canonical URL, OG tags
6. `robots.txt` and `sitemap.xml` must exist
7. No em dashes anywhere in copy, alt text, titles, or meta tags
8. Preserve indexed URLs: `/`, `/privacy-policy/`, `/contact/`, `/faq/`
9. `/support/` redirects to `/contact/` via meta-refresh

## CTA rules

- Labels: "Buy on Amazon", "Download on the App Store", "Get it on Google Play"
- Product pages and guides route to marketplaces (directly or via `/buy/`)
- No on-site cart, checkout, or "Buy now" language

---

# Page map

## Live pages
- `/` Home
- `/privacy-policy/` Privacy Policy
- `/contact/` Contact
- `/faq/` FAQ
- `/support/` Redirect to `/contact/`
- `/guides/` Guide index
- `/guides/track-feeding-sleep-diapers-first-12-weeks/` First guide

## Planned pages
- `/product/` Product (canonical explainer)
- `/how-it-works/` How It Works
- `/why-hardware-vs-app-only/` Why Hardware Beats App-Only
- `/share-with-caregivers/` Caregiver Sharing
- `/compare/` Comparison (Nubo vs Pen-and-Paper vs App-Only)
- `/buy/` Outbound conversion hub (Amazon, App Store, Play Store)
- `/reviews/` Reviews and Testimonials
- `/about/` About
- `/press/` Press

## Planned redirect pages (meta-refresh, no content)
- `/shop/` -> `/buy/`
- `/cart/` -> `/buy/`
- `/checkout/` -> `/buy/`
- `/wishlist/` -> `/buy/`

## Planned guides
- `/guides/why-a-physical-baby-tracker-is-faster/`
- `/guides/share-baby-logs-with-partner-grandparents-nanny/`
- `/guides/privacy-first-baby-tracking/`
- `/guides/hospital-bag-ready-baby-tracker-setup/`
- `/guides/best-way-to-track-newborn-feedings-sleep-and-diapers/`

---

# SEO

- Every page: unique title, meta description, canonical, OG tags, twitter card
- Semantic headings, crawlable internal links
- `robots.txt` allows all crawlers except GPTBot (training opt-out); allows OAI-SearchBot
- `sitemap.xml` generated at build time
- No orphan pages, no content hidden behind client-side rendering

## Structured data (JSON-LD)
- Homepage: `Organization`
- Product page: `Product`
- Guide pages: `Article`
- Optional: `BreadcrumbList`

---

# Internal linking rules

1. Every guide links to `/product/`, `/buy/` or `/privacy-policy/`, and at least 2 related guides
2. Homepage links to all core pages
3. Footer links to core trust pages
4. No important page should require search to discover

---

# Content tone

- Clear, warm, practical, parent-friendly
- Not overhyped, not generic AI fluff
- Every important page should include at least one of: real product screenshot, device photo, founder insight, real customer scenario, concrete comparison
- No thin SEO pages, filler content, keyword stuffing, or fake comparison claims

---

# Design principles

- Mobile-first responsive
- Clean, trustworthy, product-forward
- Easy to scan, minimal navigation clutter
- Semantic HTML5, accessible (alt text, ARIA labels, color contrast, keyboard navigable)
- Lighthouse mobile performance target: 85+
- Lazy-load non-critical images, minimal JavaScript

---

# Analytics

Use Plausible Analytics (privacy-friendly, no cookies).

Custom events:
- `click_amazon`
- `click_app_store`
- `click_google_play`
- `view_product_page`
- `view_buy_page`

---

# Guiding principle

When there is ambiguity, prefer simpler static rendering, fewer dependencies, stronger SEO defaults, and clear outbound conversion paths.
