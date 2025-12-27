# Interio - Interior Design Website

A modern, professional static website for an interior design company, featuring responsive design and interactive elements.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Animated statistics counter
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Portfolio hover effects
  - Form validation
  - Scroll-to-top button
  - **EmailJS integration for contact form**
- **Multiple Sections**:
  - Hero section with call-to-action
  - Features showcase
  - About section
  - Statistics counter
  - Services gallery
  - Process timeline
  - Portfolio/Projects
  - Why choose us
  - Testimonials
  - Team members
  - Contact form
  - Footer

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- EmailJS (for contact form submissions)
- Font Awesome Icons
- Unsplash Images (placeholder images)

## Getting Started

### Basic Setup

1. Open `index.html` in your web browser
2. No build process or dependencies required - it's a static website!

### Contact Form Setup (EmailJS)

To enable the contact form to send emails:

1. Follow the detailed instructions in `EMAILJS_SETUP.md`
2. Create a free EmailJS account at [emailjs.com](https://www.emailjs.com/)
3. Get your Public Key, Service ID, and Template ID
4. Update these values in `script.js`:
   - Line ~182: Replace `YOUR_PUBLIC_KEY`
   - Line ~210-211: Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`

**Without EmailJS setup**: The form will validate but won't actually send emails.

## File Structure

```
Interio/
├── index.html               # Main HTML file
├── styles.css               # All styling
├── script.js                # JavaScript functionality
├── README.md                # This file
├── EMAILJS_SETUP.md         # 📧 Detailed EmailJS setup guide
├── QUICK_CONFIG.md          # ⚡ Quick 3-step configuration
├── INTEGRATION_SUMMARY.md   # 📋 Integration overview
├── SOCIAL_MEDIA_SETUP.md    # 📱 Social media links configuration
└── emailjs-config.js        # 🔧 Configuration template
```

## 📧 EmailJS Setup Documentation

- **[QUICK_CONFIG.md](QUICK_CONFIG.md)** - Fast 3-step setup (Start here!)
- **[EMAILJS_SETUP.md](EMAILJS_SETUP.md)** - Complete guide with troubleshooting
- **[INTEGRATION_SUMMARY.md](INTEGRATION_SUMMARY.md)** - Technical integration details

## 📱 Social Media Configuration

- **[SOCIAL_MEDIA_SETUP.md](SOCIAL_MEDIA_SETUP.md)** - Update your social media links in the footer

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4a574;
    --secondary-color: #2c3e50;
    --accent-color: #e67e22;
    /* ... */
}
```

### Content
- Replace placeholder text in `index.html`
- Update images by changing the Unsplash URLs or uploading your own images
- Modify contact information in the contact section

### Images
Currently using Unsplash for placeholder images. Replace with your own:
- Portfolio images
- Team member photos
- Service images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Lazy loading for images
- Intersection Observer API for animations
- Optimized CSS with hardware acceleration
- Minimal JavaScript for fast loading

## License

This is a template project. Feel free to use and modify for your needs.

## Credits

- Images: Unsplash (placeholder images)
- Icons: Font Awesome
- Design inspiration: Modern interior design websites

---

**Note**: This is a static website template. For production use, you may want to:
- Add a backend for form submissions
- Implement a CMS for easier content management
- Add analytics tracking
- Optimize images for web
- Set up proper hosting and domain
