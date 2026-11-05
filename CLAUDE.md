# VN13 website — instructions for Claude

Live site: https://vn-13.com — **this repository (`coffeeshop13/vn-13`) is the production site.**
The other repository `coffeeshop13/VN13` is an old Replit prototype that was never deployed; do not work there.

Read `docs/handoff-2026-11.md` first: it records the current state, decisions, market research and the open backlog.

## Stack and deploy
- Next.js 15 App Router, `output: 'export'` (static HTML in `out/`), `trailingSlash: true`, React 19, Tailwind 4.
- Hosting: Yandex Cloud Object Storage bucket `vn-13.com`.
- **Every push/merge to `main` deploys to production** via `.github/workflows/deploy.yml` (S3 sync, cache headers,
  legacy-URL redirects from `.github/yandex-website.json`, IndexNow ping, then live checks with
  `scripts/verify-live-redirects.mjs` and `scripts/verify-live-seo.mjs`).
- Work on a branch, open a PR, and merge only after the owner says so. Merging = publishing.

## Commands
- `npm ci`, `npm run build` (writes `out/`), `npm run lint`, `npx tsc --noEmit -p .`
- Local preview of the static build: `cd out && python3 -m http.server 5070`.

## SEO rules (the site's traffic depends on these)
- Never change a public URL without adding a 301 in `.github/yandex-website.json` and removing the old HTML in deploy.yml.
- Keep page titles, H1s, descriptions, alt texts and JSON-LD aligned with `docs/seo-keyword-map.md`.
  Change presentation freely; change copy that targets queries only deliberately.
- Every sitemap page must have exactly one `<h1>`, a canonical equal to its URL, server-rendered JSON-LD,
  and internal links ending with `/` (the live verifier fails otherwise).
- Brand detail pages need `Brand`, `WebPage` and `BreadcrumbList` JSON-LD.
- Do not invent facts. Company facts confirmed by the owner: founded 2013, 45+ retail partners, 22+ cities,
  official distributor in Russia of every brand in the portfolio (contracts confirmed Nov 2026),
  showroom/office in Moscow (Bolshaya Dmitrovka, 32с1), phone +7 926 602-20-89, info@vn-13.com, Telegram @vn13agency.

## Design system (rolled out on the homepage, Nov 2026)
- Scoped CSS in `app/home.css` under `.home-editorial`: Cormorant Garamond (headings, `.font-display`),
  Montserrat Variable (text), self-hosted via `@fontsource`. Tokens: ink `#1d1b18`, muted `#5d5851`,
  bronze `#76531f`, cream `#f7f4ee`, rule `#e3ddd3`.
- Patterns: `.rubric` labels, hairline rules instead of boxed cards, `.btn` (sentence case), `.text-link`.
- Body text weight 400 (the owner found thin text hard to read); keep spacing compact (owner dislikes big empty areas).
- Homepage components live in `components/home/`.

## Known pitfall
- `position: fixed` inside an element with `backdrop-filter`/`transform`/`filter` is positioned relative to that
  element. The header uses `backdrop-filter`, so overlays (e.g. `components/MobileMenu.tsx`) must be portalled to `<body>`.

## Communication
- The owner writes in Russian; answer in Russian, plainly, without flattery. Ask before anything that publishes.
