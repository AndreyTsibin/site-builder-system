# Client Project Workflow

**🎯 SCENARIO:** Client comes with landing page requirements (niche, contacts, prices)

**📍 YOUR ROLE:** Assemble production-ready landing page from existing sections library

**⏱ EXPECTED TIME:** 10-15 minutes total (3-5 min assembly + 5-10 min Tilda bundle)

---

## Step-by-Step Process

### 1. Receive Client Requirements

**📋 Client Brief Template:** [CLIENT_BRIEF.md](CLIENT_BRIEF.md)

Send this template to client for filling. Client provides:
- **Niche:** e.g., "Ремонт холодильников Москва"
- **Company name:** e.g., "МастерХолод"
- **Phone number:** e.g., "+7 (495) 123-45-67"
- **Services & prices:** e.g., "Диагностика — 500₽, Замена компрессора — 5000₽"
- **Images:** Logo, hero image, team photos, portfolio (URLs)
- **Content:** Hero text, benefits, FAQ, testimonials
- **Additional info:** working hours, guarantees, brands, etc.

**When client sends filled brief:** Read CLIENT_BRIEF.md file and extract all data for landing page assembly.

---

### 2. Review Sections Library

Available sections: `src/components/sections/`

**Premium Material Design 3 sections:**
- `material/header/Header1Material.astro` — Glassmorphism header
- `material/heroes/Hero3Material.astro` — Gradient mesh hero
- `material/benefits/Benefits2Material.astro` — Color-themed stats

**Standard sections:**
- **Heroes:** 6 variants (gradient, split, minimal, centered, video, image)
- **Services/Pricing:** 3 variants (grid, table, cards)
- **Benefits:** Multiple layouts
- **Testimonials:** Swiper carousel
- **FAQ:** Accordion style
- **CTA:** Multiple variants
- **Contact:** Form + map variants
- **Stats, Portfolio, Team, Calculator** — as needed

---

### 3. Assemble Landing Page

**Location:** `src/pages/index.astro` (ALWAYS use this file, not new pages)

**Process:**
```astro
---
// Import components from library
import Hero3Material from '@/components/sections/material/heroes/Hero3Material.astro';
import Benefits2Material from '@/components/sections/material/benefits/Benefits2Material.astro';
// ... etc

// Check required props for each component:
// grep -A 20 "interface Props" src/components/sections/heroes/Hero1.astro
---

<BaseLayout title="МастерХолод — Ремонт холодильников Москва">
  <Hero3Material
    title="Ремонт холодильников"
    subtitle="Москва и область"
    description="Приезжаем за 30 минут. Гарантия 2 года."
    ctaText="Вызвать мастера"
    benefits={[
      { icon: "ri-time-line", text: "Выезд в течение 30 минут" },
      { icon: "ri-shield-check-line", text: "Гарантия 2 года на работу" },
      { icon: "ri-tools-line", text: "Оригинальные запчасти" }
    ]}
  />

  <Benefits2Material
    title="Нам доверяют"
    subtitle="Цифры, которые говорят о качестве"
    stats={[
      { number: "10+", label: "лет на рынке", description: "Опыт", icon: "ri-medal-line" },
      { number: "5000+", label: "клиентов", description: "Довольных клиентов", icon: "ri-user-heart-line" }
    ]}
  />

  <!-- Continue with other sections -->
</BaseLayout>
```

**Common Pitfalls:**
- ❌ Creating new page files — Always use `index.astro`
- ❌ Skipping props check — Components have different requirements
- ❌ Empty arrays — Testimonials, FAQ, Team, Portfolio need data arrays
- ❌ Missing phone numbers — Hero and Contact sections need contact info

---

### 4. Test Locally

```bash
# Start dev server
npm run dev
# → http://localhost:4321
```

**Checklist:**
- [ ] All client data visible (company name, phone, prices)
- [ ] No placeholder text (Lorem Ipsum) remaining
- [ ] Phone numbers clickable (`tel:` links)
- [ ] Mobile responsive (check 375px, 768px, 1024px)
- [ ] All sections render without errors
- [ ] Smooth scrolling between sections
- [ ] All animations work (shimmer, counter, stagger, floating)

---

### 5. Build Production Files

**For Tilda deployment (90% of clients):**
```bash
npm run build:tilda
# → outputs to dist/tilda-bundle.html
```

**For regular hosting:**
```bash
npm run build
# → outputs to dist/ (index.html + assets)
```

---

### 6. Final Verification

**For Tilda Bundle:**
- [ ] Open `dist/tilda-bundle.html`
- [ ] File size ~100KB (reasonable)
- [ ] Contains priority script (`important: true` config)
- [ ] All CSS inlined (no external `<link>` tags)
- [ ] All JS inlined (no external `<script src>`)
- [ ] Image placeholders present (`TILDA_IMAGE_1`, etc.)
- [ ] Image checklist at end of file

**For Hosting:**
- [ ] All assets in `dist/` folder
- [ ] No broken links
- [ ] All images optimized

---

### 7. Handoff to Client

**For Tilda:**
1. Send `dist/tilda-bundle.html` to client
2. Instructions:
   - Paste into T123 block
   - Replace `TILDA_IMAGE_*` with image URLs
   - Publish

**For Hosting:**
1. Send entire `dist/` folder
2. Instructions:
   - Upload to hosting (FTP/cPanel/Vercel/Netlify)
   - Configure domain

---

## Time Breakdown

- **Assembly:** 3-5 minutes (import components + fill props)
- **Testing:** 2-3 minutes (check desktop/mobile/animations)
- **Build:** 1-2 minutes (npm run build:tilda)
- **Verification:** 2-3 minutes (check bundle file)
- **Total: 10-15 minutes**

---

## Tips for Speed

1. **Use Material Design 3 sections** — they already have premium wow-effects
2. **Copy-paste props structure** — from existing demo pages
3. **Keep common data ready** — working hours, warranty periods, common benefits
4. **Test animations early** — don't wait until the end
5. **Have image placeholders** — don't block on client images

---

**Version:** 1.0.0
**Last Updated:** 2025-10-31
