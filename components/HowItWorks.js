"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Icons stay in code; copy comes from translations (same order).
const ICONS = [
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const hiw = t.howItWorks;

  return (
    <section id="how-it-works" className="bg-white py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-9">
        <Reveal className="mb-16 max-w-2xl">
          <h2 className="font-heading text-[40px] leading-[0.95] tracking-[-0.02em] text-black lg:text-[56px]">
            {hiw.heading}
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {hiw.principles.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 120}
              className="rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-1.5"
              style={{ background: "linear-gradient(135deg, #f6f8ff 0%, #fbf4ef 100%)" }}
            >
              <div className="mb-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                {ICONS[i]}
              </div>
              <h3 className="mb-3 text-base font-semibold text-black">
                {p.title}
              </h3>
              <p className="text-base leading-6 text-black/70">
                {p.descBold ? (
                  <>
                    {p.descBefore}
                    <strong className="font-semibold text-black">{p.descBold}</strong>
                    {p.descAfter}
                  </>
                ) : (
                  p.description
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
