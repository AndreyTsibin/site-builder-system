# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

---

## 🎯 CURRENT PHASE

**Status:** 🔄 Element Library Revision (Phase 2/5)

**Completed:**
- ✅ Phase 1: 50+ UI elements created

**Current Work:**
- 🔄 Phase 2: Element library quality audit
  - Hover effects consistency
  - Component reuse validation
  - Responsive design testing
  - Accessibility (ARIA, keyboard nav)

**Next:**
- 📝 Phase 3: Documentation (library/ELEMENTS.md)
- 🏗️ Phase 4: Build sections from elements
- 🎨 Phase 5: Complete landing templates

---

## PROJECT OVERVIEW

**Site Builder** — UI Component Library for Landing Pages

**Approach:** Atoms → Molecules → Organisms
1. Elements (50+) → Base components
2. Sections → Composed layouts
3. Templates → Complete sites

**Key Principles:**
- Component reuse (use `main.css` classes)
- No frameworks, vanilla HTML/CSS/JS
- BEM methodology + Semantic HTML5
- Mobile-first responsive
- WCAG AA accessibility

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
```

---

## COMPONENT REUSE PHILOSOPHY

**🚨 CRITICAL: Use existing classes, DON'T create new ones for base elements!**

**Ready-made classes in `main.css`:**
- Buttons: `.btn`, `.btn--primary/secondary/tertiary/link`
- Navbar: `.navbar`, `.navbar__list`, `.navbar__item`, `.navbar__link`, `.navbar__link--active`
- Typography: `.heading`, `.heading--h1` to `.h6`, `.text`, `.text--sm/lg/muted`, `.lead`, `.tagline`
- Forms: `.form-field`, `.form-field__label/input/textarea/select`
- Cards: `.card`, `.card__header/title/description/body/footer`
- Containers: `.container`, `.container--xs/sm/md/lg/xl/2xl`
- Utilities: `.text-left/center/right`, `.btn--align-left`, `.flex`, `.hidden`, `.w-full`

**Creating new elements:**
1. Check existing: `demo-elements.html` + `main.css` + `library/elements/`
2. Use ready-made classes for typography, buttons, text
3. Write ONLY layout CSS (grid, flex, gap, padding)
4. Add to `demo-elements.html` + update `getElementPath()` mapping
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
