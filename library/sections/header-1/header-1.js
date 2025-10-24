/**
 * Header-1: Interactive Navigation JavaScript
 *
 * Features:
 * - Toggle burger menu on mobile
 * - ARIA attributes management (aria-expanded)
 * - Close menu on: outside click, ESC key, resize to desktop
 * - Smooth animations and accessibility
 * - No dependencies (Vanilla JS ES6+)
 */

'use strict';

(function() {
  // DOM elements
  const burgerButton = document.getElementById('burgerButton');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = mobileNav.querySelectorAll('.header__mobile-nav-link');

  // State
  let isMenuOpen = false;

  /**
   * Toggle mobile navigation menu
   */
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    // Update classes
    burgerButton.classList.toggle('is-open', isMenuOpen);
    mobileNav.classList.toggle('is-open', isMenuOpen);

    // Update ARIA attribute
    burgerButton.setAttribute('aria-expanded', isMenuOpen);

    // Prevent body scroll when menu is open
    document.body.classList.toggle('no-scroll', isMenuOpen);
  }

  /**
   * Close mobile navigation menu
   */
  function closeMenu() {
    if (!isMenuOpen) return;

    isMenuOpen = false;

    // Update classes
    burgerButton.classList.remove('is-open');
    mobileNav.classList.remove('is-open');

    // Update ARIA attribute
    burgerButton.setAttribute('aria-expanded', 'false');

    // Re-enable body scroll
    document.body.classList.remove('no-scroll');
  }

  /**
   * Handle burger button click
   */
  burgerButton.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
  });

  /**
   * Close menu when clicking on navigation links
   */
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  /**
   * Close menu when clicking outside
   */
  document.addEventListener('click', function(event) {
    if (!isMenuOpen) return;

    const isClickInsideNav = mobileNav.contains(event.target);
    const isClickOnBurger = burgerButton.contains(event.target);

    if (!isClickInsideNav && !isClickOnBurger) {
      closeMenu();
    }
  });

  /**
   * Close menu when pressing ESC key
   */
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });

  /**
   * Close menu when resizing to desktop
   * Desktop breakpoint: 1024px (matches CSS)
   */
  const DESKTOP_BREAKPOINT = 1024;
  let lastWindowWidth = window.innerWidth;

  window.addEventListener('resize', function() {
    const currentWindowWidth = window.innerWidth;

    // Check if crossed the desktop breakpoint
    if (lastWindowWidth < DESKTOP_BREAKPOINT && currentWindowWidth >= DESKTOP_BREAKPOINT) {
      closeMenu();
    }

    lastWindowWidth = currentWindowWidth;
  });

  /**
   * Optional: Add scroll shadow effect to header
   */
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    // Add shadow when scrolled down more than 10px
    if (currentScrollY > 10) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScrollY = currentScrollY;
  });

})();
