"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      reset();
    } catch {
      setServerError("Something went wrong. Please try again or WhatsApp us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-success/20 bg-success/5 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-success" />
        <h3 className="text-xl font-semibold text-near-black">Message Sent!</h3>
        <p className="text-dark-gray">
          We&apos;ll get back to you within 24 hours. Usually much faster.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-orange hover:text-orange-dark"
        >
          Send another message
        </button>
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
          placeholder="Your full name"
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

      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-near-black">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          placeholder="Your company name"
          {...register("company")}
          className="w-full rounded-lg border border-light-gray bg-white px-4 py-3 text-sm text-near-black placeholder:text-medium-gray outline-none transition-all focus:border-royal focus:ring-2 focus:ring-royal/20"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-near-black">
          Email Address <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          {...register("email")}
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-3 text-sm text-near-black placeholder:text-medium-gray outline-none transition-all focus:border-royal focus:ring-2 focus:ring-royal/20",
            errors.email ? "border-error" : "border-light-gray"
          )}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-error">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-near-black">
          Phone Number <span className="text-error">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
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

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-near-black">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your business and what you're looking for..."
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

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-dark hover:shadow-md active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
