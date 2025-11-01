# Site Builder 2.0 — Architecture Documentation

**Tech Stack:** Astro 5.15.2 + Tailwind 4.1.16 + Remix Icon 4.7.0

---

## PROJECT STRUCTURE

```
src/
├── components/
│   └── sections/
│       ├── material/      # Premium Material Design 3 sections
│       │   ├── headers/   # Header1Material (glassmorphism)
│       │   ├── heroes/    # Hero3Material (gradient mesh)
│       │   └── benefits/  # Benefits2Material (color themes)
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
│   ├── index.astro        # Demo page
│   └── material-demo.astro # Premium Material Design 3 demo
└── styles/
    └── global.css         # Tailwind import + @theme customization
```

---

## COMPONENT ARCHITECTURE

**Pattern:** Props-based Astro components

**Example:**

```astro
---
/**
 * ComponentName — Brief description
 */

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
    <!-- Content -->
  </div>
</section>

<style>
  /* Component-specific animations */
</style>

<script>
  // Component-specific interactions
</script>
```

**Principles:**
1. Always define Props interface
2. Tailwind-only styling (no custom CSS except animations)
3. Mobile-first responsive (`md:`, `lg:` breakpoints)
4. Use Remix Icons `<i class="ri-icon-name-line"></i>`
5. Semantic HTML5 (`<section>`, `<article>`, `<nav>`)

---

## LAYOUT & SPACING STANDARDS

**CRITICAL:** All sections MUST follow these standards.

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
- `max-w-[1344px]` (default) — Content = 1280px after padding
- `max-w-6xl` (1152px) — Narrow content sections
- `max-w-4xl` (896px) — Text-heavy content

**Centering:** Always `mx-auto`

**Horizontal Padding:**
```
px-4      → Mobile (16px)
sm:px-6   → Small screens 640px+ (24px)
lg:px-8   → Large screens 1024px+ (32px)
```

### Vertical Spacing

**Section Padding:**
```
py-16     → Mobile (64px)
md:py-20  → Medium 768px+ (80px)
lg:py-24  → Large 1024px+ (96px)
```

**Hero Sections:** `min-h-screen py-16 md:py-20 lg:py-24`

**Content Spacing:**
- Heading → content: `mb-12 lg:mb-16`
- Between blocks: `space-y-6` or `space-y-8`
- Grid items: `gap-6 md:gap-8 lg:gap-12`

### Grid Layouts

**Two-column (Hero, Features):**
```astro
<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
```

**Three-column (Services, Benefits):**
```astro
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

**Four-column (Stats):**
```astro
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
Base:  text-base md:text-lg
Large: text-lg md:text-xl
Small: text-sm md:text-base
```

### Breakpoints Reference

```
sm:  640px  — Small tablets
md:  768px  — Tablets
lg:  1024px — Laptops
xl:  1280px — Desktops
2xl: 1536px — Large desktops
```

**Mobile-first:** Start with base styles, add breakpoint prefixes for larger screens.

---

## TAILWIND THEME CUSTOMIZATION

Edit `src/styles/global.css`:

```css
@theme {
  /* Custom colors */
  --color-brand-blue: #1e40af;
  --color-brand-green: #10b981;

  /* Custom spacing */
  --spacing-section: 80px;

  /* Custom breakpoints */
  --breakpoint-3xl: 1920px;
}
```

Use: `<div class="bg-brand-green text-white">`

---

## NESTED BORDER RADIUS FORMULA

**Rule:** `Inner Radius = Outer Radius - Gap/Padding`

**Example:**
```astro
<!-- Outer: rounded-2xl (16px), gap-4 (16px) -->
<div class="rounded-2xl p-6 gap-4">
  <!-- Inner: rounded-lg (8px) = 16px - 16px ≈ 8px -->
  <img class="rounded-lg" />
</div>
```

**Tailwind values:**
- `rounded-2xl` (16px) - `gap-4` (16px) ≈ `rounded-lg` (8px)
- `rounded-xl` (12px) - `gap-3` (12px) ≈ `rounded` (4px)
- `rounded-3xl` (24px) - `gap-6` (24px) ≈ `rounded-xl` (12px)

**Reference:** [Frontend Masters - Nested Border Radius](https://frontendmasters.com/blog/the-classic-border-radius-advice-plus-an-unusual-trick/)

---

## ANIMATION PATTERNS

All animations follow Material Design 3 principles. See [DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md) for complete animation library.

**Common Durations:**
- Quick: `duration-300` (hover, active states)
- Standard: `duration-500` (cards, transitions)
- Slow: `duration-700` (modals, overlays)
- Continuous: `3s infinite`, `6s infinite`

**Easing:**
- Standard: `ease-in-out`
- Entrances: `ease-out`
- Exits: `ease-in`

---

## STATE MANAGEMENT

**No external state management needed.** Astro components are server-rendered.

**For interactivity:** Use vanilla JS in `<script>` tags or Astro client directives.

**Example:**
```astro
<script>
  document.getElementById('burger-btn')?.addEventListener('click', () => {
    // Handle interaction
  });
</script>
```

---

## PERFORMANCE BEST PRACTICES

**Images:**
- WebP format for photos
- SVG for icons (or Remix Icons CDN)
- Always provide `width`, `height`, `alt`
- Lazy loading: `loading="lazy"`

**CSS:**
- Tailwind auto-purges unused styles
- Use `@apply` sparingly
- Prefer utility classes

**JavaScript:**
- Minimize client-side JS
- Use vanilla JS when possible
- Defer non-critical scripts

**Fonts:**
- Use system fonts for body
- Load custom fonts only when necessary
- Use `font-display: swap`

---

**Version:** 3.0.0
**Last Updated:** 2025-11-01
