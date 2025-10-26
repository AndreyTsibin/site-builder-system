# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🎯 CURRENT PHASE: Element Library Revision

**Project Status:** 🔄 Active Development — Revising Element Library

**What we're doing NOW:**
- ✅ **Phase 1: Created 50+ UI elements** (COMPLETED)
- 🔄 **Phase 2: Element Library Revision** (CURRENT)
  - Audit all elements for quality
  - Check hover effects
  - Validate component reuse philosophy
  - Test responsive design
  - Accessibility checks (ARIA, keyboard navigation)
- 📝 **Phase 3: Documentation** (NEXT)
  - Create `library/ELEMENTS.md` with full element list
  - Document usage examples
  - Composition patterns
- 🏗️ **Phase 4: Building Sections** (FUTURE)
  - Create sections from ready elements
  - Header, Hero, Features, Pricing, Footer variants
- 🎨 **Phase 5: Complete Landing Templates** (FUTURE)
  - Ready-to-use landing page templates
  - SaaS, E-commerce, Portfolio, Corporate

---

## PROJECT OVERVIEW

**Site Builder** — UI Component Library for Landing Pages

**Philosophy: Поэтапный подход (Step-by-Step Approach)**

1. **Элементы** (Atoms) → базовые UI компоненты (50+ elements)
2. **Секции** (Molecules) → композиции элементов (Header, Hero, Features, etc.)
3. **Готовые сайты** (Organisms) → полные лендинги под ключ (SaaS, E-commerce, etc.)

**Current Goal:** Полностью доработать библиотеку элементов

**Key Features:**
- 50+ reusable UI components
- Component Reuse Philosophy (use ready-made classes from `main.css`)
- No frameworks, no Python automation, no placeholders
- Production-ready quality code
- BEM methodology + Semantic HTML5
- Mobile-first responsive design
- Accessibility: WCAG AA compliance

---

## ESSENTIAL COMMANDS

### Working with Element Library

```bash
# View all elements
open library/demo-elements.html

# View UI Kit (visual reference)
open library/ui-kit.html

# Check UTF-8 encoding (CRITICAL for Cyrillic)
head -50 library/demo-elements.html

# Test responsive design
open library/demo-elements.html
# Then use browser DevTools (Cmd+Option+I)
# Test breakpoints: 320px, 768px, 1024px, 1440px
```

---

## TECH STACK

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript ES6+
- **Icons:** [Remix Icon](https://github.com/Remix-Design/RemixIcon) (2800+ open-source)
- **Base Classes:** `library/styles/main.css` (buttons, typography, forms, cards, etc.)
- **Design System:** CSS Variables in `library/styles/variables.css`
- **Automation:** None (manual development, full control)
- **No Frameworks:** Pure HTML/CSS/JS

---

## ARCHITECTURE

### Элементный подход (Element-based Approach)

**Философия: От простого к сложному**

#### 1. Элементы (`library/elements/`) — Базовые UI компоненты

**Current Status:** ✅ 50+ elements created

Categories:
- **Buttons** (17): primary, secondary, tertiary, link, icon, small, with icons, loading, back-to-top
- **Forms** (15): inputs (text, email, phone, URL, search, currency), textarea, select, checkbox, radio, toggle, signup-form
- **Cards** (10): basic, with-image, pricing, horizontal (left/right), vertical (top/bottom), compact (left/right), icon
- **Navigation** (3): breadcrumb, dropdown, navbar-dropdown
- **Pagination** (3): numbers, compact, simple
- **Accordions** (5): chevron, plus, bordered, with-icons, nested
- **Tabs** (6): left/center/right align, center-bordered, bottom-cards, bottom-features
- **Modals** (3): center, drawer, fullscreen
- **Sliders** (5): slider-1 to slider-4, carousel
- **Tooltips** (1): tooltip (all positions)
- **Media** (4): image-ratios, image-shapes, image-overlay, image-caption
- **Lists** (1): list-with-icons
- **Social** (2): social-icons-1, social-icons-2
- **Loaders** (1): spinner
- **Grid** (3): 2-cols, 3-cols, 4-cols
- **Typography** (9): headings 1-6, text, text-large/small/muted, lead

**All elements use ready-made classes from `library/styles/main.css`**

#### 2. Секции (`library/sections/`) — Композиции элементов

**Current Status:** 🔄 In development (Phase 4)

Future sections:
- Header variants (sticky, transparent, with mega-menu)
- Hero variants (with image, with video, with form)
- Features (grid, carousel, tabs)
- Pricing (tables, cards, comparison)
- Testimonials (grid, carousel, single)
- FAQ (accordion, grid)
- Gallery (grid, masonry, lightbox)
- Contact Form (simple, with map, with info)
- CTA sections (centered, split, with background)
- Footer variants (simple, 4-column, with newsletter)

#### 3. Лендинги (`output/`) — Готовые сайты под ключ

**Current Status:** 🎨 Future (Phase 5)

Future templates:
- SaaS landing page
- E-commerce landing page
- Portfolio landing page
- Corporate landing page
- Agency landing page

---

## PROJECT STRUCTURE

```
/site-builder/
├── library/
│   ├── styles/
│   │   ├── reset.css              # CSS Remedy reset
│   │   ├── variables.css          # Design system (colors, typography, spacing)
│   │   └── main.css               # 🔥 Ready-made base classes (buttons, typography, forms, cards)
│   ├── elements/                  # 🎨 Element library (50+)
│   │   ├── buttons/               # 17 variants
│   │   ├── forms/                 # 15 variants
│   │   ├── cards/                 # 10 variants
│   │   ├── navigation/            # breadcrumb, dropdown, navbar-dropdown
│   │   ├── pagination/            # 3 variants
│   │   ├── accordions/            # 5 variants
│   │   ├── tabs/                  # 6 variants
│   │   ├── modals/                # 3 variants
│   │   ├── sliders/               # 5 variants
│   │   ├── tooltips/              # tooltip
│   │   ├── media/                 # 4 variants
│   │   ├── lists/                 # list-with-icons
│   │   ├── social/                # 2 variants
│   │   ├── loaders/               # spinner
│   │   ├── grid/                  # 3 variants
│   │   └── typography/            # 9 variants
│   ├── sections/                  # 🏗️ Section library (in development)
│   │   ├── header/                # header-1
│   │   ├── hero/                  # hero-1
│   │   └── footer/                # footer-1
│   ├── assets/
│   │   └── images/                # placeholder.svg, placeholder-square.svg
│   ├── js/
│   │   └── main.js                # Unified JS file
│   ├── demo-elements.html         # 📚 Full element catalog
│   ├── demo-sections.html         # 📚 Section catalog
│   └── ui-kit.html                # 🎨 Visual reference
├── output/                        # Ready templates (in development)
│   ├── index.html
│   ├── styles/
│   ├── scripts/
│   └── images/
├── modules/                       # Additional tools
│   ├── figma-integration/         # Figma MCP integration
│   ├── minification/              # CSS/JS minification (optional)
│   ├── accessibility/             # Accessibility checks
│   └── performance/               # Performance analysis
├── docs/                          # Documentation
├── CLAUDE.md                      # 🤖 Instructions for Claude Code (this file)
└── README.md                      # Project overview
```

---

## WORKING WITH PROJECT

### 🚨 КРИТИЧЕСКИ ВАЖНО: Component Reuse Philosophy

**Мы НЕ создаём новые классы для базовых элементов!**

У нас уже есть полная база готовых классов в `library/styles/main.css`:
- ✅ **Кнопки:** `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--tertiary`, `.btn--link`
- ✅ **Типографика:** `.heading`, `.heading--h1` до `.heading--h6`, `.text`, `.text--sm`, `.text--lg`, `.text--muted`, `.lead`
- ✅ **Формы:** `.form-field`, `.form-field__label`, `.form-field__input`, `.form-field__textarea`, `.form-field__select`
- ✅ **Карточки:** `.card`, `.card__header`, `.card__title`, `.card__description`, `.card__body`, `.card__footer`
- ✅ **Бейджи:** `.badge`
- ✅ **Контейнеры:** `.container`, `.container--default`, `.container--narrow`, `.container--wide`, `.section`
- ✅ **Утилиты:** `.sr-only`, `.skip-link`, `.focus-ring`

**Также у нас есть готовые элементы:**
- ✅ **Кнопки:** все варианты в `library/elements/buttons/`
- ✅ **Типографика:** все варианты в `library/elements/typography/`
- ✅ **Формы:** все input/textarea/select в `library/elements/forms/`
- ✅ **Изображения:** все варианты в `library/elements/media/`
- ✅ **Карточки:** все варианты в `library/elements/cards/`
- ✅ **И многое другое...**

### При создании НОВОГО элемента:

**1. СНАЧАЛА проверь, что УЖЕ есть:**
   - Открой `library/demo-elements.html` в браузере
   - Посмотри `library/styles/main.css` — какие базовые классы есть
   - Посмотри `library/elements/` — какие готовые элементы есть

**2. ИСПОЛЬЗУЙ готовые классы:**
   ```html
   <!-- ✅ ПРАВИЛЬНО: используем готовые классы -->
   <article class="card-new-variant">
     <h3 class="heading heading--h3">Heading</h3>
     <p class="text">Description text here</p>
     <button class="btn btn--primary">Button</button>
   </article>
   ```

   ```css
   /* ✅ ПРАВИЛЬНО: создаём ТОЛЬКО layout */
   .card-new-variant {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: var(--space-6);
     padding: var(--space-6);
     background: var(--bg-card);
     border: 1px solid var(--border);
     border-radius: var(--radius-md);
   }
   ```

   ```html
   <!-- ❌ НЕПРАВИЛЬНО: создаём новые стили для заголовка -->
   <article class="card-new-variant">
     <h3 class="card-new-variant__heading">Heading</h3>
     ...
   </article>
   ```

   ```css
   /* ❌ НЕПРАВИЛЬНО: дублируем стили заголовка */
   .card-new-variant__heading {
     font-size: var(--font-size-3);
     font-weight: 700;
     /* ... куча дублированных стилей */
   }
   ```

**3. Workflow создания элемента:**
   1. **Создай папку** в `library/elements/[element-type]/[element-name]/`
   2. **HTML** — с готовыми классами + реальным текстом (НЕ placeholders)
   3. **CSS** — ТОЛЬКО layout (grid, flex, gap, padding), НЕ стили кнопок/текста
   4. **Добавь CSS линк** в `<head>` секцию `demo-elements.html`
   5. **Добавь в navigation** в sidebar `demo-elements.html`
   6. **Добавь demo** в соответствующую секцию `demo-elements.html`
   7. **Тест** — открой `demo-elements.html` в браузере

**Почему это важно:**
- 🎯 **Гибкость** — можем переиспользовать элементы везде
- 🚀 **Скорость** — не изобретаем велосипед каждый раз
- 🔧 **Поддержка** — изменения в `main.css` применяются везде автоматически
- 📦 **Меньше кода** — нет дублирования стилей

**В будущих сессиях:**
- Будем создавать СЕКЦИИ (собранные композиции элементов)
- Будем использовать ГОТОВЫЕ элементы из библиотеки
- НЕ будем создавать новые стили для базовых вещей

---

## CODE STANDARDS

**Senior-level code required (10+ years best practices):**

- **Principles:** DRY, KISS, SOLID
- **HTML:** Semantic HTML5 (nav, article, section — NOT div soup)
- **CSS:** BEM methodology, Grid/Flexbox (NO floats/tables for layout)
- **JavaScript:** ES6+ only (const/let, arrow functions, async/await, destructuring)
- **Responsive:** Mobile-first approach
- **Accessibility:** ARIA labels, alt texts, keyboard navigation
- **Comments:** English only in code

**CSS Variables:**
- Use design-system variables: `var(--primary)`, `var(--text)`, `var(--space-4)`
- HSL format: `hsl(220, 90%, 56%)`
- Mobile-first breakpoints: 320px, 768px, 1024px, 1440px

---

## GIT WORKFLOW

- **Branch:** `design`
- **Commit format:** `feat:`, `fix:`, `refactor:`, `chore:`

**Commit message template:**
```
feat: add pagination elements

- Create 3 pagination variants (numbers, compact, simple)
- Add breadcrumb navigation
- Update demo-elements.html
- All elements use ready-made classes from main.css

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## CRITICAL: UTF-8 FOR CYRILLIC

**MANDATORY after Write tool with Russian text:**

1. Write file
2. **IMMEDIATELY run:** `head -5 filename` (NO EXCEPTIONS)
3. **Verify visually:** Clean Cyrillic ("Данные") vs corrupted ("����")
4. **If corrupted:** Rewrite file with correct encoding
5. Only then proceed

**HTML files must include:**
```html
<meta charset="UTF-8" />
```

**Bug reference:** Claude Code issues #1716, #2154

---

## PERFORMANCE TARGETS

- **PageSpeed Insights:** >90 (mobile + desktop)
- **Lighthouse Accessibility:** >90 (WCAG AA)
- **Time to Interactive:** <3s
- **First Contentful Paint:** <1.8s

**Optimization:**
- ✅ Semantic HTML5
- ✅ Mobile-first responsive
- ✅ Image lazy loading
- ✅ Font display: swap
- ✅ CSS/JS минификация (optional, через modules/)

---

## TESTING CHECKLIST

**Before completing any improvement:**

1. ✅ Code follows standards (BEM, semantic HTML, ES6+)
2. ✅ UTF-8 verified for Cyrillic: `head -50 filename`
3. ✅ CSS uses design-system variables: `var(--primary)`, `var(--space-4)`
4. ✅ Responsive design tested (320px, 768px, 1024px, 1440px)
5. ✅ Accessibility checked (ARIA, alt texts, keyboard nav)
6. ✅ Elements use ready-made classes from `main.css`
7. ✅ No placeholders (always real text)
8. ✅ Browser renders correctly, no console errors (F12 → Console)
9. ✅ Git commit with proper format

---

**Version:** 4.0 (Фокус на библиотеку элементов)
**Last Update:** 2025-10-26
**Status:** 🔄 Element Library Revision (Phase 2)
**Next Phase:** 📝 Documentation (Phase 3)
