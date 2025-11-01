# Deployment Guide

**🎯 Deploy landing pages to Tilda or hosting**

---

## TILDA DEPLOYMENT (Recommended)

### Quick Steps

```bash
npm run build:tilda  # → dist/tilda-bundle.html
```

1. Open `dist/tilda-bundle.html`
2. Copy entire content
3. Paste into Tilda **T123 block** (HTML field)
4. Replace `TILDA_IMAGE_*` placeholders with actual URLs
5. Preview → Publish

**⏱ Total time:** 5-10 minutes

---

### Why Tilda?

- Tilda's hosting + domain management
- Built-in forms, CRM, analytics
- Client can edit text in Tilda interface
- No separate hosting needed

---

### Bundle File Contents

```html
<!-- Priority Script (Tailwind + important: true) -->
<script>...</script>

<!-- Inlined CSS -->
<style>...</style>

<!-- Page Sections -->
<header>...</header>
<section>...</section>

<!-- Inlined JS -->
<script>...</script>

<!-- IMAGE CHECKLIST -->
<!-- TILDA_IMAGE_1: /images/hero.jpg -->
<!-- TILDA_IMAGE_2: /images/service-1.jpg -->
```

---

### How It Works

**Automated bundling:**
- Reads `dist/index.html` after build
- Extracts body content
- Inlines all CSS from `/_astro/*.css`
- Inlines all JS from `/_astro/*.js`
- Adds priority script (`important: true`)
- Replaces `/images/` → `TILDA_IMAGE_*`
- Outputs single T123-ready file

**Priority script features:**
- Tailwind CSS CDN with `important: true`
- Overrides Tilda's default styles
- Protects links from color overrides
- Loads Remix Icons + Swiper
- Initializes Swiper with delay

---

## DEPLOYMENT CHECKLIST

- [ ] Run `npm run build:tilda`
- [ ] Open `dist/tilda-bundle.html`
- [ ] Copy entire content
- [ ] Paste into Tilda T123 block
- [ ] Replace all `TILDA_IMAGE_*` with URLs
- [ ] Test in Tilda preview:
  - [ ] All sections visible
  - [ ] Styles applied correctly
  - [ ] Animations work
  - [ ] Mobile responsive
  - [ ] Phone numbers clickable
- [ ] Publish page

---

## TROUBLESHOOTING

**Tailwind styles don't apply:**
→ Priority script auto-included. Check browser console for CDN errors.

**Links have wrong colors:**
→ Priority script has link protection. Clear cache.

**Sliders don't work:**
→ Check Swiper CDN loaded. Increase `setTimeout` delay if needed.

**Icons missing:**
→ Verify Remix Icons CDN loaded. Check class names (`ri-phone-line`).

**Images broken:**
→ Replace all `TILDA_IMAGE_*` with actual URLs. See checklist at end of bundle.

**Animations don't work:**
→ Check Tailwind CDN loaded. Verify no Tilda style overrides. Check console for JS errors.

**Mobile layout broken:**
→ Tilda adds viewport meta automatically. Test with Tilda's mobile preview. Check responsive Tailwind classes (`md:`, `lg:`).

---

## IMAGE OPTIMIZATION

Before uploading to Tilda:

**Resize:**
- Hero: 1920x1080px
- Services: 800x600px
- Logos: 200x200px

**Compress:**
- Use TinyPNG or similar
- Target: < 200KB per image

**Format:**
- Photos: WebP or JPEG
- Logos/Icons: PNG or SVG

**Upload:**
- Tilda's image library
- Or external CDN (Cloudinary, Imgur)

---

## REGULAR HOSTING DEPLOYMENT

If client doesn't use Tilda:

```bash
npm run build  # → dist/
```

**Options:**
- **Netlify:** Drag & drop `dist/` or connect GitHub
- **Vercel:** Connect GitHub (auto-detects Astro)
- **FTP/cPanel:** Upload `dist/` via FTP
- **GitHub Pages:** Push to `gh-pages` branch

---

**Version:** 2.0.0
**Last Updated:** 2025-11-01
