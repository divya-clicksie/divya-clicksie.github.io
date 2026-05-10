# Nubo Rearchitecture Proposal — Update v2

## What this document is

This is a focused update to the main rearchitecture proposal, triggered by three Amazon listing assets that were not in scope when v1 was written:

1. **Comparison source data** (Diary 42s · Apps 18s · Nubo 1s; with three-month roll-ups)
2. **Co-parenting / caregiver hub diagram** (device in the center, six caregiver phones around it, BLE arrows)
3. **Instant tracker close-up** (hand pressing device, sleeping baby, label list)

These assets unlock conversion arguments the website is currently not making at all. This document is *additive* to v1 — it doesn't replace anything, it sharpens specific sections and adds two new conversion levers.

---

## 1. The biggest unlock: the TIME math (alongside the LTV math)

V1 of this proposal made the **money** argument: the device pays for itself in 9–13 months because it bundles Premium for every caregiver.

The Amazon comparison image makes a **time** argument that is, frankly, more emotionally persuasive for sleep-deprived new parents. **Nubo saves roughly 10 hours of logging time vs. apps over the first 3 months, and avoids the repeated phone pickups that can lead to distraction.**

These two arguments hit different visitor mindsets:

| Argument | Hits | Best on |
|---|---|---|
| LTV math ($) | Comparison shoppers, multi-caregiver families, planners | `/pricing/`, `/device/` |
| Time math (hours) | Exhausted new parents, partners of new parents | Homepage, `/device/`, `/compare/` |
| Screen-time mechanism | Parents who feel guilty about phone time around baby | Homepage hero subtext, `/compare/` |

The screen-time angle is the one nobody else can make. Huckleberry, Glow, and every other app-only competitor *cannot* claim "zero screen time" because the act of using their product *is* screen time. This is a structural, defensible message.

---

## 2. Refining the speed claim — three Nubo speeds, not one

The Amazon image shows Nubo as a single 1-second column. The user clarified that Nubo's own ecosystem actually has three speed tiers, not one:

| Method | Time per log | What it requires |
|---|---|---|
| Diary | 42 sec | Find pen, find page, write |
| Apps (Huckleberry-class) | 18 sec | Unlock phone, open app, navigate, tap |
| **Nubo voice** | **8 sec** | Open phone, speak one sentence |
| **Nubo Quick Log (in-app card)** | **4 sec** | Open app, tap one card |
| **Nubo device** | **1 sec** | Press one button |

This is a strong rhetorical structure for the **compare page** and the **device page**:

> *"Even our slowest method is more than 2× faster than the fastest competitor. Our fastest is 18× faster."*

It also cleanly resolves the device-vs-app cannibalization concern from v1. The free app at 4-second Quick Log is already a category leader; the device is the upgrade for moments when even 4 seconds and an unlocked screen are too much (3 a.m., hands full, half-asleep, baby on chest).

### Recommended ladder messaging

The ladder gives every visitor a "next step" that fits where they are:

- **Pen and paper (42 sec)** → start with the **free app**, get to 4 seconds today.
- **Other apps (18 sec)** → switch to the **free Nubo app**, get to 4 seconds today.
- **Nubo app at 4 seconds** → add the **device**, get to 1 second when you need it most.

Each rung is a real conversion, and each is the right next move for that visitor — which matches the brief that all three paths count equally.

---

## 3. Where each Amazon image goes on the new site

### 3.1 Comparison source data ("Reclaim hours of precious time")

This source data is one of the highest-impact conversion assets Nubo has, and it currently lives only on Amazon. **It should appear as semantic onsite tables on at least four pages**, in roughly this order of importance:

1. **`/compare/`** — anchor of the entire page. The expanded 5-row version (Diary / Apps / Nubo voice / Nubo Quick Log / Nubo device) replaces the current Amazon version. This *is* the top of the compare page.
2. **`/device/`** — under "A button beats an app." The semantic comparison table proves what the surrounding copy claims.
3. **Homepage** — somewhere between the problem section and the ecosystem section. It immediately reframes the visitor's expectation: "this isn't another tracker app, it's faster than tracker apps."
4. **`/pricing/`** — alongside the LTV math. Time and money, side by side.

### 3.2 Co-parenting / caregiver hub diagram

This image shows Mom, Dad, Grandma, Grandpa, Nanny, and Day Care all connected to the central device with BLE arrows and cloud-sync arrows. It is dramatically stronger than the current homepage's "care_with_confidence.webp" (parent + grandparents).

- **`/caregivers/`** — hero image. This image *is* the page's argument.
- **Homepage** — replaces the current caregiver section image.
- **`/device/`** — in the "Premium for every caregiver" pricing block, to visually motivate why one device covers the whole family.

### 3.3 Instant tracker close-up

The hand pressing a button with sleeping baby and feature list is the lifestyle shot the device page hero is currently missing.

- **`/device/`** — hero image, above the fold.
- **Homepage hero** — strong candidate to replace the current hero image (currently a generic tender-mother shot). The product is much more visible here, which addresses v1's note that the hero must communicate "physical button for baby tracking" in 3 seconds.

---

## 4. Specific updates to v1 sections

### v1 Section 2 — Conversion frame

**Add a sub-section titled "The time math"** with the 5-row speed table and the three-month roll-up. Keep the LTV money math; the two arguments reinforce, not replace, each other.

**Add a third "screen time" angle**:

> *Every app-based log requires a phone pickup. Nubo's device logs do not, which means fewer chances to drift into messages, notifications, or other apps while you are caring for the baby.*

### v1 Section 4 — Homepage spec

**Insert a new section between sections 2 (Problem) and 3 (Ecosystem):**

> ### Section 2.5: Faster than the alternatives
> [Semantic comparison table, 5-row version]
>
> **42 seconds with a diary. 18 seconds with an app. 1 second with Nubo.**
> Save hours of logging in the first three months. And reduce the phone pickups that can pull attention away from the moment.

**Replace the hero image** with the Amazon "instant tracker" close-up, or a new shot in that style — product visible, baby in soft focus, hand mid-press.

**Replace the caregiver section image** with the caregiver-hub diagram.

### v1 Section 5 — Device page spec

**The opening hero of `/device/` becomes the comparison image, not text.** The page's argument is faster told visually than verbally.

Add a new section: **"Three Nubo speeds. Pick your moment."** Use the speed ladder (8s voice, 4s quick log, 1s device) as a positive way to sell the device as the *final* tier of an already-fast system, rather than as a replacement for a slower one.

### v1 Section 9 — Compare page spec

**Promote the comparison data to the top of the page.** It does in one accessible table what 600 words of comparison copy would otherwise have to do.

The expanded 5-row table should appear immediately below the hero, with footnoted methodology:

> *Times measured for a typical feeding entry: pen and paper writing the time and quantity; app from locked phone through open-app, tap-feeding, tap-bottle, enter quantity, save; Nubo voice from app open through end of recognition; Nubo Quick Log from app open through tap; Nubo device from approach through button press. Three-month estimates assume roughly 2,250 to 2,400 logged events over 90 days across feeds, diapers, sleep starts/stops, pumping, medicine, and caregiver notes.*

Add the methodology because comparison claims are credible only when their inputs are visible. Without footnoted assumptions, the numbers look like marketing.

### v1 Section 13 — Ship this week

**Add three line items to the quick-fix list:**

| Change | Effort | Impact |
|---|---|---|
| Add the Amazon comparison data to the homepage and current pricing section as semantic tables | 1 hour | Brings the strongest timing argument onsite immediately |
| Replace the current caregiver-section image with the Amazon caregiver-hub diagram | 30 min | Stronger visual proof of "everyone in sync" |
| Update the hero image to product-forward shot from Amazon listing | 1 hour | Fixes v1 note: visitor must understand "physical button" in 3 seconds |

These three changes can ship before any new pages are built and noticeably lift the existing homepage on their own.

---

## 5. The new conversion lever: anti-screen-time positioning

This deserves its own section because none of the prior proposals (mine or the three I synthesized) caught it.

### Why this is structurally different

Every other tracker app on the market has the same problem: using it requires being on a phone, near a baby. Many parents already have low-grade guilt about phone time around their child. App-based trackers ask them to add *more* phone time in the name of "tracking."

Nubo is the only product in the category that can credibly claim:

> *Track everything. Look at your phone less.*

The device replaces phone-tap logging. Voice catch-up replaces in-app navigation. Live Activities replace opening the app to check status. Each piece of the ecosystem reduces, rather than increases, screen time.

### Where to land this message

- **Homepage**, in the trust strip near the hero: "**Track more. Tap less. Look at your baby, not your phone.**"
- **Device page**, in the "why hardware exists" block: "Apps work when your phone is open. Nubo is for the moments you'd rather not unlock it."
- **Compare page**, with a defensible screen-time mechanism note rather than a hard unvalidated screen-time total.
- **About / founder page**, as a values statement: "We built a tracker that makes you put the phone down."

### The risk to manage

This message can come across as anti-app — including anti-Nubo's-own-app. The fix is to be precise: it's anti-*unnecessary* screen time. The Nubo app is fast and the voice mode is hands-low, but the device is the only option that's truly screen-free. This is consistent with the laddered speed argument in §2.

---

## 6. Updated highest-leverage list

V1 ended with five highest-leverage moves. Updated for these assets:

1. **Ship the live-site bug fixes this week** (placeholder text, duplicate ecosystem images, outdated `/shop/` route) — updated so purchase CTAs go directly to Amazon.
2. **Put the Amazon comparison data on the homepage this week as a semantic table.** The single highest-impact onsite change available without building a new page.
3. **Build `/pricing/` with the LTV math** — unchanged from v1.
4. **Build `/compare/` in Phase 1, anchored by the comparison data and the 5-row expanded table.** The compare page now has source data; building it is no longer a writing problem, it's a layout problem.
5. **Add anti-screen-time messaging across the site** — new from v1. Single sentence in the homepage trust strip; full block on `/device/` and `/compare/`.

The original "third-trimester email capture" recommendation drops out of the top five but stays in the broader rollout plan in v1.

---

## 7. One open question for the team

The Amazon comparison image makes specific quantitative claims (42s, 18s, 26 hrs, 11 hrs, 40 mins). If those numbers were derived for the Amazon listing under specific test conditions, the methodology should be documented and disclosed when the data is used on the website.

Two options:

- **Option A (recommended):** Keep the numbers, add a small "How we measured" footnote on `/compare/` and a tooltip on the homepage. Specific claims with visible methodology beat vague claims every time.
- **Option B:** Soften the numbers to ranges ("about 40 seconds," "10+ hours saved") if methodology can't be cleanly documented.

Avoid the third option of using the numbers without methodology. Specific claims without backing erode trust on closer inspection — exactly the visitors most likely to convert.