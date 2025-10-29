# CLAUDE.md

Инструкции для Claude Code при работе с проектом Site Builder 2.0

---

## 🎯 ТЕКУЩАЯ ФАЗА: Начало разработки

**Статус:** 🏗️ Фаза 1 — Создание библиотеки секций

**Выполнено:**
- ✅ **Миграция на Astro + Tailwind 4**
  - Установлен Astro 5
  - Установлен Tailwind 4 с Vite плагином
  - Создана базовая структура проекта
  - Настроены конфиги (astro.config.mjs, tsconfig.json)
  - Создан BaseLayout с Remix Icons
  - Создана демо-страница

**Текущая фаза — Создание секций:**
- 🔄 Создать библиотеку готовых секций из Flowbite/HyperUI
- 🔄 Heroes (5 вариантов)
- 🔄 Features (3 варианта)
- 🔄 Pricing (2 варианта)
- 🔄 Forms (Contact, Quiz)
- 🔄 Footers (3 варианта)

**Следующие фазы:**
- 📝 Фаза 2: Готовые шаблоны лендингов (SaaS, E-commerce, Portfolio)
- 🚀 Фаза 3: CLI для быстрой генерации

---

## АРХИТЕКТУРА ПРОЕКТА

**Site Builder 2.0** — конструктор лендингов на Astro + Tailwind 4

**Философия:** Собирай лендинг за минуты из готовых секций

**Стек:**
```
Astro 5        → Генерирует чистый HTML
Tailwind 4     → Утилитарные классы
Remix Icons    → 2800+ иконок
```

**Workflow:**
1. **Библиотека секций** → Готовые `.astro` компоненты
2. **Быстрая сборка** → Claude Code собирает лендинг
3. **Production** → `npm run build` → Деплой

---

## TECH STACK

- **Frontend:** Astro 5 (Static Site Generator)
- **Styling:** Tailwind 4 с Vite плагином
- **Icons:** Remix Icon 4.7.0 (CDN)
- **TypeScript:** Опционально
- **Deployment:** Netlify/Vercel/обычный хостинг

---

## ESSENTIAL COMMANDS

```bash
# Dev-сервер
npm run dev
# → http://localhost:4321

# Production сборка
npm run build
# → dist/

# Предпросмотр production
npm run preview

# Тест проекта
npm run astro check
```

---

## СТРУКТУРА ПРОЕКТА

```
site-builder/
├── src/
│   ├── components/
│   │   └── sections/          # Готовые секции
│   │       ├── heroes/
│   │       ├── features/
│   │       ├── pricing/
│   │       ├── forms/
│   │       └── footers/
│   ├── layouts/
│   │   └── BaseLayout.astro   # Базовый layout
│   ├── pages/
│   │   └── index.astro        # Страницы
│   └── styles/
│       └── global.css         # Tailwind + theme
├── public/
│   └── images/                # Статика
├── modules/
│   └── figma-integration/     # Figma MCP
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── README.md
└── CLAUDE.md                  # Этот файл
```

---

## СОЗДАНИЕ КОМПОНЕНТОВ

### Новая секция

**Шаг 1:** Создать `.astro` файл

```bash
# Пример: Hero секция
touch src/components/sections/heroes/Hero1.astro
```

**Шаг 2:** Написать компонент

```astro
---
// src/components/sections/heroes/Hero1.astro
interface Props {
  title: string;
  subtitle: string;
  buttonText: string;
}

const { title, subtitle, buttonText } = Astro.props;
---

<section class="min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-purple-700">
  <div class="container mx-auto px-4 text-white">
    <h1 class="text-6xl font-bold mb-6">{title}</h1>
    <p class="text-2xl mb-8">{subtitle}</p>
    <button class="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition">
      <i class="ri-rocket-line mr-2"></i>
      {buttonText}
    </button>
  </div>
</section>
```

**Шаг 3:** Использовать на странице

```astro
---
// src/pages/landing.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero1 from '../components/sections/heroes/Hero1.astro';
---

<BaseLayout title="Мой лендинг">
  <Hero1
    title="Заголовок"
    subtitle="Подзаголовок"
    buttonText="Кнопка"
  />
</BaseLayout>
```

---

## TAILWIND 4 КАСТОМИЗАЦИЯ

Редактируй `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  /* Кастомные цвета */
  --color-brand-blue: #1E40AF;
  --color-brand-green: #10B981;

  /* Кастомные размеры */
  --spacing-section: 80px;

  /* Новые breakpoints */
  --breakpoint-3xl: 1920px;
}
```

Используй в компонентах:

```html
<div class="bg-brand-blue p-section">
  <!-- ... -->
</div>
```

---

## БИБЛИОТЕКИ КОМПОНЕНТОВ

Копируй готовые компоненты из:

1. **Flowbite** (бесплатно)
   - https://flowbite.com
   - 450+ компонентов

2. **HyperUI** (бесплатно)
   - https://www.hyperui.dev
   - 100+ секций для лендингов

3. **Tailwind UI** (платно $299)
   - https://tailwindui.com
   - 500+ премиум компонентов

**Workflow:**
1. Найти секцию на сайте
2. Скопировать HTML
3. Вставить в `.astro` файл
4. Заменить хардкод на `Props`
5. Готово!

---

## РАБОТА С CLAUDE CODE

### Промпт для создания лендинга

```
Создай лендинг для [тема клиента].

Используй секции:
- Hero2 (заголовок: "[УТП]")
- Features1 (3 преимущества: [перечисли])
- Pricing1 (3 тарифа)
- ContactForm

Все тексты адаптируй под тематику: [описание бизнеса]

Создай файл src/pages/[название].astro
```

### Промпт для новой секции

```
Создай секцию Features из Flowbite.

1. Найди на flowbite.com секцию Features (3 колонки с иконками)
2. Скопируй HTML
3. Создай src/components/sections/features/Features1.astro
4. Сделай динамическими: title, subtitle, features[]
5. Используй Remix Icons вместо SVG
```

---

## CODE STANDARDS

**Senior-level code (10+ years):**

- **Принципы:** DRY, KISS, SOLID
- **HTML:** Semantic HTML5 (nav, article, section)
- **CSS:** Только Tailwind классы
- **JavaScript:** ES6+ (const/let, async/await, arrow functions)
- **Accessibility:** ARIA labels, alt texts, keyboard navigation
- **Mobile-first:** Responsive из коробки через Tailwind

---

## DESIGN SYSTEM

### Tailwind Theme

Используй стандартные Tailwind классы + кастомные:

**Цвета:**
```
bg-brand-blue     → --color-brand-blue
text-brand-green  → --color-brand-green
```

**Spacing:**
```
p-section         → --spacing-section
```

**Breakpoints:**
```
3xl:             → --breakpoint-3xl
```

---

## GIT WORKFLOW

- **Branch:** `design`
- **Format:** `feat:`, `fix:`, `refactor:`, `chore:`

**Template:**
```
feat: add hero sections

- Create 5 hero variants from HyperUI
- All sections responsive and accessible
- Add Remix Icons integration

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## DEPLOYMENT

### Netlify/Vercel

```bash
npm run build
# → dist/

# Подключить GitHub repo или загрузить dist/
```

### Обычный хостинг

```bash
npm run build

# Загрузить содержимое dist/ через FTP
```

---

## PERFORMANCE TARGETS

- **PageSpeed Insights:** 95-100
- **Lighthouse Accessibility:** 100
- **Time to Interactive:** <1s
- **First Contentful Paint:** <0.8s

**Astro уже оптимизирован:**
- Генерирует чистый HTML
- Zero JS by default
- Auto image optimization
- Automatic code splitting

---

## FIGMA INTEGRATION

Модуль `modules/figma-integration/` — интеграция с Figma через MCP.

Позволяет получать данные из Figma макетов.

---

## TESTING CHECKLIST

Перед коммитом:

1. ✅ `npm run build` — без ошибок
2. ✅ `npm run preview` — проверить визуально
3. ✅ Responsive: 320px, 768px, 1024px, 1440px
4. ✅ Accessibility: keyboard navigation, ARIA
5. ✅ Semantic HTML (h1→h6 правильно, alt у img)
6. ✅ Все тексты на русском (если лендинг для РФ)

---

## ROADMAP

**Фаза 1 (текущая):**
- Создать 20+ готовых секций

**Фаза 2:**
- Собрать 5 шаблонов лендингов (SaaS, E-commerce, Portfolio, Corporate, Agency)

**Фаза 3:**
- CLI для генерации секций/лендингов
- Интеграция с CMS (Strapi, Sanity)

---

## ПОЛЕЗНЫЕ ССЫЛКИ

- [Astro Docs](https://docs.astro.build)
- [Tailwind 4 Docs](https://tailwindcss.com/docs)
- [Remix Icon](https://remixicon.com)
- [Flowbite Components](https://flowbite.com)
- [HyperUI](https://www.hyperui.dev)

---

**Версия:** 2.0.0
**Последнее обновление:** 2025-10-29
**Текущая фаза:** Создание библиотеки секций
