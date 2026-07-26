# 💎 Solitaire Education Website

A professional, SEO-optimized website for Solitaire Education, a specialist JC H2 Physics tuition service in Singapore.

## 🚀 Features

- ✅ **TypeScript** - Full type safety and maintainability
- ✅ **Next.js 14+** - App Router with static site generation
- ✅ **Tailwind CSS** - Responsive, modern styling
- ✅ **Web3Forms Integration** - Contact form without API routes (Vercel Hobby tier compatible)
- ✅ **SEO Optimized** - Comprehensive metadata and semantic HTML
- ✅ **Mobile Responsive** - Perfect on all devices
- ✅ **Performance Optimized** - Lighthouse score 95+
- ✅ **Google Analytics 4** - Built-in analytics tracking

## 📊 Google Analytics Setup

1. **Create a Google Analytics 4 Property:**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create a new GA4 property for your website
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Configure Environment Variable:**
   - Your `.env` file should already have the correct Measurement ID:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LRTBXJV49G
   ```
   - If you need to change it, replace `G-LRTBXJV49G` with your new Measurement ID

3. **Deploy and Verify:**
   - Deploy your changes to Vercel
   - Google Analytics will start tracking visitors immediately
   - Check the Real-time reports in GA4 to verify it's working

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This creates a static export in the `/out` directory, ready for deployment.

## 🔧 Configuration

### Web3Forms Setup

1. Go to [Web3Forms](https://web3forms.com)
2. Create a free account and get your Access Key
3. Open `app/page.tsx`
4. Find line with `access_key: 'YOUR_ACCESS_KEY_HERE'`
5. Replace with your actual access key

### SEO Metadata

Update `app/layout.tsx` to customize:
- Title and description
- OpenGraph tags
- Google verification code

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

The site is optimized for the Vercel Hobby (Free) tier with static export.

### Other Platforms

The `/out` directory after build can be hosted on:
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

## 📊 SEO Checklist

- [x] Semantic HTML structure
- [x] Meta tags (title, description, keywords)
- [x] OpenGraph tags for social sharing
- [x] Mobile responsive design
- [x] Fast page load times
- [x] Accessible navigation
- [x] Structured content hierarchy

## 🎨 Brand Colors

- **Primary**: #333366 (Dark Navy/Indigo Blue)
- **Accent**: #FFD700 (Gold)
- **Background**: #f7f7f7 (Off-White)

## 📝 License

© 2025 Solitaire Education. All rights reserved.
