# Deployment Guide

**🎯 Deploy landing pages to modern hosting platforms**

---

## RECOMMENDED HOSTING

### Netlify (Easiest)

**Why Netlify:**
- Free tier with custom domains
- Auto-deploy from Git (push → live in 30 seconds)
- Built-in forms, analytics
- One-click HTTPS
- Global CDN

**Deploy steps:**

1. **Push to GitHub:**
```bash
git add .
git commit -m "feat: ready for deployment"
git push origin main
```

2. **Connect to Netlify:**
- Visit [netlify.com](https://netlify.com)
- "Import from Git" → Select repo
- Build settings (auto-detected):
  - Build command: `npm run build`
  - Publish directory: `dist`
- Deploy!

3. **Custom domain (optional):**
- Site settings → Domain management
- Add custom domain
- Follow DNS instructions

**⏱ Total time:** 5 minutes first deploy, 30 seconds updates

---

### Vercel

**Why Vercel:**
- Excellent Astro support
- Edge network performance
- Auto-deploy from Git
- Free tier

**Deploy steps:**

```bash
npm run build  # Test build locally
```

1. Visit [vercel.com](https://vercel.com)
2. "Import Project" → Select GitHub repo
3. Auto-detects Astro → Deploy
4. Custom domain in project settings

---

### GitHub Pages (Free)

**Deploy steps:**

1. **Install gh-pages:**
```bash
npm install -D gh-pages
```

2. **Add to package.json:**
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. **Deploy:**
```bash
npm run deploy
```

4. **Enable in repo settings:**
- Settings → Pages
- Source: `gh-pages` branch
- Save

**URL:** `https://username.github.io/repo-name`

---

## MANUAL DEPLOYMENT

If client has existing hosting:

```bash
npm run build  # → dist/
```

**Upload options:**

1. **FTP/SFTP:**
   - Upload entire `dist/` folder
   - Point domain to folder

2. **cPanel:**
   - File Manager → Upload `dist/` contents
   - Set as document root

3. **AWS S3:**
   - Create bucket with static hosting
   - Upload `dist/` contents
   - Set bucket policy for public access

---

## DEPLOYMENT CHECKLIST

Before deployment:

- [ ] Run `npm run build` locally
- [ ] Test with `npm run preview`
- [ ] Check all sections render
- [ ] Verify mobile responsiveness
- [ ] Test all links work
- [ ] Phone numbers clickable
- [ ] Images optimized (< 200KB each)
- [ ] Forms point to correct endpoints

After deployment:

- [ ] Visit live URL
- [ ] Test on mobile device
- [ ] Check page load speed (< 3s)
- [ ] Verify HTTPS enabled
- [ ] Test contact forms
- [ ] Check analytics tracking

---

## IMAGE OPTIMIZATION

Before deployment:

**Resize:**
- Hero: 1920x1080px
- Services: 800x600px
- Logos: 200x200px

**Compress:**
- Use [TinyPNG](https://tinypng.com)
- Target: < 200KB per image

**Format:**
- Photos: WebP (best) or JPEG
- Logos/Icons: SVG (best) or PNG

**CDN (optional):**
- [Cloudinary](https://cloudinary.com) - automatic optimization
- [Imgur](https://imgur.com) - simple image hosting

---

## TROUBLESHOOTING

**Build fails:**
→ Check Node.js version (≥ 18)
→ Run `npm install` to update dependencies
→ Check for TypeScript errors in components

**Styles don't load:**
→ Verify `dist/_astro/*.css` files exist
→ Check browser console for 404 errors
→ Clear browser cache

**Images broken:**
→ Use absolute URLs or place in `public/images/`
→ Check image paths in components
→ Verify images uploaded to hosting

**Forms don't work:**
→ Check form action endpoints
→ Verify CORS settings if using external API
→ Test with Netlify Forms or similar

**Slow page load:**
→ Optimize images (use WebP, compress)
→ Enable CDN caching
→ Check bundle size with `npm run build`

---

## PERFORMANCE TIPS

**Optimize builds:**
- Use WebP images
- Lazy load images: `loading="lazy"`
- Minimize JavaScript
- Enable gzip compression

**CDN benefits:**
- Netlify/Vercel have built-in CDN
- Faster global load times
- Automatic HTTPS
- DDoS protection

**Analytics:**
- Add Google Analytics in `BaseLayout.astro`
- Or use hosting analytics (Netlify, Vercel)
- Track conversions, bounce rate

---

**Version:** 3.0.0
**Last Updated:** 2025-11-01
