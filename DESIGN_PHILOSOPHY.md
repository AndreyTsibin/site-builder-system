# DESIGN PHILOSOPHY — Premium Material Design 3

**Site Builder 2.0** — Philosophy of Premium Landing Page Design

**Created:** 2025-10-31
**Status:** Active Development
**Design System:** Material Design 3 (2025 Trends)

---

## 🎯 CORE PHILOSOPHY

> **"Максимальная премиальность с wow-фактором"**

Мы создаём лендинги, которые выглядят как топовые SaaS продукты премиум-сегмента. Клиент должен получить visual impact, неотличимый от работы профессионального дизайнера.

### Ключевые принципы:

1. **✨ Premium First** — каждый элемент должен выглядеть дорого
2. **🎨 Material Design 3** — единственная дизайн-система (без экспериментов)
3. **🔥 Wow-эффекты обязательны** — градиенты, анимации, глубина
4. **⚡ Smooth animations** — плавные переходы для всех интерактивных элементов
5. **🎯 Micro-interactions** — hover, click states с визуальным feedback

---

## 🎨 MATERIAL DESIGN 3 — НАША БАЗА

**Почему только Material Design 3:**
- ✅ **Актуальный тренд 2025** — используется в топовых приложениях
- ✅ **Ощущение качества** — depth создаёт впечатление премиум-продукта
- ✅ **Работает везде** — не требует современных браузеров
- ✅ **Простая реализация** — градиенты + shadows + animations

**От чего отказались:**
- ❌ **Liquid Glass** — сложная реализация, проблемы с performance
- ❌ **Glassmorphism** — используем только в header (легкий вариант)
- ❌ **Экспериментальные эффекты** — фокус на проверенных решениях

---

## 🏗️ АРХИТЕКТУРА КОМПОНЕНТОВ

### Naming Convention

**Формат:** `{SectionName}{Number}Material.astro`

**Примеры:**
```
src/components/sections/material/
├── headers/
│   └── Header1Material.astro
├── heroes/
│   └── Hero3Material.astro
├── benefits/
│   └── Benefits2Material.astro
├── pricing/
│   └── ServicesGrid1Material.astro
```

**Правило:** Все новые секции создаются ТОЛЬКО в папке `material/` с суффиксом `Material`

---

## 🎨 VISUAL DESIGN STANDARDS

### 1. Gradient Backgrounds

**Правило:** Каждая секция должна иметь gradient mesh background с layered depth

**Пример (Hero section):**
```css
/* Layer 1: Base gradient */
background: linear-gradient(to bottom right, #EFF6FF, rgba(196, 181, 253, 0.3), rgba(251, 207, 232, 0.2));

/* Layer 2: Secondary gradient */
background: linear-gradient(to top left, rgba(165, 243, 252, 0.4), transparent, rgba(224, 231, 255, 0.3));

/* Layer 3: Radial accents */
background: radial-gradient(circle at 30% 50%, rgba(96, 165, 250, 0.1), transparent 50%);

/* Layer 4: Radial accents */
background: radial-gradient(circle at 70% 60%, rgba(167, 139, 250, 0.08), transparent 50%);
```

**Важно:** Минимум 2 слоя градиентов для visual depth

---

### 2. Typography Hierarchy

**H1 (Hero Heading):**
```astro
<h1>
  <!-- Primary text (business type) -->
  <span class="text-5xl md:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
    Ремонт холодильников
  </span>

  <!-- Secondary text (location) -->
  <span class="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
    в Москве и области
  </span>
</h1>
```

**Правила:**
- Primary text — крупнее, важнее (тип услуги)
- Secondary text — меньше, второстепенно (локация)
- Всегда использовать gradient text для headings
- `font-black` для primary, `font-bold` для secondary

**H2 (Section Headings):**
```css
text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900
```

**Body Text:**
```css
text-lg md:text-xl font-light text-gray-700
```

---

### 3. Color Themes

**Каждая карточка = уникальный цвет**

**Пример (Benefits section с 4 карточками):**
```js
const colorThemes = [
  {
    // Card 1: Purple
    iconBg: 'from-purple-100 to-purple-200',
    iconColor: 'text-purple-600',
    numberGradient: 'from-purple-600 via-purple-500 to-indigo-600',
    cardBg: 'from-purple-50/50 to-white',
    shadow: 'shadow-purple-500/20',
    ring: 'ring-purple-200/50',
    hoverRing: 'hover:ring-purple-300'
  },
  {
    // Card 2: Blue
    iconBg: 'from-blue-100 to-blue-200',
    iconColor: 'text-blue-600',
    numberGradient: 'from-blue-600 via-blue-500 to-cyan-600',
    // ...
  },
  // Card 3: Green, Card 4: Orange...
];
```

**Правило:** Используем Purple → Blue → Green → Orange для multi-card секций

---

### 4. Shadows & Elevation

**Material Design 3 Shadow Scale:**

```css
/* Level 1: Subtle (sections) */
shadow-xl → box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Level 2: Elevated (cards) */
shadow-xl + colored → shadow-xl shadow-purple-500/20

/* Level 3: Floating (hover) */
shadow-2xl + colored → shadow-2xl shadow-purple-500/30
```

**Правило:**  Always use colored shadows matching card theme

---

### 5. Glassmorphism (Header Only)

**Используем ТОЛЬКО в header для легкого эффекта прозрачности:**

```css
bg-white/80 backdrop-blur-lg backdrop-saturate-150 border-b border-white/20
```

**Важно:**
- Только `backdrop-blur-lg` (не больше)
- Только `bg-white/80` (не меньше для читаемости)
- Обязателен `border-white/20` для subtle border

**Не используем glassmorphism в:**
- ❌ Content sections (проблемы с читаемостью)
- ❌ Form inputs (нужна четкая видимость)
- ❌ Cards (используем gradient backgrounds)

---

## 🎬 ANIMATIONS & INTERACTIONS

### 1. CTA Buttons — Shimmer Effect

**Обязательный паттерн для всех CTA:**

```astro
<a class="cta-button relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-2xl shadow-xl hover:shadow-blue-500/50 hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden group">
  <span class="relative z-10 flex items-center gap-2">
    {ctaText}
    <i class="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform duration-300"></i>
  </span>
  <!-- Shimmer overlay -->
  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer-animation"></span>
</a>
```

**CSS Animation:**
```css
@keyframes shimmer {
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
  }
}

.shimmer-animation {
  animation: shimmer 3s infinite;
}

.cta-button:hover .shimmer-animation {
  animation-play-state: paused;
}
```

**Важные детали:**
- ✅ Всегда включать arrow icon (`ri-arrow-right-line`)
- ✅ Hover эффект на arrow (`group-hover:translate-x-1`)
- ✅ Colored glow shadow (`hover:shadow-blue-500/50`)
- ✅ Scale effect (`hover:scale-105`)
- ✅ Shimmer паузится на hover

---

### 2. Card Hover Effects

**Стандартный паттерн:**
```css
hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300
```

**Breakdown:**
- `hover:scale-105` — увеличение на 5%
- `hover:-translate-y-2` — поднимается на 8px
- `hover:shadow-2xl` — увеличенная тень
- `transition-all duration-300` — плавный переход 300ms

**Для icon containers внутри карточек:**
```css
group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
```

---

### 3. Counter Animation

**Для статистических секций (Benefits, Stats):**

```js
const animateCounter = (el: HTMLElement, target: string) => {
  const num = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');
  const duration = 2000;
  const steps = 60;
  const stepValue = num / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += stepValue;
    if (current >= num) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, duration / steps);
};

// IntersectionObserver для запуска при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numberEl = entry.target.querySelector('.stat-number');
      const targetValue = numberEl?.getAttribute('data-value');
      if (numberEl && targetValue) {
        animateCounter(numberEl as HTMLElement, targetValue);
        observer.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.5 });
```

**Разметка:**
```astro
<span class="stat-number" data-value="5000+">0</span>
```

---

### 4. Stagger Animation

**Для списков элементов (benefits cards, feature lists):**

```astro
{items.map((item, index) => (
  <li
    class="benefit-card opacity-0 animate-fade-in-up"
    style={`animation-delay: ${index * 150}ms`}
  >
    <!-- content -->
  </li>
))}
```

**CSS:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

**Правило:** Delay между элементами — 100-150ms

---

### 5. Floating Animation (Images)

**Для hero images:**

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateY(-20px) rotate(-1deg);
  }
  75% {
    transform: translateY(-10px) rotate(1deg);
  }
}

.floating-image {
  animation: float 6s ease-in-out infinite;
}
```

**Правило:** Используем только для hero images, не для контентных изображений

---

### 6. Menu Link Underline

**Для navigation меню:**

```css
.menu-link-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.5);
}

.menu-link-underline:hover::after {
  transform: scaleX(1);
}
```

**Важно:** Gradient underline с glow эффектом

---

### 7. Scroll-triggered Header Shrink

**Header должен уменьшаться при скролле:**

```js
const header = document.querySelector('.header-glass');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});
```

**CSS:**
```css
.header-content {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  transition: all 0.3s ease;
}

.header-glass.scrolled .header-content {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
```

---

## 📐 LAYOUT STANDARDS

### Container Widths

```css
/* Default для всех секций */
max-w-[1344px]

/* Узкий контент (text-heavy) */
max-w-4xl

/* Средний контент */
max-w-6xl
```

**Почему 1344px:** После padding (32px × 2) = 1280px контента

### Spacing

**Section Padding:**
```css
py-16 md:py-20 lg:py-24
```

**Content Spacing:**
```css
space-y-6  /* между элементами внутри секции */
mb-12 lg:mb-16  /* между heading и content */
gap-6 md:gap-8  /* для grid layouts */
```

### Grid Layouts

**Two-column (Hero, Features):**
```css
grid lg:grid-cols-2 gap-8 lg:gap-12 items-center
```

**Three-column (Services, Benefits):**
```css
grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8
```

**Four-column (Stats):**
```css
grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8
```

---

## 🎯 COMPONENT PATTERNS

### 1. Hero Section Pattern

**Структура:**
```astro
<section class="relative min-h-[90vh] py-16 md:py-20 lg:py-24 overflow-hidden">
  <!-- Gradient Mesh Background (4 layers minimum) -->
  <div class="absolute inset-0 bg-gradient-to-br ..."></div>
  <div class="absolute inset-0 bg-gradient-to-tl ..."></div>
  <div class="absolute inset-0 bg-[radial-gradient(...)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(...)]"></div>

  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <!-- Left: Content -->
      <div class="space-y-6">
        <h1><!-- Gradient typography --></h1>
        <p><!-- Description --></p>
        <ul><!-- Animated benefits cards --></ul>
        <div><!-- Premium CTA button with shimmer --></div>
      </div>

      <!-- Right: Floating image -->
      <div class="floating-image">
        <img />
      </div>
    </div>
  </div>
</section>
```

**Обязательные элементы:**
- ✅ `min-h-[90vh]` для full-screen impact
- ✅ 4 слоя gradient mesh background
- ✅ Gradient text в H1
- ✅ Animated benefits cards
- ✅ Premium CTA с shimmer + arrow icon
- ✅ Floating animation для image

---

### 2. Benefits/Stats Pattern

**Структура:**
```astro
<section class="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
  <!-- Mesh gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-green-50/30 pointer-events-none"></div>

  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <!-- Section Header -->
    <div class="text-center mb-12 lg:mb-16">
      <h2><!-- Title --></h2>
      <p><!-- Subtitle --></p>
    </div>

    <!-- Stats Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => {
        const theme = colorThemes[index % colorThemes.length];
        return (
          <div class="stat-card group opacity-0 animate-fade-in-up" style={`animation-delay: ${index * 100}ms`}>
            <!-- Icon with gradient bg + hover effects -->
            <!-- Gradient text number with counter animation -->
            <!-- Label + Description -->
          </div>
        );
      })}
    </div>
  </div>
</section>
```

**Обязательные элементы:**
- ✅ Unique color theme per card (Purple/Blue/Green/Orange)
- ✅ Gradient text для numbers
- ✅ Counter animation с IntersectionObserver
- ✅ Stagger animation (100ms delay)
- ✅ Icon hover effects (scale + rotate)
- ✅ Card hover (scale + translate-y + shadow)
- ✅ Mesh gradient overlay на фоне

---

### 3. Header Pattern

**Структура:**
```astro
<header class="header-glass fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg backdrop-saturate-150 shadow-lg border-b border-white/20 transition-all duration-300">
  <div class="max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="header-content flex items-center justify-between py-3 md:py-4 transition-all duration-300">
      <!-- Logo with glow effect -->
      <!-- Desktop navigation with gradient underline -->
      <!-- Phone + Premium CTA button -->
    </div>
  </div>
</header>

<!-- Spacer -->
<div class="h-[60px] md:h-[72px]"></div>
```

**Обязательные элементы:**
- ✅ Glassmorphism: `bg-white/80 backdrop-blur-lg`
- ✅ Logo glow на hover
- ✅ Gradient underline для меню
- ✅ Premium CTA с shimmer
- ✅ Scroll-triggered shrink animation
- ✅ Spacer для компенсации fixed positioning

---

## 🚫 ANTI-PATTERNS (Чего НЕ делать)

### 1. НЕ используй plain backgrounds

❌ **Плохо:**
```css
background: #ffffff;
background: #f3f4f6;
```

✅ **Хорошо:**
```css
background: linear-gradient(to bottom, #ffffff, #f9fafb);
```

---

### 2. НЕ используй plain text colors для headings

❌ **Плохо:**
```css
class="text-gray-900"
```

✅ **Хорошо:**
```css
class="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
```

---

### 3. НЕ делай CTA buttons без эффектов

❌ **Плохо:**
```astro
<a class="px-6 py-3 bg-blue-600 text-white rounded-lg">
  Кнопка
</a>
```

✅ **Хорошо:**
```astro
<a class="cta-button relative inline-flex ... overflow-hidden group">
  <span class="relative z-10 flex items-center gap-2">
    Кнопка
    <i class="ri-arrow-right-line group-hover:translate-x-1"></i>
  </span>
  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer-animation"></span>
</a>
```

---

### 4. НЕ используй одинаковые цвета для всех карточек

❌ **Плохо:** Все карточки синие

✅ **Хорошо:** Purple → Blue → Green → Orange rotation

---

### 5. НЕ забывай про hover states

❌ **Плохо:** Нет визуального feedback на hover

✅ **Хорошо:** Scale + translate-y + shadow transition

---

## 📋 CHECKLIST ДЛЯ НОВЫХ СЕКЦИЙ

Перед commit каждой новой секции проверь:

### Visual
- [ ] Gradient mesh background (минимум 2 слоя)
- [ ] Gradient text для headings
- [ ] Colored shadows matching theme
- [ ] Unique colors per card (если multi-card)

### Animations
- [ ] Shimmer effect на CTA buttons
- [ ] Arrow icon с hover animation
- [ ] Card hover effects (scale + translate-y + shadow)
- [ ] Icon hover effects (scale + rotate)
- [ ] Stagger animation для списков

### Technical
- [ ] Responsive typography (mobile → tablet → desktop)
- [ ] `whitespace-nowrap` для numbers (если есть)
- [ ] IntersectionObserver для counters (если stats section)
- [ ] Proper z-index layering (background → overlay → content)

### UX
- [ ] Smooth transitions (300ms duration)
- [ ] Visual feedback на hover для ВСЕХ интерактивных элементов
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] No layout shift при загрузке

---

## 🎓 LEARNING FROM OUR EXAMPLES

### Успешные компоненты (Reference):

1. **Header1Material.astro** → Glassmorphism + scroll shrink + gradient underline
2. **Hero3Material.astro** → Gradient mesh + floating image + premium CTA
3. **Benefits2Material.astro** → Color themes + counter animation + stagger

**Используй их как reference при создании новых секций!**

---

## 🚀 WORKFLOW

### Создание новой секции:

1. **Выбери reference** — найди похожую существующую Material секцию
2. **Copy structure** — скопируй базовую структуру (gradient backgrounds, spacing)
3. **Apply color themes** — используй Purple/Blue/Green/Orange rotation
4. **Add animations** — shimmer CTA, hover effects, stagger if needed
5. **Test responsive** — проверь на 375px, 768px, 1024px
6. **Visual verification** — запусти localhost, проверь визуально
7. **Commit** — сделай commit с подробным описанием эффектов

---

## 📊 SUCCESS METRICS

**Визуальные:**
- Дизайн выглядит "wow" и дорого
- Неотличим от топовых SaaS лендингов
- Клиент хочет трогать и взаимодействовать

**Технические:**
- Lighthouse Performance > 90
- Smooth 60fps animations
- No layout shift

**Бизнес:**
- Клиент говорит "это прям круто!"
- Конверсия выше чем у простых секций
- Сборка лендинга < 10 минут

---

## 🎯 FINAL WORDS

> **"Мне очень нравятся крутые плавные анимации, это прям классный Material Design. Наведение на кнопки, все кнопки должны быть со стрелочкой, с иконкой, с эффектом свечения. Это выглядит просто вау, классно!"**

**Философия проста:**
- Всё должно быть **премиум**
- Всё должно быть **плавно**
- Всё должно вызывать **wow-эффект**

**Мы НЕ делаем:**
- ❌ Liquid Glass (сложная реализация)
- ❌ Эксперименты с другими дизайн-системами
- ❌ Простые секции без эффектов

**Мы делаем:**
- ✅ Только Material Design 3
- ✅ Максимальная премиальность
- ✅ Wow-эффекты во всём

---

**Version:** 1.0
**Author:** Andrey + Claude Code
**Status:** Active — Use This Philosophy For All New Sections
**Last Updated:** 2025-10-31
