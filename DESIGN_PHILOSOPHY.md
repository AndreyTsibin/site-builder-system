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

**Правило:** Минимум 2 слоя градиентов для visual depth

```css
/* 4-layer pattern (Hero sections) */
bg-gradient-to-br from-blue-50 via-purple-50/30 to-pink-50/20
bg-gradient-to-tl from-cyan-50/40 via-transparent to-indigo-50/30
bg-[radial-gradient(circle_at_30%_50%,rgba(96,165,250,0.1),transparent_50%)]
bg-[radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.08),transparent_50%)]
```

---

### 2. Typography

**H1 Gradient Pattern:**
```astro
<!-- Primary (service) — larger, font-black -->
<span class="text-5xl md:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">

<!-- Secondary (location) — smaller, font-bold -->
<span class="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
```

**H2:** `text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900`
**Body:** `text-lg md:text-xl font-light text-gray-700`

---

### 3. Color Themes

**Rotation: Purple → Blue → Green → Orange** для multi-card секций

```js
const colorThemes = [
  { iconBg: 'from-purple-100 to-purple-200', iconColor: 'text-purple-600',
    numberGradient: 'from-purple-600 via-purple-500 to-indigo-600',
    shadow: 'shadow-purple-500/20', ring: 'ring-purple-200/50' },
  // Blue, Green, Orange — аналогично
];
// Use: colorThemes[index % colorThemes.length]
```

---

### 4. Shadows & Glassmorphism

**Colored shadows:**
```css
shadow-xl shadow-purple-500/20  /* cards */
hover:shadow-2xl shadow-purple-500/30  /* hover */
```

**Glassmorphism (header only):**
```css
bg-white/80 backdrop-blur-lg backdrop-saturate-150 border-b border-white/20
```

❌ **Не используем** в content sections, forms, cards

---

## 🎬 ANIMATIONS & INTERACTIONS

### 1. CTA Button (Shimmer + Arrow)

**Required pattern:**
```astro
<a class="cta-button relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-2xl shadow-xl hover:shadow-blue-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
  <span class="relative z-10 flex items-center gap-2">
    {ctaText}
    <i class="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform duration-300"></i>
  </span>
  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer-animation"></span>
</a>

<style>
@keyframes shimmer {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}
.shimmer-animation { animation: shimmer 3s infinite; }
.cta-button:hover .shimmer-animation { animation-play-state: paused; }
</style>
```

### 2. Hover Effects

**Cards:** `hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300`
**Icons:** `group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`

---

### 3. Counter Animation (Stats)

```js
const animateCounter = (el, target) => {
  const num = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');
  const duration = 2000, steps = 60, stepValue = num / steps;
  let current = 0;
  const timer = setInterval(() => {
    current += stepValue;
    if (current >= num) { el.textContent = target; clearInterval(timer); }
    else { el.textContent = Math.floor(current) + suffix; }
  }, duration / steps);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numberEl = entry.target.querySelector('.stat-number');
      const targetValue = numberEl?.getAttribute('data-value');
      if (numberEl && targetValue) {
        animateCounter(numberEl, targetValue);
        observer.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.5 });
```
**Markup:** `<span class="stat-number" data-value="5000+">0</span>`

### 4. Stagger (Lists)

```astro
{items.map((item, index) => (
  <li class="opacity-0 animate-fade-in-up" style={`animation-delay: ${index * 100}ms`}>
))}

<style>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
</style>
```

### 5. Other Animations

**Floating (hero images):**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  50% { transform: translateY(-20px) rotate(-1deg); }
  75% { transform: translateY(-10px) rotate(1deg); }
}
.floating-image { animation: float 6s ease-in-out infinite; }
```

**Menu underline:**
```css
.menu-link-underline::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px;
  background: linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa);
  transform: scaleX(0); transition: transform 0.3s;
}
.menu-link-underline:hover::after { transform: scaleX(1); }
```

**Header shrink (scroll > 50px):**
```js
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) header?.classList.add('scrolled');
  else header?.classList.remove('scrolled');
});
```

---

## 📐 LAYOUT STANDARDS

**Container:** `max-w-[1344px]` (1280px content after 32px padding)
**Section padding:** `py-16 md:py-20 lg:py-24`
**Content spacing:** `space-y-6`, `mb-12 lg:mb-16`, `gap-6 md:gap-8`

**Grids:**
- 2-col (Hero): `grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`
- 3-col (Services): `grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`
- 4-col (Stats): `grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8`

**📖 Детали:** [ARCHITECTURE.md](ARCHITECTURE.md)

---

## 🎯 COMPONENT PATTERNS

### 1. Hero Section

**Checklist:**
- ✅ `min-h-[90vh]` + 4-layer gradient mesh
- ✅ Gradient H1 text (primary larger, secondary smaller)
- ✅ Animated benefits cards (stagger)
- ✅ Premium CTA (shimmer + arrow)
- ✅ Floating image animation

**Reference:** `Hero3Material.astro`

### 2. Benefits/Stats

**Checklist:**
- ✅ Color rotation per card (Purple → Blue → Green → Orange)
- ✅ Gradient numbers + counter animation (IntersectionObserver)
- ✅ Stagger animation (100ms delay)
- ✅ Icon hover (scale + rotate), Card hover (scale + translate-y + shadow)
- ✅ Mesh gradient overlay background

**Reference:** `Benefits2Material.astro`

### 3. Header

**Checklist:**
- ✅ Glassmorphism: `bg-white/80 backdrop-blur-lg backdrop-saturate-150`
- ✅ Logo glow hover, Menu gradient underline
- ✅ Premium CTA with shimmer
- ✅ Scroll shrink (> 50px)
- ✅ Spacer: `<div class="h-[60px] md:h-[72px]"></div>`

**Reference:** `Header1Material.astro`

---

## 🚫 ANTI-PATTERNS

❌ **Plain backgrounds** → ✅ **Gradient backgrounds**
❌ **Plain text headings** → ✅ **Gradient text**
❌ **Simple CTA buttons** → ✅ **Shimmer + arrow + glow**
❌ **Same color all cards** → ✅ **Color rotation**
❌ **No hover feedback** → ✅ **Scale + translate-y + shadow**

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

## 🎯 PHILOSOPHY SUMMARY

> **"Максимальная премиальность с wow-фактором"**

**Мы делаем:**
- ✅ Только Material Design 3
- ✅ Wow-эффекты во всём (shimmer, counter, stagger, floating)
- ✅ Все CTAs: gradient + shimmer + arrow + glow

**Мы НЕ делаем:**
- ❌ Liquid Glass (сложная реализация)
- ❌ Простые секции без эффектов
- ❌ Эксперименты с другими дизайн-системами

**Goal:** Дизайн неотличимый от топовых SaaS лендингов

---

**Version:** 2.0 | **Last Updated:** 2025-10-31 | **Status:** Active
