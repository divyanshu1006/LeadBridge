import type { Metadata } from "next";
import { Mail, MapPin, Clock, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn, HoverCard } from "@/components/motion/motion-wrapper";

export const metadata: Metadata = {
  title: "Contact Us — LeadBridge NCR",
  description:
    "Get in touch with LeadBridge NCR. Book a 10-minute conversation to discuss outbound pipeline services for your recruitment agency.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Official Email",
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Coverage Hubs",
    label: "Serving recruitment agencies across Delhi NCR",
    href: null,
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark px-4 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold text-orange backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              START A CONVERSATION
            </div>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Let&apos;s Discuss Your Agency&apos;s Growth
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80 md:text-xl">
              Connect with LeadBridge NCR. We&apos;ll learn about your staffing vertical and explain how a pilot engagement works.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <FadeIn direction="right" className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange">
                GET IN TOUCH
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-near-black md:text-3xl">
                Reach Us Directly
              </h2>
              <p className="mt-3 text-dark-gray leading-relaxed">
                Whether you want to learn about our outbound process, discuss your recruitment vertical, or request a pilot — submit the form or email us directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy hover:text-orange transition-colors">
                  {siteConfig.email}
                </a>.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map(({ icon: Icon, title, label, href }) => {
                const inner = (
                  <HoverCard className="h-full rounded-2xl border border-light-gray bg-snow p-5 shadow-sm transition hover:border-orange/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-medium-gray">
                      {title}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-near-black">
                      {label}
                    </p>
                  </HoverCard>
                );

                return href ? (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith("https") ? "_blank" : undefined}
                    rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={title}>{inner}</div>
                );
              })}
            </div>

            {/* Response Promise */}
            <div className="flex items-start gap-3 rounded-2xl border border-royal/20 bg-royal/5 p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-royal" />
              <div className="text-sm leading-relaxed text-dark-gray">
                <strong className="font-semibold text-near-black">Quick Response:</strong> Every enquiry is reviewed and responded to within 24 hours (usually much faster during business hours).
              </div>
            </div>

            {/* Confidence Checkpoints */}
            <div className="space-y-2 text-xs text-dark-gray">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Complete confidentiality for your client relationships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Pilot-first engagement — no long-term commitments upfront</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column — Contact Form */}
          <FadeIn direction="left" delay={0.2} className="rounded-3xl border border-light-gray bg-white p-6 shadow-xl md:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-near-black">Book a 10-Minute Conversation</h3>
              <p className="mt-1 text-xs text-medium-gray">
                Fill in your details and we&apos;ll schedule a quick call to discuss your agency.
              </p>
            </div>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-t border-light-gray bg-snow px-4 py-8">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold text-dark-gray sm:text-sm">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-success" />
            No commitment required
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-success" />
            100% Free initial conversation
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-success" />
            Tailored to recruitment agencies
          </span>
        </div>
      </section>
    </main>
  );
}
