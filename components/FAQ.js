"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-hairline last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
      >
        <span className="text-base font-medium text-black sm:text-lg">{q}</span>
        <span
          className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-black transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="h-3 w-3 text-black" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="text-base leading-7 text-muted">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const faq = t.faq;

  return (
    <section
      id="faq"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #eaeaee 0%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-9">
        <Reveal className="mb-12 text-center">
          <h2 className="font-heading text-[40px] leading-[0.95] tracking-[-0.02em] text-black lg:text-[56px]">
            {faq.heading}
          </h2>
          <p className="mt-5 text-[20px] font-light leading-8 tracking-[-0.01em] text-muted">
            {faq.subheading}
          </p>
        </Reveal>
        <div className="border-t border-hairline">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <FAQItem q={item.q} a={item.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
