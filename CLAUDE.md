# CLAUDE.MD — SITE BUILDER

Project guidance for Claude Code (claude.ai/code) in this repository.

---

## 🤖 SESSION START PROTOCOL

**CRITICAL: When user says "продолжай выполнять задачу" / "continue task" / starts new session:**

1. **Read [PROGRESS.md](PROGRESS.md)** first
2. **Find first unchecked task** `- [ ]` with status `⏳ Ready`
3. **Go to [dox/TASKS.md](dox/TASKS.md)** → locate that task
4. **Extract prompt** from `📋 COPY TO CLAUDE CODE CLI` block
5. **Execute task automatically** (follow prompt instructions)
6. **After completion:**
   - Mark task as `[x]` in PROGRESS.md
   - Move to "COMPLETED TASKS" section with metadata
   - Update YAML frontmatter (completed_tasks, progress_percentage, last_commit)
   - Commit: `feat: complete Task X.Y - description`
7. **Repeat** for next task

**Example user message:**

> "Продолжай выполнять задачу"

**Your action:**

1. Read PROGRESS.md → see Task 0.2a unchecked
2. Read dox/TASKS.md lines 47-72 → get Task 0.2a prompt
3. Execute: Create library/design-system/variables.css with HSL colors
4. Update PROGRESS.md → commit → done

---

## 📋 PROJECT OVERVIEW

**Site Builder** — AI-powered landing page constructor (local, no frameworks)

- **Goal:** Assemble landing pages from ready-made sections ("LEGO approach") + AI content generation
- **Current Stage:** Development Sprint 0 (Task 0.2a next)
- **Total:** 38 tasks, 101h estimated

---

## 🛠️ TECH STACK

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript ES6+
- **Icons:** [Remix Icon](https://github.com/Remix-Design/RemixIcon) (2800+ open-source)
- **Automation:** Python 3.8+ (assembly script)
- **AI:** Claude Code terminal (commands, NOT API)
- **Data Formats:** Markdown (business-data), YAML (sections-library), JSON (selected-sections)

---

## 📂 KEY FILES (Read for context)

**Must-read for automation:**

- **[PROGRESS.md](PROGRESS.md)** — Current task tracking (38 tasks checklist)
- **[dox/TASKS.md](dox/TASKS.md)** — 38 ready-to-execute prompts

**Reference documentation:**

- **[README.md](README.md)** — Project overview, workflow, tech stack
- **[dox/PRD.md](dox/PRD.md)** — Product requirements
- **[dox/ARCHITECTURE.md](dox/ARCHITECTURE.md)** — Design system, components structure
- **[dox/PLANNING.md](dox/PLANNING.md)** — 4-sprint roadmap (84h)

**Project structure:**

```
/site-builder/
├── library/              # Component library (creating now)
│   ├── design-system/    # CSS variables, reset, utilities
│   └── sections/         # HTML/CSS/JS sections (header, hero, footer, etc.)
├── templates/            # Business data, sections descriptions
├── scripts/              # Python assembly script
├── output/               # Generated landing pages
└── dox/                  # Documentation
```

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
- **Commit frequency:** After each task completion
- **Commit message template:**

  ```
  feat: complete Task X.Y - short description

  - Changes made
  - Files created

  🤖 Generated with Claude Code
  ```

---

## ⚠️ CRITICAL: UTF-8 FOR CYRILLIC

**MANDATORY after Write tool with Russian text:**

1. Write file
2. **IMMEDIATELY run:** `head -5 filename.md` (NO EXCEPTIONS)
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

## 🎯 AUTOMATION REMINDERS

**Before starting work:**

1. ✅ Read PROGRESS.md to know current task
2. ✅ Read TASKS.md to get exact prompt
3. ✅ Check dependencies (Dep: X.Y)

**During work:**

1. ✅ Follow prompt instructions exactly
2. ✅ UTF-8 check for Cyrillic files
3. ✅ Use CSS variables from design-system
4. ✅ English comments in code

**After completion:**

1. ✅ Update PROGRESS.md (mark task complete, add metadata)
2. ✅ Update YAML frontmatter
3. ✅ Commit with proper format
4. ✅ Ready for next task

---

**Version:** 1.0
**Last Update:** 2025-01-24
**Total Lines:** ~170 (optimized for Claude Code context window)
