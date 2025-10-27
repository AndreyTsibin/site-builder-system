# Site Builder — Landing Page Constructor

**Библиотека UI элементов для создания лендингов с профессиональным кодом.**

> Модульная библиотека готовых компонентов — от элементов к секциям, от секций к лендингам.

---

## 📋 О проекте

Site Builder — это библиотека UI компонентов для быстрой сборки качественных лендингов:

- **Библиотека элементов** — 50+ готовых компонентов (кнопки, формы, карточки, навигация, пагинация, и т.д.)
- **Design System** — единая система на CSS переменных (цвета, типографика, spacing)
- **Component Reuse** — все элементы используют готовые базовые классы
- **Mobile-first** — адаптивный дизайн для всех устройств

**Ключевые особенности:**

- ✅ Без фреймворков — чистый HTML/CSS/Vanilla JS
- ✅ BEM методология + Semantic HTML5
- ✅ Готовые классы в `library/styles/main.css`
- ✅ Performance: >90 PageSpeed Insights
- ✅ Accessibility: WCAG AA compliance
- ✅ Реальный контент (NO placeholders!)

---

## 🎯 Текущая фаза: Разработка библиотеки элементов

**Что мы делаем сейчас:**

1. ✅ **Создание элементов** — полный набор UI компонентов
2. 🔄 **Текущий этап:** Ревизия элементов
   - Проверка hover-эффектов
   - Валидация использования готовых классов
   - Проверка CSS переменных
   - Тестирование JavaScript функций
   - Accessibility audit
3. 📝 **Следующий этап:** Документация элементов
   - Создать Markdown файл со списком всех элементов
   - Описать варианты использования
   - Примеры композиций
4. 🏗️ **Будущее:** Создание секций
   - Собирать полноценные секции из готовых элементов
   - Header, Hero, Features, Pricing, Footer и т.д.
   - Готовые шаблоны лендингов

---

## 🚀 Быстрый старт

### Просмотр библиотеки элементов

```bash
# Открой каталог всех элементов
open library/demo-elements.html

# Открой visual reference (UI Kit)
open library/ui-kit.html
```

### Создание нового элемента

```bash
# 1. Создай папку для элемента
mkdir -p library/elements/buttons/button-new-variant

# 2. Создай HTML с готовыми классами
# library/elements/buttons/button-new-variant/button-new-variant.html

# 3. Создай CSS (ТОЛЬКО layout — grid, flex, gap, padding)
# library/elements/buttons/button-new-variant/button-new-variant.css

# 4. Добавь CSS линк в demo-elements.html
# 5. Добавь в navigation sidebar
# 6. Добавь demo с ID в соответствующую секцию

# 7. Тестируй
open library/demo-elements.html
```

---

## 📂 Структура проекта

```
/site-builder/
├── library/
│   ├── styles/
│   │   ├── reset.css              # CSS Remedy reset
│   │   ├── variables.css          # Design system variables
│   │   └── main.css               # 🔥 Готовые базовые классы (buttons, typography, forms, cards, etc.)
│   ├── elements/                  # 🎨 Библиотека элементов (50+)
│   │   ├── buttons/               # button, button-secondary, button-tertiary, button-link, button-icon, etc.
│   │   ├── forms/                 # input-text, textarea, select, checkbox, radio, toggle, etc.
│   │   ├── cards/                 # card-horizontal, card-vertical, card-compact, card-icon, etc.
│   │   ├── navigation/            # breadcrumb, dropdown, navbar-dropdown
│   │   ├── pagination/            # pagination-numbers, pagination-compact, pagination-simple
│   │   ├── accordions/            # accordion-chevron, accordion-plus, accordion-bordered, etc.
│   │   ├── tabs/                  # tabs-left, tabs-center, tabs-right, tabs-bottom, etc.
│   │   ├── modals/                # modal-center, modal-drawer, modal-fullscreen
│   │   ├── sliders/               # slider-1, slider-2, slider-carousel
│   │   ├── tooltips/              # tooltip (top, bottom, left, right)
│   │   ├── media/                 # image-ratios, image-shapes, image-overlay, image-caption
│   │   ├── lists/                 # list-with-icons
│   │   ├── social/                # social-icons-1, social-icons-2
│   │   ├── loaders/               # spinner
│   │   ├── grid/                  # grid-2-cols, grid-3-cols, grid-4-cols
│   │   └── typography/            # heading-1 to heading-6, text, text-large, text-small, text-muted, lead
│   ├── sections/                  # 🏗️ Библиотека секций (в разработке)
│   │   ├── header/                # header-1
│   │   ├── hero/                  # hero-1
│   │   └── footer/                # footer-1
│   ├── assets/
│   │   └── images/                # placeholder.svg, placeholder-square.svg
│   ├── js/
│   │   └── main.js                # Единый JS файл
│   ├── demo-elements.html         # 📚 Полный каталог элементов
│   ├── demo-sections.html         # 📚 Каталог секций
│   └── ui-kit.html                # 🎨 Визуальный справочник
├── output/                        # Готовые шаблоны (в разработке)
│   ├── index.html
│   ├── styles/
│   ├── scripts/
│   └── images/
├── modules/                       # Дополнительные инструменты
│   ├── figma-integration/         # Интеграция с Figma MCP
│   ├── minification/              # CSS/JS минификация (опционально)
│   ├── accessibility/             # Accessibility проверки
│   └── performance/               # Performance анализ
├── docs/                          # Документация
├── CLAUDE.md                      # 🤖 Инструкции для Claude Code
└── README.md                      # Этот файл
```

---

## 🎨 Design System

### CSS Variables (`library/styles/variables.css`)

**Цвета (HSL формат для лёгкой темизации):**
```css
:root {
  --bg: hsl(220, 15%, 5%);        /* Dark background */
  --text: hsl(220, 15%, 90%);     /* Light text */
  --primary: hsl(220, 90%, 56%);  /* Brand blue */
  --success: hsl(142, 76%, 36%);  /* Green */
  --warning: hsl(38, 92%, 50%);   /* Orange */
  --error: hsl(0, 72%, 51%);      /* Red */
}
```

**Typography:**
- Font: Inter (Google Fonts)
- Sizes: `--font-size-1` (12px) → `--font-size-8` (48px)
- Weights: `--font-regular` (400), `--font-medium` (500), `--font-bold` (700)

**Spacing (4px base scale):**
- `--space-1` (4px) → `--space-60` (240px)

**Breakpoints:**
- `--mobile: 320px`
- `--tablet: 768px`
- `--desktop: 1024px`
- `--wide: 1440px`

### Базовые классы (`library/styles/main.css`)

**Кнопки:**
- `.btn .btn--primary` — основная кнопка (чёрная с белым текстом)
- `.btn .btn--secondary` — outline кнопка
- `.btn .btn--tertiary` — ghost кнопка
- `.btn .btn--link` — кнопка-ссылка

**Типографика:**
- `.heading .heading--h1` до `.heading--h6`
- `.text`, `.text--sm`, `.text--lg`, `.text--muted`
- `.lead` — крупный вводный текст

**Формы:**
- `.form-field`, `.form-field__label`, `.form-field__input`, `.form-field__textarea`, `.form-field__select`

**Карточки:**
- `.card`, `.card__header`, `.card__title`, `.card__description`, `.card__body`, `.card__footer`

**Контейнеры:**
- `.container`, `.container--default`, `.container--narrow`, `.container--wide`
- `.section`, `.section--sm`, `.section--lg`

---

## 🧩 Философия: Component Reuse

**🚨 КРИТИЧЕСКИ ВАЖНО:**

Мы **НЕ создаём новые стили** для базовых элементов! Все элементы используют готовые классы из `library/styles/main.css`.

**✅ ПРАВИЛЬНО:**
```html
<article class="card-new-variant">
  <h3 class="heading heading--h3">Heading</h3>
  <p class="text">Description text</p>
  <button class="btn btn--primary">Button</button>
</article>
```

```css
/* CSS элемента — ТОЛЬКО layout */
.card-new-variant {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  padding: var(--space-6);
  background: var(--bg-card);
}
```

**❌ НЕПРАВИЛЬНО:**
```css
/* НЕ делай так! */
.card-new-variant__heading {
  font-size: var(--font-size-3);
  font-weight: 700;
  /* ... дублирующие стили */
}
```

**Почему это важно:**
- 🎯 **Гибкость** — элементы переиспользуются везде
- 🚀 **Скорость** — не изобретаем велосипед
- 🔧 **Поддержка** — изменения в `main.css` применяются глобально
- 📦 **Меньше кода** — нет дублирования

---

## 📚 Библиотека элементов (50+)

### Кнопки (17)
- Primary, Secondary, Tertiary, Link, Icon
- Small variants, With icons, Loading states
- Button rows (left, center, right align)
- Back-to-top button

### Формы (15)
- Text, Email, Phone, URL, Search, Currency inputs
- Textarea, Select
- Checkbox, Radio, Toggle, Toggle with description
- Checkbox toggle, Checkbox card
- Signup form

### Карточки (10)
- Basic, With image, Pricing
- Horizontal (left/right), Vertical (top/bottom)
- Compact (left/right), Icon card

### Навигация (3)
- Breadcrumb, Dropdown, Navbar dropdown

### Пагинация (3)
- Numbers, Compact, Simple

### Аккордеоны (5)
- Chevron, Plus, Bordered, With icons, Nested

### Табы (6)
- Left/Center/Right align
- Center bordered
- Bottom cards, Bottom features

### Модальные окна (3)
- Center, Drawer, Fullscreen

### Слайдеры (5)
- Slider 1-4, Carousel

### Tooltips (1)
- Tooltip (all positions)

### Медиа (4)
- Image ratios, Image shapes, Image overlay, Image caption

### Списки (1)
- List with icons

### Социальные сети (2)
- Social icons variant 1 & 2

### Загрузка (1)
- Spinner

### Сетка (3)
- 2, 3, 4 columns

### Типографика (9)
- Headings 1-6, Text, Text large/small/muted, Lead

---

## 🔄 Текущий Workflow

### Фаза 1: Создание элементов ✅

Создан полный набор UI компонентов (50+ элементов).

### Фаза 2: Ревизия элементов 🔄 (текущая фаза)

**Задачи:**
1. Проверить все hover-эффекты
2. Валидировать использование готовых классов
3. Проверить использование CSS переменных
4. Протестировать JavaScript функции
5. Accessibility audit (ARIA, keyboard navigation)
6. Responsive тестирование (320px, 768px, 1024px, 1440px)

### Фаза 3: Документация 📝 (следующая)

**Создать:**
- `library/ELEMENTS.md` — полный список элементов с описаниями
- Примеры использования
- Варианты композиций

### Фаза 4: Создание секций 🏗️ (будущее)

**Собрать секции из готовых элементов:**
- Header variants
- Hero variants
- Features
- Pricing
- Testimonials
- FAQ
- Gallery
- Contact Form
- CTA sections
- Footer variants

### Фаза 5: Шаблоны лендингов 🎨 (будущее)

**Собрать готовые шаблоны:**
- SaaS landing
- E-commerce landing
- Portfolio landing
- Corporate landing

---

## 📖 Документация

- [CLAUDE.md](CLAUDE.md) — 🤖 Инструкции для Claude Code
- [library/demo-elements.html](library/demo-elements.html) — 📚 Полный каталог элементов
- [library/ui-kit.html](library/ui-kit.html) — 🎨 Визуальный справочник

---

## 🛠️ Технологии

- **HTML5** — Semantic markup
- **CSS3** — Grid/Flexbox, CSS Variables
- **JavaScript (ES6+)** — Vanilla JS, NO frameworks
- **Icons** — [Remix Icon](https://github.com/Remix-Design/RemixIcon) (2800+ open-source icons)
- **Integration** — Figma MCP (design → code)

---

## ⚡ Performance Targets

- **PageSpeed Insights:** >90 (mobile + desktop)
- **Lighthouse Accessibility:** >90 (WCAG AA)
- **Time to Interactive:** <3s
- **First Contentful Paint:** <1.8s

**Оптимизация:**
- ✅ Semantic HTML5
- ✅ Mobile-first responsive
- ✅ Image lazy loading
- ✅ Font display: swap
- ✅ CSS/JS минификация (optional, через modules/)

---

## 📝 Стандарты кода

**Senior-level code (10+ years best practices):**

- **Principles:** DRY, KISS, SOLID
- **HTML:** Semantic HTML5 (nav, article, section — NOT div soup)
- **CSS:** BEM methodology, Grid/Flexbox (NO floats/tables for layout)
- **JavaScript:** ES6+ (const/let, arrow functions, async/await, destructuring)
- **Responsive:** Mobile-first approach
- **Accessibility:** ARIA labels, alt texts, keyboard navigation

---

## 🤝 Git Workflow

- **Branch:** `design`
- **Commit format:** `feat:`, `fix:`, `refactor:`, `chore:`

**Пример коммита:**
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

## 🤖 Разработка

**Powered by Claude Code** (Anthropic)

**Принципы:**
- Component Reuse Philosophy
- DRY, KISS, SOLID
- Semantic HTML5
- BEM CSS methodology
- Mobile-first responsive
- Accessibility first

---

## 📊 Статус проекта

**Текущая фаза:** 🔄 Ревизия библиотеки элементов

**Прогресс:**
- ✅ Создано 50+ UI элементов
- 🔄 Ревизия и проверка качества (в процессе)
- 📝 Документация элементов (следующий этап)
- 🏗️ Создание секций (будущее)
- 🎨 Шаблоны лендингов (будущее)

**Last Update:** 2025-10-26
**Architecture:** Element-based approach
**Status:** 🚀 Active Development
