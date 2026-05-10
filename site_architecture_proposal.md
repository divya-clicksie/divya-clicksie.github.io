# Nubo Site Rearchitecture — Implementation Plan

*Single working document for the design and engineering team. Phased rollout with task-level acceptance criteria, page specs, asset plan, and measurement.*

---

## Current implementation status

Updated May 10, 2026. The current static build includes 58 pages and passes `npm run build`. Source policy checks are clean for em dashes in site source, forbidden commerce routes, negative letter spacing, and `/shop/` links. A generated HTML link check scanned all 58 built HTML files with zero broken internal links or missing anchors. Mobile rendered smoke tests passed on the core product, trust, resource, category, and sample article routes.

Shipped in this implementation pass: homepage restructure, direct Amazon purchase routing, `/pricing/`, `/device/`, `/compare/`, `/app/`, `/how-it-works/`, server-rendered blog categories, `/caregivers/`, `/privacy/`, `/resources/`, `/about/`, `/alexa/`, `/gift/`, expanded FAQ links, reusable comparison and caregiver-economics components, mobile sticky CTA behavior, and second-baby value blocks on `/device/` and `/pricing/`.

Still intentionally deferred: email capture and nurture flows until an email service/provider is chosen, `/reviews/` until enough real testimonials exist, founder or parent photos until real assets are available, and product demo loops until video assets are supplied.

---

## 1. North star

Improve total conversion across three paths, weighted by leadership as equally valid:

- **Buy the device** ($89.99 one-time, grants Premium to every phone that pairs with it) — highest LTV
- **Subscribe to Premium** ($39.99/year, store-account subscription) — recurring revenue, app-first segment
- **Install the free app** (free) — top of funnel, future Premium and device upsell

The current site over-narrows to the device CTA, buries the strongest pricing argument, and runs a single 14-section homepage with no dedicated URLs for any product page. This plan fixes all three problems.

---

## 2. The conversion arguments (every page should reflect these)

Every page in this rollout is built on five core arguments. Engineers, designers, and copy should treat these as the foundations.

### 2.1 The speed ladder

| Method | Time per log |
|---|---|
| Pen-and-paper diary | 42 sec |
| Other apps (Huckleberry-class) | 18 sec |
| Nubo voice | 8 sec |
| Nubo Quick Log (in the moment) | 4 sec |
| Nubo device (in the moment) | 1 sec |

Numbers come from the Amazon comparison image. The onsite implementation should render the comparison as a semantic, responsive HTML table rather than embedding the Amazon image directly. The Amazon image can remain design reference and source material. *Even Nubo's slowest method is 2× faster than the fastest competitor. The device is 18× faster than apps.*

### 2.2 The time and attention math

Over the first three months of full newborn tracking (~2,250-2,400 logged events, roughly 25-27/day across feeds, diapers, sleep starts/stops, pumping, medicine, and caregiver notes):

| Method | Time spent logging (3 months) | Phone-pickup / distraction risk |
|---|---:|---|
| Pen-and-paper diary | 26 hrs | No phone required |
| Other apps | 11 hrs | Every log requires unlocking the phone, creating repeated opportunities for messages, other apps, or social media |
| Nubo device | 40 mins | Device logs require no phone unlock |

This is the primary pricing argument for the device: parents are buying back time, attention, and fewer phone unlocks during the hardest parts of the day. The defensible screen-time claim is not a specific number of hours. It is that every app-based log requires a phone pickup, and research on smartphone habits shows that phone pickups can turn into habitual checking, messaging, notifications, or content browsing. Nubo's device avoids that trigger by letting parents log without unlocking the phone.

### 2.3 The pricing argument: time first, caregiver economics second

Do not lead with device payback for solo parents or partner-only households. For those households, the device wins on speed, screen-free logging, nighttime use, and hands-full moments. The money argument becomes compelling when non-family caregivers are involved, because store-account subscriptions usually do not cover nannies, grandparents on separate accounts, postpartum doulas, or daycare staff.

#### How Premium works on the app alone

Premium is a standard App Store / Google Play subscription managed by the store account that buys it. Do not promise cross-account Premium unless the Nubo app or device grants it. Non-family caregivers on separate store accounts usually need their own Premium subscription unless they connect to the device.

#### How Premium works when you have the device

The Nubo device pairs with caregiver phones via Bluetooth Low Energy, including phones tied to separate App Store or Google Play accounts. **Each connection grants that phone 30 days of Premium**, and every subsequent sync resets the 30-day window. As long as a caregiver continues to use the device, Premium stays continuously active on their phone. No shared store account required.

This is the cleanest framing of the mechanism:

> **Premium follows the use.** Buy the device once. Every phone that connects to it gets Premium, refreshed on each sync.

#### Caregiver economics by household type

Only show payback where it is a natural buying argument:

| Household setup with non-family caregivers | Annual Premium cost without device | Device payback |
|---|---|---|
| Two parents + nanny | $79.98 (2 plans) | **~13 months** |
| Two parents + nanny + 1 grandparent (separate plan) | $119.97 (3 plans) | **~9 months** |
| Two parents + nanny + 2 grandparents (separate plans) | $159.96 (4 plans) | **~7 months** |
| Two parents + daycare staff logging on their own devices | $79.98+ | **~13 months+** |

Method: device cost ($89.99) ÷ annual Premium cost the household would otherwise pay across separate store accounts.

For solo parents and partner-only households, avoid showing a 27-month payback. It makes the device look financially marginal and distracts from the stronger reason to buy: 1-second, screen-free logging when the phone is not open.

### 2.4 The screen-time argument (defensible moat)

Every app-only competitor *requires* screen time to function. Nubo is the only tracker that can credibly say:

> *Track more. Tap less. Look at your baby, not your phone.*

This is structural — competitors cannot adopt it without contradicting their own product.

### 2.5 The privacy promise

Voice runs on-device. No account required. Local-first storage. Encrypted backups to user's own iCloud or Google Drive. End-to-end encrypted caregiver sharing. No ads, no data sale.

---

## 3. Information architecture

### 3.1 URL map

| URL | Status | Phase |
|---|---|---|
| `/` | Implemented, restructured | 0 + 1 |
| `/pricing/` | Implemented | 1 |
| `/device/` | Implemented | 1 |
| `/compare/` | Implemented | 1 |
| `/app/` | Implemented | 2 |
| `/how-it-works/` | Implemented | 2 |
| `/blog/[category]/` | Implemented as real server-rendered URLs | 2 |
| `/caregivers/` | Implemented | 3 |
| `/privacy/` | Implemented | 3 |
| `/resources/` | Implemented | 3 |
| `/reviews/` | Deferred until enough real testimonials exist | 3 (conditional) |
| `/about/` | Implemented | 4 |
| `/alexa/` | Implemented | 4 (conditional) |
| `/gift/` | Implemented | 4 (conditional) |
| `/faq/` | Existing — keep | — |
| `/blog/` | Existing, category navigation upgraded | 0 |
| `/contact/`, `/privacy-policy/`, `/terms-of-use/` | Existing — keep | — |
| `/shop/` | Removed; all purchase CTAs go directly to Amazon | 0 |

### 3.2 Primary navigation

```
[ How it works ]  [ Device ]  [ App ]  [ Pricing ]  [ Compare ]  [ Resources ]   [ Choose your setup ]
```

- Global CTA "Choose your setup" routes to `/pricing/`.
- Mobile menu includes How it works, Device, App, Pricing, Resources, FAQ, Compare, and the "Choose your setup" CTA.

### 3.3 Mobile sticky bottom bar

Visible after the visitor scrolls past the hero. Always present on mobile.

```
Buy on Amazon · $89.99 · Premium for every caregiver who uses it
```

### 3.4 Footer

Five columns:

- **Product**: Device, App, How It Works, Alexa Skill, Pricing, Compare, Gift
- **Trust**: Caregivers, Privacy, Reviews, About
- **Resources**: Resources hub, Blog, Guides, FAQ, Contact
- **Legal**: Privacy Policy, Terms of Use, Buy on Amazon, App Store, Google Play, Alexa Skill
- **Follow Us**: Instagram, YouTube

---

## 4. Asset plan

### 4.1 Amazon assets to bring onsite

Three high-impact assets currently live only on the Amazon listing. They should be used across the new site.

| Asset | Description | Used on |
|---|---|---|
| **Comparison table source image** ("Reclaim hours of precious time") | Source data and design reference for an onsite HTML comparison table: Diary / Apps / Nubo with time-to-log, time-spent-logging, screen-time | Homepage (Phase 0), `/device/`, `/compare/`, `/pricing/` |
| **Caregiver hub diagram** | Device in center, six caregiver phones around with BLE + sync arrows | Homepage caregiver section (Phase 0), `/caregivers/` (hero), `/device/` (caregiver block) |
| **Instant tracker close-up** | Hand pressing button, sleeping baby, feature labels | Homepage hero (Phase 0), `/device/` hero |

### 4.2 New assets to commission

| Asset | Used on | Priority |
|---|---|---|
| **Expanded 5-row comparison table design** (extends Amazon image data to include Nubo voice and Quick Log rows) | `/compare/` (hero), `/device/` | Phase 1 |
| **30-day rolling Premium diagram** (timeline showing how device sync extends Premium for paired caregivers) | `/device/` caregiver-advantage block, `/pricing/` device card explanation | Phase 1 |
| **Three short auto-play loops** (5–10 sec, muted): button press → app event; voice catch-up → log appears; QR caregiver invite | `/device/`, `/how-it-works/` | Phase 1 |
| Day-in-the-life timeline graphic | `/how-it-works/` | Phase 2 |
| Founder photo (Divya) — clear, professional | `/about/`, homepage founder block | Phase 4 |

#### 30-day rolling Premium diagram — design brief

> Concept: a timeline showing two caregivers' phones connecting to the device at different cadences.
>
> - Caregiver A's phone connects on Day 0, Day 5, Day 11, Day 18 — each connection visualized as extending Premium 30 days forward from that moment. Premium stays continuously active.
> - Caregiver B's phone connects on Day 0, Day 12, Day 35 — between Day 30 and Day 35 there's a small lapse indicator showing Premium briefly expired and re-activated when the device next synced.
>
> Caption: *"Every sync extends Premium 30 days. Active caregivers stay on Premium continuously. Occasional caregivers reactivate the moment they sync again."*

### 4.3 Assets to remove or replace

- Current homepage hero (`hero.webp`, generic mother-and-baby) → replace with instant-tracker close-up
- Current caregiver image (`care_with_confidence.webp`) → replace with caregiver hub diagram
- Duplicate use of `nubo-app-screens.webp` in two ecosystem cards → fix; use distinct images per card
- Placeholder text: "Feature 1...5", "Screenshot 1...9" → remove from page output

---

## 5. Phase 0 — Ship this week (no architecture work required)

These changes ship on the existing homepage. They are the highest-leverage moves that don't require any new pages.

| # | Task | Effort | Owner | Acceptance |
|---|---|---|---|---|
| 0.1 | Remove "Feature 1...5" and "Screenshot 1...9" placeholders from rendered HTML | 30 min | Eng | No placeholder strings in DOM on `/` |
| 0.2 | Fix duplicate ecosystem image: voice card and app-card now use distinct images | 1 hr | Eng + Design | Distinct `src` for "Say it on your phone" and "Tap a card in the app" |
| 0.3 | Remove `/shop/` route and links; use direct Amazon purchase CTAs | 15 min | Eng | No `/shop/` source route or internal links; purchase CTAs go directly to Amazon |
| 0.4 | Add "Pricing" link to primary nav | 30 min | Eng | "Pricing" appears in nav and routes to `/pricing/` |
| 0.5 | Change global CTA from "Buy on Amazon" to "Choose your setup" pointing to `/pricing/` | 30 min | Eng + Copy | All headers show new CTA and route to `/pricing/` |
| 0.6 | Rename "Blog" to "Resources" in nav and footer | 5 min | Eng | Label updated everywhere; URL stays `/blog/` |
| 0.7 | Replace homepage hero image with instant-tracker close-up | 1 hr | Eng + Design | New hero asset above the fold |
| 0.8 | Replace caregiver-section image with caregiver-hub diagram | 30 min | Eng + Design | New image in caregiver section |
| 0.9 | Add semantic comparison table between Problem and Ecosystem sections of homepage | 1 hr | Eng + Design | Table renders accessibly, includes a short methodology note, links to `/compare/` (anchor `/#compare` until page exists) |
| 0.10 | Update Device pricing card headline to "Premium for every caregiver who uses it"; update Premium card disclosure to explain store-account limits and device alternative (see §10.1 for exact copy) | 1 hr | Copy + Eng | Headlines and disclosures updated on both cards |
| 0.11 | Add return-policy reassurance below pricing cards: "Free shipping with Prime · 30-day returns through Amazon" | 30 min | Copy + Eng | Reassurance row visible |
| 0.12 | Add mobile sticky bottom bar (CTA: "Buy on Amazon · $89.99 · Premium for every caregiver who uses it") | 2 hrs | Eng + Design | Bar visible on mobile after scroll past hero, persists on scroll |
| 0.13 | Add anti-screen-time message to homepage trust strip: "Track more. Tap less. Look at your baby, not your phone." | 30 min | Copy + Eng | Strip text updated |

**Phase 0 total effort:** ~1 developer-day plus ~half day of design touch-up.

**Phase 0 success criteria:** all 13 items shipped to production within 7 days. All Amazon, App Store, and Google Play CTAs remain direct, visible, and functional in QA.

---

## 6. Phase 1 — Conversion floor (weeks 1–2)

Build the three pages that move the conversion math directly: `/pricing/`, `/device/`, `/compare/`. Rebuild navigation. After Phase 1, every visitor has a real landing page for their intent and the strongest conversion arguments live on dedicated URLs.

### 6.1 Phase 1 task list

| # | Task | Effort | Owner | Acceptance |
|---|---|---|---|---|
| 1.1 | Build `/pricing/` page (see §10.1 for spec) | 2–3 days | Eng + Copy + Design | Page live, indexable, all CTAs functional |
| 1.2 | Build `/device/` page (see §10.2 for spec) | 3–4 days | Eng + Copy + Design | Page live, indexable, all CTAs functional |
| 1.3 | Build `/compare/` page (see §10.3 for spec) | 2 days | Copy + Eng | Page live with semantic 5-row expanded comparison table |
| 1.4 | Design expanded 5-row comparison table component | 2 days | Design | Responsive table design delivered, used on `/compare/` and `/device/` |
| 1.5 | Commission 30-day rolling Premium diagram | 1 day | Design | Asset delivered, used on `/device/` and `/pricing/` |
| 1.6 | Commission three auto-play product loops | 2–3 days | Design / video | Loops embedded on `/device/` |
| 1.7 | Rebuild primary nav: current product/resource links + global CTA | 1 day | Eng + Design | Desktop and mobile nav updated, mobile menu working, global CTA points to `/pricing/` |
| 1.8 | Add internal links from FAQ answers to relevant new pages | 2 hrs | Copy + Eng | At least 10 FAQ answers link out to `/device/`, `/app/`, `/pricing/`, `/privacy/`, `/caregivers/` |
| 1.9 | Restructure homepage to introduce-and-route (see §10.4 spec) | 2 days | Eng + Copy + Design | 14 sections compressed to ~10; each section links to its dedicated page |
| 1.10 | Update sitemap.xml and robots.txt for new pages | 30 min | Eng | New URLs in sitemap, indexable |
| 1.11 | Add OpenGraph and Twitter card meta for each new page | 2 hrs | Copy + Eng | Each page has unique title, description, OG image |

**Phase 1 total effort:** ~13–16 developer-days across 2–3 people.

**Phase 1 success criteria:**
- `/pricing/`, `/device/`, `/compare/` are indexable and appear in Search Console after launch
- Amazon, App Store, and Google Play CTAs are direct and pass manual QA on every new page
- Pricing is reachable from the global CTA, homepage sections, and relevant FAQ answers without dead ends

### 6.2 Phase 1 dependencies

- 1.1 and 1.2 can run in parallel; 1.3 depends on 1.4 (asset).
- 1.7 depends on 1.1 (pricing page must exist before nav points to it).
- 1.9 should ship after 1.1, 1.2, 1.3 — homepage links nowhere if those pages don't exist.

---

## 7. Phase 2 — Conversion expansion (weeks 3–4)

Capture the remaining intent segments: app-first visitors, ecosystem-curious visitors, organic search by topic.

### 7.1 Phase 2 task list

| # | Task | Effort | Owner | Acceptance |
|---|---|---|---|---|
| 2.1 | Build `/app/` page (see §10.5 spec) | 3 days | Eng + Copy + Design | Page live; screenshots reorganized by use case with captions |
| 2.2 | Build `/how-it-works/` page (see §10.6 spec) | 3 days | Eng + Copy + Design | Page live with day-in-the-life timeline |
| 2.3 | Convert blog category JS filters to real server-rendered URLs (`/blog/sleep/`, `/blog/feeding/`, `/blog/tracking/`, `/blog/caregiver/`, `/blog/privacy/`, `/blog/product/`, `/blog/gifts/`) | 3 days | Eng | Each category URL renders standalone, indexable |
| 2.4 | Add 2–3 sentence intro and product-page CTA to each category page | 1 day | Copy | Each category has unique intro and CTA |
| 2.5 | Internal linking pass: from every blog post add ≥1 link to the most relevant product page | 1 day | Copy | All published blog posts link to `/device/`, `/app/`, `/pricing/`, or `/caregivers/` |
| 2.6 | Add comparison table to `/pricing/` (cross-link from Phase 1) | 30 min | Eng | Table embedded with methodology link |
| 2.7 | Add structured data: Product schema on `/device/`, FAQ schema on `/faq/`, Article schema on blog posts | 1 day | Eng | Schema validates in Google Rich Results test |

**Phase 2 total effort:** ~10 developer-days.

**Phase 2 success criteria:**
- All blog category URLs indexed after launch
- App Store and Google Play links from `/app/` pass direct-link QA
- Organic impressions for "baby tracker app" and "baby sleep tracker" category queries appear in Search Console

---

## 8. Phase 3 — Trust and capture infrastructure (weeks 5–6)

Build the trust assets that reduce purchase hesitation, plus optional email capture that turns ambivalent visitors into a relationship without gating direct purchase links.

### 8.1 Phase 3 task list

| # | Task | Effort | Owner | Acceptance |
|---|---|---|---|---|
| 3.1 | Build `/caregivers/` page (see §10.7 spec); use caregiver-hub diagram as hero | 2 days | Eng + Copy + Design | Page live |
| 3.2 | Build `/privacy/` page (see §10.8 spec); pull from existing privacy blog post | 2 days | Eng + Copy | Page live; expands beyond the 6-bullet homepage list |
| 3.3 | Build `/resources/` hub above `/blog/`; surface "First 12 weeks" starting block, featured guides, category nav | 2 days | Eng + Copy + Design | Page live; links to all category pages from Phase 2 |
| 3.4 | Build third-trimester email capture: due-date form on homepage (above pricing teaser) and on `/device/` | 2 days | Eng + Copy + Design | Form submits to email service; sends checklist 1 week before due date |
| 3.5 | Audit outbound purchase CTAs for direct-link policy | 30 min | Eng | Buy CTAs go directly to Amazon with no interstitial, modal, or capture gate |
| 3.6 | Build post-install nurture sequence: 5-touch email or in-app series for app users (Day 1, 3, 7, 10, 14) | 3 days | Copy + Eng | Sequence triggers on install, drives Premium trial conversion |
| 3.7 | Build `/reviews/` page (conditional — only if ≥30 quality testimonials available) | 1.5 days | Eng + Copy + Design | Page live, categorized by use case |
| 3.8 | Add "What about my second baby?" block to `/device/` and `/pricing/` | 30 min | Copy | Block visible on both pages |
| 3.9 | Add customer/install count signal to homepage and `/device/` (e.g. "Used by 4,000+ families") | 30 min | Copy + Eng | Signal visible; number sourced from real install/sale data |

**Phase 3 total effort:** ~13 developer-days.

**Phase 3 success criteria:**
- Third-trimester capture: ≥5% of unique homepage visitors submit a due date within first 30 days
- Post-install Premium conversion at Day 30 ≥ 8% (set baseline first month, then improve)

### 8.2 Phase 3 dependencies

- 3.4 requires email service infrastructure (recommend SendGrid or Postmark; ESP choice is a separate decision).
- 3.6 requires app-side instrumentation that may need a coordinated app release.
- 3.7 depends on testimonial volume; if Nubo has fewer than 30 quality testimonials, defer to Phase 4 or skip.

---

## 9. Phase 4 — Brand polish (weeks 7+)

Lower-priority pages that round out the brand surface. Build only when traffic and capacity justify.

| # | Task | Effort | Owner | Acceptance |
|---|---|---|---|---|
| 4.1 | Build `/about/` page (see §10.9 spec) | 1.5 days | Eng + Copy + Design | Page live with founder story, bio, and philosophy. Founder photo remains deferred until a real asset is available. |
| 4.2 | Earn or surface press mentions; add to homepage and `/about/` | TBD | Copy + PR | At least one third-party validation block on homepage |
| 4.3 | Build `/alexa/` standalone page (conditional — only if Alexa skill traffic justifies) | 2 days | Eng + Copy + Design | Page live |
| 4.4 | Build `/gift/` page (conditional — only if gifting becomes a measurable channel) | 1.5 days | Eng + Copy + Design | Page live |

---

## 10. Page specifications

### 10.1 `/pricing/` spec

**One-line job:** Resolve the question every visitor has — *"Which one of these three should I buy, given my situation?"*

**Hero**
- Headline: **Start free. Upgrade when time, sleep, or caregivers make it worth it.**
- Subhead: One sentence introducing the three paths.

**Section: Decision guide**
Five visitor profiles, each mapped to a recommended path:
- "Solo parent, phone usually in hand" → Free app
- "Two parents, mostly app-first" → Free app or Premium for the purchasing store account; add device for speed, screen-free moments, and separate caregiver accounts
- "Multi-caregiver household — nanny, grandparents on separate plans, or daycare" → **Device** (bonus: caregiver economics can pay back the device quickly)
- "App user already, ready for advanced features" → Premium
- "Buying a gift" → Device

**Section: Three pricing cards**

- **Free** ($0): full feature list as currently shown. CTA: Download free.

- **Premium** ($39.99/yr):
  - Full feature list.
  - **Disclosure:** *"Standard App Store / Google Play subscription managed by the store account that buys it. Caregivers on separate store accounts, like nannies, grandparents, or daycare staff, usually need their own Premium subscription, or you can buy the device once and Premium follows the device for everyone who uses it."*
  - CTA: Try Premium free for 7 days.

- **Nubo Device** ($89.99 one-time) ★ Best value for households with multiple caregivers:
  - Full feature list.
  - **Headline:** *"Premium for every caregiver who uses it."*
  - **Subhead:** *"Any caregiver phone that connects to your Nubo gets 30 days of Premium, even across separate App Store or Google Play accounts. Active caregivers stay on Premium continuously. No per-seat fees, no extra subscriptions to manage."*
  - CTA: Buy on Amazon.

**Section: The math**
- Time and attention table (§2.2)
- Caregiver economics table (§2.3)
- Comparison table based on the Amazon source image
- 30-day rolling Premium diagram

**Section: FAQ**
Pull from existing `/faq/` and add the new entries below:

- *Does the device require a Premium subscription?* (No — the device IS the Premium-grant mechanism.)
- *How does the device give caregivers Premium?* — **"When a caregiver's phone connects to the Nubo device — pairing for the first time, or syncing new logs as they walk by — that phone gets Premium for 30 days. Each subsequent connection resets the 30-day window. As long as caregivers keep using the device, Premium stays active for everyone. No shared store account required."**
- *What happens if a caregiver only visits occasionally?* — **"Premium stays active for 30 days after the last sync. A grandparent who visits monthly stays on Premium continuously. A relative who visits once a quarter would see Premium lapse between visits and reactivate at the next sync. The free tier still supports unlimited caregivers regardless of Premium status."**
- *Does Premium work for me if my partner buys the device?* — **"Yes. The device grants Premium to whatever phone connects to it — it doesn't care who paid for the device or whose Apple/Google account is involved. The first time your phone syncs with the device, Premium activates."**
- *Can my partner use Nubo too?* — **"Yes. The free tier supports unlimited caregivers. Premium tools belong to the App Store or Google Play account that buys Premium, and the device can grant Premium to separate caregiver accounts when they use it."**
- *What happens to my data if I cancel Premium?* (Stays on phone; free tier remains.)
- *Is the free tier actually useful?* (Yes — list the features.)
- *What if I have a second baby?* (Device works forever; subscriptions don't.)
- *Can I return the device?* (Through Amazon's standard return policy.)

**Section: Trust strip**
4.2★ on Amazon · No subscription required · Private by design · Free shipping with Prime · 30-day returns

**CTAs (in order):** Buy on Amazon · Try Premium free for 7 days · Download free

---

### 10.2 `/device/` spec

**One-line job:** Convince a visitor that $89.99 hardware is worth it *even though they could install the same company's free app right now.*

**Hero**
- Image: Instant-tracker close-up (Amazon asset)
- Headline: **A button beats an app, every time your phone isn't open.**
- Subhead: One sentence on the 1-second log.
- Primary CTA: Buy on Amazon. Secondary: Download the app.

**Section: The comparison**
- Semantic comparison table based on the Amazon source image
- 5-row expanded table (§2.1)
- Methodology footnote: "How we measured" — see §11

**Section: Three Nubo speeds. Pick your moment.**
- 8-sec voice (best for catch-up)
- 4-sec Quick Log (best when phone is already open)
- 1-sec device (best for hands-full, half-asleep, in-the-dark moments)
- This positions the device as the *final tier* of an already-fast system, not a replacement for the app.

**Section: Three real moments**
Three short auto-play loops, captioned:
- 3 a.m. feeding in the dark
- Bottle warming, hands full
- Nanny logging without learning the app

**Section: How the device works**
- Bluetooth Low Energy sync
- No Wi-Fi, no internet
- Months of battery life on coin cell, spare included
- Spill-resistant, magnetic mount, lanyard included

**Section: Premium follows the device**
- Caregiver hub diagram (Amazon asset)
- Headline: **One device. Premium follows the use, not the store account.**
- Subhead: *"Any phone that pairs with Nubo gets Premium for 30 days. Active caregivers — your partner, the nanny, grandparents, daycare — stay on Premium continuously, even when they use separate store accounts."*
- Embed the 30-day rolling Premium diagram with caption.
- Embed the caregiver economics table (§2.3).
- Closing line: *"Most baby tracker apps either charge per seat (Huckleberry, BabyTracker on higher tiers) or depend on store-account subscriptions that do not cleanly cover the people who actually do half the logging — your nanny, your parents helping out, your daycare. The Nubo device is $89.99 once and gives Premium to every caregiver who uses it, regardless of how Apple or Google structures store accounts."*

**Section: Hospital bag + gift**
Folds in current homepage gift content. Two angles:
- Pack it before baby arrives
- The baby shower gift parents actually use

**Section: What about my second baby?**
- Device works forever
- Free app works forever
- Premium subscriptions are managed by the purchasing store account, while the device can grant Premium across caregiver phones. The device wins long-term.

**Section: Reviews**
Device-specific testimonials (Kiran K., Devi from existing homepage; expand if more available)

**Section: Risk reversal**
- Free shipping with Prime
- 30-day returns through Amazon
- Email support, 1 business day response

**Section: FAQ**
Device-specific pull from `/faq/`: battery, sync, pairing, reset, what's in box, plus the "How does the device give caregivers Premium?" question from §10.1.

**Final CTA:** Buy on Amazon

---

### 10.3 `/compare/` spec

**One-line job:** Capture comparison-shopper search traffic ("baby tracker comparison," "Huckleberry alternative," "best baby tracker") with honest answers.

**Hero**
- Headline: **The fastest way to log a feed. By the numbers.**
- Semantic comparison table directly below.

**Section: Speed comparison (5-row expanded)**
The full table from §2.1, with methodology footnote.

**Section: Compare by use case**
- **vs. paper diary**: paper is fine for quiet, undistracted moments. It loses to any digital option for charts, exports, sharing.
- **vs. Apple Notes / shared note**: works for two parents on a single phone setup. Loses on caregiver scaling, charts, growth tracking.
- **vs. free tracker apps (Glow, Baby Tracker by nighp)**: feature-by-feature, with honest acknowledgment that those apps can be enough for some families.
- **vs. Huckleberry**: Huckleberry is sleep-coaching software with a tracker; Nubo is tracking software with a device. Adjacent, not identical.
- **vs. hospital paper logs**: NICU/preemie angle.

**Section: When Nubo isn't the right choice**
Honest acknowledgment:
- One caregiver, phone always in hand → free apps probably enough
- No interest in charts or pediatrician exports → paper might be fine
- Don't want any tracking → don't track

This honesty is what converts comparison shoppers.

**Section: When Nubo wins clearly**
- Multiple caregivers (especially non-family ones)
- Nighttime feeds
- Hands-full moments
- Privacy-conscious families
- Multi-child families

**CTA:** See pricing · Buy on Amazon

---

### 10.4 `/` (homepage) spec — restructured

**Section sequence (post-rebuild, ~10 sections):**

1. **Hero**
   - Image: Instant-tracker close-up
   - Headline: Nobody remembers every feed, nap, and diaper at 3 a.m. Nubo does.
   - Subhead: Tap the device. Speak to the app. Keep every caregiver in sync.
   - Primary CTA: Choose your setup → `/pricing/`. Secondary: Buy the device.
   - Trust strip: Track more. Tap less. Look at your baby, not your phone.

2. **Problem framing** — keep current three scenarios.

3. **Faster than the alternatives** *(NEW)*
  - Semantic comparison table based on the Amazon source image
   - Headline: 42 seconds with a diary. 18 seconds with an app. 1 second with Nubo.
   - Link: See the full comparison → `/compare/`

4. **Ecosystem in 60 seconds** — compress current input-method section into short cards, each linking to `/how-it-works/`.

5. **Why a button** — short device pitch with one image. Links to `/device/`.

6. **Caregiver sync** — caregiver hub diagram + one paragraph explaining "Premium follows the use." Links to `/caregivers/`.

7. **Pricing teaser** — three condensed cards with the LTV note: "Two caregivers + a nanny? The device pays for itself in 13 months." Links to `/pricing/`.

8. **Reviews** — keep existing four testimonials.

9. **Privacy in plain English** — three bullets, link to `/privacy/`.

10. **Founder quote** — keep.

11. **Final CTA** — Choose your setup → `/pricing/`. Secondary: Buy the device.

**Removed from homepage** (moved to dedicated pages):
- Full Alexa command examples → `/how-it-works/`
- Device feature sub-grid → `/device/`
- 9-screenshot app carousel → `/app/`
- Full pricing cards → `/pricing/` (homepage shows teaser only)
- Full privacy bullet list → `/privacy/`
- Gift section → folds into `/device/`

---

### 10.5 `/app/` spec

**One-line job:** Make the free app feel like a complete product on its own and a better product with the device.

**Hero**
- Headline: A free baby tracker that doesn't punish you for needing help.
- Primary CTA: Download on App Store. Secondary: Get on Google Play.

**Section: What's free, forever**
Surface the actual generous free-tier feature list from current homepage pricing.

**Section: Voice catch-up demo**
This is the killer free feature. Show it prominently with the 8-sec speed claim.

**Section: Caregiver sync (free, unlimited)**
Caregiver hub diagram, but messaging emphasizes "all of this works on the free app — even without buying the device."

**Section: Privacy promise**
Three bullets, link to `/privacy/`.

**Section: App screenshots reorganized by use case**
Replace current 9-screenshot grid with captioned outcome groupings:
- One-touch logging — fastest log when phone is in hand
- Voice catch-up — for what you forgot
- Caregiver timeline — everyone in sync
- Live Activities — glance from the lock screen
- Growth charts — ready for the pediatrician
- Midnight Ember — 3 a.m. use without losing 30 min of sleep
- Privacy controls — local-first
- Allergen SafeStart — guided first foods
- Smart Averages — real numbers, not skewed by a missed day

**Section: Premium upgrade**
- Honest framing: *"Premium is managed by the App Store or Google Play account that buys it. If your nanny, grandparents, or daycare also log on separate store accounts, they usually need their own Premium. Or you can buy the Nubo device once: Premium activates on every phone that pairs with it, for as long as the device stays in use."*
- Premium feature list.
- CTA: Try Premium free for 7 days.

**Section: What the device adds**
One-block answer to "do I need the device?" Link to `/device/`. Frame: *"The app is fast. The device is faster, in moments when even unlocking your phone is too much — and it can grant Premium to everyone helping with your baby, even across separate store accounts."*

**Section: App Store proof**
Ratings, review count, App Store + Play Store badges.

**CTAs:** Download on App Store · Get on Google Play · See pricing

---

### 10.6 `/how-it-works/` spec

**One-line job:** Give the visitor a mental model of the full ecosystem in under 60 seconds.

**Hero**
- Headline: One baby timeline. Log however the moment allows.
- Subhead paragraph: Press a button, speak a sentence, tap a card, ask for help from a supported assistant. Everything ends up in one timeline. Pick the method that fits the moment.

**Section: Logging methods**
Each method with two paragraphs and a short demo loop or animation.

**Section: Day-in-the-life timeline** *(new content)*
Visual timeline showing one real day:
- 5:47 a.m. — Mom feeds baby half-asleep, **taps device**
- 7:15 a.m. — Dad takes over, **taps card in app** while making coffee
- 11:00 a.m. — Nanny arrives, **presses device** through the day (her phone syncs and gets Premium for 30 days)
- 2:30 p.m. — Mom checks lock-screen Live Activity from work
- 6:30 p.m. — Grandma visits, **uses Alexa** to log a bottle
- 11:00 p.m. — Dad realizes he forgot the 9 p.m. feed; **says it on his phone**

**Section: Setup flow**
- 30 seconds to pair the device
- 30 seconds to invite a caregiver via QR
- Total time to a working multi-caregiver tracker: under 2 minutes

**Section: Decision guide**
- Start with the free app
- Add the device when nighttime feeds, hands-full moments, or non-family caregivers (nanny, grandparents on separate plans, daycare) start to dominate
- Add Premium if you want reminders, Alexa, exports, and advanced insights for one primary app account

**CTAs:** View the device · See pricing

---

### 10.7 `/caregivers/` spec

**One-line job:** Capture caregiver-coordination search intent ("baby tracker for grandparents," "shared baby log").

**Hero**
- Image: Caregiver hub diagram (Amazon asset)
- Headline: Everyone helping your baby sees the same timeline.

**Section: The handoff problem**
- "When did the baby last eat?" texts
- Memory gaps between shifts
- Apps that charge per seat or create friction for caregivers on separate accounts

**Section: How shared logging works**
- Anyone can press the device button
- App caregivers join via QR
- Real-time sync, no per-seat fees
- **Premium follows the device**: any phone that pairs gets 30 days of Premium, refreshed on every sync

**Section: Four scenarios**
- Morning handoff between parents (free sharing works regardless of Premium status)
- Nanny day (separate Apple ID — device grants Premium on connection)
- Overnight help (grandparent, postpartum doula — same mechanism)
- Day care drop-off (staff phones get Premium during the day)

**Section: Privacy for shared access**
Caregivers see the timeline. They don't see account settings, billing, or other private data (e.g., pumping logs are private to the pumping parent — link to relevant blog post).

**Section: Testimonials**
Coordination-focused testimonials (Devi, Jessica R. from existing homepage).

**CTAs:** Download the app · See how it works

---

### 10.8 `/privacy/` spec

**One-line job:** Turn privacy from a legal afterthought into a trust asset.

**Hero**
- Headline: Your baby's data stays yours.

**Section: Plain-English privacy promise**
- Voice runs on your phone — audio never leaves the device
- No account required to use the app or device
- Data stays on your phone, not our servers
- Encrypted backups to your own iCloud or Google Drive
- End-to-end encrypted caregiver sharing
- No ads. No selling. No sharing.

**Section: What stays local vs. what syncs**
Plain-language explanation, building on the existing privacy blog post (`/blog/privacy/nubo-privacy-architecture/`).

**Section: Backup explained**
What iCloud / Google Drive backup actually means in practice, and why it's different from "we store your data in the cloud."

**Section: What Nubo does not do**
- Does not require an account
- Does not sell data
- Does not run ads
- Does not have access to caregiver-shared logs (zero-knowledge sync)

**Section: Link to full policy**
Clear pointer to `/privacy-policy/` for the legal document.

**CTAs:** Read full privacy policy · Download the app

---

### 10.9 `/about/` spec

**Section: Why Nubo exists**
- Founder quote (existing on homepage)
- Founder photo
- Short bio: Divya — mom, engineer, builder

**Section: Design philosophy**
- "Something so simple you could use it with your eyes closed"
- Privacy-first as a values position, not a marketing line
- Hardware in a software world: why we built a button when everyone else built an app

**Section: What we won't do**
- We won't sell baby data
- We won't run ads
- We won't make non-family caregivers pay separately for what should be a household feature

**Section: Contact**
Direct path to founder/team email, not a generic support form.

---

## 11. Methodology disclosure for comparison claims

The comparison tables make specific quantitative claims (42s, 18s, 8s, 4s, 1s, 26 hrs, 11 hrs, 40 mins). These should be backed by a published methodology footnote on `/compare/` and short inline methodology notes near homepage and `/device/` instances of the table.

The current three-month totals only make sense if the model assumes roughly 2,250-2,400 logged events over 90 days, or about 25-27 logs/day. They do not match a 10-logs/day assumption. At 10 logs/day, the math would be roughly 10.5 hours for diary logging, 4.5 hours for app logging, and 15 minutes for device logging. Do not use the 26 hrs / 11 hrs / 40 mins claims alongside a 10-logs/day explanation.

Do not publish a hard "120 hours of screen time" claim unless Nubo validates it with product-specific user testing. The academic literature supports the mechanism, not that exact number: repeated phone pickups can become habitual checking moments, and those moments often involve messaging, notifications, communication apps, or online-content browsing. Public copy should stay closer to: "Every app-based log requires a phone pickup. Nubo device logs do not."

**Recommended methodology note:**

> *Times measured for a typical feeding entry. Pen-and-paper: writing time and quantity in a baby journal. Apps: from locked phone through opening app, navigating to feeding, selecting bottle/breast, entering quantity, saving. Nubo voice: from app open through end of speech recognition. Nubo Quick Log: from app open through tap of feeding card. Nubo device: from approach to button press. Three-month estimates assume roughly 2,250-2,400 logged events over 90 days across feeds, diapers, sleep starts/stops, pumping, medicine, and caregiver notes. Screen-time language refers to the behavioral risk created by repeated phone pickups, not to a universal measured number of minutes after each log.*

**Academic backing and limits:**

- Oulasvirta, Rattenbury, Ma, and Raita (2011), *Habits make smartphone use more pervasive*, supports the general premise that smartphone checking can become habitual and cue-driven.
- Böhmer, Hecht, Schöning, Krüger, and Bauer (2011), *Falling asleep with Angry Birds, Facebook and Kindle*, logged app usage from more than 4,100 Android users and found that communication applications were almost always the first used after a device woke from sleep.
- Lee et al. (2014), *Hooked on smartphones*, used surveys, logged data, and interviews to study smartphone overuse and found heavier users had longer daily use, different usage patterns, more susceptibility to push notifications, and more online-content consumption.
- Radesky et al. (2014), *Patterns of Mobile Device Use by Caregivers and Children During Meals in Fast Food Restaurants*, supports the parenting-context concern that caregiver mobile-device absorption can compete with attention to children.
- None of these studies proves that baby-tracking app users lose a specific number of hours to unrelated phone use. They support the mechanism: repeated phone pickups create repeated opportunities for checking, messaging, notifications, communication apps, and content browsing. Any exact screen-drift total must be validated with Nubo-specific testing.

If methodology can't be cleanly stated, soften the numbers to ranges ("about 40 seconds," "10+ hours saved"). Specific claims without backing erode trust on closer inspection.

---

## 12. Measurement plan

### 12.1 Measurement principles

The marketing site should not add analytics scripts, pixels, session replay, heatmaps, or retargeting. Measurement should rely on privacy-preserving sources outside the page runtime: Google Search Console, Amazon/App Store/Google Play dashboards, ESP reporting for opt-in email forms, and manual QA.

### 12.2 Top-level signals

Reviewed weekly across all phases.

| Signal | Definition | Baseline target |
|---|---|---|
| Weighted downstream conversions per week | Device sales, Premium subscriptions, and app installs from marketplace/store dashboards | Establish in Phase 0; improve by end of Phase 2 |
| Search visibility by page | Indexing status, impressions, and queries in Google Search Console | New product pages indexed after launch |
| Paid traffic efficiency | Ad platform reported outcomes where campaigns are running | Should improve as new pages absorb intent-segmented traffic |

### 12.3 Per-page signals

| Page | Primary signal | Secondary signal |
|---|---|---|
| `/` | Manual QA confirms clear routing to product pages | Search Console branded impressions |
| `/pricing/` | Manual QA confirms all three paths are visible and direct | Search Console pricing-query impressions |
| `/device/` | Amazon CTA works directly and device claims are substantiated | Search Console device-query impressions |
| `/app/` | App Store and Google Play CTAs work directly | Store dashboard install trend |
| `/how-it-works/` | Manual QA confirms clear routes to `/device/` and `/pricing/` | Search Console ecosystem-query impressions |
| `/compare/` | Search Console impressions for comparison queries | Table and methodology pass accessibility/QA review |
| `/blog/[category]/` | Indexed page count and organic impressions | Internal links to relevant product pages verified |
| `/caregivers/` | Search Console caregiver-query impressions | Caregiver CTAs verified |
| `/privacy/` | Search Console privacy-query impressions | Privacy claims match policy and architecture |

### 12.4 Email and lifecycle signals

| Metric | Phase | Definition |
|---|---|---|
| Third-trimester capture volume | 3 | Emails per week with due date |
| Day-30 Premium conversion from free install | 3 | % of installs converting to Premium within 30 days |
| Day-90 Premium conversion | 3 | Same, within 90 days |

### 12.5 QA checklist (Phase 0–1)

Engineering should verify these behaviors before Phase 1 ships:

- All outbound Amazon, App Store, and Google Play links are direct and functional.
- The comparison table is semantic, keyboard-readable, and responsive.
- New pages have unique titles, meta descriptions, canonical URLs, OG tags, and JSON-LD where relevant.
- Search Console can crawl every indexable page.
- No analytics, pixels, session replay, heatmaps, or retargeting scripts are added.

---

## 13. Dependencies and risks

### 13.1 Dependencies

- **Email service provider (ESP)** — Phase 3 email capture and nurture sequence require an ESP. Recommend choosing in Phase 1 (SendGrid, Postmark, or similar) so it's ready when Phase 3 begins.
- **App-side instrumentation** — post-install nurture (3.6) requires app changes. Coordinate with mobile release schedule.
- **Asset commission lead time** — expanded comparison table design, 30-day rolling Premium diagram, and demo loops (Phase 1, items 1.4–1.6) need design lead time. Start commissioning at Phase 0 launch so they're ready when Phase 1 page builds begin.

### 13.2 Risks

| Risk | Mitigation |
|---|---|
| Comparison claims (42s, 18s, etc.) get challenged on accuracy | Publish methodology footnote (§11). Soften to ranges if methodology can't be defended. |
| Restructuring homepage causes short-term conversion dip | Ship Phase 0 incrementally; watch downstream marketplace/store signals and QA each routing change. Roll back specific items if downstream signals clearly regress. |
| Anti-screen-time messaging reads as anti-app and cannibalizes the free-app path | Be precise: the message is anti-*unnecessary* screen time. Nubo's app and voice are still mostly screen-light. The device is the only fully-screen-free option. |
| Removing "Buy on Amazon" as global CTA reduces device sales in the short term | Mobile sticky CTA preserves the device path; pricing page routes to it. Watch downstream Amazon sales signals after launch. |
| Purchase CTAs become gated by capture experiments | Keep Amazon CTAs direct. Use separate optional email forms for visitors who are not ready to buy. |
| Blog category URL conversion (Phase 2, item 2.3) breaks existing traffic | Implement 301s from current JS-filter URLs to new server URLs. Verify in Search Console post-launch. |
| Visitors don't understand the 30-day rolling Premium model and assume it's a "gotcha" | The diagram in §4.2 makes it visible. The FAQ entries in §10.1 explain it plainly. Frame as "Premium follows the use" rather than as a time-limit. |
| Founder photo and bio (Phase 4) requires founder time and willingness | Schedule early; it's the kind of thing that slips. |

### 13.3 What can be cut without breaking the plan

If capacity tightens from here, cut or defer in this order:
1. `/reviews/` (Phase 3) - testimonials work fine on `/device/` and `/`
2. Post-install nurture sequence (Phase 3.6) - defer to a later app lifecycle pass if app team capacity is tight
3. Press and third-party validation blocks - wait until real mentions exist
4. Email capture UI - wait until an email service provider is chosen

Do **not** cut:
- Phase 0 bug fixes (credibility floor)
- `/pricing/` (highest-leverage new page)
- `/device/` (highest-LTV path)
- `/compare/` (capture for highest-intent organic traffic)
- Blog category URL conversion (large SEO unlock for relatively low effort)

---

## 14. Definition of done — full rollout

The rearchitecture is complete when:

- All Phase 0–3 tasks shipped and verified in production
- Search Console shows all new indexable pages crawled and receiving impressions
- Conversion routing is verifiable through manual QA and downstream marketplace/store dashboards
- Mobile sticky CTA is live and links directly to Amazon
- Email capture flows are firing, with at least one full third-trimester send-cycle completed
- Methodology footnote published on `/compare/` for all quantitative claims
- All Amazon-derived data and assets used onsite have appropriate labels, alt text where relevant, OG images, and load performance verified

Phase 4 items can ship on a longer timeline without blocking the rollout's "done" status.

---

## 15. The five highest-leverage moves

Across all phases, if everything else slips, ship these five:

1. **Phase 0** — All 13 quick fixes within 7 days. Floor is non-negotiable.
2. **`/pricing/` with the time math, caregiver economics, and "Premium follows the use" framing** (Phase 1, item 1.1).
3. **`/compare/` anchored by the semantic comparison table and 5-row expanded table** (Phase 1, item 1.3).
4. **Anti-screen-time messaging on homepage, `/device/`, and `/compare/`** — woven into copy across phases.
5. **Third-trimester email capture** (Phase 3, item 3.4) — the single highest-leverage new conversion path the site doesn't have today.

Everything else is leverage on top of these five.