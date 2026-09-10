export const siteConfig = {
  name: "LeadBridge NCR",
  shortName: "LeadBridge NCR",
  tagline: "Outbound Pipeline for Delhi NCR Recruitment Agencies",
  description:
    "We build targeted outbound systems designed to create conversations with companies actively hiring — so your staffing firm spends less time prospecting and more time placing candidates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://leadbridgencr.vercel.app",
  email: "leadbridgencr@zohomail.in",
  phone: "",
  whatsappNumber: "",
  calendlyUrl: "https://calendly.com/leadbridgencr/discovery",
  location: "Delhi NCR (Noida, Gurgaon, Faridabad, Greater Noida, Ghaziabad)",
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const transparencyGuarantees = [
  {
    title: "Pilot-First Engagement",
    description:
      "Every new partnership starts as a structured pilot. We earn long-term trust through real conversations delivered, not promises made upfront.",
  },
  {
    title: "Full Campaign Visibility",
    description:
      "You review every target company list and approve outreach messaging before a single message is sent. Zero black boxes.",
  },
  {
    title: "No Fabricated Metrics",
    description:
      "We will never claim inflated numbers, fake testimonials, or unverified results. Our proof comes from the work we do together.",
  },
  {
    title: "You Own Your Data",
    description:
      "Every prospect list, outreach sequence, and conversation log belongs to you. Cancel anytime — your pipeline stays with you.",
  },
] as const;

export const services = [
  {
    icon: "Search",
    title: "Hiring-Company Research & Identification",
    description:
      "We identify companies in Delhi NCR that are actively hiring in your recruitment vertical — then verify the decision-makers who approve staffing partnerships.",
    includes: [
      "Custom Ideal Client Profile (ICP) definition for your staffing niche",
      "Manual research across LinkedIn, job boards, and company career pages",
      "Decision-maker identification (HR Heads, Talent Acquisition Leads, Founders)",
      "Verification of active hiring signals (open roles, growth indicators)",
      "Complete prospect list review and approval by you before outreach",
    ],
    outcome: "A curated list of verified hiring companies ready for professional outreach.",
  },
  {
    icon: "Send",
    title: "Professional Multi-Channel Outreach",
    description:
      "We write and execute personalized outreach sequences across Email, LinkedIn, and WhatsApp — the channels that work for B2B services in India.",
    includes: [
      "Customised, consultative messaging sequences (3–5 touchpoints)",
      "LinkedIn connection requests and professional introductions",
      "Direct WhatsApp follow-ups for warm interested prospects",
      "Continuous message testing and refinement based on response data",
      "Weekly transparent progress reports with full pipeline visibility",
    ],
    outcome: "Your agency positioned directly in front of companies with active hiring needs.",
  },
  {
    icon: "MessageSquare",
    title: "Reply Management & Qualification",
    description:
      "When companies respond, we manage the conversation professionally — qualifying their hiring volume, timeline, and decision-making process before booking your time.",
    includes: [
      "Rapid reply monitoring across all active channels",
      "Interest qualification (hiring volume, roles, urgency, budget authority)",
      "Preliminary questions answered on your agency's capabilities",
      "Low-intent and price-shopping inquiries filtered out",
      "Real-time alerts when high-potential companies express interest",
    ],
    outcome: "Only qualified conversations with companies that have genuine staffing needs.",
  },
  {
    icon: "CalendarCheck",
    title: "Meeting Booking & Pre-Call Briefing",
    description:
      "The deliverable: we coordinate schedules and place confirmed meetings directly on your calendar — along with a pre-call brief so you walk in prepared.",
    includes: [
      "Calendar coordination and meeting invite dispatch",
      "Pre-meeting brief covering company profile, hiring needs, and team size",
      "Automated reminders to minimise no-shows",
      "Post-meeting feedback loop to sharpen ongoing targeting",
      "Transparent monthly pipeline review",
    ],
    outcome: "Meetings on your calendar with hiring-company decision-makers ready to talk staffing.",
  },
] as const;

export const verticals = [
  { icon: "Monitor", name: "IT & Technology Staffing", description: "Connect with companies hiring software engineers, data scientists, DevOps, and QA teams" },
  { icon: "Stethoscope", name: "Healthcare & Pharma Staffing", description: "Reach hospitals, clinics, and pharmaceutical companies with active clinical and administrative hiring" },
  { icon: "Landmark", name: "Banking, Finance & Insurance", description: "Target BFSI companies scaling operations, compliance, and customer-facing teams" },
  { icon: "Factory", name: "Manufacturing & Engineering", description: "Find factories and engineering firms hiring production, maintenance, and plant operations staff" },
  { icon: "ShoppingBag", name: "Retail & E-Commerce", description: "Connect with brands and platforms scaling warehouse, logistics, and store operations teams" },
  { icon: "Building2", name: "Real Estate & Infrastructure", description: "Reach developers, construction firms, and property companies with project-based hiring needs" },
  { icon: "GraduationCap", name: "Education & EdTech", description: "Target schools, universities, and edtech platforms hiring faculty, trainers, and content teams" },
  { icon: "Briefcase", name: "Executive Search & Leadership", description: "Identify companies seeking C-suite, VP, and senior leadership placements" },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "10-Minute Alignment Call",
    description:
      "We learn about your agency — which verticals you serve, what kind of companies you want to work with, and what a good client looks like for your team.",
    duration: "Day 1",
  },
  {
    step: 2,
    title: "Target Company Research",
    description:
      "We build a curated list of companies in Delhi NCR actively hiring in your verticals — verified through LinkedIn, career pages, and job boards.",
    duration: "Day 2–5",
  },
  {
    step: 3,
    title: "Messaging & Infrastructure Setup",
    description:
      "We draft professional outreach scripts tailored to your agency's positioning, configure outreach tools, and set up multi-channel sequences.",
    duration: "Day 5–8",
  },
  {
    step: 4,
    title: "Outreach Goes Live",
    description:
      "Personalised campaigns launch across Email, LinkedIn, and WhatsApp. We manage every reply, qualify interest, and book meetings on your calendar.",
    duration: "Day 8+",
  },
] as const;

export const painPoints = [
  {
    icon: "UserX",
    title: "Founder-Led Sales Bottleneck",
    description:
      "You started the agency, so you do the selling. But prospecting eats into time you should spend on delivery, operations, and candidate pipelines.",
  },
  {
    icon: "Megaphone",
    title: "Job-Board Dependency",
    description:
      "Posting on Naukri and Indeed helps you find candidates — but it does nothing to bring in new hiring-company clients. Inbound alone is unpredictable.",
  },
  {
    icon: "TrendingDown",
    title: "Inconsistent Client Pipeline",
    description:
      "Some months are packed. Others are quiet. Without a systematic outbound engine, revenue forecasting feels like guesswork.",
  },
  {
    icon: "Clock",
    title: "No Time for Proactive Outreach",
    description:
      "Between sourcing candidates and managing existing clients, who has time to research new companies, write outreach, and follow up consistently?",
  },
] as const;

// Industries renamed to verticals above — keeping backward compat alias
export const industries = verticals;
