# CLAUDE.MD — SITE BUILDER

Project guidance for Claude Code (claude.ai/code) in this repository.

---

## 📋 PROJECT OVERVIEW

**Site Builder** — AI-powered landing page constructor (local, no frameworks)

- **Goal:** Assemble landing pages from ready-made sections ("LEGO approach") + AI content generation
- **Current Stage:** ✅ MVP Complete (38/38 tasks, 100%)
- **Phase:** Improvement & Support

---

## 🛠️ TECH STACK

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript ES6+
- **Icons:** [Remix Icon](https://github.com/Remix-Design/RemixIcon) (2800+ open-source)
- **Automation:** Python 3.8+ (assembly script)
- **AI:** Claude Code terminal (commands, NOT API)
- **Data Formats:** Markdown (business-data), YAML (sections-library), JSON (selected-sections)

---

## 📂 PROJECT STRUCTURE

```
/site-builder/
├── library/              # Component library (sections + design system)
│   ├── design-system/    # variables.css, reset.css, utilities.css
│   └── sections/         # HTML/CSS/JS sections (header, hero, footer, etc.)
├── templates/            # Business data examples + sections catalog
│   ├── business-data/    # business-data.md (content for AI)
│   ├── sections.yaml     # Sections catalog with metadata
│   └── *.json            # Selected sections for assembly
├── scripts/              # Python assembly script (build.py)
├── output/               # Generated landing pages
└── docs/                 # Documentation
    └── USAGE.md          # How to use the builder
```

---

## 📖 KEY FILES (Read for context)

**Essential documentation:**

- **[README.md](README.md)** — Project overview, workflow, quick start
- **[docs/USAGE.md](docs/USAGE.md)** — Step-by-step usage guide

**Component structure:**

- **[library/design-system/](library/design-system/)** — CSS variables, reset, utilities
- **[library/sections/](library/sections/)** — All available sections
- **[templates/sections.yaml](templates/sections.yaml)** — Sections catalog
- **[templates/business-data/](templates/business-data/)** — Example business data

---

## 🎯 WORKING WITH COMPLETED PROJECT

### When user asks to improve/add features:

1. **Understand the request** — Ask clarifying questions if needed
2. **Check existing code** — Read relevant files to understand current implementation
3. **Plan changes** — Break complex tasks into steps (use TodoWrite if 3+ steps)
4. **Implement** — Follow code standards below
5. **Test** — Verify changes work (build landing, check output)
6. **Commit** — Use proper commit format

### When adding new sections:

1. **Create section files** in `library/sections/[section-name]/`:
   - `[section-name].html` — Semantic HTML with `{{placeholders}}`
   - `[section-name].css` — BEM methodology, design-system variables
   - `[section-name].js` — (optional) ES6+ JavaScript

2. **Update sections catalog** in `templates/sections.yaml`:
   ```yaml
   - id: section-name
     name: Section Name
     category: category-name
     description: Brief description
     placeholders:
       - section.variable1
       - section.variable2
   ```

3. **Test assembly** — Create JSON template and run `python3 scripts/build.py`

4. **Document** — Update docs/USAGE.md if needed

### When refactoring/optimizing:

1. **Preserve functionality** — Don't break existing features
2. **Run tests** — Build existing landing pages to verify nothing broke
3. **Check performance** — Ensure metrics stay >90 (PageSpeed, Lighthouse)
4. **Update documentation** — If behavior changes, update docs/USAGE.md

---

## 💻 CODE STANDARDS

**Senior-level code required (10+ years best practices):**

- **Principles:** DRY, KISS, SOLID
- **HTML:** Semantic HTML5 (nav, article, section — NOT div soup)
- **CSS:** BEM methodology, Grid/Flexbox (NO floats/tables for layout)
- **JavaScript:** ES6+ only (const/let, arrow functions, async/await, destructuring)
- **Responsive:** Mobile-first approach
- **Accessibility:** ARIA labels, alt texts, keyboard navigation
- **Comments:** English only in code

**CSS Variables:**

- Use design-system variables: `var(--primary)`, `var(--text)`, `var(--space-4)`
- HSL format: `hsl(220, 90%, 56%)`
- Mobile-first breakpoints: 320px, 768px, 1024px, 1440px

**Placeholders in HTML:**

- Format: `{{section.variable}}` (English only)
- Example: `{{hero.title}}`, `{{features.item1.icon}}`, `{{contacts.phone}}`

---

## 🔄 GIT WORKFLOW

- **Branch:** `design`
- **Commit format:** `feat:`, `fix:`, `refactor:`, `chore:`
- **Commit message template:**

  ```
  feat: add new pricing section

  - Create library/sections/pricing/pricing.html
  - Add pricing.css with responsive grid
  - Update sections.yaml catalog

  🤖 Generated with Claude Code
  ```

---

## ⚠️ CRITICAL: UTF-8 FOR CYRILLIC

**MANDATORY after Write tool with Russian text:**

1. Write file
2. **IMMEDIATELY run:** `head -5 filename` (NO EXCEPTIONS)
3. **Verify visually:** Clean Cyrillic (✅ "Данные") or corrupted (❌ "����")
4. **If corrupted:** Rewrite file with correct encoding
5. Only then proceed

**HTML files must include:**

```html
<meta charset="UTF-8" />
```

**Bug reference:** Claude Code issues #1716, #2154

---

## 🗣️ COMMUNICATION

- **Language:** Russian for user communication
- **Code:** English variable/function names, English comments
- **Content:** Russian for landing page content (titles, descriptions)
- **Placeholders:** English format `{{hero.title}}`, NOT `{{герой.заголовок}}`

---

## 📊 PERFORMANCE TARGETS

- PageSpeed Insights: >90 (mobile + desktop)
- Lighthouse Accessibility: >90 (WCAG AA)
- Time to Interactive: <3s
- First Contentful Paint: <1.8s

---

## 🧪 TESTING CHECKLIST

**Before completing any improvement:**

1. ✅ Code follows standards (BEM, semantic HTML, ES6+)
2. ✅ UTF-8 verified for Cyrillic content
3. ✅ CSS uses design-system variables
4. ✅ Responsive design tested (mobile-first)
5. ✅ Accessibility checked (ARIA, alt texts)
6. ✅ Build script works (`python3 scripts/build.py`)
7. ✅ Output HTML renders correctly in browser
8. ✅ No console errors in DevTools
9. ✅ Git commit with proper format

---

**Version:** 2.0 (Improvement Phase)
**Last Update:** 2025-10-24
**Status:** MVP Complete, ready for enhancements
