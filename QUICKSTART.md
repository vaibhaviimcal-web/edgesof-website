# Quick Start - Deploy in 5 Minutes

## 🚀 Fastest Path to Production

### Step 1: Deploy to Vercel (2 minutes)

1. **Click this link:** [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/vaibhaviimcal-web/edgesof-website)

   OR

2. **Manual Import:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Paste: `https://github.com/vaibhaviimcal-web/edgesof-website`
   - Click "Import"
   - Click "Deploy"

3. **Wait for build** (~2 minutes)

4. **Done!** Your site is live at `https://edgesof-website-[random].vercel.app`

### Step 2: Test Contact Form (1 minute)

```bash
curl -X POST https://your-site.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing contact form"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message received and logged",
  "method": "logging"
}
```

### Step 3: Add Your Domain (Optional, 2 minutes)

1. In Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., `edgesof.com`)
3. Update DNS as instructed
4. SSL auto-configured ✅

---

## 🎨 Optional: Replace Assets

### Quick Asset Swap

```bash
# Clone repo
git clone https://github.com/vaibhaviimcal-web/edgesof-website.git
cd edgesof-website

# Download placeholder assets
cd public/assets
curl -o logo-white.png "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-15-24-961Z-040a87cc-nano-banana-pro_1764803724841.png"

curl -o hero-mockup.jpg "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-43-078Z-f3d325b3-nano-banana-pro_1764803862973.jpg"

curl -o case-emr.jpg "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-17-58-612Z-5f723e5d-nano-banana-pro_1764803878368.jpg"

curl -o case-krofta.png "https://nyc3.digitaloceanspaces.com/bhindi-drive/files/cab453ed-7d3e-4dfa-9012-038dbc50c1c5/2025-12-03T23-18-23-771Z-042b8388-nano-banana-pro_1764803903653.png"

# Commit and push
cd ../..
git add public/assets/
git commit -m "Add assets"
git push origin main
```

Vercel auto-deploys in ~2 minutes ✅

---

## 📧 Optional: Enable Email

### SendGrid Setup (5 minutes)

1. **Get API Key:**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create API key
   - Copy key

2. **Add to Vercel:**
   - Vercel Dashboard → Settings → Environment Variables
   - Add: `SENDGRID_API_KEY` = `your_key`
   - Add: `CONTACT_TO` = `hello@edgesof.com`
   - Redeploy

3. **Test:**
   ```bash
   curl -X POST https://your-site.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test"}'
   ```

---

## ✅ Deployment Checklist

- [ ] Site deployed to Vercel
- [ ] Contact form tested
- [ ] Assets uploaded (or using placeholders)
- [ ] Custom domain added (optional)
- [ ] Email configured (optional)
- [ ] Performance tested (Lighthouse)

---

## 🆘 Troubleshooting

**Build fails?**
- Check Vercel build logs
- Ensure Node.js 18+ selected

**Images not loading?**
- Assets need to be uploaded to `public/assets/`
- Use placeholder URLs from ASSETS_GUIDE.md

**Contact form not working?**
- Check Vercel function logs
- Verify environment variables
- Test with curl command above

---

## 📚 Full Documentation

- **Complete Setup:** README.md
- **Deployment Guide:** DEPLOYMENT.md
- **Asset Guide:** ASSETS_GUIDE.md
- **Project Summary:** PROJECT_SUMMARY.md

---

## 🎉 You're Live!

Your ultra-premium website is now live and ready to impress clients.

**Next Steps:**
1. Share your URL
2. Monitor analytics
3. Customize content as needed

**Need help?** hello@edgesof.com

---

**Deployed in minutes. Built to last.**