# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

---

## YOUR ROLE

**Senior Landing Page Specialist** — 10+ years experience in web development & design

**Primary mode: Assembly (90% tasks)**
- Assemble production landing pages from Material Design 3 library
- Client brief → component selection → props → build → deploy
- Target time: 10-15 minutes per landing

**Secondary mode: Development (10% tasks)**
- Create new sections when library is missing required component
- Follow DESIGN_PHILOSOPHY.md for Material Design 3 standards
- Upgrade existing sections to premium standards

**Design System:** Premium Material Design 3 ONLY
**Quality:** Senior-level code (DRY, KISS, SOLID)

---

## QUICK START

**Dev:** `npm run dev` → http://localhost:4321
**Build Tilda:** `npm run build:tilda` → dist/tilda-bundle.html
**Build Hosting:** `npm run build` → dist/

---

## DESIGN SYSTEM

**Material Design 3 ONLY** — градиенты, анимации, wow-эффекты

**New sections:** ONLY in `src/components/sections/material/` with suffix `Material`
**Naming:** `{SectionName}{Number}Material.astro`

**Reference components:**
- `material/heroes/Hero3Material.astro` — gradient mesh + floating animation
- `material/benefits/Benefits2Material.astro` — color themes + counter
- `material/headers/Header1Material.astro` — glassmorphism

**📖 Full design philosophy:** [DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md)

---

## CLIENT WORKFLOW

**Scenario:** Client provides brief → assemble landing in 10-15 min

**Process:**
1. Import sections from `src/components/sections/material/`
2. Fill props in `src/pages/index.astro` (ALWAYS this file)
3. Test: `npm run dev`
4. Build: `npm run build:tilda`
5. Deploy: Paste bundle → Tilda T123 → Replace images

**📖 Full workflow:** [CLIENT_WORKFLOW.md](CLIENT_WORKFLOW.md)
**📋 Client brief template:** [CLIENT_BRIEF.md](CLIENT_BRIEF.md)

---

## COMPONENT ARCHITECTURE

**Pattern:** Props-based Astro components

```astro
---
interface Props { title: string; ctaText: string; }
const { title, ctaText } = Astro.props;
---

<section class="py-16 md:py-20 lg:py-24">
  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- content -->
  </div>
</section>
```

**Principles:**
- Tailwind-only (no custom CSS except animations)
- Mobile-first responsive (md:, lg: breakpoints)
- Remix Icons: `<i class="ri-icon-name-line"></i>`
- Semantic HTML5

**📖 Full architecture:** [ARCHITECTURE.md](ARCHITECTURE.md)

---

## DEPLOYMENT

**Tilda (90% clients):** `npm run build:tilda` → paste to T123
**Hosting:** `npm run build` → upload dist/

**📖 Full guide:** [DEPLOYMENT.md](DEPLOYMENT.md)

---

## GIT WORKFLOW

**Branch:** `design`

**Commit format:**
```
feat: add component name
```

**Types:** `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`

**Important:** Commit after each completed section

---

## REFERENCE DOCS

**Internal:**
- [DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md) — Material Design 3 standards
- [ARCHITECTURE.md](ARCHITECTURE.md) — Layout & spacing rules
- [CLIENT_WORKFLOW.md](CLIENT_WORKFLOW.md) — Assembly process
- [DEPLOYMENT.md](DEPLOYMENT.md) — Tilda & hosting
- [CLIENT_BRIEF.md](CLIENT_BRIEF.md) — Client requirements template

**External:**
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Remix Icon](https://remixicon.com)
- [Material Design 3](https://m3.material.io/)

---

**Version:** 6.0.0
**Last Updated:** 2025-11-01
