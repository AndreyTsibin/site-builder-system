# Site Builder — AI-Powered Landing Page Constructor

**Локальный конструктор лендингов с автоматической генерацией контента через Claude Code.**

> Быстрая сборка сайтов из готовых секций ("LEGO-подход") с AI-генерацией контента на основе данных бизнеса клиента.

---

## 📋 Описание

Site Builder — это инструмент для создания качественных лендингов за 30 минут:
- **Компонентная библиотека** — готовые секции (Header, Hero, Features, CTA, Footer и др.)
- **Design System** — единая система цветов, типографики, spacing на CSS переменных
- **Python-скрипт сборки** — автоматическая склейка секций в готовый лендинг
- **AI-генерация контента** — Claude Code заполняет плейсхолдеры на основе business-data.md

**Особенности:**
- ✅ Без фреймворков — чистый HTML/CSS/Vanilla JS
- ✅ Mobile-first + адаптивный дизайн
- ✅ Performance: >90 PageSpeed Insights
- ✅ Accessibility: WCAG AA
- ✅ BEM + Semantic HTML5

---

## 🚀 Технологии

- **Фронтенд:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript (ES6+)
- **Иконки:** [Remix Icon](https://github.com/Remix-Design/RemixIcon) (2800+ open-source)
- **AI:** Claude Code (терминал) для генерации контента
- **Скрипты:** Python 3.8+ (сборка лендингов)
- **Форматы данных:** Markdown (business-data), YAML (sections-library), JSON (selected-sections)

---

## 📂 Структура проекта

```
/site-builder/
├── library/
│   ├── design-system/          # CSS переменные, reset, utilities
│   │   ├── variables.css       # Colors, typography, spacing
│   │   ├── reset.css           # CSS Remedy reset
│   │   └── utilities.css       # Container, flex, grid helpers
│   └── sections/               # Готовые секции (HTML + CSS + JS)
│       ├── header-1/
│       ├── hero-1/, hero-2/
│       ├── features-2col/, features-3col/
│       ├── cta-simple/
│       └── footer-1/
├── templates/
│   ├── business-data.md        # Шаблон данных бизнеса (заполняет клиент)
│   ├── sections-library.yaml   # Описание всех секций для Claude
│   └── selected-sections.json  # Выбранные секции для сборки
├── scripts/
│   └── assemble.py             # Python-скрипт сборки лендинга
├── output/                     # Готовые проекты (генерируется)
│   └── [project-name]/
│       ├── index.html
│       ├── css/, js/, assets/
├── dox/                        # Документация
│   ├── PRD.md                  # Product Requirements
│   ├── ARCHITECTURE.md         # Техническая архитектура
│   ├── PLANNING.md             # Roadmap (4 спринта)
│   └── TASKS.md                # 38 атомарных задач для Claude Code
└── README.md
```

---

## 🎯 Workflow — 4 этапа работы

### Этап 1: Планирование секций (5 мин)
1. Клиент заполняет `templates/business-data.md` (название, услуги, контакты, УТП)
2. Команда Claude Code: *"Предложи секции для лендинга на основе business-data.md"*
3. Claude анализирует данные и предлагает список секций (Header + Hero + Features + CTA + Footer)
4. Пользователь корректирует список → сохраняется в `templates/selected-sections.json`

### Этап 2: Сборка структуры (2 мин)
```bash
python scripts/assemble.py --config templates/selected-sections.json
```
- Скрипт создаёт `output/[project-name]/`
- Копирует выбранные секции из `library/sections/`
- Склеивает HTML с плейсхолдерами `{{hero.title}}`, `{{features.item1}}`
- Собирает CSS (design-system + секции)
- **Результат:** Готовый "каркас" с пустыми плейсхолдерами

### Этап 3: AI-генерация контента (15 мин)
Команда Claude Code: *"Заполни плейсхолдеры в index.html используя business-data.md"*

Claude анализирует:
- **Данные из business-data.md** (телефон, цены, адрес) → вставляет как есть
- **Отсутствующие данные** (заголовки, описания, отзывы) → генерирует сам

**Результат:** Полностью заполненный лендинг с релевантным контентом

### Этап 4: Тестирование (8 мин)
```bash
open output/[project-name]/index.html
```
- Проверка адаптивности (mobile/tablet/desktop)
- Проверка форм (tel:, mailto:, WhatsApp)
- Финальные правки через команды Claude Code

---

## 🧩 Библиотека секций (P0 — обязательные)

| Секция | Описание | Варианты |
|--------|----------|----------|
| **Header** | Логотип, меню, телефон, CTA, burger-меню | header-1 (sticky) |
| **Hero** | Главный экран с заголовком и CTA | hero-1 (centered + form), hero-2 (2-column + image) |
| **Features** | Преимущества с иконками | features-2col (4 items), features-3col (6 items) |
| **CTA** | Призыв к действию | cta-simple (centered) |
| **Footer** | Подвал с контактами и соцсетями | footer-1 (4-column) |

**Будущие секции (P1/P2):** About, Pricing, Testimonials, FAQ, Gallery, Contact Form, Stats, Team, How it Works

---

## ⚡ Performance Targets

- **PageSpeed Insights:** >90 (mobile + desktop)
- **Time to Interactive (TTI):** <3s
- **First Contentful Paint (FCP):** <1.8s
- **Cumulative Layout Shift (CLS):** <0.1
- **Lighthouse Accessibility:** >90 (WCAG AA)

**Оптимизации:**
- Inline critical CSS
- Defer non-critical JS
- Lazy loading images
- Font display: swap
- Preconnect to Google Fonts
- Minified CSS (production)

---

## 🛠️ Разработка

### Текущий статус

**STAGE 4 COMPLETE** — Task Orchestration (TASKS.md готов)

**Следующий шаг:** STAGE 5 — Development (выполнение задач)

### Начало работы

```bash
# Клонировать репозиторий
git clone [repo-url]
cd site-builder

# Проверить структуру
ls -la library/ templates/ scripts/ output/

# Запустить первую задачу из dox/TASKS.md
# Task 0.1: Git Setup → Task 0.2a: Colors → ...
```

### Команды (после завершения Sprint 2)

```bash
# Создать лендинг из выбранных секций
python scripts/assemble.py --config templates/selected-sections.json

# Открыть в браузере
open output/[project-name]/index.html
```

---

## 📖 Документация

- [PRD.md](dox/PRD.md) — Product Requirements Document
- [ARCHITECTURE.md](dox/ARCHITECTURE.md) — Техническая архитектура, дизайн-система
- [PLANNING.md](dox/PLANNING.md) — Roadmap (4 спринта, 84h + 20% buffer)
- [TASKS.md](dox/TASKS.md) — 38 атомарных задач с готовыми промптами для Claude Code CLI

---

## 🎨 Design System Highlights

**Цвета (HSL формат):**
```css
:root {
  --bg: hsl(220, 15%, 5%);        /* Dark background */
  --text: hsl(220, 15%, 90%);     /* Light text */
  --primary: hsl(220, 90%, 56%);  /* Brand blue */
}
.light-theme {
  --bg: hsl(220, 15%, 95%);       /* Invert L: 100 - 5 */
  --text: hsl(220, 15%, 10%);     /* Invert L: 100 - 90 */
}
```

**Typography:**
- Font: Inter (Google Fonts)
- Sizes: 12px → 48px (8 размеров)
- Weights: 400, 500, 700

**Spacing (4px base):**
- Scale: 4px, 8px, 12px ... 240px (15 размеров)

---

## 🤝 Разработчик

**Claude Code** (Anthropic) + **Fullstack Architect Skill**

**Принципы кода:**
- DRY, KISS, SOLID
- Semantic HTML5 (не div soup)
- BEM CSS methodology
- Mobile-first responsive
- Accessibility first (ARIA, keyboard nav, alt texts)

---

## 📝 License

Проект создан для личного/коммерческого использования.

---

**Status:** 🚧 In Development (Sprint 0 starting)
**Last Update:** 2025-01-24
**Next Task:** [Task 0.1 — Git Setup](dox/TASKS.md)
