/**
 * ===================================================================
 * DUAIRO WEBSITE - INTERACTIVE FUNCTIONALITY
 * Enterprise-Grade JavaScript | Clean Architecture
 * ===================================================================
 */

'use strict';

/* ===================================================================
   INITIALIZATION
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initForms();
    initAnimations();
    initMobileMenu();
    initScrollToTop();
});

/* ===================================================================
   NAVIGATION
   =================================================================== */

/**
 * Initialize navigation functionality
 * Handles smooth scrolling and active link highlighting
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    // Active link highlighting on scroll
    window.addEventListener('scroll', () => {
        highlightActiveSection(navLinks);
    }, { passive: true });
}

/**
 * Handle navigation link click
 * @param {Event} e - Click event
 */
function handleNavLinkClick(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

/**
 * Highlight active section in navigation
 * @param {NodeList} navLinks - Navigation link elements
 */
function highlightActiveSection(navLinks) {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/* ===================================================================
   SCROLL EFFECTS
   =================================================================== */

/**
 * Initialize scroll-based effects
 * Handles navbar appearance and smooth scrolling
 */
function initScrollEffects() {
    const navbar = document.getElementById('navbar');

    // Navbar background on scroll
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100), { passive: true });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just '#' or doesn't have a target
            if (href === '#' || href.length <= 1) return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================================================
   ANIMATIONS
   =================================================================== */

/**
 * Initialize scroll-based animations using Intersection Observer
 * Provides smooth fade-in effects for elements
 */
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with data-aos attribute
    const animateOnScroll = document.querySelectorAll('[data-aos]');
    animateOnScroll.forEach(el => {
        observer.observe(el);
    });
}

/* ===================================================================
   MOBILE MENU
   =================================================================== */

/**
 * Initialize mobile menu functionality
 * Handles menu toggle and click-outside behavior
 */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (!mobileToggle || !navMenu) return;

    // Toggle mobile menu
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250));
}

/* ===================================================================
   SCROLL TO TOP BUTTON
   =================================================================== */

/**
 * Initialize scroll to top button
 * Shows button after scrolling down and handles click
 */
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');

    if (!scrollTopBtn) return;

    // Show/hide button on scroll
    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, 100), { passive: true });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ===================================================================
   FORM HANDLING
   =================================================================== */

/**
 * Initialize form handling
 * Sets up submit handlers for beta and contact forms
 */
function initForms() {
    // Beta Form
    const betaForm = document.getElementById('betaForm');
    if (betaForm) {
        betaForm.addEventListener('submit', handleBetaSubmit);
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

/**
 * Handle beta form submission
 * @param {Event} e - Form submit event
 */
function handleBetaSubmit(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Joining...</span><i class="fas fa-spinner fa-spin"></i>';

    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
        showNotification('Success! You\'ve been added to the beta program. We\'ll contact you soon with next steps!', 'success');
        e.target.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    }, 1500);

    /**
     * Production implementation:
     *
     * const formData = new FormData(e.target);
     * const data = Object.fromEntries(formData.entries());
     *
     * fetch('/api/beta-signup', {
     *     method: 'POST',
     *     headers: {
     *         'Content-Type': 'application/json',
     *     },
     *     body: JSON.stringify(data)
     * })
     * .then(response => response.json())
     * .then(result => {
     *     showNotification('Success! You\'ve been added to the beta program.', 'success');
     *     e.target.reset();
     * })
     * .catch(error => {
     *     showNotification('An error occurred. Please try again.', 'error');
     * })
     * .finally(() => {
     *     submitBtn.disabled = false;
     *     submitBtn.innerHTML = originalHTML;
     * });
     */
}

/**
 * Handle contact form submission
 * @param {Event} e - Form submit event
 */
function handleContactSubmit(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';

    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        e.target.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    }, 1500);

    /**
     * Production implementation:
     *
     * const formData = new FormData(e.target);
     * const data = Object.fromEntries(formData.entries());
     *
     * fetch('/api/contact', {
     *     method: 'POST',
     *     headers: {
     *         'Content-Type': 'application/json',
     *     },
     *     body: JSON.stringify(data)
     * })
     * .then(response => response.json())
     * .then(result => {
     *     showNotification('Thank you! We\'ll be in touch soon.', 'success');
     *     e.target.reset();
     * })
     * .catch(error => {
     *     showNotification('An error occurred. Please try again.', 'error');
     * })
     * .finally(() => {
     *     submitBtn.disabled = false;
     *     submitBtn.innerHTML = originalHTML;
     * });
     */
}

/* ===================================================================
   NOTIFICATION SYSTEM
   =================================================================== */

/**
 * Show notification message to user
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Remove existing notification if present
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const icon = getNotificationIcon(type);

    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    const styles = {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#0EA5E9',
        color: '#FFFFFF',
        padding: '1rem 1.5rem',
        borderRadius: '0.75rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '400px',
        minWidth: '300px'
    };

    Object.assign(notification.style, styles);

    // Add animation styles if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(450px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(450px);
                    opacity: 0;
                }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            .notification-icon {
                font-size: 1.25rem;
                flex-shrink: 0;
            }
            .notification-message {
                flex: 1;
                font-weight: 500;
                line-height: 1.4;
            }
            .notification-close {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                transition: background 0.2s;
            }
            .notification-close:hover {
                background: rgba(255, 255, 255, 0.3);
            }
        `;
        document.head.appendChild(style);
    }

    // Append to body
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

/**
 * Get icon for notification type
 * @param {string} type - Notification type
 * @returns {string} Icon HTML
 */
function getNotificationIcon(type) {
    switch (type) {
        case 'success':
            return '<i class="fas fa-check-circle"></i>';
        case 'error':
            return '<i class="fas fa-exclamation-circle"></i>';
        case 'info':
        default:
            return '<i class="fas fa-info-circle"></i>';
    }
}

/* ===================================================================
   UTILITY FUNCTIONS
   =================================================================== */

/**
 * Debounce function to limit function calls
 * Ensures function is only called after specified delay
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution rate
 * Ensures function is not called more than once per specified time
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* ===================================================================
   PERFORMANCE OPTIMIZATIONS
   =================================================================== */

/**
 * Preload critical resources
 * Improves initial page load performance
 */
function preloadResources() {
    const criticalLinks = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdnjs.cloudflare.com'
    ];

    criticalLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (!document.querySelector(`link[href="${href}"]`)) {
            document.head.appendChild(link);
        }
    });
}

// Execute preload on load
preloadResources();

/* ===================================================================
   ACCESSIBILITY ENHANCEMENTS
   =================================================================== */

/**
 * Trap focus within modal/menu for keyboard navigation
 * @param {HTMLElement} element - Container element
 */
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }

        if (e.key === 'Escape') {
            // Close modal or menu
            const closeBtn = element.querySelector('[data-close]');
            if (closeBtn) closeBtn.click();
        }
    });
}

/* ===================================================================
   ANALYTICS INTEGRATION (PLACEHOLDER)
   =================================================================== */

/**
 * Track page view event
 * @param {string} pageName - Name of the page
 */
function trackPageView(pageName) {
    // Replace with actual analytics implementation
    // Example: Google Analytics, Mixpanel, etc.
    if (typeof console !== 'undefined' && console.log) {
        console.log('Page view:', pageName);
    }

    /**
     * Production implementation:
     *
     * if (typeof gtag !== 'undefined') {
     *     gtag('event', 'page_view', {
     *         page_title: pageName,
     *         page_path: window.location.pathname
     *     });
     * }
     */
}

/**
 * Track user interaction event
 * @param {string} action - Action performed
 * @param {string} category - Event category
 * @param {string} label - Event label
 */
function trackEvent(action, category, label) {
    // Replace with actual analytics implementation
    if (typeof console !== 'undefined' && console.log) {
        console.log('Event:', { action, category, label });
    }

    /**
     * Production implementation:
     *
     * if (typeof gtag !== 'undefined') {
     *     gtag('event', action, {
     *         event_category: category,
     *         event_label: label
     *     });
     * }
     */
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('click', 'CTA', btn.textContent.trim());
    });
});

// Track initial page view
trackPageView('Home');

/* ===================================================================
   ERROR HANDLING
   =================================================================== */

/**
 * Global error handler
 * Logs errors for debugging and monitoring
 */
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);

    /**
     * Production implementation:
     * Send to error tracking service (e.g., Sentry)
     *
     * if (typeof Sentry !== 'undefined') {
     *     Sentry.captureException(event.error);
     * }
     */
});

/**
 * Unhandled promise rejection handler
 * Catches async errors that aren't handled
 */
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);

    /**
     * Production implementation:
     *
     * if (typeof Sentry !== 'undefined') {
     *     Sentry.captureException(event.reason);
     * }
     */
});

/* ===================================================================
   MODULE EXPORTS (FOR TESTING)
   =================================================================== */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showNotification,
        trackEvent,
        trackPageView,
        debounce,
        throttle,
        isInViewport
    };
}
