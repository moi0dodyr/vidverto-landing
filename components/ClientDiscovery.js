"use client";

import { TELEGRAM_URL } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ClientDiscovery() {
  const { t } = useLanguage();
  const cd = t.clientDiscovery;
  const steps = cd.steps;

  return (
    <section
      className="py-28"
      style={{
        background: "linear-gradient(180deg, #eaeaee 0%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 px-6 lg:grid-cols-2 lg:px-9">
        {/* Left column */}
        <Reveal className="flex flex-col">
          <h2 className="font-heading text-[40px] leading-[0.93] tracking-[-0.02em] text-black sm:text-5xl lg:text-[56px]">
            {cd.titleLine1}
            <br />
            {cd.titleLine2}
          </h2>
          <p className="mt-9 max-w-[574px] text-[26px] font-light leading-10 tracking-[-0.02em] text-muted">
            {cd.subtitle}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-6 pt-16">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border-2 border-black bg-black px-6 py-4 text-base font-semibold text-white transition-all hover:bg-stone-800 hover:scale-[1.03] active:scale-100"
            >
              {cd.cta}
            </a>
            <p className="text-base leading-6 tracking-[0.02em] text-muted">
              {cd.indexNote}
            </p>
          </div>
        </Reveal>

        {/* Right column — numbered steps */}
        <div className="lg:pl-20">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 120}
              className={`group flex gap-6 py-9 ${
                i < steps.length - 1 ? "border-b border-hairline" : ""
              } ${i === 0 ? "pt-0" : ""}`}
            >
              <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border border-white bg-white/60 font-heading text-[22px] leading-none tracking-[-0.02em] text-faint transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                {step.num}
              </div>
              <div>
                <h3 className="text-base font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-6 tracking-[0.02em] text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
