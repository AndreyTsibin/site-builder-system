# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## PROJECT OVERVIEW

**Site Builder 2.0** — Landing page constructor for repair services niche

**Specialization:** Appliance repair, digital device repair, home renovation services

**Tech Stack:**

- **Astro 5.15.2** — Static site generator, zero JS by default
- **Tailwind 4.1.16** — Utility-first CSS with Vite plugin
- **Remix Icon 4.7.0** — Icon library (2800+ icons via CDN)
- **TypeScript** — Optional, paths configured via `@/*` aliases

**Philosophy:** Build professional landing pages in minutes using pre-built sections

---

## CURRENT STATUS

**Phase:** Component Library Creation (Phase 1)

**Completed:**

- ✅ Astro + Tailwind 4 migration
- ✅ BaseLayout with Remix Icons
- ✅ Demo page with hero, features, CTA sections
- ✅ Section directories structure
- ✅ CHECKLIST.md with atomic task breakdown

**Next:**

- Create Priority 1 components (18 components across 10 categories)
- See [CHECKLIST.md](CHECKLIST.md) for detailed task list

---

## TASK TRACKING WORKFLOW

**IMPORTANT:** This project uses `CHECKLIST.md` for task management instead of TodoWrite tool.

**When starting a new session:**

1. **ALWAYS read [CHECKLIST.md](CHECKLIST.md) first** — check which tasks are completed/pending
2. **Identify next uncompleted task** — look for `[ ]` (unchecked) items
3. **Update checkboxes** — mark completed tasks as `[x]` immediately after finishing
4. **Continue from where you left off** — don't ask what to do, just start the next task
5. **Commit periodically** — after completing 2-3 related components, make a commit

**Task completion flow:**

```bash
# 1. Read checklist
cat CHECKLIST.md

# 2. Find first unchecked task (example: Hero1)
# 3. Complete the task (create component, test, verify UTF-8)
# 4. Update CHECKLIST.md: [ ] → [x]
# 5. Continue to next task

# 6. After 2-3 components → commit:
git add .
git commit -m "feat: add Hero sections (Hero1, Hero2, Hero3)"
```

**Do NOT:**

- Ask user "what should I do next?" if CHECKLIST.md has uncompleted tasks
- Use TodoWrite tool (CHECKLIST.md is the single source of truth)
- Skip checklist verification at session start

**Checklist structure:**

- `[ ]` — Not completed (next task to work on)
- `[x]` — Completed (skip this task)

**Example:**

```markdown
## 1. HERO SECTIONS

### Hero1 — С формой
- [x] Найти Hero с формой на Flowbite
- [x] Создать файл
- [ ] Конвертировать HTML → Astro  ← START HERE
- [ ] Добавить Props
```

---

## ESSENTIAL COMMANDS

```bash
# Development server
npm run dev
# → http://localhost:4321

# Production build
npm run build
# → outputs to dist/

# Preview production build
npm run preview

# Astro CLI
npm run astro
```

**Note:** No test/lint scripts configured yet

---

## ARCHITECTURE

### Project Structure

```
src/
├── components/
│   └── sections/          # Reusable landing page sections
│       ├── heroes/        # Hero sections (empty)
│       ├── features/      # Feature sections (empty)
│       ├── pricing/       # Pricing tables (empty)
│       ├── forms/         # Contact/newsletter forms (empty)
│       └── footers/       # Footer variants (empty)
├── layouts/
│   └── BaseLayout.astro   # Base HTML layout with Remix Icons CDN
├── pages/
│   └── index.astro        # Demo page (hardcoded sections)
└── styles/
    └── global.css         # Tailwind import + @theme customization
```

### Component Architecture

**Pattern:** Props-based Astro components for maximum reusability

**Example:**

```astro
---
// src/components/sections/heroes/Hero1.astro
interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  phone?: string;
}

const { title, subtitle, ctaText, phone } = Astro.props;
---

<section class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
  <!-- Tailwind classes only, no custom CSS -->
</section>
```

**Key Principles:**

1. **TypeScript Props interface** — always define for clarity
2. **Tailwind-only styling** — no component-scoped CSS
3. **Mobile-first responsive** — use `md:`, `lg:` breakpoints
4. **Remix Icons** — use `<i class="ri-icon-name-line"></i>` instead of SVG
5. **Semantic HTML5** — `<section>`, `<article>`, `<nav>`, not `<div>` soup

### Path Aliases

```typescript
// tsconfig.json configured with:
"@/*": ["src/*"]

// Usage in imports:
import Hero from '@/components/sections/heroes/Hero1.astro';
```

### Tailwind Theme Customization

Edit `src/styles/global.css` for custom design tokens:

```css
@theme {
  --color-brand-blue: #1e40af;
  --color-brand-green: #10b981;
  --spacing-section: 80px;
  --breakpoint-3xl: 1920px;
}
```

Use in components: `class="bg-brand-blue p-section"`

---

## COMPONENT CREATION WORKFLOW

**Source:** Flowbite Blocks (https://flowbite.com/blocks/)

**Steps:**

1. **Find component** — Browse Flowbite, copy HTML
2. **Create file** — `src/components/sections/{category}/{Name}.astro`
3. **Convert to Astro:**
   - Add frontmatter with `interface Props`
   - Replace hardcoded text with `{props.field}`
   - Replace SVG icons with Remix Icons
   - Ensure responsive classes (`md:`, `lg:`)
4. **Test** — Import in `src/pages/index.astro`, check all viewports
5. **Verify UTF-8** — For Cyrillic text, ALWAYS run `head -5 filename` after Write

**Priority:** Follow [CHECKLIST.md](CHECKLIST.md) task order (top to bottom)

---

## DESIGN SYSTEM

**Colors:**

- Brand Blue: `#1E40AF`
- Brand Green: `#10B981`
- Brand Purple: `#7C3AED`

**Spacing:**

- Section padding: `80px` (mobile) → `120px` (desktop)
- Use Tailwind spacing scale: `p-4`, `mb-8`, `gap-6`

**Typography:**

- System fonts: `system-ui, -apple-system, sans-serif`
- Headings: `text-4xl md:text-5xl font-bold`
- Body: `text-base md:text-lg`

**Breakpoints:**

- `md:` — 768px
- `lg:` — 1024px
- `3xl:` — 1920px (custom)

---

## FIGMA INTEGRATION

Module: `modules/figma-integration/`

**Files:**

- `figma-client.js` — MCP client for Figma API
- `start-server.sh` — Launch Figma MCP server
- `server/` — MCP server implementation

**Usage:** (details TBD — not yet documented in README)

---

## DEPLOYMENT

### Netlify / Vercel

```bash
npm run build
# Upload dist/ folder or connect GitHub repo
```

### Static Hosting (shared hosting, S3, etc.)

```bash
npm run build
# Upload contents of dist/ via FTP/rsync
```

**Performance targets:**

- PageSpeed: 95-100
- Lighthouse Accessibility: 100
- First Contentful Paint: <0.8s
- Time to Interactive: <1s

---

## GIT WORKFLOW

**Branch:** `design` (no main branch configured yet)

**Commit format:**

```
feat: add hero sections for repair services

- Create 3 hero variants from Flowbite
- Mobile-responsive with Tailwind breakpoints
- Remix Icons integration

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** `feat:`, `fix:`, `refactor:`, `chore:`

---

## PRE-COMMIT CHECKLIST

Before committing components:

1. ✅ `npm run build` — no errors
2. ✅ `npm run preview` — visual check
3. ✅ **Responsive test:** 320px, 768px, 1024px, 1440px
4. ✅ **Accessibility:** keyboard nav, ARIA labels, img alt texts
5. ✅ **Semantic HTML:** proper heading hierarchy (h1→h6)
6. ✅ **Cyrillic UTF-8:** If Russian text, verify with `head -5 filename`

---

## NICHE-SPECIFIC GUIDANCE

**Target:** Repair service businesses (appliance, digital device, home renovation)

**Must-have sections:**

- Hero with phone number prominently displayed
- Contact forms (repeat 2-3 times on page)
- Services & Pricing (transparent pricing builds trust)
- Benefits (speed, warranty, expertise, genuine parts)
- How It Works (4-5 step process)

**Tone:** Professional but approachable, urgency-driven ("24/7", "Express service", "Same-day repair")

**CTA Text Examples:**

- "Вызвать мастера"
- "Заказать диагностику"
- "Узнать стоимость"

---

## REFERENCE DOCS

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Remix Icon](https://remixicon.com)
- [Flowbite Blocks](https://flowbite.com/blocks/)
- [Project README](README.md) — User-facing docs
- [CHECKLIST.md](CHECKLIST.md) — Phase 1 task tracking (18 components)

---

**Version:** 2.0.0
**Last Updated:** 2025-10-29
**Niche:** Repair Services Landing Pages
