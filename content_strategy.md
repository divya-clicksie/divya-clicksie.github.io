# Nubo Content Strategy — Claude Code Execution Tracker

> **IMPORTANT:** This document is the single source of truth for Nubo's content strategy. Read the full file before starting any task. Update task statuses and log entries as you complete work. Never delete historical log entries. Follow the instructions in each task block exactly.

---

## Project Overview

**Brand:** Nubo — a baby tracking ecosystem (physical device + companion app + Alexa skill)
**Website:** https://divya-clicksie.github.io/
**Goal:** Build a blog that drives organic SEO traffic and converts new parents into buyers
**Competitors analyzed:** Talli (talli.me) · Huckleberry (huckleberrycare.com)
**Strategy created:** 2026-03-30

### The Nubo ecosystem — three ways to track with one system

Nubo is not a single product. It is three input surfaces that feed into one unified data layer in the Nubo App:

| Product | What it does | Where to get it |
|---------|-------------|-----------------|
| **Nubo Device** | Physical one-touch BLE tracker. Tap to log feeds, sleep, diapers. Syncs to the app via Bluetooth. Coin cell battery, months of life, no charging. | Amazon |
| **Nubo App** | iOS + Android companion app. Where all data lives. Charts, growth tracking, smart averages, reminders, caregiver sync, CSV export, Fenton preemie charts, Midnight Ember night mode, vaccine records, CDC milestones. | App Store, Google Play |
| **Nubo Alexa Skill** | Voice-based logging. "Alexa, tell Newborn Tracker that Emma had 4 ounces of formula 20 minutes ago." Supports relative and absolute times. Events sync to all caregivers. | Amazon Alexa Skills |

**The key differentiator:** No other baby tracker offers all three input methods feeding into the same dataset. Huckleberry is app-only. Talli is device + app. BabyConnect is app-only. Nubo gives parents a device for hands-free moments, an app for detailed review and analytics, and a voice skill for when both hands and eyes are occupied. The parent picks the right tool for the moment.

### Product differentiators to weave into every post
- **Ecosystem, not a single product** — three input methods (device, app, voice), one data layer
- Multi-caregiver sync (nanny, grandparents, partner all see the same data)
- Privacy-first: local-first architecture, end-to-end encrypted sync, no server-side data access
- Works in the dark, one-handed, at 3am (device); eyes-free from across the room (Alexa)
- Nubo App is a full-featured tracker on its own, not just a device companion (smart averages, Fenton charts, Midnight Ember, vaccine tracking, CDC milestones, Live Activities)
- Coin cell battery — months of life, no charging anxiety

---

## The Three Ways to Track — Recurring Narrative Framework

There are two narrative layers. The first is the **category-level** comparison (paper vs app vs physical device) that creates credibility by being honest about all options. The second is the **Nubo ecosystem** layer (Device + App + Alexa Skill) that shows how Nubo alone covers the full spectrum. Both should surface across the blog at different moments.

### Layer 1: Category comparison (paper / app / device)

Every parent who decides to track eventually lands on one of three methods. This framework is the connective tissue across the entire blog. It should surface in every post, sometimes as a full section, sometimes as a passing sentence, but always reinforcing the same idea: there are three roads, each with real tradeoffs, and the right choice depends on your life.

| Method | What it looks like | Strengths | Weaknesses |
|--------|--------------------|-----------|------------|
| **Pen & paper** | Fridge chart, hospital worksheet, notebook on the nightstand | Zero learning curve, no batteries, familiar | Illegible at 3am, only one person sees it, impossible to total or trend, gets lost |
| **Phone app** | Huckleberry, BabyConnect, or similar | Rich analytics, reminders, history graphs, AI sleep predictions | Requires unlocking phone mid-feed, screen time guilt, blue light at night, login-sharing friction for caregivers, most collect data |
| **Physical device** | Nubo device (one-tap tracker that syncs to a companion app) | One-handed, works in the dark, no phone needed, caregiver sync built in, privacy-first | No push notifications, less granular manual input, requires the companion app for review |

### Layer 2: Nubo ecosystem (Device + App + Alexa)

Once the reader understands the category comparison, the Nubo ecosystem is the payoff. Most trackers force you to pick one input method. Nubo gives you three that share the same data.

| Surface | When to use it | The moment it solves |
|---------|---------------|---------------------|
| **Nubo Device** | Hands full, dark room, baby in arms | 3am diaper change, mid-feed logging, contact nap start/stop |
| **Nubo App** | Reviewing data, detailed input, charts, pediatrician visits | Adding notes, checking daily totals, viewing growth charts, exporting CSV |
| **Nubo Alexa Skill** | Both hands occupied, across the room, multitasking | Cooking dinner with baby on hip: "Alexa, tell Newborn Tracker that Mila had a wet diaper just now" |

**How to introduce the ecosystem:**
- **Never lead with it.** Start with the category comparison (Layer 1). Establish credibility by being fair to paper and competitor apps.
- **Introduce one surface at a time** in the context of a specific parenting moment. Don't dump all three at once.
- **The "aha" moment** is when the reader realizes one system covers the dark-room problem (device), the daytime analytics problem (app), and the hands-full-across-the-room problem (Alexa). That realization should feel earned, not pitched.
- **The comparison posts** (POST-009, POST-020) are where the full ecosystem gets explicit treatment. In other posts, it's a sentence or a passing mention.

### How the narrative works across posts

- **The framework is honest.** Never dismiss paper or apps. Acknowledge when they win. Credibility comes from fairness.
- **The reader should recognize themselves.** Most parents start with paper in the hospital, graduate to an app, then either love it or hate it. The physical device is the third option they may not know exists. The Alexa skill is the bonus they discover after buying in.
- **Nubo is always the third reveal.** Introduce paper and apps first (the methods readers already know), then present the physical device as the option they may not have considered. The ecosystem (device + app + Alexa together) is the fourth reveal in posts where it fits.
- **Vary the weight per post.** Some posts need a full three-way comparison section. Others only need a single sentence like "Whether you jot it on a notepad, tap it in an app, or press a button on a tracker, the important thing is that you capture it." See each post's `Three ways angle` instruction for the right dosage.

### Dosage guide

| Dosage | When to use | Example |
|--------|-------------|---------|
| **Light** (1 sentence) | Posts where tracking is background context, not the topic | "However you log it, on paper, in an app, or with a physical tracker, having that number ready makes the visit smoother." |
| **Medium** (1 paragraph or a sidebar) | Posts where the tracking method affects the experience | A short paragraph explaining why tracking cluster feeds is hard with a phone (baby is latched, hands are full) and easier with a one-tap device. Mention the Alexa skill if the scenario fits (e.g., hands-free from a rocking chair). |
| **Heavy** (dedicated H2 section or comparison table) | Posts where the method IS the topic, or where the three-way choice drives the decision | Full comparison section with a table, or the post is structured around the three methods. Ecosystem posts may include a Device/App/Alexa scenario table. |

---

## How Claude  Should Use This File

> **MOST IMPORTANT RULE: No AI slop.** If a post cannot provide genuine value, unique insight, or real product description, do not write it. Do not fill posts with generic filler content. Evaluate this **before** starting each post (does it have something real to say?) and **after** finishing (did it actually say it?). Do not publish weak, overlapping, or generic posts just to increase count. Kill or merge a post before publishing slop.

1. **Before starting:** Read this entire file to understand context, brand voice, and which tasks are pending.
2. **Picking a task:** Choose the next `[ ] PENDING` task in phase order. Do not skip phases.
3. **Quality gate (before writing):** Ask: does this post have a genuine insight, a unique angle, or real product knowledge that no competitor blog covers? If the answer is no, mark it `[!] BLOCKED — no unique value` and move on. Do not pad thin topics into full posts.
4. **During work:** Follow the task instructions exactly. Match the brand voice guidelines below.
5. **Quality gate (after writing):** Re-read the draft. If any section is filler, vague reassurance, or restates what every other parenting blog says without adding anything, cut it or rewrite it with specific detail. A shorter post with real substance beats a longer post with padding.
6. **After completing:** Mark the task `[x] DONE`, fill in the completion date, and append a log entry under `## Execution Log`.
7. **If blocked:** Mark the task `[!] BLOCKED`, note the reason in the log, and move to the next task.
8. **Never modify:** Do not edit the `## Execution Log` section except to append new entries at the bottom.

---

## Brand Voice Guidelines

| Attribute | Description |
|-----------|-------------|
| Tone | Warm, direct, non-judgmental. Written by a tired mom who also happens to be an engineer. |
| Reading level | Grade 8. No jargon unless defined. |
| Perspective | Always validate the parent's exhaustion first, then offer practical help. |
| Three ways thread | Every post acknowledges that parents track with paper, apps, or a physical device. Be honest about all three. Nubo is the third option the reader may not know about yet. See each post's `Three ways angle` for dosage. |
| Nubo mentions | Include 1-2 natural product mentions per post. Never promotional. Always in context of solving a real problem. Nubo appears as the "third way" reveal, not the only way. When mentioning the app, highlight a specific feature advantage (not generic praise). When the scenario fits, mention the Alexa skill as a bonus input surface. |
| CTA style | Soft, at the end. E.g. "If you want to remove one more thing from your mental load at 3am, Nubo was built exactly for this." |
| Avoid | Scare tactics, guilt, prescriptive "you must" language, excessive hedging, dismissing paper or app methods |
| Headings | H2 for main sections, H3 for sub-sections. All sentence case. |
| Target length | See **Post sizing tiers** below. Not every post needs 1,500 words. |

---

## Post Sizing Tiers

Not every post needs to be big. Some topics have a sharp, single insight that gets diluted by padding. Shorter posts can rank just as well when they answer the query faster and more completely than competitors. Each post is assigned a tier:

| Tier | Word range | When to use | Three-ways cap |
|------|-----------|-------------|----------------|
| **Full** | 1,200-2,500 | Reference tables, hub posts (high inbound links), high-anxiety topics needing reassurance depth, decision-stage comparisons | Light / Medium / Heavy per post |
| **Medium** | 900-1,100 | Genuine depth but a simpler core insight. The value is a table, template, or single framework, not long prose. | Light or Medium |
| **Mini** | 500-800 | Single-insight posts. The answer is a chart, a screenshot walkthrough, or a 5-paragraph explanation. Readers came for one thing. Respect their time. | Light only (one sentence max) |

### Tier assignments

| Tier | Posts |
|------|-------|
| **Full** | 001, 002, 003, 004, 005, 006, 008, 009, 011, 012, 013, 015, 016, 020, 022, 026, 027 |
| **Medium** | 007, 010, 018 |
| **Mini** | 014, 017, 019, 021, 023, 024, 025 |

### Publishing cadence note

Mini posts are low effort. Interleave them between full posts to maintain a steady publishing rhythm. Do not save all minis for Phase 4. POST-017 (diaper output) is a high-volume query and pure reference piece; move it to early Phase 2 publishing priority regardless of its Phase 3 label.

---

## Reusable Image Assets

Create these once and reuse across multiple posts:

| Asset | Description | Used in |
|-------|-------------|---------|
| **Nubo device product photo** | Clean product shot of the device | POST-006, 008, 009, 016, 020, 027 |
| **Nubo ecosystem diagram** | Device + App + Alexa feeding into one data layer | POST-003, 009, 020, 027 |
| **Live Activities lock screen** | Sleep/nursing timer on lock screen with L/R switch | POST-007, 008, 019, 027 |
| **Midnight Ember screenshot** | Full app in night mode, amber/red palette | POST-001, 007, 008, 021 |
| **Shared caregiver timeline** | App timeline showing events from different caregivers | POST-006, 010, 014 |
| **Smart Averages daily view** | Feeding summary with accurate daily totals | POST-002, 013, 023 |

---

## Nubo App Differentiators — Feature Advantages Over Competitors

The Nubo App is a full-featured baby tracker on its own, not merely a device companion. When competitor apps come up (Huckleberry, BabyConnect, Talli), these features give the Nubo App a genuine edge. Reference them in posts where the context is natural.

### Feature reference table

| Feature | What it does | Why it matters (parent angle) | Best weave-in posts |
|---------|-------------|------------------------------|---------------------|
| **Midnight Ember** | Night mode that constrains blue light to amber/red wavelengths (620-700nm), true black backgrounds, 35% max luminance. Activates on schedule with crossfade. | Other "dark modes" use white text that still suppresses melatonin. Midnight Ember preserves dark adaptation so you can log a 2am feed and actually fall back asleep. | POST-001, POST-007, POST-008, POST-019, POST-021 |
| **Smart Averages** | Detects under-logged days (below 80% of peak) and excludes them from averages. Handles combined formula + pumped volumes correctly. | Naive averages are always low because of incomplete days. Smart Averages give you the real number for the pediatrician. | POST-002, POST-013, POST-015, POST-023 |
| **Fenton preterm charts** | Fenton 2013 growth charts (22.5-50 weeks PMA) with LMS z-score calculation and automatic corrected-age adjustment. Seamless transition to WHO at 50 weeks. | Preemie parents see falsely alarming percentiles on standard charts. Fenton charts show the real picture. | POST-013, POST-022 |
| **Phone Hand mode** | Quick-action buttons flip to match your dominant hand. Right-hand default, left-hand toggle. | You're holding a baby in one arm. The tap target should be where your thumb already is. | POST-004 (phone Hand), POST-008, POST-024 |
| **Vaccine tracker** | 88 WHO standard vaccines + custom entries. Timeline history, per-vaccine notes, caregiver sync. | No more losing the paper immunization card. Searchable, shareable, always with you. | POST-013, POST-025 |
| **Live Activities** | Sleep and nursing timers on the lock screen and Dynamic Island. One-tap side switch (L/R) for nursing. Stop button without unlocking. | You start a sleep timer and walk away. The elapsed time is always visible without opening the app. | POST-007, POST-008, POST-019, POST-027 |
| **Auto-Reminders** | Rule-based reminders that reschedule from the last event. Auto-cancel on early events. Quiet hours. | "Remind me 3 hours after the last bottle" works even when the schedule shifts. | POST-002, POST-012, POST-027 |
| **Alexa voice logging** | Natural language: "Alexa, tell Newborn Tracker that Emma had 4 ounces 20 minutes ago." Relative and absolute times. | Both hands occupied, phone across the room. Voice is the only option. | POST-005, POST-006, POST-010, POST-014, POST-027 |
| **Privacy architecture** | Local-first SQLite, E2E encrypted caregiver sync (AES/CBC per-child key), encrypted iCloud backup, server never reads event data. | Your baby's health data isn't training someone else's AI. | POST-011, POST-020, POST-026 |
| **CSV export** | Full event history exportable as CSV. | Data-driven parents who want a spreadsheet or need to share with a specialist. | POST-013, POST-023 |
| **CDC milestones** | 4 developmental categories across 12 age groups. Radial progress rings. Evidence-based. | Track development without relying on Instagram milestone posts. | POST-013, bonus post |
| **Color-coded profiles** | 11 system colors per child. Entire UI (headers, buttons, charts) shifts on child switch. | Multi-child families instantly know whose timeline they're viewing. | bonus post |

### How to weave app features into posts

- **Never list features.** Always tie a feature to a specific parenting problem in the post's context.
- **One feature per mention** in most posts. Feature deep-dives (Phase 4) can cover one feature end-to-end.
- **Competitor comparison is implicit.** Say what Nubo does. Don't say "unlike Huckleberry, Nubo does X." Let the reader connect the dots.
- **The app stands on its own.** Even without the device, the Nubo App is a competitive tracker. Posts should make this clear when the context is right (especially POST-020 and feature deep-dive posts).

---

## SEO Rules for Every Post

- **Title tag:** Include the primary keyword. Keep under 60 characters.
- **Meta description:** 150–160 characters. Include keyword. End with a mild CTA.
- **First paragraph:** Use the primary keyword in the first 100 words.
- **Headers:** Use H2/H3s that contain secondary keywords naturally.
- **Internal links:** Link to at least 1 other Nubo post once the blog has 2+ posts.
- **Image alt text:** Write descriptive alt text for every image placeholder.
- **Schema markup:** Add FAQ schema if the post includes a FAQ section.
- **Evergreen:** Avoid date references like "in 2024" — use "in the early weeks" or "in your baby's first months" instead.
- **No published dates:** Do not display a published date or updated date on blog posts. Dates make evergreen content look stale and hurt click-through rates on older posts.
- **Academic citations:** Where the post makes a factual claim (sleep totals, feeding frequencies, developmental milestones, blue light science, growth chart methodology), cite authoritative academic or institutional sources. This builds E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) and differentiates from competitor blogs that assert without evidence. See the **Academic Citation Guide** below for formatting and per-post reference suggestions.

---

## Academic Citation Guide

### Important: verify every citation
Every specific paper, author name, journal, and year listed below has been verified against PubMed as of March 2026. When writing posts, **always verify cited references still resolve** before publishing. Never cite a paper you haven't confirmed exists. Institutional sources (AAP, WHO, CDC) should be linked to their current official pages.

### Formatting rules
- Cite inline as a natural parenthetical or a linked phrase: "Newborns need 14-17 hours of total sleep ([National Sleep Foundation, 2015](URL))." Do not use footnote-style numbering.
- Prefer institutional and peer-reviewed sources: AAP, WHO, CDC, Cochrane reviews, published pediatric journals (Pediatrics, JAMA Pediatrics, Sleep Medicine Reviews, Journal of Human Lactation).
- 1-3 citations per post is the sweet spot. More feels academic; fewer feels unsupported. Mini posts: 1. Full posts: 2-3.
- Link directly to the source (DOI, PubMed, or institutional page). Do not link to a secondary summary unless the primary is paywalled.
- Keep citation language accessible. "According to a study in Pediatrics" not "Smith et al. (2019) demonstrated in a randomized controlled trial that..."

### Per-post reference suggestions (all verified)

| Post | Topic area | Suggested references |
|------|-----------|---------------------|
| **POST-001** Wake windows | Age-appropriate wake windows, sleep pressure | Mindell JA et al., "Development of infant and toddler sleep patterns: real-world data from a mobile application" (J Sleep Res, 2016; PMID 27252030). National Sleep Foundation age-based sleep duration recommendations (2015). |
| **POST-002** Feeding schedule | Feeding frequency, hunger cues, intake volumes | AAP "Infant Food and Feeding" policy guidelines. WHO "Infant and Young Child Feeding" fact sheet. Kent JC et al., "Volume and frequency of breastfeedings and fat content of breast milk throughout the day" (Pediatrics, 2006; PMID 16510619). |
| **POST-003** Why track | Benefits of structured infant monitoring | AAP guidance on well-child visit preparedness. *(No verified paper specifically on infant tracking benefits. Writer should research and verify any specific citation before use.)* |
| **POST-004** Sleep regressions | Sleep consolidation, developmental leaps | Henderson JMT et al., "Sleeping through the night: the consolidation of self-regulated sleep across the first year" (Pediatrics, 2010; PMID 20974775). Galland BC et al., "Normal sleep patterns in infants and children: a systematic review" (Sleep Medicine Reviews, 2012; PMID 21784676). Mindell JA & Owens JA, "A Clinical Guide to Pediatric Sleep" (Lippincott Williams & Wilkins, 3rd ed., 2015). |
| **POST-005** Cluster feeding | Cluster feeding patterns, milk supply regulation | Kent JC et al., "Volume and frequency of breastfeedings and fat content of breast milk throughout the day" (Pediatrics, 2006; PMID 16510619). Academy of Breastfeeding Medicine clinical protocols. |
| **POST-007** Sleep hours | Total sleep norms by age | Hirshkowitz M et al., "National Sleep Foundation's sleep time duration recommendations" (Sleep Health, 2015; PMID 29073412). Paruthi S et al., "Recommended amount of sleep for pediatric populations: a consensus statement of the AASM" (J Clin Sleep Med, 2016; PMID 27250809). |
| **POST-011** Baby app privacy | Health data privacy, COPPA | FTC COPPA guidelines. Huckvale K et al., "Unaddressed privacy risks in accredited health and wellness apps" (BMC Medicine, 2015; PMID 26404673). Grundy Q et al., "Data sharing practices of medicines related apps" (BMJ, 2019; PMID 30894349). |
| **POST-012** Eat play sleep | Circadian rhythm development, feed-wake-sleep patterns | Rivkees SA, "Developing circadian rhythmicity in infants" (Pediatrics, 2003; PMID 12897290). |
| **POST-015** Is baby eating enough | Adequacy indicators, weight gain, diaper output | AAP clinical guidance on breastfed infant weight gain. WHO Multicentre Growth Reference Study Group (2006). *(Writer should research and verify any specific newborn weight-loss studies before citing.)* |
| **POST-017** Diaper output | Normal diaper counts, stool patterns | Fontana M et al., "Bowel frequency in healthy children" (Acta Paediatrica Scandinavica, 1989; PMID 2688353). AAP HealthyChildren.org diaper output guidelines. |
| **POST-019** Contact napping | Safe sleep, biological basis of contact sleep | Ball HL, "Breastfeeding, bed-sharing, and infant sleep" (Birth, 2003; PMID 12911801). Moon RY et al., AAP Task Force on SIDS, "Sleep-Related Infant Deaths: Updated 2022 Recommendations" (Pediatrics, 2022; PMID 35726558). |
| **POST-021** Midnight Ember | Blue light and melatonin suppression | Shechter A et al., "Blocking nocturnal blue light for insomnia: A randomized controlled trial" (J Psychiatr Res, 2018; PMID 29101797). Burkhart K & Phelps JR, "Amber lenses to block blue light and improve sleep: a randomized trial" (Chronobiol Int, 2009; PMID 20030543). Lockley SW et al., "Short-wavelength sensitivity for the direct effects of light on alertness, vigilance, and the waking electroencephalogram in humans" (Sleep, 2006; PMID 16494083). |
| **POST-022** Fenton charts | Preemie growth methodology | Fenton TR & Kim JH, "A systematic review and meta-analysis to revise the Fenton growth chart for preterm infants" (BMC Pediatrics, 2013; PMID 23601190). WHO Multicentre Growth Reference Study Group, "WHO Child Growth Standards" (2006). |
| **POST-025** Vaccine tracker | Immunization schedule complexity | CDC "Recommended Child and Adolescent Immunization Schedule." WHO vaccine position papers. |
| **POST-026** Privacy architecture | Health data sensitivity, encryption standards | HIPAA Security Rule (45 CFR 164) as a benchmark. Huckvale K et al. (BMC Medicine, 2015; PMID 26404673) for health app privacy context. *(Writer should verify any specific NIST or OWASP references before citing.)* |

---

## Content Pillars

| Pillar | Slug | Description |
|--------|------|-------------|
| Sleep | `/blog/sleep/` | Sleep science, schedules, regressions, wake windows |
| Feeding | `/blog/feeding/` | Feeding schedules, breastfeeding, formula, hunger cues |
| Tracking | `/blog/tracking/` | Why tracking matters, physical vs app, data literacy |
| Caregiver | `/blog/caregiver/` | Nanny coordination, partner sync, grandparents |
| Privacy | `/blog/privacy/` | Baby data privacy, what apps collect, Nubo's model |
| Product | `/blog/product/` | Nubo feature deep-dives, UX design philosophy, how-it-works |

---

## Internal Cross-Linking Map

Every post should link to at least 2 other posts once the blog has 3+ published. This map identifies every natural linking opportunity. When writing a post, use the **Outbound links** list to embed contextual links. Anchor text should feel editorial, never "click here."

### Hub posts (linked FROM many others)

These posts are referenced most often and should be published early in each phase:

| Hub post | Role | Inbound link count |
|----------|------|--------------------|
| **POST-003** · Why track | The foundational "why" that every other post leans on | 17 (linked from nearly all) |
| **POST-027** · Invisible tracker | The definitive ecosystem post; other posts link here for "how it all works" | 11 |
| **POST-002** · Feeding schedule | Reference for expected feeding frequencies | 8 |
| **POST-009** · Physical vs app | The definitive method comparison | 8 |
| **POST-013** · Pediatrician visit | The "what to do with the data" payoff post | 8 (now includes Phase 4 links) |
| **POST-021** · Midnight Ember | Night mode deep-dive; linked from every 3am scenario post | 6 |

### Cross-linking by post

Each post lists its outbound links (posts it should link TO) and the context where the link fits naturally.

---

**POST-001 · Wake windows** (Sleep)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "If you're not sure whether tracking is worth the effort, [here's what you actually learn from it]." |
| POST-004 | "Wake windows shift during sleep regressions. [Here's what to expect at every age.]" |
| POST-007 | "Wake windows and total sleep hours are two sides of the same coin. [See the full sleep table.]" |
| POST-012 | "Wake windows define the 'play' portion of eat-play-sleep. [How to build that routine.]" |

---

**POST-002 · Feeding schedule** (Feeding)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "Tracking feeds helps you answer the pediatrician's questions. [Why tracking matters.]" |
| POST-005 | "Cluster feeding throws the schedule out the window. [What cluster feeding actually looks like.]" |
| POST-008 | "If logging feeds feels hard at 2am, [here are three ways to track breastfeeding] without your phone." |
| POST-013 | "Your pediatrician will ask about feeds at every visit. [What to bring and what data to have ready.]" |
| POST-015 | "Worried your baby isn't eating enough? [Here's how to tell.]" |

---

**POST-003 · Why track** (Tracking) — HUB
| Link to | Anchor context |
|---------|----------------|
| POST-008 | "For a hands-on look at how the three methods compare for breastfeeding, [see our nursing-specific guide]." |
| POST-009 | "Want a deeper comparison of physical trackers vs. apps? [Read the full breakdown.]" |
| POST-011 | "Privacy matters when you're logging your baby's health data. [What baby apps actually collect.]" |
| POST-013 | "The real payoff of tracking is the pediatrician visit. [Here's what to bring.]" |
| POST-020 | "Ready to pick a specific tool? [Compare Nubo, Huckleberry, Talli, and BabyConnect.]" |

---

**POST-004 · Sleep regressions** (Sleep)
| Link to | Anchor context |
|---------|----------------|
| POST-001 | "During a regression, wake windows often need to shrink. [See the full wake window chart.]" |
| POST-003 | "Tracking data is what lets you tell the pediatrician 'this started Tuesday.' [Why tracking matters.]" |
| POST-007 | "If total daily sleep drops suddenly, you're probably in a regression. [How much sleep is normal.]" |
| POST-012 | "Regressions often break the eat-play-sleep rhythm. [How to rebuild the routine.]" |
| POST-019 | "Contact napping tends to increase during regressions. [Everything you need to know about contact naps.]" |

---

**POST-005 · Cluster feeding** (Feeding)
| Link to | Anchor context |
|---------|----------------|
| POST-002 | "Outside of cluster phases, most feeding follows a predictable pattern. [See the full schedule.]" |
| POST-003 | "Tracking helps you distinguish a cluster from a real supply problem. [Why data matters.]" |
| POST-008 | "Logging during a cluster feed is hard when your hands are full. [Three ways to track nursing sessions.]" |
| POST-015 | "The #1 fear during cluster feeding is 'is my baby getting enough?' [How to tell.]" |

---

**POST-006 · Nanny tracking** (Caregiver)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "Before setting up a system with your nanny, it helps to understand [why tracking matters in the first place]." |
| POST-009 | "For a full comparison of paper, apps, and devices, [see our tracking method guide]." |
| POST-010 | "The communication challenges with a nanny mirror what happens [between co-parents]." |
| POST-014 | "If grandparents also watch the baby, the same friction applies. [How to set up grandparent-friendly tracking.]" |
| POST-018 | "Nanny tracking becomes critical when you return to work. [The complete handoff guide.]" |

---

**POST-007 · Newborn sleep hours** (Sleep)
| Link to | Anchor context |
|---------|----------------|
| POST-001 | "If your baby is awake longer than expected, the problem might be the wake window. [See the chart.]" |
| POST-003 | "Tracking sleep totals is easier than doing the math in your head. [Three ways to do it.]" |
| POST-004 | "A sudden drop in total sleep often means a regression has started. [The complete regression guide.]" |
| POST-012 | "The eat-play-sleep cycle helps you build structure around sleep. [How to start.]" |
| POST-019 | "Contact naps count toward daily totals. [Is contact napping right for your family?]" |

---

**POST-008 · Track breastfeeding** (Feeding)
| Link to | Anchor context |
|---------|----------------|
| POST-002 | "Knowing how many feeds you're logging helps you match [the expected feeding schedule]." |
| POST-003 | "Not sure if tracking is worth the trouble? [Here's the case for it.]" |
| POST-005 | "During cluster feeds, logging feels impossible. [What cluster feeding is and when it ends.]" |
| POST-006 | "If someone else feeds the baby, the tracking system needs to work for them too. [How to share with a nanny.]" |
| POST-009 | "For a broader comparison beyond breastfeeding, [see physical tracker vs. app]." |
| POST-020 | "Ready to pick a product? [Compare Nubo, Huckleberry, Talli, and BabyConnect.]" |

---

**POST-009 · Physical tracker vs app** (Tracking)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "Start with the basics: [why tracking matters at all]." |
| POST-006 | "For multi-caregiver households, the method question matters more. [How to set up nanny tracking.]" |
| POST-008 | "See how the three methods compare in a specific scenario: [breastfeeding at 2am]." |
| POST-011 | "Privacy is a real axis of comparison. [What baby tracking apps actually collect.]" |
| POST-014 | "For grandparents, the simplicity gap between methods gets even wider. [Grandparent-friendly tracking.]" |
| POST-020 | "For a product-by-product comparison, [see our full tracker breakdown]." |

---

**POST-010 · Co-parenting tracking** (Caregiver)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "The foundation of co-parenting with data is deciding [why and what to track]." |
| POST-006 | "When a nanny enters the picture, the same sync challenges multiply. [Nanny tracking setup.]" |
| POST-014 | "Grandparents caring for the baby need the same visibility. [How to keep them in the loop.]" |
| POST-018 | "When one parent returns to work, real-time sync goes from nice to essential. [The handoff guide.]" |

---

**POST-011 · Baby app privacy** (Privacy)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "Privacy is one factor in the tracking decision. [Start with the full picture.]" |
| POST-009 | "See how paper, apps, and devices compare on privacy and other factors. [The full comparison.]" |
| POST-020 | "For specific privacy policies of Nubo, Huckleberry, and others, [see the product comparison]." |

---

**POST-012 · Eat play sleep** (Sleep)
| Link to | Anchor context |
|---------|----------------|
| POST-001 | "The 'play' phase is defined by your baby's wake window. [See the chart by age.]" |
| POST-002 | "The 'eat' phase follows [expected feeding frequencies]." |
| POST-003 | "Logging all three events gives you a data trail. [Why that matters.]" |
| POST-004 | "Regressions often break the cycle. [How to recognize and survive each one.]" |
| POST-007 | "If your baby's total sleep seems off, the routine may need adjusting. [How much sleep is normal.]" |

---

**POST-013 · Pediatrician visit** (Tracking)
| Link to | Anchor context |
|---------|----------------|
| POST-002 | "The doctor will ask about feeding frequency. [See the expected schedule.]" |
| POST-003 | "Walking in with data instead of guesses changes the whole visit. [Why tracking pays off.]" |
| POST-007 | "They'll ask about sleep totals. [Here's what's normal.]" |
| POST-015 | "The 'is my baby eating enough?' question often comes up at visits. [How to answer it before you arrive.]" |
| POST-017 | "Diaper counts are one of the first things the pediatrician checks. [Normal diaper output by age.]" |

---

**POST-014 · Grandparent tracking** (Caregiver)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "Before handing Grandma a tracker, it helps to understand [what you're tracking and why]." |
| POST-006 | "The nanny version of this problem looks similar. [Nanny tracking setup.]" |
| POST-009 | "For a full breakdown of methods, [see physical tracker vs. app]." |
| POST-010 | "If both parents and grandparents are sharing care, [co-parenting tracking] covers the partner side." |
| POST-016 | "Nubo makes a great grandparent gift. [See more practical gift ideas.]" |

---

**POST-015 · Is newborn eating enough** (Feeding)
| Link to | Anchor context |
|---------|----------------|
| POST-002 | "Start with expected feeding frequencies. [The full schedule.]" |
| POST-005 | "Cluster feeding can feel like the baby isn't satisfied, but it's usually normal. [What cluster feeding is.]" |
| POST-013 | "If you're unsure, the pediatrician visit is the place to get answers. [What to bring.]" |
| POST-017 | "Wet diaper count is one of the four key indicators. [Full diaper output guide.]" |
| POST-003 | "Tracking feeds and diapers takes the guesswork out of this question. [Three ways to do it.]" |

---

**POST-016 · Baby shower gifts** (Gift/Conversion)
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "A baby tracker is the kind of gift that earns its keep. [Why new parents track.]" |
| POST-009 | "Wondering why a physical tracker instead of an app? [Here's the difference.]" |
| POST-014 | "Nubo also makes a great gift for grandparents. [Grandparent-friendly tracking.]" |

---

**POST-017 · Diaper output** (Tracking)
| Link to | Anchor context |
|---------|----------------|
| POST-002 | "Diaper output is directly tied to intake. [See the feeding schedule.]" |
| POST-003 | "Tracking diapers sounds tedious, but it's one of the simplest things to log. [Why it's worth doing.]" |
| POST-013 | "Your pediatrician will ask about diaper counts. [How to walk in prepared.]" |
| POST-015 | "Wet diapers are one of the top indicators that your baby is eating enough. [The full reassurance guide.]" |

---

**POST-018 · Return to work handoff** (Caregiver)
| Link to | Anchor context |
|---------|----------------|
| POST-002 | "Include expected feeding times in the handoff sheet. [Feeding schedule by age.]" |
| POST-003 | "If your caregiver is new to tracking, [start with the basics]." |
| POST-006 | "Setting up tracking with a nanny is the first step. [The full nanny guide.]" |
| POST-010 | "The partner dynamic also shifts when one parent goes back to work. [Co-parenting tracking.]" |
| POST-014 | "If grandparents are stepping in, [set them up for success]." |

---

**POST-019 · Contact napping** (Sleep)
| Link to | Anchor context |
|---------|----------------|
| POST-001 | "Contact naps happen within (or because of) wake windows. [See the timing chart.]" |
| POST-003 | "Even during contact naps, you want the data. [Three ways to track.]" |
| POST-004 | "Contact napping often increases during regressions. [The full regression guide.]" |
| POST-007 | "Contact naps count toward total daily sleep. [How many hours is normal.]" |
| POST-012 | "In eat-play-sleep, the contact nap is the 'sleep' phase. [How the routine works.]" |

---

**POST-020 · Baby tracker comparison** (Tracking) — CULMINATION
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "Not sure you even want to track? [Start here.]" |
| POST-008 | "See how the three methods compare for breastfeeding specifically. [Nursing-session tracking.]" |
| POST-009 | "For a category-level comparison (not product-specific), [physical tracker vs. app]." |
| POST-011 | "Privacy is a real differentiator. [What baby apps collect.]" |
| POST-006 | "If caregiver sync is your top priority, [see the nanny tracking guide]." |
| POST-021 | "Nubo's Midnight Ember night mode [constrains blue light to amber wavelengths]." |
| POST-023 | "Smart Averages [exclude under-logged days] so your daily totals are real." |
| POST-026 | "For a deep-dive on how Nubo handles your data, [see the privacy architecture post]." |
| POST-027 | "Want to see how the whole ecosystem works together? [The invisible tracker.]" |

---

**POST-021 · Midnight Ember night mode** (Product)
| Link to | Anchor context |
|---------|----------------|
| POST-001 | "Wake windows matter most at 3am. [See the full chart.]" |
| POST-007 | "Checking total sleep hours shouldn't cost you your own sleep. [How much should a newborn sleep.]" |
| POST-008 | "Midnight Ember was designed for the 2am nursing session. [Three ways to track breastfeeding.]" |
| POST-019 | "Dark-room contact naps are where every photon matters. [The contact napping guide.]" |
| POST-027 | "Midnight Ember is one piece of the ecosystem. [See how all the pieces fit together.]" |

---

**POST-022 · Fenton preemie growth charts** (Product)
| Link to | Anchor context |
|---------|----------------|
| POST-013 | "Growth chart data is most useful at the pediatrician visit. [What to bring and how to prepare.]" |
| POST-023 | "Accurate averages matter even more for preemies. [How Smart Averages work.]" |
| POST-025 | "Preemie immunization schedules are often catch-up. [The vaccine tracker.]" |
| POST-026 | "Growth measurements are sensitive health data. [How Nubo protects it.]" |
| POST-027 | "Growth charts are entered in the app. [See the full ecosystem.]" |

---

**POST-023 · Smart Averages** (Product)
| Link to | Anchor context |
|---------|----------------|
| POST-002 | "The pediatrician asks 'how much is she eating per day?' [Expected feeding schedule by age.]" |
| POST-013 | "Smart Averages give you the real number for the waiting room. [What to bring to the visit.]" |
| POST-015 | "When the 'is she eating enough?' anxiety hits, accurate data is the antidote. [How to tell.]" |
| POST-022 | "For preemies, accurate averages matter even more. [Fenton charts for corrected-age tracking.]" |
| POST-027 | "Smart Averages are the safety net for incomplete data. [How the whole ecosystem reduces gaps.]" |

---

**POST-024 · Phone Hand mode** (Product)
| Link to | Anchor context |
|---------|----------------|
| POST-008 | "One-handed breastfeeding logging is the core use case. [Three ways to track nursing.]" |
| POST-019 | "Contact napping with one free hand. [The scenario where Phone Hand mode matters most.]" |
| POST-021 | "Phone Hand mode at 3am pairs with Midnight Ember. [Why your night mode matters.]" |
| POST-027 | "Phone Hand mode solves the app-interaction constraint. The device and Alexa solve the others. [The full ecosystem.]" |

---

**POST-025 · Vaccine tracker** (Product)
| Link to | Anchor context |
|---------|----------------|
| POST-013 | "An immunization record is one of the most useful things to have at a well-child visit. [The full prep guide.]" |
| POST-022 | "Preemie catch-up schedules add complexity. [Fenton charts for corrected-age tracking.]" |
| POST-026 | "Vaccine records are health data. [How Nubo keeps it encrypted.]" |
| POST-027 | "The vaccine tracker is one part of the app. [See how the ecosystem works.]" |

---

**POST-026 · Privacy architecture** (Privacy)
| Link to | Anchor context |
|---------|----------------|
| POST-011 | "Start with the broader question: [what do baby tracking apps actually collect?]" |
| POST-020 | "Privacy is a real axis of comparison between trackers. [The product comparison.]" |
| POST-022 | "Growth measurements are among the most sensitive data. [Fenton charts for preemies.]" |
| POST-025 | "Immunization records sync to all caregivers via encrypted pipeline. [The vaccine tracker.]" |
| POST-027 | "The device uses Bluetooth only. The app stores locally. The server relays encrypted blobs. [The full ecosystem.]" |

---

**POST-027 · The invisible tracker (ecosystem)** (Product) — PRODUCT HUB
| Link to | Anchor context |
|---------|----------------|
| POST-003 | "The foundation: [why tracking matters at all]." |
| POST-006 | "Multi-caregiver sync in practice. [Setting up tracking with your nanny.]" |
| POST-009 | "For the category-level comparison, [physical tracker vs. app]." |
| POST-021 | "Midnight Ember: the night-mode deep-dive. [How it preserves dark adaptation.]" |
| POST-023 | "Smart Averages: the safety net for incomplete days. [How the algorithm works.]" |
| POST-024 | "Phone Hand mode: one-handed app interaction. [The UX design story.]" |
| POST-025 | "88 vaccines in the tracker. [The immunization record deep-dive.]" |
| POST-026 | "Privacy architecture: E2E encryption explained. [The full technical story.]" |

---

### Link density summary

| Post | Outbound | Inbound | Role |
|------|----------|---------|------|
| POST-001 | 4 | 6 | Sleep anchor |
| POST-002 | 5 | 9 | Feeding anchor |
| POST-003 | 5 | **17** | **Primary hub** |
| POST-004 | 5 | 4 | Sleep deep-dive |
| POST-005 | 4 | 3 | Feeding deep-dive |
| POST-006 | 5 | 7 | Caregiver anchor |
| POST-007 | 5 | 6 | Sleep reference |
| POST-008 | 6 | 6 | Feeding + tracking bridge |
| POST-009 | 6 | **8** | **Comparison hub** |
| POST-010 | 4 | 4 | Caregiver mid-tier |
| POST-011 | 3 | 5 | Privacy standalone |
| POST-012 | 5 | 5 | Sleep routine |
| POST-013 | 5 | **8** | **Data payoff hub** |
| POST-014 | 5 | 5 | Caregiver + gift |
| POST-015 | 5 | 5 | Feeding anxiety relief |
| POST-016 | 3 | 2 | Gift/conversion |
| POST-017 | 4 | 3 | Tracking + clinical |
| POST-018 | 5 | 3 | Caregiver transition |
| POST-019 | 5 | 5 | Sleep scenario |
| POST-020 | 9 | 2 | Culmination comparison |
| POST-021 | 5 | 6 | **Night mode hub** |
| POST-022 | 5 | 4 | Preemie growth |
| POST-023 | 5 | 5 | Smart Averages |
| POST-024 | 4 | 3 | UX deep-dive |
| POST-025 | 4 | 4 | Vaccine tracker |
| POST-026 | 5 | 4 | Privacy deep-dive |
| POST-027 | 8 | **11** | **Product hub** |

### Cross-pillar bridges

These links are the most valuable for SEO because they connect different content pillars, preventing siloed clusters:

| From pillar | To pillar | Link | Why it works |
|-------------|-----------|------|-------------|
| Sleep → Feeding | POST-001 → POST-012 → POST-002 | Wake windows define when to feed | Natural parent journey |
| Feeding → Tracking | POST-005 → POST-008 | Cluster feeding makes tracking hard | Problem → solution |
| Feeding → Tracking | POST-015 → POST-017 | "Eating enough" leads to diaper counts | Clinical connection |
| Caregiver → Tracking | POST-006 → POST-009 | Nanny needs inform method choice | Use case → comparison |
| Caregiver → Feeding | POST-018 → POST-002 | Return-to-work handoff includes feeding schedule | Practical overlap |
| Sleep → Caregiver | POST-019 → POST-003 | Contact napping logging needs method choice | Scenario → framework |
| Privacy → Tracking | POST-011 → POST-009 | Privacy as comparison axis | Trust building |
| Gift → Caregiver | POST-016 → POST-014 | Shower gift for grandparents | Purchase funnel |
| Product → Sleep | POST-021 → POST-001, POST-019 | Midnight Ember ties to 3am wake windows and contact naps | Feature → scenario |
| Product → Feeding | POST-023 → POST-002, POST-015 | Smart Averages tie to feeding schedule and adequacy | Feature → parent anxiety |
| Product → Tracking | POST-027 → POST-003, POST-009 | Ecosystem post ties to "why track" and method comparison | Product education → SEO foundation |
| Product → Privacy | POST-026 → POST-011 | Privacy architecture deep-dive ties to general privacy post | Technical credibility → trust |
| Product → Caregiver | POST-027 → POST-006 | Multi-caregiver sync ties to nanny tracking | Feature → use case |
| Product → Tracking | POST-022 → POST-013 | Fenton charts tie to pediatrician visit | Clinical feature → clinical scenario |
| Product → Product | POST-027 → POST-021..026 | Ecosystem hub links to all feature deep-dives | Internal product mesh |

### Implementation rules

1. **Publish POST-003 first or second.** It's the hub. Most posts need to link to it.
2. **Add links as posts go live.** When POST-005 publishes, go back and add the POST-005 link to POST-002 and POST-015 if they're already live.
3. **Anchor text must be descriptive.** Use the suggested anchor contexts above, not "click here" or "read more."
4. **Minimum 2, maximum 5 outbound links per post.** More than 5 feels spammy at 1,200-1,800 words.
5. **Reciprocal links are fine** but not required. If POST-001 links to POST-004, POST-004 does not need to link back unless the context is natural.
6. **Update this map** when a post publishes. Mark links as `[LIVE]` so you know which connections are active.

---

## Phase 1 — Foundation (Posts 1–8)
**Goal:** Capture high-volume, high-intent search traffic. Publish before moving to Phase 2.

---

### POST-001 · Newborn wake windows guide
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Sleep
**Tier:** Full (1,500-1,800 words)
**URL slug:** `/blog/sleep/newborn-wake-windows-by-age`
**Primary keyword:** `newborn wake windows`
**Secondary keywords:** `wake windows by age`, `newborn awake time`, `baby wake window chart`
**Search volume:** High
**Search intent:** Informational → purchase consideration

**Images:**
- Shareable wake window infographic (age vs. minutes of awake time)
- App screenshot: logged wake/sleep cycle with timestamps
- Reuse: Midnight Ember screenshot (3am scenario context)

**Instructions for Claude Code:**
1. Write a 1,500-1,800 word post following brand voice guidelines.
2. Open with a 2-3 sentence hook that validates the exhaustion of guessing when to put baby down.
3. Include a wake window chart showing minutes of awake time by week (weeks 1-16).
4. Cover: what wake windows are, why they matter, signs of overtiredness, how tracking helps you dial in timing.
5. Use "newborn wake windows" in the first 80 words, at least 2 H2s, and in the meta description.
6. Nubo mention: in the context of logging the exact moment baby wakes, without picking up your phone.
7. **Three ways angle (Light):** In the section on how tracking helps, drop a single sentence acknowledging the three methods: "Some parents scribble wake times on a notepad, some use a phone app, and some press a button on a physical tracker. The method matters less than catching that moment before the window closes." Then, when discussing the 3am scenario, note that a physical tracker lets you log the wake without reaching for your phone or a pen.
8. **App feature weave (Midnight Ember):** In the 3am scenario, mention that the Nubo App's Midnight Ember mode uses amber-red wavelengths instead of blue light, so checking the app doesn't reset your melatonin. One sentence, naturally placed. Link to POST-021 when live.
9. **Citations:** Reference National Sleep Foundation sleep duration recommendations and Mindell et al. (J Sleep Res, 2016; PMID 27252030) on infant sleep pattern development. See Academic Citation Guide.
10. Output format: full markdown with frontmatter (title, slug, metaDescription, pillar, primaryKeyword, wordCount).

**Output file:** `post-001-newborn-wake-windows.md`

---

### POST-002 · Newborn feeding schedule guide
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Feeding
**Tier:** Full (1,500-1,800 words)
**URL slug:** `/blog/feeding/newborn-feeding-schedule`
**Primary keyword:** `newborn feeding schedule`
**Secondary keywords:** `how often to feed newborn`, `newborn feeding chart`, `how much should newborn eat`
**Search volume:** High
**Search intent:** Informational → purchase consideration

**Images:**
- Feeding frequency chart infographic (breastfed vs. formula columns by age)
- Reuse: Smart Averages daily view screenshot
- Optional: hunger cue illustration (rooting, hand-to-mouth)

**Instructions for Claude Code:**
1. Write a 1,500-1,800 word post.
2. Open by acknowledging that feeding frequency questions are the #1 anxiety for new parents.
3. Include a feeding frequency table: birth-week 1, weeks 2-4, months 1-2, months 2-4. Separate columns for breastfed vs formula-fed.
4. Cover: hunger cue glossary (5-6 cues with descriptions), feeding duration expectations, what to track at pediatric visits.
5. Nubo mention: in the context of "the pediatrician always asks how many feeds in the last 24 hours. Nubo gives you that answer before they finish the sentence."
6. **Three ways angle (Medium):** In the "what to track at pediatric visits" section, add a paragraph comparing the three logging methods for feeding data. Paper tallies work but are easy to lose and hard to total at the end of the day. Apps give great summaries but require unlocking your phone mid-feed (awkward when baby is latched or you are holding a bottle). A physical tracker lets you tap once at the start of each feed and review the totals in the companion app later. Frame it as: all three work, the question is which one you will actually use at 2am.
7. **App feature weave (Smart Averages + Auto-Reminders):** When discussing how many feeds per day, note that naive averages are misleading if you miss logging a day. Nubo's Smart Averages detect under-logged days and exclude them, giving the real number. Also mention that Nubo's auto-reminders reschedule from the last feed, so "every 3 hours" stays accurate even when the schedule shifts. Link to POST-023 when live.
8. Include a short FAQ section (3 questions) at the end with FAQ schema markup.
9. **Citations:** Reference AAP infant feeding guidelines and WHO feeding fact sheet. Cite Kent et al. (Pediatrics, 2006; PMID 16510619) for breastfeeding volume/frequency data if relevant. See Academic Citation Guide.
10. Output format: full markdown with frontmatter.

**Output file:** `post-002-newborn-feeding-schedule.md`

---

### POST-003 · Why track baby sleep feeds diapers
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Tracking
**Tier:** Full (1,200-1,500 words)
**URL slug:** `/blog/tracking/why-track-baby-sleep-feeds-diapers`
**Primary keyword:** `should I track baby sleep and feeding`
**Secondary keywords:** `baby tracking benefits`, `newborn tracking tips`, `baby log first months`
**Search volume:** Medium
**Search intent:** Top-of-funnel awareness

**Images:**
- Three-methods comparison table as a designed graphic (Method / Speed / Insight / Caregiver sharing / 3am friendliness)
- Photo: all three methods side by side (notebook, phone with app, Nubo device)
- Reuse: Nubo ecosystem diagram

**Instructions for Claude Code:**
1. Write a 1,200-1,500 word post. This is a persuasion piece, make the case for tracking without being preachy.
2. Open by acknowledging the "isn't that obsessive?" objection head-on, then pivot to why data helps.
3. Sections: What you actually learn from tracking · The first 90 days matter most · Three ways to track (see below) · What to bring to the pediatrician · When you can stop.
4. Address the common fear: "I don't want another thing to manage."
5. Nubo mention: tracking doesn't have to mean a phone screen at 3am. The whole product exists to solve this tension.
6. **Three ways angle (Heavy, dedicated H2 section):** This is the anchor post for the three-ways narrative. Add a full H2 section titled "Three ways to track (and how to pick one)" between the persuasion content and the pediatrician section. Cover pen-and-paper (the hospital sends you home with a worksheet, it works until it doesn't), phone apps (powerful analytics but one more screen in a screen-heavy life), and physical trackers (one-tap logging that syncs to an app, best of both worlds). Include a mini comparison table: Method / Speed / Insight / Caregiver sharing / 3am friendliness. Be fair. End the section with: "Plenty of parents use more than one. The point is to find something you'll actually use when you're exhausted." This post will be internally linked from nearly every other post as the "why track" reference.
7. Tone: conversational, validating, not lecture-y.
8. **Citations:** Reference AAP guidance on well-child visit preparedness. Any specific academic papers on infant tracking benefits must be researched and verified before citing. See Academic Citation Guide.

**Output file:** `post-003-why-track-baby.md`

---

### POST-004 · Baby sleep regression complete guide
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Sleep
**Tier:** Full (2,000-2,500 words)
**URL slug:** `/blog/sleep/baby-sleep-regressions-every-age`
**Primary keyword:** `baby sleep regression`
**Secondary keywords:** `4 month sleep regression`, `8 month sleep regression`, `12 month sleep regression`, `18 month sleep regression`
**Search volume:** High
**Search intent:** Informational

**Images:**
- Regression timeline infographic (4mo / 8mo / 12mo / 18mo with causes, duration, signs)
- No app screenshots needed; pure educational content

**Instructions for Claude Code:**
1. Write a comprehensive 2,000-2,500 word definitive guide. This should be the most thorough resource on the page.
2. Cover each regression age: 4 months, 8 months, 12 months, 18 months, what causes it, how long it lasts, what to do.
3. Include a comparison table: Age | Cause | Duration | Key signs.
4. Include a section on how to tell regression from illness or teething.
5. Tracking angle: "If your baby's total daily sleep drops suddenly and you can't explain it, tracking data makes it easy to show the pediatrician exactly what changed and when."
6. Each regression section should have its own H2. No promotional language, this is a pure resource.
7. **Three ways angle (Light):** In the tracking angle paragraph, briefly acknowledge all three methods: "Whether you're jotting nap times on the fridge chart, logging them in an app, or tapping a physical tracker, having two weeks of sleep data is what lets you say 'this started Tuesday' instead of 'I think it's been a few days.'" The emphasis stays on data itself, not the tool. Link to POST-003 when it exists.
8. **Citations:** Reference Henderson et al. (Pediatrics, 2010; PMID 20974775) on sleep consolidation in the first year, Mindell & Owens "A Clinical Guide to Pediatric Sleep" (Lippincott, 3rd ed.), and Galland et al. (Sleep Medicine Reviews, 2012; PMID 21784676) on normal sleep patterns. Each regression section should note the developmental basis. See Academic Citation Guide.

**Output file:** `post-004-sleep-regressions.md`

---

### POST-005 · Cluster feeding guide
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Feeding
**Tier:** Full (1,300-1,600 words)
**URL slug:** `/blog/feeding/cluster-feeding-what-it-is`
**Primary keyword:** `cluster feeding`
**Secondary keywords:** `cluster feeding newborn`, `cluster feeding schedule`, `cluster feeding vs low supply`
**Search volume:** High
**Search intent:** Informational + reassurance

**Images:**
- Cluster feeding timeline graphic (showing a real evening pattern: feeds at 5pm, 5:40, 6:15, 6:50, 7:30)
- App screenshot: feeding log showing clustered entries in quick succession

**Instructions for Claude Code:**
1. Write a 1,300-1,600 word post. Lead with empathy, cluster feeding feels endless and scary.
2. Cover: definition, what causes it, when it peaks (days 2-4, 3-6 weeks, 3 months), how long each cluster phase lasts.
3. Critical section: how to tell cluster feeding from low milk supply (this is the #1 fear). Be clear and reassuring.
4. Include an age chart showing when cluster feeding is most common.
5. Nubo mention: "Tracking each nursing session during a cluster gives you something concrete to look at, and sometimes 'this has been going on for 2 hours' is more manageable when you can see the timeline."
6. **Three ways angle (Medium):** In the tracking section, paint the specific scenario: during a cluster feed, baby is latched, you are pinned to the couch. Scribbling on paper means finding a pen one-handed. Pulling out your phone means screen glare in a dark room and the temptation to doomscroll instead of resting. A physical tracker on the side table means one tap, eyes closed, done. Frame it as: in this specific moment, the method you choose matters because the easier it is, the more likely you are to log consistently through the cluster.
7. **App feature weave (Alexa voice logging):** In the "pinned to the couch" scenario, mention that Alexa lets you log hands-free: "Alexa, tell Newborn Tracker that she started nursing 5 minutes ago." Both hands occupied, phone across the room, voice is the only option. One sentence. Link to POST-027 when live.
8. End with a short reassurance paragraph, it does end.
9. **Citations:** Reference Kent et al. (Pediatrics, 2006; PMID 16510619) on breastfeeding frequency/volume patterns and Academy of Breastfeeding Medicine clinical protocols for cluster feeding norms. See Academic Citation Guide.

**Output file:** `post-005-cluster-feeding.md`

---

### POST-006 · Sharing baby tracking with your nanny
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Caregiver
**Tier:** Full (1,200-1,500 words)
**URL slug:** `/blog/caregiver/how-to-share-baby-tracking-with-nanny`
**Primary keyword:** `nanny baby tracking app`
**Secondary keywords:** `share baby tracking with caregiver`, `nanny communication baby log`, `baby tracking for nannies`
**Search volume:** Medium
**Search intent:** Informational + purchase

**Images:**
- Reuse: Shared caregiver timeline screenshot (events logged by different caregivers with names)
- QR code invitation flow (2-3 step screenshot sequence)
- Reuse: Nubo device product photo (lifestyle: device on kitchen counter next to a baby bottle)

**Instructions for Claude Code:**
1. Write a 1,200-1,500 word post. This targets parents who have or are about to hire a nanny.
2. Open with the specific failure mode: "You come home and ask 'how many times did she eat?' and the answer is a rough guess."
3. Sections: Why verbal handoffs fail · What information caregivers need at a glance · Three ways your nanny can log (see below) · How to pick the right method for your household.
4. Nubo mention is central here, this post is the clearest product fit in the collection. Keep it natural, not salesy.
5. Include a "what to log" checklist: last feed time, duration, which breast, last diaper, last nap start/end.
6. **Three ways angle (Heavy, structural):** Restructure the comparison around the three methods as experienced by the nanny, not the parent. Paper log on the counter: simple, but you come home to shorthand you can't decode, and the nanny forgets to write things down when she's soothing a screaming baby. Shared app: powerful, but requires the nanny to download it, create or share a login, and be comfortable navigating it (many nannies and older caregivers are not). Physical tracker: the nanny taps a button, the parent sees every event in the app in real time, no training required. Include a side-by-side: Method / Nanny effort / Parent visibility / Real-time sync / Learning curve. Be fair to all three. The post's thesis: the best tracking system for a multi-caregiver household is the one the caregiver will actually use without being reminded.
7. **App feature weave (Alexa + multi-caregiver sync):** Note that Nubo's Alexa skill gives nannies a fourth input surface: voice. No phone, no button, just "Alexa, tell Newborn Tracker she had 4 ounces." Also mention QR-code caregiver invitations (no account creation for the nanny). Link to POST-027 when live.
8. Tone: practical, slightly insider, written for organized parents who take their childcare communication seriously.

**Output file:** `post-006-nanny-baby-tracking.md`

---

### POST-007 · How many hours should a newborn sleep
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Sleep
**Tier:** Medium (900-1,100 words)
**URL slug:** `/blog/sleep/how-many-hours-should-newborn-sleep`
**Primary keyword:** `how many hours should a newborn sleep`
**Secondary keywords:** `newborn sleep total 24 hours`, `newborn sleep too much`, `is my newborn sleeping enough`
**Search volume:** High
**Search intent:** Informational + anxiety relief

**Images:**
- Sleep hours table as infographic (age / total daily / nighttime / nap count)
- Reuse: Live Activities sleep timer on lock screen screenshot

**Instructions for Claude Code:**
1. Write a 900-1,100 word post. Answer the question directly in the first paragraph.
2. Include an age-by-age sleep table: total daily sleep, nighttime sleep, nap count, typical nap length, from birth to 6 months.
3. Cover: AAP guidelines (2-3 sentences, not a full section), why newborns vary so much, day vs. night split.
4. Address "My baby seems to sleep all day" and "My baby barely sleeps" in one paragraph each, not full sections.
5. Nubo mention: "The app shows total sleep in the last 24 hours automatically. You don't have to do the mental math at 3am."
6. **Three ways angle (Light):** When discussing how to know if your baby is hitting the right totals, briefly note the challenge of adding it up: "If you keep a paper log, you are manually totaling nap lengths at the end of the day. Most apps do the math for you. A physical tracker like Nubo does too, since every tap syncs to the app where daily totals update automatically." One sentence, then move on. The focus stays on the sleep data, not the tool.
7. **App feature weave (Midnight Ember + Live Activities):** When discussing nighttime sleep logging, mention Live Activities (sleep timer visible on the lock screen without opening the app) and Midnight Ember (amber-only light when you do check). Two features, one sentence each, tied to the 3am context. Link to POST-021 when live.
8. Short FAQ at the end with 3 questions. Include FAQ schema.
9. **Citations:** Reference Hirshkowitz et al. (Sleep Health, 2015; PMID 29073412) for NSF recommendations and Paruthi et al. (JCSM, 2016; PMID 27250809) for AASM pediatric sleep consensus. See Academic Citation Guide.

**Output file:** `post-007-newborn-sleep-hours.md`

---

### POST-008 · How to track breastfeeding without your phone
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Feeding
**Tier:** Full (1,200-1,500 words)
**URL slug:** `/blog/feeding/how-to-track-breastfeeding-without-phone`
**Primary keyword:** `how to track breastfeeding`
**Secondary keywords:** `breastfeeding log`, `track nursing sessions`, `breastfeeding tracker`
**Search volume:** Medium
**Search intent:** High purchase intent

**Images:**
- Reuse: Live Activities nursing timer on lock screen (L/R side switch visible)
- Reuse: Midnight Ember screenshot during a nursing session
- Side-by-side photo: hospital paper log, phone app, Nubo device

**Instructions for Claude Code:**
1. Write a 1,200-1,500 word post. This is the highest purchase-intent post in Phase 1.
2. Open with the exact scenario: "You're nursing in the dark at 2am. Baby is latched. You need to log this. But your phone is across the room."
3. Sections: The three ways to log a nursing session (see below) · What information you actually need to log · One-handed logging · When to use more than one method.
4. Be honest, this is a comparison post. Address when apps are great (detailed analytics, reminders, history review). Don't oversell.
5. Nubo is the natural answer but treat it as a discovery, not a hard sell.
6. **Three ways angle (Heavy, structural backbone):** This post IS the three-way comparison applied to breastfeeding. Structure the first major section around the three methods, each with its own H3:
   - **H3: Paper log.** The hospital gives you one. It works for the first week. Then it gets lost under a pile of burp cloths, and your handwriting at 3am is illegible even to you.
   - **H3: Phone app.** The analytics are great. But nursing requires two hands (or at least one free hand and no phone). Screen light disrupts the dark-room calm. And if your partner needs to see the log, they need the app too.
   - **H3: Physical tracker.** One tap starts the session. One tap ends it. No screen, no pen, no fumbling. Data syncs to the app where you or your partner can review it later.
   After the three H3s, add a synthesis paragraph: "Most nursing parents end up using a combination. The app for detailed review, the device for in-the-moment logging. The point is that the logging method should be easier than the thing you're logging."
7. Include the comparison table at the end: Paper / App / Physical tracker, columns for speed, hands-free, caregiver sync, battery, insights. This table echoes the one introduced in POST-003 but is specific to breastfeeding scenarios.
8. **App feature weave (Live Activities + Phone Hand mode + Midnight Ember):** In the phone-app H3, note that Nubo's Live Activities put the nursing timer on the lock screen with a one-tap L/R side switch, so you don't open the app at all. Phone Hand mode moves buttons to your thumb side. Midnight Ember keeps the screen amber at 2am. These three features address the exact friction points this post describes. Weave naturally, not as a feature list. Link to POST-021 and POST-024 when live.

**Output file:** `post-008-track-breastfeeding.md`

---

## Phase 2 — Differentiation (Posts 9–15)
**Goal:** Own the angles competitors ignore. Build brand trust and white-space SEO.
**Start when:** All Phase 1 posts are `[x] DONE`.

---

### POST-009 · Physical baby tracker vs app comparison
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Tracking
**Tier:** Full (1,400-1,700 words)
**URL slug:** `/blog/tracking/physical-baby-tracker-vs-app`
**Primary keyword:** `physical baby tracker vs app`
**Secondary keywords:** `best baby tracker`, `baby tracker device`, `baby tracking device vs app`
**Search volume:** Medium
**Search intent:** High purchase intent — decision stage

**Images:**
- Full comparison table as a designed graphic (Paper / App / Device, 8-10 rows)
- Reuse: Nubo device product photo
- Lifestyle photo: device on nightstand in dim room

**Instructions for Claude Code:**
1. Write a 1,400-1,700 word post. This is the most important comparison post on the blog.
2. Be scrupulously honest. Apps win on analytics, notifications, and integrations. Say so.
3. Physical devices win on: 3am speed, hands-free, no phone required, caregiver simplicity, battery life.
4. Sections: The three approaches parents use today (see below) · Who should use an app · Who should use a physical device · Who should use both · Decision framework.
5. Include a full feature comparison table.
6. Do not bash competitors by name. Compare categories, not brands.
7. Nubo mention is natural here since it's the product category being discussed. Keep it factual.
8. **Three ways angle (Heavy, the post's entire frame):** Expand from a two-way (device vs app) comparison to an explicit three-way comparison. Open the post by acknowledging all three methods parents encounter: paper in the hospital, apps from day 3 when they search "baby tracker" on their phone, and physical devices they may discover later. Paper gets its own short section (H3) before the app and device sections, because most readers started there. The three-way frame makes the post more comprehensive than any competitor's two-way comparison, and it's more honest: paper is still what millions of parents use, and ignoring it would feel incomplete. The feature comparison table should have three columns: Paper Log / Phone App / Physical Device. Link back to POST-003's three-way section.

**Output file:** `post-009-physical-tracker-vs-app.md`

---

### POST-010 · Co-parenting newborn tracking
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Caregiver
**Tier:** Medium (900-1,100 words)
**URL slug:** `/blog/caregiver/co-parenting-newborn-tracking`
**Primary keyword:** `co parenting newborn tracking`
**Secondary keywords:** `newborn tracking both parents`, `partner baby tracking`, `share baby data with partner`
**Search volume:** Medium
**Search intent:** Informational + purchase

**Images:**
- Reuse: Shared caregiver timeline screenshot (showing both parents' logged events with names/avatars)

**Instructions for Claude Code:**
1. Write a 900-1,100 word post. Written for both parents equally, not a "mom post."
2. Open with the classic failure mode: one parent is with the baby all day, the other comes home and asks questions the first parent can't answer because they're too exhausted to remember.
3. Sections: The communication failures that cause conflict · What data actually needs to be shared · How real-time sync prevents the most common arguments · Building the habit together (3-4 bullet points, not a full section).
4. Tone: warm but practical. Not preachy about gender roles. Inclusive of all family structures.
5. Nubo mention: the caregiver sync feature is built for this scenario specifically.
6. **Three ways angle (Light):** One paragraph showing how each method handles partner sync. Paper on the fridge: only visible when you're in the kitchen. Shared app: works if both parents use it. Physical device + app: at-home parent taps, at-work parent sees everything. Frame as: the best system removes the need to ask "did she eat?" entirely.
7. **App feature weave (Alexa + multi-caregiver sync):** Mention that Alexa gives the at-home parent a voice-only logging option when hands are full, and QR-code caregiver invitations mean both partners are set up in seconds with no separate accounts. Link to POST-027 when live.

**Output file:** `post-010-co-parenting-tracking.md`

---

### POST-011 · Baby app data privacy guide
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Privacy
**Tier:** Full (1,400-1,700 words)
**URL slug:** `/blog/privacy/what-data-does-baby-tracking-app-collect`
**Primary keyword:** `baby app data privacy`
**Secondary keywords:** `baby tracking app privacy`, `who owns baby health data`, `baby app data collection`
**Search volume:** Low-medium
**Search intent:** Trust building + brand differentiation

**Images:**
- Privacy comparison table graphic (what data each method collects)
- Architecture diagram lite: "Your data stays here" vs. "Your data goes here" flow

**Instructions for Claude Code:**
1. Write a 1,400-1,700 word post. This is an investigative/transparency piece, not promotional.
2. Explain what typical baby tracking apps collect: account data, usage patterns, health data, device identifiers.
3. Explain what they may do with it: analytics, third-party advertising partners, data brokers.
4. Do not name specific competitor apps by name. Keep it categorical ("some popular apps," "many app-based trackers").
5. Sections: What "free" baby apps often cost · Types of data collected · The three methods through a privacy lens (see below) · Questions to ask before installing any baby app · How to read an app privacy policy (simplified checklist).
6. Nubo mention: factually describe Nubo's model. No account required, data stays on-device, no server uploads. Keep it short and link to the privacy policy.
7. **Three ways angle (Medium):** Add a section titled "The three methods through a privacy lens" that examines each approach's data exposure. Paper: fully private, no data leaves your notebook, but also no backup and no analytics. Phone apps: the privacy spectrum is wide, from privacy-respecting paid apps to free apps that monetize your baby's health data. Physical device: depends on the implementation, but a device that syncs only to a local app (like Nubo) keeps data on your phone, not on a server. Frame it as: privacy isn't binary, and the right question isn't "is tracking safe?" but "where does my data go after I log it?"
8. **App feature weave (Privacy architecture):** When describing Nubo's model, go one level deeper: local-first SQLite, E2E encrypted caregiver sync (per-child AES keys), encrypted iCloud backup. The Nubo device communicates only via Bluetooth (no internet). The server relays encrypted blobs it cannot read. Keep it factual, 2-3 sentences. Link to POST-026 for the full technical deep-dive.
9. Tone: informative journalist, not alarmist. Give parents agency, not fear.
10. **Citations:** Reference COPPA regulations, Huckvale et al. (BMC Medicine, 2015; PMID 26404673) on health app privacy risks, and Grundy et al. (BMJ, 2019; PMID 30894349) on app data sharing. See Academic Citation Guide.

**Output file:** `post-011-baby-app-privacy.md`

---

### POST-012 · Eat play sleep routine for newborns
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Sleep
**Tier:** Full (1,400-1,600 words)
**URL slug:** `/blog/sleep/eat-play-sleep-routine-newborns`
**Primary keyword:** `eat play sleep newborn routine`
**Secondary keywords:** `eat play sleep schedule`, `eat wake sleep cycle`, `newborn daily routine`
**Search volume:** High
**Search intent:** Informational

**Images:**
- Eat-play-sleep cycle diagram (circular infographic showing the three phases with typical durations by age)
- App screenshot: three consecutive logged events (feed, awake, sleep)

**Instructions for Claude Code:**
1. Write a 1,400-1,600 word post. Balanced, not prescriptive.
2. Explain what eat-play-sleep is, where it came from, and the rationale behind it.
3. Honest about limitations: it doesn't work well in weeks 1-4 because newborns often fall asleep nursing. Note the age when it becomes realistic (around 6-8 weeks).
4. Cover common failure points: baby falls asleep during feed, play window too long, sleep association issues.
5. Tracking angle: "Logging all three events gives you a data trail. If baby is fussy at nap time every day, you can see whether the play window was too long."
6. **Three ways angle (Light):** When discussing logging all three events (eat, play, sleep), add one sentence: "You need a way to mark three transitions per cycle, many times a day. A notebook works, an app works, a physical tracker works. The key is consistency, because the pattern only emerges when you have a few days of complete data." Then move on. The emphasis is on the routine, not the tool. If you mention Nubo, tie it to the specific pain of logging the eat-to-play transition while still holding the baby.
7. **App feature weave (Auto-Reminders):** In the routine section, mention that Nubo's auto-reminders reschedule from the last event: "Remind me 3 hours after the last feed" adapts when the cycle shifts. One sentence tied to maintaining the eat-play-sleep rhythm. Link to POST-027 when live.
8. Short H2 at the end: "What if it's not working?" Reassure that routines are flexible.
9. **Citations:** Reference Rivkees SA (Pediatrics, 2003; PMID 12897290) on infant circadian rhythm development. See Academic Citation Guide.

**Output file:** `post-012-eat-play-sleep.md`

---

### POST-013 · What to bring to newborn pediatrician visit
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Tracking
**Tier:** Full (1,200-1,400 words)
**URL slug:** `/blog/tracking/what-to-bring-newborn-pediatrician-visit`
**Primary keyword:** `what to bring to newborn pediatrician appointment`
**Secondary keywords:** `newborn check-up questions`, `2 week newborn visit`, `1 month baby appointment`
**Search volume:** Medium
**Search intent:** Informational + trust

**Images:** *(Best post for multiple app screenshots. The payoff is "look how prepared you are.")*
- App screenshot: daily summary view (feeds, sleep, diapers in one screen)
- Fenton chart screenshot (for preemie mention)
- Vaccine tracker screenshot
- Reuse: Smart Averages daily view

**Instructions for Claude Code:**
1. Write a 1,200-1,400 word post. Practical, checklist-friendly format.
2. Cover the 2-week and 1-month visits specifically. Note what the doctor measures and what questions they typically ask.
3. Include: physical items to bring, questions to prepare, data to have ready (feeds, diapers, sleep).
4. Make a clear, downloadable-feeling checklist section.
5. Nubo mention: in the data section. Having timestamped logs means you walk in prepared instead of guessing.
6. **Three ways angle (Medium):** In the "data to have ready" section, show how each method performs in the waiting room. Paper: you flip through a notebook, try to count yesterday's feeds, and hope your handwriting is legible. App: you open it, scroll to the summary screen, and read the numbers off. Physical tracker + app: same as the app view, but the data includes events logged by every caregiver who tapped the device (not just the parent who remembered to open the app). Note that the pediatrician doesn't care how you tracked it, they just want accurate numbers. The best preparation is whatever gave you the most complete data.
7. **App feature weave (Smart Averages + Fenton charts + Vaccine tracker + CSV export):** This post is the natural home for multiple Nubo features because the pediatrician visit is where data pays off. Mention: Smart Averages give you accurate daily feeding totals even if you missed logging some days (link POST-023). For preemie parents, Fenton growth charts show corrected-age percentiles (link POST-022). The vaccine tracker provides a searchable immunization history (link POST-025). CSV export lets you share raw data with a specialist. Weave each into the relevant data category, not as a list.
8. Include common parental questions at each visit stage with brief answers.

**Output file:** `post-013-pediatrician-visit.md`

---

### POST-014 · Grandparent-friendly baby tracking
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Caregiver
**Tier:** Mini (600-800 words)
**URL slug:** `/blog/caregiver/baby-tracking-for-grandparents`
**Primary keyword:** `baby tracking for grandparents`
**Secondary keywords:** `grandparent baby log`, `easy baby tracker for caregivers`, `simple baby tracker`
**Search volume:** Low
**Search intent:** Purchase + gift intent

**Images:**
- Photo: older person's hand pressing the Nubo device (warmth, simplicity)
- App screenshot: caregiver name on a logged event ("Grandma logged: bottle, 4oz")
- Reuse: Shared caregiver timeline screenshot

**Instructions for Claude Code:**
1. Write a 600-800 word mini post. Warmest post in the collection.
2. Open by acknowledging the generational tech gap without being condescending about it.
3. Key sections: What grandparents need to track (short list) · The simplest setup wins (tap a button, parents see everything) · Gift angle ("setup is already done" device).
4. Frame it as: Grandma/Grandpa does one thing (tap the button). Parents see everything in their app. That's the whole system.
5. **Three ways angle (Light):** One sentence acknowledging paper, apps, and devices. The emphasis is on minimal friction for grandparents, not a method comparison.
6. **App feature weave (Alexa voice logging):** For tech-comfortable grandparents with an Echo, mention Alexa as a zero-friction alternative: "Alexa, tell Newborn Tracker she had a bottle." One sentence. Link to POST-027 when live.
7. Tone: warm, celebratory of grandparent caregivers.

**Output file:** `post-014-grandparent-tracking.md`

---

### POST-015 · Is my newborn eating enough
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Feeding
**Tier:** Full (1,300-1,600 words)
**URL slug:** `/blog/feeding/is-my-newborn-eating-enough`
**Primary keyword:** `is my newborn eating enough`
**Secondary keywords:** `how to know newborn is eating enough`, `newborn wet diapers enough`, `newborn weight gain`
**Search volume:** High
**Search intent:** Informational + anxiety relief

**Images:**
- Wet diaper progression infographic (Day 1: 1 diaper, Day 2: 2, ... Day 6+: 6-8)
- Weight gain guideline graphic

**Instructions for Claude Code:**
1. Write a 1,300-1,600 word post. High anxiety topic. Lead with reassurance, not alarm.
2. Open with: "Most new parents ask this question every single day. The fact that you're asking is a good sign."
3. Cover the 4 main indicators: weight gain, wet diapers, feeding duration/frequency, contentment after feeds.
4. Include the 6 wet diapers rule with age context (day 1-6 progression).
5. Make a clear "when to call the doctor" section. Specific, not vague.
6. Nubo mention: in the diaper count section. "Nubo logs every diaper change. When your pediatrician asks 'how many wet diapers today?' you'll know before they finish the question."
7. **Three ways angle (Light):** In the wet diaper counting section, one brief paragraph: "Keeping a diaper tally sounds simple until you're sleep-deprived and can't remember if that was diaper five or six. A hash-mark chart on the changing table works. A tap in your phone app works. A tap on a physical tracker on the changing table works. The method doesn't matter. What matters is that you have a number, not a guess, when the doctor asks." Keep it light. The focus is on reassurance, not product comparison.
8. **App feature weave (Smart Averages):** When discussing feeding adequacy, note that Nubo's Smart Averages exclude under-logged days so the daily intake number is accurate even during chaotic weeks. One sentence. Link to POST-023 when live.
9. Include a brief FAQ at the end (3 Qs). Add FAQ schema.
10. **Citations:** Reference AAP weight gain guidance and WHO growth reference standards. Any specific papers on newborn weight-loss patterns must be researched and verified before citing. See Academic Citation Guide.

**Output file:** `post-015-newborn-eating-enough.md`

---

## Phase 3 — Long-tail & Conversion (Posts 16–20)
**Goal:** Capture gift-intent, comparison, and long-tail searches. Highest purchase signal content.
**Start when:** All Phase 2 posts are `[x] DONE`.

---

### POST-016 · Best baby shower gifts guide
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Privacy *(gift/conversion)*
**Tier:** Full (1,500-1,800 words)
**URL slug:** `/blog/gifts/best-baby-shower-gifts-for-new-parents`
**Primary keyword:** `best baby shower gifts for new parents`
**Secondary keywords:** `practical baby shower gifts`, `baby shower gift ideas new mom`, `what to buy new parents`
**Search volume:** High
**Search intent:** Gift purchase intent

**Images:**
- Reuse: Nubo device product photo (gift-worthy, with packaging if possible)
- Optional: lifestyle image header per gift category

**Instructions for Claude Code:**
1. Write a 1,500-1,800 word gift guide. Genuinely useful. Nubo is one gift in a curated list, not the whole focus.
2. Structure: 3-4 categories (Sleep & recovery · Feeding · Tracking & organization · Self-care for parents). 2-3 gift ideas per category.
3. Keep gift descriptions tight (2-4 sentences each). What it is, why it matters, who it's for.
4. Nubo appears in "Tracking & organization." Position as: "the gift that takes one thing off their mental load from day one."
5. Write a brief intro that validates skipping cute-but-useless gifts (onesies are already covered by everyone else at the shower).
6. **Three ways angle (Light):** In the Tracking & organization category, briefly frame the evolution: "Most new parents start with a paper chart the hospital sends home. Many graduate to an app. A physical tracker is the gift they wouldn't buy themselves but will use every single day." This positions Nubo as the thoughtful, upgrade gift without making the whole section about tracking methods.
7. This post will have affiliate-link potential. Write as if it will be monetized later.

**Output file:** `post-016-baby-shower-gifts.md`

---

### POST-017 · Baby diaper output guide
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Tracking
**Tier:** Mini (700-900 words)
**Publish priority:** Move to early Phase 2 cadence (high-volume query, pure reference piece, easy win)
**URL slug:** `/blog/tracking/newborn-diaper-output-normal`
**Primary keyword:** `newborn diaper output normal`
**Secondary keywords:** `newborn wet diapers per day`, `baby diaper count by age`, `newborn poop color guide`
**Search volume:** High
**Search intent:** Informational + anxiety relief

**Images:**
- Diaper output table as infographic (Day 1 through Month 1+)
- No app screenshots needed; this is a clinical reference post

**Instructions for Claude Code:**
1. Write a 700-900 word mini post. The table and "when to call the doctor" checklist ARE the search intent. Respect that.
2. Include a diaper output table by day/week: Day 1, Day 2-4, Day 5-7, Weeks 2-4, Month 1+.
3. Cover: wet vs. dirty diapers separately, breastfed vs. formula-fed differences, poop color guide (clear descriptions, no images), when frequency changes.
4. "When to call the doctor" section must be specific: what colors, frequencies, and textures warrant a call.
5. Nubo mention: one sentence at the bottom. Logging diaper changes takes 1 second and gives you the 24-hour count instantly.
6. **Three ways angle: SKIP.** Nobody Googling "newborn diaper output normal" cares about tracking methods. Keep focus on the clinical reference.
7. Tone: clinical where helpful, reassuring throughout.
8. **Citations:** Reference AAP HealthyChildren.org diaper output guidelines and Fontana et al. (Acta Paediatrica Scandinavica, 1989; PMID 2688353) for stool frequency norms. See Academic Citation Guide.

**Output file:** `post-017-diaper-output.md`

---

### POST-018 · Returning to work baby handoff
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Caregiver
**Tier:** Medium (900-1,100 words)
**URL slug:** `/blog/caregiver/returning-to-work-baby-caregiver-handoff`
**Primary keyword:** `returning to work baby handoff caregiver`
**Secondary keywords:** `returning to work after maternity leave baby routine`, `daycare handoff checklist`, `going back to work new mom`
**Search volume:** Medium
**Search intent:** Emotional + practical

**Images:**
- Daily info sheet template as a downloadable/printable graphic
- App screenshot: real-time feed log (what the at-work parent sees)

**Instructions for Claude Code:**
1. Write a 900-1,100 word post. Keep the emotional opening (it's the differentiator). The "daily info sheet" template is the real value and centerpiece.
2. Practical sections: What information your caregiver needs on day one · Daily info sheet template (the centerpiece) · The first week back checklist.
3. Include a "daily info sheet" template. A simple table parents can adapt and print or share with their caregiver.
4. Nubo mention: in the "real-time logging" section. When you're in a meeting and you wonder "did she eat yet?" you can check without texting the nanny.
5. **Three ways angle (Light):** One sentence noting that the return-to-work parent needs real-time visibility, which paper can't give and apps only provide if the caregiver logs consistently. A physical tracker makes logging effortless for the caregiver.
6. Write the emotional parts with care. Do not minimize how hard it is. Do not rush to "here's the solution."

**Output file:** `post-018-return-to-work-handoff.md`

---

### POST-019 · Contact napping guide
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Sleep
**Tier:** Mini (600-800 words)
**URL slug:** `/blog/sleep/contact-napping-newborn`
**Primary keyword:** `contact napping newborn`
**Secondary keywords:** `contact napping safe`, `how to stop contact napping`, `contact nap transition`
**Search volume:** High
**Search intent:** Informational

**Images:**
- Lifestyle photo: parent on couch with baby on chest, Nubo device on armrest
- Reuse: Live Activities lock screen showing sleep timer running

**Instructions for Claude Code:**
1. Write a 600-800 word mini post. The reader is holding a sleeping baby and reading one-handed. Respect their time.
2. Normalize it (2-3 sentences + biological basis). Safety (one short list: SAFE position, flat firm surfaces). When/how to transition (one paragraph around 3-4 months, gentle methods only).
3. Tracking tip: you're pinned, the device is on the armrest, one tap.
4. **Three ways angle (Light):** One sentence: contact napping is the scenario where a physical tracker genuinely changes whether you track at all, since paper is impossible and your phone may be out of reach.
5. **App feature weave (Live Activities + Midnight Ember):** If the phone IS within reach, Nubo's Live Activities show the sleep timer on the lock screen (no unlock needed). Dark-room contact nap? Midnight Ember keeps it amber. Two sentences. Link to POST-021 when live.
6. Tone: absolutely no judgment. Parents are doing their best.
7. **Citations:** Reference Moon RY et al., AAP Task Force on SIDS (Pediatrics, 2022; PMID 35726558) for the safety section, and Ball HL (Birth, 2003; PMID 12911801) on the biological basis of contact sleep. See Academic Citation Guide.

**Output file:** `post-019-contact-napping.md`

---

### POST-020 · Baby tracker comparison: Nubo vs Huckleberry vs Talli
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Tracking
**Tier:** Full (1,500-1,800 words)
**URL slug:** `/blog/tracking/baby-tracker-comparison-nubo-huckleberry-talli`
**Primary keyword:** `best baby tracker app comparison`
**Secondary keywords:** `Huckleberry vs BabyConnect`, `baby tracker device comparison`, `best newborn tracking app`
**Search volume:** Medium
**Search intent:** High purchase intent — decision stage

**Images:**
- Product comparison grid (designed, not just a markdown table)
- Side-by-side app screenshots: Nubo, Huckleberry, Talli home screens (fair representation)
- Nubo device vs. Talli device photo
- Alexa skill screenshot or Echo with voice command bubble overlay

**Instructions for Claude Code:**
1. Write a 1,500-1,800 word honest comparison. This must be credible. Any bias will be obvious.
2. Cover: Nubo (device + app), Huckleberry (app only), Talli (device + app), BabyConnect (app only).
3. For each product: what it is, what it tracks, price, standout feature, biggest limitation. Keep it factual.
4. Include a full feature comparison table: columns for each product, rows for: logging method, caregiver sync, sleep analytics, feeding tracking, diaper tracking, AI insights, price, privacy, battery/charging.
5. Add a "who should choose each" section. Genuinely honest.
6. Nubo recommendation: factual. "Nubo wins for: caregiver sync simplicity, privacy, hands-free logging. Consider alternatives if: you want push notifications, detailed AI sleep coaching, or you only need solo parent tracking."
7. **App feature weave (ecosystem showcase):** In the Nubo section, highlight features competitors lack: Midnight Ember night mode, Smart Averages, Fenton preemie charts, Phone Hand mode, 88-vaccine tracker, Alexa voice logging, Live Activities, E2E encrypted sync. Present as a feature table row per item, not prose. The reader should be able to scan and compare. Link to relevant Phase 4 posts for depth.
8. **Three ways angle (Heavy, culmination post):** Open the post by framing the choice parents face as three categories, not four products: paper, app-only, and device + app. This is the definitive articulation of the three-ways framework. After the category intro, dive into the product-by-product comparison. The feature table should include a "Paper log" column alongside the four products, showing that paper is still a real option (free, private, no battery) but loses on analytics, caregiver sync, and 3am usability. This makes the table more complete and more honest than any competitor comparison post. In the "who should choose each" section, include "Who should stick with paper" as the first entry, not a dismissive one. End the post with: "Some families use paper and a device. Some use an app and a device. The goal is the same: know what happened, share it with the people who need it, and never lose the data when it matters most." Link back to POST-003, POST-008, and POST-009.
8. This post will likely be linked from comparison searches. Treat it as the definitive resource.

**Output file:** `post-020-baby-tracker-comparison.md`

---

## Phase 4 — Feature Deep-Dives & Ecosystem (Posts 21–27)
**Goal:** Showcase Nubo App features that differentiate it from competitors. Establish the Nubo ecosystem (Device + App + Alexa) as a category of its own. These posts serve double duty: SEO for feature-specific searches and internal link targets from Phases 1-3.
**Start when:** At least 8 posts from Phases 1-2 are `[x] DONE`. Phase 4 posts can interleave with Phase 3.

---

### POST-021 · Why your baby tracker's night mode is ruining your sleep
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Product
**Tier:** Mini (600-800 words)
**URL slug:** `/blog/product/midnight-ember-night-mode`
**Primary keyword:** `baby tracker night mode`
**Secondary keywords:** `blue light baby app`, `dark mode baby tracker`, `night mode melatonin sleep`
**Search volume:** Medium
**Search intent:** Informational + feature discovery

**Images:**
- Reuse: Midnight Ember screenshot (full app in night mode, amber/red palette)
- Side-by-side comparison: standard dark mode vs. Midnight Ember (same screen, two screenshots)
- Optional: wavelength spectrum mini-graphic (blue light band vs. amber band)

**Instructions for Claude Code:**
1. Write a 600-800 word mini post. The science is 2 paragraphs. The feature is 2 paragraphs. The parent angle is 1 paragraph. That's it.
2. Hook: "Every baby tracker has a dark mode. Most of them are still blasting blue light into your eyes at 3am."
3. Explain the science simply: blue wavelengths (~480nm) stimulate melanopsin, suppress melatonin production. Standard dark mode uses white text (full spectrum), which still triggers this response. Reference Shechter et al. (2018) and Burkhart & Phelps (2009) for credibility, but keep it accessible.
4. Describe what Midnight Ember does: blue channel constrained to 25% or less of red channel, green to 30% or less. True black (#000000) backgrounds on OLED. Luminance capped at 35%. Schedule-based activation with crossfade.
5. The parent angle: dilated pupils + screen = 20-40 min lost falling back asleep. Multiply by 3 wake-ups per night. Midnight Ember preserves dark adaptation.
6. **Three ways angle (Light):** One sentence: the device emits no light (it's a button), the Alexa skill is voice-only. Midnight Ember solves the one remaining light source when you need to check the app. Three input surfaces, zero unnecessary photons at 3am.
7. Tone: science-backed but warm. Not a product spec sheet.
8. **Citations (critical for this post):** Reference Shechter et al. (J Psychiatr Res, 2018; PMID 29101797), Burkhart & Phelps (Chronobiol Int, 2009; PMID 20030543), and Lockley et al. (Sleep, 2006; PMID 16494083) on short-wavelength sensitivity. This post's credibility depends on real science. See Academic Citation Guide.

**Output file:** `post-021-midnight-ember.md`

---

### POST-022 · Fenton charts: why your preemie's growth can't be measured on a standard curve
**Status:** `[x] DONE`
**Completed:** 2026-03-30
**Pillar:** Product
**Tier:** Full (1,400-1,700 words)
**URL slug:** `/blog/product/fenton-preemie-growth-charts`
**Primary keyword:** `Fenton growth chart preemie`
**Secondary keywords:** `preemie growth chart`, `corrected age growth chart`, `premature baby percentile`
**Search volume:** Medium (niche but high-intent)
**Search intent:** Informational + trust building

**Images:**
- Fenton chart screenshot from the app (with percentile overlays)
- Before/after graphic: same baby plotted on WHO chart (scary low percentile) vs. Fenton chart (normal percentile)
- Corrected age explanation diagram

**Instructions for Claude Code:**
1. Write a 1,400-1,700 word post. This targets preemie parents, a smaller but intensely engaged audience.
2. Hook: "If your baby was born before 37 weeks, every standard growth chart you've seen is measuring against the wrong reference."
3. Explain why WHO charts fail for preemies: built from full-term, breastfed infants starting at 40 weeks gestation. A 28-week baby is being compared to peers with 12 more weeks of in-utero growth.
4. Cover: Fenton 2013 charts (22.5-50 weeks PMA), LMS method for z-score/percentile calculation, how corrected age adjustment works, the Fenton-to-WHO transition at 50 weeks PMA.
5. What Nubo provides: enter the due date once, all measurements plot against corrected age automatically. Height, weight, head circumference each have dedicated charts with 7 percentile overlays (3rd through 97th).
6. The parent angle: "Seeing your baby at the 3rd percentile when they're actually 50th for corrected age is a gut punch you shouldn't have to experience."
7. **Three ways angle (Light):** Brief mention that growth measurements are entered in the app (this is a detailed-input scenario, not a one-tap device scenario). The device and Alexa handle daily events; the app handles clinical data like growth and vaccines.
8. Tone: empathetic and precise. Preemie parents want accuracy and respect, not simplification.
9. **Citations (critical for this post):** Reference Fenton TR & Kim JH (BMC Pediatrics, 2013; PMID 23601190) for the Fenton chart methodology and WHO Multicentre Growth Reference Study Group (2006) for the standard charts Fenton improves upon. This audience expects precision. See Academic Citation Guide.

**Output file:** `post-022-fenton-charts.md`

---

### POST-023 · Your baby tracker is only as good as its worst day (how smart averages work)
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Product
**Tier:** Mini (600-800 words)
**URL slug:** `/blog/product/smart-averages-baby-tracking`
**Primary keyword:** `baby feeding average per day`
**Secondary keywords:** `baby tracker daily average`, `how much baby eats per day`, `baby bottle daily average`
**Search volume:** Medium
**Search intent:** Informational + feature discovery

**Images:**
- 7-day example table as a graphic (with strikethrough on incomplete days and corrected average highlighted)
- Reuse: Smart Averages daily view screenshot from the app

**Instructions for Claude Code:**
1. Write a 600-800 word mini post. The 7-day table IS the post. Hook, concept, example, closing.
2. Hook: "You tracked 6 bottles Monday, 5 Tuesday, and forgot the app existed Wednesday when grandma was babysitting. Now your daily average says 3.7 bottles. That's wrong."
3. Explain why naive averages fail: total divided by days treats an under-logged day the same as a complete day. The result is always lower than reality.
4. How Smart Averages work: find peak day, set threshold at 80% of peak, classify days below threshold as "incomplete," average only robust days.
5. Include the 7-day visual example: raw daily totals, flagged incomplete days, corrected average.
6. The parent angle: "When the pediatrician asks how much she eats per day, you want the real number."
7. **Three ways angle (Light):** One sentence: missed days happen less when logging is a tap instead of a multi-step app interaction. Smart Averages are the safety net for when gaps still happen.

**Output file:** `post-023-smart-averages.md`

---

### POST-024 · One-handed at 3am: how phone hand mode rethinks baby tracker UX
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Product
**Tier:** Mini (500-700 words)
**URL slug:** `/blog/product/phone-hand-mode-one-handed`
**Primary keyword:** `one handed baby tracker app`
**Secondary keywords:** `baby app one hand`, `baby tracker UX design`, `quick action baby tracker`
**Search volume:** Low-medium
**Search intent:** Feature discovery + purchase consideration

**Images:**
- Side-by-side screenshots: right-hand mode vs. left-hand mode
- Thumb zone heat map overlay showing reachable area
- Quick action card close-up screenshot

**Instructions for Claude Code:**
1. Write a 500-700 word mini post. This is a visual post, not a wordy one. The screenshots do the heavy lifting.
2. Hook: "You're holding a baby in your left arm. The phone is in your right hand. Your thumb reaches the right side. Every important button is on the left."
3. Explain Phone Hand mode: right-handed puts action buttons on the right, left-handed flips them. One toggle.
4. Quick action cards: context-aware, live elapsed timers, large 44pt tap targets.
5. The parent angle: moving the tap target 2 inches closer to your thumb eliminates micro-fumbles.
6. **Three ways angle (Light):** One sentence: the device solves one-handed logging by being a physical button, the Alexa skill by being voice-only, and Phone Hand mode solves it for the times you need the phone but only have one hand.
7. Tone: design-aware, slightly technical, but accessible.

**Output file:** `post-024-phone-hand-mode.md`

---

### POST-025 · 88 vaccines, zero guesswork: building a complete immunization record
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Product
**Tier:** Mini (600-800 words)
**URL slug:** `/blog/product/vaccine-tracker-immunization-record`
**Primary keyword:** `baby vaccine tracker app`
**Secondary keywords:** `digital immunization record`, `baby vaccine schedule tracker`, `vaccine record app`
**Search volume:** Medium
**Search intent:** Informational + feature discovery

**Images:**
- Vaccine tracker timeline screenshot (grouped vaccines by month with child's age)
- Vaccine detail view screenshot

**Instructions for Claude Code:**
1. Write a 600-800 word mini post. Confusion hook, what Nubo tracks, when it matters. Done.
2. Hook: "Did she get DTaP or Tdap at the 4-month visit? If you've frozen in the pediatrician's office trying to remember, you're not alone."
3. Explain the complexity: CDC recommends 24-31 doses by age 2. Combination vaccines blur lines. Paper cards get lost.
4. What Nubo provides: WHO vaccine glossary with 88 standard vaccines, custom vaccine entry, timeline history grouped by month with child's age, caregiver sync.
5. When it matters (one sentence each): switching pediatricians, international travel, daycare enrollment.
6. **Three ways angle (Light):** Brief note: vaccines are logged in the app (detailed input), synced to all caregivers. The device and Alexa handle daily events; the app handles clinical milestones.
7. Cross-link: POST-013 (pediatrician visit prep).
8. **Citations:** Reference current CDC immunization schedule and WHO vaccine position papers. See Academic Citation Guide.

**Output file:** `post-025-vaccine-tracker.md`

---

### POST-026 · Your data stays yours: how Nubo's privacy architecture actually works
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Privacy
**Tier:** Full (1,500-1,800 words)
**URL slug:** `/blog/privacy/nubo-privacy-architecture`
**Primary keyword:** `baby tracker privacy data security`
**Secondary keywords:** `baby app data encryption`, `local first baby tracker`, `baby data privacy app`
**Search volume:** Low-medium
**Search intent:** Trust building + brand differentiation (bottom of funnel)

**Images:**
- Data flow architecture diagram (Device → BLE → Phone SQLite → Encrypted blob → Server relay → Caregiver phone)
- Encryption key flow diagram for caregiver sync
- No app screenshots needed; this is a trust/transparency post

**Instructions for Claude Code:**
1. Write a 1,500-1,800 word post. This is the technical credibility piece. Factual, transparent, detailed.
2. Hook: "Most baby tracking apps ask you to create an account and immediately start uploading your child's data to their servers. Where it goes from there is anyone's guess."
3. Explain why baby data is uniquely sensitive: biometric measurements, medical records, behavioral patterns, and it describes a person who cannot consent.
4. Cover each layer of Nubo's architecture:
   - **Local-first:** All events stored in local SQLite. App works fully offline. Events marked `isSync = false` until server acknowledges. `EventManager.broadcastUnsyncedEvents()` batches 50 at a time.
   - **E2E encrypted collaboration:** Each child has a unique symmetric key (`symkey`). QR code invitation includes encrypted child profile. AES/CBC encryption for all shared events. Server relays encrypted blobs, cannot read contents.
   - **Backup encryption:** AES with per-child keys in iOS Keychain. SHA-256 checksums for integrity. Only owned children backed up. Three tiers: manual, foreground (2hr), scheduled (2am via BGTaskScheduler).
   - **Conflict resolution:** Last-Write-Wins without server-side data access. Client-side deduplication.
5. The parent angle: "Your pediatrician's office has HIPAA obligations. Your baby tracker should have equivalent respect for your child's data."
6. **Three ways angle (Medium):** The three-methods-through-a-privacy-lens angle from POST-011, but deeper. Paper: fully private but no backup. Competitor apps: privacy spectrum is wide (reference POST-011). Nubo ecosystem: the device communicates only with the phone via Bluetooth (no internet). The app stores locally and encrypts before any cloud sync. The Alexa skill processes voice commands and pushes events to the encrypted pipeline. At no point does Nubo read your baby's data on the server side.
7. Link to the actual Nubo privacy policy page. Tone: transparency report, not marketing. Let the architecture speak.
8. **Citations (critical for this post):** Reference HIPAA Security Rule (45 CFR 164) as a health-data benchmark and Huckvale et al. (BMC Medicine, 2015; PMID 26404673) for health app privacy context. Cite specific encryption standards (AES-256) with verified NIST references where applicable. Any additional privacy research papers must be verified before citing. See Academic Citation Guide.

**Output file:** `post-026-privacy-architecture.md`

---

### POST-027 · The invisible tracker: how Nubo works when you're not looking
**Status:** `[ ] PENDING`
**Completed:** —
**Pillar:** Product
**Tier:** Full (1,400-1,700 words)
**URL slug:** `/blog/product/nubo-ecosystem-how-it-works`
**Primary keyword:** `nubo baby tracker how it works`
**Secondary keywords:** `baby tracker device and app`, `baby tracker Alexa`, `automatic baby tracking`
**Search volume:** Low (branded)
**Search intent:** High purchase intent + product education

**Images:**
- Reuse: Nubo ecosystem diagram (Device + App + Alexa feeding into one data layer)
- "Day in the life" infographic (morning: app review, daytime: device taps, dinner: Alexa voice, night: device + Midnight Ember)
- Product family photo (device, phone with app, Echo)

**Instructions for Claude Code:**
1. Write a 1,400-1,700 word post. This is the definitive ecosystem post. The "how the whole thing works together" story.
2. Hook: "The best baby tracker is one you barely have to think about. Not because it tracks less, but because it tracks for you."
3. Frame the core argument: tracking fatigue is the #1 reason parents abandon baby apps. Nubo's design philosophy is progressive automation: manual logging where necessary, intelligent automation everywhere else.
4. Cover each ecosystem surface with its signature capability:
   - **Nubo Device (BLE):** Pair once, auto-reconnect, battery monitoring, OTA firmware updates. The always-on physical logger.
   - **Nubo App (Live Activities):** Sleep/nursing timers on lock screen and Dynamic Island. Nursing mode with L/R side switch on lock screen. Stop button without unlocking or app launching.
   - **Nubo App (Auto-Reminders):** Rule-based, self-rescheduling. "Remind me 3 hours after the last bottle." Auto-cancel on early events. Quiet hours.
   - **Nubo Alexa Skill:** Natural language logging with relative and absolute times. Events sync to all caregivers via standard pipeline.
   - **Multi-caregiver sync:** QR code invitation. Real-time shared timeline. Works offline with sync-on-reconnect.
5. The parent angle: each feature removes one more reason to pull out your phone and open an app. Compound effect: more data with less effort = better insights, more accurate averages, fewer gaps.
6. **Three ways angle (Heavy, ecosystem showcase):** This post IS the ecosystem reveal. Structure around the three Nubo surfaces, showing how a typical day flows between them: morning routine (app for review), daytime with nanny (device for quick logging, nanny sees data via her phone), dinner prep (Alexa for hands-free logging), nighttime feeds (device + Midnight Ember for checks). End with: "Three input methods, one data layer. You pick the right tool for the moment."
7. This is the post that other posts link to when they mention the Nubo ecosystem. Treat it as the product education hub.

**Output file:** `post-027-invisible-tracker.md`

---

### Bonus shorter posts (Phase 4 backlog, not numbered yet)

These are natural minis (500-700 words). Interleave between full posts for publishing cadence:

- **Color-coded profiles for multi-child tracking** — 11 system colors, entire UI shifts on child switch. Pillar: Product. Best for: parents with multiples or Irish twins. Images: side-by-side screenshots of two child profiles with different color schemes.
- **CSV export: because sometimes you need a spreadsheet** — For data-driven parents bringing logs to specialists. Pillar: Product. Links to: POST-013. Images: CSV export flow screenshot, sample spreadsheet.
- **What CDC milestones actually mean (and how to track them without anxiety)** — 4 developmental categories, 12 age groups, radial progress rings. Pillar: Tracking. Links to: POST-013. Images: radial progress rings screenshot.
- **The quick action card: designed for the 4-second interaction** — Deep-dive into the home screen: taps-to-log, live timers, contextual summaries. Pillar: Product. Links to: POST-024. Images: quick action card screenshot with annotation overlays.

---

## Output File Naming Convention

All post files should be named: `post-NNN-short-description.md`
All posts should be saved to: `/outputs/blog-posts/`

Each file should begin with this frontmatter block:

```yaml
---
title: "Full Post Title Here"
slug: "/blog/pillar/url-slug-here"
pillar: "sleep | feeding | tracking | caregiver | privacy | product"
primaryKeyword: "primary keyword here"
metaDescription: "150-160 char meta description with keyword and soft CTA."
targetWordCount: 1400
actualWordCount: 0
status: "draft | review | published"
---
```

**No published date in frontmatter or rendered output.** Do not add `date`, `publishedDate`, `completedDate`, or any date field to post frontmatter. Do not render a date on the page.

---

## Execution Log

> Append new entries here as tasks are completed. Format: `[YYYY-MM-DD] POST-NNN — Status — Notes`

*(No entries yet. Claude Code: add your first entry when POST-001 is complete.)*

[2026-03-30] POST-001 — DONE — Newborn wake windows guide. 1,520 words. Filed as src/content/blog/newborn-wake-windows-by-age.mdx. Citations: Mindell et al. (J Sleep Res, 2016; PMID 27252030), National Sleep Foundation (2015). Three-ways angle: Light (one sentence). App feature weave: Midnight Ember. Build: pass.

[2026-03-30] POST-002 — DONE — Newborn feeding schedule guide. 1,593 words. Filed as src/content/blog/newborn-feeding-schedule.mdx. Citations: WHO Infant and Young Child Feeding fact sheet, Kent et al. (Pediatrics, 2006; PMID 16510619). Three-ways angle: Medium (full paragraph comparing paper/app/device for feeding logging). App feature weave: Smart Averages + Auto-Reminders. Internal link: POST-001 (wake windows). Build: pass.

[2026-03-30] POST-003 — DONE — Why track baby sleep, feeds, diapers. ~1,480 words. Filed as src/content/blog/why-track-baby-sleep-feeds-diapers.mdx. Citations: AAP Bright Futures Guidelines (HealthyChildren.org). Three-ways angle: Heavy (full H2 section with comparison table). Nubo mentions: 2 (app list, soft CTA). Internal links: POST-001 (wake windows), POST-002 (feeding schedule). Build: pass.

[2026-03-30] POST-004 — DONE — Baby sleep regressions at every age. ~2,450 words. Filed as src/content/blog/baby-sleep-regressions-every-age.mdx. Citations: Henderson et al. (Pediatrics, 2010; PMID 20974775), Galland et al. (Sleep Medicine Reviews, 2012; PMID 21784676), Mindell & Owens (A Clinical Guide to Pediatric Sleep, 3rd ed., 2015). Three-ways angle: Light (one sentence in tracking section). Nubo mentions: 1 (physical tracker in tracking data section). Internal links: POST-001 (wake windows), POST-003 (why track). Build: pass.

[2026-03-30] POST-005 — DONE — Cluster feeding guide. ~1,450 words. Filed as src/content/blog/cluster-feeding-what-it-is.mdx. Citations: Kent et al. (Pediatrics, 2006; PMID 16510619), Academy of Breastfeeding Medicine Clinical Protocols. Three-ways angle: Medium (full paragraph comparing paper/app/device in pinned-to-couch scenario). App feature weave: Alexa voice logging. Nubo mentions: 2 (tracking section, soft CTA). Internal links: POST-002 (feeding schedule), POST-003 (why track). Build: pass.

[2026-03-30] POST-006 — DONE — Sharing baby tracking with your nanny. 1,499 words. Filed as src/content/blog/how-to-share-baby-tracking-with-nanny.mdx. Citations: none (no clinical claims). Three-ways angle: Heavy (full H2 section with three H3s structured from nanny's perspective, comparison table). App feature weave: Alexa voice logging + QR-code caregiver invitations. Nubo mentions: 2 (physical tracker section, soft CTA). Internal links: POST-003 (why track), POST-002 (feeding schedule). Build: pass.

[2026-03-30] POST-021 — DONE — Midnight Ember night mode. 766 words. Filed as src/content/blog/midnight-ember-night-mode.mdx. Citations: Lockley et al. (Sleep, 2006; PMID 16494083), Burkhart & Phelps (Chronobiol Int, 2009; PMID 20030543), Shechter et al. (J Psychiatr Res, 2018; PMID 29101797). Three-ways angle: Light (one sentence covering device/Alexa/app as zero-photon surfaces). Nubo mentions: 2 (Midnight Ember technical details, soft closing). No internal links (Phase 4 standalone). Build: pass.

[2026-03-30] POST-022 — DONE — Fenton preemie growth charts. ~1,670 words. Filed as src/content/blog/fenton-preemie-growth-charts.mdx. Citations: Fenton & Kim (BMC Pediatrics, 2013; PMID 23601190), WHO Multicentre Growth Reference Study Group (2006). Three-ways angle: Light (brief mention of device/Alexa for daily events, app for clinical data). Nubo mentions: 2 (corrected-age charting feature, soft CTA). Internal links: POST-003 (why track). Build: pass.

---

## Summary Tracker

| Post | Title | Phase | Tier | Words | Status | Completed |
|------|-------|-------|------|-------|--------|-----------|
| POST-001 | Newborn wake windows guide | 1 | Full | 1,500-1,800 | `DONE` | 2026-03-30 |
| POST-002 | Newborn feeding schedule | 1 | Full | 1,500-1,800 | `DONE` | 2026-03-30 |
| POST-003 | Why track baby | 1 | Full | 1,200-1,500 | `DONE` | 2026-03-30 |
| POST-004 | Sleep regression guide | 1 | Full | 2,000-2,500 | `DONE` | 2026-03-30 |
| POST-005 | Cluster feeding | 1 | Full | 1,300-1,600 | `DONE` | 2026-03-30 |
| POST-006 | Nanny tracking | 1 | Full | 1,200-1,500 | `DONE` | 2026-03-30 |
| POST-007 | Newborn sleep hours | 1 | Medium | 900-1,100 | `PENDING` | — |
| POST-008 | Track breastfeeding | 1 | Full | 1,200-1,500 | `PENDING` | — |
| POST-009 | Physical tracker vs app | 2 | Full | 1,400-1,700 | `PENDING` | — |
| POST-010 | Co-parenting tracking | 2 | Medium | 900-1,100 | `PENDING` | — |
| POST-011 | Baby app privacy | 2 | Full | 1,400-1,700 | `PENDING` | — |
| POST-012 | Eat play sleep | 2 | Full | 1,400-1,600 | `PENDING` | — |
| POST-013 | Pediatrician visit | 2 | Full | 1,200-1,400 | `PENDING` | — |
| POST-014 | Grandparent tracking | 2 | Mini | 600-800 | `PENDING` | — |
| POST-015 | Is newborn eating enough | 2 | Full | 1,300-1,600 | `PENDING` | — |
| POST-016 | Baby shower gifts | 3 | Full | 1,500-1,800 | `PENDING` | — |
| POST-017 | Diaper output | 3* | Mini | 700-900 | `PENDING` | — |
| POST-018 | Return to work handoff | 3 | Medium | 900-1,100 | `PENDING` | — |
| POST-019 | Contact napping | 3 | Mini | 600-800 | `PENDING` | — |
| POST-020 | Baby tracker comparison | 3 | Full | 1,500-1,800 | `PENDING` | — |
| POST-021 | Midnight Ember night mode | 4 | Mini | 600-800 | `DONE` | 2026-03-30 |
| POST-022 | Fenton preemie growth charts | 4 | Full | 1,400-1,700 | `DONE` | 2026-03-30 |
| POST-023 | Smart Averages | 4 | Mini | 600-800 | `PENDING` | — |
| POST-024 | Phone Hand mode UX | 4 | Mini | 500-700 | `PENDING` | — |
| POST-025 | Vaccine tracker | 4 | Mini | 600-800 | `PENDING` | — |
| POST-026 | Privacy architecture | 4 | Full | 1,500-1,800 | `PENDING` | — |
| POST-027 | The invisible tracker (ecosystem) | 4 | Full | 1,400-1,700 | `PENDING` | — |

*POST-017: Phase 3 label retained, but publish early in Phase 2 cadence (high-volume, easy win).

---

*Document version: 3.0 · Updated: 2026-03-30 · Added post sizing tiers (Full/Medium/Mini), image instructions per post, reusable image assets section, downsized 10 posts, updated summary tracker with tier and word count columns*