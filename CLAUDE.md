# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## PROJECT STATUS

**✅ SECTION DEVELOPMENT COMPLETED** (as of 2025-10-30)

All required landing page sections have been developed and tested. The project now moves into the **optimization and unification phase**.

**Next Phase Goals:**

1. **Design System Unification** — Standardize colors, spacing, typography across all sections
2. **CSS Variables** — Extract hardcoded values into reusable theme variables
3. **Component Refinement** — Ensure consistent look and feel across all 40+ sections
4. **Performance Optimization** — Review bundle size, loading times, accessibility

**Current Focus:** Bringing all sections to a unified standard with consistent branding and UX.

---

## PROJECT OVERVIEW

**Site Builder 2.0** — Landing page constructor for repair services niche

**Specialization:** Appliance repair, digital device repair, home renovation services

**Tech Stack:**

- **Astro 5.15.2** — Static site generator, zero JS by default
- **Tailwind 4.1.16** — Utility-first CSS with Vite plugin
- **Remix Icon 4.7.0** — Icon library (2800+ icons via CDN)

**Philosophy:** Build professional landing pages in minutes using pre-built sections

**Development Principles:**

- ✅ **Quality over quantity** — One section at a time, thoroughly tested
- ✅ **Finished, polished components** — Every section must be production-ready
- ✅ **Fully responsive** — Mobile-first, tested across all breakpoints
- ✅ **Tailwind CSS only** — No custom CSS, pure utility classes
- ✅ **Consistent design** — Unified look and feel across all sections

---

## ESSENTIAL COMMANDS

```bash
# Development server (use this for work)
npm run dev
# → http://localhost:4321

# Production build
npm run build
# → outputs to dist/

# Preview production build
npm run preview
```

---

## ARCHITECTURE

### Project Structure

```
src/
├── components/
│   └── sections/          # Reusable landing page sections
│       ├── heroes/        # Hero sections (6 variants)
│       ├── pricing/       # Services & Pricing (3 variants)
│       ├── benefits/      # Benefits sections
│       ├── testimonials/  # Testimonials sections
│       ├── faq/           # FAQ sections
│       ├── cta/           # Call-to-Action sections
│       ├── contact/       # Contact forms
│       ├── stats/         # Statistics sections
│       ├── portfolio/     # Portfolio/Gallery sections
│       ├── team/          # Team sections
│       ├── calculator/    # Cost calculators
│       ├── headers/       # Header navigation
│       └── footers/       # Footer sections
├── layouts/
│   └── BaseLayout.astro   # Base HTML layout with Remix Icons CDN
├── pages/
│   └── index.astro        # Demo page
└── styles/
    └── global.css         # Tailwind import + @theme customization
```

### Component Architecture

**Pattern:** Props-based Astro components for maximum reusability

**Example:**

```astro
---
interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  phone?: string;
}

const { title, subtitle, ctaText, phone } = Astro.props;
---

<section class="py-16 md:py-20 lg:py-24 bg-white">
  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Tailwind classes only, no custom CSS -->
  </div>
</section>
```

**Key Principles:**

1. **Props interface** — always define for clarity
2. **Tailwind-only styling** — no component-scoped CSS
3. **Mobile-first responsive** — use `md:`, `lg:` breakpoints
4. **Remix Icons** — use `<i class="ri-icon-name-line"></i>` instead of SVG
5. **Semantic HTML5** — `<section>`, `<article>`, `<nav>`, not `<div>` soup

### Tailwind Theme Customization

Edit `src/styles/global.css` for custom design tokens:

```css
@theme {
  --color-brand-blue: #1e40af;
  --color-brand-green: #10b981;
  --spacing-section: 80px;
  --breakpoint-3xl: 1920px;
}
```

Use in components: `class="bg-brand-green text-white"`

### Nested Border Radius Formula

**Rule:** When nesting elements inside containers with border-radius, maintain smooth visual curvature:

```
Inner Radius = Outer Radius - Gap/Padding
```

**Example:**
```astro
<!-- Outer container: rounded-2xl (16px), gap-4 (16px) -->
<div class="rounded-2xl p-6 gap-4">
  <!-- Inner element: rounded-lg (8px) -->
  <img class="rounded-lg" />
</div>
```

**Tailwind values:**
- `rounded-2xl` (16px) - `gap-4` (16px) ≈ `rounded-lg` (8px)
- `rounded-xl` (12px) - `gap-3` (12px) ≈ `rounded` (4px)
- `rounded-3xl` (24px) - `gap-6` (24px) ≈ `rounded-xl` (12px)

**Why:** Using the same radius for parent and child creates uneven visual gaps. Subtracting the distance maintains smooth curvature.

**Reference:** [Frontend Masters - Nested Border Radius](https://frontendmasters.com/blog/the-classic-border-radius-advice-plus-an-unusual-trick/)

---

## LAYOUT & SPACING STANDARDS

**CRITICAL:** All sections MUST follow these standards for consistent spacing and responsive behavior.

**APPLIES TO:** Hero sections, Services & Pricing, Benefits, CTA sections, Testimonials, Footer, and ALL other components.

### Base Section Structure

```astro
<section class="py-16 md:py-20 lg:py-24 [bg-color]">
  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- content -->
  </div>
</section>
```

### Container Standards

**Max-width:**
- `max-w-[1344px]` (1344px) — Default for all sections (content = 1280px after padding)
- `max-w-6xl` (1152px) — For narrow content sections
- `max-w-4xl` (896px) — For text-heavy content (blog posts, articles)

**Centering:**
- Always use `mx-auto` to center containers

**Note:** The default max-w-[1344px] ensures content width is exactly 1280px on large screens (1344px - 32px left - 32px right = 1280px).

**Horizontal Padding (Responsive):**
```
px-4      → Mobile (16px)
sm:px-6   → Small screens 640px+ (24px)
lg:px-8   → Large screens 1024px+ (32px)
```

### Vertical Spacing

**Section Padding:**
```
py-16     → Mobile (64px)
md:py-20  → Medium screens 768px+ (80px)
lg:py-24  → Large screens 1024px+ (96px)
```

**Hero Sections:**
```
min-h-screen py-16 md:py-20 lg:py-24
```

**Content Spacing:**
- Between heading and content: `mb-12 lg:mb-16`
- Between content blocks: `space-y-6` or `space-y-8`
- Between grid items: `gap-6 md:gap-8 lg:gap-12`

### Grid Layouts

**Two-column (Hero, Features):**
```astro
<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  <!-- columns -->
</div>
```

**Three-column (Services, Benefits):**
```astro
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <!-- columns -->
</div>
```

### Typography Scale

**Headings:**
```
h1: text-4xl md:text-5xl lg:text-6xl font-bold
h2: text-3xl md:text-4xl lg:text-5xl font-bold
h3: text-2xl md:text-3xl font-bold
h4: text-xl md:text-2xl font-semibold
```

**Body Text:**
```
Base:     text-base md:text-lg
Large:    text-lg md:text-xl
Small:    text-sm md:text-base
```

### Breakpoints Reference

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

**Mobile-first approach:** Start with base styles, add breakpoint prefixes for larger screens.

---

## CURRENT WORKFLOW: UNIFICATION PHASE

**⚠️ IMPORTANT:** All 40+ sections are already created and functional. Current focus is **Design System Unification**.

**Primary Task:** Standardize visual design across all components to ensure consistency.

**See:** [PROMPT_UNIFICATION.md](PROMPT_UNIFICATION.md) for detailed unification checklist and process.

**Key Unification Areas:**

1. **Border Radius** - Standardize rounded corners (cards: `rounded-2xl`, buttons: `rounded-xl`, inputs: `rounded-lg`)
2. **Button Colors** - All primary CTAs should use `bg-blue-700` with `hover:bg-blue-800`
3. **Typography** - Ensure H2/H3/H4 sizes are consistent across all sections
4. **Borders vs Shadows** - Replace shadows with `border-2 border-gray-200` where clipping occurs
5. **Spacing** - Verify consistent gap and padding values

**Workflow:**
- Work category-by-category (Heroes → CTA → Contact → etc.)
- Test all variants in category together in `index.astro`
- Commit after each category is unified

**Default placeholder image:**
- Path: `/images/placeholder-img.jpg`
- Located in: `public/images/placeholder-img.jpg`

---

## DESIGN SYSTEM

**Colors:**

- Brand Blue: `#1E40AF` → `bg-brand-blue` or `text-blue-700`
- Brand Green: `#10B981` → `bg-brand-green` or `text-green-600`
- Brand Red: `#DC2626` → `bg-red-600` (for CTAs, prices)

**Typography:**

- System fonts: `system-ui, -apple-system, sans-serif`
- Headings: Bold, large responsive sizes
- Body: `text-base md:text-lg`

**Spacing:**

- Use Tailwind spacing scale: `p-4`, `mb-8`, `gap-6`
- Section padding: see LAYOUT & SPACING STANDARDS

---

## GIT WORKFLOW

**Branch:** `design`

**Commit format:**

```
feat: add ServicesGrid component

- Interactive service selector with pricing
- 3-column responsive grid
- Remix Icons integration

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`

**Important:**
- Commit after each completed section
- Push to remote regularly
- Keep commits focused and atomic

---

## NICHE-SPECIFIC GUIDANCE

**Target:** Repair service businesses (appliance, digital device, home renovation)

**Must-have sections:**

- Hero with phone number prominently displayed
- Contact forms (repeat 2-3 times on page)
- Services & Pricing (transparent pricing builds trust)
- Benefits (speed, warranty, expertise, genuine parts)
- How It Works (4-5 step process)

**Tone:** Professional but approachable, urgency-driven ("24/7", "Express service", "Same-day repair")

**CTA Text Examples:**

- "Вызвать мастера"
- "Заказать диагностику"
- "Узнать стоимость"

---

## REFERENCE DOCS

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Remix Icon](https://remixicon.com)
- [Project README](README.md) — User-facing docs
- **[PROMPT_UNIFICATION.md](PROMPT_UNIFICATION.md) — Design System Unification Guide** ⭐

---

**Version:** 2.2.0
**Last Updated:** 2025-10-30
**Phase:** Optimization & Unification
**Niche:** Repair Services Landing Pages
