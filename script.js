// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===================================
// Sticky Header on Scroll
// ===================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Animated Counter for Stats Section
// ===================================
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for Stats Animation
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            
            statsAnimated = true;
        }
    });
}, {
    threshold: 0.5
});

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(`
    .feature-card,
    .service-card,
    .why-card,
    .testimonial-card,
    .team-card,
    .portfolio-item,
    .process-step
`);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===================================
// Form Validation
// ===================================
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            }
        }
        
        // Phone validation (basic)
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            }
        }
    });
    
    return isValid;
};

// ===================================
// EmailJS Initialization
// ===================================
// Initialize EmailJS with your Public Key
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
    // Get it from: https://dashboard.emailjs.com/admin/account
    emailjs.init("Z3kFyb0HvvclF1yZz");
})();

// ===================================
// Form Submission Handler with EmailJS
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate form first
        if (!validateForm(contactForm)) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        submitButton.style.cursor = 'not-allowed';
        
        // Get form data
        const formData = new FormData(contactForm);
        const templateParams = {
            title: 'Received A New Enquiry',
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message') || 'No message provided'
        };
        
        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        // Get them from: https://dashboard.emailjs.com/admin
        emailjs.send(
            'service_ey1tkng',      // Replace with your EmailJS Service ID
            'template_ii2fqfb',     // Replace with your EmailJS Template ID
            templateParams
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Thank you! We will contact you soon.', 'success');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('FAILED...', error);
            showNotification('Oops! Something went wrong. Please try again.', 'error');
        })
        .finally(() => {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
            submitButton.style.cursor = 'pointer';
        });
    });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 2rem',
        background: type === 'success' ? '#10b981' : '#ef4444',
        color: '#fff',
        borderRadius: '5px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(400px)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(400px)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active-link'));
            navLink.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Parallax Effect for Hero Section
// ===================================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (hero && window.pageYOffset < hero.offsetHeight) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// ===================================
// Image Lazy Loading (if browser doesn't support native lazy loading)
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Portfolio Filter Animation
// ===================================
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    
    Object.assign(button.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        background: 'linear-gradient(135deg, #d4a574, #e67e22)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: '1000',
        fontSize: '1.2rem',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)'
    });
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    });
};

// Create scroll to top button on page load
createScrollTopButton();

// Add real-time validation
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Restrict phone input to only numbers
        if (input.type === 'tel') {
            input.addEventListener('input', (e) => {
                // Remove any non-numeric characters
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                
                // Limit to 10 digits
                if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                }
            });
        }
        
        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.style.borderColor = '#ef4444';
            } else if (input.type === 'tel' && input.value && input.value.length !== 10) {
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });
        
        input.addEventListener('focus', () => {
            input.style.borderColor = '#d4a574';
        });
    });
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c Welcome to Interio! ', 'background: #d4a574; color: #fff; padding: 10px 20px; font-size: 16px; font-weight: bold;');
console.log('%c Design your dream space with us! ', 'color: #2c3e50; font-size: 14px;');

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Print debugging info (for development)
// ===================================
console.log('Interio website initialized successfully!');
console.log('Sections detected:', sections.length);
console.log('Portfolio items:', portfolioItems.length);
