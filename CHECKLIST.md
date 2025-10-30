# Site Builder 2.0 — Component Reference List

**Purpose:** Reference list of required sections for repair service landing pages

**Workflow:** User selects section → provides code/screenshot → Claude converts to Astro

---

## 1. HEADER

### Header1 — Simple Logo + Menu + Phone

**Concept:** Classic header with logo on left, navigation in center, contacts on right.

**Required elements:**

- Logo/company name (left, clickable to homepage)
- Desktop navigation menu (center/right)
- Phone number with icon (desktop)
- CTA button (desktop)
- Burger menu button (mobile)
- Slide-in sidebar (mobile) — 80% width, max 384px
- Sticky/fixed positioning
- Mobile menu items: Услуги, Отзывы, Контакты
- Close button in sidebar
- Overlay background when sidebar open
- ESC key to close sidebar
- Spacer div to prevent content hiding under header

**Status:** [x] Completed

**File:** `src/components/sections/header/Header1.astro`

---

### Header2 — Logo + Menu + Promo Banner

**Concept:** Header with promotional banner on top for special offers and discounts.

**Required elements:**

- Promo banner at very top (fixed, customizable background color)
- Banner icon + message text
- Main header below banner (all Header1 elements)
- Sticky/fixed positioning for both banner and header
- Promo message also shown in mobile sidebar
- Two spacers: one for banner height, one for header height
- Default banner: green background, gift icon

**Status:** [x] Completed

**File:** `src/components/sections/header/Header2.astro`

---

## 2. HERO SECTIONS

### Hero1 — Hero with Image & CTAs

**Required elements:**

- Main heading (h1) — service name + location
- Subheading — value proposition, timing, guarantee
- Two CTA buttons — primary + secondary
- Image on right side (hidden on mobile)
- White background

**Status:** [x] Completed

**File:** `src/components/sections/heroes/Hero1.astro`

---

### Hero2 — Hero with Benefits List & Image

**Required elements:**

- Main heading (h1) — service name + location + timing
- Subheading — value proposition, diagnostic offer
- Benefits list (3 items) — speed, availability, warranty
- Benefits icons — Remix Icons (time, tools, shield)
- Single CTA button (green) with phone icon
- Image on right side (hidden on mobile)
- White background

**Status:** [x] Completed

**File:** `src/components/sections/heroes/Hero2.astro`

---

### Hero3 — Hero with Benefits List & Contact Form

**Required elements:**

- Main heading (h1) with brand highlight (e.g., "LG" in red)
- Subtitle — location coverage
- Description with tooltip link ("Бесплатный" with hover tooltip)
- Benefits list (3 items) with green checkmark icons
- Contact form in left column:
  - Phone input (simple field with HTML5 validation)
  - Submit button (red CTA)
  - Privacy policy text with link
- White background
- Image on right side (hidden on mobile)

**Status:** [x] Completed

**File:** `src/components/sections/heroes/Hero3.astro`

---

### Hero4 — Hero with Form Card & Trust Badges

**Required elements:**

- Main heading (h1) — service name + value proposition
- Subtitle — additional description
- Form card (blue background):
  - Form title
  - Phone input (simple field with HTML5 validation)
  - Submit button (orange CTA)
  - Call-to-action note below form
- Three trust badge cards below form (grid):
  - Icon (Remix Icons)
  - Short text description
- White background
- Image on right side (hidden on mobile)

**Status:** [x] Completed

**File:** `src/components/sections/heroes/Hero4.astro`

---

### Hero5 — Hero with Badge, Benefits & CTA

**Required elements:**

- Badge at top (blue background, rounded) — experience/years
- Link next to badge — "Узнать больше >"
- Main heading (h1) — service description
- Subtitle (gray text) — specialist name or additional info
- Benefits list (3 items) with green checkmark icons
- CTA button (blue) — consultation/contact
- White background
- Image on right side (hidden on mobile)

**Status:** [x] Completed

**File:** `src/components/sections/heroes/Hero5.astro`

---

### Hero6 — Centered Hero with Feature Cards

**Required elements:**

- Single-column centered layout (NO two-column grid)
- Main heading (h1) centered — service name + timing
- Subtitle centered — value proposition
- CTA button (red) centered
- Three feature cards below (grid):
  - Icon with blue background circle/square
  - Feature text
  - White background with border
- White background
- NO image (pure centered content)

**Status:** [x] Completed

**File:** `src/components/sections/heroes/Hero6.astro`

---

## 2. SERVICES & PRICING

### Services1 — Problem Selector Grid

**Required elements:**

- Section heading (h2) — "Какая у вас неисправность?"
- Subheading — value proposition
- Grid of service cards (3 columns → 2 → 1 responsive)
- Each card: Remix Icon (green), problem title, price "от XXX₽"
- Card hover effects — shadow, border color change, icon scale
- Cards are interactive buttons for future functionality
- Default content: 9 washing machine problems with icons and prices

**Status:** [x] Completed

**File:** `src/components/sections/pricing/ServicesGrid.astro`

---

### Services2 — Pricing Table with Time Column

**Required elements:**

- Section heading (h2) — "Стоимость услуг"
- Subheading — "Фиксированные цены без скрытых доплат"
- Table with green header (3 columns):
  - Column 1: "Услуга" (Service name)
  - Column 2: "Время" (Estimated repair time)
  - Column 3: "Цена" (Price)
- Rows with hover effect (gray background)
- "Показать ещё" / "Скрыть" button to toggle hidden rows
- Interactive JavaScript toggle functionality
- Default: first 5 rows visible, rest hidden
- Button with green border and icon (+ / −)

**Status:** [x] Completed

**File:** `src/components/sections/pricing/PricingTable.astro`

---

### Services3 — Service Cards with Images & CTA

**Required elements:**

- Section heading (h2) centered — "Ремонт техники LG на дому"
- Subheading centered — service description
- Grid of service cards (3 columns → 2 → 1 responsive)
- Each card:
  - Service image (placeholder or icon)
  - Service title (large, bold)
  - Price label (small, gray)
  - Price (large, red/brand color)
  - Gray background with hover shadow
- CTA block below cards:
  - Light gradient background (blue-green)
  - Message text (left)
  - CTA button (red, prominent)
  - Optional: support specialist photo (right, rounded)
- Default: 9 appliance services

**Status:** [x] Completed

**File:** `src/components/sections/pricing/ServicesCards.astro`

---

### Services4 — Interactive Pricing Accordion

**Required elements:**

- Section heading (h2) centered — service/brand name
- Subheading centered — pricing transparency message
- Grid of category cards (3 columns → 2 → 1 responsive)
- Each card:
  - Icon (Remix Icons) + category title at top
  - Full-width toggle button with border outline
  - Button text: "Показать цены +" / "Скрыть цены −"
  - Collapsible price list (native HTML `<details>` accordion)
  - Service name + price in two-column layout
- Gray background for contrast with white cards
- Hover effects: border color + background tint

**Status:** [x] Completed

**File:** `src/components/sections/pricing/Services4.astro`

---

### Services5 — Pricing Package Cards

**Required elements:**

- Section heading (h2) + subtitle
- Grid of package cards (3 columns → 2 → 1 responsive)
- Each card:
  - Full-width image header with badge overlay (Базовый/Популярный/Премиум)
  - Badge positioned top-left on image
  - Title + subtitle + description block (gray background)
  - "Что входит" list (white background - visually highlighted)
  - "Технические характеристики" list with checkmark icons (gray background)
  - Price + CTA button block at bottom (gray background, auto-pushed to bottom)
- Gray card background with white accent for "includes" section
- Responsive image height (h-64)
- Hover effects on cards

**Status:** [x] Completed

**File:** `src/components/sections/pricing/Services5.astro`

---

### Services6 — Service Problem Cards

**Required elements:**

- Section heading (h2) + subtitle
- Grid of service cards (3 columns → 2 → 1 responsive)
- Each card:
  - Full-width image header (h-64)
  - Service title (blue bold text)
  - Service description
  - Price button (full-width, blue background)
- Gray card background (bg-gray-50)
- Flexbox layout with button auto-pushed to bottom
- Hover effects on cards
- Default: 6 common computer problems with pricing

**Status:** [x] Completed

**File:** `src/components/sections/pricing/Services6.astro`

---

## 3. BENEFITS

### Benefits1 — Classic Icon Grid

**Concept:** Traditional grid layout with icons, perfect for quick scanning of key advantages.

**Required elements:**

- Section heading (h2) + subtitle centered
- Grid of 4-6 benefit cards (3 columns → 2 → 1 responsive)
- Each card:
  - Large icon at top (Remix Icons with colored background circle or just icon)
  - Benefit title (bold, medium size)
  - Short description (2-3 lines max)
- Clean white or light gray background
- Hover effects on cards (subtle shadow or scale)
- Typical benefits for repair niche:
  - Быстрый выезд / Express service (ri-time-line)
  - Гарантия / Warranty (ri-shield-check-line)
  - Опытные мастера / Expertise (ri-star-line)
  - Оригинальные запчасти / Genuine parts (ri-tools-line)
  - Доступные цены / Fair pricing (ri-price-tag-3-line)
  - 24/7 поддержка / Round-the-clock support (ri-customer-service-line)

**Status:** [x] Completed

**File:** `src/components/sections/benefits/Benefits1.astro`

---

### Benefits2 — Stats & Social Proof Cards

**Concept:** Trust-building section with numbers and statistics to prove credibility and experience.

**Required elements:**

- Section heading (h2) + subtitle centered
- Grid of 3-4 stat cards (2-3 columns → 1 responsive)
- Each card (white background with border or shadow):
  - Large number/stat at top (huge bold text, colored)
  - Metric label below number
  - Icon related to metric (optional)
  - Brief explanation text
- Example stats for repair services:
  - "10+ лет" — Years in business
  - "2000+ клиентов" — Happy customers
  - "Гарантия 12 месяцев" — Warranty period
  - "Выезд за 30 минут" — Response time
  - "98% успешных ремонтов" — Success rate
- Strong visual hierarchy: number → label → description
- Optional: subtle animations on scroll (count-up effect)

**Status:** [x] Completed

**File:** `src/components/sections/benefits/Benefits2.astro`

---

### Benefits3 — Feature Highlights with Images

**Concept:** Horizontal alternating layout with images for detailed storytelling about advantages.

**Required elements:**

- Section heading (h2) + subtitle
- 3-4 feature blocks, alternating left-right layout:
  - Block 1: Image left, content right
  - Block 2: Content left, image right
  - Block 3: Image left, content right
- Each block contains:
  - Image (photo or illustration showing the benefit)
  - Icon + benefit title
  - Detailed description (3-5 lines)
  - Optional: checklist of sub-benefits
  - Optional: CTA link or button
- Two-column grid on desktop → single column stack on mobile
- Example features:
  - Профессиональная диагностика (image: technician with tools)
  - Гарантия качества (image: warranty certificate/badge)
  - Быстрое обслуживание (image: clock/timer)
- White background with subtle gray dividers between blocks

**Status:** [x] Completed

**File:** `src/components/sections/benefits/Benefits3.astro`

---

## 4. CTA SECTIONS

### CTA1 — Bold CTA Banner with Stats

**Concept:** High-impact banner with urgency message and social proof for maximum conversions.

**Required elements:**

- Large heading with urgency message ("Не откладывайте ремонт!")
- Subheading with value proposition
- Two-column layout on desktop (content left, CTA block right)
- Phone number (large, clickable with icon)
- Primary CTA button (green/red for urgency)
- Optional: 2-3 mini stat cards below (e.g., "2000+ клиентов", "24/7")
- Bright gradient background (blue-to-purple or orange-to-red)
- Single-column stack on mobile

**Design notes:**

- Use color psychology: red/orange for urgency, green for action
- Phone button must be prominent with `tel:` link
- Stats add social proof and trust

**Status:** [x] Completed

**File:** `src/components/sections/cta/CTA1.astro`

---

### CTA2 — CTA with Background Image & Overlay

**Concept:** Visual storytelling CTA with background image to create emotional connection.

**Required elements:**

- Background image with dark overlay (opacity 50-70%)
- Centered content layout
- Heading (white text, large and bold)
- Short description (1-2 sentences)
- CTA button (contrasting color, stands out from background)
- Optional: secondary CTA or phone link below button
- Responsive image sizing (object-cover)

**Design notes:**

- Image should be relevant (technician at work, happy customer, etc.)
- Overlay ensures text readability
- Button color must contrast strongly with overlay

**Status:** [x] Completed

**File:** `src/components/sections/cta/CTA2.astro`

---

### CTA3 — Split CTA with Contact Form

**Concept:** Conversion-focused layout with embedded form for lead capture (ideal for mid-page placement).

**Required elements:**

- Two-column layout (content left, form right)
- Left column:
  - Heading with clear value proposition
  - 3-4 benefit points with checkmark icons
  - Optional: trust badges or guarantee message
- Right column:
  - Contact form card (white background with shadow)
  - Form fields: Name, Phone, optional Message
  - Submit button (prominent, colored)
  - Privacy policy note below button
- White or light gray background
- Single-column stack on mobile (form below content)

**Design notes:**

- Form should look trustworthy (clean, simple)
- Minimal required fields = higher conversion
- Use HTML5 validation for phone input

**Status:** [x] Completed

**File:** `src/components/sections/cta/CTA3.astro`

---

### CTA4 — Sticky Bottom CTA Bar (Mobile-First)

**Concept:** Always-visible sticky bar for instant contact on mobile (appears after scrolling).

**Required elements:**

- Fixed position bottom bar (`fixed bottom-0`)
- Two prominent buttons side-by-side:
  - Phone call button (green, with `tel:` link)
  - WhatsApp button (green, opens WhatsApp chat)
- Icons for each button (ri-phone-line, ri-whatsapp-line)
- White or semi-transparent background with shadow
- Full-width on mobile, max-width container on desktop
- Optional: show/hide based on scroll position (appears after 300px scroll)

**Design notes:**

- Must not block content (use padding-bottom on body)
- Touch-friendly button sizes (min-height 48px)
- High contrast for visibility
- Consider hiding on desktop (mobile-only component)

**Status:** [x] Completed

**File:** `src/components/sections/cta/CTA4.astro`

---

### CTA5 — CTA with Social Proof Cards

**Concept:** Trust-building CTA combining statistics, testimonials, and action button.

**Required elements:**

- Section heading centered
- Grid of 3-4 stat cards above CTA:
  - Large number (e.g., "10+ лет", "2000+ клиентов")
  - Icon (optional)
  - Short label
- Central CTA block below stats:
  - Prominent heading ("Готовы заказать ремонт?")
  - Large CTA button with phone icon
  - Secondary text ("Или позвоните нам: +7...")
- White background with subtle shadows on cards
- 4-column grid for stats → 2-column → 1-column responsive

**Design notes:**

- Stats provide credibility before asking for action
- Works great after pricing/services section
- Button should be large and impossible to miss

**Status:** [x] Completed

**File:** `src/components/sections/cta/CTA5.astro`

---

## 5. TESTIMONIALS

### Testimonials — Customer Reviews Carousel

**Concept:** Swiper.js carousel showing 2 testimonials per slide on desktop, 1 on mobile.

**Required elements:**

- Section heading + subheading
- Swiper carousel with loop enabled
- Each testimonial card:
  - Avatar (circular, 64px)
  - Star rating (5 stars, ri-star-fill/ri-star-line)
  - Customer name (bold)
  - Date
  - Review text
- Navigation: centered arrows + pagination dots
- Responsive: 2 cards on desktop (lg:), 1 card on mobile
- Border instead of shadow (border-gray-200)

**Status:** [x] Completed

**File:** `src/components/sections/testimonials/Testimonials.astro`

---

### Testimonials2 — Customer Reviews Grid with Toggle

**Concept:** Grid layout with "Show more" button to reveal hidden testimonials.

**Required elements:**

- Section heading + subheading
- Grid layout (2 columns on desktop, 1 on mobile)
- Each testimonial card:
  - Avatar (circular, 64px)
  - Star rating (5 stars)
  - Customer name + date
  - Review text
- Shows first 4 testimonials by default
- "Показать ещё" / "Скрыть" toggle button
- Smooth CSS animations (fadeInUp/fadeOutDown)
- Cards have equal height (flexbox)
- Gray background cards (bg-gray-50)

**Status:** [x] Completed

**File:** `src/components/sections/testimonials/Testimonials2.astro`

---

### Testimonials3 — Customer Reviews with Work Photos

**Concept:** Carousel with photos of completed work alongside testimonials (proof of quality).

**Required elements:**

- Section heading + subheading
- Swiper carousel (1 full-width card per slide)
- Each testimonial card (two-column layout):
  - Left side: Work photo (full height, object-cover)
  - Right side: Testimonial content (avatar, stars, name, date, text)
- Responsive: side-by-side on desktop (lg:grid-cols-2), stacked on mobile
- Navigation: centered arrows + pagination dots
- Loop enabled
- Border instead of shadow

**Use case:** Perfect for showcasing real results with customer feedback (before/after photos, completed repairs, etc.)

**Status:** [x] Completed

**File:** `src/components/sections/testimonials/Testimonials3.astro`

---

## 6. HOW IT WORKS

### HowItWorks1 — Vertical Timeline

**Concept:** Vertical timeline with numbered badges on the left, content on the right.

**Required elements:**

- Section heading + subheading
- Vertical timeline line (border-left)
- 4-5 steps with circular number badges
- Each step: icon, title, description
- Last step highlighted (green color, optional CTA button)
- Responsive: vertical layout maintained on all screen sizes

**Status:** [x] Completed

**File:** `src/components/sections/how-it-works/HowItWorks1.astro`

---

### HowItWorks2 — Horizontal Cards with Arrows

**Concept:** Horizontal card layout with connecting arrows between steps.

**Required elements:**

- Section heading + subheading
- Grid of 4 cards (4 columns → 2 → 1 responsive)
- Arrows between cards (→ on desktop, ↓ on mobile)
- Each card: number badge, icon, title, description
- Border hover effects (scale, shadow, border color change)
- Optional: CTA section below cards

**Status:** [x] Completed

**File:** `src/components/sections/how-it-works/HowItWorks2.astro`

---

### HowItWorks3 — Icon Grid (Minimalist)

**Concept:** Simple grid layout with large icons and numbers, clean minimalist design.

**Required elements:**

- Section heading + subheading
- Grid layout (4 columns → 2 → 1 responsive)
- Each block: large number circle (blue), large icon (64px+), title, description
- No lines/arrows — pure clean design
- Centered text layout
- Gradient background (blue-to-white)
- Hover effects on icons and numbers (scale)

**Status:** [x] Completed

**File:** `src/components/sections/how-it-works/HowItWorks3.astro`

---

## 7. FAQ

### FAQ1 — Centered Single Column

**Concept:** Classic centered FAQ with full-width accordion in the center of the page.

**Required elements:**

- Section heading + subheading (centered)
- Centered accordion (max-width for readability)
- Each item: question + answer
- One question opens at a time (auto-close others)
- Arrow icon rotation on open (ri-arrow-down-s-line)
- Native HTML `<details>` + JavaScript

**Status:** [x] Completed

**File:** `src/components/sections/faq/FAQ1.astro`

---

### FAQ2 — Two-Column with Image

**Concept:** Two-column layout with FAQ on the left, decorative image on the right.

**Required elements:**

- Two-column grid (lg:grid-cols-2)
- Left column: heading + subheading + accordion
- Right column: image (sticky on desktop)
- Image shown below accordion on mobile
- One question opens at a time
- Arrow icon rotation on open

**Status:** [x] Completed

**File:** `src/components/sections/faq/FAQ2.astro`

---

### FAQ3 — Two-Column Split Layout

**Concept:** Split layout with heading on left, FAQ accordion on right.

**Required elements:**

- Two-column grid (lg:grid-cols-2)
- Left column: heading + subheading (sticky on desktop)
- Right column: FAQ accordion
- One question opens at a time
- Gradient background (blue-to-white)
- Hover effects on accordion items

**Status:** [x] Completed

**File:** `src/components/sections/faq/FAQ3.astro`

---

## 8. FOOTER

### Footer — Site Footer

**Required elements:**

- Logo or company name
- Contact info: phone, email, address
- Social media links (VK, Telegram, WhatsApp) with icons
- Quick links (optional)
- Copyright text
- Multi-column layout → single column on mobile

**Status:** [ ] Not started

---

## TOTAL: 31 Components Across 9 Categories

**Progress:** 30 / 31 completed (96.8%)

**Header:** 2 / 2 completed ✅
**Heroes:** 6 / 6 completed ✅
**Services & Pricing:** 6 / 6 completed ✅
**Benefits:** 3 / 3 completed ✅
**CTA Sections:** 5 / 5 completed ✅
**Testimonials:** 3 / 3 completed ✅
**How It Works:** 3 / 3 completed ✅
**FAQ:** 3 / 3 completed ✅

**Remaining:**
- Footer: 0 / 1

**Note:** Contacts section removed (duplicate of Footer functionality)

**Last Updated:** 2025-10-30

---
