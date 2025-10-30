# Промпт для разработки секции Header

## Контекст проекта

**Site Builder 2.0** — конструктор лендингов для ремонта бытовой техники

**Стек:** Astro 5.15.2, Tailwind CSS 4.1.16, Remix Icons 4.7.0

**Прогресс:** 29/30 компонентов (96.7%)

## Что сделано

✅ **Heroes:** 6/6
✅ **Services & Pricing:** 6/6
✅ **Benefits:** 3/3
✅ **CTA Sections:** 5/5
✅ **Testimonials:** 3/3
✅ **How It Works:** 3/3
✅ **FAQ:** 3/3

## Следующая задача: Header

**Проблема:** В проекте нет ни одной секции Header (навигация)

**Цель:** Спроектировать и создать варианты Header компонентов

### Требования к Header

**Обязательные элементы:**
- Логотип / название компании
- Навигационное меню (десктоп)
- Мобильное меню (бургер)
- Контактная информация (телефон)
- CTA кнопка (опционально)

**Технические требования:**
- Sticky/fixed позиционирование (опционально)
- Responsive: desktop → tablet → mobile
- Tailwind CSS only (no custom CSS)
- Remix Icons для иконок
- Mobile-first подход

### Типичные варианты Header

**Вариант 1 — Simple Logo + Menu + Phone**
- Логотип слева
- Меню по центру / справа
- Телефон + CTA кнопка справа
- Бургер-меню на mobile

**Вариант 2 — Logo + Menu + CTA Banner**
- Логотип слева
- Меню справа
- Prominent CTA баннер ("Скидка 20%", "Бесплатная диагностика")
- Бургер-меню на mobile

**Вариант 3 — Centered Logo + Menu**
- Логотип по центру
- Меню слева/справа от логотипа
- Контакты справа
- Симметричный дизайн

### Вопросы для обсуждения

1. **Сколько вариантов Header создавать?** (предлагаю 3, как в других секциях)
2. **Sticky header нужен?** (фиксированная шапка при скролле)
3. **Мобильное меню:** overlay fullscreen или slide-in sidebar?
4. **Какие пункты меню?** (Услуги, Цены, О нас, Отзывы, Контакты)

## Стандарты проекта

**Layout:** `max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8`

**Spacing:** `py-4 md:py-6` (для Header меньше чем у секций)

**Typography:**
- Logo: `text-xl md:text-2xl font-bold`
- Menu items: `text-base md:text-lg`

**Props Architecture:**
```astro
interface Props {
  logo: string;
  menuItems: { label: string; href: string }[];
  phone: string;
  ctaText?: string;
  ctaLink?: string;
}
```

## Workflow

1. Обсудить варианты Header
2. Создать компоненты в `src/components/sections/header/`
3. Добавить в `index.astro`
4. Тестировать на всех breakpoints
5. Обновить CHECKLIST.md
6. Commit

---

**Git branch:** `design`

**Dev server:** `npm run dev` (порт 4321)

**Файлы для справки:**
- [CHECKLIST.md](CHECKLIST.md) — список компонентов
- [CLAUDE.md](CLAUDE.md) — стандарты проекта
- `~/.claude/CLAUDE.md` — глобальные инструкции (UTF-8 bug)
