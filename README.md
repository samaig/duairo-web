# Duairo Website

**Professional, Medical-Grade Healthcare Platform Website**

AI-powered healthcare platform that delivers GP-level support directly to patients.

---

## Overview

This website showcases Duairo's AI-powered healthcare platform with a focus on:
- **Trust & Safety**: NHS-aligned, GDPR compliant, medical-grade design
- **Professional Quality**: Enterprise-grade code following SOLID principles
- **User Experience**: Smooth interactions, responsive design, accessibility
- **Brand Alignment**: Medical palette with NHS-style blues and mint accents

---

## Features

### Sections
1. **Hero** - Compelling introduction with clear value proposition
2. **How It Works** - 4-step process flow showing user journey
3. **For Patients** - 6 key benefits highlighting patient value
4. **For Healthcare Partners** - Benefits for NHS, clinics, and healthcare providers
5. **Mission** - Company values and vision
6. **Waitlist** - Early access signup form
7. **Contact** - Full contact information and inquiry form

### Technical Features
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Intersection Observer API for scroll effects
- **Form Handling** - Waitlist and contact form validation
- **Mobile Menu** - Hamburger navigation for small screens
- **Active Navigation** - Highlights current section while scrolling
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Performance** - Optimized loading, passive event listeners
- **SEO Ready** - Meta tags, semantic structure, descriptive content

---

## File Structure

```
duairo-web/
├── index.html          # Main HTML structure with semantic sections
├── styles.css          # Comprehensive design system with NHS-aligned colors
├── script.js           # Interactive functionality and form handling
└── README.md           # Project documentation
```

---

## Design System

### Color Palette

**Primary Colors**
- Primary Blue: `#0EA5E9` (NHS-aligned medical blue)
- Primary Dark: `#0284C7`
- Secondary Green: `#10B981` (Medical mint/green)
- Secondary Dark: `#059669`

**Neutral Colors**
- White: `#FFFFFF`
- Gray Scale: `#F9FAFB` to `#111827`

**Accent Colors**
- Mint Light: `#D1FAE5`, `#A7F3D0`
- Danger Red: `#EF4444` (for emergency/warning)

### Typography
- **Headings**: Poppins (700 weight)
- **Body**: Inter (400, 500, 600 weights)
- **Base Size**: 16px
- **Scale**: Responsive fluid typography

### Spacing
- Uses consistent spacing scale: `0.5rem` to `6rem`
- Grid-based layout with proper whitespace
- Responsive padding and margins

---

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern design with Grid, Flexbox, CSS Variables
- **JavaScript (ES6+)** - Vanilla JS with modern APIs
- **Google Fonts** - Inter & Poppins font families

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Getting Started

### Option 1: Direct Open
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For best experience with all features:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with npx)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

---

## Customization Guide

### Update Company Information
Edit the contact section in `index.html`:
```html
<section class="section section-contact" id="contact">
  <!-- Update company details here -->
</section>
```

### Modify Color Scheme
Update CSS variables in `styles.css`:
```css
:root {
  --color-primary: #0EA5E9;
  --color-secondary: #10B981;
  /* Update other colors as needed */
}
```

### Add Form Integration
Replace the placeholder form handlers in `script.js`:
```javascript
function handleWaitlistSubmit(e) {
  // Replace setTimeout with API endpoint
  fetch('/api/waitlist', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
```

---

## Code Quality

### Architecture Principles
- **DRY** (Don't Repeat Yourself) - Reusable components and utilities
- **SOLID** - Single responsibility, proper separation of concerns
- **Maintainable** - Well-structured, commented, easy to understand
- **Performant** - Optimized rendering, passive listeners, debounced events

### Code Organization
- **Semantic HTML** - Proper heading hierarchy, ARIA labels
- **CSS Methodology** - BEM-inspired naming, component-based styles
- **JavaScript Modules** - Separated concerns with clear function purposes

---

## SEO Optimization

- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags ready (add social media previews)
- Proper heading hierarchy
- Alt text for images
- Fast loading times
- Mobile-first responsive design

---

## Analytics Integration

The website includes placeholder functions for analytics. To integrate:

1. **Google Analytics**
```javascript
// Add to <head> in index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

2. **Update tracking functions in script.js**
```javascript
function trackEvent(action, category, label) {
  gtag('event', action, {
    event_category: category,
    event_label: label
  });
}
```

---

## Security Considerations

- No inline JavaScript (CSP-ready)
- Form validation (client-side)
- HTTPS recommended for production
- Server-side validation required for forms
- Sanitize user inputs on backend
- Implement rate limiting for API endpoints

---

## Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Push to `gh-pages` branch
- **AWS S3 + CloudFront**: For enterprise hosting

### Traditional Hosting
Upload all files to the web server's public directory.

---

## TODO for Production

- [ ] Connect forms to backend API endpoints
- [ ] Add Google Analytics tracking code
- [ ] Set up error logging (Sentry, LogRocket, etc.)
- [ ] Add social media Open Graph images
- [ ] Test with real user data
- [ ] Add privacy policy and terms of service pages
- [ ] Implement cookie consent banner (GDPR)
- [ ] Configure CDN for assets

---

## Company Information

**Duairo Ltd**
128 City Road
London EC1V 2NX
United Kingdom

📧 Email: comms@duairo.co.uk
📞 Phone: +44 (0)333 880 7090
🌐 Website: www.duairo.co.uk

---

## License

© 2025 Duairo Ltd. All rights reserved.

---

## Support

For technical questions or support:
- Email: comms@duairo.co.uk
- Review the code comments in each file
- Check browser console for any errors

---

**Built with precision and care - Transforming Healthcare Access**
