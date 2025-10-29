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

### ServicesGrid — Service Cards Grid

**Required elements:**

- Section heading + description
- Grid of service cards (3-4 columns → responsive)
- Each card: icon, service name, description, price from, CTA button
- Icons from Remix Icons

**Status:** [ ] Not started

---

### ServicesPricing — Pricing Table

**Required elements:**

- Section heading
- Table with columns: Service, Price, Duration
- Responsive: table → stacked cards on mobile
- Highlight popular services
- CTA button at bottom

**Status:** [ ] Not started

---

## 3. BENEFITS

### Benefits — Why Choose Us

**Required elements:**

- Section heading + description
- Grid of benefits (3 columns → 2 → 1 responsive)
- Each benefit: icon, title, short description
- Icons: speed (ri-time-line), warranty (ri-shield-check-line), expertise (ri-star-line), parts (ri-tools-line)

**Status:** [ ] Not started

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

## TOTAL: 15 Components Across 9 Categories

**Progress:** 6 / 15 completed (40.0%)

**Last Updated:** 2025-10-29
