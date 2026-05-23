# Plausible Analytics Setup Guide

**Site:** nubotracker.com  
**Current state:** Script installed and firing pageviews via proxied URL. No enhanced measurements enabled, no goals, no integrations.  
**Goal of this document:** Capture every setup step needed to get full value from Plausible.

---

## Part 1: Plausible Dashboard (no code required)

### Step 1: Connect Google Search Console

This is the single highest-leverage integration. The site has dozens of blog posts targeting specific search queries. Without this, all Google traffic appears as one unlabeled referral source. With it, you see the exact keywords bringing visitors, impressions, click-through rate, and average position — all inside Plausible.

**Steps:**

1. Go to [Google Search Console](https://search.google.com/search-console/) and confirm `nubotracker.com` is verified. If not, add it as a Domain property and verify via DNS.
2. Log into Plausible. Go to **nubotracker.com > Site Settings > Integrations**.
3. Click **Continue with Google** in the Search Console section.
4. Sign in with the Google account that has Search Console access.
5. On the permissions screen, tick **"View Search Console data for your verified sites"**. This is required or the integration will show no data.
6. Back in Plausible, select `nubotracker.com` (or `sc-domain:nubotracker.com` if you used a Domain property) from the dropdown and click **Save**.

**What to expect:** Search Console data has a 24-36 hour delay. After a day or two, click Google in the Sources tab and you will see the keyword list alongside click and impression counts.

---

### Step 2: Enable Enhanced Measurements

Go to **nubotracker.com > Site Settings > General > Site Installation** and enable the following toggles:

#### Outbound link clicks

Enable this immediately. Every link on the site that goes to Amazon, the App Store, Google Play, and the Alexa skill page becomes a tracked event automatically. No code changes needed. This is the primary conversion signal on this site.

After enabling, Plausible creates an `Outbound Link: Click` goal automatically. All external link clicks will appear in the Goals tab with the destination URL as a custom property.

#### 404 error pages

Enable this toggle. It prepares the script to receive 404 events. You will still need to add a small code snippet to the 404 page itself (covered in Part 2). The site migrated from WordPress, so there may be indexed URLs that no longer exist.

#### Form submissions

The contact page uses `mailto:` links rather than an HTML form, so this toggle is not currently needed. Revisit if a contact or waitlist form is added in future.

**Important:** After changing any toggle, Plausible regenerates the script snippet. The proxied script URL in `BaseLayout.astro` may need to be updated to match the new snippet shown in Site Settings. Check the **Site Installation** page after saving and compare the `src` attribute to what is in the codebase.

---

### Step 3: Create Goals

After outbound tracking is enabled, the `Outbound Link: Click` goal is created automatically. Create the following additional goals manually in **Site Settings > Goals > + Add goal**.

#### Outbound destination goals (Custom event, filtered)

These narrow the broad outbound goal into destination-specific goals so you can see Amazon clicks vs App Store clicks vs Play Store clicks separately in the dashboard.

| Goal display name | Goal trigger | Property filter |
|---|---|---|
| Buy on Amazon | Custom event: `Outbound Link: Click` | `url` contains `amazon.com` |
| Download on App Store | Custom event: `Outbound Link: Click` | `url` contains `apps.apple.com` |
| Get on Google Play | Custom event: `Outbound Link: Click` | `url` contains `play.google.com` |
| Alexa Skill | Custom event: `Outbound Link: Click` | `url` contains `alexa.amazon.com` or the skill's specific URL |

To set property filters when creating a goal: after selecting Custom event and entering the event name, click **Add property filter** and set `url` > `contains` > the relevant domain string.

#### Scroll depth goals

These reveal whether visitors read key pages all the way through before clicking a CTA or bouncing. Create each as a **Scroll Depth** goal type.

| Page path | Threshold | Why |
|---|---|---|
| `/pricing/` | 50% | Are visitors reading the comparison before deciding? |
| `/pricing/` | 75% | Do they get to the setup chooser section at the bottom? |
| `/device/` | 75% | Are visitors reading the full device pitch? |
| `/app/` | 75% | Are visitors reading the full free-vs-premium breakdown? |
| `/blog/**` | 50% | Blog engagement baseline across all posts |
| `/blog/**` | 75% | Deep engagement benchmark |

To set a wildcard: enter `/blog/**` in the page path field. The `**` matches any URL that starts with `/blog/`.

#### Pageview goals (high-intent pages)

These let you filter the entire dashboard to see only visitors who reached a key page and trace back where they came from.

Create as **Pageview** goal type:

| Goal name | Page path |
|---|---|
| Visited Pricing | `/pricing/` |
| Visited Device | `/device/` |
| Visited App | `/app/` |
| Visited Gift | `/gift/` |

#### 404 goal

Create as **Custom event** with event name exactly `404` (case-sensitive). This will start showing data once the 404 page code change in Part 2 is deployed.

---

### Step 4: Build Two Conversion Funnels

Funnels require at least two steps and are built from goals. Wait until you have a few days of data from the goals above before creating these, so the funnel population is not zero.

Go to **Site Settings > Funnels > + Add funnel**.

#### Funnel 1: Device purchase path

Name: `Device Purchase`

Steps:
1. Pageview goal: `Visited Device`
2. Pageview goal: `Visited Pricing`
3. Goal: `Buy on Amazon`

This shows how many visitors who land on the device page make it to pricing, and how many of those click through to Amazon. The step where you lose the most visitors is the highest-leverage place to improve copy or layout.

#### Funnel 2: App download path

Name: `App Download`

Steps:
1. Pageview goal: `Visited App`
2. Goal: `Download on App Store` or `Get on Google Play`

---

### Step 5: Traffic Spike Notifications

Go to **Site Settings > General > Traffic spike notifications**.

Enable email alerts. Set a threshold that makes sense once you have a baseline (start with 100 visitors in a day if traffic is currently moderate). This alerts you when a blog post gets shared, picked up in search, or mentioned somewhere, so you can act while the traffic is live rather than discovering it weeks later.

---

### Step 6: Email Digest Reports

Go to **Site Settings > General > Email reports**.

Set up a weekly report sent to the account owner (and any other stakeholders). A weekly digest sent to your inbox means you see trends without logging in every day. Choose Monday morning so you review the prior week's data at the start of each week.

---

### Step 7: Exclude Internal Traffic

Go to **Site Settings > General > Shields**.

Add your own IP address (and any team members' IPs) to the block list. This prevents your own browsing, writing, and testing from inflating visitor and engagement numbers. Your home IP and any office IP should be added.

To find your current IP, visit [whatismyip.com](https://www.whatismyip.com) and copy the IPv4 address.

---

## Part 2: Code Changes

### Step 8: Create the 404 page

The site currently has no `404.astro`. This page is needed both for Plausible 404 tracking and as a good user experience for anyone who hits a broken URL.

Create `src/pages/404.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

const title = 'Page not found | Nubo Baby Tracker';
const description = 'This page does not exist. Try the Nubo app, device, or pricing pages.';
---

<BaseLayout title={title} description={description}>
  <Header />
  <main>
    <section class="page-hero">
      <div class="container">
        <p class="overline">404</p>
        <h1>Page not found.</h1>
        <p class="page-hero-sub">
          This URL does not exist. Use the links below to find what you need.
        </p>
        <div class="hero-ctas" style="margin-top: 2rem;">
          <a href="/" class="btn-primary">Go home</a>
          <a href="/app/" class="btn-secondary">Explore the app</a>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</BaseLayout>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.plausible === 'function') {
      plausible('404', { props: { path: document.location.pathname } });
    }
  });
</script>
```

The `path` custom property records which URL triggered the 404, so you can see in Plausible which specific broken paths are getting the most traffic.

After deploying, visit a non-existent URL like `https://www.nubotracker.com/this-does-not-exist` and check the Plausible real-time dashboard. A `404` event should appear within a few seconds. If it does not, open the browser Network tab and look for a POST to `plausible.io/api/event`.

---

### Step 9: Add blog category as a custom property on pageviews

The blog has 30+ posts across categories like `sleep`, `feeding`, `tracking`, `caregiver`, `privacy`, `product`, and `gifts`. Without custom properties, Plausible treats `/blog/sleep-regressions/` and `/blog/free-baby-tracker-no-paywalls/` identically in the aggregate view. With a `category` property attached to each blog pageview, you can filter the entire dashboard by category and answer questions like: which category drives the most Amazon clicks? Which category has the best scroll depth?

**First, enable Custom Properties in Plausible:**

Go to **Site Settings > General > Site Installation** and confirm **Custom properties** is toggled on. If the toggle exists and is off, enable it and update the script URL in `BaseLayout.astro` to match the regenerated snippet.

**Then, add the following script to `src/layouts/BlogLayout.astro`:**

Find the closing `</BaseLayout>` tag and add a script block immediately before it:

```astro
<script define:vars={{ category }}>
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.plausible === 'function') {
      plausible('pageview', { props: { category: category } });
    }
  });
</script>
```

The `category` variable is already destructured from `Astro.props` in `BlogLayout.astro` so no additional frontmatter changes are needed. Astro's `define:vars` passes the server-side value into the client-side script.

**Then, register the property in Plausible:**

Go to **Site Settings > Goals** and open any goal or pageview goal. Custom properties declared via `plausible('pageview', {props: ...})` need to be registered in the dashboard before they appear. Go to **Site Settings > Custom Properties** (or it may surface automatically after the first event fires) and add `category` as a tracked property.

**How to use it:** In the Plausible dashboard, click Filter in the top right, choose Property, select `category`, and pick a value like `sleep`. The entire dashboard will filter to show only blog visitors who landed on sleep-category posts. You can then see which sources drive sleep readers and whether they click through to the device page.

---

## Part 3: Off-site and Ongoing (UTM Tagging)

### Step 10: Tag all external links back to the site

Any URL you share that points to `nubotracker.com` should carry UTM parameters. Without them, traffic from your own Amazon listing, App Store description, social posts, and any PR coverage shows up as "Direct / None" and is invisible in the Sources report.

Use the [Plausible UTM Builder](https://plausible.io/utm-builder) to generate tagged links without doing it by hand.

#### Amazon product listing

The device listing on Amazon should link back to the site in the product description. Use:
```
https://www.nubotracker.com/device/?utm_source=amazon&utm_medium=listing&utm_campaign=device
```

#### App Store listing

If the App Store developer page or description links back to the site:
```
https://www.nubotracker.com/app/?utm_source=app-store&utm_medium=listing&utm_campaign=ios-app
```

#### Google Play listing

```
https://www.nubotracker.com/app/?utm_source=google-play&utm_medium=listing&utm_campaign=android-app
```

#### Social media bios

Instagram, TikTok, and Facebook bio links:
```
https://www.nubotracker.com/?utm_source=instagram&utm_medium=social&utm_campaign=bio
```

Use a consistent `utm_source` per platform and `utm_medium=social` for all social channels. This way Plausible can group all social traffic into the Social channel while still letting you break it down by platform in the Campaigns tab.

#### Email (if any newsletters or drip sequences are added)

```
https://www.nubotracker.com/pricing/?utm_source=email&utm_medium=email&utm_campaign=welcome-series
```

---

## Summary: Priority Order

| Priority | Step | Effort | Impact |
|---|---|---|---|
| 1 | Connect Google Search Console | 10 min, no code | High: unlocks keyword data |
| 2 | Enable outbound link tracking | 2 min in dashboard | Critical: this is the main conversion signal |
| 3 | Create Amazon / App Store / Play goals | 10 min in dashboard | High: destination-level attribution |
| 4 | Enable 404 toggle + create 404 page (Part 2) | 30 min code | High: catches broken links from WordPress migration |
| 5 | Create scroll depth goals | 10 min in dashboard | Medium: content and CTA placement insight |
| 6 | Create pageview goals + funnels | 15 min in dashboard | Medium: end-to-end conversion visibility |
| 7 | Exclude internal traffic | 2 min | Medium: data hygiene |
| 8 | Traffic spike notifications + weekly digest | 5 min | Low-medium: operational awareness |
| 9 | Blog category custom properties (Part 2) | 30 min code | Medium: content performance by category |
| 10 | UTM tag all external links (Part 3) | Ongoing | High over time: source attribution |
