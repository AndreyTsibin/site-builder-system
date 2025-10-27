# Minification Module

CSS minification for production builds.

## Description

This module provides CSS minification to reduce file size for production deployment.

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

- Minifies CSS files from `output/styles/` (production folder only)
- Removes comments and whitespace
- Removes unnecessary characters
- Outputs minified files with `.min.css` extension
- Shows file size reduction statistics
- Typical compression: 60-70% size reduction

## Default Files

The script automatically minifies production files only:
- `output/styles/reset.css` → `reset.min.css` (64.6% reduction)
- `output/styles/variables.css` → `variables.min.css` (65.0% reduction)
- `output/styles/main.css` → `main.min.css` (33.5% reduction)

**Note:** Library files are not minified to maintain readability during development.

## Dependencies

- Python 3.8+
- No external packages required (uses only standard library)

## Example Output

```
🚀 CSS Minification Module

✅ reset.css
   Original:  4.71 KB
   Minified:  1.67 KB
   Saved:     64.6%
   Output:    library/styles/reset.min.css

📊 Summary: 2/2 files minified successfully
```

## Status

✅ **Implemented and ready to use**
