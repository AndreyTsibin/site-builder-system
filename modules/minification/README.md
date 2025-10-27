# Minification Module

CSS and JavaScript minification for production builds.

## Description

This module provides CSS and JavaScript minification to reduce file size for production deployment.

## Usage

```bash
# From project root
python3 modules/minification/minify.py

# Or make it executable and run directly
chmod +x modules/minification/minify.py
./modules/minification/minify.py

# Minify specific file
python3 modules/minification/minify.py path/to/file.css
```

## Features

- Minifies CSS and JavaScript files from `output/` folder (production only)
- Removes comments and whitespace
- Removes unnecessary characters
- Outputs minified files with `.min.css` or `.min.js` extension
- Shows file size reduction statistics
- Typical compression: 33-65% size reduction

## Default Files

The script automatically minifies production files only:

**CSS Files:**
- `output/styles/reset.css` → `reset.min.css` (64.6% reduction)
- `output/styles/variables.css` → `variables.min.css` (65.0% reduction)
- `output/styles/main.css` → `main.min.css` (33.5% reduction)

**JavaScript Files:**
- `output/scripts/main.js` → `main.min.js` (40.3% reduction)

**Note:** Library files are not minified to maintain readability during development.

## Dependencies

- Python 3.8+
- No external packages required (uses only standard library)

## Example Output

```
🚀 CSS & JavaScript Minification Module

✅ reset.css
   Original:  4.71 KB
   Minified:  1.67 KB
   Saved:     64.6%
   Output:    output/styles/reset.min.css

✅ main.js
   Original:  22.56 KB
   Minified:  13.46 KB
   Saved:     40.3%
   Output:    output/scripts/main.min.js

📊 Summary: 4/4 files minified successfully
```

## Status

✅ **Implemented and ready to use**
