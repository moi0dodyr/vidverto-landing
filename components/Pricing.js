"use client";

import { TELEGRAM_URL } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function CheckIcon({ className = "" }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8l3.5 3.5 6.5-7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <path d="M4 8h8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

// Which feature (by translation key) is included in each plan, in display order.
// Index matches t.pricing.plans (Free, Premium, Unlimited).
const PLAN_META = [
  {
    highlight: false,
    badge: false,
    features: [
      { key: "clients1", included: true },
      { key: "video", included: true },
      { key: "booking", included: true },
      { key: "payments", included: false },
      { key: "crm", included: false },
      { key: "referral", included: false },
      { key: "priority", included: false },
      { key: "analytics", included: false },
    ],
  },
  {
    highlight: true,
    badge: true,
    features: [
      { key: "clients15", included: true },
      { key: "video", included: true },
      { key: "booking", included: true },
      { key: "payments", included: true },
      { key: "crm", included: true },
      { key: "referral", included: true },
      { key: "priority", included: false },
      { key: "analytics", included: false },
    ],
  },
  {
    highlight: false,
    badge: false,
    features: [
      { key: "clientsUnlimited", included: true },
      { key: "video", included: true },
      { key: "booking", included: true },
      { key: "payments", included: true },
      { key: "crm", included: true },
      { key: "referral", included: true },
      { key: "priority", included: true },
      { key: "analytics", included: true },
    ],
  },
];

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;

  const plans = p.plans.map((plan, i) => ({ ...plan, ...PLAN_META[i] }));

  return (
    <section id="pricing" className="bg-white py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-9">
        <Reveal className="mb-16 max-w-2xl">
          <h2 className="font-heading text-[40px] leading-[0.95] tracking-[-0.02em] text-black lg:text-[56px]">
            {p.heading}
          </h2>
          <p className="mt-6 text-[20px] font-light leading-8 tracking-[-0.01em] text-muted">
            {p.subheading}
          </p>
        </Reveal>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 120}
              className={`relative flex flex-col rounded-[28px] p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                plan.highlight
                  ? "bg-black text-white"
                  : "border border-hairline bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {p.mostPopular}
                </span>
              )}

              <div className="mb-6">
                <p className={`mb-2 text-sm font-medium ${plan.highlight ? "text-white/60" : "text-muted"}`}>
                  {plan.name}
                </p>
                <div className="mb-2 flex items-baseline gap-2">
                  <span className={`font-heading text-[56px] leading-none tracking-[-0.02em] ${plan.highlight ? "text-white" : "text-black"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-white/50" : "text-faint"}`}>
                    {plan.price !== "0" ? `${p.currency} / ${p.perMonth}` : p.currency}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlight ? "text-white/60" : "text-muted"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.key} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex-shrink-0 ${
                        f.included
                          ? "text-accent"
                          : plan.highlight ? "text-white/30" : "text-hairline"
                      }`}
                    >
                      {f.included ? <CheckIcon /> : <DashIcon />}
                    </span>
                    <span
                      className={`text-sm ${
                        f.included
                          ? plan.highlight ? "text-white" : "text-black"
                          : plan.highlight ? "text-white/40" : "text-faint"
                      }`}
                    >
                      {p.features[f.key]}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-full px-4 py-3.5 text-center text-base font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-white/90"
                    : "border-2 border-black bg-black text-white hover:bg-stone-800"
                }`}
              >
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mb-8 text-center text-sm text-muted">{p.noHidden}</p>

        {/* Lifetime block */}
        <Reveal
          className="rounded-[40px] p-9"
          style={{ background: "linear-gradient(135deg, #f6f8ff 0%, #fbf4ef 100%)" }}
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="text-accent">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span className="font-heading text-2xl tracking-[-0.02em] text-black">{p.lifetime.title}</span>
                <span className="rounded-full border border-white bg-white/60 px-2 py-0.5 text-xs font-semibold text-accent">{p.lifetime.once}</span>
              </div>
              <p className="mb-3 text-base text-black/70">{p.lifetime.description}</p>
              <p className="inline-block rounded-2xl border border-white bg-white/60 px-4 py-2.5 text-sm font-medium text-accent">
                {p.lifetime.gift}
              </p>
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center whitespace-nowrap rounded-full border-2 border-black bg-black px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-stone-800"
            >
              {p.lifetime.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
