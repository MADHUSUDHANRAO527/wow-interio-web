# 🎯 Quick Configuration Guide

## Update These 3 Values in `script.js`

### 1️⃣ Public Key (Line ~182)

**Find this code:**
```javascript
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");  // ← REPLACE THIS
})();
```

**Update to:**
```javascript
(function() {
    emailjs.init("your_actual_public_key_here");  // ← Your public key from EmailJS dashboard
})();
```

**Example:**
```javascript
(function() {
    emailjs.init("abcdef123456");
})();
```

---

### 2️⃣ Service ID (Line ~210)

**Find this code:**
```javascript
emailjs.send(
    'YOUR_SERVICE_ID',      // ← REPLACE THIS
    'YOUR_TEMPLATE_ID',
    templateParams
)
```

**Update to:**
```javascript
emailjs.send(
    'service_abc123',       // ← Your service ID from EmailJS dashboard
    'YOUR_TEMPLATE_ID',
    templateParams
)
```

---

### 3️⃣ Template ID (Line ~211)

**Find this code:**
```javascript
emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',     // ← REPLACE THIS
    templateParams
)
```

**Update to:**
```javascript
emailjs.send(
    'YOUR_SERVICE_ID',
    'template_xyz789',      // ← Your template ID from EmailJS dashboard
    templateParams
)
```

---

## 📍 Complete Example

**Before:**
```javascript
// Line 180-184
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Line 208-217
emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams
)
```

**After:**
```javascript
// Line 180-184
(function() {
    emailjs.init("abcdef123456789");  // Your actual public key
})();

// Line 208-217
emailjs.send(
    'service_abc123',     // Your actual service ID
    'template_xyz789',    // Your actual template ID
    templateParams
)
```

---

## 🔍 Where to Find These Values

### Public Key
1. Go to https://dashboard.emailjs.com/admin/account
2. Scroll to "API Keys" section
3. Copy the "Public Key"

### Service ID
1. Go to https://dashboard.emailjs.com/admin
2. Click "Email Services" in sidebar
3. Your Service ID is shown next to your email service name

### Template ID
1. Go to https://dashboard.emailjs.com/admin
2. Click "Email Templates" in sidebar
3. Your Template ID is shown next to your template name

---

## ✅ That's It!

After updating these 3 values:
1. Save `script.js`
2. Refresh your website in the browser
3. Test the contact form
4. Check your email!

---

## 🆘 Still Need Help?

See **`EMAILJS_SETUP.md`** for the complete step-by-step guide with screenshots.
