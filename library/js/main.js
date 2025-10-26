/**
 * Site Builder — Main JavaScript
 * Universal functions for landing pages
 *
 * Features:
 * - Mobile menu toggle
 * - Smooth scroll
 * - Accordion
 * - Tabs
 * - Modal
 * - Form validation
 * - Lazy loading images
 */

// ========================================
// MOBILE MENU
// ========================================

/**
 * Initialize mobile menu toggle
 * Usage: Add class "js-menu-toggle" to burger button
 * Add class "js-menu" to mobile menu element
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.js-menu-toggle');
  const menu = document.querySelector('.js-menu');

  if (!menuToggle || !menu) return;

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      document.body.classList.remove('menu-open');
    }
  });

  // Close menu on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      document.body.classList.remove('menu-open');
    }
  });
}


// ========================================
// SMOOTH SCROLL
// ========================================

/**
 * Smooth scroll to anchor links
 * Usage: Add href="#section-id" to links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip empty hash and menu toggles
      if (href === '#' || this.classList.contains('js-menu-toggle')) return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile menu if open
        const menu = document.querySelector('.js-menu');
        const menuToggle = document.querySelector('.js-menu-toggle');
        if (menu && menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
          menuToggle.classList.remove('is-active');
          document.body.classList.remove('menu-open');
        }
      }
    });
  });
}


// ========================================
// ACCORDION
// ========================================

/**
 * Initialize accordion
 * Usage (Old): Add class "js-accordion" to container
 * Usage (New): Add data-accordion-trigger to buttons, data-accordion-panel to panels
 */
function initAccordion() {
  // Legacy accordion support (js-accordion classes)
  const accordions = document.querySelectorAll('.js-accordion');

  accordions.forEach(accordion => {
    const triggers = accordion.querySelectorAll('.js-accordion-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isOpen = trigger.classList.contains('is-active');

        // Close all items (optional - remove for multi-open)
        const allTriggers = accordion.querySelectorAll('.js-accordion-trigger');
        const allContents = accordion.querySelectorAll('.js-accordion-content');

        allTriggers.forEach(t => t.classList.remove('is-active'));
        allContents.forEach(c => {
          c.classList.remove('is-active');
          c.style.maxHeight = null;
        });

        // Toggle current item
        if (!isOpen) {
          trigger.classList.add('is-active');
          content.classList.add('is-active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });

  // New accordion support (data-accordion-trigger)
  const newTriggers = document.querySelectorAll('[data-accordion-trigger]');

  newTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Toggle current item
      if (isOpen) {
        // Close
        trigger.setAttribute('aria-expanded', 'false');
        panel.setAttribute('data-accordion-open', 'false');
        panel.style.maxHeight = null;
      } else {
        // Open
        trigger.setAttribute('aria-expanded', 'true');
        panel.setAttribute('data-accordion-open', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}


// ========================================
// TABS
// ========================================

/**
 * Initialize tabs
 * Usage (Old): Add class "js-tabs" to container
 * Usage (New): Add data-tabs to container, data-tab-trigger to buttons, data-tab-panel to panels
 */
function initTabs() {
  // Legacy tabs support (js-tabs classes)
  const legacyTabContainers = document.querySelectorAll('.js-tabs');

  legacyTabContainers.forEach(container => {
    const triggers = container.querySelectorAll('.js-tab-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const tabId = trigger.dataset.tab;
        const allTriggers = container.querySelectorAll('.js-tab-trigger');
        const allContents = container.querySelectorAll('.js-tab-content');

        // Remove active state from all
        allTriggers.forEach(t => t.classList.remove('is-active'));
        allContents.forEach(c => c.classList.remove('is-active'));

        // Add active state to current
        trigger.classList.add('is-active');
        const currentContent = container.querySelector(`[data-tab="${tabId}"].js-tab-content`);
        if (currentContent) {
          currentContent.classList.add('is-active');
        }
      });
    });
  });

  // New tabs support (data-tabs)
  const newTabContainers = document.querySelectorAll('[data-tabs]');

  newTabContainers.forEach(container => {
    const triggers = container.querySelectorAll('[data-tab-trigger]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const tabId = trigger.getAttribute('data-tab-trigger');
        const allTriggers = container.querySelectorAll('[data-tab-trigger]');
        const allPanels = container.querySelectorAll('[data-tab-panel]');

        // Remove active state from all
        allTriggers.forEach(t => {
          t.classList.remove('tabs__tab--active');
          t.setAttribute('aria-selected', 'false');
        });
        allPanels.forEach(p => {
          p.classList.remove('tabs__panel--active');
        });

        // Add active state to current
        trigger.classList.add('tabs__tab--active');
        trigger.setAttribute('aria-selected', 'true');

        const currentPanel = container.querySelector(`[data-tab-panel="${tabId}"]`);
        if (currentPanel) {
          currentPanel.classList.add('tabs__panel--active');
        }
      });
    });
  });
}


// ========================================
// MODAL
// ========================================

/**
 * Initialize modals
 * Usage: Add data-modal-open="modal-id" to trigger button
 * Add class "modal" to modal element with id="modal-id"
 * Add data-modal-close to close buttons and overlay
 */
function initModal() {
  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');

  // Open modal
  openButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = button.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add('modal--active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Focus first focusable element
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    });
  });

  // Close modal
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      if (modal) {
        modal.classList.remove('modal--active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal--active');
      if (activeModal) {
        activeModal.classList.remove('modal--active');
        activeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });
}


// ========================================
// FORM VALIDATION
// ========================================

/**
 * Simple form validation
 * Usage: Add class "js-form-validate" to form
 * Add required attribute to inputs
 */
function initFormValidation() {
  const forms = document.querySelectorAll('.js-form-validate');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;

      inputs.forEach(input => {
        const field = input.closest('.form-field');

        if (!input.value.trim()) {
          isValid = false;
          if (field) {
            field.classList.add('form-field--error');
            field.classList.remove('form-field--success');
          }
        } else {
          if (field) {
            field.classList.remove('form-field--error');
            field.classList.add('form-field--success');
          }
        }

        // Email validation
        if (input.type === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            if (field) {
              field.classList.add('form-field--error');
              field.classList.remove('form-field--success');
            }
          }
        }
      });

      if (isValid) {
        // Form is valid - submit or handle data
        console.log('Form is valid - ready to submit');
        // form.submit(); // Uncomment to actually submit

        // Show success message (optional)
        alert('Форма успешно отправлена!');
        form.reset();

        // Remove validation classes
        inputs.forEach(input => {
          const field = input.closest('.form-field');
          if (field) {
            field.classList.remove('form-field--error', 'form-field--success');
          }
        });
      }
    });

    // Real-time validation on input
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        const field = input.closest('.form-field');

        if (input.value.trim()) {
          if (field) {
            field.classList.remove('form-field--error');
            field.classList.add('form-field--success');
          }
        }
      });
    });
  });
}


// ========================================
// LAZY LOADING IMAGES
// ========================================

/**
 * Lazy load images
 * Usage: Add class "js-lazy" to images with data-src="image.jpg"
 */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('.js-lazy');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('js-lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.classList.remove('js-lazy');
    });
  }
}


// ========================================
// SLIDERS
// ========================================

/**
 * Initialize sliders
 * Usage: Add data-slider="unique-id" to slider container
 * Supports: single slide, multi-slide, and carousel layouts
 */
function initSliders() {
  const sliders = document.querySelectorAll('[data-slider]');

  sliders.forEach(slider => {
    const track = slider.querySelector('.slider__track');
    const slides = slider.querySelectorAll('.slider__slide');
    const prevBtn = slider.querySelector('[data-slider-prev]');
    const nextBtn = slider.querySelector('[data-slider-next]');
    const dotsContainer = slider.querySelector('.slider__dots');

    let currentIndex = 0;

    // Check if this is a scrollable multi-slide slider
    const isScrollable = track.classList.contains('slider__track--2-cols') ||
                        track.classList.contains('slider__track--3-cols') ||
                        track.classList.contains('slider__track--carousel');

    // Initialize dots
    if (dotsContainer && slides.length > 0) {
      // Clear existing dots (for dynamic initialization)
      dotsContainer.innerHTML = '';

      // For scrollable sliders, create dots based on visible groups
      const dotsCount = isScrollable ? Math.ceil(slides.length / getVisibleSlidesCount(slider)) : slides.length;

      for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'slider__dot';
        if (i === 0) dot.classList.add('slider__dot--active');
        dot.setAttribute('data-slider-dot', i);
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    // Get number of visible slides for multi-slide sliders
    function getVisibleSlidesCount(slider) {
      if (slider.classList.contains('slider--3-cols') ||
          slider.classList.contains('slider--carousel-3')) {
        return window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 3);
      }
      if (slider.classList.contains('slider--2-cols')) {
        return window.innerWidth < 768 ? 1 : 2;
      }
      return 1;
    }

    // Navigate to specific slide
    function goToSlide(index) {
      if (isScrollable) {
        // For scrollable sliders, scroll to position
        const slideWidth = slides[0].offsetWidth;
        const gap = parseInt(getComputedStyle(track).gap) || 0;
        const visibleCount = getVisibleSlidesCount(slider);
        const scrollPosition = index * (slideWidth + gap) * visibleCount;

        track.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      } else {
        // For single-slide sliders, toggle active class
        slides.forEach(slide => slide.classList.remove('slider__slide--active'));
        if (slides[index]) {
          slides[index].classList.add('slider__slide--active');
        }
      }

      currentIndex = index;
      updateDots();
      updateButtons();
    }

    // Update active dot
    function updateDots() {
      const dots = dotsContainer?.querySelectorAll('.slider__dot');
      if (dots) {
        dots.forEach((dot, i) => {
          dot.classList.toggle('slider__dot--active', i === currentIndex);
        });
      }
    }

    // Update button states
    function updateButtons() {
      // Buttons are always enabled for looped slider
      // No disabled state needed
    }

    // Previous slide
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const maxIndex = isScrollable
          ? Math.ceil(slides.length / getVisibleSlidesCount(slider)) - 1
          : slides.length - 1;

        if (currentIndex > 0) {
          goToSlide(currentIndex - 1);
        } else {
          // Loop to last slide
          goToSlide(maxIndex);
        }
      });
    }

    // Next slide
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxIndex = isScrollable
          ? Math.ceil(slides.length / getVisibleSlidesCount(slider)) - 1
          : slides.length - 1;

        if (currentIndex < maxIndex) {
          goToSlide(currentIndex + 1);
        } else {
          // Loop to first slide
          goToSlide(0);
        }
      });
    }

    // Keyboard navigation
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevBtn?.click();
      } else if (e.key === 'ArrowRight') {
        nextBtn?.click();
      }
    });

    // Update on scroll for scrollable sliders
    if (isScrollable) {
      let scrollTimeout;
      track.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const slideWidth = slides[0].offsetWidth;
          const gap = parseInt(getComputedStyle(track).gap) || 0;
          const visibleCount = getVisibleSlidesCount(slider);
          const scrollLeft = track.scrollLeft;
          const newIndex = Math.round(scrollLeft / ((slideWidth + gap) * visibleCount));

          if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots();
            updateButtons();
          }
        }, 100);
      });
    }

    // Initialize
    updateButtons();
  });
}


// ========================================
// INITIALIZE ALL
// ========================================

/**
 * Initialize all functions when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
  initAccordion();
  initTabs();
  initModal();
  initFormValidation();
  initLazyLoading();
  initSliders();

  console.log('Site Builder JS initialized ✅');
});
