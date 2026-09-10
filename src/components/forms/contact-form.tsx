"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SubmissionSummary extends ContactFormData {
  mailtoUrl: string;
}

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionSummary | null>(null);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setServerError("");

      // 1. Post to our backend API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message via API");
      }

      // 2. Prepare mailto redirect to send to our email and copy the sender
      const targetEmail = siteConfig.email; // leadbridgencr@zohomail.in
      const subject = `Inquiry from ${data.name} - LeadBridge NCR`;
      const bodyLines = [
        `Hi LeadBridge NCR Team,`,
        ``,
        `I would like to discuss outbound pipeline services for my recruitment firm. Here are my details:`,
        ``,
        `----------------------------------------`,
        `Full Name:     ${data.name}`,
        `Phone Number:  ${data.phone}`,
        `Email:         ${data.email}`,
        `Company:       ${data.company || "Not provided"}`,
        `----------------------------------------`,
        ``,
        `Message:`,
        `${data.message}`,
        ``,
        `----------------------------------------`,
        `Sent via LeadBridge NCR (leadbridgencr.vercel.app)`,
      ];

      const mailtoUrl = `mailto:${targetEmail}?cc=${encodeURIComponent(
        data.email
      )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        bodyLines.join("\n")
      )}`;

      // 3. Automatically trigger redirect to their email client
      if (typeof window !== "undefined") {
        window.location.href = mailtoUrl;
      }

      setSubmission({ ...data, mailtoUrl });
      reset();
    } catch {
      setServerError(
        `Something went wrong while submitting. Please write to us directly at ${siteConfig.email}.`
      );
    }
  };

  if (submission) {
    return (
      <div className="flex flex-col gap-6 rounded-2xl border border-success/30 bg-success/[0.04] p-6 sm:p-8 text-left">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success/15 text-success">
            <CheckCircle className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-near-black">
              Message Sent & Redirected to Email
            </h3>
            <p className="text-xs text-medium-gray mt-0.5">
              Copy addressed to our email and your email client
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-dark-gray">
          Thank you, <strong className="text-near-black">{submission.name}</strong>. Your inquiry has been submitted to our team at{" "}
          <strong className="text-navy">{siteConfig.email}</strong>, and a prefilled copy has been redirected to your email application with a CC to{" "}
          <strong className="text-navy">{submission.email}</strong>.
        </p>

        {/* Message preview card */}
        <div className="rounded-xl border border-light-gray bg-white p-4 text-xs space-y-1.5 shadow-sm">
          <div className="flex justify-between border-b border-light-gray pb-2 mb-2">
            <span className="font-bold text-near-black uppercase tracking-wider text-[10px]">
              Submission Summary
            </span>
            <span className="text-medium-gray text-[10px]">To: {siteConfig.email}</span>
          </div>
          <p>
            <strong className="text-dark-gray">Name:</strong> {submission.name}
          </p>
          <p>
            <strong className="text-dark-gray">Phone:</strong> {submission.phone}
          </p>
          <p>
            <strong className="text-dark-gray">Email:</strong> {submission.email}
          </p>
          {submission.company && (
            <p>
              <strong className="text-dark-gray">Company:</strong> {submission.company}
            </p>
          )}
          <p className="pt-1 text-dark-gray line-clamp-3">
            <strong>Message:</strong> {submission.message}
          </p>
        </div>

        {/* Redirect action if email client didn't open */}
        <div className="space-y-3 pt-2">
          <a
            href={submission.mailtoUrl}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-navy-dark active:scale-[0.98]"
          >
            <Mail className="h-4 w-4 text-orange" />
            <span>Open in Email App (Send Copy)</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>

          <button
            type="button"
            onClick={() => setSubmission(null)}
            className="flex w-full items-center justify-center gap-2 text-xs font-semibold text-medium-gray hover:text-dark-gray py-1"
          >
            <span>Send another message</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-near-black">
          Full Name <span className="text-error">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Rahul Sharma"
          {...register("name")}
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-3 text-sm text-near-black placeholder:text-medium-gray outline-none transition-all focus:border-royal focus:ring-2 focus:ring-royal/20",
            errors.name ? "border-error" : "border-light-gray"
          )}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-error">{errors.name.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-near-black">
          Phone Number <span className="text-error">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+91 98765 43210"
          {...register("phone")}
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-3 text-sm text-near-black placeholder:text-medium-gray outline-none transition-all focus:border-royal focus:ring-2 focus:ring-royal/20",
            errors.phone ? "border-error" : "border-light-gray"
          )}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-error">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-near-black">
          Your Email Address <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@agency.com"
          {...register("email")}
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-3 text-sm text-near-black placeholder:text-medium-gray outline-none transition-all focus:border-royal focus:ring-2 focus:ring-royal/20",
            errors.email ? "border-error" : "border-light-gray"
          )}
        />
        <p className="mt-1 text-[11px] text-medium-gray">
          A copy of your message will be redirected to this email.
        </p>
        {errors.email && (
          <p className="mt-1 text-xs text-error">{errors.email.message}</p>
        )}
      </div>

      {/* Company Name (Optional) */}
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-near-black">
          Staffing Firm / Agency Name <span className="text-xs text-medium-gray font-normal">(Optional)</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="e.g. Apex Talent Solutions"
          {...register("company")}
          className="w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-sm text-near-black placeholder:text-medium-gray outline-none transition-all focus:border-royal focus:ring-2 focus:ring-royal/20"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-near-black">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your recruitment firm and what hiring companies you want to target..."
          {...register("message")}
          className={cn(
            "w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm text-near-black placeholder:text-medium-gray outline-none transition-all focus:border-royal focus:ring-2 focus:ring-royal/20",
            errors.message ? "border-error" : "border-light-gray"
          )}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-error">{errors.message.message}</p>
        )}
      </div>

      {/* Server error */}
      {serverError && (
        <p className="rounded-lg bg-error/5 p-3 text-sm text-error">{serverError}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-base font-bold text-white shadow-md shadow-orange/20 transition-all hover:bg-orange-dark hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Send Message & Email Copy</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-medium-gray">
        Submitting delivers directly to <span className="text-near-black font-semibold">{siteConfig.email}</span> and redirects a copy to your email client.
      </p>
    </form>
  );
}
