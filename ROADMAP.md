# План следующей сессии — Phase 3: Section Development

**Дата создания:** 2025-01-26
**Текущий этап:** 🏗️ Phase 3 — Building Sections (Active Development)

---

## 📋 Резюме текущего состояния

### ✅ Что завершено (Phase 1-2):

**Phase 1: Element Library**
- 50+ UI элементов созданы
- Все элементы в `library/elements/`
- Demo в `library/demo-elements.html`

**Phase 2: Main.css Consolidation**
- Перенесли 13 категорий базовых компонентов в `library/styles/main.css`:
  - Buttons (4 варианта + sizes/states)
  - Navbar (animated underline)
  - Forms (inputs + states)
  - Cards (semantic structure)
  - Typography (headings, text, lead, tagline)
  - Links, Badges (5 colors), Breadcrumb
  - Spinner/Loader (overlays, button loading)
  - List with Icons, Section, Containers (6 sizes)
  - Grid utilities (`.grid .grid-cols-2/3/4 .gap-4/6/8`)
  - Flexbox utilities, Text alignment, Display, Width
  - Accessibility utilities

- Создали `library/COMPONENTS.md` — полный справочник 100+ классов с примерами
- Обновили `CLAUDE.md` с новой философией и текущим этапом
- Удалили все тестовые секции из `library/sections/` — чистый лист!

### 📁 Структура проекта:

```
library/
├── styles/
│   ├── reset.css          ✅ CSS Remedy reset
│   ├── variables.css      ✅ Design system (colors, spacing, typography)
│   └── main.css           ✅ 100+ base classes (buttons, navbar, grid, etc.)
├── elements/              ✅ 50+ UI элементов
├── sections/              ⚠️  ПУСТО — будем создавать завтра
├── demo-elements.html     ✅ Каталог элементов
├── demo-sections.html     ⚠️  Empty state — ждет секции
├── COMPONENTS.md          ✅ Справочник всех классов
└── CLAUDE.md              ✅ Инструкции для Claude

NEXT_SESSION.md            👈 ВЫ ЗДЕСЬ
```

---

## 🎯 Что будем делать ЗАВТРА

### **Главная цель:** Спроектировать систему секций и начать разработку

---

## 📝 Этап 1: Планирование системы секций (30-60 мин)

### Задачи:

1. **Определить полную таксономию секций**
   - Какие категории секций нам нужны (Headers, Heroes, Features, etc.)
   - Сколько вариантов каждой секции (header-1, header-2, header-3?)
   - Приоритизация: что делать в первую очередь

2. **Создать документ `library/SECTIONS_PLAN.md`**
   - Список всех секций с описаниями
   - Варианты для каждой категории
   - Wireframe/текстовое описание каждой секции
   - Приоритет разработки (P0, P1, P2)

3. **Определить naming convention**
   - Как называть файлы: `header-1.html` или `header-sticky-logo-nav-cta.html`?
   - Как организовать папки: `sections/headers/` или `sections/header/`?
   - Как ID в demo-sections.html: `header-1` или `header-sticky-nav`?

### Примерная структура SECTIONS_PLAN.md:

```markdown
# Section Library Plan

## 1. Headers (Priority: P0 — Высший)

**header-1** — Simple Sticky Navigation
- Logo (left) + Navbar (center) + CTA button (right)
- Sticky on scroll
- Burger menu on mobile
- Use: .navbar, .btn--primary, .container--xl

**header-2** — Logo + CTA (Minimal)
- Logo (left) + CTA button (right)
- No navigation
- Use: .btn--primary, .container--xl

**header-3** — Centered Logo + Nav Below
- Centered logo (top)
- Centered navbar (bottom)
- Use: .navbar, .text-center

---

## 2. Heroes (Priority: P0)

**hero-1** — Centered Text + CTA
- Centered heading, subheading, 2 buttons
- No image, gradient background
- Use: .heading--h1, .lead, .btn--primary/secondary

**hero-2** — Split (Text Left + Image Right)
- Text on left (50%), image on right (50%)
- Grid layout: .grid .grid-cols-2
- Use: .heading--h1, .text--lg, .btn--primary

**hero-3** — Full-width Background Image + Text Overlay
- Background image (cover)
- Centered text overlay
- Use: background-image, .text-center

---

## 3. Features (Priority: P1)

**features-1** — 3 Cards Grid
- 3 column grid (.grid .grid-cols-3)
- Icon + title + description
- Use: .card, .card__title, .grid

**features-2** — 4 Cards Grid
- 4 column grid (.grid .grid-cols-4)
- Compact cards
- Use: .card

**features-3** — Alternating Layout (Image + Text)
- Row 1: Image left, text right
- Row 2: Text left, image right
- Use: .grid .grid-cols-2

... и так далее для всех категорий
```

---

## ⚡ Этап 2: Разработка первых секций (основная работа)

### Приоритет P0 — начнем с этих:

#### 2.1. Headers (3 варианта)
- [ ] **header-1** — Simple Sticky (logo + nav + CTA)
- [ ] **header-2** — Minimal (logo + CTA)
- [ ] **header-3** — Centered (centered logo + nav)

#### 2.2. Heroes (3 варианта)
- [ ] **hero-1** — Centered Text + CTA
- [ ] **hero-2** — Split (text + image)
- [ ] **hero-3** — Full-width Background

#### 2.3. Footers (2 варианта)
- [ ] **footer-1** — 4-column (logo + links + newsletter)
- [ ] **footer-2** — Minimal (centered links + copyright)

**Цель дня:** Минимум 5-8 секций (3 headers + 3 heroes + 2 footers)

---

## 🔧 Workflow создания секции (чеклист)

Для каждой секции:

1. **Создать папку и файлы**
   ```bash
   mkdir -p library/sections/headers/
   touch library/sections/headers/header-1.html
   touch library/sections/headers/header-1.css
   ```

2. **HTML — собрать из готовых классов**
   - Использовать `.section`, `.container--xl`
   - Использовать `.heading`, `.text`, `.btn--primary`
   - Использовать `.grid .grid-cols-X .gap-6` для сеток
   - Использовать `.navbar`, `.card` где нужно
   - Семантика: `<section>`, `<h2>` для заголовка секции, `<h3>` для карточек
   - ARIA labels для навигации

3. **CSS — ТОЛЬКО layout**
   - Специфичные классы для секции (`.header-1__logo`, `.hero-2__image`)
   - Только positioning, spacing, layout
   - НЕ дублировать стили кнопок/текста — они в main.css

4. **Проверка COMPONENTS.md**
   - Убедиться, что используем готовые классы
   - Не создаем дублирующие стили

5. **Добавить в demo-sections.html**
   - Добавить CSS линк в `<head>`
   - Добавить превью секции в body
   - Проверить UTF-8 для кириллицы

6. **Тест в браузере**
   - Открыть demo-sections.html
   - Проверить адаптивность (320px, 768px, 1024px)
   - Проверить hover эффекты
   - DevTools → проверить консоль (нет ошибок)

7. **Commit**
   ```bash
   git add -A
   git commit -m "feat: add header-1 section (sticky nav with logo + CTA)"
   git push origin design
   ```

---

## 📚 Важные ссылки

- **COMPONENTS.md** — [`library/COMPONENTS.md`](library/COMPONENTS.md)
  Справочник всех 100+ классов из main.css

- **CLAUDE.md** — [`CLAUDE.md`](CLAUDE.md)
  Инструкции, текущий этап, философия проекта

- **Demo Elements** — `library/demo-elements.html`
  Посмотреть все доступные элементы

- **Main.css** — `library/styles/main.css`
  Все базовые классы

- **Variables.css** — `library/styles/variables.css`
  Design system переменные (spacing, colors, typography)

---

## 🎨 Design Principles (напоминание)

- **Component Reuse:** ВСЕГДА проверяй COMPONENTS.md перед написанием CSS
- **Semantic HTML:** `<section>` → `<h2>` → `<h3>` hierarchy
- **Grid Utilities:** Используй `.grid .grid-cols-3 .gap-6` вместо кастомного CSS
- **Mobile-First:** Сначала mobile, потом desktop (breakpoints: 768px, 1024px)
- **Accessibility:** ARIA labels, semantic tags, keyboard navigation

---

## ⚠️ Важные напоминания

1. **UTF-8 для кириллицы:**
   - После Write с русским текстом → сразу `head -5 filename`
   - Если corrupted → переписать файл

2. **Card titles = `<h3>`:**
   - Всегда используй `<h3 class="card__title">` в карточках
   - Semantic hierarchy: section `<h2>` → card `<h3>`

3. **Grid auto-responsive:**
   - `.grid-cols-3` автоматически становится 2 колонки @1024px, 1 колонка @768px
   - Не нужно писать media queries вручную

4. **Container по умолчанию:**
   - Используй `.container--xl` (1140px) для большинства секций
   - `.container--md` для blog articles
   - `.container--2xl` для wide sections

---

## 🚀 Ожидаемый результат сессии

**К концу завтрашней сессии:**

✅ Создан `SECTIONS_PLAN.md` с полной таксономией
✅ Разработано 5-8 секций (headers, heroes, footers)
✅ Все секции добавлены в `demo-sections.html`
✅ Все секции протестированы в браузере
✅ Все изменения закоммичены и запушены
✅ Готовы к продолжению разработки остальных секций

**Следующие сессии:**
- Features (grid, carousel, tabs)
- Pricing (cards, tables, comparison)
- Testimonials, FAQ, Gallery, Contact, CTA

---

## 📊 Прогресс Phase 3

```
Phase 3: Building Sections
├── Planning               ⏳ Завтра (начало сессии)
├── Headers (3)            ⏳ Завтра
├── Heroes (3)             ⏳ Завтра
├── Footers (2)            ⏳ Завтра
├── Features (4-5)         📅 Следующая сессия
├── Pricing (3-4)          📅 Следующая сессия
├── Testimonials (2-3)     📅 Следующая сессия
├── FAQ (2-3)              📅 Следующая сессия
├── Gallery (2-3)          📅 Следующая сессия
├── Contact (2-3)          📅 Следующая сессия
└── CTA (2-3)              📅 Следующая сессия

Estimated: 25-30 sections total
Timeline: 3-5 sessions to complete Phase 3
```

---

## 💬 Вопросы для обсуждения завтра

1. **Naming convention:**
   Как называть: `header-1` (короткий ID) или `header-sticky-nav-cta` (описательный)?

2. **Количество вариантов:**
   Сколько вариантов каждой секции нужно? 2-3 или больше?

3. **JavaScript:**
   Нужен ли JS для некоторых секций (carousel, tabs, accordion)?
   Или используем только CSS?

4. **Placeholder images:**
   Создавать ли новые placeholder изображения для секций?
   Или использовать существующие из `library/assets/images/`?

5. **Color schemes:**
   Нужны ли секции с темным фоном (dark variants)?

---

## 🎯 Главное правило

**Перед тем как писать CSS:**
1. Открой `library/COMPONENTS.md`
2. Найди готовый класс
3. Используй готовый класс
4. Только если НЕТ подходящего — пиши кастомный CSS

**Цель:** Минимум кастомного CSS, максимум переиспользования 🚀

---

**Статус:** 🟢 Готов к началу работы
**Приоритет:** 🔥 Высокий
**Estimated time:** 3-4 часа активной работы

**Удачной следующей сессии! 💪**
