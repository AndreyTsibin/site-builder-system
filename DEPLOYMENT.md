# Tilda Deployment Guide

**🎯 Deploy landing pages to Tilda constructor using T123 HTML block**

---

## Why Tilda?

Tilda is a popular no-code website builder in Russia/CIS. Deploying our Astro-built landing pages to Tilda allows:
- Using Tilda's hosting and domain management
- Adding Tilda's built-in forms, CRM, analytics
- Client can edit text directly in Tilda interface
- No need for separate hosting setup

---

## 🚀 Quick Deployment (Recommended)

### 1. Build Tilda bundle

```bash
npm run build:tilda
```

This command:
- Runs production build
- Generates `dist/tilda-bundle.html` — single file ready for T123
- Includes priority script (Tailwind CDN + `important: true`)
- Inlines all CSS and JS
- Replaces image paths with `TILDA_IMAGE_*` placeholders
- Creates image replacement checklist at the end of file

### 2. Copy to Tilda

- Open `dist/tilda-bundle.html`
- Copy **entire file content**
- Paste into Tilda **T123 block** (HTML field)

### 3. Replace images

- Find `TILDA_IMAGE_1`, `TILDA_IMAGE_2`, etc. in the pasted code
- Upload images to Tilda or external hosting
- Replace placeholders with actual URLs
- See image checklist at the bottom of bundle file

### 4. Publish

- Preview in Tilda
- Verify styles, sliders, hover effects work
- Publish page

**⏱ Total time:** 5-10 minutes

---

## 📦 Bundle File Structure

The generated `dist/tilda-bundle.html` contains (in order):

1. **Priority Script** — Tailwind CDN with `important: true` config
2. **Inline CSS** — All compiled Tailwind styles
3. **Page Content** — Sections without `<html>`, `<head>`, `<body>` tags
4. **Inline JS** — All compiled scripts (Swiper, etc.)
5. **Image Checklist** — List of all images to replace

**Example:**
```html
<!-- Tilda Bundle - Ready to paste -->

<script>
// Priority script (Tailwind + important: true)
...
</script>

<style>
/* Compiled CSS */
...
</style>

<!-- Sections -->
<header>...</header>
<section>...</section>
...

<script>
// Compiled JS
...
</script>

<!-- IMAGE REPLACEMENT CHECKLIST -->
<!-- TILDA_IMAGE_1: /images/hero.jpg -->
<!-- TILDA_IMAGE_2: /images/service-1.jpg -->
```

---

## ⚙️ How It Works

**Automated bundling script:**
- Reads `dist/index.html` after production build
- Extracts body content (without `<body>` tags)
- Finds and inlines all CSS from `/_astro/*.css`
- Finds and inlines all JS from `/_astro/*.js`
- Adds priority script with `important: true` config
- Replaces `/images/` paths with `TILDA_IMAGE_*` placeholders
- Outputs single file ready for T123 block

**Priority script features:**
- Loads Tailwind CSS via CDN with `important: true`
- Overrides Tilda's default styles
- Protects links from Tilda color overrides
- Loads Remix Icons and Swiper from CDN
- Initializes Swiper carousel with delay

---

## ✅ Deployment Checklist

- [ ] Run `npm run build:tilda`
- [ ] Open `dist/tilda-bundle.html`
- [ ] Copy entire content
- [ ] Paste into Tilda T123 block
- [ ] Replace all `TILDA_IMAGE_*` placeholders with URLs
- [ ] Test in Tilda preview:
  - [ ] All sections visible
  - [ ] Styles applied correctly
  - [ ] Animations work (shimmer, counter, stagger, floating)
  - [ ] Mobile responsive
  - [ ] Phone numbers clickable
  - [ ] Forms work (if using Tilda forms)
- [ ] Publish page

---

## 🐛 Troubleshooting

### Problem: Tailwind styles don't apply
**Solution:** Bundle includes priority script automatically. Check browser console for CDN loading errors.

### Problem: Links have wrong colors (blue/underlined)
**Solution:** Priority script includes link protection (`color: inherit !important`). Clear browser cache.

### Problem: Sliders don't work
**Solution:** Ensure Swiper CDN loaded correctly. Increase `setTimeout` delay in priority script if needed.

### Problem: Icons missing
**Solution:** Verify Remix Icons CDN loaded. Check class names (e.g., `ri-phone-line`).

### Problem: Images broken
**Solution:** Replace all `TILDA_IMAGE_*` placeholders with actual Tilda/external URLs. See checklist at end of bundle file.

### Problem: Animations don't work
**Solution:**
- Check that Tailwind CDN loaded (`important: true` config)
- Verify no Tilda styles override animation classes
- Check browser console for JavaScript errors

### Problem: Mobile layout broken
**Solution:**
- Ensure viewport meta tag exists (Tilda adds it automatically)
- Test with Tilda's mobile preview tool
- Check that responsive Tailwind classes work (`md:`, `lg:`)

---

## 📸 Image Optimization Tips

Before uploading images to Tilda:

1. **Resize images:**
   - Hero images: 1920x1080px
   - Service images: 800x600px
   - Logos: 200x200px

2. **Compress images:**
   - Use TinyPNG or similar
   - Target: < 200KB per image

3. **Format:**
   - Photos: WebP or JPEG
   - Logos/Icons: PNG or SVG

4. **Upload to Tilda:**
   - Use Tilda's image library
   - Or use external CDN (Cloudinary, Imgur, etc.)

---

## 🚀 Alternative Deployment (Regular Hosting)

If client doesn't use Tilda:

```bash
# Build for regular hosting
npm run build
# → outputs to dist/ (index.html + assets)
```

**Deployment options:**
- **Netlify:** Drag & drop `dist/` folder or connect GitHub repo
- **Vercel:** Connect GitHub repo, Vercel auto-detects Astro
- **FTP/cPanel:** Upload entire `dist/` folder via FTP
- **GitHub Pages:** Push to `gh-pages` branch

---

**Version:** 1.0.0
**Last Updated:** 2025-10-31
