"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Verification() {
  const { t } = useLanguage();
  const v = t.verification;

  return (
    <section
      className="py-28"
      style={{ background: "linear-gradient(180deg, #eaeaee 0%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-9">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-7 font-heading text-[40px] leading-[0.95] tracking-[-0.02em] text-black lg:text-[56px]">
              {v.heading}
            </h2>
            <p className="mb-4 text-base leading-7 text-muted">{v.intro1}</p>
            <p className="mb-8 text-base leading-7 text-muted">{v.intro2}</p>

            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
              {v.criteriaLabel}
            </p>
            <ul className="space-y-3">
              {v.criteria.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white text-accent shadow-sm">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l2.5 2.5 5.5-5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-base text-black">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
              {v.stepsLabel}
            </p>

            <div className="relative">
              <div className="absolute bottom-8 left-[19px] top-8 w-px bg-hairline" />
              <div className="space-y-6">
                {v.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white font-heading text-base tracking-[-0.02em] text-faint shadow-sm">
                      0{i + 1}
                    </div>
                    <div className="pt-2.5">
                      <p className="text-base leading-6 text-black">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
