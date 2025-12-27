// =====================================================
// EMAILJS CONFIGURATION FILE
// =====================================================
// Follow the setup instructions in EMAILJS_SETUP.md
// Then update the values below with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // Get this from: https://dashboard.emailjs.com/admin/account
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",
    
    // Get this from: https://dashboard.emailjs.com/admin (Email Services section)
    SERVICE_ID: "YOUR_SERVICE_ID",
    
    // Get this from: https://dashboard.emailjs.com/admin (Email Templates section)
    TEMPLATE_ID: "YOUR_TEMPLATE_ID"
};

// =====================================================
// INSTRUCTIONS:
// =====================================================
// 1. Sign up at https://www.emailjs.com/
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{phone}}
//    - {{message}}
// 4. Copy your Public Key, Service ID, and Template ID
// 5. Replace the values above
// 6. Update script.js to use these values (see lines 182 and 210-211)
//
// For detailed instructions, see EMAILJS_SETUP.md
// =====================================================

// Optional: Export for use in script.js (if you want to use this file)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAILJS_CONFIG;
}
