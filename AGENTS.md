# Repository Instructions for Coding Assistants

Use this file as the primary repository-level guidance for AI coding assistants such as VS Copilot and Codex.

## Purpose

This repository contains a marketing website for a freelance Senior .NET and Azure consultant.

When making changes, optimize for:

- a professional, credible presentation
- concise, business-friendly language
- minimal, low-risk implementation changes
- consistency across content, layout, and navigation

## Project Snapshot

- Framework: React 19 + TypeScript (strict)
- Build tool: Vite 6, tests with Vitest
- Styling: Tailwind CSS 4, self-hosted fonts via `@fontsource`
- UI libraries: Motion, Lucide icons
- Hosting: GitHub Pages

## Working Agreement

When editing this project:

1. Prefer the smallest change that solves the task.
2. Preserve the existing structure, naming, and visual tone unless the request clearly calls for a redesign.
3. Avoid unrelated refactors, mass reformatting, or dependency churn.
4. Match the existing code style in each file.
5. Keep public-facing text clear, factual, and business-focused.

## Where Changes Should Usually Go

### Content-first updates

All business copy and profile content lives in the typed translation files:

- `src/i18n/translations/en.ts` (English)
- `src/i18n/translations/de.ts` (German)
- `src/i18n/translations/schema.ts` (the `TranslationContent` type both files must satisfy)

Prefer these files for:

- hero copy
- services
- value propositions
- project experience
- collaboration FAQs
- contact and profile metadata
- Impressum and Datenschutzerklärung texts

Every user-facing string exists in both languages. Change `en.ts` and `de.ts` together in the same commit; adding a key means adding it to `schema.ts` first so `npm run lint` catches a missing translation.

Do not hardcode business copy in components unless there is a clear structural reason.

### Component updates

Use `src/components/` for layout and presentation changes.

Preserve existing IDs, anchors, and stable class hooks when possible because navigation and UI automation may depend on them.

### Routing

The site is a single page plus two client-side routes, `/impressum` and `/datenschutz`, resolved in `src/routes.ts`. GitHub Pages serves `public/404.html` for unknown paths, which redirects to `/?page=<path>`; only whitelisted paths are written back to the address bar. `scripts/postbuild.mjs` copies `dist/index.html` into `dist/impressum/` and `dist/datenschutz/` so both return HTTP 200. Add new routes in `src/routes.ts`, `scripts/postbuild.mjs` and `public/sitemap.xml` together.

### Availability logic

Availability dates must stay dynamic.

Never hardcode month or year values in components or copy when the existing helper functions already cover the use case.

Use helpers from `src/utils/availability.ts`:

- `getAvailabilityMonthYear()`
- `getAvailabilityShortMonthYear()`
- `getAvailabilityBadgeText()`
- `getAvailabilitySentence()`

## Change Priorities

When there is a trade-off, prefer the following order:

1. correctness
2. clarity
3. content consistency
4. visual stability
5. implementation simplicity

## Content Style Rules

Keep website copy:

- professional and direct
- confident but not exaggerated
- specific about .NET, Azure, integration, modernization, and delivery
- easy to scan
- free of filler, hype, and vague claims

### Copywriting rule

Rewrite all public-facing text in a natural, human, professional tone.

Avoid AI-sounding language, generic marketing phrases, inflated claims, and overly polished corporate wording.

The copy should sound like it was written by an experienced independent senior consultant, not by an AI marketing tool.

Preferred tone:

- clear
- direct
- calm
- confident
- professional
- practical
- specific
- human

Use concrete, believable language.

Prefer wording like:

- “What I can help with” instead of “Core delivery value”
- “Technologies used” instead of “Technical implementation tools”
- “I help teams modernize existing .NET systems step by step, without risky rewrites” instead of inflated modernization claims
- “I build Azure-based integration components that help systems exchange data reliably” instead of vague integration hype

Keep in mind:

- Keep the language business-friendly, but not exaggerated.
- Keep technical accuracy.
- Do not remove important .NET, Azure, Angular, DevOps, or integration keywords.
- Do not make the copy too casual.
- Do not make it sound like a startup landing page.
- Do not make it sound like a recruiter profile.

The website should sound like a real senior freelance consultant speaking clearly about what he does.

Avoid phrases like:

- unlock value
- drive transformation
- seamless solutions
- robust scalable modern architecture
- comprehensive backend visibility
- high-impact delivery
- resilient enterprise modernization
- immediate value add
- cutting-edge
- future-proof
- guarantees
- world-class
- fully optimized
- enterprise-ready in every way

Also avoid:

- startup-style buzzwords
- unverifiable superlatives
- inconsistent capitalization of technical terms
- long dense paragraphs when bullets would scan better

## UI and UX Rules

Keep the interface clean, credible, and restrained.

Prefer:

- one clear primary action per area
- direct labels
- practical supporting copy
- consistent spacing, borders, and card weight
- obvious interactions without over-explaining them

Avoid when possible:

- redundant CTA buttons
- repeated contact or onboarding messages
- duplicated data inside the same section
- fake technical decoration or invented code snippets
- decorative UI that reduces trust
- over-explained obvious actions

If a section becomes clearer by removing an element, prefer removing it over adding more UI.

## Validation Commands

Use these commands to verify changes when relevant:

- `npm install`
- `npm run dev`
- `npm run lint`
  - `lint` runs TypeScript type-checking via `tsc --noEmit` (strict mode)
- `npm test`
  - Vitest unit tests for `src/utils/availability.ts` and `src/routes.ts`
- `npm run build`
  - also runs `scripts/postbuild.mjs`
- `npm run preview`

## Definition of Done

For code or content changes, consider the work complete when all applicable checks pass:

1. `npm run lint`
2. `npm test`
3. `npm run build`
4. Major sections still render correctly in both languages
5. Navigation, the EN/DE switch and `/impressum` / `/datenschutz` still work
6. No availability text was hardcoded by mistake

## Deployment Notes

- Production output is generated in `dist/`.
- GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`; pull requests run lint, tests and build without deploying.
- Custom domain configuration is stored in `public/CNAME`.

## Helpful Context

- `src/App.tsx` composes the main sections.
- `src/components/` contains the visible page sections and the legal pages.
- `src/i18n/translations/{en,de}.ts` are the source of truth for all business content.
- `src/utils/availability.ts` controls dynamic availability text.
- `src/utils/seo.ts` keeps title, description and Open Graph tags in sync with the active locale.
- `index.html` and `public/` hold SEO metadata, JSON-LD, favicons, `robots.txt` and `sitemap.xml`.

## Safe Defaults for Assistants

If the request is ambiguous:

- prefer updating content over restructuring components
- prefer editing existing files over creating new ones
- prefer small UI refinements over broad redesigns
- prefer removing unnecessary UI over adding new UI
- preserve public-facing messaging unless the user asks to reposition it

If a request conflicts with these instructions, follow the explicit user request.
