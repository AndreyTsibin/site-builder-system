# Site Builder 2.0 — Roadmap

**Специализация:** Лендинги для ремонта техники (бытовая, цифровая, квартиры)

---

## Phase 1: Component Library — 2-3 hours

**Goal:** Create reusable Astro components for repair service landing pages

**Source:** Flowbite Blocks (https://flowbite.com/blocks/)

### Обязательные блоки (Priority 1)

**1. Hero (Первый экран)** — 20 min
- 2-3 варианта: с формой, с телефоном, минимальный
- Props: `title`, `subtitle`, `phone`, `ctaText`, `benefits[]`
- Элементы: заголовок, подзаголовок с выгодой, кнопка "Вызвать мастера", телефон, форма
- Source: https://flowbite.com/blocks/marketing/hero/

**2. Contact Forms (Форма заявки)** — 20 min
- 3 варианта: полная, компактная, popup modal
- Props: `title`, `fields[]`, `submitText`, `phone`
- Поля: Имя, Телефон, Услуга (select), Комментарий
- Должна быть в Hero + повторяться 2-3 раза на странице

**3. Services & Pricing (Услуги и цены)** — 20 min
- 2 варианта: grid карточки, таблица с ценами
- Props: `title`, `services[]` (name, description, priceFrom, image)
- Обязательно: прайс или диапазон цен

**4. Benefits (Преимущества)** — 15 min
- Props: `title`, `benefits[]` (icon, title, description)
- 3-5 выгод: быстрый выезд, гарантия, опытные мастера, оригинальные запчасти

**5. Contacts (Контакты и реквизиты)** — 15 min
- Props: `phone`, `email`, `address`, `inn`, `ogrn`, `map`
- Элементы: телефон, email, адрес, ИНН/ОГРН

**6. CTA (Призыв к действию)** — 15 min
- 2-3 варианта: яркий баннер, блок с фоном, минимальный
- Props: `title`, `ctaText`, `phone`, `bgColor`
- Текст: "Вызвать мастера", "Заказать диагностику"

### Рекомендуемые блоки (Priority 2)

**7. How It Works (Как мы работаем)** — 15 min
- Props: `title`, `steps[]` (number, title, description)
- 4-5 шагов от заявки до завершения ремонта

**8. Testimonials (Отзывы)** — 15 min
- Props: `title`, `testimonials[]` (name, text, rating, photo)
- Реальные отзывы с оценкой звёздами

**9. Service Areas (География)** — 10 min
- Props: `title`, `areas[]`, `mapUrl`
- Карта районов или список адресов

**10. Warranty (Гарантии)** — 10 min
- Props: `title`, `description`, `warrantyPeriod`, `certificateImage`

**11. Brands (Бренды техники)** — 10 min
- Props: `title`, `brands[]` (name, logo)
- Логотипы брендов: Samsung, LG, Bosch, Apple, etc.

**12. Team (Команда мастеров)** — 10 min
- Props: `title`, `team[]` (name, photo, experience, education)

**13. Certificates (Сертификаты)** — 10 min
- Props: `title`, `certificates[]` (image, title)

**14. Calculator (Калькулятор стоимости)** — 20 min
- Props: `title`, `deviceTypes[]`, `services[]`
- Онлайн-расчёт цены

**15. FAQ** — 15 min
- Props: `title`, `questions[]` (question, answer)
- Топ-5 вопросов: сроки, гарантии, запчасти, выезд

**16. Promotions (Акции)** — 15 min
- Props: `title`, `promotions[]` (title, description, discount, expires)
- Скидки, бесплатная диагностика

**17. Gallery (Фотогалерея работ)** — 15 min
- Props: `title`, `images[]` (before, after, description)
- Фото до/после ремонта

**18. Target Audience (Для кого)** — 10 min
- Props: `title`, `audiences[]` (title, description, icon)
- "Для владельцев техники Samsung", "Для срочного ремонта"

**19. Footer** — 15 min
- Props: `logo`, `phone`, `email`, `address`, `socialLinks[]`, `copyright`
- Контакты + навигация + соцсети

---

## Phase 2: Landing Templates — 1 hour

**Goal:** Create 3 ready-to-use repair service landing pages

**Templates:**

1. **Appliance Repair (Ремонт бытовой техники)**
   - Hero → Services → Benefits → How It Works → Form → Brands → Testimonials → FAQ → CTA → Footer

2. **Digital Device Repair (Ремонт цифровой техники)**
   - Hero with Calculator → Services → Benefits → Target Audience → Gallery → Team → Form → FAQ → Contacts → Footer

3. **Home Renovation (Ремонт квартир)**
   - Hero → Services & Pricing → How It Works → Gallery → Benefits → Testimonials → Form → Contacts → Footer

**Deliverable:** 3 complete landing templates in `src/pages/templates/`

---

## Phase 3: Content Automation — 30 min

**Goal:** Prompt templates for quick landing generation

**Tasks:**
1. Create client data structure (JSON format)
2. Document props for each component
3. Create prompt template for Claude Code

**Example Client Data:**
```json
{
  "business": "Ремонт стиральных машин 24/7",
  "phone": "+7 (999) 123-45-67",
  "services": ["Диагностика", "Ремонт", "Профилактика"],
  "benefits": ["Быстро (2 часа)", "Гарантия 1 год", "Оригинальные запчасти"],
  "brands": ["Samsung", "LG", "Bosch", "Indesit"]
}
```

---

## Timeline

**Day 1:** Priority 1 blocks (Hero, Forms, Services, Benefits, Contacts, CTA) — 2 hours
**Day 2:** Priority 2 blocks (How It Works → Footer) — 3 hours
**Day 3:** Landing templates + content automation — 1.5 hours

**Total:** ~6-7 hours for complete library

---

## Current Status

✅ **Completed:**
- Astro 5 + Tailwind 4 setup
- BaseLayout with Remix Icons
- Demo page
- Project structure

🔄 **Next:**
- Phase 1: Create Priority 1 blocks (Hero, Forms, Services, Benefits, Contacts, CTA)

---

**Last Updated:** 2025-10-29
**Niche:** Repair Services (Appliances, Digital Devices, Home Renovation)
