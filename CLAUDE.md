# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## PROJECT OVERVIEW

**Site Builder 2.0** — Landing page constructor for repair services niche

**Specialization:** Appliance repair, digital device repair, home renovation services

**Tech Stack:**

- **Astro 5.15.2** — Static site generator, zero JS by default
- **Tailwind 4.1.16** — Utility-first CSS with Vite plugin
- **Remix Icon 4.7.0** — Icon library (2800+ icons via CDN)
- **TypeScript** — Optional, paths configured via `@/*` aliases

**Philosophy:** Build professional landing pages in minutes using pre-built sections

**Development Approach:**

- ✅ **Quality over quantity** — One section at a time, thoroughly tested
- ✅ **Finished, polished components** — Every section must be production-ready
- ✅ **Fully responsive** — Mobile-first, tested across all breakpoints
- ✅ **User-driven workflow** — User provides code/screenshots, Claude converts to Astro
- ✅ **Tailwind CSS only** — No custom CSS, pure utility classes
- ✅ **CHECKLIST.md as reference** — Section list for orientation, not strict task tracker

**Claude's Role:**

1. **Convert screenshots → Astro components** with proper structure and spacing
2. **Convert HTML/CSS code → Astro components** with Tailwind classes
3. **Apply layout standards** automatically (containers, padding, responsive)
4. **Extract dynamic props** from hardcoded content
5. **Replace icons** with Remix Icons equivalents
6. **Ensure accessibility** (ARIA labels, semantic HTML, alt texts)
7. **Test and verify** UTF-8 encoding for Cyrillic text

---

## CURRENT STATUS

**Phase:** Component Library Creation (Phase 1)

**Completed:**

- ✅ Astro + Tailwind 4 migration
- ✅ BaseLayout with Remix Icons
- ✅ Demo page with hero, features, CTA sections
- ✅ Section directories structure
- ✅ Layout & spacing standards documented
- ✅ **6 Hero Sections completed** (Hero1-Hero6):
  - Hero1: Image & two CTAs
  - Hero2: Benefits list & single CTA
  - Hero3: Benefits list & contact form
  - Hero4: Form card & trust badges
  - Hero5: Badge, benefits & CTA
  - Hero6: Centered with feature cards

**Current Focus:**

- **Services & Pricing sections** — Multiple variants for pricing display
- Priority: Show pricing transparently to build trust and drive conversions

**Next:**

- Build Services & Pricing components (user-driven)
- See [CHECKLIST.md](CHECKLIST.md) for section reference list

---

## TASK TRACKING WORKFLOW

**IMPORTANT:** This project uses `CHECKLIST.md` as a reference list, NOT a step-by-step task tracker.

**New Workflow:**

1. **User-driven:** User provides code/screenshots for specific sections
2. **Quality over quantity:** Work one section at a time, thoroughly
3. **CHECKLIST.md purpose:** Reference list of needed sections with descriptions
4. **No mass production:** Don't create multiple sections at once
5. **Commit per section:** After each section is tested and approved

**CHECKLIST.md structure:**

```markdown
## 1. HERO SECTIONS

### Hero1 — Hero with Form
**Required elements:**
- Main heading (h1)
- Subheading / value proposition
- Contact form (name, phone, service, comment)
- Phone number prominently displayed
- Benefits list (3-4 items with icons)
- Image or background gradient

Status: [ ] Not started | [x] Completed
```

**Process:**

1. User selects section from CHECKLIST.md
2. User provides code or screenshot
3. Claude converts to Astro following standards
4. Test and verify
5. Commit
6. Repeat with next section

---

## ESSENTIAL COMMANDS

```bash
# Development server
npm run dev
# → http://localhost:4321

# Production build
npm run build
# → outputs to dist/

# Preview production build
npm run preview

# Astro CLI
npm run astro
```

**Note:** No test/lint scripts configured yet

---

## ARCHITECTURE

### Project Structure

```
src/
├── components/
│   └── sections/          # Reusable landing page sections
│       ├── heroes/        # Hero sections (empty)
│       ├── features/      # Feature sections (empty)
│       ├── pricing/       # Pricing tables (empty)
│       ├── forms/         # Contact/newsletter forms (empty)
│       └── footers/       # Footer variants (empty)
├── layouts/
│   └── BaseLayout.astro   # Base HTML layout with Remix Icons CDN
├── pages/
│   └── index.astro        # Demo page (hardcoded sections)
└── styles/
    └── global.css         # Tailwind import + @theme customization
```

### Component Architecture

**Pattern:** Props-based Astro components for maximum reusability

**Example:**

```astro
---
// src/components/sections/heroes/Hero1.astro
interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  phone?: string;
}

const { title, subtitle, ctaText, phone } = Astro.props;
---

<section class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
  <!-- Tailwind classes only, no custom CSS -->
</section>
```

**Key Principles:**

1. **TypeScript Props interface** — always define for clarity
2. **Tailwind-only styling** — no component-scoped CSS
3. **Mobile-first responsive** — use `md:`, `lg:` breakpoints
4. **Remix Icons** — use `<i class="ri-icon-name-line"></i>` instead of SVG
5. **Semantic HTML5** — `<section>`, `<article>`, `<nav>`, not `<div>` soup

### Path Aliases

```typescript
// tsconfig.json configured with:
"@/*": ["src/*"]

// Usage in imports:
import Hero from '@/components/sections/heroes/Hero1.astro';
```

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

Use in components: `class="bg-brand-blue p-section"`

---

## LAYOUT & SPACING STANDARDS

**CRITICAL:** All sections MUST follow these standards for consistent spacing and responsive behavior.

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
sm:  640px  (min-width: 40rem)
md:  768px  (min-width: 48rem)
lg:  1024px (min-width: 64rem)
xl:  1280px (min-width: 80rem)
2xl: 1536px (min-width: 96rem)
```

**Mobile-first approach:** Start with base styles, add breakpoint prefixes for larger screens.

---

## COMPONENT CREATION WORKFLOW

**NEW APPROACH:** User provides code or screenshots → Claude converts to Astro

**Process:**

1. **User provides:**
   - Ready HTML/CSS code to convert
   - OR screenshot of desired section

2. **Claude converts:**
   - Create file: `src/components/sections/{category}/{Name}.astro`
   - Add frontmatter with `interface Props`
   - Apply LAYOUT & SPACING STANDARDS (see above)
   - Replace hardcoded text with `{props.field}`
   - Replace SVG icons with Remix Icons
   - Ensure responsive classes follow mobile-first approach

3. **Test:**
   - Import in `src/pages/index.astro`
   - Check all viewports: 320px, 768px, 1024px, 1440px
   - Verify UTF-8 (run `head -5 filename` after Write if Cyrillic)

4. **Commit:**
   - After section is tested and approved
   - One section per commit

**Priority:** Work section-by-section, quality over quantity. See [CHECKLIST.md](CHECKLIST.md) for section list.

### Hero Section Pattern (Base Template)

**Hero1 is the base pattern** for all hero sections. Use this structure consistently:

**Fixed structure (DO NOT change):**
```astro
<section class="bg-white py-16 md:py-20 lg:py-24">
  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Left: Content -->
      <!-- Right: Image/Form/Visual -->
    </div>
  </div>
</section>
```

**What changes between hero variants:**
- Content (headings, text, CTAs)
- Additional elements (benefits list, trust badges, USP points)
- Visual styling (background colors, gradients)
- Right column content (image, form, illustration, etc.)

**Key principle:** Keep the grid, container, and spacing consistent across all hero sections.

**Default placeholder image:**
- Path: `/images/placeholder-img.jpg`
- Use this as default for all components with images
- Located in: `public/images/placeholder-img.jpg`

---

## DESIGN SYSTEM

**Colors:**

- Brand Blue: `#1E40AF`
- Brand Green: `#10B981`
- Brand Purple: `#7C3AED`

**Spacing:**

- Section padding: `80px` (mobile) → `120px` (desktop)
- Use Tailwind spacing scale: `p-4`, `mb-8`, `gap-6`

**Typography:**

- System fonts: `system-ui, -apple-system, sans-serif`
- Headings: `text-4xl md:text-5xl font-bold`
- Body: `text-base md:text-lg`

**Breakpoints:**

- `md:` — 768px
- `lg:` — 1024px
- `3xl:` — 1920px (custom)

---

## FIGMA INTEGRATION

Module: `modules/figma-integration/`

**Files:**

- `figma-client.js` — MCP client for Figma API
- `start-server.sh` — Launch Figma MCP server
- `server/` — MCP server implementation

**Usage:** (details TBD — not yet documented in README)

---

## DEPLOYMENT

### Netlify / Vercel

```bash
npm run build
# Upload dist/ folder or connect GitHub repo
```

### Static Hosting (shared hosting, S3, etc.)

```bash
npm run build
# Upload contents of dist/ via FTP/rsync
```

**Performance targets:**

- PageSpeed: 95-100
- Lighthouse Accessibility: 100
- First Contentful Paint: <0.8s
- Time to Interactive: <1s

---

## GIT WORKFLOW

**Branch:** `design` (no main branch configured yet)

**Commit format:**

```
feat: add hero sections for repair services

- Create 3 hero variants from Flowbite
- Mobile-responsive with Tailwind breakpoints
- Remix Icons integration

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** `feat:`, `fix:`, `refactor:`, `chore:`

---

## PRE-COMMIT CHECKLIST

Before committing components:

1. ✅ `npm run build` — no errors
2. ✅ `npm run preview` — visual check
3. ✅ **Responsive test:** 320px, 768px, 1024px, 1440px
4. ✅ **Accessibility:** keyboard nav, ARIA labels, img alt texts
5. ✅ **Semantic HTML:** proper heading hierarchy (h1→h6)
6. ✅ **Cyrillic UTF-8:** If Russian text, verify with `head -5 filename`

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
- [Flowbite Blocks](https://flowbite.com/blocks/)
- [Project README](README.md) — User-facing docs
- [CHECKLIST.md](CHECKLIST.md) — Phase 1 task tracking (18 components)

---

**Version:** 2.0.0
**Last Updated:** 2025-10-29
**Niche:** Repair Services Landing Pages
