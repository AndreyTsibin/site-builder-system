# Research: New Landing Page Sections (Remaining)

**Date:** 2025-10-30
**Purpose:** Design specifications for remaining sections in Site Builder 2.0
**Niche:** Repair services landing pages

---

## 🚀 Implementation Progress

**Last Updated:** 2025-10-30

### ✅ COMPLETED (10 components)

- **Stats1, Stats2, Stats3** — All stats sections tested and approved
- **EmergencyBanner1, EmergencyBanner2, EmergencyBanner3** — All emergency banners tested and approved
- **BeforeAfter1, BeforeAfter2, BeforeAfter3** — All before/after sections tested and approved
- **Portfolio1** — Fullwidth Slider with Swiper.js

### ⏳ TODO (7 components)

#### Portfolio (2 remaining)
- ⏳ **Portfolio2** — Multi-Card Carousel (3 visible, scroll by 1)
- ⏳ **Portfolio3** — Thumbnail Navigation Carousel (main + thumbnails)

#### Team (3 variants)
- ⏳ **Team1** — Grid with Photo Cards (3-4 column, certifications)
- ⏳ **Team2** — Featured Lead + Supporting Team (owner highlight)
- ⏳ **Team3** — Simple Photo Row with Bios (2-4 people)

#### Calculator (2 variants)
- ⏳ **Calculator1** — Simple Cost Estimator (dropdown + radio + toggle)
- ⏳ **Calculator2** — Detailed Multi-Step Calculator (progress indicator, lead form)

---

## Executive Summary

Interactive elements like portfolio carousels, team sections, and calculators significantly enhance conversion rates and user engagement for repair service companies. Based on 2025 trends, these remaining sections will complete the component library.

**Key Principles:**
- Interactive elements increase engagement by 50-83%
- Human faces (team sections) build trust and emotional connection
- Calculators provide personalized value and boost conversion
- Mobile-first and accessibility are non-negotiable

---

## 1. Portfolio Grid Section (Carousel)

### Research Insights

**2025 Trends:**
- Carousels/sliders showcase related projects effectively
- 3D image carousels for bold presentations
- Touch/swipe support essential for mobile
- Thumbnail navigation for easy browsing

**Best Practices:**
- Stand-out photography with interesting animations
- Related content grouping
- Auto-play with pause on hover

**Technical Note:**
- Use Swiper.js (already loaded in Portfolio1)
- Adapt for different layouts

### Component Specifications

**Variants Remaining:** 2

#### Variant 2: Multi-Card Carousel (3 visible)
- Show 3 images at once on desktop
- 2 on tablet, 1 on mobile
- Scroll by one image per click
- Hover effect: slight zoom + overlay

**Props:**
```typescript
interface PortfolioItem {
  image: string;
  title: string; // "Ремонт кухни в ЖК Новый"
  category: string; // "Кухонная техника"
  description?: string;
  link?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  items: PortfolioItem[];
  slidesPerView?: {
    mobile: number; // 1
    tablet: number; // 2
    desktop: number; // 3
  };
  spaceBetween?: number; // gap in pixels
}
```

**Layout:**
```
[Section Header]
[← Arrow] [Image 1] [Image 2] [Image 3] [→ Arrow]
```

---

#### Variant 3: Thumbnail Navigation Carousel
- Main large image at top
- Thumbnail strip below (5-7 visible)
- Click thumbnail to change main image
- Active thumbnail highlighted
- Optional: category filter tabs above

**Props:**
```typescript
interface Props {
  title: string;
  subtitle?: string;
  items: PortfolioItem[];
  categories?: string[]; // For filter tabs
  thumbnailCount?: number; // How many thumbnails visible at once
}
```

**Layout:**
```
[Section Header]
[Optional: Category Filter Tabs]
[Main Large Image]
[Thumbnail Strip: ← | Thumb1 | Thumb2 | ... | Thumb7 | →]
```

---

## 2. Team Section

### Research Insights

**2025 Trends:**
- 73% of landing pages use human faces to create emotional connection
- Team sections build trust for service businesses
- Focus on expertise, certifications, years of experience

**Best Practices for Repair Services:**
- Highlight master technicians with photos
- Show certifications, specializations
- Include experience years (builds authority)
- Personal touch: names, brief bios
- For repair niche: emphasize expertise with specific brands/models

### Component Specifications

**Variants to Create:** 3

#### Variant 1: Grid with Photo Cards
- 3-4 column responsive grid
- Photo, name, role, experience years
- Brief bio (1-2 sentences)
- Certifications/specializations listed
- Optional: contact link per team member

**Props:**
```typescript
interface TeamMember {
  photo: string;
  name: string;
  role: string; // "Мастер по ремонту холодильников"
  experience: string; // "15 лет опыта"
  bio: string;
  specializations?: string[]; // ["Bosch", "Siemens", "Samsung"]
  certifications?: string[]; // ["Сертификат Bosch", "Мастер года 2024"]
}

interface Props {
  title: string; // "Наши мастера"
  subtitle?: string; // "Опытные специалисты с многолетним стажем"
  members: TeamMember[]; // 3-8 members
  bgColor?: string; // "white" | "gray-50"
}
```

**Layout:**
```
[Section Header]
[Grid: 3 cols desktop, 2 cols tablet, 1 col mobile]
  [Card: Photo + Name + Role + Bio + Tags]
```

---

#### Variant 2: Featured Lead + Supporting Team
- Large card for lead technician/owner
- Smaller cards for team members below
- Emphasize leadership and company values
- Stats integration: "Команда из 12 мастеров, 200+ ремонтов в месяц"

**Props:**
```typescript
interface Props {
  title: string;
  subtitle?: string;
  lead: {
    photo: string;
    name: string;
    role: string;
    bio: string;
    experience: string;
    certifications?: string[];
  };
  team: Array<{
    photo: string;
    name: string;
    role: string;
    experience: string;
  }>; // 3-6 members
  stats?: Array<{
    label: string;
    value: string;
  }>; // ["12+ мастеров", "200+ ремонтов/месяц"]
}
```

---

#### Variant 3: Simple Photo Row with Bios
- Horizontal photo row (circular avatars)
- Names below photos
- Single shared bio paragraph describing team
- Good for smaller teams (2-4 people)
- Certifications displayed as badges below

**Props:**
```typescript
interface Props {
  title: string;
  subtitle?: string;
  teamDescription: string; // Paragraph about team
  members: Array<{
    photo: string;
    name: string;
    role: string;
  }>; // 2-4 members
  certifications?: string[]; // Company-wide certs
  ctaText?: string;
}
```

---

## 3. Calculator Section

### Research Insights

**2025 Trends:**
- Interactive calculators boost engagement significantly
- Personalized value increases conversion
- Real-time calculation with visual feedback

**Best Practices:**
- Simple inputs: sliders, checkboxes, dropdowns
- Instant result display (no "Calculate" button needed)
- Clear pricing breakdown
- Mobile-friendly controls
- Lead capture integration (email for detailed quote)

**Use Cases for Repair Services:**
- Estimate repair cost based on device type + problem
- Calculate service call cost (base fee + parts + labor)
- Quick quote for urgency (express service surcharge)

### Component Specifications

**Variants to Create:** 2

#### Variant 1: Simple Cost Estimator
- Select device type (dropdown)
- Select problem type (radio buttons)
- Service urgency (regular/express toggle)
- Real-time price display
- CTA: "Получить точную смету"

**Props:**
```typescript
interface CalculatorOption {
  label: string;
  value: string;
  price: number; // base price for this option
}

interface Props {
  title: string; // "Рассчитайте стоимость ремонта"
  subtitle?: string;
  deviceTypes: CalculatorOption[]; // ["Холодильник", "Стиральная машина", ...]
  problemTypes: CalculatorOption[]; // ["Не включается", "Шумит", ...]
  urgencyOptions: CalculatorOption[]; // ["Обычный", "Экспресс (+50%)"]
  baseFee: number; // Выезд мастера
  resultLabel: string; // "Примерная стоимость:"
  disclaimer: string; // "Точная цена после диагностики"
  ctaText: string;
}
```

**Layout:**
```
[Section Header]
[Form Container]
  [Dropdown: Тип устройства]
  [Radio Group: Проблема]
  [Toggle: Срочность]

  [Result Box: "Примерная стоимость: 3500 ₽"]
  [Disclaimer text]
  [CTA Button: "Вызвать мастера"]
```

**Technical Notes:**
- Use Astro + vanilla JS for calculations (no framework needed)
- Formula: `baseFee + devicePrice + problemPrice + (urgency multiplier)`
- Update result on any input change
- Animate result number on update

---

#### Variant 2: Detailed Multi-Step Calculator
- Step 1: Device selection (visual cards with icons)
- Step 2: Problem checkboxes (multiple issues possible)
- Step 3: Additional options (warranty, express, parts)
- Progress indicator (1/3, 2/3, 3/3)
- Final result + lead form

**Props:**
```typescript
interface Props {
  title: string;
  subtitle?: string;
  steps: Array<{
    title: string;
    options: Array<{
      label: string;
      icon?: string;
      price: number;
      description?: string;
    }>;
    allowMultiple?: boolean; // For step 2 (multiple problems)
  }>;
  baseFee: number;
  resultScreen: {
    title: string; // "Ваша смета готова"
    priceLabel: string; // "Итоговая стоимость:"
    breakdown: boolean; // Show price breakdown
    ctaText: string;
    leadForm: {
      nameLabel: string;
      phoneLabel: string;
      submitText: string;
    };
  };
}
```

**Layout:**
```
[Section Header]
[Progress Bar: Step 2 of 3]
[Step Content]
  [Option Cards Grid]
[Navigation: ← Назад | Далее →]

[Final Screen: Result + Lead Form]
```

---

## Design Tokens & Standards

All sections must follow existing project standards:

### Layout
```
Section: py-16 md:py-20 lg:py-24
Container: max-w-[1344px] mx-auto px-4 sm:px-6 lg:px-8
Grid Gaps: gap-6 md:gap-8 lg:gap-12
```

### Typography
```
H2: text-3xl md:text-4xl lg:text-5xl font-bold
H3: text-2xl md:text-3xl font-bold
Body: text-base md:text-lg
```

### Colors
```
Brand Blue: #1E40AF (bg-blue-700)
Brand Green: #10B981 (bg-green-600)
Brand Red: #DC2626 (bg-red-600)
Neutral: white, gray-50, gray-900
```

### Icons
- Remix Icon library (CDN already loaded)
- Use `<i class="ri-icon-name-line"></i>` format

### Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

## Next Steps

1. Start with Portfolio2 and Portfolio3 (continue portfolio category)
2. Move to Team sections (3 variants)
3. Finish with Calculator sections (most complex)
4. Test each section across all breakpoints
5. Commit after each completed section

---

**End of Research Document**
