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

**Промпт для Claude Code:**

```
Заполни все плейсхолдеры {{...}} в output/{project_name}/index.html
используя данные из templates/business-data.md.

ПРАВИЛА:
1. Данные из business-data.md используй как есть
2. Если данных нет — генерируй релевантный контент для типа бизнеса
3. НЕ используй слова "пример", "шаблон", "замените"
4. Формат телефона: +7 (999) 123-45-67
5. Remix Icon классы: ri-time-line, ri-shield-check-line, ri-tools-line и т.д.

ПЛЕЙСХОЛДЕРЫ:
- {{meta.title}}, {{meta.description}} — SEO (120-160 символов)
- {{logo.text}}, {{nav.item1-3}} — Навигация (Услуги, О нас, Контакты)
- {{contacts.phone}}, {{contacts.email}}, {{contacts.address}}
- {{hero.title}}, {{hero.subtitle}}, {{hero.cta_text}} — Главный экран
- {{features.section_title}}, {{features.item1-6.icon/title/text}} — Преимущества
- {{cta.title}}, {{cta.text}}, {{cta.button_text}} — Призыв к действию
- {{footer.copyright}}, {{footer.about}} — Подвал
- {{social.vk/telegram/whatsapp/instagram}} — Соцсети (если нет — оставь плейсхолдер)

КАЧЕСТВО:
✅ Конкретика: "гарантия 3 года", "выезд за 1 час" (НЕ "высокое качество")
✅ Цифры и факты: "12 500 заказов", "рейтинг 4.9/5.0"
✅ Тон: профессиональный, дружелюбный
❌ Штампы: "мы лучшие", "только у нас"

После заполнения:
1. Проверь UTF-8: head -50 output/{project_name}/index.html
2. Проверь незаполненные: grep "{{" output/{project_name}/index.html
3. Открой в браузере: open output/{project_name}/index.html
```

**Результат:** Полностью заполненный лендинг с релевантным контентом за 5-10 минут

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

## 📝 Примеры плейсхолдеров

**Meta-теги:**
```html
<title>{{meta.title}}</title>
<!-- → РемТехСервис — Ремонт стиральных машин в Москве -->

<meta name="description" content="{{meta.description}}">
<!-- → Ремонт стиральных машин в Москве. Выезд за 1 час. Гарантия до 3 лет. -->
```

**Header:**
```html
<span>{{logo.text}}</span>                    → РемТехСервис
<a href="#services">{{nav.item1}}</a>         → Услуги
<a href="tel:{{contacts.phone}}">...</a>      → +7 (495) 789-45-67
<button>{{header.cta_text}}</button>          → Вызвать мастера
```

**Hero:**
```html
<h1>{{hero.title}}</h1>
<!-- → Ремонт стиральных машин в Москве за 1 час -->

<p>{{hero.subtitle}}</p>
<!-- → Бесплатная диагностика, гарантия до 3 лет, работаем 24/7 -->
```

**Features:**
```html
<h2>{{features.section_title}}</h2>           → Почему выбирают нас
<i class="{{features.item1.icon}}"></i>       → ri-time-line
<h3>{{features.item1.title}}</h3>             → Выезд мастера за 1 час
<p>{{features.item1.text}}</p>
<!-- → Оперативно выезжаем на заказы в любой район Москвы и МО. -->
```

**Footer:**
```html
<p>{{footer.copyright}}</p>
<!-- → © 2025 РемТехСервис. Все права защищены. -->

<a href="{{social.vk}}">VK</a>                → https://vk.com/remtechservice
```

**Remix Icon примеры:**
- `ri-time-line` — Скорость, время
- `ri-shield-check-line` — Гарантия, качество
- `ri-tools-line` — Инструменты, ремонт
- `ri-award-line` — Награды, достижения
- `ri-home-line` — Дом, локация

**Полный список:** https://remixicon.com/

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

**✅ SPRINT 2 COMPLETE** — Automation & AI (9/9 tasks, 100%)

**Что работает:**
- ✅ Python скрипт сборки лендингов (0.02s на проект)
- ✅ AI-генерация контента через Claude Code
- ✅ E2E тест пройден (washing-machine-repair)
- ✅ Design System + 7 готовых секций
- ✅ Полный workflow от business-data до готового лендинга

**Следующий шаг:** Sprint 3 — Testing & Polish (6 tasks, 19h)

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

### Команды

```bash
# 1. Создать лендинг из выбранных секций
python scripts/assemble.py --config templates/selected-sections.json

# 2. Заполнить плейсхолдеры (используй промпт из "Этап 3" выше)

# 3. Проверка UTF-8 encoding
head -50 output/[project-name]/index.html

# 4. Поиск незаполненных плейсхолдеров
grep "{{" output/[project-name]/index.html

# 5. Открыть в браузере
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

**Status:** ✅ Sprint 2 Complete (Automation & AI working!)
**Last Update:** 2025-10-24
**Progress:** 31/38 tasks (81.6%) | Sprint 3 starting
**Next Task:** [Task 3.1a — Performance Audit](dox/TASKS.md)
