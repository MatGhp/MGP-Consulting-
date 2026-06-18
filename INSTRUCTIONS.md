# App Instructions

This file provides the primary operating instructions for the `company-website` app.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Motion + Lucide icons

## Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

## Local Development

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Open the app:
   - `http://localhost:3000`

## Build & Verify

- Type-check:
  - `npm run lint`
- Production build:
  - `npm run build`
- Preview production build:
  - `npm run preview`

## Project Structure (Key Files)

- `src/data.ts`
  - Main source for profile/copy content (hero, services, contact, FAQs, etc.).
- `src/components/`
  - UI sections (`Hero`, `Navbar`, `AvailabilityAndContact`, etc.).
- `src/utils/availability.ts`
  - Centralized dynamic availability date helpers (Europe/Berlin, next calendar month).
- `src/App.tsx`
  - App composition and modal interactions.

## Content Update Guidelines

- Prefer editing text/content in `src/data.ts` instead of hardcoding strings in components.
- Keep business-facing copy professional and concise.
- Preserve existing component IDs/classes when possible (used by navigation/automation).

## Availability Date Rule

Availability dates are dynamic and must not be hardcoded in components.

Use helper functions from `src/utils/availability.ts`:

- `getAvailabilityMonthYear()` → e.g., `July 2026`
- `getAvailabilityShortMonthYear()` → e.g., `July '26`
- `getAvailabilityBadgeText()` → e.g., `AVAILABLE FROM JULY 2026`
- `getAvailabilitySentence()` → e.g., `Available from July 2026`

## Deployment Notes

- Build artifacts are generated under `dist/`.
- Repository includes GitHub Pages deployment workflow (`.github/workflows/deploy-pages.yml`).
- Custom domain is managed via `public/CNAME`.

## Troubleshooting

- If build fails, run:
  1. `npm run lint`
  2. `npm run build`
- If the page renders stale content, clear browser cache and restart dev server.
- If dependency issues occur, remove `node_modules` + lockfile and reinstall.

## Definition of Done for Changes

Before merging content or code changes:

1. `npm run lint` passes
2. `npm run build` passes
3. UI smoke check confirms major sections render and navigation works
