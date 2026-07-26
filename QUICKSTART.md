# 🎯 Quick Start Guide

## Immediate Next Steps

### 1. Install Dependencies (Already Done ✅)
```bash
npm install
```

### 2. Configure Web3Forms (REQUIRED)

**Get Your Free Access Key:**
1. Visit: https://web3forms.com
2. Enter your email
3. Click "Create Access Key"
4. Copy the access key (looks like: `abc123def-4567-8901-2345-67890abcdef`)

**Update the Code:**
- Open: `app/page.tsx`
- Find line **~470**: `access_key: 'YOUR_ACCESS_KEY_HERE'`
- Replace with: `access_key: 'your-actual-key-here'`

### 3. Update Contact Information

In `app/page.tsx`, find and replace:

**Footer Section (around line 530):**
```tsx
<li>📧 info@solitaire-edu.sg</li>          // ← Your email
<li>📱 WhatsApp: +65 XXXX XXXX</li>        // ← Your WhatsApp number
```

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 5. Test the Contact Form

1. Fill out the form
2. Submit
3. Check your email for the submission
4. ✅ If received = form is working!

---

## 🚀 Ready to Deploy?

### Fastest Way (Vercel - Recommended):

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! 🎉

### Build for Static Hosting:

```bash
npm run build
```

This creates an `/out` folder that can be hosted anywhere:
- Netlify (drag & drop the `/out` folder)
- GitHub Pages
- Cloudflare Pages
- Any web host

---

## 📁 Project Structure

```
solitaire-education/
├── app/
│   ├── page.tsx          ← Main website code (EDIT THIS)
│   ├── layout.tsx        ← SEO metadata
│   └── globals.css       ← Global styles
├── public/
│   ├── robots.txt        ← SEO
│   └── sitemap.xml       ← SEO
├── package.json          ← Dependencies
├── next.config.js        ← Next.js config
├── tailwind.config.ts    ← Styling config
└── README.md             ← Documentation
```

---

## 🎨 Customization Guide

### Change Brand Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#333366',    // Dark navy/indigo
  accent: '#FFD700',     // Gold
  background: '#f7f7f7', // Off-white
}
```

### Edit Content Sections

All content is in `app/page.tsx`:

- **Hero Section** (line ~130): Mission statement, CTA
- **Edge Section** (line ~200): Differentiating factors
- **Subject** (line ~280): H2 Physics program details
- **Success Stories** (line ~370): Student testimonials
- **Contact Form** (line ~430): Form fields

### Add More Subjects

In `app/page.tsx`, find `subjects` array (line ~280):
```typescript
const subjects: SubjectCard[] = [
  {
    id: 'physics',
    title: 'H2 Physics',
    // ... add your new subject
  },
]
```

---

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] Web3Forms access key configured
- [ ] Contact form tested and working
- [ ] Email address updated in footer
- [ ] WhatsApp number updated
- [ ] All content proofread
- [ ] Mobile responsive (test on phone)
- [ ] Site loads fast (< 3 seconds)
- [ ] No console errors in browser

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build and export static site
npm run build      # Creates /out folder

# Check for code issues
npm run lint

# Install new package
npm install package-name
```

---

## 📊 Performance Tips

### Before Launch:
1. Test on mobile devices
2. Run Lighthouse audit (Chrome DevTools → Lighthouse)
3. Target scores: 90+ across all metrics

### After Launch:
1. Add Google Analytics (optional)
2. Submit to Google Search Console
3. Monitor form submissions

---

## 🆘 Need Help?

**Common Issues:**

**Build fails:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Form not working:**
- Check Web3Forms access key
- View browser console for errors
- Verify email format validation

**Styling looks wrong:**
- Ensure Tailwind CSS installed
- Check `globals.css` imports
- Clear browser cache

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web3Forms Docs](https://docs.web3forms.com)

---

**🎉 You're all set! Start customizing and make it yours!**
