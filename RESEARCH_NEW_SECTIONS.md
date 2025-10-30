# Research: New Landing Page Sections

**Date:** 2025-10-30
**Purpose:** Design specifications for 6 new sections for Site Builder 2.0
**Niche:** Repair services landing pages

---

## 🚀 Implementation Progress

**Last Updated:** 2025-10-30

### ✅ COMPLETED (10 components)

#### Phase 1: Stats + Emergency Banner
- ✅ **Stats1** — Counter Grid (4 metrics, icons, animated)
- ✅ **Stats2** — Horizontal Stats Bar (compact, minimal)
- ✅ **Stats3** — Featured Stat + Supporting Metrics
- ✅ **EmergencyBanner1** — Sticky Top Bar (dismissible with localStorage)
- ✅ **EmergencyBanner2** — Floating Corner Badge (expandable, pulse animation)
- ✅ **EmergencyBanner3** — Hero Banner (countdown timer, multiple CTAs)

#### Phase 2: Before/After
- ✅ **BeforeAfter1** — Single Comparison Slider (CSS-only, draggable)
- ✅ **BeforeAfter2** — Grid of Comparisons (3-column responsive)
- ✅ **BeforeAfter3** — Featured with Thumbnails (gallery navigation, testimonial)

#### Phase 3: Portfolio (partial)
- ✅ **Portfolio1** — Fullwidth Slider (Swiper.js, captions, auto-play)

### 🔄 IN PROGRESS (0 components)

_(nothing currently in progress)_

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

## 📋 Testing Status

**All completed components are available for testing at:**
- URL: `http://localhost:4321/`
- File: `src/pages/index.astro`
- **Dev server is ALREADY RUNNING** (bash_id: e0307f) — DO NOT restart!

**Test Results:**
- ✅ **EmergencyBanner1** — TESTED & APPROVED! Mobile layout (2 rows), desktop layout (1 row), CTA hidden on mobile
- ⏳ **EmergencyBanner2** — Not tested yet (Floating Corner Badge)
- ⏳ **EmergencyBanner3** — Not tested yet (Hero Banner with countdown)
- ⏳ **Stats1, Stats2, Stats3** — Not tested yet
- ⏳ **BeforeAfter1, BeforeAfter2, BeforeAfter3** — Not tested yet
- ⏳ **Portfolio1** — Not tested yet

---

## 🔧 Current Session Notes (for next session)

**What we just finished:**
1. ✅ Fixed EmergencyBanner1 Tailwind dynamic class issue (`bg-${color}` → static mappings)
2. ✅ Improved mobile responsive layout (2 rows: message → phone/close)
3. ✅ Hide CTA button on mobile (< 640px), show on tablet+ (≥ 640px)
4. ✅ Committed: `fix: improve EmergencyBanner1 responsive layout and Tailwind classes`

**Next steps:**
1. Hide EmergencyBanner1 in index.astro
2. Show EmergencyBanner2 (Floating Corner Badge) for testing
3. Test EmergencyBanner3 (Hero Banner with countdown)
4. Test remaining Stats, BeforeAfter, Portfolio sections
5. Fix any Tailwind dynamic class issues in other components
6. Continue with Portfolio2, Portfolio3, Team, Calculator sections

**Important reminders:**
- ⚠️ Dev server is RUNNING on bash_id: e0307f — don't restart!
- ⚠️ All components in `src/pages/index.astro` — one page for all testing
- ⚠️ Tailwind doesn't support `bg-${variable}` — use static class mappings
- ⚠️ EmergencyBanner1 uses `storageKey="emergency-banner-test-v1"` to avoid old localStorage

---

## Executive Summary

Based on 2025 landing page design trends and best practices, these 6 sections will significantly enhance conversion rates and user engagement for repair service companies. Each section addresses specific user needs and business goals.

**Key Findings:**
- Interactive elements increase engagement by 50-83%
- Visual proof (before/after, portfolio) builds trust and accelerates conversion
- Statistics counters provide credibility (used on 36% of top landing pages)
- Personalization and urgency-driven CTAs are critical for 2025
- Mobile-first and accessibility are non-negotiable

---

## 1. Before/After Section

### Research Insights

**Impact:** Before/after visuals increase engagement by up to 83%, and people convert much quicker when they see interactive comparison sliders.

**2025 Trends:**
- Interactive sliders with touch/mouse support (lightweight, ~3KB)
- Full keyboard accessibility (arrow keys, Home/End navigation)
- Fullscreen mode for detailed viewing
- Mobile-responsive with swipe gestures
- High-quality, consistent dimensions for both images

**Best Practices:**
- Slider serves as focal point of landing page or case study
- Shows "problem to solution" journey in single glance
- Particularly effective for home renovation, appliance repair results
- Divider should move on mouse hover for better UX

### Component Specifications

**Variants to Create:** 3

#### Variant 1: Single Comparison with Description
- One large before/after slider
- Left/right split screen with draggable divider
- Text overlay with "Before" and "After" labels
- Caption below: service name, problem solved, timeframe
- CTA button: "Заказать ремонт"

**Props:**
```typescript
interface Props {
  title: string; // "Результаты наших работ"
  subtitle?: string; // "Мы гарантируем качество каждого ремонта"
  imageBefore: string;
  imageAfter: string;
  serviceLabel: string; // "Ремонт холодильника Bosch"
  description: string; // "Восстановление компрессора, 1 день"
  ctaText: string;
  ctaLink?: string;
}
```

**Layout:**
```
[Section Header: Title + Subtitle]
[Before/After Slider - Full Width Image]
[Service Label + Description]
[CTA Button]
```

**Technical Notes:**
- Use CSS comparison slider technique (no heavy JS libraries)
- Input range slider overlaid on images
- Mobile: 100% width, tablet: 80%, desktop: 70% max-width
- Aspect ratio: 16:9 or 4:3 for consistency

---

#### Variant 2: Grid of Comparisons (3 examples)
- 3-column grid on desktop, 1-column mobile
- Each card: mini before/after slider
- Hover to activate slider interaction
- Service name + short description below each

**Props:**
```typescript
interface ComparisonItem {
  imageBefore: string;
  imageAfter: string;
  serviceName: string;
  description: string;
}

interface Props {
  title: string;
  subtitle?: string;
  comparisons: ComparisonItem[]; // 3-6 items
  ctaText?: string;
  ctaLink?: string;
}
```

**Layout:**
```
[Section Header]
[Grid: 3 columns on desktop]
  [Card 1: Slider + Label]
  [Card 2: Slider + Label]
  [Card 3: Slider + Label]
[Optional CTA]
```

---

#### Variant 3: Featured Result with Thumbnails
- Large main slider at top
- Thumbnail gallery below (4-6 small previews)
- Click thumbnail to switch main image
- Client testimonial quote integrated

**Props:**
```typescript
interface BeforeAfterGalleryItem {
  imageBefore: string;
  imageAfter: string;
  serviceName: string;
  description: string;
}

interface Props {
  title: string;
  subtitle?: string;
  featured: BeforeAfterGalleryItem;
  gallery: BeforeAfterGalleryItem[]; // 4-6 items
  testimonial?: {
    text: string;
    author: string;
    rating?: number;
  };
  ctaText: string;
  ctaLink?: string;
}
```

---

## 2. Team Section

### Research Insights

**2025 Trends:**
- 73% of landing pages use human faces to create emotional connection
- Team sections build trust for service businesses
- Gradient backgrounds, video plugins increasingly popular
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

## 3. Stats Section

### Research Insights

**2025 Trends:**
- Statistics counters build credibility (featured on 36% of top landing pages)
- Animated counters increase engagement
- Minimalist design with bold typography trending
- Trust signals no longer buried at bottom—prominently displayed

**Best Practices:**
- 3-4 key metrics maximum (don't overwhelm)
- Round numbers work better: "500+" vs "487"
- Use icons to visualize metrics
- Context matters: pair numbers with labels
- Animate on scroll for impact

### Component Specifications

**Variants to Create:** 3

#### Variant 1: Counter Grid (4 metrics)
- 4-column grid on desktop, 2-col mobile
- Large number with animated counter
- Icon above number
- Short label below
- Optional: small description text

**Props:**
```typescript
interface StatItem {
  icon: string; // Remix Icon class
  value: string; // "500+" or "15"
  suffix?: string; // "лет", "мастеров"
  label: string; // "Выполненных ремонтов"
  description?: string;
}

interface Props {
  title?: string; // "Компания в цифрах"
  subtitle?: string;
  stats: StatItem[]; // 3-4 items
  bgColor?: string; // "blue-700" | "white"
  textColor?: string; // "white" | "gray-900"
}
```

**Layout:**
```
[Optional: Section Header]
[Grid: 4 cols desktop, 2 cols mobile]
  [Icon + Number + Label]
```

**Technical Notes:**
- Animate counter on viewport intersection
- Use Intersection Observer API
- Count from 0 to target number over 1.5-2 seconds
- Easing function: ease-out for natural feel

---

#### Variant 2: Horizontal Stats Bar
- Single row with stats side-by-side
- Good for hero section or above footer
- Minimal design, no icons
- Separator lines between stats

**Props:**
```typescript
interface Props {
  stats: Array<{
    value: string;
    label: string;
  }>; // 3-4 items
  bgColor?: string;
}
```

**Layout:**
```
[Stat 1 | Separator | Stat 2 | Separator | Stat 3 | Separator | Stat 4]
```

---

#### Variant 3: Featured Stat + Supporting Metrics
- One large primary stat (hero number)
- 2-3 smaller stats below
- Use for highlighting main achievement
- Example: "15 лет на рынке" (large) + "2000+ клиентов" (small)

**Props:**
```typescript
interface Props {
  title?: string;
  featuredStat: {
    value: string;
    suffix?: string;
    label: string;
    description?: string;
  };
  supportingStats: Array<{
    value: string;
    label: string;
  }>; // 2-3 items
  bgColor?: string;
}
```

---

## 4. Portfolio Grid Section (Carousel)

### Research Insights

**2025 Trends:**
- Carousels/sliders showcase related projects effectively
- 3D image carousels for bold presentations
- Fullwidth sliders with smooth transitions
- Card sliders for content blocks
- Touch/swipe support essential for mobile

**Best Practices:**
- Stand-out photography with interesting animations
- CTA buttons in slides (optional)
- Related content grouping
- Thumbnail navigation for easy browsing
- Auto-play with pause on hover

**Technical Note:**
- Reuse slider logic from Testimonials section (already exists)
- Adapt for image galleries instead of text cards

### Component Specifications

**Variants to Create:** 3

#### Variant 1: Fullwidth Slider with Captions
- One image visible at a time
- Full-width on viewport
- Navigation arrows (left/right)
- Dot indicators below
- Caption overlay: project name + category

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
  title: string; // "Наши работы"
  subtitle?: string;
  items: PortfolioItem[]; // 6-12 items
  autoPlay?: boolean;
  autoPlayDelay?: number; // milliseconds
  showNavigation?: boolean;
  showDots?: boolean;
}
```

**Layout:**
```
[Section Header]
[Carousel Container]
  [← Arrow] [Active Image with Caption] [→ Arrow]
  [Dot Navigation]
```

**Technical Notes:**
- Copy carousel logic from Testimonials
- Adapt for images instead of cards
- Add lightbox on click (fullscreen view)
- Lazy load images for performance

---

#### Variant 2: Multi-Card Carousel (3 visible)
- Show 3 images at once on desktop
- 2 on tablet, 1 on mobile
- Scroll by one image per click
- Hover effect: slight zoom + overlay

**Props:**
```typescript
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

## 5. Calculator Section

### Research Insights

**2025 Trends:**
- Interactive calculators boost engagement significantly
- Personalized value increases conversion
- No-code solutions with drag-and-drop builders popular
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

## 6. Emergency Banner Section

### Research Insights

**2025 Trends:**
- Alert banners positioned prominently at top (no scrolling needed)
- Sticky elements that scroll with page but can be closed
- Minimal text (single line goal)
- Color conveys urgency but avoid panic-inducing red/orange
- Single or max two CTAs (focus user action)

**Best Practices:**
- Appears across all pages (not just homepage)
- Includes date/time for time-sensitive info
- Can be dismissed by user (close X)
- Urgent tone but not panic-inducing
- Phone number prominently displayed

**Use Cases for Repair Services:**
- 24/7 emergency repair service
- Limited-time discount
- Holiday/weekend availability
- Weather-related urgent repairs (frozen pipes, AC breakdowns)

### Component Specifications

**Variants to Create:** 3

#### Variant 1: Sticky Top Bar (Dismissible)
- Fixed at top, scrolls with page
- Single line of text + phone number + CTA button
- Close X button on right
- Urgent but professional color (blue or amber, not red)
- Icon on left (phone, alert, clock)

**Props:**
```typescript
interface Props {
  message: string; // "Срочный ремонт 24/7! Выезд мастера за 30 минут"
  icon?: string; // Remix Icon class
  phone: string; // "+7 (999) 123-45-67"
  ctaText?: string; // "Вызвать сейчас"
  ctaLink?: string;
  bgColor?: string; // "blue-700" | "amber-500" | "red-600"
  textColor?: string; // "white"
  dismissible?: boolean; // default: true
  storageKey?: string; // localStorage key for dismissed state
}
```

**Layout:**
```
[Icon] Срочный ремонт 24/7! | ☎ +7 (999) 123-45-67 | [Вызвать сейчас] [X]
```

**Technical Notes:**
- Use `position: sticky` + `top: 0` + `z-index: 50`
- Save dismissed state to localStorage
- Check localStorage on page load (don't show if dismissed)
- Optional: auto-show after N seconds of inactivity
- Mobile: stack elements vertically if needed

---

#### Variant 2: Floating Corner Badge
- Fixed position at bottom-right corner
- Circular or rounded badge design
- Icon + short text or just icon
- Click to expand full message
- Pulse animation to draw attention

**Props:**
```typescript
interface Props {
  icon: string; // Remix Icon class
  shortText?: string; // "24/7" or "SOS"
  expandedMessage: string; // Full text on click
  phone: string;
  ctaText: string;
  bgColor?: string;
  position?: 'bottom-right' | 'bottom-left';
  pulseAnimation?: boolean;
}
```

**Layout:**
```
[Floating Badge: bottom-right corner]
  Collapsed: [Icon + "24/7"] (with pulse)
  Expanded: [Full message + Phone + CTA + Close]
```

**Technical Notes:**
- Use `position: fixed` + `bottom: 20px` + `right: 20px`
- Toggle expanded state with JS
- Mobile: adjust size and position
- Ensure doesn't cover important content

---

#### Variant 3: Hero Banner (Non-dismissible)
- Full-width banner below header
- Prominent display on homepage/landing pages
- Larger text, multiple CTAs possible
- Optional: countdown timer for limited offers
- Image/illustration on right side (optional)

**Props:**
```typescript
interface Props {
  title: string; // "Экстренный ремонт за 1 час!"
  message: string; // "Работаем 24/7 без выходных и праздников"
  icon?: string;
  image?: string; // Optional illustration/photo
  phone: string;
  primaryCta: {
    text: string;
    link?: string;
  };
  secondaryCta?: {
    text: string;
    link?: string;
  };
  countdown?: {
    endDate: string; // ISO date string
    label: string; // "До конца акции:"
  };
  bgColor?: string;
  textColor?: string;
}
```

**Layout:**
```
[Full-Width Banner]
  [Left: Icon + Title + Message + Phone + CTAs]
  [Right: Optional Image or Countdown Timer]
```

---

## Implementation Priority

Based on impact and complexity:

### Phase 1 (High Impact, Medium Complexity)
1. **Stats Section** - Quick win, builds credibility
2. **Emergency Banner** - Urgent CTA, drives conversions

### Phase 2 (High Impact, Higher Complexity)
3. **Before/After Section** - Strong visual proof
4. **Portfolio Carousel** - Reuse existing slider logic

### Phase 3 (Medium Impact, Higher Complexity)
5. **Team Section** - Builds trust
6. **Calculator** - Most complex, highest engagement

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

1. Review research findings and specifications
2. Confirm priority order with user
3. Start implementation section-by-section
4. Test each section across all breakpoints
5. Commit after each completed section
6. Update CHECKLIST.md with new sections

---

**End of Research Document**
