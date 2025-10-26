# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## ⚠️ КРИТИЧЕСКИ ВАЖНО — НАЧНИ ЗДЕСЬ

**Статус проекта:** ✅ Реструктуризация завершена!

**Новая архитектура:**
- ✅ Элементный подход (library/elements/)
- ✅ Секции из элементов (library/sections/)
- ✅ Демо файлы и UI Kit
- ✅ Готовый шаблон output/
- ✅ Опциональные модули (modules/)
- ✅ Отказ от автоматизации Python
- ✅ Отказ от placeholders (всегда реальный текст)

---

## PROJECT OVERVIEW

**Site Builder** — Landing page constructor with element-based approach (local, no frameworks)

- **Goal:** Build landing pages from reusable elements and sections
- **Current Stage:** Production ready
- **Phase:** Active development

---

## ESSENTIAL COMMANDS

### Verify & Test (актуально)

```bash
# Check UTF-8 encoding (CRITICAL for Cyrillic)
head -50 output/index.html

# Open in browser
open output/index.html

# Run local server
cd output && python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## TECH STACK

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript ES6+
- **Icons:** [Remix Icon](https://github.com/Remix-Design/RemixIcon) (2800+ open-source)
- **Automation:** None (manual development, full control)
- **AI:** Claude Code terminal (commands, NOT API)
- **Data Formats:** Markdown (business-data)

---

## ARCHITECTURE

### Элементный подход (Element-based Approach):

1. **Создаём библиотеку элементов** (`library/elements/`)
   - Buttons, forms, grid, cards, etc.
   - Каждый элемент — отдельная папка с HTML + CSS
   - Реальный текст (NO placeholders!)

2. **Собираем секции из элементов** (`library/sections/`)
   - Header, hero, footer, etc.
   - Композиция готовых элементов
   - BEM методология

3. **Собираем лендинг из секций вручную** (`output/index.html`)
   - Копируем нужные секции
   - Полный контроль над результатом
   - Компилируем CSS в `output/styles/main.css`

**Ключевые принципы:**
- ✅ Нет автоматизации Python
- ✅ Нет placeholders `{{...}}`
- ✅ Всегда реальный текст
- ✅ Ручная сборка (полный контроль)

### Design System

**CSS Variables** (`library/styles/variables.css`):
- Colors: HSL format for easy theme switching
- Typography: 8 font sizes (`--font-size-1` ... `--font-size-8`), Inter font family
- Spacing: 4px base scale (4px → 240px)
- Breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)

**Key Features:**
- Mobile-first responsive design
- BEM methodology for CSS class names
- Semantic HTML5 (nav, article, section, not div soup)
- Performance optimization optional (modules/minification/)

---

## PROJECT STRUCTURE
```
/site-builder/
├── library/
│   ├── styles/               # variables.css, reset.css
│   ├── elements/             # buttons/, forms/, grid/, cards/, etc.
│   ├── sections/             # header/, hero/, footer/, etc.
│   ├── js/main.js            # Единый JS файл
│   ├── demo-elements.html
│   ├── demo-sections.html
│   └── ui-kit.html
├── templates/
│   └── business-data.md      # Единственный файл
├── output/
│   ├── index.html            # Готовый шаблон
│   ├── styles/               # reset.css, variables.css, main.css
│   ├── images/
│   └── scripts/main.js
├── modules/                   # minification/, accessibility/, performance/, figma-mcp/
└── docs/
```

**Key files:**
- [README.md](README.md) — Project overview
- [docs/USAGE.md](docs/USAGE.md) — Usage guide
- [library/demo-elements.html](library/demo-elements.html) — Elements catalog
- [library/ui-kit.html](library/ui-kit.html) — Visual reference

---

## WORKING WITH PROJECT

### При создании элементов:

1. **Создай папку** в `library/elements/[element-type]/[element-name]/`
2. **HTML** — с реальным текстом (НЕ placeholders)
3. **CSS** — BEM, design-system переменные
4. **Добавь в demo-elements.html** с уникальным ID
5. **Тест** — открой `demo-elements.html` в браузере

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
- **Commit message template:**

  ```
  feat: add new pricing section

  - Create library/sections/pricing/pricing.html
  - Add pricing.css with responsive grid
  - Update sections.yaml catalog

  Generated with Claude Code
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

- PageSpeed Insights: >90 (mobile + desktop)
- Lighthouse Accessibility: >90 (WCAG AA)
- Time to Interactive: <3s
- First Contentful Paint: <1.8s

---

## TESTING CHECKLIST (ОБНОВЛЁННОЕ)

**Before completing any improvement:**

1. Code follows standards (BEM, semantic HTML, ES6+)
2. UTF-8 verified for Cyrillic: `head -50 output/index.html`
3. CSS uses design-system variables: `var(--primary)`, `var(--space-4)`
4. Responsive design tested (320px, 768px, 1024px)
5. Accessibility checked (ARIA, alt texts, keyboard nav)
6. ~~Assembly works~~ → **Проверка:** `open output/index.html` работает
7. ~~No placeholders~~ → **Нет placeholders** (всегда реальный текст)
8. Browser renders correctly, no console errors (F12 → Console)
9. Git commit with proper format

---

**Version:** 3.0 (Реструктуризация)
**Last Update:** 2025-10-26
**Status:** Фундаментальные изменения архитектуры — см. [CHANGES-PLAN.md](CHANGES-PLAN.md)
