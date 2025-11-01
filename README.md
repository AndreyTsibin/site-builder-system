# Site Builder 2.0

**Lightning-fast landing page builder powered by Astro + Tailwind 4**

Собирайте профессиональные лендинги за минуты, используя современный стек и готовые компоненты.

---

## 🚀 Features

- ⚡ **Astro** — instant loading (pure HTML generation)
- 🎨 **Tailwind 4** — latest version with Vite plugin
- 🧩 **Component architecture** — sections as LEGO blocks
- 📱 **Mobile-first** — responsive design out of box
- 🎯 **SEO-friendly** — semantic HTML5
- 🎭 **Remix Icons** — 2800+ icons free

---

## 📦 Quick Start

```bash
npm install          # Install dependencies
npm run dev          # → http://localhost:4321
npm run build        # Production build
npm run build:tilda  # Tilda T123 bundle
npm run preview      # Preview production
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── sections/
│       ├── material/      # Premium Material Design 3 sections
│       ├── heroes/        # Hero sections (6 variants)
│       ├── pricing/       # Pricing (3 variants)
│       └── ...            # Benefits, FAQ, Contact, etc.
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

---

## 🎨 Design System

**🎨 Premium Material Design 3** — "Максимальная премиальность с wow-фактором"

**Features:**
- Gradient backgrounds (multi-layer mesh)
- Gradient typography (bold text effects)
- Smooth animations (shimmer, counter, stagger, floating)
- Color themes (Purple → Blue → Green → Orange rotation)
- Premium interactions (glow, scale, shadow transitions)

**📖 Full guide:** [DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md)

---

## 🎨 Usage

**Assemble landing page:**

```astro
---
import Hero3Material from '@/components/sections/material/heroes/Hero3Material.astro';
import Benefits2Material from '@/components/sections/material/benefits/Benefits2Material.astro';
---

<BaseLayout title="Ремонт холодильников Москва">
  <Hero3Material
    title="Ремонт холодильников"
    subtitle="Москва и область"
    ctaText="Вызвать мастера"
    benefits={[...]}
  />
  <Benefits2Material stats={[...]} />
</BaseLayout>
```

---

## 🤖 Claude Code Integration

**Quick assembly prompt:**

```
Собери лендинг для [тема клиента].

Секции:
- Hero3Material (заголовок: "[УТП]")
- Benefits2Material (3 преимущества)
- ServicesGrid1Material (услуги и цены)
- ContactForm

Адаптируй тексты под: [описание бизнеса]
```

Claude Code соберёт лендинг за 10-15 минут.

**📖 Full workflow:** [CLIENT_WORKFLOW.md](CLIENT_WORKFLOW.md)

---

## 🏗️ Deployment

**Tilda (90% clients):**
```bash
npm run build:tilda  # → dist/tilda-bundle.html
```
Paste to T123 block → Replace images → Publish

**Regular hosting:**
```bash
npm run build  # → dist/
```
Upload to Netlify/Vercel/FTP

**📖 Full guide:** [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📖 Documentation

**Project docs:**
- [CLAUDE.md](CLAUDE.md) — Claude Code instructions
- [DESIGN_PHILOSOPHY.md](DESIGN_PHILOSOPHY.md) — Material Design 3 standards
- [ARCHITECTURE.md](ARCHITECTURE.md) — Layout & spacing rules
- [CLIENT_WORKFLOW.md](CLIENT_WORKFLOW.md) — Assembly process
- [DEPLOYMENT.md](DEPLOYMENT.md) — Tilda & hosting deployment

**External:**
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Remix Icon](https://remixicon.com)

---

## 🎯 Performance

- PageSpeed Insights: 95-100 (mobile & desktop)
- Lighthouse Accessibility: 100
- Time to Interactive: <1s
- First Contentful Paint: <0.8s

---

## 🚀 Roadmap

- [x] 40+ готовых секций ✅
- [x] Material Design 3 философия ✅
- [ ] Преобразовать все секции в Material Design 3
- [ ] CLI для генерации компонентов
- [ ] Готовые шаблоны (SaaS, E-commerce, Portfolio)

---

**Version:** 2.1.0 | **Last Updated:** 2025-11-01
**Stack:** Astro 5 + Tailwind 4 + Remix Icons

---

## 📝 License

MIT © Andrej Tsibin
