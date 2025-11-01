# Client Project Workflow

**🎯 Scenario:** Client provides landing page requirements
**⏱ Target time:** 10-15 minutes total

---

## QUICK PROCESS

1. **Receive brief** → Client fills [CLIENT_BRIEF.md](CLIENT_BRIEF.md)
2. **Select sections** → Import from `src/components/sections/material/`
3. **Fill props** → Edit `src/pages/index.astro` (ALWAYS this file)
4. **Test** → `npm run dev` → check localhost:4321
5. **Build** → `npm run build:tilda`
6. **Deploy** → Paste to Tilda T123 → Replace images → Publish

---

## STEP-BY-STEP DETAILS

### 1. Receive Client Requirements

**Template:** [CLIENT_BRIEF.md](CLIENT_BRIEF.md)

**Client provides:**
- Niche, company name, phone
- Services & prices
- Images (URLs)
- Content (hero text, benefits, FAQ, testimonials)
- Working hours, guarantees, brands

---

### 2. Review Sections Library

**Premium Material Design 3:** `src/components/sections/material/`
- `material/headers/Header1Material.astro`
- `material/heroes/Hero3Material.astro`
- `material/benefits/Benefits2Material.astro`

**Standard sections:** `src/components/sections/`
- Heroes (6 variants), Pricing (3 variants)
- Benefits, Testimonials, FAQ, CTA, Contact
- Stats, Portfolio, Team, Calculator

---

### 3. Assemble Landing Page

**Location:** `src/pages/index.astro` (ALWAYS this file)

**Process:**
```astro
---
import Hero3Material from '@/components/sections/material/heroes/Hero3Material.astro';
import Benefits2Material from '@/components/sections/material/benefits/Benefits2Material.astro';
---

<BaseLayout title="МастерХолод — Ремонт холодильников Москва">
  <Hero3Material
    title="Ремонт холодильников"
    subtitle="Москва и область"
    description="Приезжаем за 30 минут. Гарантия 2 года."
    ctaText="Вызвать мастера"
    benefits={[...]}
  />

  <Benefits2Material
    title="Нам доверяют"
    stats={[...]}
  />
</BaseLayout>
```

**Common pitfalls:**
- ❌ Creating new page files — Always use `index.astro`
- ❌ Skipping props check — Check component Props interface
- ❌ Empty arrays — Testimonials, FAQ need data
- ❌ Missing phone numbers — Hero/Contact need contact info

---

### 4. Test Locally

```bash
npm run dev  # → http://localhost:4321
```

**Checklist:**
- [ ] All client data visible
- [ ] No placeholder text (Lorem Ipsum)
- [ ] Phone numbers clickable (`tel:` links)
- [ ] Mobile responsive (375px, 768px, 1024px)
- [ ] All sections render without errors
- [ ] Animations work (shimmer, counter, stagger)

---

### 5. Build Production Files

**For Tilda (90% clients):**
```bash
npm run build:tilda  # → dist/tilda-bundle.html
```

**For hosting:**
```bash
npm run build  # → dist/
```

---

### 6. Final Verification

**Tilda Bundle:**
- [ ] File size ~100KB
- [ ] Contains priority script
- [ ] All CSS/JS inlined
- [ ] Image placeholders (`TILDA_IMAGE_*`)
- [ ] Image checklist at end

**Hosting:**
- [ ] All assets in `dist/`
- [ ] No broken links
- [ ] Images optimized

---

### 7. Handoff to Client

**Tilda:**
1. Send `dist/tilda-bundle.html`
2. Instructions: Paste → T123 block → Replace images → Publish

**Hosting:**
1. Send `dist/` folder
2. Instructions: Upload to FTP/Vercel/Netlify → Configure domain

---

## TIME BREAKDOWN

- Assembly: 3-5 min
- Testing: 2-3 min
- Build: 1-2 min
- Verification: 2-3 min
- **Total: 10-15 min**

---

## TIPS FOR SPEED

1. Use Material Design 3 sections (already premium)
2. Copy-paste props structure from demo pages
3. Keep common data ready (hours, warranty, benefits)
4. Test animations early
5. Have image placeholders ready

---

**Version:** 2.0.0
**Last Updated:** 2025-11-01
