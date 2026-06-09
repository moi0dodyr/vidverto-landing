"use client";

import { useState, useEffect } from "react";
import { TELEGRAM_URL } from "@/lib/constants";

export default function Navbar() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl text-stone-900 tracking-tight">
              Vidverto
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
              Як це працює
            </a>
            <a href="#pricing" className="hover:text-stone-900 transition-colors">
              Тарифи
            </a>
            <a href="#faq" className="hover:text-stone-900 transition-colors">
              FAQ
            </a>
          </nav>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Подати заявку
          </a>
        </div>
      </div>
    </header>
  );
}
