import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  UserX,
  Megaphone,
  TrendingDown,
  Clock,
  Search,
  Send,
  CalendarCheck,
  Monitor,
  Stethoscope,
  Landmark,
  Factory,
  ShoppingBag,
  Building2,
  GraduationCap,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Lock,
  Target,
  MousePointerClick,
  MessageSquare,
} from "lucide-react";
import {
  painPoints,
  processSteps,
  verticals,
  siteConfig,
} from "@/lib/constants";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/motion/motion-wrapper";
import { WhyOutboundSection } from "@/components/sections/why-outbound-section";
import { FAQSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "LeadBridge NCR — Outbound Pipeline for Delhi NCR Recruitment Agencies",
  description:
    "We help Delhi NCR staffing and recruitment agencies start conversations with companies actively hiring. Targeted outbound, honest approach, pilot-first engagement.",
};

const painPointIcons = { UserX, Megaphone, TrendingDown, Clock } as const;
const verticalIcons = {
  Monitor,
  Stethoscope,
  Landmark,
  Factory,
  ShoppingBag,
  Building2,
  GraduationCap,
  Briefcase,
} as const;

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
        {/* Subtle dot-grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            {/* Positioning Pill */}
            <FadeIn direction="down">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange backdrop-blur-sm sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
                </span>
                <span>Outbound for Recruitment Agencies</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Get more hiring-company meetings{" "}
                <span className="text-orange">for your staffing firm.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                Lead Bridge helps Delhi NCR recruitment agencies start conversations with companies actively hiring.
              </p>
            </FadeIn>

            {/* Single CTA */}
            <FadeIn delay={0.3}>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-4 text-lg font-bold text-white shadow-xl shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-orange/50 active:scale-[0.98]"
                >
                  Book a 10-minute conversation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>

            {/* Honest Trust Signals */}
            <FadeIn delay={0.4}>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/70 sm:gap-8 sm:text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Pilot-first engagement
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  No long-term contracts
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Delhi NCR focused
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM SECTION ─── */}
      <section id="problems" className="bg-snow py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-error/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-error">
              THE AGENCY GROWTH CHALLENGE
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-near-black sm:text-4xl">
              Are These Challenges Slowing Your Agency&apos;s Growth?
            </h2>
            <p className="mt-3 text-dark-gray">
              Most staffing agencies in Delhi NCR face the same pipeline frustrations:
            </p>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point) => {
              const IconComponent =
                painPointIcons[point.icon as keyof typeof painPointIcons];
              return (
                <StaggerItem key={point.title}>
                  <HoverCard className="h-full rounded-2xl border border-light-gray bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-near-black">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                      {point.description}
                    </p>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHY OUTBOUND SECTION ─── */}
      <WhyOutboundSection />

      {/* ─── SOLUTION SECTION ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-navy/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              HOW WE WORK
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-near-black sm:text-4xl">
              We Handle Outreach. You Handle Placements.
            </h2>
            <p className="mt-3 text-dark-gray">
              You focus on what you do best — sourcing candidates and closing placements. We build and run the outbound engine that fills your client pipeline.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Search,
                title: "1. Research Hiring Companies",
                description:
                  "We identify companies across Delhi NCR with active hiring needs in your recruitment vertical — and verify the decision-makers who approve staffing partnerships.",
              },
              {
                icon: Send,
                title: "2. Professional Outreach",
                description:
                  "Multi-touch campaigns across Email, LinkedIn, and WhatsApp. Consultative, professional introductions — never spam.",
              },
              {
                icon: CalendarCheck,
                title: "3. Meetings on Your Calendar",
                description:
                  "When a company expresses interest, we qualify their needs and book the meeting directly on your calendar with a pre-call brief.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <HoverCard className="h-full rounded-2xl border border-light-gray bg-snow p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/10 text-navy">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-near-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-dark-gray">
                    {item.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Honest footnote */}
          <FadeIn className="mt-12 mx-auto max-w-2xl">
            <div className="rounded-xl border border-navy/10 bg-navy/[0.03] px-5 py-4 text-center">
              <p className="text-sm text-dark-gray">
                <strong className="text-near-black">Honest note:</strong> Our first engagement is structured as a pilot. We earn your trust through real conversations delivered — not promises made upfront.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── HOW IT WORKS TIMELINE ─── */}
      <section id="how-it-works" className="bg-snow py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-orange">
              4-STEP PROCESS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-near-black sm:text-4xl">
              From First Call to Scheduled Meetings
            </h2>
            <p className="mt-3 text-dark-gray">
              A clear, systematic process. No ambiguity about what happens and when.
            </p>
          </FadeIn>

          {/* Timeline */}
          <div className="relative mx-auto mt-14 max-w-2xl">
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-orange/20 sm:block" />

            <div className="space-y-8">
              {processSteps.map((step, idx) => (
                <FadeIn key={step.step} delay={idx * 0.1} className="relative flex gap-5 sm:gap-6">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange text-base font-bold text-white shadow-md shadow-orange/30">
                    {step.step}
                  </div>

                  <div className="pb-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-near-black">
                        {step.title}
                      </h3>
                      <span className="rounded-full bg-navy/10 px-3 py-0.5 text-xs font-bold text-navy">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-dark-gray">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 font-bold text-orange transition hover:text-orange-dark"
            >
              See the full process in detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── VERTICALS SECTION ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-navy/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              RECRUITMENT VERTICALS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-near-black sm:text-4xl">
              Staffing Verticals We Support
            </h2>
            <p className="mt-3 text-dark-gray">
              We research and target hiring companies specific to your recruitment specialty across Delhi NCR.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {verticals.map((vertical) => {
              const IconComponent =
                verticalIcons[vertical.icon as keyof typeof verticalIcons];
              return (
                <StaggerItem key={vertical.name}>
                  <HoverCard className="h-full rounded-2xl border border-light-gray bg-snow p-6 shadow-sm transition hover:border-orange/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-near-black">
                      {vertical.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-dark-gray">
                      {vertical.description}
                    </p>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold text-orange transition hover:text-orange-dark"
            >
              Don&apos;t see your vertical? Let&apos;s discuss your niche
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection />

      {/* ─── FINAL CTA SECTION ─── */}
      <section className="bg-gradient-to-b from-white to-snow py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-semibold text-orange">
              <Sparkles className="h-3.5 w-3.5" />
              START WITH A CONVERSATION
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-near-black sm:text-4xl">
              Ready to Start Filling Your Client Pipeline?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-dark-gray sm:text-lg">
              Book a 10-minute conversation. We&apos;ll learn about your agency, discuss your ideal client profile, and explain exactly how a pilot engagement works.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange px-9 py-4 text-lg font-bold text-white shadow-xl shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-orange/50 active:scale-[0.98]"
              >
                Book a 10-minute conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-dark-gray sm:gap-6 sm:text-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-4 w-4 text-success" />
                No obligations
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="h-4 w-4 text-success" />
                Pilot-first approach
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Lock className="h-4 w-4 text-success" />
                Complete confidentiality
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
