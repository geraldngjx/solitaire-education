# 🚀 Deployment Guide - Solitaire Education Website

## Prerequisites Checklist

Before deploying, ensure you have completed:

- [ ] Obtained Web3Forms Access Key
- [ ] Updated `app/page.tsx` with your Web3Forms access key
- [ ] Tested the contact form locally
- [ ] Reviewed all content for accuracy
- [ ] Updated contact information (email, phone, WhatsApp)
- [ ] Added Google Search Console verification code (optional)
- [ ] Pushed code to GitHub repository

---

## 📋 Pre-Deployment Setup

### 1. Web3Forms Configuration (CRITICAL)

1. Visit [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new form and get your **Access Key**
4. Open `app/page.tsx`
5. Find line **~470**: `access_key: 'YOUR_ACCESS_KEY_HERE'`
6. Replace with your actual key: `access_key: 'abc123-your-actual-key'`

### 2. Update Contact Information

In `app/page.tsx`, search for and update:
- Email: `info@solitaire-edu.sg`
- WhatsApp: `+65 XXXX XXXX`
- Mobile numbers in Footer section

### 3. Test Locally

```bash
npm run dev
```

- Navigate to http://localhost:3000
- Test the contact form submission
- Check mobile responsiveness
- Verify all sections display correctly

---

## 🌐 Deployment to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Solitaire Education website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/solitaire-education.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `solitaire-edu.sg`)
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🔧 Alternative Hosting Platforms

### Netlify

1. **Build the static site**
   ```bash
   npm run build
   ```

2. **Deploy the `/out` folder**
   - Drag and drop the `/out` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Or use Netlify CLI:
     ```bash
     npm i -g netlify-cli
     netlify deploy --dir=out --prod
     ```

### GitHub Pages

1. **Update `next.config.js`** (if using subdirectory):
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/solitaire-education', // Your repo name
     images: { unoptimized: true },
   }
   ```

2. **Build and deploy**
   ```bash
   npm run build
   # Push the /out folder to gh-pages branch
   ```

### Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy

---

## 📊 Post-Deployment SEO Setup

### 1. Google Search Console

1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Verify ownership using HTML tag method:
   - Copy verification code
   - Update `app/layout.tsx` → `verification.google` with your code
   - Redeploy

4. Submit sitemap:
   - URL: `https://your-domain.com/sitemap.xml`

### 2. Google Analytics (Optional)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   ```

### 3. Social Media Meta Tags Validation

Test your Open Graph tags:
- Facebook: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
- Twitter: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- LinkedIn: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)

---

## ✅ Post-Deployment Checklist

- [ ] Website loads at production URL
- [ ] Contact form successfully sends emails
- [ ] All navigation links work
- [ ] Mobile responsive on various devices
- [ ] Page loads in under 3 seconds
- [ ] No console errors in browser
- [ ] Images display correctly
- [ ] SEO meta tags present (view source)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Google Search Console verified
- [ ] Submitted sitemap to Google

---

## 🔍 Testing URLs

After deployment, test these URLs:

- Homepage: `https://your-domain.com/`
- Sitemap: `https://your-domain.com/sitemap.xml`
- Robots: `https://your-domain.com/robots.txt`

---

## 📈 Performance Optimization

### Run Lighthouse Audit

1. Open Chrome DevTools (F12)
2. Navigate to "Lighthouse" tab
3. Click "Generate report"
4. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

### Common Issues & Fixes

**Slow load times:**
- Ensure images are optimized
- Check Vercel region settings
- Enable compression

**Form not working:**
- Verify Web3Forms access key
- Check browser console for errors
- Ensure CORS is not blocking requests

---

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Form Submission Errors

Check:
1. Web3Forms access key is correct
2. Email field has valid format validation
3. No ad blockers interfering
4. Check Web3Forms dashboard for submissions

### SEO Issues

1. Verify meta tags in browser source code
2. Test with [metatags.io](https://metatags.io)
3. Ensure sitemap is accessible
4. Check Google Search Console for crawl errors

---

## 📞 Support

For deployment issues:
- Vercel Docs: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Web3Forms Docs: [docs.web3forms.com](https://docs.web3forms.com)
- Next.js Discord: [nextjs.org/discord](https://nextjs.org/discord)

---

**🎉 Congratulations! Your Solitaire Education website is now live!**
