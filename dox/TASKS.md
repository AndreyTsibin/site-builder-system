# TASKS.MD — SITE BUILDER (ПОЛНАЯ ВЕРСИЯ)

**Total:** 38 атомарных задач | **Time:** 84h + 20% = ~101h | **Duration:** 12-17 дней

---

## 📋 ПРАВИЛА ВЫПОЛНЕНИЯ

**КРИТИЧНО:**
1. Последовательное выполнение (0.1 → 0.2a → ...)
2. Проверка зависимостей
3. Git feature branches
4. **English comments** в коде
5. **UTF-8 verification** для кириллицы: `head -5 file.md`
6. Копировать промпт между ---- в Claude Code CLI
7. Commit после каждой задачи

---

## SPRINT 0: FOUNDATION (11h, 7 tasks)

### 🎯 TASK 0.1: GIT SETUP (1h)
**Dependencies:** None

📋 COPY TO CLAUDE CODE CLI:
```
Инициализируй Git и создай структуру проекта Site Builder.

Прочитай PLANNING.md Task 0.1 и ARCHITECTURE.md "Project Structure".

Создай:
1. Git init + config
2. .gitignore (output/*, .DS_Store, node_modules, .env, *.log, __pycache__)
3. Папки: library/{design-system,sections}, templates, scripts, output
4. touch output/.gitkeep
5. Обнови README.md (описание, технологии, workflow 4 этапа, P0 секции, performance targets)

Требования: UTF-8, README на русском, comprehensive .gitignore

Commit: "feat: initialize project structure"
```

✅ Done when: Git init, folders created, README updated, initial commit

---

### 🎯 TASK 0.2A: COLOR SYSTEM (1.5h)
**Dependencies:** 0.1

📋 COPY TO CLAUDE CODE CLI:
```
Создай library/design-system/variables.css с цветовой системой HSL.

Прочитай ARCHITECTURE.md "Color System (HSL Format)" и PLANNING.md Task 0.2.

Создай :root с Dark Theme:
- Background: --bg-dark (0%), --bg (5%), --bg-light (10%), --bg-elevated (15%)
- Text: --text (90%), --text-muted (60%), --text-subtle (45%)
- Brand: --primary hsl(220,90%,56%), --primary-hover, --secondary, --accent
- Semantic: --success, --warning, --error, --info
- UI: --border, --border-light, --shadow rgba(0,0,0,0.3)

Создай .light-theme с инвертированными L (100-L):
- bg: 0%→100%, 5%→95%, 10%→90%, 15%→85%
- text: 90%→10%, 60%→40%, 45%→55%
- Brand/semantic без изменений

Требования: English comments, HSL format only, descriptive names
```

✅ Done when: variables.css с :root + .light-theme, HSL colors, English comments

---

### 🎯 TASK 0.2B: TYPOGRAPHY & SPACING (1.5h)
**Dependencies:** 0.2a

📋 COPY TO CLAUDE CODE CLI:
```
Дополни variables.css typography и spacing системами.

Прочитай ARCHITECTURE.md "Typography" и "Spacing", PLANNING.md Task 0.2.

Добавь в variables.css:

TYPOGRAPHY:
- --font-base: "Inter", -apple-system, ... (default)
- Закомментированные: Roboto, Montserrat, Open Sans, Poppins
- Font sizes: --text-xs (0.75rem/12px) до --text-4xl (3rem/48px) — 8 размеров
- Font weights: --font-regular (400), --font-medium (500), --font-bold (700)
- Line heights: --leading-tight (1.2), --leading-normal (1.5), --leading-relaxed (1.8)

SPACING (4px base):
- --space-1 (0.25rem/4px) до --space-60 (15rem/240px) — 15 размеров

Требования: English comments, rem units, clear sections
```

✅ Done when: Typography + Spacing добавлены, 8 font sizes, 15 spacing vars

---

### 🎯 TASK 0.2C: UI ELEMENTS & RESPONSIVE (1h)
**Dependencies:** 0.2b

📋 COPY TO CLAUDE CODE CLI:
```
Завершить variables.css UI элементами и responsive.

Прочитай ARCHITECTURE.md "UI Elements" и "Responsive".

Добавь:

UI ELEMENTS:
- Border-radius: --radius-sm (4px) до --radius-full (9999px) — 5 вариантов
- Box-shadows (multi-layer): --shadow-sm до --shadow-xl — 4 уровня
  Пример: --shadow-md: 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15);
- Transitions: --transition-fast (150ms), base (250ms), slow (350ms)

BREAKPOINTS (comment):
/* Mobile 320px, Tablet 768px, Desktop 1024px, Wide 1440px */

RESPONSIVE (@media в конце файла):
@media (min-width: 768px) { :root { --text-4xl: 3.5rem; --space-40: 12rem; }}
@media (min-width: 1024px) { :root { --text-4xl: 4rem; --space-40: 15rem; }}
@media (min-width: 1440px) { :root { --text-4xl: 4.5rem; }}

FONT LOADING (comment):
<!-- Inter --> <link preconnect...> инструкция

Требования: Multi-layer shadows, mobile-first, English comments
```

✅ Done when: UI elements, responsive vars, font loading comment, variables.css complete

---

### 🎯 TASK 0.3: RESET & UTILITIES CSS (2h)
**Dependencies:** 0.2c

📋 COPY TO CLAUDE CODE CLI:
```
Создай reset.css и utilities.css.

Прочитай ARCHITECTURE.md "Design System" и PLANNING.md Task 0.3.

ФАЙЛ 1: library/design-system/reset.css
- Comment: "Site Builder — CSS Reset, based on CSS Remedy"
- Box-sizing: border-box для всех
- Document: html font-size 16px, body min-height 100vh, font-family var(--font-base)
- Typography: h1-h6/p overflow-wrap, ul[class]/ol[class] no list-style
- Media: img/video/svg display block, max-width 100%
- Forms: inherit font, button no background/border
- Links: no underline, inherit color
- A11y: @media (prefers-reduced-motion), :focus-visible outline var(--primary)
- Scrollbar: webkit-scrollbar styling

ФАЙЛ 2: library/design-system/utilities.css
- Comment: "Site Builder — Utility Classes"
- Container: .container max-width 1280px, responsive padding, variants (--narrow, --wide, --full)
- Text: .text-left/center/right/justify
- Display: .block, .flex, .grid, .hidden
- Flex: .flex-row/column, .justify-*, .items-*, .gap-1 до .gap-8
- Responsive: .hidden-mobile, .show-mobile, .hidden-tablet, .hidden-desktop
- A11y: .sr-only, .skip-to-main
- Helpers: .no-scroll, .w-full, .h-full, .relative, .absolute

Требования: English comments, mobile-first, BEM modifiers, use CSS variables
```

✅ Done when: reset.css + utilities.css created, modern reset, utility classes

---

### 🎯 TASK 0.4: TEST DESIGN SYSTEM (2h)
**Dependencies:** 0.3

📋 COPY TO CLAUDE CODE CLI:
```
Создай library/design-system/test.html для визуальной проверки.

Прочитай PLANNING.md Task 0.4 и созданные variables.css, utilities.css.

HTML структура:
- <head>: подключить variables, reset, utilities CSS + Google Fonts Inter
- <style>: test-section, color-swatch, typography-example, spacing-box, shadow-box, theme-toggle (fixed top-right)
- <body>:
  - Theme Toggle button (onclick toggleTheme())
  - Container с секциями:
    1. COLORS: Background (4), Text (3), Brand (3), Semantic (4) swatches
    2. TYPOGRAPHY: Все sizes (xs→4xl), weights, line-heights с примерами
    3. SPACING: Визуализация space-1 до space-20 boxes
    4. UI ELEMENTS: Border-radius (5), Box-shadows (4), Transitions (3 buttons hover)
    5. UTILITIES: .container, text alignment, flex, responsive visibility
- <script>: function toggleTheme() { document.documentElement.classList.toggle('light-theme'); }

Требования: English text, все 3 CSS подключены, theme toggle работает
```

✅ Done when: test.html opens in browser, shows all variables, theme toggle works

⚠️ MANUAL TEST: Open in browser, check colors/typography/spacing/shadows/transitions/responsive

---

### 🎯 TASK 0.5: TEMPLATES (2h)
**Dependencies:** 0.1

📋 COPY TO CLAUDE CODE CLI:
```
Создай templates/business-data.md и sections-library.yaml.

Прочитай ARCHITECTURE.md "Data Templates" и PLANNING.md Task 0.5.

ФАЙЛ 1: templates/business-data.md (на РУССКОМ)
Структура:
# Данные бизнеса: [Название]
> Заполните этот шаблон...

Разделы:
1. Основная информация (тип, название, город, год, команда)
2. УТП (5 пунктов с примерами)
3. Услуги и цены (5 строк с примерами)
4. Контакты (телефон +7, email, адрес, график)
5. Соцсети (VK, Telegram, WhatsApp, Instagram, Facebook)
6. Доп. информация (о компании, ЦА, SEO keywords, статистика)
7. Примечания для Claude (тон, что не использовать)
8. Метаданные (дата, заполнил)

Примеры в [квадратных скобках]

ФАЙЛ 2: templates/sections-library.yaml
Пустая структура:
```yaml
sections:
  # Will be added in Sprint 1
metadata:
  version: "0.1.0"
  last_updated: "2025-01-24"
  total_sections: 0
  status: "empty_template"
```

Требования: business-data на русском, YAML valid, UTF-8 encoding
```

✅ Done when: Both files created, business-data русский, YAML valid

⚠️ UTF-8 CHECK MANDATORY:
```bash
head -10 templates/business-data.md
# Проверь кириллицу: ✅ чистая "Данные бизнеса" или ❌ кракозябры ����
```

---

## SPRINT 1: P0 SECTIONS (34h, 16 tasks)

[Из-за размера, даю сокращённый формат для оставшихся задач Sprint 1]

### 🎯 TASK 1.1A: HEADER HTML (1.5h) | Dep: 0.2c
📋 Создай library/sections/header-1/header-1.html | Semantic HTML, BEM, placeholders {{logo.text}}, {{nav.item1-3}}, {{contacts.phone}}, {{header.cta_text}} | <header> sticky, nav 3 items, phone tel:, CTA button, burger menu ARIA

### 🎯 TASK 1.1B: HEADER CSS (2h) | Dep: 1.1a
📋 Создай header-1.css | Sticky position, mobile-first, burger visible mobile/nav hidden, desktop opposite | Use CSS variables | .is-open class for mobile nav

### 🎯 TASK 1.1C: HEADER JS (1.5h) | Dep: 1.1b
📋 Создай header-1.js | Toggle burger menu, aria-expanded, close on: outside click, ESC, resize to desktop | Vanilla JS ES6+, use strict

### 🎯 TASK 1.2A: HERO-1 HTML (2h) | Dep: 0.2c
📋 Создай library/sections/hero-1/hero-1.html | Centered layout, H1 {{hero.title}}, subtitle {{hero.subtitle}}, form (email input + submit {{hero.cta_text}})

### 🎯 TASK 1.2B: HERO-1 CSS (2h) | Dep: 1.2a
📋 Создай hero-1.css | Text-align center, large H1 (--text-4xl), form centered, button primary, responsive padding

### 🎯 TASK 1.3A: HERO-2 HTML (2h) | Dep: 0.2c
📋 Создай library/sections/hero-2/hero-2.html | 2-column grid, left text (H1, subtitle, 2 CTA buttons primary/secondary), right image {{hero.image_url}}

### 🎯 TASK 1.3B: HERO-2 CSS (2h) | Dep: 1.3a
📋 Создай hero-2.css | CSS Grid 1fr 1fr, stack on mobile, 2 CTA buttons styled differently

### 🎯 TASK 1.4A: FEATURES-2COL HTML (2.5h) | Dep: 0.2c
📋 Создай library/sections/features-2col/features-2col.html | Section title, 2-col grid, 4 items (Remix Icon {{features.item1.icon}}, title, text)

### 🎯 TASK 1.4B: FEATURES-2COL CSS (2.5h) | Dep: 1.4a
📋 Создай features-2col.css | Grid 2 cols, 1 col mobile, icon styling, card layout

### 🎯 TASK 1.5A: FEATURES-3COL HTML (2.5h) | Dep: 0.2c
📋 Создай library/sections/features-3col/features-3col.html | Similar to 2col but 6 items, 3-col grid

### 🎯 TASK 1.5B: FEATURES-3COL CSS (2.5h) | Dep: 1.5a
📋 Создай features-3col.css | Grid 3 cols desktop, 2 tablet, 1 mobile

### 🎯 TASK 1.6: CTA-SIMPLE (3h) | Dep: 0.2c
📋 Создай library/sections/cta-simple/ (HTML+CSS combined) | Centered section, H2 {{cta.title}}, text {{cta.text}}, button {{cta.button_text}}, contrast background var(--primary)

### 🎯 TASK 1.7A: FOOTER HTML (3h) | Dep: 0.2c
📋 Создай library/sections/footer-1/footer-1.html | 4-col grid (About, Nav, Contacts, Social), Remix Icon social, copyright {{footer.copyright}}

### 🎯 TASK 1.7B: FOOTER CSS (3h) | Dep: 1.7a
📋 Создай footer-1.css | Grid 4 cols, stack mobile, social icons, footer styling

### 🎯 TASK 1.8: UPDATE SECTIONS YAML (2h) | Dep: 1.1a-1.7b
📋 Заполни templates/sections-library.yaml | Добавь 7 секций (header-1, hero-1, hero-2, features-2col, features-3col, cta-simple, footer-1) | Для каждой: id, name (русский), category, description (русский), best_for, features, placeholders

⚠️ UTF-8 CHECK после YAML:
```bash
head -20 templates/sections-library.yaml
```

---

## SPRINT 2: AUTOMATION & AI (20h, 9 tasks)

### 🎯 TASK 2.1A: PYTHON — PROJECT STRUCTURE (2h) | Dep: 1.8
📋 Создай scripts/assemble.py (часть 1) | Python 3.8+, UTF-8 encoding | Функция create_project_structure(project_name): создаёт output/{project}/css/js/assets/

### 🎯 TASK 2.1B: PYTHON — HTML ASSEMBLY (2h) | Dep: 2.1a
📋 Дополни assemble.py (часть 2) | Функция assemble_html(sections, project_dir): читает section HTML из library/sections/{id}/{id}.html, склеивает в output/{project}/index.html с <!DOCTYPE>, <head> (UTF-8 meta, CSS links), <body>

### 🎯 TASK 2.1C: PYTHON — CSS ASSEMBLY (2h) | Dep: 2.1b
📋 Дополни assemble.py (часть 3) | Функция assemble_css(sections, project_dir): копирует design-system CSS, собирает sections CSS в sections.css

### 🎯 TASK 2.1D: PYTHON — MAIN & CLI (2h) | Dep: 2.1c
📋 Дополни assemble.py (часть 4) | Функция load_selected_sections(json_path), main(), argparse CLI | Usage: python scripts/assemble.py --config templates/selected-sections.json

### 🎯 TASK 2.2: JSON TEMPLATE (1h) | Dep: 2.1d
📋 Создай templates/selected-sections.json | {"project_name": "example", "sections": [{"id": "header-1", "order": 1}, ...]} | Пример с 5 секциями

### 🎯 TASK 2.3: TEST ASSEMBLY SCRIPT (2h) | Dep: 2.2
📋 Протестируй Python script | Запусти: python scripts/assemble.py --config templates/selected-sections.json | Проверь output/example-project/ создан, index.html открывается, CSS подключен

### 🎯 TASK 2.4A: AI CONTENT GENERATION — PROMPTS (3h) | Dep: 2.3
📋 Создай docs/ai-generation-guide.md (на русском) | Промпт для Claude: "Заполни плейсхолдеры {{...}} в index.html используя business-data.md. Если данных нет — генерируй релевантный контент для типа бизнеса."

### 🎯 TASK 2.4B: AI LOGIC — BUSINESS-DATA EXAMPLE (3h) | Dep: 2.4a
📋 Создай templates/business-data-example.md | Заполненный пример для "Ремонт стиральных машин" с реальными данными | UTF-8 check обязателен

⚠️ UTF-8 CHECK:
```bash
head -10 templates/business-data-example.md
```

### 🎯 TASK 2.5: FIRST E2E TEST (3h) | Dep: 2.4b
📋 End-to-end test workflow | 1) Используй business-data-example.md 2) Claude предлагает секции → создай selected-sections.json 3) Запусти assemble.py 4) Claude заполняет плейсхолдеры 5) Открой в браузере, проверь

✅ Done when: Готовый лендинг в output/washing-machine-repair/, контент заполнен, открывается в браузере

---

## SPRINT 3: TESTING & POLISH (19h, 6 tasks)

### 🎯 TASK 3.1A: PERFORMANCE — PAGESPEED AUDIT (3h) | Dep: 2.5
📋 Запусти PageSpeed Insights на собранном лендинге | Зафиксируй baseline scores | Цель: >90 mobile+desktop

### 🎯 TASK 3.1B: PERFORMANCE — OPTIMIZATION (3h) | Dep: 3.1a
📋 Оптимизируй CSS/JS/HTML | Minify CSS, inline critical, defer JS, images lazy loading, font display=swap, preconnect | Повторный PageSpeed, достигни >90

### 🎯 TASK 3.2: CROSS-BROWSER TESTING (4h) | Dep: 3.1b
📋 Тестирование | Chrome 130+, Firefox 125+, Safari 17+ | Desktop + Mobile (iOS Safari, Android Chrome) | Проверь: sticky header, burger menu, forms (tel:, mailto:), adaptive, fonts

### 🎯 TASK 3.3: ACCESSIBILITY AUDIT (3h) | Dep: 3.1b
📋 Lighthouse accessibility audit | Исправь: alt texts, ARIA labels, keyboard navigation, color contrast >4.5:1 WCAG AA | Цель: accessibility score >90

### 🎯 TASK 3.4: UPDATE DOCUMENTATION (4h) | Dep: All previous
📋 Обнови README.md и создай docs/USAGE.md | README: финальные инструкции, performance metrics, примеры | USAGE: пошаговый workflow 4 этапа, команды, troubleshooting

### 🎯 TASK 3.5: SECOND TEST LANDING (2h) | Dep: 3.4
📋 Создай второй тестовый лендинг | Другой тип бизнеса (салон красоты) | Повтори workflow: business-data → sections → assemble → AI fill | Проверь универсальность системы

✅ MVP COMPLETE! 🎉

---

## 📊 PROGRESS TRACKING

**SPRINT 0 (11h):** 7 tasks
- [ ] 0.1: Git Setup
- [ ] 0.2a: Colors
- [ ] 0.2b: Typography & Spacing
- [ ] 0.2c: UI & Responsive
- [ ] 0.3: Reset & Utilities
- [ ] 0.4: Test Design System
- [ ] 0.5: Templates

**SPRINT 1 (34h):** 16 tasks
- [ ] 1.1a-c: Header (HTML, CSS, JS)
- [ ] 1.2a-b: Hero-1
- [ ] 1.3a-b: Hero-2
- [ ] 1.4a-b: Features-2col
- [ ] 1.5a-b: Features-3col
- [ ] 1.6: CTA-Simple
- [ ] 1.7a-b: Footer
- [ ] 1.8: Update YAML

**SPRINT 2 (20h):** 9 tasks
- [ ] 2.1a-d: Python Script (4 parts)
- [ ] 2.2: JSON Template
- [ ] 2.3: Test Script
- [ ] 2.4a-b: AI Logic (2 parts)
- [ ] 2.5: E2E Test

**SPRINT 3 (19h):** 6 tasks
- [ ] 3.1a-b: Performance
- [ ] 3.2: Cross-browser
- [ ] 3.3: Accessibility
- [ ] 3.4: Documentation
- [ ] 3.5: Second Landing

**TOTAL: 38 tasks, 84h + 20% buffer = ~101h**

---

## 🎯 КАК ИСПОЛЬЗОВАТЬ

1. Найди задачу (TASK X.Y)
2. Скопируй блок 📋 COPY TO CLAUDE CODE CLI
3. Вставь в Claude Code CLI терминал
4. Дождись выполнения
5. UTF-8 check если кириллица
6. Проверь ✅ Done when
7. Commit: `git commit -m "feat: task X.Y - description"`
8. Отметь как выполненную в Progress Tracking
9. Следующая задача

⚠️ **Не пропускай задачи** — есть зависимости
⚠️ **UTF-8 обязателен** для русского текста
⚠️ **English comments** в коде всегда
⚠️ **Commit после каждой** задачи

---

**Status:** ✅ READY
**Start:** Task 0.1
**Reference:** PRD.md, ARCHITECTURE.md, PLANNING.md

**Updated:** 2025-01-24
**By:** Claude + Fullstack Architect
