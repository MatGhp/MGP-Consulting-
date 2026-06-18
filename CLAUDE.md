# Repository Instructions for Coding Assistants

Use this file as the primary repository-level guidance for AI coding assistants such as VS Copilot and Claude Code.

## Purpose

This repository contains a marketing website for a freelance Senior .NET and Azure consultant.

When making changes, optimize for:

- professional, enterprise-ready presentation
- concise, credible business language
- minimal, low-risk code changes
- consistency across content, layout, and navigation

## Project Snapshot

- Framework: React 19 + TypeScript
- Build tool: Vite 6
- Styling: Tailwind CSS 4
- UI libraries: Motion, Lucide icons
- Hosting: GitHub Pages

## Working Agreement

When editing this project:

1. Prefer the smallest change that solves the task.
2. Preserve the existing structure, naming, and visual tone unless the task explicitly requires a redesign.
3. Avoid unrelated refactors, mass reformatting, or dependency churn.
4. Match the existing code style in each file.
5. Keep text polished, factual, and business-focused.

## Where Changes Should Usually Go

### Content-first updates

Most copy and profile content should be updated in `src/data.ts`.

Prefer `src/data.ts` for:

- hero copy
- services
- value propositions
- project experience
- collaboration FAQs
- contact/profile metadata

Do not hardcode business copy in components unless there is a clear structural reason.

### Component updates

Use `src/components/` for layout and presentation changes only.

Preserve existing IDs, anchors, and stable class hooks when possible because navigation and UI automation may depend on them.

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
- free of filler, hype, or vague claims

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

Use concrete, believable language instead.

Examples:

Instead of:
“I deliver high-impact enterprise modernization solutions.”

Use:
“I help teams modernize existing .NET systems step by step, without risky rewrites.”

Instead of:
“Reliable Azure integrations protecting downstream business storage.”

Use:
“I build Azure-based integration components that help systems exchange data reliably.”

Instead of:
“Professional freelance collaboration processes are supported.”

Use:
“I can work with direct clients, supplier onboarding processes, or established freelance contract setups.”

Instead of:
“Core delivery value.”

Use:
“What I can help with.”

Instead of:
“Technical implementation tools.”

Use:
“Technologies used.”

Keep in mind:

- Keep the language business-friendly, but not exaggerated.
- Keep technical accuracy.
- Do not remove important .NET, Azure, Angular, DevOps, or integration keywords.
- Do not make the copy too casual.
- Do not make it sound like a startup landing page.
- Do not make it sound like a recruiter profile.

The final website should sound like a real senior freelance consultant speaking clearly about what he does.

Avoid:

- startup-style buzzwords
- unverifiable superlatives
- inconsistent capitalization of technical terms
- long dense paragraphs when bullets would scan better

## Validation Commands

Use these commands to verify changes when relevant:

- `npm install`
- `npm run dev`
- `npm run lint`  
  (`lint` runs TypeScript type-checking via `tsc --noEmit`)
- `npm run build`
- `npm run preview`

## Definition of Done

For code or content changes, consider the work complete when all applicable checks pass:

1. `npm run lint`
2. `npm run build`
3. Major sections still render correctly
4. Navigation still works
5. No availability text was hardcoded by mistake

## Deployment Notes

- Production output is generated in `dist/`.
- GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`.
- Custom domain configuration is stored in `public/CNAME`.

## Helpful Context

- `src/App.tsx` composes the main sections and modal interactions.
- `src/components/` contains the visible page sections.
- `src/data.ts` is the main source of truth for business content.
- `src/utils/availability.ts` controls dynamic availability text.

## Safe Defaults for Assistants

If the request is ambiguous:

- prefer updating content over restructuring components
- prefer editing existing files over creating new ones
- prefer small UI refinements over broad redesigns
- preserve public-facing messaging unless the user asks to reposition it

If a request conflicts with these instructions, follow the explicit user request.
