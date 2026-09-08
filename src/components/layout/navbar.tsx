"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-light-gray/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo variant="dark" size="md" />

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-dark-gray transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange/20 transition-all hover:bg-orange-dark hover:shadow-orange/30 active:scale-[0.98]"
          >
            <span>Book a conversation</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-dark-gray hover:bg-light-gray"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-light-gray bg-white px-4 pb-6 pt-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-base font-semibold text-dark-gray hover:bg-snow hover:text-navy"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-orange px-5 py-3 text-sm font-bold text-white hover:bg-orange-dark shadow-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] font-medium text-medium-gray">
            <ShieldCheck className="h-3.5 w-3.5 text-success" />
            <span>Pilot-first · Delhi NCR Recruitment Agencies</span>
          </div>
        </div>
      </div>
    </header>
  );
}
