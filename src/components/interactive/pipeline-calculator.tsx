"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/motion-wrapper";

export function PipelineCalculator() {
  const [dealSize, setDealSize] = useState<number>(200000); // 2 Lakhs INR default
  const [currentMeetings, setCurrentMeetings] = useState<number>(2);

  // Outreach math model:
  // Typical targeted campaign generates 6-12 qualified meetings/month
  const projectedMeetings = Math.max(8, currentMeetings + 6);
  const additionalMeetings = projectedMeetings - currentMeetings;
  
  // Assuming conservative 20% closing rate on qualified B2B buyer meetings
  const estimatedNewClientsPerQuarter = Math.round((additionalMeetings * 3) * 0.2);
  const potentialQuarterlyRevenue = estimatedNewClientsPerQuarter * dealSize;
  const annualOpportunity = potentialQuarterlyRevenue * 4;

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-snow py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/10 px-3.5 py-1 text-xs font-semibold text-orange">
            <Calculator className="h-3.5 w-3.5" />
            ROI & PIPELINE ESTIMATOR
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-near-black sm:text-4xl">
            Calculate Your Inaction Cost & Growth Potential
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-dark-gray sm:text-lg">
            See how many qualified meetings and estimated revenue your factory is missing every month without systematic outreach.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Controls Column */}
          <FadeIn direction="right" delay={0.2} className="rounded-2xl border border-light-gray bg-white p-6 shadow-md sm:p-8 lg:col-span-6">
            <h3 className="text-xl font-bold text-near-black">Your Manufacturing Parameters</h3>
            <p className="mt-1 text-sm text-medium-gray">
              Adjust the sliders below to match your industrial sales numbers.
            </p>

            <div className="mt-8 space-y-6">
              {/* Deal Size Slider */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-near-black">
                    Average Order / Deal Value
                  </label>
                  <span className="rounded-md bg-navy/5 px-2.5 py-1 text-sm font-bold text-navy">
                    {formatINR(dealSize)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="50000"
                  value={dealSize}
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-light-gray accent-orange"
                />
                <div className="mt-1.5 flex justify-between text-xs text-medium-gray">
                  <span>₹50K</span>
                  <span>₹10 Lakhs</span>
                  <span>₹20 Lakhs+</span>
                </div>
              </div>

              {/* Current Meetings Slider */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-near-black">
                    Current Monthly Qualified Buyer Meetings
                  </label>
                  <span className="rounded-md bg-navy/5 px-2.5 py-1 text-sm font-bold text-navy">
                    {currentMeetings} meetings/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={currentMeetings}
                  onChange={(e) => setCurrentMeetings(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-light-gray accent-orange"
                />
                <div className="mt-1.5 flex justify-between text-xs text-medium-gray">
                  <span>0 (Only Referrals)</span>
                  <span>5 meetings</span>
                  <span>10 meetings</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-amber/30 bg-amber/5 p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-amber" />
                <div className="text-xs text-dark-gray leading-relaxed">
                  <strong className="text-near-black font-semibold">The Cost of Waiting:</strong> Relying solely on IndiaMart or word-of-mouth leaves your pipeline unpredictable. A structured outreach engine unlocks reliable B2B buyers in Delhi NCR.
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Results Column */}
          <FadeIn direction="left" delay={0.3} className="rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-dark p-6 text-white shadow-xl sm:p-8 lg:col-span-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-orange">
                Estimated Output
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/80">
                <TrendingUp className="h-3 w-3 text-success" /> Conservative Projection
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs text-white/60">New Qualified Meetings / Mo</p>
                <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                  +{additionalMeetings} <span className="text-sm font-medium text-orange">meetings</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-white/60">Est. New Closed Deals / Qtr</p>
                <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                  {estimatedNewClientsPerQuarter > 0 ? `~${estimatedNewClientsPerQuarter}` : "1-2"} <span className="text-sm font-medium text-orange">buyers</span>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Potential Annual Pipeline Growth
              </p>
              <p className="mt-2 text-3xl font-black text-orange sm:text-4xl">
                {formatINR(annualOpportunity)}
              </p>
              <p className="mt-2 text-xs text-white/60">
                Mathematical projection model based on a conservative 20% close rate on qualified buyer meetings.
              </p>
            </div>

            <div className="mt-8 space-y-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Verified buyers (Purchase Heads, Owners, Procurement)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Zero commission on deals you close</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-3.5 text-sm font-bold text-white shadow-lg shadow-orange/30 transition-all hover:bg-orange-dark hover:shadow-orange/40 active:scale-[0.99]"
            >
              Claim Your Custom Outreach Blueprint
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
