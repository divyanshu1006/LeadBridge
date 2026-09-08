# Product Requirements Document (PRD)
# LeadBridge — B2B Lead Generation & Appointment Setting

> **Version:** 1.0  
> **Author:** Divyanshu  
> **Date:** 2026-08-26  
> **Status:** Draft  

---

## 1. Executive Summary

**LeadBridge** is a B2B lead generation and appointment setting service focused on helping Delhi NCR industrial manufacturers and suppliers get qualified buyer meetings through targeted outreach.

This document outlines the requirements for the company's website — the primary digital asset for establishing credibility, explaining the service, capturing inbound leads, and converting visitors into paying clients.

---

## 2. Business Context

### 2.1 Business Model
| Attribute | Detail |
|-----------|--------|
| **Type** | B2B Service (Lead Generation / Appointment Setting) |
| **Target Customer** | Industrial manufacturers & suppliers in Delhi NCR |
| **Problem Solved** | Inconsistent sales pipeline, lack of qualified buyer meetings |
| **Core Offer** | "We help you get qualified buyer meetings through targeted outreach" |
| **Revenue Model** | Monthly retainer OR per-qualified-meeting fee |
| **Service Delivery** | Lead research → Outreach → Reply handling → Booking calls |

### 2.2 Business Stage
- **Phase:** Pre-launch / MVP
- **Priority:** Establish online credibility, generate inbound inquiries
- **Validation Goal:** Land first paying customer through the website + outreach

---

## 3. Website Objectives

### Primary Goals
1. **Credibility** — Look professional and trustworthy to industrial business owners
2. **Clarity** — Instantly communicate what we do, who we serve, and how we help
3. **Conversion** — Convert visitors into booked discovery calls or contact form submissions
4. **SEO Foundation** — Rank for local B2B lead generation keywords in Delhi NCR

### Success Metrics (KPIs)
| Metric | Target (Month 1-3) |
|--------|---------------------|
| Website live & functional | ✅ |
| Monthly unique visitors | 200+ |
| Contact form submissions | 10+ / month |
| Discovery calls booked | 5+ / month |
| Page load time | < 3 seconds |
| Mobile-friendly score | 90+ (Lighthouse) |

---

## 4. Target Audience

### 4.1 Primary Persona: "Rajesh — The Factory Owner"
| Attribute | Detail |
|-----------|--------|
| **Age** | 35–55 years |
| **Role** | Owner / Director / Sales Head |
| **Industry** | Manufacturing (auto parts, packaging, chemicals, textiles, machinery) |
| **Location** | Delhi NCR (Noida, Gurgaon, Faridabad, Ghaziabad, Manesar) |
| **Pain Points** | Relies on word-of-mouth, inconsistent orders, no systematic lead gen |
| **Tech Comfort** | Moderate — uses WhatsApp, basic browsing, IndiaMart |
| **Decision Driver** | ROI, trust, proof of results |
| **Language** | Hindi primary, English secondary |

### 4.2 Secondary Persona: "Amit — The Sales Manager"
- Reports to the owner, tasked with finding new buyers
- More digitally savvy, researches options online
- Needs to present a credible option to his boss

---

## 5. Website Structure & Pages

### 5.1 Sitemap

```
Home (Landing Page)
├── About Us
├── Services
│   ├── Lead Research & List Building
│   ├── Outreach Campaigns (Email + LinkedIn + WhatsApp)
│   ├── Reply Handling & Qualification
│   └── Appointment Setting & CRM Handoff
├── How It Works (Process)
├── Industries We Serve
├── Results / Case Studies (placeholder for future)
├── Pricing (optional — or "Book a Call to discuss")
├── Blog (SEO content — Phase 2)
├── Contact Us
└── Book a Discovery Call (CTA — all pages)
```

### 5.2 Page-by-Page Requirements

#### HOME PAGE
- **Hero Section**
  - Headline: Clear value proposition (e.g., "We Fill Your Sales Pipeline With Qualified Buyer Meetings")
  - Subheadline: "B2B lead generation for Delhi NCR manufacturers & suppliers"
  - Primary CTA: "Book a Free Discovery Call"
  - Secondary CTA: "See How It Works"
  - Background: Professional industrial/manufacturing imagery

- **Problem-Agitation Section**
  - Speak to the pain: "Tired of waiting for orders? Still relying on IndiaMart and word-of-mouth?"
  - 3-4 bullet points of common struggles

- **Solution Section**
  - What we do in 3 simple steps
  - Icons + short descriptions

- **Social Proof Section**
  - Testimonials (placeholder initially — "Results from our first clients coming soon")
  - Trust indicators: "Serving Delhi NCR", industry logos (placeholder)

- **Industries We Serve**
  - Grid of industry icons/cards

- **CTA Section**
  - "Ready to get more buyer meetings? Let's talk."
  - Calendar embed or contact form

- **Footer**
  - Contact info, social links, quick links, legal pages

#### ABOUT US PAGE
- Founder story — why this business exists
- Mission statement
- Values (transparency, results-first, local expertise)
- Photo of founder (builds trust with Indian B2B buyers)

#### SERVICES PAGE
- Detailed breakdown of each service
- Each service as a card/section with icon, title, description, inclusions, outcomes

#### HOW IT WORKS PAGE
- Step-by-step visual process (numbered timeline)
  1. Discovery Call — Understand your ideal buyer
  2. Lead Research — Build a targeted prospect list
  3. Outreach Campaign — Multi-channel outreach
  4. Reply Handling — Qualify and respond to interested buyers
  5. Meeting Booked — Qualified buyer meetings on your calendar

#### CONTACT PAGE
- Contact form (Name, Company, Phone, Email, Message)
- WhatsApp direct link (critical for Indian B2B)
- Phone number, Email address
- Service area map
- Calendly or Cal.com embed for booking calls

---

## 6. Functional Requirements

### 6.1 Must-Have (MVP)
| ID | Requirement | Priority |
|----|-------------|----------|
| F1 | Responsive design (mobile-first) | P0 |
| F2 | Contact form with email notification | P0 |
| F3 | WhatsApp click-to-chat button | P0 |
| F4 | Calendar booking integration (Calendly/Cal.com) | P0 |
| F5 | SEO-optimized meta tags, headings, alt text | P0 |
| F6 | Fast page load (< 3s) | P0 |
| F7 | Google Analytics / Tag Manager integration | P1 |
| F8 | SSL certificate (HTTPS) | P0 |
| F9 | Cookie consent banner | P1 |

### 6.2 Nice-to-Have (Phase 2)
| ID | Requirement | Priority |
|----|-------------|----------|
| F10 | Blog section with CMS | P2 |
| F11 | Live chat widget | P2 |
| F12 | Client portal / dashboard | P3 |
| F13 | Multi-language support (Hindi/English) | P2 |
| F14 | Lead magnet download (PDF guide) | P2 |
| F15 | Case study template pages | P2 |

---

## 7. Non-Functional Requirements

| Requirement | Specification |
|-------------|--------------|
| **Performance** | Lighthouse score ≥ 90 (Performance, Accessibility, SEO) |
| **Accessibility** | WCAG 2.1 AA compliance |
| **Browser Support** | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| **Mobile Support** | iOS Safari, Chrome Android |
| **Hosting** | Vercel (FREE tier) |
| **Domain** | Vercel subdomain initially (free), custom domain later |
| **Uptime** | 99.9% |
| **Security** | HTTPS, input sanitization, no exposed API keys |

> **⚠️ CONSTRAINT: FREE TIERS ONLY**
> All tools, services, and software must be free or have a free tier:
> - Vercel (free tier — 100GB bandwidth/month)
> - Resend (free — 100 emails/day) or EmailJS (free — 200 emails/month)
> - Cal.com (free tier) or Calendly (free tier)
> - Google Analytics 4 (free)
> - All npm packages (open source, free)
> - GitHub (free for public/private repos)
> - UptimeRobot (free — 50 monitors)

---

## 8. Design Requirements

### 8.1 Brand Identity
- **Tone:** Professional, trustworthy, results-oriented, approachable
- **Colors:** 
  - Primary: Deep Blue (`#1E3A5F`) — trust, professionalism
  - Secondary: Bright Orange (`#FF6B35`) — energy, action, CTAs
  - Neutral: White (`#FFFFFF`), Light Gray (`#F5F7FA`), Dark Gray (`#333333`)
- **Typography:**
  - Headings: Inter or Plus Jakarta Sans (bold, modern)
  - Body: Inter or DM Sans (clean, readable)
- **Imagery:** Industrial/manufacturing stock photos, professional but relatable

### 8.2 Design Principles
1. Clean & Minimal — No clutter, ample white space
2. Trust-First — Every element should build confidence
3. Action-Oriented — Clear CTAs on every section
4. Mobile-First — 60%+ traffic will be mobile
5. Fast — Optimize images, minimal JS, lazy loading

---

## 9. Tech Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js (App Router) | SEO, performance, React ecosystem |
| **Styling** | Tailwind CSS | Rapid development, consistent design |
| **UI Components** | shadcn/ui | Professional, accessible, customizable |
| **Animations** | Framer Motion | Subtle, professional animations |
| **Forms** | React Hook Form + Zod | Validation, type safety |
| **Email** | Resend or EmailJS | Contact form notifications |
| **Calendar** | Cal.com embed or Calendly | Appointment booking |
| **Analytics** | Google Analytics 4 | Traffic tracking |
| **Hosting** | Vercel | Free tier, fast CDN, auto-deploy |
| **CMS (Phase 2)** | MDX or Sanity | Blog content management |

---

## 10. Content Requirements

### 10.1 Copy Tone
- Speak directly to the factory owner / sales head
- Use "you" and "your" — make it personal
- Avoid jargon — keep it simple
- Include numbers and specifics where possible

### 10.2 Key Messages
1. "We bring qualified buyers to your door"
2. "No more waiting for orders — we fill your pipeline"
3. "Focused exclusively on Delhi NCR manufacturers"
4. "You focus on production, we focus on getting you meetings"
5. "Pay only for results" (if per-meeting model)

### 10.3 SEO Keywords (Target)
- B2B lead generation Delhi NCR
- Appointment setting for manufacturers India
- Sales leads for industrial suppliers
- B2B outreach services Delhi
- Buyer meetings for manufacturers
- Lead generation agency Noida/Gurgaon

---

## 11. Launch Plan

### Phase 1: MVP Website (Week 1-2)
- [ ] Set up project (Next.js + Tailwind + shadcn/ui)
- [ ] Build all core pages (Home, About, Services, How It Works, Contact)
- [ ] Implement contact form with email notification
- [ ] Add WhatsApp button
- [ ] Integrate calendar booking
- [ ] SEO optimization (meta tags, structured data)
- [ ] Deploy to Vercel
- [ ] Connect custom domain

### Phase 2: Content & SEO (Week 3-4)
- [ ] Write and publish 3 blog posts
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Create Google Business Profile

### Phase 3: Optimization (Month 2+)
- [ ] A/B test headlines and CTAs
- [ ] Add case studies as clients come in
- [ ] Implement live chat
- [ ] Add Hindi language option

---

## 12. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| No traffic initially | Low leads | Combine with manual outreach; don't rely solely on website |
| Low trust (new brand) | Poor conversion | Add founder photo, video intro, detailed about page |
| Scope creep | Delayed launch | Stick to MVP features; iterate after launch |
| Tech issues | Downtime | Use reliable hosting (Vercel), monitor uptime |
| Content gaps | Poor SEO | Plan content calendar, write consistently |

---

## 13. Appendix

### 13.1 Competitor Reference
- SalesNash, Belkins, CIENCE
- Local Delhi-based agencies on LinkedIn

### 13.2 Inspiration Websites
- belkins.io — clean B2B lead gen site
- saleshive.com — good process explanation
- cience.com — strong social proof layout

---

> **Next Steps:** Review this PRD, approve, then proceed to Brand Guidelines, Technical Architecture, and development.
