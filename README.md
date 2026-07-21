# Winners Chapel International Peterborough — website rebuild

Next.js 15 (App Router) + TypeScript + Tailwind CSS. Rebuilt from the previous Bootstrap/React site,
keeping only the parts of the old codebase that were actually live in production.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example`. Two separate integrations:

- **Jerur backend** (`JERUR_NEXT_BASE_URL`, `JERUR_NEXT_API_KEY`) — the external service that owns
  church settings, sliders, events, fellowship groups, and regular service times. This site only reads
  from it via the proxy routes under `app/api/*`.
- **Brevo** (`BREVO_API_KEY`, `USER_NAME`, `CHURCH_INBOX_EMAIL`, `TEAM`) — sends the contact, prayer
  request, and testimony form submissions as email. `USER_NAME` must be a Brevo-verified sender address.
  `CHURCH_INBOX_EMAIL` is where submissions actually land — the original site had a bug where this went
  back to the person who submitted the form instead of to the church; that's fixed here.

Without real values the site still runs — API calls fail gracefully and pages fall back to empty states
rather than crashing.

## What changed from the old site

- **Bootstrap → Tailwind**, with a warm indigo/gold/sage design system instead of the previous template look.
- **Everything was a client component before** (`'use client'` on the homepage, data fetched after page load).
  Pages are now Server Components by default and fetch data server-side, so content is actually in the
  initial HTML for SEO and there's no loading flash. Only genuinely interactive pieces (nav toggle, hero
  carousel, forms, FAQ accordion) are client components.
- **Dead code removed.** The old project had a full Mongoose/MongoDB layer (`models/`, `services/`,
  `connectDb.js`) that nothing actually used — the live site was already a thin client of an external
  backend (Jerur) via `axios`. None of that dead code was carried over.
- **The contact form was broken on the live site** — imported but never rendered, and the component itself
  had no submit handler. It's fixed and wired up here.
- **A real bug in the email notification routes** — prayer request / testimony / contact notifications were
  being sent back to the person who submitted the form instead of to the church. Fixed via `CHURCH_INBOX_EMAIL`.
- **WOFBI registration was fake on the live site** — the form's submit handler only did `console.log(formData)`
  and showed a fake success message; nothing was actually sent anywhere. Fixed — it now posts to
  `/api/email/wofbi-registration` and emails the church.
- **Added the "Resources" nav dropdown** (`/resources/bfc`, `/resources/wofbi`) — this existed on the live
  site's navbar but was missed in the first pass of this rebuild; added after a second review of the original
  codebase.
- **Added `/free-transport`** — same reason, found on a second pass through the original site (linked from
  a homepage tile grid rather than the main nav, which is why it was easy to miss). Now in the footer.
- **All data fetching now goes through hooks + SWR**, including on pages that render server-side for SEO.
  See "Data fetching pattern" below for how that works without losing SSR content.

## Data fetching pattern

Every page that reads Jerur data (`app/page.tsx`, `fellowship`, `events`, `service-times`, `prayers`) follows
the same shape:

1. The page itself is an async Server Component. It calls a function from `lib/server-data.ts` (not the axios
   client directly) to fetch data for the initial HTML — this is what keeps content visible to search engines
   and avoids a loading flash.
2. That data is passed as `fallback` into `<SwrProvider>` (`components/providers/swr-provider.tsx`), which is
   just `SWRConfig` under the hood.
3. The actual list/content is rendered by a client component using the matching hook (`useSettings`,
   `useRegularServices`, `useFellowship`, `useEvents`, `usePrayerTimes`) from `hooks/`. Because the SWR key
   matches the fallback key exactly, the hook hydrates instantly with the server-fetched data and then behaves
   like normal SWR from there — revalidation, caching, deduping, etc.

No component calls `lib/api-client.ts` directly except `lib/server-data.ts` and the route handlers in
`app/api/*` themselves — that's the one legitimate place for it, since those routes exist to proxy to Jerur.

## Known gaps — need a decision from whoever runs the Jerur backend

- **No read endpoint for approved testimonies.** There's a POST to submit one, nothing to list them.
  `app/testimonies/page.tsx` currently shows manually-curated static content — replace once a real
  endpoint exists.
- **No API for food bank content.** `app/food-bank/page.tsx` is static copy pulled from the old site.
- **About page copy.** The Vision / Mission / Values structure is real; the descriptions were lorem ipsum
  on the live site and are placeholder text here too — needs real copy before launch.

## Project structure

```
app/                  Pages (App Router) and API routes
  api/                Proxy routes to Jerur + email submission routes
components/
  layout/             Navbar, footer, announcement bar, page header
  home/                Hero, quick access, welcome, get involved, testimony band
  illustrations/       Hand-built SVG illustrations (fellowship, events, food bank)
  forms/               Shared submission form used by contact/prayer/testimony
  faq/                 Accordion used on the New Here page
  ui/                  Button
hooks/                 SWR data hooks + form submission hooks
lib/                   axios client, error handling, email sending/templates, utils
types/                 Shared TypeScript types
```

## Illustrations

The three "get involved" card illustrations (fellowship, events, food bank) are hand-built SVG, not photos —
lightweight, on-brand, and easy to swap. Real photography of the congregation/building will outperform
illustration for these cards; treat them as a placeholder worth revisiting before launch, per our earlier
conversation.

## Not yet built

Admin/member-management dashboard — out of scope per the original brief (public site only).
