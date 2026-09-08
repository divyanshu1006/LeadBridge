# Brand Guidelines
# LeadBridge — Visual Identity & Voice

> **Version:** 1.0  
> **Date:** 2026-08-26  

---

## 1. Brand Name

**LeadBridge**  
*Bridging manufacturers with qualified buyers*

### Name Rationale
- "Lead" — sales leads, leading the way
- "Bridge" — connecting manufacturers to buyers, bridging the gap

### Acceptable Usage
- ✅ LeadBridge (PascalCase, one word)
- ✅ LEADBRIDGE (all caps in logos)
- ❌ Lead Bridge (two words)
- ❌ leadbridge (all lowercase in copy)

---

## 2. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Navy Blue | `#1E3A5F` | 30, 58, 95 | Headers, primary text, nav, footer |
| Deep Blue | `#0F2847` | 15, 40, 71 | Dark backgrounds, hover states |
| Royal Blue | `#2563EB` | 37, 99, 235 | Links, accents, highlights |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Bright Orange | `#FF6B35` | 255, 107, 53 | Primary CTAs, buttons, highlights |
| Warm Orange | `#E85D26` | 232, 93, 38 | CTA hover states |
| Amber | `#F59E0B` | 245, 158, 11 | Stars, ratings, secondary accents |

### Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| White | `#FFFFFF` | 255, 255, 255 | Backgrounds, cards |
| Snow | `#F8FAFC` | 248, 250, 252 | Alt section backgrounds |
| Light Gray | `#F1F5F9` | 241, 245, 249 | Card backgrounds, dividers |
| Medium Gray | `#94A3B8` | 148, 163, 184 | Secondary text, placeholders |
| Dark Gray | `#334155` | 51, 65, 85 | Body text |
| Near Black | `#0F172A` | 15, 23, 42 | Headings |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| Success Green | `#10B981` | Success messages, check marks |
| Error Red | `#EF4444` | Error states, validation |
| Warning Yellow | `#F59E0B` | Warning notices |
| Info Blue | `#3B82F6` | Information callouts |

---

## 3. Typography

### Font Stack

```css
/* Headings */
font-family: 'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif;

/* Body */
font-family: 'Inter', 'DM Sans', system-ui, -apple-system, sans-serif;

/* Code / Monospace */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 (Hero) | 56px / 3.5rem | 36px / 2.25rem | 800 (ExtraBold) | 1.1 |
| H2 (Section) | 40px / 2.5rem | 28px / 1.75rem | 700 (Bold) | 1.2 |
| H3 (Subsection) | 28px / 1.75rem | 22px / 1.375rem | 600 (SemiBold) | 1.3 |
| H4 (Card Title) | 20px / 1.25rem | 18px / 1.125rem | 600 (SemiBold) | 1.4 |
| Body (Large) | 18px / 1.125rem | 16px / 1rem | 400 (Regular) | 1.7 |
| Body (Regular) | 16px / 1rem | 15px / 0.9375rem | 400 (Regular) | 1.6 |
| Body (Small) | 14px / 0.875rem | 13px / 0.8125rem | 400 (Regular) | 1.5 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 500 (Medium) | 1.4 |

---

## 4. Spacing System

Based on 4px grid:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Inline spacing |
| `space-3` | 12px | Small padding |
| `space-4` | 16px | Standard padding |
| `space-6` | 24px | Section padding (mobile) |
| `space-8` | 32px | Card padding |
| `space-12` | 48px | Section gaps |
| `space-16` | 64px | Section padding (desktop) |
| `space-20` | 80px | Large section gaps |
| `space-24` | 96px | Hero padding |

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Tags, badges |
| `rounded-md` | 8px | Buttons, inputs |
| `rounded-lg` | 12px | Cards |
| `rounded-xl` | 16px | Feature cards |
| `rounded-2xl` | 24px | Hero cards, modals |
| `rounded-full` | 9999px | Avatars, pills |

---

## 6. Shadows

```css
/* Card Shadow */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);

/* Elevated Card */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06);

/* Modal / Dropdown */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);

/* CTA Button Glow */
box-shadow: 0 4px 14px rgba(255, 107, 53, 0.4);
```

---

## 7. Button Styles

### Primary CTA
- Background: `#FF6B35` (Orange)
- Text: `#FFFFFF` (White)
- Border Radius: 8px
- Padding: 12px 28px
- Font: 16px / SemiBold
- Hover: `#E85D26` + slight shadow
- Active: Scale 0.98

### Secondary CTA
- Background: Transparent
- Border: 2px solid `#1E3A5F`
- Text: `#1E3A5F`
- Hover: Fill `#1E3A5F`, text `#FFFFFF`

### Ghost Button
- Background: Transparent
- Text: `#2563EB`
- Hover: Background `#F1F5F9`

---

## 8. Brand Voice & Tone

### Voice Characteristics
| Trait | Description | Example |
|-------|-------------|---------|
| **Direct** | No fluff, get to the point | "We get you buyer meetings. Period." |
| **Confident** | We know what we're doing | "Our process works because we've refined it" |
| **Approachable** | Not corporate, not casual | "Let's talk about growing your sales" |
| **Results-Focused** | Always tie back to outcomes | "3 qualified meetings in your first month" |

### Tone by Context
| Context | Tone | Example |
|---------|------|---------|
| Hero headline | Bold, punchy | "Stop Chasing. Start Closing." |
| Service description | Clear, informative | "We research and identify your ideal buyers..." |
| Testimonial | Authentic, relatable | "Finally, someone who understands manufacturing sales" |
| CTA | Urgent, inviting | "Book your free strategy call today" |
| Error message | Helpful, calm | "Oops! Please check your phone number" |

### Words to Use ✅
- Qualified, targeted, meetings, pipeline, results
- Grow, scale, consistent, reliable, proven
- Your buyers, your calendar, your growth

### Words to Avoid ❌
- Synergy, leverage, paradigm (corporate jargon)
- Cheap, discount, free trial (devalues service)
- AI-powered, revolutionary, disruptive (overpromising)
- Guaranteed (legal risk)

---

## 9. Imagery Guidelines

### Photography Style
- **Do:** Show real factories, workshops, handshakes, meetings
- **Do:** Use warm, well-lit photos with natural tones
- **Do:** Show Indian business contexts (culturally relevant)
- **Don't:** Use generic Western corporate stock photos
- **Don't:** Use overly staged or artificial-looking images
- **Don't:** Use low-resolution or watermarked images

### Icon Style
- Line icons (not filled)
- 2px stroke weight
- Rounded corners
- Use Lucide React icon library (consistent with shadcn/ui)

---

## 10. Logo Guidelines

### Logo Concept
- Text-based logo: "LeadBridge" in Plus Jakarta Sans Bold
- Optional icon: Abstract bridge / connecting dots motif
- Colors: Navy Blue primary, Orange accent on the "Bridge" part

### Clear Space
- Minimum clear space = height of the "L" character on all sides

### Minimum Size
- Digital: 120px wide minimum
- Print: 30mm wide minimum

---

> This document should be referenced by all designers and developers working on the LeadBridge brand.
