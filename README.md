# Site Builder 2.0

**Lightning-fast landing page builder powered by Astro + Tailwind 4**

Собирайте профессиональные лендинги за минуты, используя современный стек и готовые компоненты.

---

## 🚀 Особенности

- **⚡ Astro** — генерирует чистый HTML, сайты грузятся мгновенно
- **🎨 Tailwind 4** — новейшая версия с Vite плагином
- **🧩 Компонентная архитектура** — секции как LEGO блоки
- **📱 Mobile-first** — адаптивный дизайн из коробки
- **🎯 SEO-friendly** — семантический HTML5
- **♿ Accessible** — WCAG AA compliance
- **🎭 Remix Icons** — 2800+ иконок бесплатно

---

## 📦 Быстрый старт

```bash
# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
# → http://localhost:4321

# Соберите production версию
npm run build

# Предпросмотр production сборки
npm run preview
```

---

## 📁 Структура проекта

```
site-builder/
├── src/
│   ├── components/
│   │   └── sections/          # Готовые секции
│   │       ├── heroes/         # Hero секции
│   │       ├── features/       # Блоки преимуществ
│   │       ├── pricing/        # Тарифы
│   │       ├── forms/          # Формы
│   │       └── footers/        # Футеры
│   ├── layouts/
│   │   └── BaseLayout.astro   # Базовый layout
│   ├── pages/
│   │   └── index.astro        # Главная страница
│   └── styles/
│       └── global.css         # Tailwind + кастомные стили
├── public/
│   └── images/                # Статичные изображения
├── modules/
│   └── figma-integration/     # Figma MCP интеграция
├── astro.config.mjs           # Конфиг Astro
├── tsconfig.json              # TypeScript config
└── package.json
```

---

## 🎨 Использование

### Создание новой секции

1. Создайте файл в `src/components/sections/heroes/Hero1.astro`
2. Используйте Tailwind классы для стилизации
3. Добавьте секцию на страницу

**Пример:**

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
    <button class="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50">
      {buttonText}
    </button>
  </div>
</section>
```

### Использование на странице

```astro
---
// src/pages/landing.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero1 from '../components/sections/heroes/Hero1.astro';
import Features from '../components/sections/features/Features1.astro';
---

<BaseLayout title="Мой лендинг">
  <Hero1
    title="Ремонт стиральных машин за 2 часа"
    subtitle="Выезд мастера бесплатно"
    buttonText="Вызвать мастера"
  />
  <Features />
</BaseLayout>
```

---

## 🎨 Кастомизация темы

Редактируйте `src/styles/global.css`:

```css
@theme {
  /* Ваши цвета */
  --color-brand-blue: #1E40AF;
  --color-brand-green: #10B981;

  /* Кастомные размеры */
  --spacing-section: 80px;

  /* Новые breakpoints */
  --breakpoint-3xl: 1920px;
}
```

---

## 📚 Библиотеки компонентов

Используйте готовые компоненты из:

- **[Flowbite](https://flowbite.com)** — 450+ компонентов (бесплатно)
- **[HyperUI](https://www.hyperui.dev)** — 100+ секций для лендингов (бесплатно)
- **[Tailwind UI](https://tailwindui.com)** — 500+ премиум компонентов ($299)

Просто копируйте HTML и вставляйте в `.astro` файлы.

---

## 🤖 Работа с Claude Code

### Промпт для быстрой сборки лендинга:

```
Создай лендинг для [тема клиента].

Используй секции:
- Hero1 (заголовок: "[УТП]")
- Features1 (3 преимущества)
- Pricing1 (3 тарифа)
- ContactForm

Все тексты адаптируй под тематику: [описание бизнеса]
```

Claude Code соберёт лендинг за 2-3 минуты.

---

## 🏗️ Развертывание

### Netlify / Vercel

```bash
npm run build
# → dist/
```

Загрузите папку `dist/` или подключите GitHub repo.

### Обычный хостинг

```bash
npm run build
```

Загрузите содержимое `dist/` через FTP.

---

## 🔧 Скрипты

```bash
npm run dev       # Dev-сервер (http://localhost:4321)
npm run build     # Production сборка
npm run preview   # Предпросмотр production
```

---

## 🎯 Производительность

- **PageSpeed Insights:** 95-100 (mobile & desktop)
- **Lighthouse Accessibility:** 100
- **Time to Interactive:** <1s
- **First Contentful Paint:** <0.8s

---

## 📖 Документация

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Remix Icon](https://remixicon.com)

---

## 🤝 Figma Integration

Модуль `modules/figma-integration/` позволяет работать с Figma через MCP.

---

## 📝 Лицензия

MIT © Andrej Tsibin

---

## ✨ Дизайн-система

Все компоненты приведены к единому визуальному стандарту:

- **Border Radius:** Консистентные скругления (rounded-2xl для карточек, rounded-xl для кнопок)
- **Цвета:** Единая цветовая схема с blue-700 как основным бренд-цветом
- **Typography:** Унифицированные размеры заголовков H2/H3/H4
- **Spacing:** Стандартизированные отступы и gap между элементами
- **Стиль:** Borders вместо теней для лучшей визуальной согласованности

---

## 🚀 Roadmap

- [x] ~~Добавить 40+ готовых секций~~ ✅ Завершено
- [x] ~~Унифицировать дизайн-систему~~ ✅ Завершено
- [ ] Создать CLI для быстрой генерации компонентов
- [ ] Интеграция с CMS (Strapi, Sanity)
- [ ] Готовые шаблоны лендингов (SaaS, E-commerce, Portfolio)

---

**Версия:** 2.1.0
**Последнее обновление:** 2025-10-30
**Стек:** Astro 5 + Tailwind 4 + Remix Icons
