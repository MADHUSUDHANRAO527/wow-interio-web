# EmailJS Setup Guide for Interio Contact Form

This guide will help you set up EmailJS to receive emails from your contact form.

## 📧 What is EmailJS?

EmailJS is a service that allows you to send emails directly from your client-side JavaScript code without needing a backend server. It's perfect for static websites!

## 🚀 Step-by-Step Setup

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Complete the registration process
4. Verify your email address

### Step 2: Add an Email Service

1. Log in to your EmailJS dashboard
2. Go to **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
5. Follow the instructions to connect your email account:
   - **For Gmail**: 
     - Click "Connect Account"
     - Authorize EmailJS to send emails on your behalf
   - **For Other Providers**:
     - Enter your SMTP credentials
6. Give your service a name (e.g., "Interio Contact Form")
7. Click **"Create Service"**
8. **IMPORTANT**: Copy your **Service ID** (e.g., `service_abc123`) - you'll need this later!

### Step 3: Create an Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Set up your template with these variables:

#### Template Configuration:

**Template Name**: `Interio Contact Form Submission`

**Subject**: `Received A New Enquiry`

**Content** (HTML):
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the Interio website contact form.</em></p>
```

**Or use the simpler text version:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Sent from Interio Contact Form
```

4. Click **"Save"**
5. **IMPORTANT**: Copy your **Template ID** (e.g., `template_xyz789`) - you'll need this later!

### Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Scroll down to **"API Keys"** section
3. **IMPORTANT**: Copy your **Public Key** (e.g., `abcdefghijklmnop`) - you'll need this!

### Step 5: Update Your Website Code

Now open your `script.js` file and replace the placeholder values:

1. Find this line (around line 182):
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```
Replace `YOUR_PUBLIC_KEY` with your actual Public Key from Step 4.

2. Find these lines (around line 210-211):
```javascript
emailjs.send(
    'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
    'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
```
Replace:
- `YOUR_SERVICE_ID` with your Service ID from Step 2
- `YOUR_TEMPLATE_ID` with your Template ID from Step 3

#### Example:
```javascript
// Before
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams
)

// After
emailjs.init("abcdefghijklmnop");

emailjs.send(
    'service_abc123',
    'template_xyz789',
    templateParams
)
```

### Step 6: Test Your Form

1. Open your `index.html` file in a web browser
2. Scroll down to the contact form
3. Fill in all required fields:
   - Name
   - Email
   - Phone Number
   - Message (optional)
4. Click **"Send Message"**
5. You should see a success notification
6. Check your email inbox (the one you connected in Step 2) - you should receive the form submission!

## 🔧 Troubleshooting

### Common Issues:

**1. "emailjs is not defined" error**
- Make sure the EmailJS CDN script is loaded before your script.js file in index.html
- Check your browser console for errors

**2. Form submits but no email received**
- Verify your Service ID and Template ID are correct
- Check your EmailJS dashboard > Email Services > History to see if the email was sent
- Check your spam folder
- Make sure your email service is still connected (green checkmark in EmailJS dashboard)

**3. "Failed to send email" error**
- Check your internet connection
- Verify your Public Key is correct
- Make sure you haven't exceeded the free tier limit (200 emails/month)
- Check the browser console for detailed error messages

**4. Template variables not showing up**
- Make sure your template uses the exact variable names: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`
- Variables are case-sensitive!

## 📊 EmailJS Free Tier Limits

- **200 emails per month**
- **No credit card required**
- **Upgrade available** if you need more

To check your usage:
1. Go to EmailJS Dashboard
2. Click on "Account" in the sidebar
3. View your current usage

## 🎨 Customization Options

### Change Email Template Design
1. Go to "Email Templates" in EmailJS dashboard
2. Click on your template
3. Modify the HTML/CSS
4. Add your logo or branding
5. Click "Save"

### Send to Multiple Email Addresses
In your template settings:
1. Add multiple email addresses in the "To email" field
2. Separate with commas: `email1@example.com, email2@example.com`

### Add Auto-Reply to User
1. Create a second template for auto-reply
2. Add another `emailjs.send()` call in your JavaScript
3. Use the user's email as the recipient

## 🔒 Security Notes

- Your Public Key is safe to expose in client-side code
- Never expose your Private Key
- EmailJS automatically protects against spam
- Enable reCAPTCHA in EmailJS settings for extra security

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React/Vue/Angular Guides](https://www.emailjs.com/docs/examples/)
- [EmailJS Support](https://www.emailjs.com/support/)

## ✅ Quick Checklist

- [ ] Created EmailJS account
- [ ] Connected email service and copied Service ID
- [ ] Created email template and copied Template ID
- [ ] Copied Public Key from Account settings
- [ ] Updated `script.js` with all three IDs
- [ ] Tested the contact form
- [ ] Received test email successfully

---

## 🎉 You're All Set!

Your contact form is now fully functional and will send emails directly to your inbox. If you have any issues, refer to the troubleshooting section or check the EmailJS documentation.

**Need Help?** Open an issue or check the EmailJS support page.
