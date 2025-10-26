# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## ⚠️ КРИТИЧЕСКИ ВАЖНО — НАЧНИ ЗДЕСЬ

**Статус проекта:** Полная реструктуризация в процессе

📋 **ОБЯЗАТЕЛЬНО:** Перед любой работой прочитай [CHANGES-PLAN.md](CHANGES-PLAN.md)

Этот файл содержит **полный план фундаментальных изменений** архитектуры проекта:
- Переход от автоматизации к ручной разработке
- Новая философия: элементный подход (от элементов к секциям)
- Отказ от Python-автоматизации (навсегда)
- Отказ от placeholders
- Новая структура library/, output/, templates/

**План согласован и готов к поэтапному внедрению.**

**Твоя задача:** Читай план, следуй ему пошагово, вноси изменения согласно описанию.

---

## PROJECT OVERVIEW (УСТАРЕВАЕТ — см. CHANGES-PLAN.md)

**Site Builder** — AI-powered landing page constructor (local, no frameworks)

- **Goal:** ~~Assemble landing pages from ready-made sections~~ → **Новый подход:** элементный подход (см. CHANGES-PLAN.md)
- **Current Stage:** ~~MVP Complete~~ → **Реструктуризация**
- **Phase:** Фундаментальные изменения архитектуры

---

## ESSENTIAL COMMANDS (УСТАРЕВАЮТ — см. CHANGES-PLAN.md)

⚠️ **ВНИМАНИЕ:** Команды ниже устаревают. Новый workflow описан в [CHANGES-PLAN.md](CHANGES-PLAN.md).

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
- **Automation:** ~~Python 3.8+ (assembly script)~~ → **ОТКАЗАЛИСЬ** (см. CHANGES-PLAN.md)
- **AI:** Claude Code terminal (commands, NOT API)
- **Data Formats:** Markdown (business-data)

---

## ARCHITECTURE (МЕНЯЕТСЯ — см. CHANGES-PLAN.md)

⚠️ **Архитектура полностью меняется.** Детали в [CHANGES-PLAN.md](CHANGES-PLAN.md).

### Новая философия (кратко):

**Элементный подход:**
1. Создаём библиотеку элементов (`library/elements/`)
2. Собираем секции из элементов (`library/sections/`)
3. Собираем лендинг из секций вручную (`output/index.html`)

**Ключевые изменения:**
- ❌ Нет автоматизации Python
- ❌ Нет placeholders `{{...}}`
- ✅ Всегда реальный текст
- ✅ Ручная сборка (полный контроль)

### Design System

**CSS Variables** (`library/design-system/variables.css`):
- Colors: HSL format for easy theme switching
- Typography: 8 font sizes (12px → 48px), Inter font family
- Spacing: 4px base scale (4px → 240px)
- Breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)

**Key Features:**
- Mobile-first responsive design
- BEM methodology for CSS class names
- Semantic HTML5 (nav, article, section, not div soup)
- ~~Performance-optimized (minified CSS, deferred JS)~~ → Минификация опциональна (modules/)

---

## PROJECT STRUCTURE (МЕНЯЕТСЯ — см. CHANGES-PLAN.md)

⚠️ **Новая структура описана в** [CHANGES-PLAN.md](CHANGES-PLAN.md)

**Целевая структура (после изменений):**
```
/site-builder/
├── library/
│   ├── design-system/        # variables.css, reset.css (utilities.css УДАЛЁН)
│   ├── elements/             # Новая папка: buttons/, forms/, grid/, cards/, etc.
│   ├── sections/             # Переделывается: будут созданы заново
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
├── modules/                   # Новая папка: minification, accessibility, performance
├── docs/
└── CHANGES-PLAN.md           # ГЛАВНЫЙ ДОКУМЕНТ ДЛЯ РАБОТЫ
```

**Key files:**
- 📋 **[CHANGES-PLAN.md](CHANGES-PLAN.md)** — ГЛАВНЫЙ ДОКУМЕНТ, с него начинай работу
- [README.md](README.md) — Overview (устаревает)
- [docs/USAGE.md](docs/USAGE.md) — Usage guide (устаревает)

---

## WORKING WITH PROJECT (ОБНОВЛЁННОЕ)

### Начало работы в новой сессии:

1. ✅ **ОБЯЗАТЕЛЬНО:** Прочитай [CHANGES-PLAN.md](CHANGES-PLAN.md)
2. Определи, на каком этапе внедрения находимся
3. Следуй плану пошагово
4. После каждого этапа — коммит

### При внедрении изменений:

1. **Читай план** — [CHANGES-PLAN.md](CHANGES-PLAN.md) содержит все детали
2. **Пошагово** — не делай всё сразу, двигайся по плану
3. **Тестируй** — после каждого изменения проверяй работоспособность
4. **Коммить** — фиксируй каждый этап

### При создании элементов (новый подход):

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
