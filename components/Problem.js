"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/* --- Placeholder illustrations (one per problem) --- */

function FinePrintIllo() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="h-full w-full">
      <rect x="78" y="26" width="164" height="178" rx="10" fill="#fff" stroke="#e4e4e7" />
      <rect x="98" y="48" width="76" height="9" rx="4.5" fill="#1f1f1f" />
      <rect x="98" y="72" width="124" height="6" rx="3" fill="#e6e6e9" />
      <rect x="98" y="86" width="124" height="6" rx="3" fill="#e6e6e9" />
      <rect x="98" y="100" width="96" height="6" rx="3" fill="#e6e6e9" />
      <rect x="98" y="124" width="124" height="22" rx="5" fill="#d65050" fillOpacity="0.12" />
      <rect x="106" y="132" width="84" height="6" rx="3" fill="#d65050" fillOpacity="0.55" />
      <rect x="98" y="160" width="124" height="6" rx="3" fill="#e6e6e9" />
      <rect x="98" y="174" width="70" height="6" rx="3" fill="#e6e6e9" />
      <circle cx="214" cy="150" r="26" fill="#fff" stroke="#d65050" strokeWidth="3" />
      <line x1="232" y1="168" x2="248" y2="184" stroke="#d65050" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function RecurringCutIllo() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="h-full w-full">
      <line x1="60" y1="176" x2="262" y2="176" stroke="#e4e4e7" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={70 + i * 50} y={120} width="30" height="56" rx="6" fill="#e6e6e9" />
          <rect x={70 + i * 50} y={120} width="30" height="18" rx="6" fill="#d65050" fillOpacity="0.7" />
        </g>
      ))}
      <path d="M96 70c40-26 88-26 128 0" stroke="#d65050" strokeWidth="2.5" strokeDasharray="5 6" strokeLinecap="round" />
      <path d="M214 64l12 6-7 11" stroke="#d65050" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="128" y="32" width="64" height="34" rx="17" fill="#d65050" />
      <text x="160" y="54" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="17" fontWeight="600" fill="#fff">−%</text>
    </svg>
  );
}

function ScatteredButtonsIllo() {
  return (
    <svg viewBox="0 0 320 230" fill="none" className="h-full w-full">
      <rect x="46" y="58" width="96" height="40" rx="12" fill="#fff" stroke="#e4e4e7" />
      <rect x="62" y="74" width="48" height="8" rx="4" fill="#cfcfd3" />
      <rect x="184" y="40" width="86" height="40" rx="12" fill="#fff" stroke="#e4e4e7" />
      <rect x="200" y="56" width="40" height="8" rx="4" fill="#cfcfd3" />
      <rect x="158" y="132" width="110" height="44" rx="12" fill="#fff" stroke="#e4e4e7" />
      <rect x="176" y="150" width="58" height="8" rx="4" fill="#cfcfd3" />
      <rect x="40" y="140" width="78" height="40" rx="12" fill="#fff" stroke="#e4e4e7" />
      <rect x="56" y="156" width="36" height="8" rx="4" fill="#cfcfd3" />
      <path d="M142 78c26 6 28 44 16 58" stroke="#d65050" strokeWidth="2.5" strokeDasharray="5 7" strokeLinecap="round" />
      <circle cx="142" cy="78" r="4" fill="#d65050" />
      <path d="M118 160l-2-2m0 0l2-2m-2 2h2" stroke="#d65050" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Illustrations stay in code; copy comes from translations (same order).
const ILLOS = [FinePrintIllo, RecurringCutIllo, ScatteredButtonsIllo];

const STEP_VH = 95;

export default function Problem() {
  const { t } = useLanguage();
  const problems = t.problem.items.map((item, i) => ({
    ...item,
    Illo: ILLOS[i],
  }));
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const progressed = Math.min(Math.max(-rect.top, 0), scrollable);
      const p = scrollable > 0 ? progressed / scrollable : 0;
      const idx = Math.min(problems.length - 1, Math.floor(p * problems.length));
      setActive(idx < 0 ? 0 : idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = (i) => {
    const el = ref.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    const top = el.offsetTop + ((i + 0.5) / problems.length) * scrollable;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const ActiveIllo = problems[active].Illo;

  return (
    <section
      ref={ref}
      className="relative bg-white"
      style={{ height: `${problems.length * STEP_VH}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-20">
        {/* Soft red glow */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 100%, rgba(214,80,80,0.07) 0%, rgba(214,80,80,0) 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1280px] px-6 lg:px-9">
          <header className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-[34px] leading-[1.0] tracking-[-0.02em] text-black sm:text-5xl lg:text-[56px]">
              {t.problem.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-8 tracking-[-0.01em] text-muted lg:text-[26px] lg:leading-10">
              {t.problem.subheading}
            </p>
          </header>

          <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2">
            {/* Left — illustration card */}
            <div className="order-2 flex justify-center lg:order-1">
              <div className="relative w-full max-w-[454px]">
                <div className="aspect-[4/3] overflow-hidden rounded-[24px] border-[6px] border-white bg-white/70 shadow-[0_11px_27px_rgba(214,80,80,0.13)]">
                  <div key={active} className="animate-fade-in h-full w-full">
                    <ActiveIllo />
                  </div>
                </div>
              </div>
            </div>

            {/* Right — content + tabs */}
            <div className="order-1 lg:order-2">
              <div key={active} className="animate-fade-in min-h-[200px]">
                <h3 className="text-2xl font-medium text-warn sm:text-[32px]">
                  {problems[active].title}
                </h3>
                <p className="mt-5 max-w-[454px] text-lg leading-8 text-muted">
                  {problems[active].description}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {problems.map((p, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={p.title}
                      onClick={() => goTo(i)}
                      className={`flex w-full max-w-[320px] items-center gap-3 rounded-full border border-white px-5 py-4 text-left text-base shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 ${
                        on
                          ? "bg-white text-black"
                          : "bg-white/60 text-[#838383] hover:bg-white/80"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 flex-shrink-0 rounded-full transition-all duration-300 ${
                          on
                            ? "bg-warn ring-4 ring-warn/15"
                            : "border border-[#979797] bg-transparent"
                        }`}
                      />
                      <span className="font-medium">{p.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
