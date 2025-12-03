# Deployment Guide - Edgesof Solutions Website

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with your GitHub account

2. **Import Git Repository**
   - Click "Import Project"
   - Select the `edgesof-website` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables** (Optional)
   
   Click "Environment Variables" and add:
   
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   SENDGRID_FROM=noreply@edgesof.com
   CONTACT_TO=hello@edgesof.com
   ```
   
   Or for Supabase fallback:
   ```
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_API_KEY=your_supabase_anon_key
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `https://edgesof-website.vercel.app`

### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Link to Existing Project**
   ```bash
   vercel link
   ```
   - Select your team/account
   - Link to existing project: `edgesof-website`

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

5. **Set Environment Variables**
   ```bash
   vercel env add SENDGRID_API_KEY production
   vercel env add CONTACT_TO production
   ```

## 🔧 Post-Deployment Setup

### 1. Configure Custom Domain (Optional)

In Vercel Dashboard:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `edgesof.com`)
3. Update DNS records as instructed
4. Wait for SSL certificate provisioning (automatic)

### 2. Test Contact Form

Send a test submission:
```bash
curl -X POST https://your-deployment-url.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "method": "sendgrid"
}
```

### 3. Monitor Deployments

- **Deployment Logs:** Vercel Dashboard → Deployments → [Select deployment] → Logs
- **Function Logs:** Vercel Dashboard → Deployments → [Select deployment] → Functions
- **Analytics:** Vercel Dashboard → Analytics (requires Pro plan)

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel automatically:
- Deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Runs build checks before deployment

### Deployment Workflow

```
git add .
git commit -m "Update content"
git push origin main
→ Vercel automatically builds and deploys
→ Live in ~2 minutes
```

## 📊 Deployment Checklist

- [ ] Repository connected to Vercel
- [ ] Environment variables configured
- [ ] First deployment successful
- [ ] Contact form tested
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Assets loading correctly
- [ ] All pages accessible
- [ ] Mobile responsive verified
- [ ] Performance metrics checked (Lighthouse)

## 🛠️ Troubleshooting

### Build Fails

**Error:** `Module not found`
- **Solution:** Run `npm install` locally and commit `package-lock.json`

**Error:** `Build exceeded maximum duration`
- **Solution:** Optimize images, reduce dependencies

### Contact Form Not Working

**Issue:** Form submits but no email received
- **Check:** Environment variables are set in Vercel Dashboard
- **Check:** SendGrid API key is valid
- **Check:** Vercel function logs for errors

### Images Not Loading

**Issue:** 404 errors for images
- **Check:** Files exist in `public/assets/` directory
- **Check:** File names match exactly (case-sensitive)
- **Solution:** Download placeholder images from asset URLs in `public/assets/.gitkeep`

## 📈 Performance Optimization

### After Deployment

1. **Run Lighthouse Audit**
   - Open site in Chrome
   - DevTools → Lighthouse → Generate Report
   - Target: 95+ score

2. **Optimize Images**
   - Convert to WebP format
   - Use appropriate dimensions
   - Enable Vercel Image Optimization

3. **Enable Analytics**
   - Vercel Dashboard → Analytics → Enable
   - Monitor Core Web Vitals

## 🔐 Security Best Practices

- ✅ Environment variables stored in Vercel (not in code)
- ✅ HTTPS enforced automatically
- ✅ API routes protected with validation
- ✅ Honeypot spam prevention active
- ✅ Input sanitization implemented

## 📞 Support

**Deployment Issues:**
- Vercel Status: [vercel-status.com](https://www.vercel-status.com/)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)

**Project Issues:**
- Email: hello@edgesof.com
- GitHub Issues: [github.com/vaibhaviimcal-web/edgesof-website/issues](https://github.com/vaibhaviimcal-web/edgesof-website/issues)

---

**Last Updated:** December 2024