"use client";

import { TELEGRAM_URL } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ForFirstMembers() {
  const { t } = useLanguage();
  const f = t.forFirstMembers;

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1440px] px-3">
        <div
          className="relative overflow-hidden rounded-[40px] bg-black px-8 py-20 lg:px-16"
          style={{ background: "radial-gradient(120% 120% at 0% 0%, #1c1410 0%, #000000 55%)" }}
        >
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium tracking-[0.04em] text-accent">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {f.badge}
              </div>
              <h2 className="mb-5 font-heading text-[44px] leading-[0.95] tracking-[-0.02em] text-white lg:text-[56px]">
                {f.heading}
              </h2>
              <p className="mb-4 text-base leading-7 text-white/60">{f.intro1}</p>
              <p className="mb-8 text-base leading-7 text-white/60">{f.intro2}</p>

              <ul className="mb-10 space-y-3">
                {f.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
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
                    <span className="text-base text-white/80">{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-4 text-base font-semibold text-black transition-colors hover:bg-white/90"
              >
                {f.cta}
              </a>
            </Reveal>

            <Reveal delay={160} className="hidden items-center justify-center lg:flex">
              <div className="relative">
                <div className="absolute -inset-8 h-56 w-56 rounded-full bg-accent/10" />
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-white/20">
                  <div className="text-center">
                    <div className="font-heading text-[64px] leading-none text-white">25</div>
                    <div className="mt-1 text-sm text-white/50">{f.seatsLabel}</div>
                  </div>
                </div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10"
                    style={{
                      top: `${50 + 70 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      left: `${50 + 70 * Math.cos((i * Math.PI * 2) / 8)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <span className="font-heading text-xs text-white/60">{i + 1}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
