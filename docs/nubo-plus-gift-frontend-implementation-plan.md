# Nubo Plus gifting: Astro frontend implementation plan

**Status:** Implementation proposal, no gift functionality has been implemented or published.  
**Prepared:** October 2, 2026.  
**Scope:** Astro marketing website and account frontend. The product owner will implement the backend separately.  
**Product reference:** [Nubo Plus Gift Proposal](/Users/guru/Downloads/Nubo_Plus_Gift_Proposal.md). Its commercial terms remain proposed.  
**Owner direction:** Use $59.99 for the planned gift and the explicit purchase CTA **Gift Nubo Plus**.  
**Architecture:** Static marketing page, external Gift Up checkout, separate Astro account frontend, Nubo backend API.

## 1. Intended result

A buyer visits `www.nubotracker.com/gift/`, understands the Nubo Plus gift, and follows a link to Gift Up to purchase. The public website collects no payment details, creates no orders, and makes no privileged Gift Up API calls.

A recipient uses their existing Nubo account to open `account.nubotracker.com`, enters a gift code or scans a QR, confirms the account receiving access, and redeems through the Nubo backend. The frontend displays the backend's result. Nubo's backend remains responsible for verifying the sale, enforcing the two-user limit, and assigning Plus access.

The proposed offer is a single purchase of **one year of Nubo Plus for up to two unique Nubo accounts**, priced at **$59.99 USD**. The first successful claim starts the year, and both accounts share the same expiration. Reinstalling or changing platforms does not consume another seat. Caregiver invitations do not grant Plus automatically.

These are planned gift terms, not changes to the existing $59.99/year app subscription. Publish them only when the product, Gift Up item, backend, and mobile apps support them.

## 2. Current implementation and constraints

| Existing source | Current behavior | Planned treatment |
|---|---|---|
| `src/pages/gift.astro` | Device gift page with direct Amazon CTAs and device Product JSON-LD | Keep the route and device option, add a distinct Plus gift offer |
| `src/pages/pricing.astro` | Free app, $59.99/year Plus subscription, and Amazon device | Add a gift reference without replacing subscription pricing |
| `src/layouts/BaseLayout.astro` | SEO shell, fonts, global design tokens, Plausible, breadcrumbs, automatic mobile CTA | Reuse for marketing; use a separate account layout |
| `src/components/Header.astro` | Navigation and configurable header CTA | Reuse the existing CTA props for the gift page |
| `src/components/Footer.astro` | Shared navigation and marketplace destinations | Add a gift link if absent; retain existing destinations |
| `src/components/MobileStickyCTA.astro` | `/gift/` currently receives a device purchase CTA | Use the explicit Gift Nubo Plus CTA when gifting is enabled |
| `astro.config.mjs` | Astro 4, static output, trailing slashes, marketing sitemap | Keep the production marketing configuration intact |
| `.github/workflows/deploy.yml` | Builds root project and deploys `dist/` to GitHub Pages | Keep this marketing pipeline; deploy account output separately |

Use working source as the baseline. The current device gift page lists $89, while repository guidance also references $89.99. Confirm the live device offer before editing those figures; adding Plus gifts is not authorization to change device pricing.

Preserve indexed URLs and the existing meta-refresh redirects. Do not create `/buy/`, `/shop/`, `/cart/`, `/checkout/`, or `/wishlist/`. Device purchases continue to Amazon; ordinary app subscriptions remain in the mobile stores.

## 3. Frontend and backend ownership

| Frontend implementation | Backend and external prerequisites |
|---|---|
| Explain gift terms and render the external purchase link | Configure the Gift Up item, currency, price, checkout, delivery, and payment provider |
| Render account and redemption UI | Implement authenticated sessions and API authorization |
| Exchange an app-provided one-time session token | Generate, validate, consume, and expire that token; issue the session cookie |
| Submit code or token and display gift preview | Verify gift provenance, payment, SKU, status, and redemption eligibility |
| Show confirmation and submit a claim | Atomically enforce unique-user claims and calculate entitlements |
| Display expiration and claimed-seat count | Store gift records, claims, entitlement sources, and authoritative timestamps |
| Recover from timeout, expiry, and retry | Provide idempotency, operation lookup, rate limiting, refunds, and revocation behavior |
| Show app-return action when supported | Mobile apps create web sessions and refresh entitlements after returning |

Frontend work includes API client types and development fixtures. It does not include Gift Up API keys, webhook receivers, Stripe verification, gift issuance, database tables, email delivery, or mobile app implementation.

Gift Up has [order and gift-code lookup APIs](https://developer.giftup.com/api) and [signed webhooks](https://help.giftup.com/article/47-webhooks). Those integrate with the Nubo backend. The browser must not treat a checkout redirect, a code's existence, or a webhook event name as proof of successful payment. The backend must expose a verified eligibility result to the frontend.

## 4. Two static frontend builds

### Marketing website

Keep the root Astro application as the public marketing site on GitHub Pages. Its `/gift/` page remains static HTML with an ordinary external link to Gift Up. No Gift Up embed is needed for V1.

### Account website

Build a second, small Astro static application for `account.nubotracker.com`, provisionally under `account-web/` in this repository. It will contain only public HTML shells and browser scripts. Personal account data loads at runtime from the backend, never during an Astro build.

Use a separate `package.json`, lockfile, Astro configuration, `src/`, `public/`, output directory, and deployment job. This avoids changing the root site's output mode or adding account pages to its sitemap. A different repository is also possible if the owner prefers; the route and API contracts below do not depend on the directory choice.

The account build requires its own hosting target. The existing GitHub Pages site and single `public/CNAME` do not establish a second independently served account site. Select account hosting with the backend owner before provisioning DNS or changing deployment settings.

Static rendering is sufficient if browser code calls the authenticated API. If server rendering or a reverse proxy is later required, treat that as a separate hosting decision. Do not add Astro server endpoints to the static marketing build and assume GitHub Pages will run them.

### Proposed routes

| Host | Route | Purpose | Indexing |
|---|---|---|---|
| `www.nubotracker.com` | `/gift/` | Device and Plus gift options, terms, purchase handoff | Indexable |
| `www.nubotracker.com` | `/gift/thank-you/` | Optional informational return from Gift Up | Noindex; omit from sitemap |
| `account.nubotracker.com` | `/account/` | Signed-in identity, Plus status, redemption entry, sign-out | Noindex |
| `account.nubotracker.com` | `/session/` | Exchange the app's one-time token | Noindex |
| `account.nubotracker.com` | `/gift/redeem/` | Code entry, scan, preview, confirmation, result | Noindex |

Serve concrete static routes with trailing slashes. A successful redemption can be a state of `/gift/redeem/`; it does not need a personal success URL. Opening or prefetching any link must never claim a gift.

## 5. Public gift page

### Information hierarchy

1. A short introduction to giving Nubo, with two visibly separate options.
2. **Gift Nubo Plus:** proposed $59.99 single purchase, one year, up to two people, iPhone and Android, no device included.
3. **Gift the Nubo device:** existing product imagery, direct Amazon CTA, physical contents and device benefits.
4. How the Plus gift works: buy through Gift Up, receive the gift, each person claims it using their Nubo account.
5. Gift terms and focused FAQ.
6. A support link and clear purchase destination.

Use existing brand tokens, button classes, Quicksand, real app imagery, and the device section assets. Prefer a compact Plus card beside a device card on desktop and stacked cards on mobile. Do not make the gift section look like a local checkout.

Suggested offer copy, subject to final product terms:

> Gift 1 year of Nubo Plus  
> $59.99, one purchase for up to two people. Works across iPhone and Android. The year starts when the first person redeems. Both people share the same end date.

Use **Gift Nubo Plus** as the exact external purchase CTA on the offer card, gift-page header, and mobile sticky action. Add nearby text **Purchase securely through Gift Up**. Open the provider destination with `target="_blank"` and `rel="noopener noreferrer"`. Keep **Buy on Amazon** for the device.

Explain that each person must redeem on their own account and that inviting a caregiver does not transfer the gift. State the first-activation deadline separately from the access end date. The proposal recommends activation within 12 months of purchase; do not publish a deadline until it is finalized and enforced by the backend.

Do not promise that a gift cancels an existing subscription, pauses store billing, stacks another year, starts a fresh year for the second person, or renews automatically. The product proposal recommends blocking claims by existing Plus subscribers without consuming the gift. Use that as the V1 baseline, and confirm how lifetime, preview, and device access fit the rule. Explain finalized renewal and refund terms before purchase.

### FAQ content

- Does the buyer need a Nubo account? Planned answer: no.
- Does this include a physical device? No; the device is a separate Amazon purchase.
- Can one recipient use iPhone and the other Android? Planned answer: yes.
- When does the year start, and when does the second person's access end?
- How does each person redeem, including a gift received on the same phone?
- What happens if someone already has Plus or an active app subscription?
- Can I schedule delivery? Show only options actually configured in Gift Up.
- Where can I get help, and what are the finalized refund terms?

Render these answers as static HTML. Link to `/app/`, `/pricing/`, `/privacy-policy/`, `/terms-of-use/`, and `/contact/` with descriptive anchors.

### Related marketing changes

- Add a compact **Gift Nubo Plus** link to `/pricing/`, retaining the existing annual subscription offer. This informational link opens `/gift/`; the gift page purchase CTA opens Gift Up.
- Add focused gift questions to `/faq/` after terms are final.
- Link the gift offer from appropriate existing navigation without restructuring the whole site.
- Update public machine-readable summaries, such as `public/llms.txt` and `public/llms-full.txt`, when the offer actually launches.
- Update privacy and terms pages to reflect the verified gift provider and account flow. Do not claim the site collects no personal information once the account frontend processes identity and gift codes.
- When gifting is enabled, use **Gift Nubo Plus** for the gift page's mobile sticky purchase action, linking directly to the configured Gift Up checkout. Show the finalized $59.99 single-purchase price nearby. Keep the device's **Buy on Amazon** CTA on its own offer card. When gifting is disabled, retain the existing device CTA.

### Metadata and optional thank-you page

Continue using `BaseLayout` for title, description, canonical URL, Open Graph, Twitter card, and JSON-LD. The gift landing page now describes two products, so use an appropriate collection with distinct offers rather than relabeling the existing device Product as a Plus gift. Structured price and checkout URL must match the visible offer and configured Gift Up item. Do not assert availability before activation.

If Gift Up is configured to return buyers to `/gift/thank-you/`, keep that page generic: explain where to find the gift, scheduled-delivery behavior, and support. Do not show **Payment verified** or account entitlement confirmation merely because the page was opened. Do not place buyer email, gift code, or order details in its URL. Extend `BaseLayout` with an optional robots prop for this page and explicitly exclude it from the marketing sitemap.

## 6. Account layout and account screen

Use a dedicated `AccountLayout.astro` with the Nubo logo, a simple main region, support, privacy, and terms links. Reuse the visual system through a small shared style source or carefully copied initial tokens. Do not import the whole marketing `BaseLayout`: it currently adds marketing analytics, breadcrumbs, hash scrolling, and the mobile purchase CTA.

Account pages need unique titles and descriptions, a canonical URL on the account host, generic social metadata, `noindex, nofollow`, and `Referrer-Policy: no-referrer`. Configure equivalent hosting headers where supported. Index controls are not authentication: all personal data and mutations require backend authorization. Do not include the account routes in a sitemap.

The account page should render these states:

| State | UI |
|---|---|
| Loading | Announced status and a restrained loading placeholder |
| Authenticated, no Plus | Account email, **Nubo Plus is not active**, **Redeem a gift** |
| Authenticated, active Plus | Account email, backend-provided access end date and source label, gift action |
| No session or expired session | Instructions to open Nubo, then Settings > Account > Manage Account |
| API unavailable | Reassuring retry action and support link |
| Signed out | Confirmation and app sign-in instructions |

Show email so a person can confirm which account receives the gift. Display no baby profile, care history, purchaser identity, or other claimant identities. The interface must not treat the absence of a session as an instruction to create a separate website password account.

With JavaScript unavailable, explain that the account features need JavaScript and offer support. The marketing offer and external purchase link remain usable without JavaScript.

## 7. App-to-web session handoff

The proposal uses a short-lived, single-use token created by the authenticated mobile app through the backend. The frontend must never receive the app's normal access token in a URL.

Recommended static-host-compatible handoff:

```text
Mobile app obtains a one-time token from Nubo backend
  -> opens https://account.nubotracker.com/session/#token=<one-time-token>
  -> session page reads token into memory and immediately clears the fragment
  -> POST /v1/web-sessions/exchange
  -> backend sets secure HttpOnly session cookie
  -> frontend loads GET /v1/account
  -> navigates to an allowlisted account route
```

Using a fragment instead of `/session/<token>` is a proposed adjustment to the product document: it works with a concrete static Astro page and keeps the token out of the initial HTTP request. Coordinate this format with the backend and apps. If the original path format is retained, the selected host must explicitly route it and redact token-bearing access logs; the existing static Pages setup does not supply that behavior automatically.

Read the fragment only on the expected route. Clear it with `history.replaceState` before any external resource, diagnostics, or analytics could receive it. Never store session tokens in localStorage, sessionStorage, analytics, or console output. Do not apply the marketing layout's hash-scrolling script to these routes.

An optional continuation must be a named, allowlisted destination such as `account` or `redeem`, not an arbitrary redirect URL. A failed, expired, or reused token produces instructions to reopen Manage Account. Do not automatically keep exchanging the same token. If a response is lost after exchange, check `/v1/account` to determine whether the cookie was established before telling the user to restart.

Preferred deployment is same-origin account API routing, for example `account.nubotracker.com/v1/`, supplied by the backend host or proxy. An alternative sibling API host can work with `fetch(..., { credentials: 'include' })`, an exact account-origin CORS allowlist, credentials-enabled responses, and appropriate CSRF protection. Cookies should be host-only where possible. Agree on this before frontend API wiring; do not rely on a wildcard CORS policy or a broad cookie shared with the marketing host.

## 8. Redemption interaction

### Entry and preview

Keep **Enter gift code** visible as the default path and **Scan gift QR** as a secondary action. A recipient reading a gift email on the same phone must be able to paste the code without a camera.

1. Check the authenticated account.
2. Accept a Gift Up code or Nubo-issued token according to the agreed issuance contract.
3. Request a non-mutating gift preview from the backend.
4. Show the current account, product, number of eligible accounts, and timing implications.
5. Require an explicit **Redeem for this account** action.
6. Submit the authenticated claim and render the server result.

The preview may return an opaque short-lived `preview_id`; the final mutation uses it with an idempotency key. The backend revalidates all conditions during the final claim. A preview is not a reserved seat.

Suggested confirmation text for an unactivated gift:

> Redeem for user@example.com. This starts one year of Nubo Plus for this gift. One other Nubo account can claim access with the same end date.

For an activated gift, show the actual shared end date before confirmation. Show any overlap outcome supplied by the backend, especially when the account already has Plus. For an existing subscriber, follow the proposal's V1 recommendation: explain that Plus is already active and that this gift has not been redeemed, then offer support. If other overlap rules are not implemented, block that combination with a useful support message rather than guessing.

### Code and QR handling

- Use a labeled text input with a paste-friendly format, `autocapitalize="characters"`, `autocomplete="off"`, and spellcheck disabled.
- Normalize only rules explicitly supplied by the backend. Do not strip meaningful hyphens, confuse characters, or assume Gift Up and Nubo backup codes have the same format.
- Validate input length and supported structure for usability; leave authenticity and entitlement checks to the backend.
- QR scanning starts only after a button press and permission request. Prefer the rear camera and provide a stop action.
- Feature-detect native QR support and use a maintained, self-hosted decoder fallback for target browsers when needed. Select and verify its browser support at implementation time; load it only when scanning is requested.
- Stop all camera tracks after a scan, on cancellation, when the page is hidden, and before navigation. Clear the captured value from memory after completion.
- Accept only agreed QR formats. Parse URLs, require the exact trusted host and path, and extract the token without following the scanned URL automatically.
- Reject unrelated URLs, unsupported schemes, malformed codes, and oversized payloads with an input error. Never inject scanned text as HTML.
- Provide manual entry if permission is denied, the camera is unavailable, or decoding fails. Saved-image QR scanning is optional after V1.

### Gift link before authentication

An approved link format is `https://account.nubotracker.com/gift/redeem/#token=<gift-token>`. The page reads and clears the fragment, then asks for authentication if necessary. It does not consume the gift by opening the link.

For V1, an unauthenticated recipient can copy the gift code, open Manage Account from Nubo, and paste it. Do not promise automatic preservation across the external app/browser handoff until the apps and backend provide an authenticated continuation flow. Do not persist the gift secret in browser storage to approximate that behavior.

## 9. Frontend-facing API contract to agree with the backend

These are proposed Nubo endpoints, not Gift Up endpoints and not APIs implemented by this document. The owner can rename them as long as the semantics remain clear. Use ISO 8601 UTC timestamps and stable machine-readable error codes.

| Endpoint | Frontend request | Required backend result |
|---|---|---|
| `POST /v1/web-sessions/exchange` | One-time token, allowlisted continuation | Sets session cookie; returns permitted route and session expiry |
| `GET /v1/account` | Session cookie | Display identity, effective Plus status, sources, server time, CSRF token |
| `POST /v1/gifts/preview` | Code or token, session cookie, CSRF token | Verified product and eligibility, timing, seat count, overlap result, preview ID |
| `POST /v1/gifts/redeem` | Preview ID, session cookie, CSRF token, idempotency key | Authoritative claim and entitlement result |
| `GET /v1/gifts/redemptions/{operation_id}` | Session cookie; operation ID is the redemption idempotency key | Outcome for this account after an uncertain response |
| `POST /v1/web-sessions/logout` | Session cookie and CSRF token | Revokes web session and clears cookie |

The gift-preview POST avoids putting a gift secret in query strings. Preview must not decrement seats, start the year, or mark the provider gift redeemed. Sensitive API responses require `Cache-Control: no-store` and must not be cached by a service worker.

Example account response shape:

```json
{
  "account": { "display_email": "user@example.com" },
  "plus": {
    "active": true,
    "expires_at": "2027-12-25T23:59:59Z",
    "sources": [{ "type": "gift", "label": "Nubo Plus gift" }]
  },
  "session": { "expires_at": "2026-10-02T22:00:00Z" },
  "server_time": "2026-10-02T21:00:00Z",
  "csrf_token": "opaque-session-bound-value"
}
```

Example gift preview shape:

```json
{
  "preview_id": "opaque-short-lived-preview",
  "product_id": "nubo_plus_1yr_2seat",
  "product_name": "1 year of Nubo Plus for up to 2 people",
  "eligibility": "eligible",
  "claimed_seats": 0,
  "maximum_seats": 2,
  "first_activation_deadline": "2027-10-02T23:59:59Z",
  "first_redeemed_at": null,
  "shared_expires_at": null,
  "starts_year_on_claim": true,
  "existing_access_effect": "gift_only"
}
```

Example successful mutation response:

```json
{
  "operation_id": "client-generated-uuid",
  "status": "redeemed",
  "gift": {
    "claimed_seats": 1,
    "maximum_seats": 2,
    "shared_expires_at": "2027-10-02T21:05:00Z"
  },
  "entitlement": {
    "type": "nubo_plus",
    "source": "gift",
    "expires_at": "2027-10-02T21:05:00Z"
  }
}
```

These dates illustrate response shape only. The server calculates calendar-year duration, leap-day behavior, and the meaning of the activation deadline. In particular, decide whether the second user can claim after the first-activation deadline but before the shared access end date. Recommended interpretation: the deadline limits the first activation; the second claim remains possible during the activated year.

The account response describes effective access across sources; the redemption response describes the gift's access. If an existing lifetime or subscription entitlement is longer, do not imply the gift shortens it or automatically cancels store billing. Allow a nullable effective-access end date for lifetime access and supply a clear display label.

### Errors and uncertain outcomes

Use an error envelope such as `{ "error": { "code": "GIFT_FULL", "request_id": "opaque-support-reference" } }`. Do not echo full tokens or gift codes. The frontend maps known codes to reviewed copy.

| Code or condition | Frontend behavior |
|---|---|
| `SESSION_REQUIRED`, `SESSION_EXPIRED` | Reopen Manage Account; do not submit further mutations |
| `SESSION_TOKEN_INVALID`, `SESSION_TOKEN_EXPIRED`, `SESSION_TOKEN_USED` | Check existing session if appropriate, then offer a fresh app handoff |
| `GIFT_INVALID`, `GIFT_WRONG_PRODUCT` | Ask the user to check the code; offer support |
| `GIFT_NOT_YET_VALID` | Display the backend-provided valid-from time |
| `GIFT_PAYMENT_PENDING` | Explain that the gift is not ready; grant no access |
| `GIFT_VOIDED`, `GIFT_REFUNDED` | Explain that it cannot be redeemed; offer support |
| `GIFT_ACTIVATION_DEADLINE_PASSED` | Explain that the first-activation window has ended |
| `GIFT_ACCESS_ENDED` | Explain that the activated gift period has ended |
| `GIFT_FULL` | Explain that both accounts have claimed; expose no identities |
| `already_claimed` success | Show existing access; do not consume another seat or extend dates |
| `PREVIEW_EXPIRED`, `GIFT_CHANGED` | Refresh preview and request confirmation of changed terms |
| `GIFT_OVERLAP_UNSUPPORTED` | Explain the supported next step; do not invent stacking rules |
| HTTP 429 | Honor `Retry-After`; preserve local form state while the page is open |
| Timeout or network interruption during redemption | Show **Checking your redemption**, query operation status, and retry only with the same key |
| Unknown error or service outage | Neutral retry/support copy with a non-sensitive request reference |

Generate an idempotency key once for each confirmed attempt and keep it for retries in memory. Disable duplicate submissions while pending. A timeout does not mean the claim failed. After a reload loses the operation key, re-preview the gift and use the backend's same-account claim detection; do not show a failure solely because the provider balance is now zero.

## 10. Gift Up issuance and Nubo redemption boundary

Choose one customer-visible code system before implementing the form:

**Recommended V1:** Gift Up supplies the code and delivery. Nubo accepts that code, verifies it through its backend, and associates it with one internal two-account gift. This minimizes custom gift email and QR generation work.

**Alternative:** Nubo issues its own token, backup code, and QR after verifying a Gift Up sale. The backend then owns delivery integration and scheduled-send coordination. Do not promise Gift Up will automatically print a Nubo-specific QR or deliver a backend-generated token without validating that configuration.

The frontend accepts whichever code contract is selected. It never synthesizes an entitlement token or translates dollar balance into seats.

Recommended backend integration semantics for discussion: convert the purchased provider gift to an internal Nubo gift once, at first activation, and track both user claims internally. The second recipient then uses that same internal gift association even if the provider gift has been marked fully redeemed. Do not require a positive Gift Up balance for every later claim or every entitlement refresh.

The conversion needs backend reconciliation across provider redemption and local storage; it is not a single database transaction across both systems. The frontend needs a pending/checking state if conversion cannot complete immediately. Refund and revocation events must also reach the backend so a cached preview cannot authorize a withdrawn gift.

## 11. Proposed files and dependencies

| File or directory | Responsibility |
|---|---|
| `src/data/plusGift.ts` | Public launch configuration and offer copy; no secrets |
| `src/components/PlusGiftOffer.astro` | Reusable public gift offer and external CTA |
| `src/pages/gift.astro` | Two gift choices, steps, FAQ, metadata |
| `src/pages/gift/thank-you.astro` | Optional generic provider-return page |
| `src/pages/pricing.astro`, `src/pages/faq.astro` | Focused gift references |
| `src/layouts/BaseLayout.astro` | Optional robots and explicit sticky-CTA props if required |
| `src/components/MobileStickyCTA.astro` | Existing variants plus deliberate gift-page behavior |
| `account-web/astro.config.mjs` | Separate static account site, account origin, no sitemap |
| `account-web/src/layouts/AccountLayout.astro` | Account shell, privacy metadata, local fonts, no marketing CTA |
| `account-web/src/pages/account.astro` | Account and access status shell |
| `account-web/src/pages/session.astro` | One-time session exchange shell |
| `account-web/src/pages/gift/redeem.astro` | Entry, scan, preview, claim, result shell |
| `account-web/src/lib/api.ts` | Credentialed API wrapper, CSRF, response validation, timeouts |
| `account-web/src/lib/contracts.ts` | Typed account, gift, operation, and error contracts |
| `account-web/src/scripts/session.ts` | Session handoff and recovery |
| `account-web/src/scripts/account.ts` | Account loading, display, logout |
| `account-web/src/scripts/giftRedemption.ts` | Form state, confirmation, idempotency, result |
| `account-web/src/lib/qr.ts` | Trusted QR parsing and camera lifecycle |
| `account-web/src/styles/` | Compact brand styles and account-specific components |
| `account-web/dev/fixtures/` | Development-only contract fixtures, excluded from production |

Use Astro components and small TypeScript browser modules. A React or Vue dependency is unnecessary for the proposed screens. Add a QR decoder only after verifying native support on target devices. Validate API responses at runtime as well as with TypeScript; treat unrecognized shapes as recoverable service errors.

Marketing public configuration can include `enabled`, hosted checkout URL, account redemption URL, display price, currency, and finalized terms. Keep `enabled` false until launch prerequisites pass. The account build may expose `PUBLIC_NUBO_API_ORIGIN` and validated app-return destinations. Anything prefixed `PUBLIC_` is visible to visitors: no Gift Up secret, Stripe secret, webhook secret, or private app credential belongs there.

When disabled, omit the unreleased Plus offer and structured-data offer, preserving the existing device gift page. Never ship a demo checkout URL or a placeholder gift button. Production API configuration should fail the build if missing; a development fixture mode must not silently replace a broken production API.

## 12. Accessibility, privacy, and performance

- Make account email, gift terms, shared end date, and the final claim button easy to scan on a narrow phone screen.
- Use semantic forms, explicit labels, field-level errors, keyboard controls, visible focus, and sufficient contrast. Do not use color alone for eligibility.
- Announce loading and success with a polite live region; focus an error summary after failed submission. Keep input values when a correctable error occurs.
- Format server timestamps with an agreed timezone and clearly state it where a cutoff matters. Do not compute entitlement dates from the device clock.
- Respect reduced motion and avoid animated waiting states that distract from confirmation.
- Protect the form from sticky controls and the mobile keyboard at 320 CSS pixels and at 200% text zoom.
- Keep account APIs uncached, omit third-party analytics from account V1, and never log codes, tokens, emails, or claimant data.
- Marketing Plausible may record gift-page views and outbound gift intent using a fixed event and non-sensitive product label. Do not capture provider query strings. A checkout click is not a completed purchase.
- Any purchase-completion analytics must originate from backend-verified sale data; it is outside this frontend scope.
- Load camera code only on demand. Keep marketing content and marketplace links independent of account JavaScript.
- Use self-hosted fonts and existing responsive WebP assets; lazy-load secondary images and reserve image dimensions.
- Ensure sign-out clears all rendered account data. Refresh account state on browser back/forward restoration and after an app return; backend authorization remains authoritative.

## 13. Phased implementation

### Phase 1: Agree contracts and launch configuration

Deliver a finalized frontend contract and fixture set before API-dependent implementation.

- [ ] Confirm price, currency, two-account terms, first-activation deadline, second-claim timing, and renewal wording.
- [ ] Define existing-subscription, lifetime, preview, and device-access overlap behavior.
- [ ] Select Gift Up code or Nubo token issuance and approve the gift email redemption instructions.
- [ ] Supply test and live hosted checkout URLs with the correct product selection.
- [ ] Confirm account hosting, API origin, cookies, CSRF, CORS if needed, and app-return behavior.
- [ ] Agree the app session URL format and Settings entry point.
- [ ] Provide fixture responses for all error and success states listed above.

This phase can complete while the owner builds the backend. Unresolved commercial terms remain explicit placeholders in fixtures, never public claims.

### Phase 2: Marketing page behind launch configuration

- [ ] Add the reusable Plus offer and two-choice gift layout.
- [ ] Keep existing Amazon links and device information.
- [ ] Add gift steps, FAQ, metadata, and finalized terms references.
- [ ] Use **Gift Nubo Plus** for the gift-page header, offer-card purchase action, and mobile sticky CTA; retain **Buy on Amazon** on the device card.
- [ ] Prepare pricing, FAQ, navigation, and public-summary updates.
- [ ] Add the optional generic thank-you page only if the provider return is configured.
- [ ] Verify enabled and disabled builds and confirm no provider secret is bundled.

Deliver a local preview using the test checkout destination. Keep the live offer disabled until Phase 5.

### Phase 3: Account frontend against development fixtures

- [ ] Set up the second Astro build and dedicated layout.
- [ ] Implement account loading, unauthenticated states, and sign-out UI.
- [ ] Implement session exchange and recovery against fixture responses.
- [ ] Build code entry, trusted QR parsing, camera fallback, preview, confirmation, and results.
- [ ] Implement the API wrapper, response validation, CSRF handling, and retry states.
- [ ] Verify loading, error, active-access, repeat-claim, second-claim, and full-gift scenarios.
- [ ] Keep fixtures and test controls development-only.

This phase verifies frontend behavior, not payment verification or backend enforcement.

### Phase 4: Connect the owner's staging backend

- [ ] Replace fixture transport with the real staging API.
- [ ] Exercise app-to-browser session exchange on iOS and Android.
- [ ] Complete Gift Up test purchase, backend verification, preview, first claim, and second claim.
- [ ] Verify same-user repeat claims and reject a third unique account.
- [ ] Exercise lost responses, server retries, expired sessions, and already-consumed provider gifts.
- [ ] Confirm overlap outcomes, refund/void rejection, camera behavior, and app entitlement refresh.
- [ ] Check account data does not appear in generated HTML, logs, or caches.

The owner verifies backend payment and concurrency behavior. Frontend QA verifies that the UI respects those results and does not grant access optimistically.

### Phase 5: Launch readiness and production rollout

- [ ] Confirm final published terms, support workflow, and current mobile storefront requirements for the exact account-link behavior.
- [ ] Verify live checkout price, gift delivery instructions, redemption format, and production backend configuration.
- [ ] Deploy account frontend and backend dependencies before enabling the marketing offer.
- [ ] Validate HTTPS, static route serving, noindex metadata, security headers, cookies, and production session exchange.
- [ ] Enable the public gift offer, then publish marketing metadata and related links together.
- [ ] Check the deployed gift page and provider handoff on mobile and desktop.
- [ ] Complete an owner-approved production smoke purchase/redemption under the agreed operational process.

Frontend release alone does not establish mobile-store compliance or a working entitlement system. Those are owner launch dependencies, not tasks to implement in this repository.

## 14. Verification plan

For the documentation-only change that introduces this plan, run the existing root build. No browser review is needed until website code or visible page copy changes.

For implementation, run `npm run build` from the marketing root and the account project. Start `npm run dev` for each and inspect the relevant pages in a browser. Test the production builds with `npm run preview` so development routing does not hide static-host problems.

| Scenario | Expected result |
|---|---|
| Gift disabled | Existing device offer works; no unreleased Plus price or broken gift CTA |
| Gift enabled, JavaScript disabled | Public terms and hosted purchase link remain usable |
| Hosted checkout link | Correct product and price; opens safely in a new tab |
| Direct thank-you URL visit | No payment verification or access assertion |
| Fresh app session | Correct account loads; URL token is removed |
| Expired/reused session token | Useful app reauthentication instructions |
| Valid unused gift | Clear confirmation, one claim, authoritative year end date |
| Second unique account | Same expiration as first account |
| Same account repeats | Existing result, no extra seat and no extension |
| Third account or two simultaneous final-seat attempts | UI reflects backend rejection; no claimant disclosure |
| QR contains unrelated URL | Rejected without navigating to it |
| Camera denied/unavailable | Manual code entry stays available |
| Gift has expired, is voided, refunded, or unpaid | Backend reason displayed; no access granted |
| Existing Plus access | Backend overlap decision shown before claim |
| Lost redemption response | Operation lookup or same-key retry resolves outcome |
| Logout or browser history restoration | No stale personal content remains visible |
| Gift provider consumed after first activation | Second eligible account still works through Nubo's internal gift association |

Use targeted automated checks for the high-impact logic: QR URL allowlisting, response parsing, idempotent retry behavior, and session/redemption state transitions. Use browser integration checks for session cookies and claim flows. Backend concurrency tests belong to the owner's backend suite; frontend tests should not reproduce an imaginary backend implementation.

Verify with keyboard-only navigation, a screen reader smoke check, mobile widths of 320 and 390 pixels, tablet, and desktop. Test real Safari on iPhone and Chrome on Android for camera permission, keyboard, app handoff, and cookies. Inspect generated marketing metadata and ensure the account build contains only generic HTML, not identity or entitlement fixtures.

## 15. Rollback and definition of done

If new purchases must pause, disable the public Plus gift CTA and corresponding structured offer, then rebuild the marketing site. Keep the account redemption site available for people who already bought gifts. Backend eligibility and support operations determine whether existing gifts can still be redeemed.

Frontend implementation is complete when:

1. Public gift content, price, provider destination, metadata, and terms agree.
2. Existing Amazon gifting and store subscription paths still work.
3. The marketing build stays static and its existing deployment still succeeds.
4. The separately hosted account frontend authenticates through the agreed session handoff.
5. Manual entry and QR scanning reach backend-verified preview and explicit confirmation.
6. Two-account, repeat-claim, expiry, overlap, and uncertain-outcome states display correctly.
7. No frontend code handles payment credentials, privileged provider APIs, or entitlement calculations.
8. The owner has supplied and validated the staging and production backend contracts.
9. Relevant builds, accessibility checks, and iOS/Android browser checks pass.
10. Purchased gifts retain a working redemption and support path when new sales are disabled.

## 16. Reference material

- [Nubo Plus Gift Proposal](/Users/guru/Downloads/Nubo_Plus_Gift_Proposal.md): proposed product rules and account entitlement model.
- [Gift Up hosted checkout](https://help.giftup.com/article/28-linking-to-a-checkout-gift-up-hosts-for-you): external purchase destination.
- [Gift Up API documentation](https://developer.giftup.com/api): backend order and gift-card lookups, authentication, and events.
- [Gift Up webhooks](https://help.giftup.com/article/47-webhooks): server notifications and signature verification.
- [Gift Up payments](https://help.giftup.com/article/32-how-and-when-you-get-paid): connection to the merchant's payment provider.

Provider references were reviewed during planning on October 2, 2026. Recheck exact API contracts and configured checkout behavior when implementing. This document proposes frontend work only and does not approve a new price, launch the gift product, or modify the backend.
