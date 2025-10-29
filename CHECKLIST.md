# Site Builder 2.0 — Phase 1 Checklist

**Goal:** Create Priority 1 components for repair service landing pages

**Source:** Flowbite Blocks (https://flowbite.com/blocks/)

---

## 1. HERO SECTIONS (3 варианта)

### Hero1 — С формой
- [ ] Найти Hero с формой на Flowbite (Marketing > Hero)
- [ ] Создать `src/components/sections/heroes/Hero1.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `subtitle`, `phone`, `ctaText`, `benefits[]`
- [ ] Заменить SVG иконки → Remix Icons
- [ ] Проверить responsive (320px, 768px, 1024px)
- [ ] Добавить в `src/pages/index.astro` для теста
- [ ] Проверить UTF-8 (если Cyrillic)

### Hero2 — С телефоном (без формы)
- [ ] Найти Hero с CTA на Flowbite
- [ ] Создать `src/components/sections/heroes/Hero2.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `subtitle`, `phone`, `ctaText`
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

### Hero3 — Минимальный
- [ ] Найти минимальный Hero на Flowbite
- [ ] Создать `src/components/sections/heroes/Hero3.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `subtitle`, `ctaText`
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 2. CONTACT FORMS (3 варианта)

### ContactForm — Полная форма
- [ ] Найти Contact Form на Flowbite (Application UI > Forms > Contact)
- [ ] Создать `src/components/sections/forms/ContactForm.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `submitText`, `phone`
- [ ] Поля: Имя, Телефон, Услуга (select), Комментарий
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

### ContactFormCompact — Компактная форма
- [ ] Найти компактную форму на Flowbite
- [ ] Создать `src/components/sections/forms/ContactFormCompact.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `submitText`
- [ ] Поля: Имя, Телефон
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

### ContactFormModal — Popup форма
- [ ] Найти Modal с формой на Flowbite (Application UI > Modal)
- [ ] Создать `src/components/sections/forms/ContactFormModal.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `submitText`, `triggerButtonText`
- [ ] Поля: Имя, Телефон
- [ ] Добавить Astro islands для интерактивности
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 3. SERVICES & PRICING (2 варианта)

### ServicesGrid — Grid карточки
- [ ] Найти Pricing Cards на Flowbite (Marketing > Pricing)
- [ ] Создать `src/components/sections/services/ServicesGrid.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `services[]` (name, description, priceFrom, icon)
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive (grid → stack mobile)
- [ ] Тест на странице
- [ ] Проверить UTF-8

### ServicesPricing — Таблица цен
- [ ] Найти Pricing Table на Flowbite
- [ ] Создать `src/components/sections/services/ServicesPricing.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `services[]` (name, price, duration)
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive (table → cards mobile)
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 4. BENEFITS

### Benefits — Преимущества
- [ ] Найти Features Grid на Flowbite (Marketing > Feature Sections)
- [ ] Создать `src/components/sections/benefits/Benefits.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `benefits[]` (icon, title, description)
- [ ] Заменить SVG → Remix Icons (ri-time-line, ri-shield-check-line, etc.)
- [ ] Проверить responsive (3 cols → 2 cols → 1 col)
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 5. CONTACTS

### Contacts — Контакты и реквизиты
- [ ] Найти Contact Section на Flowbite (Marketing > Contact)
- [ ] Создать `src/components/sections/contacts/Contacts.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `phone`, `email`, `address`, `inn`, `ogrn`, `mapUrl`
- [ ] Заменить SVG → Remix Icons (ri-phone-line, ri-mail-line, ri-map-pin-line)
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 6. CTA (3 варианта)

### CTA1 — Яркий баннер
- [ ] Найти CTA Banner на Flowbite (Marketing > CTA Sections)
- [ ] Создать `src/components/sections/cta/CTA1.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `subtitle`, `ctaText`, `phone`, `bgColor`
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

### CTA2 — Блок с фоном
- [ ] Найти CTA с фоном на Flowbite
- [ ] Создать `src/components/sections/cta/CTA2.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `ctaText`, `phone`
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

### CTA3 — Минимальный
- [ ] Найти простой CTA на Flowbite
- [ ] Создать `src/components/sections/cta/CTA3.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `ctaText`
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## ФИНАЛЬНАЯ ПРОВЕРКА

- [ ] `npm run build` — без ошибок
- [ ] `npm run preview` — визуальная проверка всех компонентов
- [ ] Accessibility: keyboard nav, ARIA labels, alt texts
- [ ] Semantic HTML: правильная иерархия заголовков
- [ ] Все компоненты responsive (320px → 1920px)
- [ ] Cyrillic UTF-8 проверен для всех русских текстов

---

## COMMIT

- [ ] Сделать коммит:
```
feat: add Priority 1 components (Hero, Forms, Services, Benefits, Contacts, CTA)

- Create 3 Hero variants with form/phone/minimal layouts
- Add 3 Contact Form variants (full, compact, modal)
- Implement 2 Services variants (grid, pricing table)
- Add Benefits section with icon grid
- Create Contacts section with company details
- Add 3 CTA variants (banner, background, minimal)

All components:
- Astro + TypeScript Props
- Tailwind 4 styling only
- Remix Icons integration
- Mobile-first responsive design
- Semantic HTML5

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

**Estimated time:** 2-3 hours
**Status:** Not started
**Created:** 2025-10-29
