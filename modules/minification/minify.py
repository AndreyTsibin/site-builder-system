#!/usr/bin/env python3
"""
CSS Minification Module
Minifies CSS files by removing comments, whitespace, and unnecessary characters.
"""

import os
import re
import sys
from pathlib import Path


def minify_css(css_content):
    """
    Minify CSS content by removing comments, whitespace, and unnecessary characters.

    Args:
        css_content (str): Original CSS content

    Returns:
        str: Minified CSS content
    """
    # Remove comments
    css_content = re.sub(r'/\*[\s\S]*?\*/', '', css_content)

    # Remove newlines and extra spaces
    css_content = re.sub(r'\s+', ' ', css_content)

    # Remove spaces around special characters
    css_content = re.sub(r'\s*([{}:;,>+~])\s*', r'\1', css_content)

    # Remove spaces before !important
    css_content = re.sub(r'\s*!\s*important', '!important', css_content)

    # Remove trailing semicolons before }
    css_content = re.sub(r';}', '}', css_content)

    # Remove leading/trailing whitespace
    css_content = css_content.strip()

    return css_content


def get_file_size(file_path):
    """Get file size in bytes."""
    return os.path.getsize(file_path)


def format_size(size_bytes):
    """Format bytes to human-readable format."""
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.2f} KB"
    else:
        return f"{size_bytes / (1024 * 1024):.2f} MB"


def minify_file(input_path, output_path=None):
    """
    Minify a single CSS file.

    Args:
        input_path (str): Path to input CSS file
        output_path (str, optional): Path to output file. If None, creates .min.css version

    Returns:
        bool: True if successful, False otherwise
    """
    input_file = Path(input_path)

    # Check if input file exists
    if not input_file.exists():
        print(f"❌ Error: File not found: {input_path}")
        return False

    # Determine output path
    if output_path is None:
        output_file = input_file.parent / f"{input_file.stem}.min.css"
    else:
        output_file = Path(output_path)

    try:
        # Read original file
        with open(input_file, 'r', encoding='utf-8') as f:
            original_content = f.read()

        # Minify content
        minified_content = minify_css(original_content)

        # Write minified file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(minified_content)

        # Calculate sizes
        original_size = get_file_size(input_file)
        minified_size = len(minified_content.encode('utf-8'))
        reduction = ((original_size - minified_size) / original_size) * 100

        # Print results
        print(f"✅ {input_file.name}")
        print(f"   Original:  {format_size(original_size)}")
        print(f"   Minified:  {format_size(minified_size)}")
        print(f"   Saved:     {reduction:.1f}%")
        print(f"   Output:    {output_file}")
        print()

        return True

    except Exception as e:
        print(f"❌ Error minifying {input_path}: {str(e)}")
        return False


def main():
    """Main function to minify CSS files."""
    print("🚀 CSS Minification Module\n")

    # Get project root (2 levels up from this script)
    project_root = Path(__file__).parent.parent.parent

    # Define files to minify (only production output folder)
    files_to_minify = [
        project_root / "output/styles/reset.css",
        project_root / "output/styles/variables.css",
        project_root / "output/styles/main.css",
    ]

    # Check if specific file was provided as argument
    if len(sys.argv) > 1:
        custom_file = Path(sys.argv[1])
        if custom_file.exists():
            files_to_minify = [custom_file]
        else:
            print(f"❌ File not found: {sys.argv[1]}")
            return 1

    # Minify each file
    success_count = 0
    for file_path in files_to_minify:
        if minify_file(file_path):
            success_count += 1

    # Print summary
    print(f"📊 Summary: {success_count}/{len(files_to_minify)} files minified successfully")

    return 0 if success_count == len(files_to_minify) else 1


if __name__ == "__main__":
    sys.exit(main())
