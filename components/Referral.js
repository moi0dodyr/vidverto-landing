"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Referral() {
  const { t } = useLanguage();
  const r = t.referral;

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-9">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-6 font-heading text-[40px] leading-[0.95] tracking-[-0.02em] text-black lg:text-[56px]">
              {r.heading}
            </h2>
            <p className="mb-8 text-base leading-7 text-muted">{r.intro}</p>

            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
              {r.examplesLabel}
            </p>
            <div className="mb-6 overflow-hidden rounded-[28px] border border-hairline">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-[0.08em] text-muted">{r.tableHead.therapist}</th>
                    <th className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-[0.08em] text-muted">{r.tableHead.threshold}</th>
                    <th className="px-5 py-3.5 text-left text-xs font-medium uppercase tracking-[0.08em] text-muted">{r.tableHead.logic}</th>
                  </tr>
                </thead>
                <tbody>
                  {r.examples.map((row, i) => (
                    <tr key={i} className={i < r.examples.length - 1 ? "border-b border-hairline" : ""}>
                      <td className="px-5 py-4 font-medium text-black">{row.type}</td>
                      <td className="px-5 py-4 font-semibold text-accent">{row.threshold}</td>
                      <td className="px-5 py-4 text-muted">{row.logic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-faint">{r.tableNote}</p>
          </Reveal>

          <Reveal delay={140}>
            {/* Stats highlight block */}
            <div className="rounded-[40px] bg-black p-9 text-white">
              <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
                {r.statsLabel}
              </p>
              <p className="mb-6 text-base leading-7 text-white/70">{r.statsIntro}</p>

              <div className="mb-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-px flex-shrink-0 self-stretch rounded-full bg-accent" />
                  <div>
                    <p className="mb-1 text-sm text-white/50">{r.costLabel}</p>
                    <p className="font-heading text-2xl tracking-[-0.02em] text-white">
                      {r.costValue}{" "}
                      <span className="text-sm font-normal text-white/50">{r.costUnit}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">{r.costNote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-px flex-shrink-0 self-stretch rounded-full bg-white/40" />
                  <div>
                    <p className="mb-1 text-sm text-white/50">{r.gainLabel}</p>
                    <p className="font-heading text-2xl tracking-[-0.02em] text-white">
                      {r.gainValue}{" "}
                      <span className="text-sm font-normal text-white/50">{r.gainUnit}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-white/40">{r.gainNote}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] bg-white/5 p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.1em] text-white/40">{r.exampleLabel}</p>
                <p className="text-base leading-7 text-white/70">
                  {r.examplePre}
                  <span className="font-semibold text-white">{r.exampleIncome}</span>
                  {r.exampleMid}
                  <span className="font-semibold text-accent">{r.exampleCost}</span>
                  {r.exampleMid2}
                  <span className="font-semibold text-white">{r.exampleExtra}</span>
                  {r.examplePost}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
