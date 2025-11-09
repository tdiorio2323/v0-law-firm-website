# Website Revamp Project Checklist
## TD STUDIOS

Complete roadmap for launching the new Next.js website

---

## 1️⃣ Phase 1: Content & Assets

### Replace Branding Assets
- [ ] **Replace firm logo**
  - [ ] Obtain logo files from attorney (SVG preferred, PNG fallback)
  - [ ] Save to `/public/logo.svg` and `/public/logo.png`
  - [ ] Update `components/header.tsx` logo reference
  - [ ] Update `components/footer.tsx` logo reference
  - [ ] Add favicon versions to `/public/` (favicon.ico, apple-touch-icon.png, favicon-16x16.png, favicon-32x32.png)
  - [ ] Update `app/layout.tsx` metadata with favicon links

- [ ] **Replace attorney photo**
  - [ ] Obtain professional headshot photo
  - [ ] Optimize for web (WebP format, ~150KB max)
  - [ ] Save to `/public/attorney-photo.jpg` (or .webp)
  - [ ] Update `app/about/page.tsx` image reference

### Update Site Configuration (`/lib/site.ts`)
- [ ] **Update hero messaging**
  - [ ] Decide on headline (current: "Vigilant Litigation. Results-Driven Representation." vs original: "Fiercely Protecting Your Freedom For Over 10 Years")
  - [ ] Update `siteConfig.hero.headline`
  - [ ] Review and finalize tagline

- [ ] **Add White-Collar Crimes practice area**
  - [ ] Add entry to `siteConfig.practiceAreas` array with title, slug, and description
  - [ ] Create `/app/practice-areas/white-collar-crimes/page.tsx`
  - [ ] Write detailed content for white-collar crimes page
  - [ ] Verify slug matches in navigation

- [ ] **Verify contact information**
  - [ ] Confirm phone number: (718) 530-6548
  - [ ] Confirm address: 40 Wall St, 32nd Fl, New York, NY 10005
  - [ ] Update email if needed (currently placeholder)
  - [ ] Confirm office hours

### Update Case Results (`/lib/results.ts`)
- [ ] **Replace placeholder results with actual cases**
  - [ ] Obtain approved case summaries from attorney
  - [ ] Ensure compliance with NY attorney advertising rules
  - [ ] Update each result object (id, title, description, outcome)
  - [ ] Add attorney advertising disclaimer if required

### Update About Page Content (`/app/about/page.tsx`)
- [ ] **Write detailed attorney bio**
  - [ ] Add 10+ years experience details
  - [ ] List bar admissions (NY, NJ, Federal courts)
  - [ ] Include education credentials
  - [ ] Emphasize "fighting for freedom" mission
  - [ ] Highlight personalized approach and dedication

### Gather Testimonials
- [ ] **Collect client testimonials**
  - [ ] Request 3-5 client reviews from attorney
  - [ ] Obtain permission for publication
  - [ ] Include client name/initial and case type (if allowed)
  - [ ] Save content for testimonials component

---

## 2️⃣ Phase 2: Features & Functionality

### Build Testimonials Section
- [ ] **Create testimonials carousel component**
  - [ ] Create `/components/testimonials.tsx`
  - [ ] Implement slider/carousel functionality (consider using embla-carousel-react or swiper)
  - [ ] Add navigation controls (prev/next arrows, dots)
  - [ ] Ensure mobile-responsive design
  - [ ] Add client testimonial content
  - [ ] Include gold accent styling to match theme

- [ ] **Add testimonials to homepage**
  - [ ] Import and add `<Testimonials />` to `/app/page.tsx`
  - [ ] Position after practice areas section
  - [ ] Test on all screen sizes

### Build Why Choose Us Section
- [ ] **Create Why Choose Us component**
  - [ ] Create `/components/why-choose-us.tsx`
  - [ ] Highlight key differentiators:
    - [ ] 10+ years dedication to clients
    - [ ] Personalized, aggressive representation
    - [ ] State & Federal court experience
    - [ ] 24/7 availability
  - [ ] Use icon + text layout (consider using lucide-react icons)
  - [ ] Match dark theme with gold accents

- [ ] **Add to homepage**
  - [ ] Import and add to `/app/page.tsx`
  - [ ] Position before or after testimonials
  - [ ] Test responsive layout

### Implement Functional Contact Form
- [ ] **Choose form submission service**
  - [ ] Decide: Resend (recommended for email), Formspree, or EmailJS
  - [ ] Sign up for chosen service and get API key

- [ ] **Set up Resend (if chosen)**
  - [ ] Install: `pnpm add resend`
  - [ ] Create `/app/api/contact/route.ts` API route
  - [ ] Add RESEND_API_KEY to environment variables
  - [ ] Configure email recipient (attorney's email)
  - [ ] Test email delivery

- [ ] **Update contact form component**
  - [ ] Modify `/components/contact-form.tsx`
  - [ ] Add form submission handler
  - [ ] Add client-side validation
  - [ ] Add loading state during submission
  - [ ] Add success message UI
  - [ ] Add error handling and error message UI
  - [ ] Test form submission end-to-end

### Add Google Maps to Contact Page
- [ ] **Embed Google Maps**
  - [ ] Get Google Maps embed iframe code for "40 Wall St, 32nd Fl, New York, NY 10005"
  - [ ] Add iframe to `/app/contact/page.tsx`
  - [ ] Style iframe to match site design
  - [ ] Ensure responsive sizing
  - [ ] Test map interaction

### Build Video Gallery
- [ ] **Gather video content**
  - [ ] Obtain video URLs from attorney (YouTube, Vimeo, etc.)
  - [ ] Get video titles and descriptions

- [ ] **Update On Video page**
  - [ ] Create video grid component in `/app/on-video/page.tsx`
  - [ ] Add video embeds (responsive iframe or next/image for thumbnails with modal)
  - [ ] Add video titles and descriptions
  - [ ] Implement responsive grid layout (1 col mobile, 2-3 cols desktop)
  - [ ] Test video playback

---

## 3️⃣ Phase 3: SEO & Compliance

### Implement Page-Specific Metadata
- [ ] **Update metadata for each page**
  - [ ] `/app/page.tsx` - Homepage with main keywords
  - [ ] `/app/about/page.tsx` - Attorney bio, credentials keywords
  - [ ] `/app/practice-areas/page.tsx` - All practice areas overview
  - [ ] `/app/practice-areas/criminal-defense/page.tsx` - Criminal defense keywords
  - [ ] `/app/practice-areas/civil-rights/page.tsx` - Civil rights keywords
  - [ ] `/app/practice-areas/employment-law/page.tsx` - Employment law keywords
  - [ ] `/app/practice-areas/complex-civil-litigation/page.tsx` - Civil litigation keywords
  - [ ] `/app/practice-areas/white-collar-crimes/page.tsx` - White-collar crime keywords
  - [ ] `/app/results/page.tsx` - Case results keywords
  - [ ] `/app/on-video/page.tsx` - Video content keywords
  - [ ] `/app/contact/page.tsx` - Contact, consultation keywords

- [ ] **Add Open Graph tags**
  - [ ] Add OG image (firm logo or custom social share image)
  - [ ] Add OG tags to `/app/layout.tsx` metadata
  - [ ] Test social media preview (Twitter, LinkedIn, Facebook)

### Update Sitemap & Robots
- [ ] **Update sitemap.ts**
  - [ ] Add white-collar-crimes practice area route
  - [ ] Verify all pages are included
  - [ ] Set appropriate priority values (homepage = 1.0, main pages = 0.8, etc.)
  - [ ] Set changeFrequency (monthly for practice areas, weekly for results)
  - [ ] Test sitemap generation: `http://localhost:3000/sitemap.xml`

- [ ] **Verify robots.txt**
  - [ ] Check `/app/robots.ts` configuration
  - [ ] Ensure all pages are crawlable
  - [ ] Test: `http://localhost:3000/robots.txt`

### Add Schema.org Structured Data
- [ ] **Create JSON-LD schema**
  - [ ] Create `/lib/schema.ts` with schema generation functions
  - [ ] Add Attorney schema (name, credentials, image)
  - [ ] Add LocalBusiness schema (address, phone, hours, geo coordinates)
  - [ ] Add LegalService schema (practice areas)
  - [ ] Add to `/app/layout.tsx` or relevant pages via `<script type="application/ld+json">`
  - [ ] Test with Google Rich Results Test tool

### Attorney Advertising Compliance
- [ ] **Add legal disclaimers**
  - [ ] Add disclaimer to Results page: "Past results do not guarantee future outcomes"
  - [ ] Add footer disclaimer if required by NY/NJ bar rules
  - [ ] Review all content for compliance with attorney advertising rules

- [ ] **Create legal pages**
  - [ ] Create `/app/privacy-policy/page.tsx` (required if collecting form data)
  - [ ] Create `/app/terms/page.tsx` (terms of use)
  - [ ] Create `/app/disclaimer/page.tsx` (attorney advertising disclaimer)
  - [ ] Add links to footer

### Accessibility Audit
- [ ] **Run Lighthouse accessibility audit**
  - [ ] Test all pages in Chrome DevTools Lighthouse
  - [ ] Fix any accessibility issues (aim for 90+ score)
  - [ ] Verify color contrast meets WCAG AA standards
  - [ ] Ensure all interactive elements have focus states
  - [ ] Test keyboard navigation (Tab, Enter, Escape)
  - [ ] Test with screen reader (macOS VoiceOver or NVDA)

### Performance Optimization
- [ ] **Run Lighthouse performance audit**
  - [ ] Test all pages for performance score
  - [ ] Optimize images (use WebP, proper sizing, lazy loading)
  - [ ] Minimize JavaScript bundle
  - [ ] Check Core Web Vitals (LCP, FID, CLS)
  - [ ] Test mobile performance
  - [ ] Aim for 90+ performance score

### Cross-Browser & Responsive Testing
- [ ] **Test on multiple browsers**
  - [ ] Chrome (desktop & mobile)
  - [ ] Safari (desktop & mobile iOS)
  - [ ] Firefox
  - [ ] Edge
  - [ ] Test mobile menu functionality
  - [ ] Verify contact form works on all browsers

- [ ] **Test responsive design**
  - [ ] Mobile (320px, 375px, 414px widths)
  - [ ] Tablet (768px, 1024px)
  - [ ] Desktop (1280px, 1920px)
  - [ ] Verify all sections stack/resize properly

---

## 4️⃣ Phase 4: Deployment & Launch

### Pre-Launch QA Testing
- [ ] **Content review**
  - [ ] Proofread all pages for typos and grammar
  - [ ] Verify all contact information is accurate
  - [ ] Check all links (internal and external)
  - [ ] Review with attorney for final approval

- [ ] **Functional testing checklist**
  - [ ] Homepage loads correctly
  - [ ] All navigation links work
  - [ ] Mobile menu opens/closes properly
  - [ ] Practice area pages display correctly
  - [ ] About page shows attorney photo and bio
  - [ ] Results page displays case results
  - [ ] On Video page shows videos (if added)
  - [ ] Contact form submits successfully
  - [ ] Contact form validation works
  - [ ] Success/error messages display
  - [ ] Google Maps embed loads on contact page
  - [ ] Phone number is clickable on mobile (tel: link)
  - [ ] Email is clickable (mailto: link)
  - [ ] Footer links work
  - [ ] Testimonial carousel functions
  - [ ] All images load properly
  - [ ] No console errors in browser DevTools

### Production Build Testing
- [ ] **Test local production build**
  - [ ] Run `pnpm build` and verify no build errors
  - [ ] Run `pnpm start` to test production server
  - [ ] Test all pages in production mode
  - [ ] Verify environment variables work (if using for contact form)
  - [ ] Check bundle size and optimize if needed

### Vercel Deployment Setup
- [ ] **Create Vercel account and connect project**
  - [ ] Sign up at vercel.com (or use existing account)
  - [ ] Install Vercel CLI: `pnpm add -g vercel`
  - [ ] Run `vercel` in project directory to deploy
  - [ ] Or connect GitHub repo for automatic deployments

- [ ] **Configure Vercel project**
  - [ ] Set build command: `pnpm build`
  - [ ] Set output directory: `.next`
  - [ ] Set install command: `pnpm install`
  - [ ] Add environment variables (RESEND_API_KEY, etc.)
  - [ ] Configure Node.js version if needed

- [ ] **Test preview deployment**
  - [ ] Deploy to Vercel preview URL
  - [ ] Test all functionality on preview
  - [ ] Share preview link with attorney for review
  - [ ] Fix any issues found in preview

### Custom Domain Configuration
- [ ] **Set up domain on Vercel**
  - [ ] Add domain `miriglianolaw.com` in Vercel project settings
  - [ ] Add `www.miriglianolaw.com` as well
  - [ ] Follow Vercel DNS configuration instructions

- [ ] **Update DNS settings**
  - [ ] Log in to domain registrar (GoDaddy, Namecheap, etc.)
  - [ ] Add Vercel DNS records (A record or CNAME)
  - [ ] Wait for DNS propagation (up to 48 hours, usually <1 hour)
  - [ ] Verify domain points to new site

- [ ] **Configure domain settings**
  - [ ] Set up www redirect (www → non-www or vice versa)
  - [ ] Enable automatic SSL certificate (Vercel handles this)
  - [ ] Test HTTPS works correctly
  - [ ] Test both www and non-www versions

### Set Up 301 Redirects (if needed)
- [ ] **Create redirect mapping**
  - [ ] Compare old site URLs vs new site URLs
  - [ ] Document any URL changes
  - [ ] Create `next.config.mjs` redirects if URLs changed
  - [ ] Test redirects from old URLs to new URLs

### Google Analytics & Search Console
- [ ] **Set up Google Analytics 4**
  - [ ] Create GA4 property at analytics.google.com
  - [ ] Get measurement ID (G-XXXXXXXXXX)
  - [ ] Add GA4 script to `/app/layout.tsx`
  - [ ] Set up conversion tracking (contact form submissions, phone clicks)
  - [ ] Test events are firing correctly

- [ ] **Set up Google Search Console**
  - [ ] Add property at search.google.com/search-console
  - [ ] Verify domain ownership (DNS or HTML tag)
  - [ ] Submit sitemap: `https://miriglianolaw.com/sitemap.xml`
  - [ ] Monitor indexing status

### Post-Launch Monitoring
- [ ] **Submit to search engines**
  - [ ] Google Search Console - request indexing for key pages
  - [ ] Bing Webmaster Tools - submit site and sitemap
  - [ ] Monitor search console for crawl errors

- [ ] **Monitor performance**
  - [ ] Check site speed (GTmetrix, PageSpeed Insights)
  - [ ] Monitor uptime (use Vercel analytics or UptimeRobot)
  - [ ] Review Google Analytics data weekly
  - [ ] Check for broken links (use Broken Link Checker)

- [ ] **Review analytics**
  - [ ] Track contact form submissions
  - [ ] Monitor phone click conversions
  - [ ] Review top pages and traffic sources
  - [ ] Analyze user behavior and bounce rates

- [ ] **Backup & rollback plan**
  - [ ] Keep old site accessible as backup
  - [ ] Document rollback procedure (re-point DNS)
  - [ ] Save all environment variables
  - [ ] Export current Vercel configuration

---

## 📋 Assets Needed from Attorney

**Required Assets:**
- [ ] Firm logo (SVG preferred, PNG fallback, transparent background)
- [ ] Professional headshot photo (high-res)
- [ ] Detailed bio (education, bar admissions, experience)
- [ ] 3-5 client testimonials (with permission to publish)
- [ ] Actual case results (approved for publication, compliant with advertising rules)
- [ ] Video content URLs for On Video page (YouTube/Vimeo links)
- [ ] Final approval on hero headline and tagline
- [ ] Recipient email address for contact form submissions

**Optional Assets:**
- [ ] Favicon variations (if different from logo)
- [ ] Social media Open Graph image (1200x630px)
- [ ] Additional practice area descriptions
- [ ] Any specific legal disclaimers or compliance text

---

## 🚀 Launch Day Checklist

- [ ] Final content proofread complete
- [ ] Attorney approval received
- [ ] All QA tests passed
- [ ] Production build successful
- [ ] Environment variables configured on Vercel
- [ ] Domain DNS updated and propagated
- [ ] SSL certificate active
- [ ] Google Analytics tracking live
- [ ] Search Console sitemap submitted
- [ ] Contact form tested and delivering emails
- [ ] All redirects working (if applicable)
- [ ] Backup plan documented
- [ ] Old site backed up
- [ ] Launch announcement prepared (optional)

---

## 📊 Success Metrics to Track

**Week 1 Post-Launch:**
- Site uptime and performance
- Contact form submissions
- Phone click conversions
- Google Analytics traffic
- Crawl errors in Search Console

**Month 1 Post-Launch:**
- Organic search rankings for key practice areas
- Bounce rate and time on site
- Most visited pages
- Conversion rate (contacts per visitor)
- Mobile vs desktop traffic

---

## 🔗 Important Links

- **Development:** http://localhost:3000
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Google Analytics:** https://analytics.google.com/
- **Search Console:** https://search.google.com/search-console
- **Repository:** [Add Git repo URL]

---

## 📞 Project Contacts

- **Developer:** [Your name/contact]
- **Domain Registrar:** [Company name & login info]
- **Hosting:** Vercel

---

**Last Updated:** [Date]
**Current Phase:** Phase 1 - Content & Assets
**Target Launch Date:** [Set date]
