# Nubo homepage before Nubo Care: copy and layout reference

Saved October 1, 2026. This is an archive of the working homepage at the start of the doctor visit discussion, before Nubo Care was added or made the flagship feature.

The copy below was recovered from the actual `src/pages/index.astro` source captured on September 30, 2026 at 5:48 PM Pacific (October 1, 00:48 UTC), and checked against the browser's rendered text from the same session. It is not reconstructed from the redesign proposal. Layout notes describe the recovered markup and CSS; quoted copy preserves the historical wording.

Historical product wording is retained for reference, including the 7-day Preview, $39.99/year, and refreshed 30-day device access. Those lines do not describe the subsequently agreed 14-day Nubo Plus preview that begins when parents confirm their child has arrived.

The original feature visuals were wireframe placeholders, with capture instructions visible underneath. Their text is recorded separately from the marketing copy.

## Page sequence

| Order | Section | Desktop arrangement |
| --- | --- | --- |
| 1 | Header | Logo, navigation, Download free app |
| 2 | A modern baby tracker. Beautifully simple. | Copy left, mother and newborn photo with device and app overlays right |
| 3 | Benefit navigation | Six links across a horizontal strip |
| 4 | Log at the speed of thought. | Visual left, copy right |
| 5 | Log a full day's care. In less than a minute. | Copy left, visual right |
| 6 | Actionable forecasts. | Visual left, copy right |
| 7 | A helpful pattern. Right where you log. | Copy left, visual right |
| 8 | Pick up where the last caregiver left off. | Visual left, copy right |
| 9 | What makes Nubo a modern baby tracker? | Centered introduction and six benefit cards |
| 10 | Leave the phone where it is. | Copy left, visual right |
| 11 | Your family's care stays your family's business. | Heading left, explanation right |
| 12 | Before you start. | Introduction left, FAQ accordion right |
| 13 | Start with the free app. | Centered copy and store badges |
| 14 | Footer | Brand statement, navigation columns, support and legal text |

## Header

Fixed header with Nubo logo on the left, desktop navigation in the middle, and a rounded teal CTA on the right. At 900px and below, navigation and the desktop CTA give way to a mobile menu.

Desktop links, in order: App (`/app/`), Device (`/device/`), Pricing (`/pricing/`), Compare (`/compare/`), Resources (`/resources/`).

CTA: **Download free app**, linking to `#app-downloads`.

## Hero

**Layout:** Ivory background. Desktop: text on the left, mother and sleeping newborn photo on the right in an organic rounded frame, with teal outline shapes. The Nubo device overlaps the lower left of the visual and a compact app screenshot carousel overlaps the lower right. On smaller screens the centered copy sits above the photo and product overlays. “Beautifully simple.” is on a second line in teal.

**Eyebrow:** Free baby tracker app for iPhone and Android

**Heading:**

> A modern baby tracker.
> Beautifully simple.

**Copy:**

> Log with a tap or your voice, keep caregivers in sync, and see helpful insights at a glance.

**Note:**

> AI voice logging and caregiver sharing are free. No subscription required.

**Links and CTAs:**

- Download on the App Store → [Download on the App Store](https://apps.apple.com/us/app/nubo-baby-tracker/id1667461158)
- Get it on Google Play → [Get it on Google Play](https://play.google.com/store/apps/details?id=com.clicksie.nuboapp)

**Hero assets:**

- Mother and newborn: `/images/hero-mother-baby.webp`, with an 800px responsive variant. Alt text: “Mother holding her sleeping newborn”.
- Device: `/images/hero-device.webp`. Alt text: “Nubo one-tap baby tracker device”.
- Compact `AppCarousel` with app screenshots, previous and next controls, and screenshot selection controls.

## Benefit navigation strip

White strip with top and bottom borders. Six centered links, wrapping as needed; two columns on mobile.

- One-tap logging → `#one-tap-logging`
- AI voice logging → `#voice-logging`
- Actionable forecasts → `#forecasts`
- Helpful insights → `#insights`
- Shared care → `#caregivers`
- Nubo device → `#device`

## One-tap logging

Anchor: `#one-tap-logging`.

**Layout:** Desktop: portrait video placeholder on the left, copy on the right. Mobile: copy first, visual underneath.

**Eyebrow:** Free one-tap logging in the app

**Heading:**

> Log at the speed of thought.

**Copy:**

> Use the app's quick-log buttons to record everyday care as it happens, and see each event join your baby's timeline.

**Note:**

> Included in the free app on iPhone and Android.

**Links and CTAs:**

- Explore one-tap logging in the app → `/app/`

**Wireframe visual 01:** Diaper, formula, sleep. Logged with quick taps.

Capture instruction:

> Record the app buttons in use: log a dirty diaper, choose 2 oz of formula, then start sleep. Keep each resulting event visible.

Visual labels: Dirty diaper, 2 oz formula, Start sleep.

## AI voice logging

Anchor: `#voice-logging`.

**Layout:** Desktop: copy on the left, portrait video placeholder on the right. The spoken example sits in a pale teal blockquote with a teal left border. Mobile: copy first, visual underneath.

**Eyebrow:** Free AI voice logging

**Heading:**

> Log a full day's care.
> In less than a minute.

**Copy:**

> Baby finally settled in your arms? Catch up on the feeds, naps, and changes you remember. Say it softly. Watch each log appear, then keep going. Nubo puts each entry at the time it happened.

**Spoken example:**

> “Ella had a 4 oz bottle about ten minutes ago.”

**Note:**

> In-app voice processing runs on your phone in real time.

**Links and CTAs:**

- See how to catch up on missed logs → `/blog/tracking/catch-up-baby-logging-after-the-fact/`

**Wireframe visual 02:** Catch up, with results as you go

Capture instruction:

> Record a spoken feed, its result with the correct event time, then the next spoken event.

Visual labels: Say what happened, See the result, Keep going.

## Actionable forecasts

Anchor: `#forecasts`.

**Layout:** Warm background. Desktop: portrait forecast screenshot placeholder on the left, copy on the right. Mobile: copy first, visual underneath.

**Eyebrow:** Nubo Plus · Coming soon

**Heading:**

> Actionable forecasts.

**Copy:**

> Know when to start winding down or prepare a feed. Nubo will use your baby's recent routine to forecast sleep and feeding, with one clear next step.

**Copy:**

> As your baby's routine changes, Nubo will learn from new logs and adjust its forecasts.

**Links and CTAs:**

- See what Nubo Plus includes → `/pricing/#plans`

**Wireframe visual 03:** One clear next step on the home screen

Capture instruction:

> Capture the forecast strip with a sleep or feeding recommendation. For example: 'Sleep in ~18 min' and 'Start winding down soon', then 'Sleep likely now' and 'Good time to start the nap'.

Visual labels: Sleep and feeding forecast.

## Personalized insights

Anchor: `#insights`.

**Layout:** White background. Desktop: copy on the left, portrait Quick Actions screenshot placeholder on the right. Mobile: copy first, visual underneath.

**Eyebrow:** Nubo Plus · Personalized insights

**Heading:**

> A helpful pattern.
> Right where you log.

**Copy:**

> Nubo Plus surfaces the most important insights for caregivers on the Quick Actions screen. Review all insights on the Charts screen whenever you want a closer look.

**Links and CTAs:**

- See what Nubo Plus includes → `/pricing/#plans`

**Wireframe visual 04:** Important insights on Quick Actions

Capture instruction:

> Capture the Quick Actions screen with the most important caregiver insights visible.

Visual labels: Quick Actions insights.

## Shared care

Anchor: `#caregivers`.

**Layout:** Warm background. Desktop: landscape 16:9 video placeholder on the left, copy on the right. The visual shows three caregiver phones. Mobile: copy first, visual underneath.

**Eyebrow:** Unlimited caregivers. Free.

**Heading:**

> Pick up where the last caregiver left off.

**Copy:**

> Your partner logged a bottle. You can see it before taking over. Invite a grandparent, nanny, or another trusted helper to the same baby timeline.

**Copy:**

> Everyone can log from iPhone or Android, with updates shared when phones sync and have connectivity.

**Links and CTAs:**

- See how caregiver sharing works → `/caregivers/`

**Wireframe visual 05:** One log, synced across three phones

Capture instruction:

> Record a 16:9 video with three phones side by side. Log an event on one phone and show it syncing to the other two in real time, with caregiver attribution visible.

Visual labels: Caregiver 1, Caregiver 2, Caregiver 3.

## Modern baby tracker benefit grid

Anchor: `#modern`.

**Layout:** White background, centered introduction, six numbered cards in three columns and two rows on desktop. Two columns on tablet, one column on mobile. Comparison link centered below the grid.

**Eyebrow:** Built for the day you are actually having

**Heading:**

> What makes Nubo a modern baby tracker?

**Copy:**

> Less effort to record care. Useful context when you need it. One connected timeline.

**Links and CTAs:**

- Compare your tracking options → `/compare/`

### 01. A clear, quick interface

> Quick Action cards keep common logs and the last event close together.

Link: Explore quick logging → `/app/`.

### 02. AI voice logging

> Catch up on missed feeds, naps, and changes by voice. See each result as you go.

Link: See voice logging → `#voice-logging`.

### 03. Actionable forecasts

> Coming soon with Nubo Plus: sleep and feeding forecasts with one clear next step, adapting as your baby's routine changes.

Link: See upcoming forecasts → `#forecasts`.

### 04. Connected care

> Share one baby timeline with unlimited invited caregivers across iPhone and Android.

Link: Explore caregiver sharing → `/caregivers/`.

### 05. Nubo device

> Use dedicated buttons for feeds, sleep, and diapers when reaching for a phone is inconvenient.

Link: See screen-free logging → `#device`.

### 06. Privacy built in

> Voice processing runs on your phone. Share care with people you invite, without ads or selling baby data.

Link: Read the privacy overview → `/privacy/`.

Comparison prompt: **Choosing between baby trackers?**

## Nubo device

Anchor: `#device`.

**Layout:** Ivory background. Desktop: copy on the left, device and app screenshot placeholder on the right. Buy on Amazon button and See the device link sit together. Mobile: copy first, visual underneath.

**Eyebrow:** Nubo Device · Instant Logging

**Heading:**

> Leave the phone where it is.

**Copy:**

> A feed in the dark. A change with both hands busy. Use dedicated buttons for feeds, sleep, and diapers when reaching for your phone is inconvenient.

**Copy:**

> Every phone that syncs with your Nubo device gets Nubo Plus, normally $39.99/year. Each sync refreshes a 30-day access window.

**Note:**

> Start with the free app. Add the device when it fits your routine.

**Links and CTAs:**

- Buy on Amazon → [Buy on Amazon](https://www.amazon.com/nubo-Newborn-Activity-Tracker-Color/dp/B0CJLNBG4P?maas=maas_adg_465D5CB69C73F660B7AD38831E2D680B_afap_abs&ref_=aa_maas&tag=maas)
- See the device → `/device/`

**Wireframe visual 06:** One tap, then into the timeline

Capture instruction:

> Capture a dedicated device button in use and its synced entry in the app.

Visual labels: Device in use, Synced app entry.

## Privacy

**Layout:** Pale teal full-width band with thin top and bottom borders. Desktop: heading on the left, privacy paragraph and link on the right. Mobile: stacked.

**Eyebrow:** Private by design

**Heading:**

> Your family's care stays your family's business.

**Copy:**

> In-app AI voice logging runs on your phone. Backups use your own iCloud or Google Drive. Caregiver sharing is encrypted between invited people. No ads or selling baby data.

**Links and CTAs:**

- How Nubo handles privacy → `/privacy/`

## FAQ

Anchor: `#questions`.

**Layout:** Desktop: introduction on the left, five expandable FAQ rows on the right, each separated by a fine border and carrying a plus icon. The Free and Plus comparison link sits below the rows. Mobile: introduction above the accordion.

**Eyebrow:** A few practical answers

**Heading:**

> Before you start.

**Copy:**

> Start free, then choose the extras that fit your family.

**Links and CTAs:**

- Read all Nubo FAQs → `/faq/`
- See the full Free and Plus comparison → `/pricing/`

### Is the Nubo baby tracker app really free?

> Yes. Everyday tracking, Quick Log, AI voice logging, unlimited caregivers, offline mode, and private backup are free. Nubo Plus adds optional advanced tools. The free app continues after the separate 7-day Preview ends.

### Does Nubo have AI voice logging?

> Yes. Say what happened in natural language and Nubo turns your words into a structured baby log, including events remembered later. See each result as you go, then describe the next event. In-app voice processing runs on your phone. It is included in the free app.

### Do I need to buy the Nubo device?

> No. The app works on its own. The Nubo device adds physical buttons for common care events. Device entries sync over Bluetooth when a paired caregiver phone is nearby.

### Can iPhone and Android caregivers share?

> Yes. Invite a partner, grandparent, nanny, or other trusted caregiver to the same baby timeline. Entries are shared when phones sync and have connectivity.

### What does Nubo Plus add?

> Nubo Plus adds personalized insights, reminders, exports, private pumping, Alexa logging, and other advanced tools. Live Activities are available with Nubo Plus on iPhone. The pricing page has the full feature comparison.

## Final app download CTA

Anchor: `#app-downloads`.

**Layout:** Centered final download section on an ivory background, with the two store badges side by side and a small note below.

**Eyebrow:** Free on iPhone and Android

**Heading:**

> Start with the free app.

**Copy:**

> Try an ordinary day of logging with the people who help care for your baby.

**Note:**

> No device required. AI voice logging and caregiver sharing included.

**Links and CTAs:**

- Download on the App Store → [Download on the App Store](https://apps.apple.com/us/app/nubo-baby-tracker/id1667461158)
- Get it on Google Play → [Get it on Google Play](https://play.google.com/store/apps/details?id=com.clicksie.nuboapp)

## Footer

Brand statement below the Nubo logo:

> Modern baby tracking with AI voice logging, shared care, and optional screen-free buttons.

Desktop: brand area beside six navigation columns. At smaller widths the brand sits above the columns, which reduce to three and then two columns.

| Column | Link labels, in order |
| --- | --- |
| Product | Device, App, Alexa Skill, Pricing, Compare, Exclusive Pumping, Gift |
| Compare | vs Nara Baby, vs Huckleberry, vs Nighp Baby Tracker |
| Trust | Caregivers, Privacy, App Store reviews, About |
| Resources | Resources hub, Blog, Guides, FAQ, Contact |
| Legal | Privacy Policy, Terms of Use, Buy on Amazon, App Store, Google Play, Alexa Skill |
| Follow Us | Instagram, YouTube |

Bottom text:

> Questions? support@clicksie.io · We reply within 1 business day.

> Nubo is not a medical device and is not intended to diagnose, treat, cure, or prevent medical conditions.

> Designed by Clicksie in USA · © 2026 Clicksie LLC

## Responsive layout and visual treatment

Quicksand typography, teal brand accents, dark headings, softer secondary text, ivory and warm section backgrounds, generous spacing, rounded product imagery, and bordered cards.

- Hero desktop container: maximum width 1320px, nearly equal columns, 120px top padding and 52px bottom padding.
- Feature rows: two columns, vertically centered, generally 4rem gaps and 5.5rem section padding. The alternation is visual only; mobile retains copy before its visual.
- Hero becomes centered and stacked at 900px. The benefit grid changes from three to two columns there.
- At 680px, feature rows, privacy, and FAQ become single columns; benefit cards become one column, section padding generally drops to 3.5rem, and the benefit navigation uses two columns.
- Store badges: 160 × 56px desktop, 150 × 52.5px mobile, and 134 × 47px at 360px and below.
- Placeholder visuals: pale backgrounds, dashed rounded borders, skeleton app screens, visual numbers, labels, captions, and capture instructions. These describe the wireframe state, not finished photography or demo footage.

## Historical page metadata

**Title:** Nubo | Modern Baby Tracker with AI Voice Logging

**Description:**

> Meet Nubo, a modern baby tracker for iPhone and Android. Use free AI voice logging, quick taps and caregiver sharing. Add the Nubo device for screen-free logging.

Open Graph image: `/images/hero-mother-baby.webp`.

Structured data used Organization, MobileApplication, and WebPage. The app was described as free, with iOS and Android download links.

## Recovery notes and related references

Primary recovery source: the homepage source and rendered browser text captured at the beginning of the “Plan doctor visit summaries” chat, September 30, 2026. This was an uncommitted homepage revamp, so the older Git HEAD does not contain this exact layout.

The sequence above includes forecasts and has no Nubo Care section. It predates the intermediate layout that inserted Care after voice logging, and the later Care-first homepage.

Related repository references:

- [Homepage benefit redesign proposal](/Users/guru/Projects/Nubo/nubo-web/homepage-benefit-redesign-plan.md): earlier planning context, not the source used to recover this copy.
- [September 29 desktop wireframe screenshot](/Users/guru/Projects/Nubo/nubo-web/planning-assets/homepage-wireframe/previews/desktop-full-page.jpg): useful for the visual style, but an earlier revision that does not include the recovered forecasts section.
- [September 29 mobile wireframe screenshot](/Users/guru/Projects/Nubo/nubo-web/planning-assets/homepage-wireframe/previews/mobile-full-page.jpg): likewise an earlier revision.

This reference preserves the earlier page for review. It does not change the current homepage.
