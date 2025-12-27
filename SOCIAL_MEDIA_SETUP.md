# Social Media Configuration

## 📱 Update Your Social Media Links

The social media links in the footer are currently set to placeholder URLs. Follow the instructions below to update them with your actual social media pages.

## 🔗 Current Links (in `index.html`)

Located in the footer section around line 434-437:

```html
<a href="https://www.facebook.com/interio" target="_blank">Facebook</a>
<a href="https://www.instagram.com/interio" target="_blank">Instagram</a>
<a href="https://twitter.com/interio" target="_blank">Twitter</a>
<a href="https://www.linkedin.com/company/interio" target="_blank">LinkedIn</a>
```

## ✏️ How to Update

### Step 1: Find Your Social Media URLs

1. **Facebook**: 
   - Go to your Facebook page
   - Copy the URL (e.g., `https://www.facebook.com/YourBusinessName`)

2. **Instagram**: 
   - Go to your Instagram profile
   - Copy the URL (e.g., `https://www.instagram.com/yourbusiness`)

3. **Twitter/X**: 
   - Go to your Twitter profile
   - Copy the URL (e.g., `https://twitter.com/yourbusiness` or `https://x.com/yourbusiness`)

4. **LinkedIn**: 
   - Go to your LinkedIn company page
   - Copy the URL (e.g., `https://www.linkedin.com/company/your-company-name`)

### Step 2: Update the Links in `index.html`

Open `index.html` and find the social links section (around line 434-437).

Replace the placeholder URLs:

**Before:**
```html
<a href="https://www.facebook.com/interio" target="_blank" ...>
```

**After (example):**
```html
<a href="https://www.facebook.com/InteriorDesignStudio" target="_blank" ...>
```

### Step 3: Remove Social Media Platforms You Don't Use

If you don't have a particular social media account, simply delete that line:

**Example - Removing Twitter:**
```html
<!-- DELETE THIS LINE IF YOU DON'T USE TWITTER -->
<a href="https://twitter.com/interio" target="_blank" ...><i class="fab fa-twitter"></i></a>
```

### Step 4: Add More Social Media Platforms (Optional)

You can add more platforms like YouTube, Pinterest, WhatsApp, etc.

**YouTube Example:**
```html
<a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <i class="fab fa-youtube"></i>
</a>
```

**Pinterest Example:**
```html
<a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
    <i class="fab fa-pinterest"></i>
</a>
```

**WhatsApp Business Example:**
```html
<a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
```

## 🔒 Security Attributes Explained

Each link includes these attributes for security and user experience:

- `target="_blank"` - Opens link in new tab
- `rel="noopener noreferrer"` - Prevents security vulnerabilities
- `aria-label="..."` - Improves accessibility for screen readers

**Keep these attributes** when updating your links!

## ✅ Complete Example

Here's what a fully configured social media section looks like:

```html
<div class="social-links">
    <a href="https://www.facebook.com/MyInteriorDesignStudio" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="Facebook">
        <i class="fab fa-facebook"></i>
    </a>
    
    <a href="https://www.instagram.com/myinteriorsdesign" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    
    <a href="https://www.linkedin.com/company/my-interior-design-studio" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    
    <a href="https://www.youtube.com/@myinteriordesigns" 
       target="_blank" 
       rel="noopener noreferrer" 
       aria-label="YouTube">
        <i class="fab fa-youtube"></i>
    </a>
</div>
```

## 🎨 Available Social Media Icons

Font Awesome provides icons for most social platforms. Here are some common ones:

| Platform | Icon Class |
|----------|------------|
| Facebook | `fab fa-facebook` |
| Instagram | `fab fa-instagram` |
| Twitter/X | `fab fa-twitter` or `fab fa-x-twitter` |
| LinkedIn | `fab fa-linkedin` |
| YouTube | `fab fa-youtube` |
| Pinterest | `fab fa-pinterest` |
| WhatsApp | `fab fa-whatsapp` |
| TikTok | `fab fa-tiktok` |
| Snapchat | `fab fa-snapchat` |
| Reddit | `fab fa-reddit` |

## 🧪 Testing

After updating:
1. Open `index.html` in your browser
2. Scroll to the footer
3. Click each social media icon
4. Verify it opens your correct social media page in a new tab

---

**Quick Update Template:**

```html
<a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
<a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
<a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
<a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
```

Replace `YOUR_FACEBOOK_URL`, etc., with your actual social media URLs!
