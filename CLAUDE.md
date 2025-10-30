# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## PROJECT STATUS

**✅ DEVELOPMENT & UNIFICATION COMPLETED** (as of 2025-10-30)

All 40+ landing page sections developed, tested, and unified into a consistent design system.

**Current Phase:** **Production & Assembly Testing**

**Focus:**
- Assembling landing pages for real clients
- Testing component compatibility and integration
- Refining the assembly workflow
- Optimizing build speed and quality

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

## LANDING PAGE ASSEMBLY PROCESS

**⚠️ CRITICAL:** Always assemble landing pages in `src/pages/index.astro` (not in new files).

### Quick Assembly Workflow

**Time:** 3-5 minutes for a complete landing page

**Steps:**

1. **Understand Client Requirements**
   - Business type (e.g., washing machine repair)
   - Location (e.g., Saint Petersburg)
   - Phone number
   - Key selling points (speed, price, warranty)

2. **Choose Components**
   - Select appropriate sections from `src/components/sections/`
   - Typical structure:
     - Header (Header1 or Header2)
     - Hero (Hero1, Hero2, Hero4, etc.)
     - Benefits (Benefits1, Benefits2)
     - Services/Pricing (ServicesCards, Services4, PricingTable)
     - Social Proof (Testimonials, Portfolio)
     - FAQ (FAQ1, FAQ2, FAQ3)
     - CTA (CTA1, CTA2, CTA3)
     - Footer (Footer1-Footer5)

3. **Check Component Props**
   - **IMPORTANT:** Always check component interface before using
   - Many components require arrays (testimonials, faqs, services)
   - Some have optional props with defaults, some require all props
   - Use grep to quickly check: `grep -A 20 "interface Props" path/to/Component.astro`

4. **Assemble in index.astro**
   - Import required components
   - Pass props with client-specific content
   - Use realistic data (phone numbers, addresses, testimonials, FAQs)

5. **Test in Browser**
   - Open http://localhost:4321/
   - Check mobile and desktop responsive
   - Verify all content displays correctly
   - No console errors

### Common Pitfalls

**❌ Creating new page files** — Always use `index.astro`
**❌ Skipping props check** — Components have different prop requirements
**❌ Empty arrays** — Components like Testimonials, FAQ need data arrays
**❌ Wrong prop names** — Check exact prop names (e.g., `heading` vs `title`)

### Component Prop Quick Reference

**Simple components (minimal props):**
- Hero1: title, subtitle, primaryCtaText, primaryCtaUrl
- Benefits1, ServicesCards: All props optional with defaults

**Complex components (require arrays):**
- Testimonials: heading, testimonials[]
- FAQ1: heading, faqs[]
- Team: heading, members[]
- Portfolio: heading, items[]

**Default placeholder:**
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

## TILDA DEPLOYMENT

**🎯 Deploy landing pages to Tilda constructor using T123 HTML block**

### Why Tilda?

Tilda is a popular no-code website builder in Russia/CIS. Deploying our Astro-built landing pages to Tilda allows:
- Using Tilda's hosting and domain management
- Adding Tilda's built-in forms, CRM, analytics
- Client can edit text directly in Tilda interface
- No need for separate hosting setup

### Deployment Process

**1. Build production files**

```bash
npm run build
# → dist/ folder with index.html, CSS, JS, images
```

**2. Open Tilda project**

- Create new page or edit existing
- Add **T123 block** (HTML/CSS/JS code block)

**3. Copy HTML from `dist/index.html`**

- Open `dist/index.html` in code editor
- Copy **entire body content** (without `<body>` tags)
- Paste into T123 block HTML field

**4. Add priority script**

**⚠️ CRITICAL:** Tilda has its own styles that conflict with Tailwind. Use this script to override Tilda styles:

**Paste this script into T123 block "Before closing </body>" field:**

```html
<script>
// Tailwind с приоритетом — перезаписывает стили Tilda
const tailwind = document.createElement('script');
tailwind.src = 'https://cdn.tailwindcss.com';
tailwind.onload = function() {
    window.tailwind.config = {
        important: true // Делаем Tailwind важнее стилей Tilda!
    };

    // Защита ссылок от стилей Tilda
    const style = document.createElement('style');
    style.textContent = \`
        /* Отключаем стили Tilda для всех ссылок */
        a, a:hover, a:active, a:visited {
            color: inherit !important;
            text-decoration: inherit !important;
            border-bottom: none !important;
        }
    \`;
    document.head.appendChild(style);
};
document.head.appendChild(tailwind);

// Remix Icons для иконок
const links = [
    'https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
];

links.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
});

// Swiper для слайдеров (Testimonials, Portfolio)
const script = document.createElement('script');
script.type = 'module';
script.textContent = \`
    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
    setTimeout(() => {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom'
            },
            pagination: {
                el: '.swiper-pagination-custom',
                clickable: true
            },
            breakpoints: {
                1024: { slidesPerView: 2, spaceBetween: 32 }
            }
        });
    }, 1000);
\`;
document.body.appendChild(script);
</script>
```

**5. Replace image URLs**

- Find all `/images/placeholder-img.jpg` references in HTML
- Upload images to Tilda or external hosting
- Replace with full URLs: `https://static.tildacdn.com/...`

**6. Test & Publish**

- Click "Preview" in Tilda
- Verify all styles work correctly
- Check sliders, hover effects, buttons
- Publish page

### How It Works

**The Script Explanation:**

1. **`important: true` config** — Makes ALL Tailwind utilities use `!important`, overriding Tilda's default styles
2. **CDN libraries** — Loads Tailwind, Remix Icons, Swiper from CDN (no local files needed)
3. **Swiper init with delay** — `setTimeout(1000)` ensures DOM is ready before initializing sliders

### Tilda Integration Checklist

- [ ] Production build created (`npm run build`)
- [ ] HTML copied from `dist/index.html` to T123 block
- [ ] Priority script added to "Before </body>" field
- [ ] Image URLs replaced with Tilda/external URLs
- [ ] Page tested in Tilda preview
- [ ] All components render correctly
- [ ] Sliders work (if used)
- [ ] Hover effects work
- [ ] Mobile responsive works

### Troubleshooting

**Problem:** Tailwind styles don't apply
**Solution:** Verify `important: true` is in script, check browser console for errors

**Problem:** Links have wrong colors (blue/underlined)
**Solution:** Tilda overrides link styles. The priority script includes link protection (`color: inherit !important`). Make sure you're using the latest version of the script from CLAUDE.md

**Problem:** Sliders don't work
**Solution:** Check `.testimonials-swiper` class exists in HTML, increase setTimeout delay

**Problem:** Icons missing
**Solution:** Verify Remix Icons CDN loaded, check icon class names (e.g., `ri-phone-line`)

**Problem:** Images broken
**Solution:** Replace all `/images/...` paths with full URLs

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

---

**Version:** 2.4.1
**Last Updated:** 2025-10-30
**Phase:** Production & Tilda Integration
**Niche:** Repair Services Landing Pages
