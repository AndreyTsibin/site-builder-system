# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

---

## 🎯 CURRENT PHASE: Section Development

**Status:** 🏗️ Phase 3 — Building Sections (Active Development)

**Completed:**
- ✅ **Phase 1:** 50+ UI elements created
- ✅ **Phase 2:** Element library quality audit & main.css consolidation
  - Moved common elements to main.css (buttons, navbar, forms, cards, badges, breadcrumb, spinner, list-with-icons, section)
  - Added grid utilities (.grid, .grid-cols-2/3/4, .gap-4/6/8)
  - Created COMPONENTS.md reference (100+ classes)
  - Component reuse philosophy established

**Current Phase — Building Sections:**
- 🔄 Creating ready-to-use sections from library elements
- 🔄 Header variants (sticky, transparent, with mega-menu)
- 🔄 Hero variants (with image, video, form)
- 🔄 Features (grid, carousel, tabs)
- 🔄 Pricing (tables, cards, comparison)
- 🔄 Testimonials, FAQ, Gallery, Contact, CTA, Footer

**Flexible Approach:**
- 💡 Elements can be added if new patterns emerge
- 💡 Main.css can be extended with new utilities as needed
- 💡 Project evolves based on real-world usage

**Next Phases:**
- 📝 Phase 4: Complete landing templates (SaaS, E-commerce, Portfolio, Corporate)
- 🚀 Phase 5: Production-ready template library

---

## PROJECT VISION

**Site Builder** — Website Constructor from Ready Components

**Philosophy:** Build any landing page in minutes

**The System:**
```
Elements (Atoms)
    ↓
Sections (Molecules) ← WE ARE HERE
    ↓
Templates (Organisms)
    ↓
Client Sites (Fast Assembly)
```

**How it works:**
1. **Library of Elements** → 50+ UI components (buttons, cards, forms, etc.)
2. **Library of Sections** → Ready layouts (headers, heroes, features, pricing, etc.)
3. **Fast Assembly** → Client wants a site → Pick sections → Assemble in minutes

**Real-world scenario:**
```
Client: "I need a landing page for my SaaS product"
You: "No problem! Here's what we'll use:"
     - Header-1 (sticky navbar with logo + CTA)
     - Hero-2 (with product screenshot)
     - Features-3-cards (3 main benefits)
     - Pricing-2 (2 pricing tiers)
     - Testimonials-carousel (social proof)
     - FAQ-accordion (common questions)
     - Footer-4-columns (links + newsletter)

Result: Complete site in 10 minutes, fully responsive, production-ready
```

**Key Principles:**
- **Component Reuse:** Everything uses main.css classes
- **No Frameworks:** Pure HTML/CSS/JS (full control)
- **Semantic HTML5:** Proper heading hierarchy, ARIA labels
- **Mobile-First:** 320px → 768px → 1024px → 1440px
- **WCAG AA:** Accessible by default

---

## TECH STACK

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), ES6+ JavaScript
- **Icons:** Remix Icon (2800+ open-source)
- **Base Classes:** `library/styles/main.css`
- **Design System:** `library/styles/variables.css`
- **Elements:** 50+ in `library/elements/`

**Element Categories:**
- Buttons (17), Forms (15), Cards (10)
- Navigation (3), Pagination (3), Accordions (5)
- Tabs (6), Modals (3), Sliders (5)
- Media (4), Lists (1), Social (2), Loaders (1), Grid (3), Typography (9)

---

## ESSENTIAL COMMANDS

```bash
# View all elements
open library/demo-elements.html

# Check UTF-8 encoding (CRITICAL for Cyrillic)
head -50 library/demo-elements.html

# Test responsive design
open library/demo-elements.html
# DevTools: Cmd+Option+I, test 320px, 768px, 1024px, 1440px

# Minify CSS for production
python3 modules/minification/minify.py
```

---

## COMPONENT REUSE PHILOSOPHY

**🚨 CRITICAL: Use existing classes, DON'T create new ones for base elements!**

**📚 Full reference:** See [`library/COMPONENTS.md`](library/COMPONENTS.md) for complete list of 100+ classes with examples.

**Main categories in `main.css`:**
- **Buttons:** `.btn .btn--primary/secondary/tertiary/link` + sizes/states
- **Navbar:** `.navbar .navbar__list .navbar__link` (animated underline)
- **Forms:** `.form-field .form-field__input/textarea/select` + states
- **Cards:** `.card .card__header .card__title` (use `<h3>` for titles)
- **Typography:** `.heading .heading--h1/h2/h3` + `.text .lead .tagline`
- **Badges:** `.badge .badge--success/warning/error/info`
- **Breadcrumb:** `.breadcrumb__list .breadcrumb__item`
- **Spinner/Loader:** `.spinner .loader-overlay .btn--loading`
- **Section/Container:** `.section .container--xs/sm/md/lg/xl/2xl`
- **Grid:** `.grid .grid-cols-2/3/4 .gap-4/6/8` (auto-responsive)
- **Utilities:** `.flex .text-center .justify-center .items-center .hidden .w-full`

**Creating sections/elements:**
1. **FIRST:** Check [`library/COMPONENTS.md`](library/COMPONENTS.md) for available classes
2. Use ready-made classes from `main.css` (buttons, typography, grid, flex)
3. Write ONLY custom CSS for specific spacing/layout
4. Always use semantic HTML (`<h2>` for section titles, `<h3>` for card titles)
5. Test in browser

**Example:**
```html
<!-- ✅ CORRECT: Use ready-made classes -->
<article class="my-card">
  <h3 class="heading heading--h3">Title</h3>
  <p class="text">Description</p>
  <button class="btn btn--primary">Action</button>
</article>
```

```css
/* ✅ CORRECT: Only layout */
.my-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--bg-card);
  border-radius: var(--radius-md);
}
```

---

## CODE STANDARDS

**Senior-level code (10+ years best practices):**

- **Principles:** DRY, KISS, SOLID
- **HTML:** Semantic HTML5 (nav, article, section)
- **CSS:** BEM, Grid/Flexbox, HSL colors
- **JavaScript:** ES6+ (const/let, async/await, arrow functions)
- **Mobile-first:** 320px, 768px, 1024px, 1440px breakpoints

---

## DESIGN SYSTEM

### Container System

6 progressive sizes for different content types:

| Variable | Size | Use Case |
|----------|------|----------|
| `--container-xs` | 480px | Modals, compact forms |
| `--container-sm` | 640px | Login forms, narrow content |
| `--container-md` | 768px | Blog articles (optimal readability) |
| `--container-lg` | 1024px | Standard sections, 2-3 columns |
| `--container-xl` | 1140px | **Main content (MOST COMMON)** |
| `--container-2xl` | 1280px | Wide sections, dashboards |

**Default:** Use `--container-xl` (1140px) unless specific need.

### Nested Border Radius

**Formula:** `innerRadius = outerRadius - padding`

**Pre-defined variables:**
```css
--radius-nested-2  /* 2px */
--radius-nested-4  /* 4px */
--radius-nested-6  /* 6px */
--radius-nested-8  /* 8px */
--radius-nested-10 /* 10px */
--radius-nested-12 /* 12px */
```

**Use when:** Images/elements touch parent's rounded corners.

**Don't use for:** Buttons, text inside cards (they don't touch edges).

**Example:**
```css
.card--image {
  border-radius: var(--radius-md);  /* 8px */
  padding: 0;
}

.card--image .image-ratio {
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}
```

### Utility Classes

**Always use utilities instead of custom styles:**

- **Tagline:** `.tagline` — uppercase accent with brand color
- **Text align:** `.text-left/center/right`
- **Button align:** `.btn--align-left/center/right`
- **Flexbox:** `.flex`, `.flex-col`, `.justify-center`, `.items-center`, `.gap-4`
- **Display:** `.block`, `.inline-block`, `.hidden`
- **Width:** `.w-full`, `.w-auto`

---

## GIT WORKFLOW

- **Branch:** `design`
- **Format:** `feat:`, `fix:`, `refactor:`, `chore:`

**Template:**
```
feat: add feature name

- Bullet point 1
- Bullet point 2

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## CSS & JAVASCRIPT MINIFICATION

**Production optimization for client deployment.**

### Quick Start

```bash
# From project root
python3 modules/minification/minify.py
```

### What Gets Minified

**Only production files** (`output/` folder):

**CSS Files:**
- `reset.css` → `reset.min.css` (64.6% reduction)
- `variables.css` → `variables.min.css` (65.0% reduction)
- `main.css` → `main.min.css` (33.5% reduction)

**JavaScript Files:**
- `main.js` → `main.min.js` (40.3% reduction)

**Library files NOT minified** — kept readable for development.

### Workflow

1. **Development:** Edit files in `library/` or `output/`
2. **Before deployment:** Run minification script
3. **In HTML:** Use `.min.css` and `.min.js` versions for production

```html
<!-- Production -->
<link rel="stylesheet" href="styles/reset.min.css">
<link rel="stylesheet" href="styles/variables.min.css">
<link rel="stylesheet" href="styles/main.min.css">
<script src="scripts/main.min.js"></script>
```

### Features

- Minifies CSS and JavaScript files
- Removes comments and whitespace
- No external dependencies (Python stdlib only)
- Can minify specific files: `python3 modules/minification/minify.py path/to/file.js`
- Shows compression statistics (33-65% reduction)

### When to Minify

- ✅ Before deploying to client
- ✅ Before pushing to hosting/Tilda
- ✅ After major CSS/JS changes
- ❌ NOT during active development (use readable versions)

---

## CRITICAL: UTF-8 FOR CYRILLIC

**Claude Code bug (#1716, #2154) — MANDATORY verification:**

1. Write file with Cyrillic
2. **IMMEDIATELY run:** `head -5 filename`
3. **Verify:** Clean text ("Данные") vs corrupted ("����")
4. If corrupted → rewrite
5. Only then proceed

**HTML must have:**
```html
<meta charset="UTF-8" />
```

---

## TESTING CHECKLIST

Before completing work:

1. ✅ BEM, semantic HTML, ES6+
2. ✅ UTF-8 verified: `head -50 filename`
3. ✅ Design system variables used
4. ✅ Responsive tested (320px, 768px, 1024px, 1440px)
5. ✅ Accessibility checked (ARIA, alt, keyboard)
6. ✅ Ready-made classes used from `main.css`
7. ✅ Real text (no placeholders)
8. ✅ Browser renders correctly (F12 → Console)
9. ✅ Git commit with proper format

**Before client deployment:**
10. ✅ Run CSS minification: `python3 modules/minification/minify.py`

---

## ELEMENT WORKFLOW

**After adding new element:**

1. Create folder: `library/elements/[type]/[name]/`
2. Write HTML with ready-made classes
3. Write CSS (only layout)
4. Add CSS link to `demo-elements.html` `<head>`
5. Add navigation item to sidebar
6. Add demo to main content
7. **Update `getElementPath()` mapping** (IMPORTANT!)
8. Test in browser

**Update element mapping:**
```javascript
// In demo-elements.html, find getElementPath(id)
const categoryMap = {
  'my-new-element': 'category/my-new-element',  // Add this
};
```

This enables "Copy ID" button to copy full path: `element-id\nlibrary/elements/category/element-name/`

---

## PERFORMANCE TARGETS

- PageSpeed Insights: >90 (mobile + desktop)
- Lighthouse Accessibility: >90 (WCAG AA)
- Time to Interactive: <3s
- First Contentful Paint: <1.8s

---

**Version:** 5.0 (Optimized for Claude Code Best Practices 2025)
**Last Update:** 2025-01-26
**Current Phase:** Element Library Revision
**Next:** Documentation Phase
