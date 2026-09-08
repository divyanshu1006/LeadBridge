# Project README
# LeadBridge — B2B Lead Generation Website

> B2B Lead Generation & Appointment Setting for Delhi NCR Manufacturers

---

## 🎯 About

LeadBridge helps industrial manufacturers and suppliers in Delhi NCR get qualified buyer meetings through targeted outreach. This repository contains the website source code.

## 📁 Project Documentation

| Document | Purpose |
|----------|---------|
| [PRD](docs/PRD.md) | Product requirements, features, personas |
| [Brand Guidelines](docs/BRAND_GUIDELINES.md) | Colors, typography, voice, imagery |
| [Technical Architecture](docs/TECHNICAL_ARCHITECTURE.md) | Tech stack, project structure, APIs |
| [Content Copy](docs/CONTENT_COPY.md) | All page copy and messaging |
| [Disaster Recovery](docs/DISASTER_RECOVERY.md) | Recovery procedures, backups, maintenance |

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Hosting:** Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x LTS
- pnpm (`npm install -g pnpm`)

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/leadbridge-website.git
cd leadbridge-website

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
pnpm dev
```

### Available Scripts
```bash
pnpm dev        # Start dev server (http://localhost:3000)
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm format     # Run Prettier
```

## 📂 Project Structure

```
src/
├── app/            # Next.js pages and API routes
├── components/     # Reusable React components
│   ├── ui/         # shadcn/ui base components
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Page sections (Hero, Services, etc.)
│   ├── forms/      # Contact form, newsletter
│   └── shared/     # WhatsApp button, etc.
├── lib/            # Utilities, constants, validation
├── hooks/          # Custom React hooks
├── styles/         # Global CSS
└── types/          # TypeScript types
```

## 🌐 Deployment

This project deploys automatically to Vercel on push to `main`.

| Branch | Environment |
|--------|-------------|
| `main` | Production |
| `staging` | Preview |
| `feature/*` | Preview |

## 📄 License

Private — All rights reserved.

---

Built with ❤️ for Delhi NCR manufacturers.
