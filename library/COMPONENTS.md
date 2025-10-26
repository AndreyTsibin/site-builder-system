# Component Library Reference — Main.css Classes

**📚 Complete guide to all base classes available in `main.css`**

This file is a reference for Claude Code to quickly find and use correct classes when building sections.

---

## 1. Buttons

### Base Classes
- `.btn` — Base button (inline-flex, padding, transitions)
- `.btn--primary` — Black button with white text (main CTA)
- `.btn--secondary` — White button with border (secondary action)
- `.btn--tertiary` — Transparent button with colored text (tertiary action)
- `.btn--link` — Link-style button with underline

### Size Modifiers
- `.btn--sm` — Small button
- `.btn--lg` — Large button

### State Classes
- `.btn:disabled` — Disabled state (auto-styled)
- `.btn--loading` — Loading state (use with spinner)

### Alignment
- `.btn--align-left` — Left-aligned content
- `.btn--align-center` — Center-aligned content
- `.btn--align-right` — Right-aligned content

### Examples
```html
<!-- Primary button -->
<button class="btn btn--primary">Заказать</button>

<!-- Secondary small button -->
<button class="btn btn--secondary btn--sm">Подробнее</button>

<!-- Loading button -->
<button class="btn btn--primary btn--loading">
  <span class="btn__text">Загрузка</span>
  <div class="btn__spinner">
    <div class="spinner">
      <div class="spinner__circle"></div>
    </div>
  </div>
</button>
```

**When to use:** Every button on the site. Always combine `.btn` with a modifier.

---

## 2. Navbar

### Classes
- `.navbar` — Navigation container (flex)
- `.navbar__list` — List of nav links (flex, gap, reset list styles)
- `.navbar__item` — Nav list item
- `.navbar__link` — Nav link (with animated underline on hover)
- `.navbar__link--active` — Active/current page link

### Examples
```html
<nav class="navbar" aria-label="Основное меню">
  <ul class="navbar__list">
    <li class="navbar__item">
      <a href="#" class="navbar__link navbar__link--active">Главная</a>
    </li>
    <li class="navbar__item">
      <a href="#" class="navbar__link">О нас</a>
    </li>
  </ul>
</nav>
```

**When to use:** Main site navigation in headers.

---

## 3. Forms

### Field Container
- `.form-field` — Field container (flex-column, gap)
- `.form-field--error` — Error state (red border)
- `.form-field--success` — Success state (green border)

### Field Elements
- `.form-field__label` — Field label
- `.form-field__input` — Text input
- `.form-field__textarea` — Textarea (auto min-height: 120px)
- `.form-field__select` — Select dropdown
- `.form-field__hint` — Help text / error message

### Examples
```html
<!-- Text input -->
<div class="form-field">
  <label class="form-field__label">Email</label>
  <input type="email" class="form-field__input" placeholder="your@email.com">
</div>

<!-- Error state -->
<div class="form-field form-field--error">
  <label class="form-field__label">Пароль</label>
  <input type="password" class="form-field__input">
  <span class="form-field__hint">Пароль слишком короткий</span>
</div>
```

**When to use:** All form inputs, textareas, selects.

---

## 4. Cards

### Card Structure
- `.card` — Card container (flex-column, padding, shadow, border-radius)
- `.card--hoverable` — Card with hover lift effect
- `.card__header` — Card header section
- `.card__title` — Card title (use with `<h3>`)
- `.card__description` — Card description/subtitle
- `.card__body` — Card body content
- `.card__footer` — Card footer (auto margin-top)

### Examples
```html
<article class="card">
  <div class="card__header">
    <h3 class="card__title">Заголовок карточки</h3>
    <p class="card__description">Краткое описание</p>
  </div>
  <div class="card__body">
    <p class="text">Основной текст карточки</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Подробнее</button>
  </div>
</article>
```

**When to use:** Pricing cards, feature cards, blog post cards, product cards.

**Important:** Always use `<h3 class="card__title">` for semantic heading hierarchy.

---

## 5. Typography

### Headings
- `.heading` — Base heading styles
- `.heading--h1` — H1 size (64px / 4rem)
- `.heading--h2` — H2 size (48px / 3rem)
- `.heading--h3` — H3 size (32px / 2rem)
- `.heading--h4` — H4 size (24px / 1.5rem)

### Body Text
- `.text` — Base body text (16px)
- `.text--sm` — Small text (14px)
- `.text--lg` — Large text (20px)
- `.text--muted` — Muted color text

### Special Text
- `.lead` — Lead paragraph (20px, intro text)
- `.tagline` — Uppercase accent text for section headers

### Examples
```html
<!-- Section header -->
<div class="text-center">
  <p class="tagline">О компании</p>
  <h2 class="heading heading--h2">Наши преимущества</h2>
  <p class="lead">Мы предлагаем лучшие решения</p>
</div>

<!-- Regular text -->
<p class="text">Обычный текст параграфа</p>
<p class="text text--sm text--muted">Мелкий серый текст</p>
```

**When to use:**
- `.heading` — Section titles, card titles
- `.text` — All body text
- `.tagline` — Accent labels above headings

---

## 6. Links

### Classes
- `.link` — Styled link (primary color, hover underline)

### Examples
```html
<a href="#" class="link">Подробнее о нас</a>
```

**When to use:** Text links in breadcrumbs, paragraphs, lists.

---

## 7. Badges

### Base & Variants
- `.badge` — Base badge (pill-shaped, uppercase, small)
- `.badge--primary` — Black badge
- `.badge--success` — Green badge (success status)
- `.badge--warning` — Yellow badge (warning status)
- `.badge--error` — Red badge (error status)
- `.badge--info` — Blue badge (info status)

### Examples
```html
<span class="badge badge--success">Новое</span>
<span class="badge badge--warning">Скидка</span>
<span class="badge badge--error">Распродажа</span>
```

**When to use:** Status labels, tags, category markers, "NEW" labels.

---

## 8. Breadcrumb

### Classes
- `.breadcrumb__list` — Breadcrumb list (flex, gap)
- `.breadcrumb__item` — Breadcrumb item (auto '›' separator)

### Examples
```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item">
      <a href="#" class="link">Главная</a>
    </li>
    <li class="breadcrumb__item">
      <a href="#" class="link">Каталог</a>
    </li>
    <li class="breadcrumb__item">
      <span class="text">Товар</span>
    </li>
  </ol>
</nav>
```

**When to use:** Navigation breadcrumbs on inner pages, catalog pages.

---

## 9. Spinner / Loader

### Spinner
- `.spinner` — Spinner container (default 2.5rem)
- `.spinner__circle` — Rotating circle
- `.spinner--sm` — Small spinner (1rem)
- `.spinner--lg` — Large spinner (4rem)
- `.spinner--inverted` — Inverted colors for dark backgrounds

### Loader Overlays
- `.loader-overlay` — Full-page loader (fixed, centered, blurred bg)
- `.loader-overlay.is-active` — Show loader overlay
- `.loader-overlay__text` — Loader text
- `.loader-inline` — Inline loader (for content areas)

### Button Loading
- `.btn--loading` — Loading button state
- `.btn__spinner` — Spinner inside button
- `.btn__text` — Button text (hidden when loading)

### Examples
```html
<!-- Standalone spinner -->
<div class="spinner">
  <div class="spinner__circle"></div>
</div>

<!-- Page loader -->
<div class="loader-overlay is-active">
  <div class="spinner spinner--lg">
    <div class="spinner__circle"></div>
  </div>
  <p class="loader-overlay__text">Загрузка...</p>
</div>
```

**When to use:** Loading indicators, button loading states, page loaders.

---

## 10. List with Icons

### Classes
- `.list-with-icons` — List container (flex-column, gap)
- `.list-with-icons__item` — List item (flex, icon + text)
- `.list-with-icons__icon` — Icon (flex-shrink-0, primary color)

### Examples
```html
<ul class="list-with-icons">
  <li class="list-with-icons__item">
    <i class="ri-check-line list-with-icons__icon"></i>
    <span class="text">Бесплатная доставка</span>
  </li>
  <li class="list-with-icons__item">
    <i class="ri-check-line list-with-icons__icon"></i>
    <span class="text">Гарантия 2 года</span>
  </li>
</ul>
```

**When to use:** Feature lists, benefit lists, checklists.

---

## 11. Section

### Classes
- `.section` — Section wrapper (default: 48px vertical padding)
- `.section--sm` — Small padding (32px)
- `.section--lg` — Large padding (64px)

### Examples
```html
<!-- Standard section -->
<section class="section">
  <div class="container container--xl">
    <h2 class="heading heading--h2">Section Title</h2>
    <!-- content -->
  </div>
</section>

<!-- Large padding section -->
<section class="section section--lg">
  <!-- Hero section with more space -->
</section>
```

**When to use:** Every major content section on the page.

---

## 12. Containers

### Size Modifiers
- `.container` — Base container (100% width, centered, horizontal padding)
- `.container--xs` — 480px max-width (modals, compact forms)
- `.container--sm` — 640px max-width (login forms, narrow content)
- `.container--md` — 768px max-width (blog articles, optimal readability)
- `.container--lg` — 1024px max-width (standard sections, 2-3 columns)
- `.container--xl` — **1140px max-width (MOST COMMON, main content)**
- `.container--2xl` — 1280px max-width (wide sections, dashboards)

### Examples
```html
<!-- Standard page section -->
<section class="section">
  <div class="container container--xl">
    <!-- Most sections use --xl -->
  </div>
</section>

<!-- Blog article -->
<article class="section">
  <div class="container container--md">
    <!-- Narrow for reading -->
  </div>
</article>
```

**When to use:** Inside every `.section` to constrain content width.

**Default:** Use `.container--xl` (1140px) unless you have a specific reason.

---

## 13. Grid Utilities

### Grid Layout
- `.grid` — Display grid
- `.grid-cols-2` — 2 columns (auto 1 col on mobile)
- `.grid-cols-3` — 3 columns (auto 2→1 col on tablet→mobile)
- `.grid-cols-4` — 4 columns (auto 2→1 col on tablet→mobile)

### Examples
```html
<!-- 3-column grid (responsive) -->
<div class="grid grid-cols-3 gap-6">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

**Responsive behavior:**
- Desktop: 2/3/4 columns as specified
- Tablet (1024px): 3→2, 4→2
- Mobile (768px): All→1 column

**When to use:** Card grids, feature grids, image galleries.

---

## 14. Flexbox Utilities

### Display
- `.flex` — Display flex
- `.flex-col` — Column direction
- `.flex-row` — Row direction (default)

### Justify Content (horizontal)
- `.justify-start` — Flex-start
- `.justify-center` — Center
- `.justify-end` — Flex-end
- `.justify-between` — Space-between
- `.justify-around` — Space-around

### Align Items (vertical)
- `.items-start` — Flex-start
- `.items-center` — Center
- `.items-end` — Flex-end
- `.items-baseline` — Baseline

### Examples
```html
<!-- Centered content -->
<div class="flex items-center justify-center">
  <p>Centered text</p>
</div>

<!-- Space-between layout -->
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

**When to use:** Quick layouts, centering, spacing elements.

---

## 15. Gap Utilities

### Classes
- `.gap-1` — 4px gap
- `.gap-2` — 8px gap
- `.gap-3` — 12px gap
- `.gap-4` — 16px gap
- `.gap-5` — 20px gap
- `.gap-6` — 24px gap
- `.gap-8` — 32px gap

### Examples
```html
<!-- Flex with gap -->
<div class="flex gap-4">
  <button class="btn btn--primary">Button 1</button>
  <button class="btn btn--secondary">Button 2</button>
</div>

<!-- Grid with gap -->
<div class="grid grid-cols-3 gap-6">
  <!-- cards -->
</div>
```

**When to use:** With `.flex` or `.grid` for spacing between items.

---

## 16. Text Alignment

### Classes
- `.text-left` — Left align
- `.text-center` — Center align
- `.text-right` — Right align

### Examples
```html
<div class="text-center">
  <h2 class="heading heading--h2">Centered Title</h2>
  <p class="text">Centered paragraph</p>
</div>
```

**When to use:** Section headers, hero sections, centered content blocks.

---

## 17. Display Utilities

### Classes
- `.block` — Display block
- `.inline-block` — Display inline-block
- `.inline` — Display inline
- `.hidden` — Display none (hide element)

### Examples
```html
<!-- Hide on mobile with custom media query -->
<div class="hidden">Hidden element</div>
```

**When to use:** Showing/hiding elements, changing display type.

---

## 18. Width Utilities

### Classes
- `.w-full` — Width 100%
- `.w-auto` — Width auto

### Examples
```html
<button class="btn btn--primary w-full">Full-width button</button>
```

**When to use:** Full-width buttons, full-width form inputs.

---

## 19. Accessibility Utilities

### Classes
- `.sr-only` — Visually hidden (screen readers only)
- `.skip-link` — Skip to main content link
- `.focus-ring` — Focus ring for keyboard navigation

### Examples
```html
<!-- Screen reader only text -->
<span class="sr-only">This is hidden visually but read by screen readers</span>

<!-- Skip link -->
<a href="#main" class="skip-link">Skip to main content</a>
```

**When to use:** Accessibility improvements, keyboard navigation.

---

## Quick Reference Table

| Category | Classes | Use Case |
|----------|---------|----------|
| **Buttons** | `.btn .btn--primary/secondary/tertiary/link` | All buttons |
| **Navbar** | `.navbar .navbar__list .navbar__link` | Main navigation |
| **Forms** | `.form-field .form-field__input` | All form inputs |
| **Cards** | `.card .card__title .card__body` | Content cards |
| **Typography** | `.heading .heading--h2 .text .lead` | All text content |
| **Badges** | `.badge .badge--success/warning/error` | Status labels |
| **Section** | `.section .section--sm/lg` | Page sections |
| **Container** | `.container .container--xl` | Content width |
| **Grid** | `.grid .grid-cols-3 .gap-6` | Card grids |
| **Flexbox** | `.flex .justify-center .items-center` | Quick layouts |

---

## Building a Section: Step-by-Step

### 1. Outer Structure
```html
<section class="section">
  <div class="container container--xl">
    <!-- content here -->
  </div>
</section>
```

### 2. Add Section Header
```html
<div class="text-center" style="margin-bottom: var(--space-8);">
  <p class="tagline">Features</p>
  <h2 class="heading heading--h2">Our Features</h2>
  <p class="text text--lg">Subtitle text here</p>
</div>
```

### 3. Add Grid with Cards
```html
<div class="grid grid-cols-3 gap-6">
  <article class="card">
    <div class="card__header">
      <i class="ri-rocket-fill" style="font-size: var(--font-size-7); color: var(--primary);"></i>
      <h3 class="card__title">Fast</h3>
    </div>
    <div class="card__body">
      <p class="card__description">Lightning fast performance</p>
    </div>
  </article>
  <!-- more cards -->
</div>
```

### Result
- ✅ Responsive 3-column grid (3→2→1)
- ✅ All classes from main.css
- ✅ Semantic HTML (h2→h3 hierarchy)
- ✅ Minimal custom CSS needed

---

**Version:** 1.0
**Last Updated:** 2025-01-26
**Total Classes:** 100+

**Remember:** Always use ready-made classes from `main.css` first. Only create custom CSS for specific spacing/layout that can't be achieved with utilities.
