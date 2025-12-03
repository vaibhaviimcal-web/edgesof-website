# Assets Guide - Edgesof Solutions Website

## 📸 Required Assets

### Logo Files (Priority: HIGH)

**Location:** `public/assets/`

| File Name | Purpose | Recommended Size | Format |
|-----------|---------|------------------|--------|
| `logo-white.png` | Main navigation logo | 200x50px | PNG/SVG |
| `logo-black.png` | Black variant | 200x50px | PNG/SVG |
| `logo-accent.png` | Electric blue variant | 200x50px | PNG/SVG |

**Current Placeholders:**
- White: [Download](https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-15-24-961Z-040a87cc-nano-banana-pro_1764803724841.png)
- Black: [Download](https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-15-39-016Z-86f619c7-nano-banana-pro_1764803738881.jpg)
- Accent: [Download](https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-15-54-265Z-8b863267-nano-banana-pro_1764803754158.jpg)

### Hero & Portfolio Images (Priority: MEDIUM)

**Location:** `public/assets/`

| File Name | Purpose | Recommended Size | Format |
|-----------|---------|------------------|--------|
| `hero-mockup.jpg` | Homepage hero image | 1920x1080px | WebP/JPG |
| `case-krofta.png` | Krofta case study | 1600x900px | WebP/PNG |
| `case-emr.jpg` | Healthcare EMR case | 1600x900px | WebP/JPG |

**Current Placeholders:**
- Hero: [Download](https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-43-078Z-f3d325b3-nano-banana-pro_1764803862973.jpg)
- Krofta: [Download](https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-18-23-771Z-042b8388-nano-banana-pro_1764803903653.png)
- EMR: [Download](https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-58-612Z-5f723e5d-nano-banana-pro_1764803878368.jpg)

## 🔄 How to Replace Assets

### Method 1: Direct Upload (GitHub Web)

1. Go to [github.com/vaibhaviimcal-web/edgesof-website](https://github.com/vaibhaviimcal-web/edgesof-website)
2. Navigate to `public/assets/`
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Commit changes
6. Vercel will auto-deploy

### Method 2: Git Command Line

```bash
# Clone repository
git clone https://github.com/vaibhaviimcal-web/edgesof-website.git
cd edgesof-website

# Add your assets to public/assets/
cp /path/to/your/logo-white.png public/assets/
cp /path/to/your/hero-mockup.jpg public/assets/
# ... add other files

# Commit and push
git add public/assets/
git commit -m "Update brand assets"
git push origin main
```

### Method 3: Download Placeholders First

```bash
# Create a script to download all placeholders
cd public/assets/

# Download logos
curl -o logo-white.png "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-15-24-961Z-040a87cc-nano-banana-pro_1764803724841.png"

curl -o logo-black.jpg "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-15-39-016Z-86f619c7-nano-banana-pro_1764803738881.jpg"

curl -o logo-accent.jpg "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-15-54-265Z-8b863267-nano-banana-pro_1764803754158.jpg"

# Download hero and case images
curl -o hero-mockup.jpg "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-43-078Z-f3d325b3-nano-banana-pro_1764803862973.jpg"

curl -o case-emr.jpg "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-58-612Z-5f723e5d-nano-banana-pro_1764803878368.jpg"

curl -o case-krofta.png "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-18-23-771Z-042b8388-nano-banana-pro_1764803903653.png"

# Commit
cd ../..
git add public/assets/
git commit -m "Add placeholder assets"
git push origin main
```

## 🎨 Image Optimization Tips

### For Best Performance

1. **Convert to WebP**
   ```bash
   # Using cwebp (install via: brew install webp)
   cwebp -q 85 hero-mockup.jpg -o hero-mockup.webp
   ```

2. **Optimize PNG**
   ```bash
   # Using pngquant
   pngquant --quality=80-95 logo-white.png -o logo-white-optimized.png
   ```

3. **Resize Images**
   ```bash
   # Using ImageMagick
   convert hero-mockup.jpg -resize 1920x1080 -quality 85 hero-mockup-optimized.jpg
   ```

### Recommended Tools

- **Online:** [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **CLI:** ImageMagick, cwebp, pngquant
- **Mac:** ImageOptim
- **Windows:** FileOptimizer

## 📐 Design Specifications

### Logo Design Guidelines

- **Style:** Ultra-minimal, clean sans-serif
- **Font:** Inter or similar
- **Colors:** 
  - White: #FFFFFF
  - Black: #000000
  - Accent: #1A73E8 (Electric Blue)
- **Format:** SVG preferred (scalable), PNG fallback
- **Transparency:** Required for white and accent variants
- **Padding:** Include 10-20px padding around wordmark

### Image Guidelines

- **Hero Image:**
  - Showcase: Premium dashboard/product mockup
  - Style: Dark theme, professional, high-end
  - Lighting: Studio quality, well-lit
  - Format: JPG or WebP
  - Quality: 85-90%

- **Case Study Images:**
  - Showcase: Actual project screenshots or mockups
  - Style: Consistent with brand (dark theme preferred)
  - Context: Show interface in use (on laptop/desktop)
  - Format: PNG for UI screenshots, JPG for photos
  - Quality: 85-95%

## ✅ Asset Checklist

Before going live, ensure:

- [ ] All logo variants uploaded and displaying correctly
- [ ] Hero image is high-quality and loads fast
- [ ] Case study images are relevant and professional
- [ ] All images optimized (< 500KB each)
- [ ] Images display correctly on mobile
- [ ] Alt text is descriptive (already in code)
- [ ] No broken image links
- [ ] Favicon added (optional)

## 🔍 Verification

After uploading assets:

1. **Local Test**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Check all pages for images
   ```

2. **Production Test**
   - Wait for Vercel deployment
   - Visit live site
   - Check all pages
   - Test on mobile device

3. **Performance Check**
   - Run Lighthouse audit
   - Ensure images don't slow down site
   - Target: < 3s load time

## 📞 Need Help?

- **Image Generation:** Use Nano Banana Pro or similar AI tools
- **Design Questions:** hello@edgesof.com
- **Technical Issues:** Check DEPLOYMENT.md

---

**Pro Tip:** Keep original high-resolution files in a separate folder for future use!