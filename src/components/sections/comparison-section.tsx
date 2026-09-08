"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Scale } from "lucide-react";
import { FadeIn } from "@/components/motion/motion-wrapper";

const comparisonRows = [
  {
    feature: "Lead Exclusivity",
    leadbridge: "100% Exclusive — Buyers speak only with your factory",
    indiamart: "Shared with 10-30 competing suppliers instantly",
    inhouse: "Exclusive, but slow and dependent on one individual",
  },
  {
    feature: "Decision-Maker Quality",
    leadbridge: "Verified Purchase Heads, Plant Directors & Owners",
    indiamart: "Mostly price-browsers, traders & low-intent inquiries",
    inhouse: "Requires months of training & specialized tools",
  },
  {
    feature: "Pricing & Transparency",
    leadbridge: "Flat monthly fee / pay-per-meeting (0% deal cut)",
    indiamart: "High annual subscription + paid keyword bidding",
    inhouse: "Fixed salary (₹50k-₹1L/mo) + benefits + no guarantee",
  },
  {
    feature: "Time to First Meeting",
    leadbridge: "Active outreach launch in 10-14 days",
    indiamart: "Immediate, but 90% unqualified price shoppers",
    inhouse: "60-90 days for hiring, training & ramp-up",
  },
  {
    feature: "Multi-Channel Coverage",
    leadbridge: "Coordinated Cold Email + LinkedIn + Direct WhatsApp",
    indiamart: "Portal notifications only",
    inhouse: "Usually limited to manual cold calling",
  },
  {
    feature: "Risk & Contracts",
    leadbridge: "Zero long-term lock-in · Full campaign transparency",
    indiamart: "Non-refundable upfront annual package",
    inhouse: "Full employment liabilities & recruitment costs",
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/5 px-3.5 py-1 text-xs font-semibold text-navy">
            <Scale className="h-3.5 w-3.5 text-orange" />
            TRANSPARENT COMPARISON
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-near-black sm:text-4xl">
            Why Delhi NCR Manufacturers Choose LeadBridge NCR
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-dark-gray">
            A clear, honest look at how our dedicated outreach engine compares to traditional sales channels.
          </p>
        </FadeIn>

        {/* Desktop Table View */}
        <FadeIn delay={0.2} className="mt-14 hidden overflow-hidden rounded-2xl border border-light-gray shadow-md md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-light-gray bg-snow">
                <th className="p-5 text-sm font-bold text-dark-gray w-1/4">Feature / Aspect</th>
                <th className="p-5 text-sm font-extrabold text-navy bg-royal/5 border-x border-royal/10 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-orange text-white font-bold text-xs">LB</span>
                    <span className="text-base text-near-black">LeadBridge NCR</span>
                    <span className="rounded bg-orange px-2 py-0.5 text-[10px] font-bold text-white uppercase">Dedicated</span>
                  </div>
                </th>
                <th className="p-5 text-sm font-semibold text-dark-gray w-1/5">IndiaMart / Portals</th>
                <th className="p-5 text-sm font-semibold text-dark-gray w-1/5">In-House Sales Rep</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light-gray text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-snow/40"}>
                  <td className="p-5 font-bold text-near-black">{row.feature}</td>
                  <td className="p-5 font-semibold text-navy bg-royal/[0.02] border-x border-royal/10">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                      <span>{row.leadbridge}</span>
                    </div>
                  </td>
                  <td className="p-5 text-dark-gray">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 shrink-0 text-error/70 mt-0.5" />
                      <span>{row.indiamart}</span>
                    </div>
                  </td>
                  <td className="p-5 text-dark-gray">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 shrink-0 text-medium-gray mt-0.5" />
                      <span>{row.inhouse}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        {/* Mobile Card View */}
        <div className="mt-10 space-y-6 md:hidden">
          {comparisonRows.map((row, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} className="rounded-2xl border border-light-gray bg-snow p-5 shadow-sm">
              <h3 className="font-bold text-near-black text-base border-b border-light-gray pb-2 mb-3">
                {row.feature}
              </h3>
              
              <div className="rounded-xl border border-royal/20 bg-royal/5 p-3 mb-3">
                <p className="text-xs font-extrabold uppercase tracking-wider text-navy flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  LeadBridge NCR
                </p>
                <p className="mt-1 text-xs font-semibold text-near-black">
                  {row.leadbridge}
                </p>
              </div>

              <div className="space-y-2 text-xs text-dark-gray">
                <div>
                  <span className="font-semibold text-medium-gray">IndiaMart: </span>
                  <span>{row.indiamart}</span>
                </div>
                <div>
                  <span className="font-semibold text-medium-gray">In-House Sales Rep: </span>
                  <span>{row.inhouse}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA for Comparison */}
        <FadeIn className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark"
          >
            Experience the LeadBridge NCR Difference
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
