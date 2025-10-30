#!/usr/bin/env node

/**
 * Tilda Bundle Builder
 *
 * Creates a single HTML file ready to paste into Tilda T123 block.
 *
 * Output structure:
 * 1. Priority script (Tailwind CDN + important: true)
 * 2. Inline CSS (from compiled _astro/*.css)
 * 3. Body content (sections without <body> tag)
 * 4. Inline JS (from compiled _astro/*.js)
 *
 * Usage: npm run build:tilda
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const outputFile = path.join(distDir, 'tilda-bundle.html');

console.log('🚀 Building Tilda bundle...\n');

// Check if dist/ exists
if (!fs.existsSync(distDir)) {
  console.error('❌ Error: dist/ folder not found.');
  console.error('   Run "npm run build" first.\n');
  process.exit(1);
}

// Read index.html
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: dist/index.html not found.\n');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');

// Extract body content (without <body> tags)
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
  console.error('❌ Error: Could not find <body> tag in HTML.\n');
  process.exit(1);
}
let bodyContent = bodyMatch[1].trim();

// Find all CSS files
const cssRegex = /<link[^>]*href="([^"]*\.css)"[^>]*>/g;
const cssFiles = [];
let match;
while ((match = cssRegex.exec(html)) !== null) {
  cssFiles.push(match[1]);
}

// Read and combine CSS
let combinedCSS = '';
cssFiles.forEach(cssFile => {
  const cssPath = path.join(distDir, cssFile.replace(/^\//, ''));
  if (fs.existsSync(cssPath)) {
    const css = fs.readFileSync(cssPath, 'utf8');
    combinedCSS += css + '\n';
    console.log(`✅ Included CSS: ${cssFile}`);
  } else {
    console.warn(`⚠️  Warning: CSS file not found: ${cssFile}`);
  }
});

// Find all JS files
const jsRegex = /<script[^>]*src="([^"]*\.js)"[^>]*><\/script>/g;
const jsFiles = [];
while ((match = jsRegex.exec(html)) !== null) {
  jsFiles.push(match[1]);
}

// Read and combine JS
let combinedJS = '';
jsFiles.forEach(jsFile => {
  const jsPath = path.join(distDir, jsFile.replace(/^\//, ''));
  if (fs.existsSync(jsPath)) {
    const js = fs.readFileSync(jsPath, 'utf8');
    combinedJS += js + '\n';
    console.log(`✅ Included JS: ${jsFile}`);
  } else {
    console.warn(`⚠️  Warning: JS file not found: ${jsFile}`);
  }
});

// Replace image paths with placeholders
const imagePaths = [];
bodyContent = bodyContent.replace(/src="(\/images\/[^"]+)"/g, (match, imgPath) => {
  const index = imagePaths.indexOf(imgPath);
  const imgIndex = index === -1 ? imagePaths.push(imgPath) - 1 : index;
  return `src="TILDA_IMAGE_${imgIndex + 1}"`;
});

// Priority script (Tailwind CDN + important: true)
const priorityScript = `// Tailwind с приоритетом — перезаписывает стили Tilda
const tailwind = document.createElement('script');
tailwind.src = 'https://cdn.tailwindcss.com';
tailwind.onload = function() {
    window.tailwind.config = {
        important: true // Делаем Tailwind важнее стилей Tilda!
    };

    // Защита ссылок от стилей Tilda
    const style = document.createElement('style');
    style.textContent = '/* Отключаем стили Tilda для всех ссылок */ ' +
        'a, a:hover, a:active, a:visited { ' +
        'color: inherit !important; ' +
        'text-decoration: inherit !important; ' +
        'border-bottom: none !important; ' +
        '}';
    document.head.appendChild(style);
};
document.head.appendChild(tailwind);

// Remix Icons для иконок
const links = [
    'https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
];

links.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
});

// Swiper для слайдеров (Testimonials, Portfolio)
const script = document.createElement('script');
script.type = 'module';
script.textContent = 'import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"; ' +
    'setTimeout(() => { ' +
    'new Swiper(".testimonials-swiper", { ' +
    'slidesPerView: 1, ' +
    'spaceBetween: 24, ' +
    'loop: true, ' +
    'navigation: { nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" }, ' +
    'pagination: { el: ".swiper-pagination-custom", clickable: true }, ' +
    'breakpoints: { 1024: { slidesPerView: 2, spaceBetween: 32 } } ' +
    '}); ' +
    '}, 1000);';
document.body.appendChild(script);`;

// Build final bundle (using string concatenation for safety)
let bundle = '<!-- ============================================ -->\n';
bundle += '<!-- Tilda Bundle - Ready to paste into T123 block -->\n';
bundle += '<!-- Generated: ' + new Date().toISOString() + ' -->\n';
bundle += '<!-- ============================================ -->\n\n';

bundle += '<!-- STEP 1: Priority Script (Tailwind CDN + Remix Icons + Swiper) -->\n';
bundle += '<script>\n';
bundle += priorityScript;
bundle += '\n</script>\n\n';

bundle += '<!-- STEP 2: Compiled Styles -->\n';
bundle += '<style>\n';
bundle += combinedCSS;
bundle += '</style>\n\n';

bundle += '<!-- STEP 3: Page Content (sections without body tag) -->\n';
bundle += bodyContent;
bundle += '\n\n';

if (combinedJS) {
  bundle += '<!-- STEP 4: Compiled Scripts -->\n';
  bundle += '<script>\n';
  bundle += combinedJS;
  bundle += '</script>\n\n';
}

bundle += '<!-- ============================================ -->\n';
bundle += '<!-- IMAGE REPLACEMENT CHECKLIST -->\n';
bundle += '<!-- Replace these placeholders with Tilda image URLs: -->\n';
bundle += '<!-- -->\n';
imagePaths.forEach((imgPath, i) => {
  bundle += '<!-- TILDA_IMAGE_' + (i + 1) + ': ' + imgPath + ' -->\n';
});
bundle += '<!-- -->\n';
bundle += '<!-- ============================================ -->\n';

// Write bundle file
fs.writeFileSync(outputFile, bundle, 'utf8');

console.log('\n✅ Tilda bundle created successfully!\n');
console.log(`📁 Output: ${outputFile}`);
console.log(`📊 Size: ${(Buffer.byteLength(bundle, 'utf8') / 1024).toFixed(2)} KB\n`);

if (imagePaths.length > 0) {
  console.log('📸 Images to replace in Tilda:');
  imagePaths.forEach((path, i) => {
    console.log(`   ${i + 1}. TILDA_IMAGE_${i + 1} → ${path}`);
  });
  console.log('');
}

console.log('🎯 Next steps:');
console.log('   1. Open dist/tilda-bundle.html');
console.log('   2. Copy entire content');
console.log('   3. Paste into Tilda T123 block');
console.log('   4. Replace TILDA_IMAGE_* with actual Tilda URLs');
console.log('   5. Publish!\n');
