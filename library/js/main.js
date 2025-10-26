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
 * Usage: Add class "js-accordion" to container
 * Add class "js-accordion-trigger" to triggers
 * Add class "js-accordion-content" to content panels
 */
function initAccordion() {
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
}


// ========================================
// TABS
// ========================================

/**
 * Initialize tabs
 * Usage: Add class "js-tabs" to container
 * Add class "js-tab-trigger" to tab buttons with data-tab="tab-id"
 * Add class "js-tab-content" to content panels with data-tab="tab-id"
 */
function initTabs() {
  const tabContainers = document.querySelectorAll('.js-tabs');

  tabContainers.forEach(container => {
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

  console.log('Site Builder JS initialized ✅');
});
