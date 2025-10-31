# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

---

## PROJECT STATUS

**Current Phase:** **🎨 PREMIUM MATERIAL DESIGN 3 TRANSFORMATION**

**Philosophy:** "Максимальная премиальность с wow-фактором"

**YOU MUST read [DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md) BEFORE creating/upgrading any section.**

---

## PROJECT OVERVIEW

**Site Builder 2.0** — Landing page constructor for repair services niche

**Tech Stack:** Astro 5.15.2 + Tailwind 4.1.16 + Remix Icon 4.7.0

**Development Principles:**
- ✅ Quality over quantity
- ✅ Production-ready components
- ✅ Mobile-first responsive
- ✅ Material Design 3 ONLY (no Liquid Glass, no other systems)
- ✅ Wow-effects mandatory (shimmer, counter, stagger, floating animations)

---

## ESSENTIAL COMMANDS

```bash
npm run dev          # → http://localhost:4321
npm run build        # → dist/ (hosting)
npm run build:tilda  # → dist/tilda-bundle.html (Tilda T123)
npm run preview      # → preview production build
```

---

## COMPONENT ARCHITECTURE

**Pattern:** Props-based Astro components

**Example:**
```astro
---
interface Props { title: string; ctaText: string; }
const { title, ctaText } = Astro.props;
---
<section class="py-16 md:py-20 lg:py-24 bg-white">
  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Content -->
  </div>
</section>
```

**Key Principles:**
1. Always define Props interface
2. Tailwind-only styling (no custom CSS except animations)
3. Mobile-first responsive (`md:`, `lg:` breakpoints)
4. Use Remix Icons `<i class="ri-icon-name-line"></i>`
5. Semantic HTML5 (`<section>`, `<article>`, `<nav>`)

**📖 Complete architecture details:** [ARCHITECTURE.md](ARCHITECTURE.md)

---

## DESIGN SYSTEM

**🎨 PREMIUM MATERIAL DESIGN 3** — "Максимальная премиальность с wow-фактором"

**Quick Reference:**
- Material Design 3 ONLY (no Liquid Glass, no other systems)
- Wow-effects mandatory: shimmer, counter, stagger, floating animations
- Gradient mesh backgrounds (4+ layers)
- Color themes: Purple → Blue → Green → Orange rotation
- Glassmorphism ONLY in header
- All CTAs: gradient + shimmer + arrow icon + glow on hover

---

## CLIENT WORKFLOW

**⏱ Expected time:** 10-15 minutes to assemble landing page from client brief

**Process:**
1. Receive client requirements (niche, contacts, prices)
2. Import components from `src/components/sections/`
3. Fill props with client data in `src/pages/index.astro`
4. Test locally (`npm run dev`)
5. Build for deployment (`npm run build:tilda` or `npm run build`)

**📖 Complete workflow guide:** [CLIENT_WORKFLOW.md](CLIENT_WORKFLOW.md)

---

## DEPLOYMENT

**Quick Tilda deployment:**
```bash
npm run build:tilda  # → dist/tilda-bundle.html
```
Copy file content → Paste into Tilda T123 block → Replace images → Publish

**📖 Complete deployment guide:** [DEPLOYMENT.md](DEPLOYMENT.md)

---

## GIT WORKFLOW

**Branch:** `design`

**Commit format:**
```
feat: add component name

- Brief description of changes

🤖 Generated with [Claude Code](https://claude.com/claude-code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`

**Important:** Commit after each completed section

---

## NICHE-SPECIFIC GUIDANCE

**Target:** Repair service businesses (appliance, digital device, home renovation)

**Must-have sections:**
- Hero with phone number (prominent)
- Services & Pricing (transparent pricing)
- Benefits (speed, warranty, expertise)
- Contact forms (repeat 2-3 times)

**Tone:** Professional but approachable, urgency-driven

**CTA Examples:** "Вызвать мастера", "Заказать диагностику", "Узнать стоимость"

---

## REFERENCE DOCS

**Internal:**
- **[DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md)** ⭐ MANDATORY before creating/upgrading sections
- [ARCHITECTURE.md](ARCHITECTURE.md) — Technical structure & spacing standards
- [CLIENT_WORKFLOW.md](CLIENT_WORKFLOW.md) — Step-by-step landing page assembly
- [DEPLOYMENT.md](DEPLOYMENT.md) — Tilda & hosting deployment
- [CLIENT_BRIEF.md](CLIENT_BRIEF.md) — Client requirements template

**External:**
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Remix Icon](https://remixicon.com)
- [Material Design 3](https://m3.material.io/)

---

**Version:** 5.0.0
**Last Updated:** 2025-10-31
**Phase:** Premium Material Design 3 Transformation
