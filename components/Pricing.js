import { TELEGRAM_URL } from "@/lib/constants";

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

const plans = [
  {
    name: "Безкоштовно",
    price: "0",
    period: "назавжди",
    description: "Щоб познайомитись з платформою",
    cta: "Почати безкоштовно",
    highlight: false,
    badge: null,
    features: [
      { text: "1 клієнт (назавжди в записах)", included: true },
      { text: "Відеодзвінки", included: true },
      { text: "Онлайн-запис", included: true },
      { text: "Оплата через платформу", included: false },
      { text: "CRM та нотатки", included: false },
      { text: "Реферальна програма", included: false },
      { text: "Пріоритет у каталозі", included: false },
      { text: "Аналітика", included: false },
    ],
  },
  {
    name: "Premium",
    price: "499",
    period: "міс",
    description: "Для активної практики",
    cta: "Подати заявку",
    highlight: true,
    badge: "Найпопулярніший",
    features: [
      { text: "До 15 клієнтів", included: true },
      { text: "Відеодзвінки", included: true },
      { text: "Онлайн-запис", included: true },
      { text: "Оплата через платформу", included: true },
      { text: "CRM та нотатки", included: true },
      { text: "Реферальна програма", included: true },
      { text: "Пріоритет у каталозі", included: false },
      { text: "Аналітика", included: false },
    ],
  },
  {
    name: "Unlimited",
    price: "899",
    period: "міс",
    description: "Без обмежень і з повним набором",
    cta: "Подати заявку",
    highlight: false,
    badge: null,
    features: [
      { text: "Необмежена кількість клієнтів", included: true },
      { text: "Відеодзвінки", included: true },
      { text: "Онлайн-запис", included: true },
      { text: "Оплата через платформу", included: true },
      { text: "CRM та нотатки", included: true },
      { text: "Реферальна програма", included: true },
      { text: "Пріоритет у каталозі", included: true },
      { text: "Аналітика", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-stone-900">
            Ціни. Чітко і відкрито.
          </h2>
          <p className="mt-3 text-stone-500 max-w-xl mx-auto">
            Прихованих комісій немає. Ніяких відсотків від сесій. Ніяких сюрпризів.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-stone-900 text-white shadow-xl shadow-stone-300 scale-[1.02]"
                  : "bg-white border border-stone-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`font-medium text-lg mb-1 font-sans ${
                    plan.highlight ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-bold tracking-tight font-sans ${
                      plan.highlight ? "text-white" : "text-stone-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "0" && (
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-stone-400" : "text-stone-400"
                      }`}
                    >
                      UAH / {plan.period}
                    </span>
                  )}
                  {plan.price === "0" && (
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-stone-400" : "text-stone-400"
                      }`}
                    >
                      UAH
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-stone-400" : "text-stone-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5">
                    <span
                      className={`flex-shrink-0 mt-0.5 ${
                        f.included
                          ? plan.highlight
                            ? "text-orange-400"
                            : "text-emerald-500"
                          : plan.highlight
                          ? "text-stone-600"
                          : "text-stone-300"
                      }`}
                    >
                      {f.included ? <CheckIcon /> : <DashIcon />}
                    </span>
                    <span
                      className={`text-sm ${
                        f.included
                          ? plan.highlight
                            ? "text-white"
                            : "text-stone-700"
                          : plan.highlight
                          ? "text-stone-500"
                          : "text-stone-400"
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold text-sm py-3 px-4 rounded-full transition-colors ${
                  plan.highlight
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-stone-900 text-white hover:bg-stone-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Lifetime block */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-orange-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span className="font-bold text-lg text-stone-900 font-sans">Довічний доступ</span>
              <span className="text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">
                Лише для перших учасників
              </span>
            </div>
            <p className="text-stone-700 font-medium mb-1">
              8 990 UAH — одноразово
            </p>
            <p className="text-sm text-stone-500">
              Все з Unlimited, назавжди. Більше ніколи не думайте про підписку.
            </p>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
          >
            Отримати доступ →
          </a>
        </div>
      </div>
    </section>
  );
}
