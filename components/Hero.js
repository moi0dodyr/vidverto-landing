import { TELEGRAM_URL } from "@/lib/constants";

function MockDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-slate-100/60 rotate-2" />
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-semibold text-stone-700">Мій розклад</span>
          <span className="text-xs text-stone-400">Червень 2025</span>
        </div>
        <div className="space-y-3">
          {[
            { time: "10:00", name: "Марія К.", status: "Підтверджено" },
            { time: "12:30", name: "Олексій В.", status: "Підтверджено" },
            { time: "15:00", name: "Наталія П.", status: "Очікується" },
          ].map((session) => (
            <div
              key={session.time}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-semibold text-xs flex-shrink-0">
                {session.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-stone-800 truncate">{session.name}</p>
                <p className="text-xs text-stone-500">{session.time} · 50 хв</p>
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0 ${
                  session.status === "Підтверджено"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {session.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-stone-500">Дохід цього місяця</span>
          <span className="text-sm font-bold text-emerald-600">+ 18 200 ₴</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-emerald-50/20 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Набір терапевтів відкрито
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] text-stone-900 leading-[1.15]">
              Платформа, яка{" "}
              <span className="text-orange-500">працює на вас</span> — а не за
              ваш рахунок
            </h1>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              Простий інструмент для онлайн-терапевта: розклад, відеодзвінки,
              оплата та клієнти — в одному місці. Прозора тарифікація, ручна
              верифікація, чесні умови.
            </p>
            <div className="mt-10">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-stone-900 hover:bg-stone-800 active:bg-black text-white font-semibold px-7 py-4 rounded-full text-lg transition-colors"
              >
                Подати заявку через Telegram
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <p className="mt-3 text-sm text-stone-500">
                Перші 25 терапевтів отримують довічний безкоштовний доступ
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <MockDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
