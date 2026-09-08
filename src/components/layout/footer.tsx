import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig, navLinks, transparencyGuarantees } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-navy-dark text-white">
      {/* Transparency Guarantee Strip */}
      <div className="border-b border-white/10 bg-white/[0.03] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transparencyGuarantees.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-xs leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>📍 Serving recruitment agencies across Delhi NCR</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-orange">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-orange transition-colors hover:text-orange-dark"
                >
                  Book a conversation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-orange">
              What We Do
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/services"
                  className="text-xs text-white/70 transition-colors hover:text-white"
                >
                  Hiring-Company Research
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs text-white/70 transition-colors hover:text-white"
                >
                  Multi-Channel Outreach (Email / LinkedIn / WhatsApp)
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs text-white/70 transition-colors hover:text-white"
                >
                  Reply Management & Qualification
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs text-white/70 transition-colors hover:text-white"
                >
                  Meeting Booking & Pre-Call Briefing
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-orange">
              Direct Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-xs text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-orange" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-orange" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-orange mt-0.5" />
                <span>Serving recruitment agencies across Delhi NCR</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <ShieldCheck className="h-4 w-4 text-success" />
            <span>Complete Confidentiality Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
