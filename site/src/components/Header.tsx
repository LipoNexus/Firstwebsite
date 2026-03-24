"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import siteData from "@/content/site.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-[#E2E2F0]"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="LipoNexus home"
        >
          <Image
            src="/images/LipoNexus Logo.png"
            alt="LipoNexus"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {siteData.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "text-[#100CC9]"
                  : "text-[#4A4A5A] hover:text-[#100CC9]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#100CC9] text-white text-sm font-medium hover:bg-[#2A28F8] transition-colors duration-200"
          >
            Contact Us
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-[#4A4A5A] hover:text-[#100CC9] hover:bg-[#F3F3FF] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E2F0] shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
            {siteData.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-sm font-medium border-b border-[#E2E2F0] last:border-0 transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-[#100CC9]"
                    : "text-[#4A4A5A] hover:text-[#100CC9]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 inline-flex justify-center items-center px-5 py-2.5 rounded-full bg-[#100CC9] text-white text-sm font-medium hover:bg-[#2A28F8] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
