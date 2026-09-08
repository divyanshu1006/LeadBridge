import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Target, MapPin, Sparkles, ShieldCheck, Handshake } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/motion/motion-wrapper";

export const metadata: Metadata = {
  title: "About Us — LeadBridge NCR",
  description:
    "Learn the story behind LeadBridge NCR — why we built a dedicated outbound pipeline service for Delhi NCR recruitment and staffing agencies.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes Over Activity",
    description:
      "We measure success by qualified meetings booked on your calendar — not vanity metrics like emails sent or connections made.",
  },
  {
    icon: Eye,
    title: "100% Campaign Transparency",
    description:
      "You review every prospect list and approve outreach messaging before we begin. No black boxes, no vague claims — complete visibility at every stage.",
  },
  {
    icon: Handshake,
    title: "Exclusively Staffing & Recruitment",
    description:
      "We partner only with recruitment and staffing agencies. That singular focus gives us deep understanding of how agencies grow their client base.",
  },
  {
    icon: MapPin,
    title: "Deep Delhi NCR Knowledge",
    description:
      "We know Delhi NCR\u2019s hiring landscape — from IT corridors in Noida and Gurgaon to manufacturing hubs in Faridabad and Manesar — and the decision-makers within them.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              OUR MISSION & VALUES
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              The Story Behind LeadBridge NCR
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              Delhi NCR recruitment agencies build exceptional candidate pipelines. They deserve an equally strong client pipeline — without spending every evening prospecting.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-near-black md:text-4xl">
              Our Core Purpose
            </h2>
            <p className="mt-6 text-xl font-medium leading-relaxed text-navy md:text-2xl">
              To give staffing agencies a dedicated outbound system that creates real conversations with hiring companies — turning client acquisition from unpredictable word-of-mouth into a reliable, repeatable process.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Why We Exist ── */}
      <section className="bg-snow px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-near-black md:text-4xl">
              Why We Built LeadBridge NCR
            </h2>

            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-dark-gray">
              <p>
                India&apos;s staffing industry is booming. Companies across Delhi NCR are hiring aggressively — in IT, manufacturing, BFSI, healthcare, and retail. Yet most recruitment agencies still depend on referrals, personal networks, and inbound enquiries to find new clients.
              </p>
              <p>
                The result? Feast-or-famine revenue cycles. One quarter is packed with placements; the next is spent scrambling for new mandates. Agency founders know their teams deliver excellent candidates — but reaching new hiring companies feels like an uphill battle.
              </p>
              <p>
                We built LeadBridge NCR to bridge this gap. By combining systematic multi-channel outreach with deep knowledge of Delhi NCR\u2019s hiring landscape, we create qualified conversations between staffing agencies and companies that need their services.
              </p>
              <p className="rounded-xl border border-navy/10 bg-navy/[0.03] px-5 py-4 text-sm">
                <strong className="text-near-black">A note on honesty:</strong> We are early-stage. We don&apos;t have dozens of case studies or years of client logos to display. What we do have is a rigorous process, genuine expertise, and a pilot-first model that lets you judge us by our work — not our marketing.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-near-black md:text-4xl">
              Our Guiding Principles
            </h2>
            <p className="mt-3 text-dark-gray">
              The commitments that guide every campaign we run for our agency partners.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <HoverCard className="h-full rounded-2xl border border-light-gray bg-snow p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-near-black">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                    {description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-snow px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-near-black md:text-4xl">
              Want to See How We&apos;d Approach Your Vertical?
            </h2>
            <p className="mt-4 text-dark-gray">
              Book a 10-minute conversation. We&apos;ll learn about your agency and explain exactly how a pilot works.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark active:scale-[0.98]"
              >
                Book a 10-minute conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-medium-gray">
              <ShieldCheck className="h-4 w-4 text-success" />
              <span>No pressure · Pilot-first approach</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
