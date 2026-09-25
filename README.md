# Nekaf website

Marketing site for Nekaf (AI voice agents for the automotive aftermarket: independent garages, dealerships, body shops
and tire centers) in English, Dutch and German. Built with Next.js 16 (App Router), React and TypeScript and exported as
**static HTML**: there is no server runtime, no API and no database. Any static host can serve the `out/` folder.

The same code also builds the Brons site (blue palette, Brons name, www.brons.ai) through a build-time brand switch; see
"Two brands, one codebase" below.

Live: https://www.nekaf.ai (GitHub Pages, deployed automatically from `main`).

## Quick start

```bash
npm ci             # Node 22 or newer
npm run dev        # http://localhost:3000, hot reload
```

Production build (static export) and a local preview of exactly what gets deployed:

```bash
NEXT_PUBLIC_BASE_PATH="" NEXT_PUBLIC_SITE_URL="https://www.nekaf.ai" npm run build:static
NEXT_PUBLIC_BASE_PATH="" npm run preview        # http://localhost:3300
```

`build:static` runs `next build` (writes `out/`), then `tooling/post-export.js` (sets the `lang` attribute on the Dutch and
German pages; moves the framework script tags into a small loader that attaches them 1.2 s after the load event, and the
secondary fonts into `fonts/late.css` loaded the same way) and `tooling/purge-css.js` (drops the rules of the design-system
stylesheet that no page or script uses). A class that is only assembled at runtime by string concatenation must also appear
somewhere as a full string literal, or the purge removes it; check a page with `node tooling/purge-check.js out/<page>/index.html`.

## Environment variables

All are read at build time only. On GitHub they are repository variables (Settings > Secrets and variables > Actions >
Variables) and the workflow passes them to the build.

| Variable | Meaning | nekaf.ai | brons.ai |
|---|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Folder the site lives under; must be absent (not empty) to serve from the domain root | absent | absent |
| `NEXT_PUBLIC_SITE_URL` | Public origin used for canonical URLs, sitemap, social images and structured data | `https://www.nekaf.ai` | `https://www.brons.ai` |
| `NEXT_PUBLIC_BRAND` | Brand to export: `nekaf` (default) or `brons` | absent | `brons` |
| `CUSTOM_DOMAIN` | Written to `out/CNAME` for the GitHub Pages custom domain | `www.nekaf.ai` | `www.brons.ai` |

Every internal link and asset path goes through `lib/base.ts` (`BASE`, `SITE_URL`, `asset()`), so nothing else needs to
change when the base path changes.

## Two brands, one codebase

The source, stylesheet and committed assets are Nekaf (green). Brons (blue) is derived at export time:

- `tooling/brands.js` defines each brand: name, domain, primary and dark colours, and a palette map from every green of the
  design system to a blue of the same depth.
- `tooling/post-export.js` (part of `npm run build:static`) applies the brand when `NEXT_PUBLIC_BRAND` is not `nekaf`: it
  substitutes the palette and the name in every text file of `out/`, renames the paths that carry the default name
  (`/product/ask-nekaf` becomes `/product/ask-brons`, the `nekaf-vs-*` articles become `brons-vs-*`), swaps in that brand's
  social images and renders its favicons. Every replacement keeps the same length, so nothing else in the export changes.
- Social images are rendered per brand ahead of time: `node tooling/og.js` writes `public/og` for Nekaf and, with
  `NEXT_PUBLIC_BRAND=brons` and a Brons build served locally, `public/og-brons`. Both folders are committed; the export keeps
  only the one that belongs to the brand being built.
- The animated wheel reads its colours from the stylesheet tokens, so it follows the palette without code changes.
- Hosting: one GitHub repository per domain, both with the same code. `ppleeuw/nekaf` deploys www.nekaf.ai and
  `ppleeuw/brons` deploys www.brons.ai; the only difference is the repository variables above. Push the same commits to
  both remotes (`git push origin main && git push brons main`).

## Hosting on GitHub Pages with a custom domain

Both sites run this way. For a new domain:

1. Set the repository variables from the table above (delete `NEXT_PUBLIC_BASE_PATH`).
2. Set the custom domain in Settings > Pages (or with the API) and tick "Enforce HTTPS" once the certificate is issued.
3. DNS at the registrar: `www` as a CNAME to `ppleeuw.github.io`; the apex as A records to GitHub's Pages IPs
   (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and AAAA records to 2606:50c0:8000::153,
   2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153, so the apex redirects to `www`.
4. Push to `main` (or run the workflow manually). The deploy takes about two minutes.

### Any other static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, nginx)

- Build command: `npm run build:static` with `NEXT_PUBLIC_BASE_PATH=""` and `NEXT_PUBLIC_SITE_URL=https://www.nekaf.ai`.
- Publish directory: `out`.
- Pages are folders with an `index.html` (`trailingSlash: true`), so the host must serve `/pricing/` from
  `/pricing/index.html` and redirect `/pricing` to `/pricing/`. Netlify, Vercel and Cloudflare Pages do this by default;
  for nginx use `try_files $uri $uri/ =404;`.
- Serve `.mp4` with range-request support (all the hosts above do); the hero clips rely on it.
- Long cache headers for `/_next/static/` (hashed file names), short ones for HTML.

### After the move

- Add the domain to Google Search Console and Bing Webmaster Tools; verification meta tags go in
  `app/[[...slug]]/page.tsx` (`generateMetadata`) or as DNS records.
- `public/robots.txt` and `app/sitemap.ts` pick up `NEXT_PUBLIC_SITE_URL` automatically.
- `public/llms.txt` and `public/site.webmanifest` reference `https://www.nekaf.ai`.

## Placeholders to replace before launch

- **Customers and quotes.** Autobedrijf van Nuland (Volkel), Broekema (Zweeloo and Schildwolde) and Legacy Auto Clinic
  (Castle Rock, Colorado) are real businesses found online and used as placeholders. Their logos, the quoted people (Bas,
  Marieke, Dave, generated portraits in `public/assets/gen/person-*.webp`), the customer stories and every number on the
  proof section and the story pages are illustrative and were not measured at these businesses. Swap them for real
  customers, with permission, before the site goes live (`content/*.ts`, `content/shared.ts`, `content/articles.json`).
- **Sample call.** The recordings `public/assets/demo-call-{en,nl,de}.mp3` are the September 2026 demo calls (the German
  site plays the English one) and the `demo.transcript` arrays in `content/en.ts`, `nl.ts`, `de.ts` follow them (timings in
  seconds). The agent introduces itself with the Brons name in the audio, so on the Nekaf site the transcript and the recording
  differ in that one word. When replacing a recording, trim the lead-in, update the transcript and the `duration` label
  together, and rerun `tooling/og.js` for the home social images, which show the demo block.
- **Demo lines.** `content/shared.ts` holds the Dutch and US demo numbers; the structured data in `app/[[...slug]]/page.tsx`
  repeats them.
- **Founder bios** (`content/*.ts`, `about.founders`): drafted from public profiles, to be checked by both founders.
- **Contact and booking.** `hello@nekaf.ai`, `privacy@nekaf.ai`, `legal@nekaf.ai`, the LinkedIn page and `app.nekaf.ai`
  (sign-in) are placeholders. The demo page shows a "Send a demo request" mail button until Cal.com links are filled in at
  `CAL_LINKS` in `content/shared.ts` (then every "Book a demo" link opens the Cal.com pop-up).
- **Analytics.** `components/Consent.tsx` has an empty PostHog key, so nothing is loaded even after consent. Put the Nekaf
  project key there (EU host) to switch analytics on; the Cookie Policy already describes it.
- **Legal entity.** The policies name Nekaf B.V., Amsterdam. Adjust once the company is registered.
- **Fonts.** GT America (Standard and Mono) from Grilli Type needs a web licence for the domain before launch; Fraunces
  (logo) is open source.

## Where things live

- `app/[[...slug]]/page.tsx` renders every page in every language from one route (`generateStaticParams` lists them all).
  English at `/`, Dutch under `/nl`, German under `/de`. Metadata (canonical, hreflang, Open Graph images, JSON-LD) is
  built there too. `app/layout.tsx` holds the shell, `app/sitemap.ts` and `app/robots.ts` the crawler files.
- `content/en.ts`, `content/nl.ts`, `content/de.ts`: all copy and page data, typed by `content/types.ts`.
  `content/shared.ts`: asset paths and constants (phone numbers, e-mail, Cal.com links, logos, videos, integrations).
  `content/faqs.ts`: FAQs per page and language. `content/legal.ts`: privacy policy and terms. `content/policies.ts`:
  safety and compliance page and cookie policy. `content/articles.json`: resource articles. `content/image-sizes.json`:
  intrinsic image sizes (regenerate with `node tooling/image-sizes.js` after adding images).
- `components/site/Pages.tsx` composes every page from the templates in `components/tpl/`.
  `components/home/` holds the home-page specials: `Hero.tsx` (video hero with the call bubbles), the bento cards and the
  "Meet the console" section. `components/mockups/` holds the product mock-ups (`Wheel.tsx` is the animated tire).
  `components/Logo.tsx` is the tire mark and wordmark. `components/Nav.tsx`, the footer, `components/CalBooking.tsx`
  (Cal.com pop-up on every "Book a demo" link) and `components/tpl/DemoBooking.tsx` (inline calendar on `/demo`).
- `app/styles/site.css` is the compiled design-system stylesheet, `app/styles/extra.css` holds the site's own additions
  (logo font, hero bubble animation) and `app/styles/mockups.css` is generated: run `npm run css:mockups` whenever you add
  Tailwind classes to components, then rebuild. `public/fonts/` holds the self-hosted fonts.
- `public/media/`: the three hero clips (`heroN.mp4` desktop, `heroN-720.mp4` phones, `heroN-poster.jpg` first frames).
  `public/assets/`: logos, badges, photos (WebP), integration icons, generated clips and posters (`gen/`), demo call
  recordings. `public/og/`: social images per page and language (regenerate with `node tooling/og.js` while the preview
  server runs; the tooling comment shows the command).

## Media

- Photos, posters and clips of workshops were generated with fal.ai (FLUX 1.1 ultra stills, Veo 3.1 image-to-video):
  `node tooling/gen-nekaf.js images|videos|all [key ...]` with `FAL_KEY` set. The prompts live in the script; keys that are
  already in `public/assets/gen/done-nekaf.json` are skipped, delete a key there to regenerate it.
- The three hero clips (callers at home) come from an earlier project; see `components/home/Hero.tsx` for the timings.
- The logo: `components/Logo.tsx` (mark plus wordmark), `public/icon.svg` and `public/assets/logo-mark.svg` (mark only),
  favicons from `node tooling/favicon.js`.

## Checks

- `npm run check` (after `npx playwright install chromium` once) opens every page of a local preview on port 3300 and
  reports console errors, failed requests and broken images.
- `node tooling/opshots.js` screenshots every page for a visual pass.
- `node tooling/seo-audit.js` writes a CSV of titles, descriptions, canonicals and structured data from the build.
- `node tooling/prune-public.js` lists (and with `--delete` removes) files in `public/` that no page references.

## Repository notes

- `main` deploys automatically; work on branches and merge.
- `out/`, `.next/` and `tsconfig.tsbuildinfo` are build artefacts and are git-ignored.
