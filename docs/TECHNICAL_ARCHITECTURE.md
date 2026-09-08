# Technical Architecture Document
# LeadBridge Website

> **Version:** 1.0  
> **Date:** 2026-08-26  

---

## 1. Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    FRONTEND                          │
│  Next.js 15 (App Router) + React 19                 │
│  Tailwind CSS v4 + shadcn/ui                        │
│  Framer Motion (animations)                         │
├─────────────────────────────────────────────────────┤
│                   API LAYER                          │
│  Next.js API Routes (Route Handlers)                │
│  - POST /api/contact → Email notification           │
│  - POST /api/newsletter → Email list (Phase 2)      │
├─────────────────────────────────────────────────────┤
│                EXTERNAL SERVICES                     │
│  Resend / EmailJS → Email delivery                  │
│  Cal.com / Calendly → Appointment booking           │
│  Google Analytics 4 → Analytics                     │
│  Google Search Console → SEO monitoring             │
├─────────────────────────────────────────────────────┤
│                  DEPLOYMENT                          │
│  Vercel → Hosting, CDN, SSL, CI/CD                  │
│  GitHub → Source control                            │
│  Custom Domain → leadbridge.in                      │
└─────────────────────────────────────────────────────┘
```

---

## 2. Tech Stack Details

### 2.1 Core Framework

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15.x | Full-stack React framework |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Node.js** | 20.x LTS | Runtime |

**Why Next.js?**
- Server-side rendering (SSR) for SEO
- Static generation (SSG) for performance
- Built-in API routes for form handling
- Image optimization built-in
- Easy deployment on Vercel

### 2.2 Styling & UI

| Technology | Purpose |
|-----------|---------|
| **Tailwind CSS** v4 | Utility-first CSS framework |
| **shadcn/ui** | Accessible, customizable component library |
| **Lucide React** | Icon library |
| **Framer Motion** | Animation library |
| **clsx + tailwind-merge** | Conditional class utilities |

### 2.3 Forms & Validation

| Technology | Purpose |
|-----------|---------|
| **React Hook Form** | Performant form management |
| **Zod** | Schema validation |
| **Resend** or **EmailJS** | Email delivery on form submit |

### 2.4 SEO & Analytics

| Technology | Purpose |
|-----------|---------|
| **next/head** + metadata API | Meta tags, OG tags |
| **next-sitemap** | Auto-generate sitemap.xml |
| **JSON-LD** | Structured data (LocalBusiness schema) |
| **Google Analytics 4** | Traffic & conversion tracking |
| **Google Tag Manager** | Tag management (optional) |

---

## 3. Project Structure

```
happy-raman/
├── docs/                          # Project documentation
│   ├── PRD.md                     # Product Requirements
│   ├── BRAND_GUIDELINES.md        # Brand & design specs
│   ├── TECHNICAL_ARCHITECTURE.md  # This document
│   ├── CONTENT_COPY.md            # Website copy
│   └── DISASTER_RECOVERY.md       # Recovery procedures
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout (fonts, metadata, nav, footer)
│   │   ├── page.tsx               # Home page
│   │   ├── about/
│   │   │   └── page.tsx           # About Us
│   │   ├── services/
│   │   │   └── page.tsx           # Services
│   │   ├── how-it-works/
│   │   │   └── page.tsx           # Process page
│   │   ├── contact/
│   │   │   └── page.tsx           # Contact page
│   │   ├── industries/
│   │   │   └── page.tsx           # Industries page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts       # Contact form API
│   │
│   ├── components/                # Reusable components
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── layout/                # Layout components
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── mobile-menu.tsx
│   │   │   └── section-wrapper.tsx
│   │   ├── sections/              # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── problem-section.tsx
│   │   │   ├── solution-section.tsx
│   │   │   ├── services-grid.tsx
│   │   │   ├── process-steps.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── industries-grid.tsx
│   │   │   ├── cta-section.tsx
│   │   │   └── stats-section.tsx
│   │   ├── forms/                 # Form components
│   │   │   ├── contact-form.tsx
│   │   │   └── newsletter-form.tsx
│   │   └── shared/                # Shared components
│   │       ├── whatsapp-button.tsx
│   │       ├── scroll-to-top.tsx
│   │       └── loading-spinner.tsx
│   │
│   ├── lib/                       # Utilities & config
│   │   ├── utils.ts               # Utility functions (cn helper)
│   │   ├── constants.ts           # Site-wide constants
│   │   ├── validations.ts         # Zod schemas
│   │   └── metadata.ts            # SEO metadata helpers
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-scroll-spy.ts
│   │   └── use-media-query.ts
│   │
│   ├── styles/                    # Global styles
│   │   └── globals.css            # Tailwind directives + custom CSS
│   │
│   └── types/                     # TypeScript types
│       └── index.ts
│
├── public/                        # Static assets
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── industries/
│   │   └── team/
│   ├── icons/
│   │   ├── favicon.ico
│   │   ├── apple-touch-icon.png
│   │   └── og-image.png
│   ├── robots.txt
│   └── sitemap.xml (auto-generated)
│
├── .env.local                     # Environment variables (local)
├── .env.example                   # Env var template
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 4. Environment Variables

```bash
# .env.example

# Site
NEXT_PUBLIC_SITE_URL=https://leadbridge.in
NEXT_PUBLIC_SITE_NAME=LeadBridge

# Contact
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=hello@leadbridge.in
NEXT_PUBLIC_CONTACT_PHONE=+91-XXXXXXXXXX

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_FORM_TO_EMAIL=divyanshu@leadbridge.in

# Calendar
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/leadbridge/discovery
# OR
NEXT_PUBLIC_CALCOM_URL=https://cal.com/leadbridge/discovery

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Meta
NEXT_PUBLIC_OG_IMAGE=/icons/og-image.png
```

---

## 5. API Routes

### POST /api/contact

```typescript
// Request
{
  name: string;        // Required, min 2 chars
  company: string;     // Optional
  email: string;       // Required, valid email
  phone: string;       // Required, valid Indian phone
  message: string;     // Required, min 10 chars
}

// Response (Success)
{ success: true, message: "We'll get back to you within 24 hours" }

// Response (Error)
{ success: false, error: "Validation failed", details: [...] }
```

### Rate Limiting
- Max 5 submissions per IP per hour
- Honeypot field for bot prevention
- Basic CSRF protection

---

## 6. Performance Budget

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Time to Interactive (TTI) | < 3.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total Bundle Size (JS) | < 200KB gzipped |
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |

### Performance Strategies
1. **Static Generation (SSG)** for all pages (no dynamic data needed)
2. **Image Optimization** via `next/image` with WebP/AVIF
3. **Font Optimization** via `next/font` (no FOUT/FOIT)
4. **Code Splitting** automatic via Next.js
5. **Lazy Loading** for below-the-fold sections
6. **Preconnect** to external origins (analytics, fonts)

---

## 7. SEO Architecture

### Meta Tags (per page)
```html
<title>{Page Title} | LeadBridge - B2B Lead Generation Delhi NCR</title>
<meta name="description" content="{Page-specific description, 150-160 chars}" />
<meta name="keywords" content="{Relevant keywords}" />
<link rel="canonical" href="https://leadbridge.in/{path}" />

<!-- Open Graph -->
<meta property="og:title" content="{Title}" />
<meta property="og:description" content="{Description}" />
<meta property="og:image" content="https://leadbridge.in/icons/og-image.png" />
<meta property="og:type" content="website" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LeadBridge",
  "description": "B2B lead generation and appointment setting for Delhi NCR manufacturers",
  "url": "https://leadbridge.in",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi NCR",
    "addressCountry": "IN"
  },
  "areaServed": "Delhi NCR",
  "serviceType": ["Lead Generation", "Appointment Setting", "B2B Sales"]
}
```

---

## 8. Deployment Pipeline

```
Developer Push → GitHub → Vercel Auto-Deploy → Live

Branch Strategy:
├── main          → Production (leadbridge.in)
├── staging       → Preview (staging.leadbridge.in)  
└── feature/*     → Preview deployments
```

### Vercel Configuration
- **Framework Preset:** Next.js
- **Build Command:** `pnpm build`
- **Output Directory:** `.next`
- **Node Version:** 20.x
- **Region:** Mumbai (closest to Delhi NCR users)

---

## 9. Monitoring & Observability

| Tool | Purpose |
|------|---------|
| **Vercel Analytics** | Web vitals, real-user monitoring |
| **Google Analytics 4** | Traffic, conversions, user behavior |
| **Google Search Console** | SEO performance, indexing |
| **UptimeRobot** (free) | Uptime monitoring, alerts |
| **Sentry** (Phase 2) | Error tracking |

---

## 10. Security Considerations

| Area | Measure |
|------|---------|
| **HTTPS** | Enforced via Vercel (automatic SSL) |
| **Headers** | CSP, X-Frame-Options, HSTS |
| **API** | Rate limiting, input sanitization |
| **Env Vars** | Never exposed to client (prefix rules) |
| **Dependencies** | Regular `pnpm audit`, Dependabot |
| **Forms** | Honeypot fields, server-side validation |

---

> This architecture is designed for simplicity, performance, and easy iteration as the business grows.
