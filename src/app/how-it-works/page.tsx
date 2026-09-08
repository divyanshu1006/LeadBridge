import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Search, CalendarCheck, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { FadeIn, HoverCard, StaggerContainer, StaggerItem } from "@/components/motion/motion-wrapper";

export const metadata: Metadata = {
  title: "How It Works — LeadBridge NCR",
  description:
    "Our 4-step process for Delhi NCR recruitment agencies: from a 10-minute alignment call to qualified hiring-company meetings on your calendar.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              CLEAR, SYSTEMATIC PROCESS
            </div>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              From First Call to Scheduled Meetings
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              A 4-step process designed for recruitment agencies who want qualified hiring-company meetings — without building an internal sales team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="text-center">
            <span className="inline-block rounded-full bg-navy/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              STEP-BY-STEP
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-near-black sm:text-3xl">
              How LeadBridge NCR Works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-dark-gray">
              Every stage is managed with full visibility. You approve prospect lists and message templates before anything launches.
            </p>
          </FadeIn>

          {/* Timeline */}
          <div className="relative mt-16">
            {processSteps.map((step, index) => {
              const isLast = index === processSteps.length - 1;

              return (
                <div key={step.step} className="relative flex gap-6 pb-14 last:pb-0 md:gap-0">
                  {/* ── Left column (desktop: content for even steps) ── */}
                  <div className="hidden flex-1 md:flex md:justify-end md:pr-12">
                    {index % 2 === 0 && (
                      <FadeIn direction="right" delay={index * 0.1}>
                        <StepCard
                          duration={step.duration}
                          title={step.title}
                          description={step.description}
                          align="right"
                        />
                      </FadeIn>
                    )}
                  </div>

                  {/* ── Center spine ── */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange text-lg font-bold text-white shadow-lg shadow-orange/30">
                      {step.step}
                    </div>
                    {!isLast && (
                      <div className="w-0.5 grow bg-gradient-to-b from-orange/60 to-orange/20" />
                    )}
                  </div>

                  {/* ── Right column (desktop: content for odd steps) ── */}
                  <div className="hidden flex-1 md:flex md:justify-start md:pl-12">
                    {index % 2 !== 0 && (
                      <FadeIn direction="left" delay={index * 0.1}>
                        <StepCard
                          duration={step.duration}
                          title={step.title}
                          description={step.description}
                          align="left"
                        />
                      </FadeIn>
                    )}
                  </div>

                  {/* ── Mobile content ── */}
                  <div className="flex-1 md:hidden">
                    <FadeIn delay={index * 0.1}>
                      <StepCard
                        duration={step.duration}
                        title={step.title}
                        description={step.description}
                        align="left"
                      />
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS AFTER ── */}
      <section className="bg-snow py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="text-center">
            <span className="inline-block rounded-full bg-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-orange">
              AFTER THE PILOT
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-near-black sm:text-3xl">
              What Happens After You Book Your First Call?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-dark-gray">
              Within 24 hours of our alignment call, we begin researching hiring companies in your recruitment vertical.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-3">
            <StaggerItem>
              <HoverCard className="h-full rounded-2xl border border-light-gray bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10">
                  <Clock className="h-7 w-7 text-orange" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-near-black">24-Hour Kickoff</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                  We define your Ideal Client Profile and begin target company research within 1 business day.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="h-full rounded-2xl border border-light-gray bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10">
                  <Search className="h-7 w-7 text-orange" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-near-black">Verified Contacts</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                  Every decision-maker contact is individually verified — no dead inboxes or generic company emails.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="h-full rounded-2xl border border-light-gray bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10">
                  <CalendarCheck className="h-7 w-7 text-orange" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-near-black">Meetings on Calendar</h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                  Qualified hiring companies accept meeting invites with a brief on their staffing needs and team size.
                </p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-near-black sm:text-4xl">
              Ready for Step&nbsp;1?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-dark-gray">
              It starts with a 10-minute conversation. No commitment, no pressure — just clarity on how we&apos;d approach your vertical.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark active:scale-[0.98]"
              >
                Book a 10-minute conversation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-medium-gray">
              <ShieldCheck className="h-4 w-4 text-success" />
              <span>Pilot-first · No long-term contracts · Cancel anytime</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function StepCard({
  duration,
  title,
  description,
  align,
}: {
  duration: string;
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <HoverCard
      className={`max-w-sm rounded-2xl border border-light-gray bg-white p-6 shadow-sm ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <span className="inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
        {duration}
      </span>
      <h3 className="mt-3 text-lg font-bold text-near-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-dark-gray">
        {description}
      </p>
    </HoverCard>
  );
}
