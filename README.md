# Edgesof Solutions Website

Ultra-premium Next.js website for Edgesof Solutions - Digital systems engineered with precision and world-class craftsmanship.

## 🚀 Live Site

**Production URL:** [Will be updated after Vercel deployment]

## 📋 Features

- **Modern Stack:** Next.js 14, React 18
- **Ultra-Premium Design:** Dark theme with electric blue accents (#1A73E8)
- **Fully Responsive:** Optimized for all devices
- **Performance Optimized:** 95+ Lighthouse scores
- **SEO Ready:** Meta tags, OpenGraph, semantic HTML
- **Contact Form:** Multi-fallback system (SendGrid → Supabase → Logging)
- **Dynamic Case Studies:** File-based routing with detailed project showcases

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** CSS Modules with CSS Variables
- **Fonts:** Inter (Google Fonts)
- **Deployment:** Vercel
- **Email:** SendGrid (optional)
- **Database:** Supabase (optional fallback)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vaibhaviimcal-web/edgesof-website.git
   cd edgesof-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   
   Create a `.env.local` file in the root directory:
   ```env
   # SendGrid (Primary email service)
   SENDGRID_API_KEY=your_sendgrid_api_key
   SENDGRID_FROM=noreply@edgesof.com
   CONTACT_TO=hello@edgesof.com

   # Supabase (Fallback storage)
   SUPABASE_URL=your_supabase_url
   SUPABASE_API_KEY=your_supabase_anon_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set environment variables in Vercel Dashboard**
   - Go to your project settings
   - Navigate to Environment Variables
   - Add the variables from `.env.local` (if using email/database features)

### Alternative: GitHub Integration

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables
4. Deploy automatically on push to `main`

## 📧 Contact Form Configuration

The contact form has three fallback levels:

### Level 1: SendGrid (Recommended)
- Set `SENDGRID_API_KEY` in environment variables
- Sends professional HTML emails
- Best for production use

### Level 2: Supabase
- Set `SUPABASE_URL` and `SUPABASE_API_KEY`
- Stores submissions in database
- Good for tracking and backup

### Level 3: Logging
- No configuration needed
- Logs to Vercel/console
- Development fallback

**Note:** The form works without any configuration (uses logging fallback).

## 🎨 Customization

### Update Logo

Replace files in `public/assets/`:
- `logo-white.png` - Main logo (used in navigation)
- `logo-black.png` - Black variant
- `logo-accent.png` - Electric blue variant

Recommended size: 200x50px (PNG or SVG)

### Update Hero Image

Replace `public/assets/hero-mockup.jpg` with your image.

Recommended size: 1920x1080px (WebP or JPG)

### Update Case Study Screenshots

Replace files in `public/assets/`:
- `case-krofta.png`
- `case-emr.jpg`
- `hero-mockup.jpg` (also used for SaaS case)

Recommended size: 1600x900px (WebP or JPG)

### Modify Content

- **Home page:** `pages/index.js`
- **About page:** `pages/about.js`
- **Capabilities:** `pages/capabilities.js`
- **Work portfolio:** `pages/work.js`
- **Case studies:** `pages/case/[slug].js` (edit `caseStudies` object)
- **Contact page:** `pages/contact.js`

### Update Colors

Edit CSS variables in `styles/globals.css`:
```css
:root {
  --color-bg: #0A0A0A;
  --color-accent: #1A73E8;
  /* ... other variables */
}
```

## 📁 Project Structure

```
edgesof-website/
├── pages/
│   ├── _app.js           # Global layout and navigation
│   ├── index.js          # Home page
│   ├── about.js          # About page
│   ├── capabilities.js   # Capabilities page
│   ├── work.js           # Portfolio page
│   ├── contact.js        # Contact form page
│   ├── case/
│   │   └── [slug].js     # Dynamic case study pages
│   └── api/
│       └── contact.js    # Contact form API handler
├── styles/
│   └── globals.css       # Global styles and theme
├── public/
│   └── assets/           # Images and logos
├── package.json
├── next.config.js
└── README.md
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Image Optimization:** WebP with fallbacks
- **Caching:** Static assets cached for 1 year

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🔒 Security

- Environment variables for sensitive data
- Input validation on contact form
- Honeypot spam prevention
- Rate limiting headers
- HTTPS enforced on production

## 📄 License

© 2024 Edgesof Solutions Pvt Ltd. All rights reserved.

## 🤝 Support

For questions or support, contact: hello@edgesof.com

---

**Built with precision by Edgesof Solutions**