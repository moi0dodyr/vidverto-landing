"use client";

import { useState, useEffect } from "react";
import { TELEGRAM_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-11">
        <div className="flex items-center justify-between h-[92px]">
          <span className="font-heading text-[32px] leading-none tracking-[-0.02em] text-black">
            Vidverto
          </span>

          <nav className="hidden md:flex items-center gap-9 text-base font-medium text-black">
            <a href="#how-it-works" className="transition-opacity hover:opacity-60">
              {t.nav.howItWorks}
            </a>
            <a href="#pricing" className="transition-opacity hover:opacity-60">
              {t.nav.pricing}
            </a>
            <a href="#faq" className="transition-opacity hover:opacity-60">
              {t.nav.faq}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full border border-black px-5 py-3 text-base font-semibold text-black transition-colors hover:bg-black hover:text-white"
            >
              {t.nav.apply}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
