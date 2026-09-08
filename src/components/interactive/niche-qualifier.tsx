"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Building, Target, Gauge } from "lucide-react";
import { FadeIn } from "@/components/motion/motion-wrapper";

const nicheOptions = [
  "Auto Parts & Components",
  "Packaging & Corrugation",
  "Chemicals & Solvents",
  "Industrial Machinery & Tools",
  "Textiles & Garments",
  "Metal Fabrication / CNC",
  "Electrical & Panels",
  "Building Materials & Hardware",
];

const targetMonthlyDeals = ["1-2 deals / mo", "3-5 deals / mo", "6-10+ deals / mo"];
const currentSources = ["Referrals Only", "IndiaMart / TradeIndia", "Cold Calling", "No Outreach"];

export function NicheQualifier() {
  const [step, setStep] = useState<number>(1);
  const [selectedNiche, setSelectedNiche] = useState<string>(nicheOptions[0]);
  const [selectedDeals, setSelectedDeals] = useState<string>(targetMonthlyDeals[1]);
  const [selectedSource, setSelectedSource] = useState<string>(currentSources[0]);

  return (
    <section className="bg-snow py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/5 px-3.5 py-1 text-xs font-semibold text-navy">
            <Sparkles className="h-3.5 w-3.5 text-orange" />
            30-SECOND FEASIBILITY CHECK
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-near-black sm:text-4xl">
            Check If Your Industrial Sector Qualifies
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-dark-gray">
            See how viable cold B2B outreach is for your specific manufacturing niche in Delhi NCR.
          </p>
        </FadeIn>

        {/* Multi-step Container */}
        <FadeIn delay={0.2} className="mt-12 rounded-2xl border border-light-gray bg-white p-6 shadow-md sm:p-10">
          {/* Step Progress Bar */}
          <div className="mb-8 flex items-center justify-between border-b border-light-gray pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                {step <= 3 ? step : 3}
              </span>
              <span className="text-sm font-semibold text-near-black">
                {step === 1 && "Step 1: Your Manufacturing Sector"}
                {step === 2 && "Step 2: Desired Monthly New Clients"}
                {step === 3 && "Step 3: Current Lead Generation Channel"}
                {step === 4 && "Analysis & Results"}
              </span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 w-8 rounded-full transition-all ${
                    step >= i ? "bg-orange" : "bg-light-gray"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <p className="text-sm font-medium text-dark-gray mb-4">
                What does your factory primarily manufacture or supply?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {nicheOptions.map((niche) => (
                  <button
                    key={niche}
                    type="button"
                    onClick={() => setSelectedNiche(niche)}
                    className={`flex items-center justify-between rounded-xl border p-4 text-left text-sm font-semibold transition-all ${
                      selectedNiche === niche
                        ? "border-orange bg-orange/5 text-navy ring-2 ring-orange/20"
                        : "border-light-gray text-dark-gray hover:border-medium-gray/50 hover:bg-snow"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Building className={`h-4 w-4 ${selectedNiche === niche ? "text-orange" : "text-medium-gray"}`} />
                      {niche}
                    </span>
                    {selectedNiche === niche && <CheckCircle2 className="h-4 w-4 text-orange" />}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white transition-all hover:bg-navy-dark"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <p className="text-sm font-medium text-dark-gray mb-4">
                How many new B2B clients can your factory comfortably onboard per month?
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {targetMonthlyDeals.map((deal) => (
                  <button
                    key={deal}
                    type="button"
                    onClick={() => setSelectedDeals(deal)}
                    className={`flex flex-col items-center justify-center rounded-xl border p-6 text-center text-sm font-semibold transition-all ${
                      selectedDeals === deal
                        ? "border-orange bg-orange/5 text-navy ring-2 ring-orange/20"
                        : "border-light-gray text-dark-gray hover:border-medium-gray/50 hover:bg-snow"
                    }`}
                  >
                    <Target className={`mb-2 h-6 w-6 ${selectedDeals === deal ? "text-orange" : "text-medium-gray"}`} />
                    <span>{deal}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm font-semibold text-medium-gray hover:text-dark-gray"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white transition-all hover:bg-navy-dark"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <p className="text-sm font-medium text-dark-gray mb-4">
                What is your primary method of acquiring buyers today?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {currentSources.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setSelectedSource(src)}
                    className={`flex items-center justify-between rounded-xl border p-4 text-left text-sm font-semibold transition-all ${
                      selectedSource === src
                        ? "border-orange bg-orange/5 text-navy ring-2 ring-orange/20"
                        : "border-light-gray text-dark-gray hover:border-medium-gray/50 hover:bg-snow"
                    }`}
                  >
                    <span>{src}</span>
                    {selectedSource === src && <CheckCircle2 className="h-4 w-4 text-orange" />}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-sm font-semibold text-medium-gray hover:text-dark-gray"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-dark shadow-md shadow-orange/20"
                >
                  Generate Feasibility Report
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RESULT */}
          {step === 4 && (
            <div className="text-center sm:py-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                <Gauge className="h-8 w-8" />
              </div>
              <span className="mt-4 inline-block rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success uppercase">
                High Viability Niche Match
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-near-black">
                {selectedNiche} has High Buyer Demand in Delhi NCR
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-dark-gray">
                Based on your goal of <strong className="text-near-black">{selectedDeals}</strong> (currently relying on {selectedSource}), our multi-channel outreach typically yields <strong className="text-orange">6 to 10 qualified buyer meetings/month</strong> in your category.
              </p>

              <div className="mt-8 rounded-xl border border-light-gray bg-snow p-5 text-left text-xs sm:text-sm text-dark-gray space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  <span>Targeted buyer pool identified in Noida, Gurgaon, Faridabad & Manesar industrial belts.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                  <span>Verified procurement officers & purchase managers reachable directly.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark"
                >
                  Book Discovery Call For This Niche
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-medium-gray hover:text-dark-gray underline"
                >
                  Restart Assessment
                </button>
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
