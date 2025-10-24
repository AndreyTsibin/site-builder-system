#!/usr/bin/env python3
"""
Site Builder - Landing Page Assembly Script

This script assembles landing pages from pre-built sections library.
It reads selected-sections.json and creates a complete landing page
with HTML, CSS, and JavaScript in the output directory.

Usage:
    python scripts/assemble.py --config templates/selected-sections.json

Requirements:
    Python 3.8+
"""

import json
import shutil
import argparse
import logging
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%H:%M:%S'
)
logger = logging.getLogger(__name__)


def create_project_structure(project_name: str) -> Path:
    """
    Create project directory structure in output folder.

    Creates the following structure:
    output/{project_name}/
    ├── css/
    ├── js/
    └── assets/

    Args:
        project_name: Name of the project (used as directory name)

    Returns:
        Path: Path object pointing to the created project directory

    Raises:
        OSError: If directory creation fails

    Example:
        >>> project_dir = create_project_structure("my-landing")
        >>> # Creates: output/my-landing/css/, output/my-landing/js/, etc.
    """
    # Get the script directory and navigate to project root
    script_dir = Path(__file__).resolve().parent
    project_root = script_dir.parent

    # Create output directory path
    output_dir = project_root / 'output' / project_name

    # Check if project already exists
    if output_dir.exists():
        logger.warning(f"Project directory already exists: {output_dir}")
        logger.info("Cleaning existing directory...")
        shutil.rmtree(output_dir)

    # Create project directory structure
    logger.info(f"Creating project structure: {project_name}")

    # Create main project directory
    output_dir.mkdir(parents=True, exist_ok=True)
    logger.info(f"  ✓ Created: {output_dir.relative_to(project_root)}")

    # Create subdirectories
    subdirs = ['css', 'js', 'assets']
    for subdir in subdirs:
        subdir_path = output_dir / subdir
        subdir_path.mkdir(exist_ok=True)
        logger.info(f"  ✓ Created: {subdir_path.relative_to(project_root)}")

    logger.info(f"Project structure created successfully!")

    return output_dir


def assemble_html(sections: List[Dict], project_dir: Path) -> Path:
    """
    Assemble HTML from selected sections into a single index.html file.

    Reads HTML from library/sections/{id}/{id}.html for each section,
    combines them into a complete HTML document with proper structure,
    meta tags, and CSS links.

    Args:
        sections: List of section dictionaries with 'id' and 'order' keys
                  Example: [{"id": "header-1", "order": 1}, ...]
        project_dir: Path to the project directory where index.html will be created

    Returns:
        Path: Path object pointing to the created index.html file

    Raises:
        FileNotFoundError: If section HTML file doesn't exist
        IOError: If file reading/writing fails

    Example:
        >>> sections = [{"id": "header-1", "order": 1}, {"id": "hero-1", "order": 2}]
        >>> project_dir = Path("output/my-project")
        >>> html_file = assemble_html(sections, project_dir)
        >>> # Creates: output/my-project/index.html with combined sections
    """
    # Get project root (parent of scripts directory)
    script_dir = Path(__file__).resolve().parent
    project_root = script_dir.parent

    logger.info("Assembling HTML from sections...")

    # Sort sections by order
    sorted_sections = sorted(sections, key=lambda s: s.get('order', 999))

    # Build HTML document structure
    html_parts = [
        '<!DOCTYPE html>',
        '<html lang="ru">',
        '<head>',
        '  <meta charset="UTF-8">',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '  <meta name="description" content="{{meta.description}}">',
        '  <title>{{meta.title}}</title>',
        '',
        '  <!-- Design System CSS -->',
        '  <link rel="stylesheet" href="css/variables.css">',
        '  <link rel="stylesheet" href="css/reset.css">',
        '  <link rel="stylesheet" href="css/utilities.css">',
        '',
        '  <!-- Sections CSS -->',
        '  <link rel="stylesheet" href="css/sections.css">',
        '',
        '  <!-- Google Fonts - Inter -->',
        '  <link rel="preconnect" href="https://fonts.googleapis.com">',
        '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
        '  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">',
        '',
        '  <!-- Remix Icon -->',
        '  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet">',
        '</head>',
        '<body>',
        ''
    ]

    # Read and append each section's HTML
    for section in sorted_sections:
        section_id = section['id']
        section_path = project_root / 'library' / 'sections' / section_id / f'{section_id}.html'

        if not section_path.exists():
            logger.error(f"Section HTML not found: {section_path}")
            raise FileNotFoundError(f"Section HTML file not found: {section_path}")

        logger.info(f"  ✓ Reading section: {section_id}")

        with open(section_path, 'r', encoding='utf-8') as f:
            section_html = f.read()
            html_parts.append(f'  <!-- Section: {section_id} -->')
            html_parts.append(section_html)
            html_parts.append('')

    # Close HTML document
    html_parts.extend([
        '</body>',
        '</html>'
    ])

    # Write combined HTML to index.html
    output_file = project_dir / 'index.html'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(html_parts))

    logger.info(f"  ✓ Created: {output_file.relative_to(project_root)}")
    logger.info(f"HTML assembly completed! ({len(sorted_sections)} sections)")

    return output_file


# Main function (to be implemented in Task 2.1d)
def main():
    """
    Main entry point for the assembly script.
    Will be implemented in Task 2.1d.
    """
    logger.info("Site Builder - Assembly Script")
    logger.info("Task 2.1a: Project structure creation - READY")
    logger.info("Task 2.1b: HTML assembly - READY")
    logger.info("Tasks 2.1c-d: Not yet implemented")


if __name__ == '__main__':
    main()
