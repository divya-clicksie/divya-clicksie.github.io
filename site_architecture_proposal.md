# Nubo Site Rearchitecture Proposal — Conversion-First Synthesis

## What this document is

This proposal synthesizes three prior reviews of nubotracker.com (a high-level site architecture proposal, a copy-and-positioning proposal, and a site-audit-grounded restructure) with a fresh live audit of the homepage, FAQ, and blog. The brief from leadership is explicit: **conversion is the goal, and any of the three paths counts equally — device purchase, app install, or Premium subscription.**

That brief reframes the architectural question. The earlier proposals optimized primarily for the device. The right frame is a **portfolio funnel**: each of the three SKUs has a different visitor profile, a different friction profile, and a different LTV. The site should route visitors to the path they will actually complete, not the path that pays Nubo the most up front.

---

## Executive summary

### Where the three proposals agree (treat as settled)

- The current site is one long homepage with no dedicated URLs for device, app, pricing, caregivers, or privacy. Everything else flows from this.
- The hub-and-spoke architecture is correct. The phase-1 page set is `/how-it-works/`, `/device/`, `/app/`, `/pricing/`, `/resources/`.
- The hero copy (“Nobody remembers at 3 a.m. Nubo does.”) is strong and should stay.
- The four-input ecosystem (tap device, voice on phone, app card, Alexa) is the genuine differentiator and should anchor the explainer page.
- Blog category filters need to become real indexable URLs (`/blog/sleep/` etc.).
- Pricing exists on the homepage; it needs a URL, not a rewrite.
- The FAQ is comprehensive (22 questions) and just needs to be surfaced from product pages.

### Where they diverge, and what I recommend

1. **Primary CTA.** Proposal 2 wants “Buy on Amazon” as the global primary CTA. Proposal 3 wants “Choose your setup” routing to pricing. **My recommendation: “Choose your setup”** — because the user is explicit that any conversion path counts, and the current “Buy on Amazon” global CTA over-narrows the funnel and loses app-only and Premium-only segments. Pricing-page routing actively classifies the visitor, then sends them to the right SKU.
2. **Device-first vs balanced framing.** Proposal 2 strongly tilts toward device; proposal 1 is more balanced. **My recommendation: balanced framing on the homepage, device-leaning on dedicated pages.** Device is the highest-LTV path (it implicitly bundles a Premium subscription for every caregiver), but a visitor who isn’t ready for hardware should not be lost — they should be captured as an app install with a clear path to Premium or device later.
3. **Compare page priority.** Proposals 1 and 3 list `/compare/` as Phase 2 or Phase 3. **My recommendation: Phase 1.** Comparison-shopper queries (“Huckleberry vs”, “best baby tracker”) are the highest-intent organic traffic in this category. A `/compare/` page captures bottom-of-funnel traffic that no other page on the site captures.

### What I'm adding that the prior proposals don't cover

- **Live-site bugs that must ship before any architecture work** (placeholder text leaking into the page, duplicate ecosystem images, broken pricing CTAs, an outdated `/shop/` page).
- **The conversion math** that makes the device path the highest-LTV bet — and the corresponding messaging that the prior proposals don't quite land.
- **A pre-Amazon intent-capture page** so Nubo doesn't lose every buyer to Amazon's funnel without owning the email list, the retargeting cookie, or the post-purchase relationship.
- **Pre-launch (third-trimester) email capture** as its own conversion path, with timing-driven nurture.
- **Risk-reversal copy** that's missing today.
- **A measurement plan** that ties each architectural change to a specific funnel metric.

---

## 1. Live-site audit: bugs to fix this week

These are issues I found that don't require any architectural rework and should ship before the page-build effort begins.

### 1.1 Placeholder text leaking onto the live page

The homepage HTML contains visible placeholder labels:

```
Feature 1
Feature 2
Feature 3
Feature 4
Feature 5
```

…and immediately below the app screenshot grid:

```
Screenshot 1
Screenshot 2
…
Screenshot 9
```

This is a credibility killer for a tired parent evaluating a paid product. It also signals to AI search and Google that the page is incomplete. **Fix immediately, regardless of the broader rearchitecture.**

### 1.2 Two different ecosystem cards use the same image

In the “Tap as it happens. Talk to catch up.” section, the **“Say it on your phone”** card and the **“Tap a card in the app”** card both use `images/nubo-app-screens.webp`. They should be distinct screenshots — one showing the voice-input UI mid-recognition, one showing the colorful one-tap card grid.

### 1.3 Pricing CTAs collapse to the same destination

- **Free** CTA links to the App Store.
- **Premium** CTA also links to the App Store (labeled “Start Free Trial”).
- **Device** CTA links to Amazon.

This means a price-sensitive visitor who clicks “Start Free Trial” and ends up on the App Store has no in-app cue that they're on a Premium trial path. The Premium card needs either (a) a deeplink that opens the Premium upsell screen in-app, or (b) honest copy: “Download the app — Premium includes a 7-day free trial built in.”

### 1.4 Outdated `/shop/` page still indexed

A `/shop/` page exists with a 2024 footer and stub content. It currently surfaces in search results. **Fix:** 301-redirect it to the new `/device/` page (or to the Amazon listing in the interim).

### 1.5 Naming inconsistency

Public-facing names in use today:

- “Nubo Baby Tracker” (homepage, App Store, blog)
- “Nubo Baby Activity Tracker” (privacy policy, footer)
- “Newborn tracker” (Alexa invocation phrase)

Standardize on **Nubo Baby Tracker** as the public brand. Treat “Newborn tracker” as a one-time disclosure on the Alexa section (“On Alexa, say: ‘Alexa, tell Newborn tracker to log a feeding.’”) and explain why the invocation phrase differs.

### 1.6 Footer is too thin to support the new architecture

The footer currently has only “Features” and “Reviews” anchor links under Product. After the new pages exist, the footer should carry the full sitemap (Device, App, How It Works, Pricing, Caregivers, Privacy, Compare, About, Reviews, FAQ, Resources, Contact, Privacy Policy, Terms).

---

## 2. The conversion frame: why the device path is the highest-LTV bet (and how to message it)

The prior proposals all assert that the device is the strongest differentiator. They don't fully articulate the financial reason. This matters because the messaging is currently understated.

### 2.1 The pricing math that nobody is showing

A typical multi-caregiver family buying Premium without the device:

| Scenario | Year-1 cost | 2-year cost |
|---|---|---|
| Mom + Dad each on Premium | $79.98 | $159.96 |
| Mom + Dad + nanny on Premium | $119.97 | $239.94 |
| Mom + Dad + 2 grandparents on Premium | $159.96 | $319.92 |

A single device purchase: **$89.99 one-time, Premium included for every caregiver.**

This means:

- For a single-caregiver family, the device pays back in 2.25 years (longer than typical baby-tracking duration).
- For a two-caregiver family, the device pays back in **13 months**.
- For a three-caregiver family, the device pays back in **9 months**.
- For families planning a second child, the device pays back regardless of caregiver count.

**This is the single most powerful and most under-told story on the current site.** The pricing card mentions “Premium for all caregivers” as a sub-bullet. It should be the entire headline of the device card.

### 2.2 Recommended pricing-card hierarchy

**Free**
For solo trackers who already have their phone in hand.
→ Download the app

**Premium · $39.99/yr**
For app-only families who want reminders, Alexa, exports, and advanced insights — for one caregiver. Each additional caregiver subscribes separately.
→ Try Premium free for 7 days

**Nubo Device · $89.99 one-time** ★ **Best value for families**
Includes Premium for **every caregiver** — partner, grandparents, nanny — at no extra cost. Plus the physical button for hands-full, half-asleep moments.
→ Buy on Amazon

The middle card needs the honest disclosure that **Premium is per-caregiver**, because that fact is what makes the device the better deal for most families. None of the prior proposals call this out clearly.

### 2.3 The conversion implication

Three SKUs, three audiences, three messages. The site should make each path feel obvious to its right visitor, not pitch all three to all visitors.

| Visitor profile | Best path | Why |
|---|---|---|
| Pregnant, planning ahead, partner involved | **Device** | Bundle math wins; hospital-bag angle resonates |
| New parent already overwhelmed, just wants help now | **Free app** | Lowest friction; introduces the system without commitment |
| App user 3+ months in, wants advanced features | **Premium** | They've validated value; the upsell is real |
| Comparison shopper between baby trackers | **Device** | The differentiator is the only argument that wins comparison |
| Gift buyer | **Device** | The only giftable SKU |
| App user with a partner who keeps forgetting to log | **Device** | The button is for the partner, not for them |

The pricing page is where this matchmaking happens. It must do the matchmaking work explicitly — not leave it to the visitor to figure out.

---

## 3. Recommended architecture (synthesized)

This is the merger of the three prior proposals plus my additions. Phase 1 prioritizes pages that move the conversion funnel; Phase 2 builds trust assets; Phase 3 fills out the brand surface.

### 3.1 URL map

#### Phase 1 — core conversion pages (build first)

| URL | Source | New work |
|---|---|---|
| `/` | Existing homepage | Restructure to introduce-and-route, not explain everything |
| `/how-it-works/` | Existing ecosystem section | Expand with day-in-the-life + setup flow |
| `/device/` | Existing device section + sub-grid | Expand with hospital-bag, gift, FAQ pull-in |
| `/app/` | Existing screenshots carousel | Reframe screenshots around use cases |
| `/pricing/` | Existing pricing cards | Add decision guide + LTV math + per-caregiver disclosure |
| `/compare/` | New | Honest comparison vs Huckleberry, Glow, paper, Apple Notes |

#### Phase 2 — trust and decision pages

| URL | Source | New work |
|---|---|---|
| `/caregivers/` | Existing caregivers section | Expand with handoff scenarios |
| `/privacy/` | Existing 6-bullet section | Expand from privacy blog post |
| `/resources/` | Existing blog | Reframe as curated hub, surface evergreen guides |
| `/blog/[category]/` | Existing JS filters | Convert to real indexable URLs |
| `/reviews/` | Existing testimonial block | Consolidate; categorize by use case |

#### Phase 3 — brand and campaign surfaces

| URL | Why later |
|---|---|
| `/about/` | Founder story exists as a quote; full page can wait |
| `/alexa/` | Already prominent on homepage; build only if traffic justifies |
| `/gift/` | Fold gift angle into `/device/` for Phase 1; build standalone only if gifting becomes a major channel |
| `/press/` | Build only when there's real coverage to feature |

### 3.2 Navigation

**Primary nav (5 items + global CTA):**

```
[ How it works ]  [ Device ]  [ App ]  [ Pricing ]  [ Resources ]   [ Choose your setup → ]
```

**Mobile sticky bar (always visible after scroll past hero):**

```
Buy on Amazon · $89.99 · Premium for every caregiver included
```

The sticky bar uses the hardware CTA because that's the path with the most fall-off in long-scroll contexts. Mobile visitors who are interested but distracted are the most common abandon profile, and the sticky bar catches them.

**Footer nav (full sitemap):**

Group into four columns: **Product** (Device, App, How It Works, Pricing, Compare), **Trust** (Caregivers, Privacy, Reviews, About), **Resources** (Resources hub, Blog, FAQ, Contact), **Legal** (Privacy Policy, Terms of Use).

---

## 4. Homepage spec — restructured for conversion routing

The current homepage is 14 long sections trying to fully explain device, app, Alexa, caregivers, privacy, gifting, founder story, and pricing. After dedicated pages exist, the homepage's job changes from **explain everything** to **introduce the story and route to the right page in one click**.

### 4.1 Section sequence (post-rebuild)

1. **Hero** — keep current copy. Above the fold: headline + subheadline + dual CTA + trust strip + hero image showing device in use.
2. **Problem** — keep the three real-life scenarios. They're strong.
3. **Ecosystem in 60 seconds** — compress the four input methods to one section with two-sentence cards. Each links to `/how-it-works/`.
4. **Why a button beats an app** — short device pitch. Links to `/device/`.
5. **Caregiver sync** — short. One image, one paragraph. Links to `/caregivers/`.
6. **Pricing teaser** — three cards in compressed form, with the LTV note: “Two caregivers? The device pays for itself in 13 months.” Links to `/pricing/`.
7. **Reviews** — keep the existing four testimonials.
8. **Privacy in plain English** — three bullets, link to `/privacy/`.
9. **Founder quote** — keep.
10. **Final CTA** — “Choose your setup” → `/pricing/`. Secondary: “Try the free app.”

Result: 10 sections instead of 14; each section is shorter; each routes to a specific destination.

### 4.2 Hero CTA hierarchy (this is the change)

**Current state (live site):**
- Primary: Get the free app
- Secondary: Buy the device

**Recommended state:**
- Primary: **Choose your setup** → `/pricing/`
- Secondary: **Buy the device** → Amazon (for visitors who already know they want it)

Rationale: the brief says all three conversion paths count. The current state forces a binary choice between app and device at the moment a visitor has the least information. “Choose your setup” captures the interested-but-uncertain segment and lets `/pricing/` do the matchmaking. The secondary CTA gives the high-intent visitor a one-click path that doesn't require routing through pricing.

### 4.3 What to remove from the homepage entirely

- The 9-screenshot app carousel → moves to `/app/`.
- Full Alexa command examples → moves to `/how-it-works/`.
- The “Ready for hospital / Works anywhere / Built for real life / Battery / Mount” feature sub-grid → moves to `/device/`.
- Gift section → folds into `/device/` as “Hospital bag + gift” block.
- Full pricing cards → moves to `/pricing/` (homepage gets a teaser).
- Full privacy bullet list → moves to `/privacy/` (homepage gets three bullets).

---

## 5. Device page spec — `/device/`

### 5.1 The page's one job

Convince a visitor that the $89.99 hardware is worth it **even though the same person owns a free app that already tracks the same data.** That's the only real objection.

### 5.2 Recommended sections

1. Hero: **A button beats an app, every time your phone isn't open.**
2. Three use cases with short videos: 3am feeding, diaper change with crying baby, nanny logging.
3. Comparison block: app-only vs device, by moment.
4. What it logs (feeds, sleep, pee, poop, with pictures of buttons).
5. How sync works (Bluetooth Low Energy, no Wi-Fi).
6. Hospital bag + gift block (folded in from current homepage).
7. **The pricing argument:** “Two caregivers on Premium = $80/year. The device is $89.99 once and includes Premium for everyone.” With the LTV table.
8. Battery, water resistance, mounting.
9. What's in the box.
10. Device-focused testimonials (Kiran K., Devi from current homepage — these are clearly device-use quotes).
11. Risk reversal: “Free shipping with Prime. 30-day returns through Amazon.”
12. Device-specific FAQ (pull battery, sync, pairing, reset from `/faq/`).
13. Buy on Amazon CTA.

### 5.3 Comparison block (specific table)

| Moment | App-only tracker | Nubo device |
|---|---|---|
| 3 a.m. feed in the dark | Unlock phone → open app → tap card | Press one button |
| Bottle warming, hands full | Wait, log later, hope you remember | Press one button on the fridge |
| Grandparent helping for the day | Teach app onboarding | Show one button labeled “feed” |
| Diaper change with screaming baby | Skip logging entirely | Press one button before picking up baby |
| Forgot to log a nap | Manual edit with picked timestamp | Voice catch-up: “She napped 1 to 2:30” |

### 5.4 What I'd add that the prior proposals missed

- **Setup videos as auto-playing 10-second loops, not static thumbnails.** The three YouTube embeds on the current homepage are screenshots. A muted auto-loop showing the hand pressing a button → app event appearing is dramatically more persuasive than a click-to-play thumbnail.
- **A “What about my second baby?” block.** The device works for any baby; subscriptions don't. This is a real LTV argument for parents planning families.
- **Lanyard photo and use case.** The FAQ mentions a lanyard ships in the box. The homepage doesn't show this. Parents wearing the device around their neck during day care or while moving around the house is a real use case that's invisible right now.

---

## 6. App page spec — `/app/`

### 6.1 The page's one job

Convince a visitor that the free app is worth installing **right now**, today, even if they don't buy the device. App installs are a real conversion outcome on their own — they create the relationship, they enable Premium upsell over time, and they nurture toward eventual device purchase.

### 6.2 Recommended sections

1. Hero: **A free baby tracker that doesn't punish you for needing help.**
2. Free forever, real list — the current free-tier feature list is genuinely generous; surface that.
3. Voice catch-up demo (this is the killer free feature; surface it).
4. Caregiver sync (free, unlimited — also generous).
5. Privacy promise (link to `/privacy/`).
6. Premium feature list — clearly framed as the optional upgrade.
7. Premium pricing with the per-caregiver disclosure.
8. **The device upsell, not as the page's main pitch but as a one-block answer to “what does the device add?”** Link to `/device/`.
9. App Store + Play Store badges and ratings.

### 6.3 Screenshot reorganization (new)

The current 9-screenshot carousel is unlabeled in the rendered HTML (alt text exists but it's not surfacing as captions). Reorganize around outcomes:

- **One-touch logging** → fastest log when phone is in hand
- **Voice catch-up** → for what you forgot
- **Caregiver timeline** → everyone in sync
- **Live Activities** → glance from the lock screen
- **Growth charts** → ready for the pediatrician
- **Midnight Ember** → 3am use without losing 30 min of sleep
- **Privacy controls** → local-first explanation
- **Allergen SafeStart** → guided first foods
- **Smart Averages** → real numbers, not skewed by a missed day

Each screenshot needs a visible caption tied to the outcome, not just the feature name.

---

## 7. Pricing page spec — `/pricing/`

### 7.1 The page's one job

Resolve the question every visitor has: **“Which one of these three things should I buy, given my situation?”**

### 7.2 Recommended sections

1. Hero: **Start free. Upgrade only when it pays back.**
2. Decision guide block (4–5 visitor profiles, each mapped to a recommended path — see §2.3).
3. Three pricing cards (free, Premium, device).
4. **The LTV math block** (the table from §2.1 — cost over 1 and 2 years for solo, two-caregiver, three-caregiver families).
5. Honest disclosure: **Premium is per-caregiver. The device includes Premium for everyone.**
6. FAQ block addressing the questions that block purchase:
   - Does the device require a Premium subscription? (No.)
   - Can my partner share the app for free? (Yes, on the free tier.)
   - What happens to my data if I cancel Premium? (Stays on your phone; you keep the free tier forever.)
   - Is the free tier crippled? (No — and prove it with the feature list.)
   - What if I have a second baby? (Device works forever, free app works forever, Premium is per-caregiver per-child.)
   - Can I return the device? (Through Amazon's standard return policy.)
7. Three CTAs: Download free, Try Premium 7 days free, Buy on Amazon.

### 7.3 What I'd add that the prior proposals missed

- **Pre-purchase email capture for third-trimester visitors.** “Due in [month]? We'll send you a hospital-bag setup checklist a week before your due date.” This is a free conversion path that doesn't exist anywhere on the current site, and it captures the exact moment of highest device-purchase intent.
- **A “buying for someone else?” link** to a gift-mode flow (could be as simple as a checkout-helper microcopy on the way to Amazon).

---

## 8. How It Works page spec — `/how-it-works/`

This is the ecosystem explainer. The raw material is on the current homepage; the work is expansion plus a day-in-the-life timeline that doesn't exist today.

### Sections

1. Hero: **One baby timeline. Four ways to log.**
2. Mental model paragraph: “Press a button, speak a sentence, tap a card, ask Alexa. Everything ends up in one timeline. Pick the method that fits the moment.”
3. The four input methods, with longer explanations than the homepage.
4. **A day-in-the-life timeline** (new content — none of the prior proposals fully spec'd this). Show a real day with timestamps:
   - 5:47 a.m. — Mom feeds baby half-asleep, **taps device**.
   - 7:15 a.m. — Dad takes over, **taps card in app** while making coffee.
   - 11:00 a.m. — Nanny arrives, **presses device** through the day.
   - 2:30 p.m. — Mom checks lock-screen Live Activity from work.
   - 6:30 p.m. — Grandma visits, **uses Alexa** to log a bottle from across the room.
   - 11:00 p.m. — Dad realizes he forgot to log the 9 p.m. feed; **says it on his phone**: “She had 4 ounces around 9.”
5. Setup flow (30 seconds to pair, 30 seconds to invite a caregiver).
6. Decision guide: **Start with the free app. Add the device when nighttime feeds, hands-full moments, or multi-caregiver coordination start to dominate.**
7. CTAs: View the device · See pricing.

---

## 9. Compare page spec — `/compare/` (Phase 1, not Phase 2)

The prior proposals mostly defer this to Phase 2. I'm recommending Phase 1 because comparison-shopper search queries are bottom-of-funnel and capture-able with good content, and because the current site has zero answer to “How is Nubo different from [competitor]?”

### What this page should compare honestly

- **Nubo vs paper notebook** — paper is faster than apps in many real moments; here's what an app gives you that paper can't.
- **Nubo vs Apple Notes / a shared note** — what tracking actually requires (timestamps, charts, exports for the pediatrician).
- **Nubo vs free tracker apps (Glow, Baby Tracker by nighp)** — feature-by-feature, with honest acknowledgment that those apps can be enough for some families.
- **Nubo vs Huckleberry** — Huckleberry is the dominant baby sleep app. Nubo's argument: Huckleberry is sleep-coaching software with a tracker; Nubo is tracking software with the device. They solve adjacent problems.
- **Nubo vs hospital-issued paper logs** — the NICU/preemie angle.

### Honest note

Comparison pages can read defensively. The right tone is **“here's the situation we win, here's the situation we don't.”** Honesty converts comparison shoppers because they're skeptical of one-sided pitches. Don't pretend the free apps are bad. Don't pretend Nubo is for everyone. The strongest line is something like: “If you have your phone in hand all day and only one caregiver, a free app is probably enough. If you have hands full or multiple caregivers, a button is faster.”

---

## 10. Resources hub — `/resources/`

The current `/blog/` is genuinely strong on content volume and topics. The two real problems:

1. **Categories are JavaScript filters, not URLs.** Sleep, Feeding, Tracking, Caregiver, Privacy, Product, Gifts cannot rank as standalone landing pages because they don't have indexable URLs.
2. **No curation.** A new visitor lands on `/blog/` and sees a flat reverse-chronological list. There's no “start here” path, no featured guides, no routing to the most decision-adjacent posts.

### Fixes

- Make `/blog/sleep/`, `/blog/feeding/`, `/blog/tracking/`, `/blog/caregiver/`, `/blog/privacy/`, `/blog/product/`, `/blog/gifts/` real server-rendered URLs.
- Each category gets a 2–3 sentence intro and a CTA to the most relevant product page.
- Build a `/resources/` hub above `/blog/` with a “First 12 weeks” starting block, featured guides, and category navigation.
- Rename the nav label from “Blog” to “Resources” to signal curated value.
- Add internal links from every blog post to the most relevant product page (sleep posts → device for night feeds; caregiver posts → caregivers + device; privacy posts → privacy + app).

### What not to do

Do not turn this into a parenting media site. The brief is conversion. Resources serve product intent — long-tail SEO that funnels into device, app, or Premium decisions. The current blog mostly does this well; preserve that focus.

---

## 11. Email and intent capture — the missing layer

None of the prior proposals address this, but it's one of the highest-leverage additions.

### 11.1 Pre-Amazon intent capture

Today, every “Buy on Amazon” CTA hands the visitor straight to Amazon. Nubo loses:

- The email address.
- The retargeting cookie.
- The post-purchase relationship.
- The ability to measure on-site funnel completion (you can only see Amazon click-throughs, not purchases).

**Recommendation:** insert a lightweight intermediate page or modal between the Buy CTA and the Amazon redirect. Something like:

> **One step before Amazon.**
> Want a 60-second setup video sent to your inbox so it's ready when Nubo arrives?
> [Yes, send it] (then redirect to Amazon)
> [No thanks, take me to Amazon]

Both buttons go to Amazon. The yes-button captures email. This is voluntary friction that pays for itself many times over via email-list value.

### 11.2 Third-trimester capture

Nubo's customer copy on the current homepage explicitly says “Most parents buy in the third trimester. Don't wait until the chaos starts.” That insight should drive a dedicated capture path:

> **Due in [month]?**
> We'll send you the hospital-bag setup guide one week before your due date — so Nubo is ready when baby is.
> [Email] [Due date] [Send me the guide]

This sits on the homepage and the device page. Visitors who aren't ready to buy a $90 device today are very willing to share an email and a due date in exchange for a checklist. The send-one-week-before timing converts at much higher rates than generic newsletters.

### 11.3 Post-install nurture (Premium upsell path)

App installers go silent today. Build a 14-day in-app or email sequence that:

- Day 1: welcome, one-tap setup video.
- Day 3: caregiver-invite reminder.
- Day 7: voice-catch-up walkthrough.
- Day 10: “Here's what your data looks like after a week — and here's what Premium would add.”
- Day 14: Premium trial reminder (if not already converted).

This is the path that converts free app users into Premium subscribers. None of the existing site changes alone will do this — it needs a follow-up motion. But the architecture should support it: the `/app/` page should set the expectation that installation is the start of a relationship, not the end of a click.

---

## 12. Risk reversal and trust signals (currently absent)

The current site has reviews and a privacy promise. It does not have:

- **Return policy reassurance** — “30-day returns via Amazon.” One sentence, reduces purchase anxiety meaningfully.
- **Press mentions or third-party validation** — even one credible mention (parenting publication, gift guide, NICU recommendation) materially lifts conversion. If real coverage exists, surface it. If it doesn't, prioritize earning some.
- **Founder accountability** — the founder quote is warm but anonymous-feeling. A photo of Divya, a real bio (mom + engineer, with credentials), and a link to a personal email or LinkedIn dramatically increases trust for a $90 unknown-brand purchase.
- **Customer count / install count** — even a soft number (“4,000+ families,” “downloaded in 30 countries”) signals legitimacy. Specific numbers beat vague claims.
- **Total trust strip near pricing** — currently the trust strip is in the hero and at the very bottom. Add a second trust strip immediately above the pricing cards: “4.2★ on Amazon · No subscription required · Private by design · Free shipping with Prime · 30-day returns.”

---

## 13. What to ship this week (no architecture work required)

These changes can ship before any new pages are built. They're high-impact, low-effort.

| Change | Effort | Impact |
|---|---|---|
| Remove “Feature 1…5” and “Screenshot 1…9” placeholders | 30 min | Credibility floor |
| Fix duplicate ecosystem image (voice card vs app card) | 1 hour | Ecosystem story coherence |
| Add “Pricing” to primary nav (anchor link to `/#pricing` until page exists) | 30 min | Removes biggest navigation dead end |
| Change the global CTA from “Buy on Amazon” to “Choose your setup” linking to `/#pricing` | 30 min | Captures Premium- and app-curious visitors |
| Rename “Blog” to “Resources” in nav | 5 min | Signals curated value |
| 301 redirect old `/shop/` page to homepage | 15 min | Cleans up search results |
| Add per-caregiver Premium disclosure to pricing cards | 1 hour | Surfaces the device's bundle value |
| Add return-policy reassurance below pricing cards | 30 min | Reduces purchase anxiety |
| Add mobile sticky-bottom CTA: “Buy on Amazon · $89.99 · Premium for every caregiver” | 2 hours | Mobile recovery for distracted scrollers |
| Surface third-trimester email capture above pricing | 1 day | New conversion path |
| Add `<title>` and meta description tweaks per page (as new pages launch) | half day total | SEO baseline |

Total: roughly one developer-day. Recommend shipping this week, before page-build effort begins.

---

## 14. Phased rollout

### Phase 1 — Conversion floor (weeks 1–2)

1. Ship all Section 13 quick fixes.
2. Build `/pricing/` (mostly extraction from existing homepage, plus the LTV math and decision guide).
3. Build `/device/` (extraction + hospital/gift fold-in + comparison table + auto-play setup videos).
4. Rebuild the primary nav.
5. Add mobile sticky CTA.

**What this enables:** the highest-converting paths get real URLs and the homepage stops being the only landing page.

### Phase 2 — Conversion expansion (weeks 3–4)

1. Build `/app/` (extraction + screenshot reorganization + Premium-upsell positioning).
2. Build `/how-it-works/` (ecosystem expansion + day-in-the-life timeline).
3. Build `/compare/` (genuinely new content; honest comparison vs paper, free apps, Huckleberry).
4. Convert blog category filters into real URLs.
5. Add internal links from FAQ and blog to product pages.

**What this enables:** every entry segment has a landing page, and SEO starts capturing comparison and category traffic.

### Phase 3 — Trust layer (weeks 5–6)

1. Build `/caregivers/`.
2. Build `/privacy/` (expanded from blog post).
3. Build `/resources/` hub.
4. Build `/reviews/` if testimonial volume justifies it; otherwise consolidate proof on existing pages.
5. Email capture infrastructure (intent capture, third-trimester capture, post-install nurture).

### Phase 4 — Brand surface (weeks 7+)

1. Build `/about/` with founder photo, bio, philosophy.
2. Earn or surface press mentions.
3. Optional `/alexa/` and `/gift/` if traffic data justifies.

---

## 15. What to measure — funnel instrumentation

Each architectural change should have a metric that shows whether it worked. Recommended instrumentation:

### Top-level

- **Total conversions per week**, weighted: device sale = 1.0, Premium subscription = 0.5, app install = 0.1. (Weights should be tuned to reflect actual revenue and lifetime value.)
- **Conversion rate by entry page** — homepage, device, app, pricing, blog, compare.

### Per-page

| Page | Primary metric | Secondary metric |
|---|---|---|
| `/` | Click-through to `/pricing/` or any product page | Scroll depth (should drop after restructure) |
| `/pricing/` | Click-through rate to Amazon, App Store, Play Store | Time on page (high time = decision guide is working) |
| `/device/` | Amazon click-through rate | Engagement with comparison table and setup videos |
| `/app/` | App Store / Play Store click-through rate | Premium-card engagement |
| `/how-it-works/` | Click-through to `/device/` or `/pricing/` | Day-in-the-life section engagement |
| `/compare/` | Click-through to `/device/` or `/pricing/` | Bounce rate from organic compare-query landings |
| `/blog/[category]/` | Indexed page count, organic impressions | Click-through to product pages |

### Email and intent capture

- **Pre-Amazon email capture rate** — % of Buy CTA clicks that share email before the redirect.
- **Third-trimester capture volume** — emails per week with due date.
- **Post-install Premium conversion rate** — Day-30, Day-60, Day-90 conversion from free to Premium.

### Trust

- **Time on `/privacy/`** — should exceed homepage average.
- **`/caregivers/` and `/compare/` entry rate from external sources** — direct links and search volume both indicate the page is doing real work.

---

## 16. The five highest-leverage things, if everything else gets cut

If only five things ship from this entire document:

1. **Fix the placeholder text and duplicate image bugs this week.** The site's credibility floor is the highest-leverage 30-minute fix on the list.
2. **Build `/pricing/` with the LTV math and per-caregiver disclosure.** This is where the device's real value gets surfaced — currently, the strongest pricing argument is buried as a sub-bullet.
3. **Change the global primary CTA to “Choose your setup” → `/pricing/`.** Captures the Premium- and app-curious segments that the current “Buy on Amazon” global CTA loses.
4. **Add third-trimester email capture.** New conversion path, doesn't exist today, captures the exact moment of highest device-purchase intent.
5. **Build `/compare/` in Phase 1 (not Phase 2).** Bottom-of-funnel comparison-shopper traffic is high-intent and currently goes uncaptured. None of the existing pages answers “How is Nubo different from [competitor]?”

---

## Bottom line

The current site has a strong emotional hook (“Nobody remembers at 3 a.m.”) and a genuine differentiator (the four-input ecosystem). The core problem isn't positioning — it's that one homepage is doing the job of eight pages, the conversion path is over-narrowed to the device, and the strongest pricing argument (per-caregiver Premium bundled with the device) is buried.

The fix is structural, not creative:

- **Homepage tells the story and routes.**
- **`/pricing/` does the matchmaking.**
- **`/device/` and `/app/` and `/compare/` each own one segment of intent.**
- **`/how-it-works/` answers the “what is this?” question once, well.**
- **`/resources/` plus indexable blog categories captures search.**
- **Email and intent capture turn ambivalent visitors into a relationship.**

The highest-leverage move is not to write more copy. It's to **give existing content real URLs, fix the bugs that hurt credibility, and add the one missing piece (the LTV math) that turns the device from “a $90 alternative to the free app” into “the obvious choice for any family with more than one caregiver.”**