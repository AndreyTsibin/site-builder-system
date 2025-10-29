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

## 7. TESTIMONIALS (Отзывы)

### Testimonials — Отзывы клиентов
- [ ] Найти Testimonials на Flowbite (Marketing > Testimonials)
- [ ] Создать `src/components/sections/testimonials/Testimonials.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `testimonials[]` (name, text, rating, photo, date)
- [ ] Добавить звёзды рейтинга (Remix Icons: ri-star-fill)
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive (3 cols → 2 cols → 1 col)
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 8. HOW IT WORKS (Как мы работаем)

### HowItWorks — Процесс работы
- [ ] Найти Timeline или Steps на Flowbite (Marketing > Feature Sections)
- [ ] Создать `src/components/sections/process/HowItWorks.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `steps[]` (number, title, description, icon)
- [ ] Иконки для шагов (ri-phone-line, ri-car-line, ri-tools-line, ri-checkbox-circle-line)
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive (timeline → vertical stack mobile)
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 9. FAQ

### FAQ — Частые вопросы
- [ ] Найти FAQ Accordion на Flowbite (Marketing > FAQ)
- [ ] Создать `src/components/sections/faq/FAQ.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `title`, `questions[]` (question, answer)
- [ ] Добавить Astro islands для интерактивности (accordion)
- [ ] Заменить SVG → Remix Icons (ri-arrow-down-s-line)
- [ ] Проверить responsive
- [ ] Тест на странице
- [ ] Проверить UTF-8

---

## 10. FOOTER

### Footer — Подвал сайта
- [ ] Найти Footer на Flowbite (Marketing > Footer)
- [ ] Создать `src/components/sections/footers/Footer.astro`
- [ ] Конвертировать HTML → Astro
- [ ] Добавить Props: `logo`, `phone`, `email`, `address`, `socialLinks[]`, `copyright`
- [ ] Иконки соцсетей (ri-vk-line, ri-telegram-line, ri-whatsapp-line)
- [ ] Заменить SVG → Remix Icons
- [ ] Проверить responsive (multi-col → single-col mobile)
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
feat: add Priority 1 components (complete landing page library)

- Create 3 Hero variants with form/phone/minimal layouts
- Add 3 Contact Form variants (full, compact, modal)
- Implement 2 Services variants (grid, pricing table)
- Add Benefits section with icon grid
- Create Contacts section with company details
- Add 3 CTA variants (banner, background, minimal)
- Add Testimonials with ratings and reviews
- Implement How It Works process timeline
- Create FAQ accordion section
- Add Footer with contacts and social links

Total: 18 components across 10 categories

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

**Estimated time:** 3-4 hours
**Status:** Not started
**Created:** 2025-10-29
