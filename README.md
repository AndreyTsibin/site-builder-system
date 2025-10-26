# Site Builder — Landing Page Constructor

**Локальный конструктор лендингов с элементным подходом.**

> Быстрая сборка сайтов из готовых элементов и секций — полный контроль, без автоматизации.

---

## 📋 Описание

Site Builder — это инструмент для создания качественных лендингов с профессиональным кодом:

- **Библиотека элементов** — 15+ готовых компонентов (кнопки, формы, карточки, сетки)
- **Библиотека секций** — готовые блоки из элементов (Header, Hero, Footer)
- **Design System** — единая система цветов, типографики, spacing на CSS переменных
- **Ручная сборка** — полный контроль над структурой и контентом

**Особенности:**

- ✅ Без фреймворков — чистый HTML/CSS/Vanilla JS
- ✅ Mobile-first + адаптивный дизайн
- ✅ Performance: >90 PageSpeed Insights
- ✅ Accessibility: WCAG AA
- ✅ BEM + Semantic HTML5
- ✅ Нет placeholders — всегда реальный контент

---

## 🚀 Технологии

- **Фронтенд:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript (ES6+)
- **Иконки:** [Remix Icon](https://github.com/Remix-Design/RemixIcon) (2800+ open-source)
- **Интеграция:** Figma MCP (дизайн → код)
- **Форматы данных:** Markdown (business-data)

---

## 📂 Структура проекта

```
/site-builder/
├── library/
│   ├── styles/
│   │   ├── reset.css            # CSS Remedy reset
│   │   └── variables.css        # Design system (colors, typography, spacing)
│   ├── elements/                # Библиотека элементов
│   │   ├── buttons/             # button-primary, button-secondary, button-ghost
│   │   ├── forms/               # input-text, input-email, input-phone, textarea, checkbox
│   │   ├── grid/                # grid-2-cols, grid-3-cols, grid-4-cols
│   │   └── cards/               # card-basic, card-with-image, card-pricing
│   ├── sections/                # Библиотека секций
│   │   ├── header/              # header-1.html + header-1.css
│   │   ├── hero/                # hero-1.html + hero-1.css
│   │   └── footer/              # footer-1.html + footer-1.css
│   ├── js/
│   │   └── main.js              # Единый JS файл
│   ├── demo-elements.html       # Каталог всех элементов
│   ├── demo-sections.html       # Каталог всех секций
│   └── ui-kit.html              # Визуальный справочник
├── templates/
│   └── business-data.md         # Шаблон данных бизнеса
├── output/                      # Готовый шаблон для старта
│   ├── index.html
│   ├── styles/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── main.css             # Скомпилированные стили
│   ├── scripts/
│   │   └── main.js
│   └── images/
├── modules/                     # Дополнительные инструменты
│   └── figma-mcp/               # Интеграция с Figma
├── docs/                        # Документация
│   └── USAGE.md
├── CLAUDE.md                    # Инструкции для Claude Code
└── README.md
```

---

## 🎯 Workflow — Элементный подход

### Философия

**От элементов к секциям, от секций к лендингам:**

1. **Создаём элементы** — базовые компоненты UI (кнопки, формы, карточки)
2. **Собираем секции** — из элементов создаём блоки (header, hero, footer)
3. **Собираем лендинг** — из секций создаём готовую страницу

**Ключевые принципы:**

- ❌ Нет Python автоматизации
- ❌ Нет placeholders `{{...}}`
- ✅ Всегда реальный текст
- ✅ Ручная сборка (полный контроль)

### Быстрый старт

**1. Используй готовый шаблон:**

```bash
# Открой шаблон в браузере
open output/index.html

# Отредактируй содержимое под свой проект
# - Замени текст в секциях
# - Поменяй изображения
# - Настрой стили
```

**2. Или собери с нуля:**

```bash
# Открой каталог элементов
open library/demo-elements.html

# Открой каталог секций
open library/demo-sections.html

# Выбери нужные секции, скопируй в output/index.html
# Скомпилируй CSS из выбранных элементов/секций
```

### Создание нового элемента

**Пример: новая кнопка**

```bash
# 1. Создай папку
mkdir -p library/elements/buttons/button-success

# 2. Создай HTML
# library/elements/buttons/button-success/button-success.html
<button class="btn btn--success">Успешно</button>

# 3. Создай CSS
# library/elements/buttons/button-success/button-success.css
.btn--success {
  background: var(--success);
  color: var(--white);
}

# 4. Добавь в demo-elements.html

# 5. Тестируй
open library/demo-elements.html
```

### Создание новой секции

**Пример: секция "О компании"**

```bash
# 1. Создай папку
mkdir -p library/sections/about

# 2. Создай HTML из элементов
# library/sections/about/about-1.html
<section class="about">
  <div class="about__container">
    <div class="grid grid--2-cols about__grid">
      <!-- Используем элементы: grid, card, button -->
      <div class="card">...</div>
      <button class="btn btn--primary">...</button>
    </div>
  </div>
</section>

# 3. Создай CSS (BEM)
# library/sections/about/about-1.css

# 4. Добавь в demo-sections.html

# 5. Тестируй
open library/demo-sections.html
```

---

## 🧩 Библиотека элементов (15+ компонентов)

### Buttons (3)

- `button-primary` — Основная кнопка (синяя)
- `button-secondary` — Второстепенная кнопка (серая)
- `button-ghost` — Прозрачная кнопка

### Forms (5)

- `input-text` — Текстовое поле
- `input-email` — Email поле
- `input-phone` — Телефон поле
- `textarea` — Многострочное поле
- `checkbox` — Чекбокс

### Grid (3)

- `grid-2-cols` — Сетка 2 колонки
- `grid-3-cols` — Сетка 3 колонки
- `grid-4-cols` — Сетка 4 колонки

### Cards (3)

- `card-basic` — Базовая карточка
- `card-with-image` — Карточка с изображением
- `card-pricing` — Карточка тарифа

### Другие (1+)

- `feature-item` — Элемент преимущества с иконкой

---

## 🎨 Библиотека секций

| Секция     | Файл                           | Описание                                         |
| ---------- | ------------------------------ | ------------------------------------------------ |
| **Header** | `sections/header/header-1`     | Sticky header с логотипом, навигацией, CTA       |
| **Hero**   | `sections/hero/hero-1`         | 2-колоночный hero с текстом, кнопками, фичами    |
| **Footer** | `sections/footer/footer-1`     | 4-колоночный footer с контактами и соцсетями     |

**Будущие секции:** About, Features, Pricing, Testimonials, FAQ, Gallery, Contact Form, CTA, Stats, Team

---

## 🎨 Design System

**CSS Variables** (`library/styles/variables.css`):

### Цвета (HSL формат)

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

### Typography

- **Font:** Inter (Google Fonts)
- **Sizes:** `--font-size-1` (12px) → `--font-size-8` (48px)
- **Weights:** 400, 500, 700

### Spacing (4px base)

- **Scale:** `--space-1` (4px) → `--space-60` (240px)

### Breakpoints

- `--mobile: 320px`
- `--tablet: 768px`
- `--desktop: 1024px`
- `--wide: 1440px`

---

## 🛠️ Интеграция с Figma

**Модуль Figma MCP** позволяет генерировать элементы и секции из дизайна Figma.

```bash
# 1. Запусти MCP сервер
cd "/Users/andrejtsibin/Documents/Development/Claude Talk to Figma MCP/claude-talk-to-figma-mcp"
bun socket

# 2. Подключи Figma Plugin (получи channel ID)

# 3. В Claude Code работай с дизайном
Talk to Figma, channel {ID}
Покажи все кнопки
Сгенерируй кнопку "Primary"
```

**Документация:** [modules/figma-mcp/README.md](modules/figma-mcp/README.md)

---

## ⚡ Performance Targets

- **PageSpeed Insights:** >90 (mobile + desktop)
- **Lighthouse Accessibility:** >90 (WCAG AA)
- **Time to Interactive:** <3s
- **First Contentful Paint:** <1.8s

**Оптимизация:**

- ✅ Inline critical CSS
- ✅ Defer non-critical JS
- ✅ Image lazy loading
- ✅ Font display: swap
- ✅ Minified CSS (опционально, через modules/)

---

## 📝 Стандарты кода

**Senior-level code required:**

- **Principles:** DRY, KISS, SOLID
- **HTML:** Semantic HTML5 (nav, article, section — НЕ div soup)
- **CSS:** BEM methodology, Grid/Flexbox (НЕ floats/tables для layout)
- **JavaScript:** ES6+ only (const/let, arrow functions, async/await, destructuring)
- **Responsive:** Mobile-first approach
- **Accessibility:** ARIA labels, alt texts, keyboard navigation

---

## 🤝 Git Workflow

- **Branch:** `design`
- **Commit format:** `feat:`, `fix:`, `refactor:`, `chore:`

**Пример коммита:**

```
feat: add pricing section

- Create library/sections/pricing/pricing-1.html
- Add pricing-1.css with responsive grid
- Update demo-sections.html

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## 📖 Документация

- [CLAUDE.md](CLAUDE.md) — Инструкции для Claude Code
- [docs/USAGE.md](docs/USAGE.md) — Руководство по использованию
- [modules/figma-mcp/README.md](modules/figma-mcp/README.md) — Интеграция с Figma

---

## 🤖 Разработчик

**Claude Code** (Anthropic)

**Принципы кода:**

- DRY, KISS, SOLID
- Semantic HTML5
- BEM CSS methodology
- Mobile-first responsive
- Accessibility first

---

## 📝 License

Проект создан для личного/коммерческого использования.

---

**Status:** ✅ Production Ready
**Last Update:** 2025-10-26
**Architecture:** Element-based approach
