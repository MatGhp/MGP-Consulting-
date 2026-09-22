# mgp-consulting.de

Marketing website for IT Consulting - Mojtaba Ghanaat Pisheh, freelance Senior .NET & Azure developer in Frankfurt am Main.

Live: https://mgp-consulting.de

## Stack

- React 19 + TypeScript, built with Vite 6
- Tailwind CSS 4, Motion, Lucide icons
- Self-hosted fonts (`@fontsource`), no third-party requests apart from Cloudflare Web Analytics
- Hosted on GitHub Pages, deployed by GitHub Actions

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # TypeScript type-check
npm test           # Vitest unit tests
npm run build      # production build into dist/ (+ /impressum and /datenschutz copies)
npm run preview    # serve dist/ locally
```

## Where things live

| What | Where |
| --- | --- |
| All copy, profile data, services, projects, FAQ, legal texts | `src/i18n/translations/en.ts` and `de.ts` (typed by `schema.ts`) |
| Page sections | `src/components/` |
| Dynamic availability date | `src/utils/availability.ts` |
| Client-side routes (`/impressum`, `/datenschutz`) | `src/routes.ts`, `public/404.html`, `scripts/postbuild.mjs` |
| SEO metadata, JSON-LD, favicons | `index.html`, `public/` |

Every user-facing string exists in both languages; change `en.ts` and `de.ts` together.

## Deployment

- Every push to `main` runs type-check, tests and build, then deploys `dist/` to GitHub Pages. Pull requests run the same checks without deploying.
- Workflow: `.github/workflows/deploy-pages.yml`
- Custom domain: `public/CNAME`; DNS points to GitHub Pages with "Enforce HTTPS" enabled.
- The build uses `VITE_BASE_PATH=/`. For a `*.github.io/<repo>` URL set it to `/MGP-Consulting-/`.

### Rollback

Revert the offending commit on `main`, or re-run a known-good workflow run from the Actions tab.
