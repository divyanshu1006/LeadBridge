import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Send,
  MessageSquare,
  CalendarCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { services, transparencyGuarantees } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FadeIn, HoverCard } from "@/components/motion/motion-wrapper";

export const metadata: Metadata = {
  title: "Services — LeadBridge NCR",
  description:
    "End-to-end outbound pipeline services for Delhi NCR recruitment agencies — from hiring-company research to confirmed meetings on your calendar.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Send,
  MessageSquare,
  CalendarCheck,
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              OUTBOUND PIPELINE SERVICES
            </div>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Everything Your Agency Needs to Win More Hiring-Company Clients
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              We manage the entire outbound cycle — research, outreach, qualification, and meeting booking — with full transparency and a pilot-first approach.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES DETAIL ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-20 px-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            const isEven = idx % 2 === 1;

            return (
              <FadeIn key={service.title} delay={idx * 0.1}>
                <article
                  className={cn(
                    "flex flex-col items-start gap-10 md:flex-row md:items-center",
                    isEven && "md:flex-row-reverse"
                  )}
                >
                  {/* Icon block */}
                  <HoverCard className="flex shrink-0 items-center justify-center rounded-3xl bg-royal/10 p-8 md:p-12 shadow-sm">
                    {Icon && (
                      <Icon className="h-14 w-14 text-royal md:h-20 md:w-20" />
                    )}
                  </HoverCard>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="mb-2 inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange">
                      Step {idx + 1}
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-near-black md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-dark-gray leading-relaxed md:text-lg">
                      {service.description}
                    </p>

                    {/* What's Included */}
                    <div className="mt-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-medium-gray">
                        What&apos;s Included
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-dark-gray"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expected Outcome */}
                    <div className="mt-6 rounded-2xl border border-royal/20 bg-royal/5 px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-royal">
                        Deliverable
                      </p>
                      <p className="mt-1 font-semibold text-near-black">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── TRANSPARENCY COMMITMENTS ── */}
      <section className="bg-snow py-16 md:py-24 border-y border-light-gray">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-extrabold text-near-black sm:text-3xl">
              Our Commitments to You
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-dark-gray">
              We treat your agency brand with the same care and professionalism you extend to your own clients.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {transparencyGuarantees.map((guarantee) => (
              <FadeIn key={guarantee.title} className="rounded-2xl border border-light-gray bg-white p-6 shadow-sm">
                <h3 className="font-bold text-near-black text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange shrink-0" />
                  {guarantee.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                  {guarantee.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-near-black md:text-4xl">
              Ready to Build Your Client Pipeline?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-dark-gray md:text-lg">
              Book a 10-minute conversation. We&apos;ll discuss your recruitment vertical and outline how a pilot engagement works.
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
              <span>No lock-in contracts · Pilot-first · Cancel anytime</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
