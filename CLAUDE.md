# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## PROJECT STATUS

**✅ MVP COMPLETED** (as of 2025-10-30)

All 40+ landing page sections developed, tested, and unified. Tilda integration working. System ready for production use.

**Current Phase:** **🎨 PREMIUM ENHANCEMENT & OPTIMIZATION**

**Goal:** Transform from functional MVP into premium product with modern design indistinguishable from professional designer work.

**Focus:**
- **Design transformation** — gradients, typography, glassmorphism, animations
- **Component enhancement** — multiple style variants, micro-interactions
- **UX improvements** — better forms, testimonials, mobile-first features
- **Content library** — ready-to-use FAQs, testimonials, copy by niche
- **Performance & SEO** — optimization for production websites

**📋 Detailed Roadmap:** See [ROADMAP_OPTIMIZATION.md](ROADMAP_OPTIMIZATION.md) for complete enhancement plan

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

# Production build (for hosting)
npm run build
# → outputs to dist/ with separate CSS/JS files

# Tilda build (for Tilda T123 block)
npm run build:tilda
# → outputs to dist/tilda-bundle.html (single file, all inline)

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

## CLIENT PROJECT WORKFLOW

**🎯 SCENARIO:** Client comes with landing page requirements (niche, contacts, prices)

**📍 YOUR ROLE:** Assemble production-ready landing page from existing sections library

**⏱ EXPECTED TIME:** 10-15 minutes total (3-5 min assembly + 5-10 min Tilda bundle)

---

### Step-by-Step Process

**1. Receive Client Requirements**

Client provides:
- **Niche:** e.g., "Ремонт холодильников Москва"
- **Company name:** e.g., "МастерХолод"
- **Phone number:** e.g., "+7 (495) 123-45-67"
- **Services & prices:** e.g., "Диагностика — 500₽, Замена компрессора — 5000₽"
- **Additional info:** working hours, guarantees, brands, etc.

**2. Review Sections Library**

Available sections: `src/components/sections/`
- **Heroes:** 6 variants (gradient, split, minimal, centered, video, image)
- **Services/Pricing:** 3 variants (grid, table, cards)
- **Benefits:** Multiple layouts
- **Testimonials:** Swiper carousel
- **FAQ:** Accordion style
- **CTA:** Multiple variants
- **Contact:** Form + map variants
- **Stats, Portfolio, Team, Calculator** — as needed

**3. Assemble Landing Page**

**Location:** `src/pages/index.astro` (ALWAYS use this file, not new pages)

**Process:**
```astro
---
// Import components from library
import Hero1 from '@/components/sections/heroes/Hero1.astro';
import ServicesGrid1 from '@/components/sections/pricing/ServicesGrid1.astro';
// ... etc

// Check required props for each component:
// grep -A 20 "interface Props" src/components/sections/heroes/Hero1.astro
---

<BaseLayout title="МастерХолод — Ремонт холодильников Москва">
  <Hero1
    title="Ремонт холодильников в Москве"
    subtitle="Приезжаем за 30 минут. Гарантия 2 года."
    ctaText="Вызвать мастера"
    phone="+7 (495) 123-45-67"
  />

  <ServicesGrid1
    title="Наши услуги"
    services={[
      { name: "Диагностика", price: "500₽", icon: "ri-search-line" },
      // ... client's services
    ]}
  />

  <!-- Continue with other sections -->
</BaseLayout>
```

**Common Pitfalls:**
- ❌ Creating new page files — Always use `index.astro`
- ❌ Skipping props check — Components have different requirements
- ❌ Empty arrays — Testimonials, FAQ, Team, Portfolio need data arrays
- ❌ Missing phone numbers — Hero and Contact sections need contact info

**4. Test Locally**

```bash
# Start dev server
npm run dev
# → http://localhost:4321
```

**Checklist:**
- [ ] All client data visible (company name, phone, prices)
- [ ] No placeholder text (Lorem Ipsum) remaining
- [ ] Phone numbers clickable (`tel:` links)
- [ ] Mobile responsive (check 375px, 768px, 1024px)
- [ ] All sections render without errors
- [ ] Smooth scrolling between sections

**5. Build Production Files**

**For Tilda deployment (90% of clients):**
```bash
npm run build:tilda
# → outputs to dist/tilda-bundle.html
```

**For regular hosting:**
```bash
npm run build
# → outputs to dist/ (index.html + assets)
```

**6. Final Verification**

**For Tilda Bundle:**
- [ ] Open `dist/tilda-bundle.html`
- [ ] File size ~100KB (reasonable)
- [ ] Contains priority script (`important: true` config)
- [ ] All CSS inlined (no external `<link>` tags)
- [ ] All JS inlined (no external `<script src>`)
- [ ] Image placeholders present (`TILDA_IMAGE_1`, etc.)
- [ ] Image checklist at end of file

**7. Handoff to Client**

**For Tilda:**
1. Send `dist/tilda-bundle.html` to client
2. Instructions:
   - Paste into T123 block
   - Replace `TILDA_IMAGE_*` with image URLs
   - Publish

**For Hosting:**
1. Send entire `dist/` folder
2. Instructions:
   - Upload to hosting (FTP/cPanel/Vercel/Netlify)
   - Configure domain

**⏱ TOTAL TIME BREAKDOWN:**
- Assembly: 3-5 minutes
- Testing: 2-3 minutes
- Build: 1-2 minutes
- Verification: 2-3 minutes
- **Total: 10-15 minutes**

---

## LANDING PAGE ASSEMBLY (Technical Details)

**⚠️ CRITICAL:** Always assemble landing pages in `src/pages/index.astro` (not in new files).

**Quick Steps:**
1. Import components from `src/components/sections/`
2. Check component props: `grep -A 20 "interface Props" path/to/Component.astro`
3. Assemble in index.astro with realistic data
4. Test at http://localhost:4321/

---

## DESIGN SYSTEM

**⚠️ CURRENT STATE:** Basic MVP design system

**🎨 EVOLUTION IN PROGRESS:** See [ROADMAP_OPTIMIZATION.md](ROADMAP_OPTIMIZATION.md) for planned enhancements

**Current Colors:**
- Brand Blue: `#1E40AF` → `bg-blue-700`
- Brand Green: `#10B981` → `bg-brand-green`

**Planned Additions:**
- Extended color palette with 50-900 shades
- Gradient library (mesh, warm, cool, sunset, ocean)
- Dark mode support
- Glassmorphism utilities

**Current Typography:**
- System fonts: `system-ui, -apple-system, sans-serif`

**Planned Upgrades:**
- Google Fonts integration (Sora + Inter recommended)
- Fluid typography with clamp()
- Gradient text effects
- Text shadows and highlights

**Spacing:**
- Tailwind spacing scale: `p-4`, `mb-8`, `gap-6`
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

## TILDA DEPLOYMENT

**🎯 Deploy landing pages to Tilda constructor using T123 HTML block**

### Why Tilda?

Tilda is a popular no-code website builder in Russia/CIS. Deploying our Astro-built landing pages to Tilda allows:
- Using Tilda's hosting and domain management
- Adding Tilda's built-in forms, CRM, analytics
- Client can edit text directly in Tilda interface
- No need for separate hosting setup

---

### 🚀 Quick Deployment (Recommended)

**1. Build Tilda bundle**

```bash
npm run build:tilda
```

This command:
- Runs production build
- Generates `dist/tilda-bundle.html` — single file ready for T123
- Includes priority script (Tailwind CDN + `important: true`)
- Inlines all CSS and JS
- Replaces image paths with `TILDA_IMAGE_*` placeholders
- Creates image replacement checklist at the end of file

**2. Copy to Tilda**

- Open `dist/tilda-bundle.html`
- Copy **entire file content**
- Paste into Tilda **T123 block** (HTML field)

**3. Replace images**

- Find `TILDA_IMAGE_1`, `TILDA_IMAGE_2`, etc. in the pasted code
- Upload images to Tilda or external hosting
- Replace placeholders with actual URLs
- See image checklist at the bottom of bundle file

**4. Publish**

- Preview in Tilda
- Verify styles, sliders, hover effects work
- Publish page

**⏱ Total time:** 5-10 minutes

---

### 📦 Bundle File Structure

The generated `dist/tilda-bundle.html` contains (in order):

1. **Priority Script** — Tailwind CDN with `important: true` config
2. **Inline CSS** — All compiled Tailwind styles
3. **Page Content** — Sections without `<html>`, `<head>`, `<body>` tags
4. **Inline JS** — All compiled scripts (Swiper, etc.)
5. **Image Checklist** — List of all images to replace

**Example:**
```html
<!-- Tilda Bundle - Ready to paste -->

<script>
// Priority script (Tailwind + important: true)
...
</script>

<style>
/* Compiled CSS */
...
</style>

<!-- Sections -->
<header>...</header>
<section>...</section>
...

<script>
// Compiled JS
...
</script>

<!-- IMAGE REPLACEMENT CHECKLIST -->
<!-- TILDA_IMAGE_1: /images/hero.jpg -->
<!-- TILDA_IMAGE_2: /images/service-1.jpg -->
```

---

### ⚙️ How It Works

**Automated bundling script:**
- Reads `dist/index.html` after production build
- Extracts body content (without `<body>` tags)
- Finds and inlines all CSS from `/_astro/*.css`
- Finds and inlines all JS from `/_astro/*.js`
- Adds priority script with `important: true` config
- Replaces `/images/` paths with `TILDA_IMAGE_*` placeholders
- Outputs single file ready for T123 block

**Priority script features:**
- Loads Tailwind CSS via CDN with `important: true`
- Overrides Tilda's default styles
- Protects links from Tilda color overrides
- Loads Remix Icons and Swiper from CDN
- Initializes Swiper carousel with delay

---

### ✅ Deployment Checklist

- [ ] Run `npm run build:tilda`
- [ ] Open `dist/tilda-bundle.html`
- [ ] Copy entire content
- [ ] Paste into Tilda T123 block
- [ ] Replace all `TILDA_IMAGE_*` placeholders with URLs
- [ ] Test in Tilda preview
- [ ] Verify: styles, sliders, hover effects, mobile responsive
- [ ] Publish page

---

### 🐛 Troubleshooting

**Problem:** Tailwind styles don't apply
**Solution:** Bundle includes priority script automatically. Check browser console for CDN loading errors.

**Problem:** Links have wrong colors (blue/underlined)
**Solution:** Priority script includes link protection (`color: inherit !important`). Clear browser cache.

**Problem:** Sliders don't work
**Solution:** Ensure Swiper CDN loaded correctly. Increase `setTimeout` delay in priority script if needed.

**Problem:** Icons missing
**Solution:** Verify Remix Icons CDN loaded. Check class names (e.g., `ri-phone-line`).

**Problem:** Images broken
**Solution:** Replace all `TILDA_IMAGE_*` placeholders with actual Tilda/external URLs. See checklist at end of bundle file.

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

### Internal Documentation
- **[ROADMAP_OPTIMIZATION.md](ROADMAP_OPTIMIZATION.md)** ⭐ — Complete enhancement plan (design, UX, technical)
- [Project README](README.md) — User-facing documentation

### External Resources
- [Astro Docs](https://docs.astro.build) — Static site generator
- [Tailwind CSS 4](https://tailwindcss.com/docs) — Utility-first CSS
- [Remix Icon](https://remixicon.com) — Icon library

---

**Version:** 3.1.0
**Last Updated:** 2025-10-30
**Phase:** Premium Enhancement & Optimization
**Niche:** Repair Services Landing Pages
