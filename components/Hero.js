"use client";

import { TELEGRAM_URL } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className="bg-white pt-[92px] pb-28">
      <div className="mx-auto max-w-[1440px] px-3">
        {/* Gradient hero card */}
        <div
          className="rounded-[40px] px-6 py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #f6f8ff 0%, #fbf4ef 100%)",
          }}
        >
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/60 px-4 py-2 text-[13px] font-medium tracking-[0.04em] text-accent">
              <svg
                className="h-4 w-4 animate-soft-pulse"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2C8 2 4 5 3 11c2-3 5-4 8-4-3 1-5 3-6 7" />
                <path d="M2 14c1-2 2-3 3-4" />
              </svg>
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-9 max-w-[1120px] font-heading text-[44px] leading-[1.0] tracking-[-0.02em] text-black sm:text-6xl lg:text-[80px]">
              {hero.titlePre}{" "}
              <span className="text-[#9b9b9b]">{hero.titleHighlight}</span>{" "}
              {hero.titlePost}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-9 max-w-[640px] text-base font-medium leading-6 tracking-[0.02em] text-black/80">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-black bg-black px-6 py-4 text-base font-semibold text-white transition-all hover:bg-stone-800 hover:scale-[1.03] active:scale-100"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-full border border-black px-6 py-4 text-base font-semibold text-black transition-all hover:bg-black hover:text-white hover:scale-[1.03] active:scale-100"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-start justify-center gap-x-24 gap-y-10">
          {hero.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 120}
              className="flex flex-col items-center text-center"
            >
              <div className="font-heading text-[56px] leading-[52px] tracking-[-0.02em] text-black">
                {stat.value}
              </div>
              <div className="mt-4 max-w-[150px] text-base leading-6 tracking-[0.02em] text-muted">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
