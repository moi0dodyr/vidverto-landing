"use client";

import { TELEGRAM_URL } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  const c = t.finalCta;

  return (
    <section className="bg-white pb-28">
      <div className="mx-auto max-w-[1440px] px-3">
        <Reveal
          className="rounded-[40px] px-6 py-24 text-center"
          style={{ background: "linear-gradient(135deg, #f6f8ff 0%, #fbf4ef 100%)" }}
        >
          <h2 className="mx-auto max-w-3xl font-heading text-[44px] leading-[1.0] tracking-[-0.02em] text-black lg:text-[64px]">
            {c.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[20px] font-light leading-8 tracking-[-0.01em] text-muted">
            {c.subtitle}
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-full border-2 border-black bg-black px-8 py-4 text-base font-semibold text-white transition-all hover:bg-stone-800 hover:scale-[1.03] active:scale-100"
          >
            {c.cta}
          </a>
          <p className="mt-5 text-sm text-muted">{c.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
