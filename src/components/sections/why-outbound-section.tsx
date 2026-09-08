"use client";

import { Target, UserCheck, MessageSquare } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
} from "@/components/motion/motion-wrapper";

const pillars = [
  {
    icon: Target,
    title: "You Choose the Companies",
    description:
      "Instead of waiting for inbound enquiries, you proactively target the exact companies you want to work with — by industry, size, location, and hiring activity.",
  },
  {
    icon: UserCheck,
    title: "Decision-Makers, Not Job Portals",
    description:
      "We reach the HR Heads, Talent Acquisition Leads, and Founders who approve staffing partnerships — not generic info@ inboxes or job-board algorithms.",
  },
  {
    icon: MessageSquare,
    title: "Conversations, Not Applications",
    description:
      "Outbound positions your agency as a strategic partner reaching out with a solution — not another vendor competing in a crowded portal.",
  },
];

export function WhyOutboundSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
            WHY OUTBOUND WORKS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-near-black sm:text-4xl">
            Why Outbound for Staffing Agencies?
          </h2>
          <p className="mt-3 text-dark-gray">
            Job boards help you find candidates. Outbound helps you find clients.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <HoverCard className="h-full rounded-2xl border border-light-gray bg-snow p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-near-black">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dark-gray">
                  {description}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
