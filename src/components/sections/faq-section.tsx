"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/motion-wrapper";

const faqs = [
  {
    question: "How do you find companies that are actively hiring?",
    answer:
      "We research companies across Delhi NCR using LinkedIn job postings, career pages, job boards, and growth signals. Every company on your prospect list has verified active hiring needs in your recruitment vertical before outreach begins.",
  },
  {
    question: "Who do you reach out to inside these companies?",
    answer:
      "We target the decision-makers who approve staffing partnerships — HR Heads, Talent Acquisition Leads, COOs, and Founders. We verify each contact individually. No generic inboxes, no spray-and-pray.",
  },
  {
    question: "Do you have case studies or proven results?",
    answer:
      "Honestly — not yet. We are building our track record. That is exactly why our first engagement with every agency is structured as a short pilot. You see real outreach, real conversations, and real meetings before making any long-term commitment. Our proof comes from the work, not from a pitch deck.",
  },
  {
    question: "What channels do you use for outreach?",
    answer:
      "We use a multi-channel approach: professional cold email sequences, LinkedIn outreach to verified decision-makers, and warm WhatsApp follow-ups. These are the three highest-performing B2B channels in the Indian market.",
  },
  {
    question: "What does a pilot engagement look like?",
    answer:
      "A pilot typically runs for 4–6 weeks. We research your target market, build a prospect list for your approval, launch outreach campaigns, and deliver qualified meetings on your calendar. At the end of the pilot, you decide whether to continue based on actual results — not projections.",
  },
  {
    question: "Do I need to provide lead lists or company databases?",
    answer:
      "No. We handle end-to-end research and list building. If you have a wishlist of companies you have been wanting to approach, we can absolutely include those in the campaign.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-navy/5 px-3.5 py-1 text-xs font-semibold text-navy">
            <HelpCircle className="h-3.5 w-3.5 text-orange" />
            HONEST ANSWERS
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-near-black sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-dark-gray">
            Straightforward answers. No fine print.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-light-gray bg-snow transition-all">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-semibold text-near-black hover:text-navy sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-orange transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-light-gray/60 px-5 pb-5 pt-3 text-sm leading-relaxed text-dark-gray sm:px-6 sm:pb-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-10 rounded-2xl border border-royal/20 bg-royal/5 p-5 text-center">
          <p className="text-sm font-medium text-dark-gray">
            Have a specific question about your staffing vertical?{" "}
            <a href="/contact" className="font-bold text-orange hover:underline">
              Let&apos;s talk →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
