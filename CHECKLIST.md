# Site Builder 2.0 — Component Reference List

**Purpose:** Reference list of required sections for repair service landing pages

**Workflow:** User selects section → provides code/screenshot → Claude converts to Astro

---

## 1. HERO SECTIONS

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

## 4. CONTACTS

### Contacts — Company Contacts & Details

**Required elements:**

- Section heading
- Two columns: contact info + map embed (optional)
- Phone (clickable)
- Email (clickable)
- Physical address
- Company details: INN, OGRN (for Russian market)
- Social media links (VK, Telegram, WhatsApp)

**Status:** [ ] Not started

---

## 5. CTA SECTIONS

### CTA1 — Bold CTA Banner

**Required elements:**

- Large heading
- Subheading / urgency message
- Phone number (large, clickable)
- CTA button
- Bright gradient background (blue, purple, yellow)

**Status:** [ ] Not started

---

### CTA2 — CTA with Background Image

**Required elements:**

- Heading
- Short description
- CTA button
- Background image with overlay
- Centered content

**Status:** [ ] Not started

---

### CTA3 — Minimal CTA

**Required elements:**

- Heading
- Single CTA button
- Simple background (solid color or subtle gradient)

**Status:** [ ] Not started

---

## 6. TESTIMONIALS

### Testimonials — Customer Reviews

**Required elements:**

- Section heading
- Grid of testimonial cards (3 columns → responsive)
- Each card: customer name, review text, star rating (5 stars), photo (optional), date
- Star icons: ri-star-fill (filled), ri-star-line (empty)

**Status:** [ ] Not started

---

## 7. HOW IT WORKS

### HowItWorks — Service Process

**Required elements:**

- Section heading
- Timeline or numbered steps (4-5 steps)
- Each step: number badge, icon, title, description
- Icons: ri-phone-line (call), ri-car-line (arrival), ri-tools-line (repair), ri-checkbox-circle-line (done)
- Responsive: horizontal timeline → vertical stack on mobile

**Status:** [ ] Not started

---

## 8. FAQ

### FAQ — Frequently Asked Questions

**Required elements:**

- Section heading
- Accordion list (collapsible items)
- Each item: question, answer
- Expand/collapse icons: ri-arrow-down-s-line
- **Note:** Requires JavaScript for interactivity

**Status:** [ ] Not started

---

## 9. FOOTER

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

## TOTAL: 20 Components Across 9 Categories

**Progress:** 15 / 20 completed (75.0%)

**Services & Pricing:** 6 completed, 1 slot reserved for future variants
**Benefits:** 3 / 3 completed — All benefit variants completed ✅

**Last Updated:** 2025-10-29
