const criteria = [
  "Вища психологічна або медична освіта (диплом)",
  "Підтвердження спеціалізації або методу роботи",
  "Досвід практики від 1 року",
  "Проходження або наявність супервізії",
  "Відсутність грубих порушень етичного кодексу",
];

const steps = [
  {
    num: "01",
    text: "Подаєте заявку через Telegram Bot",
  },
  {
    num: "02",
    text: "Надсилаєте документи (диплом, підтвердження спеціалізації)",
  },
  {
    num: "03",
    text: "Ми зв'язуємось протягом 3 робочих днів",
  },
  {
    num: "04",
    text: "Підтверджуємо або уточнюємо деталі",
  },
];

export default function Verification() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl text-stone-900 mb-4">
              Ми перевіряємо кожного вручну
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              На платформі немає «швидкої реєстрації за 5 хвилин». Ми перевіряємо кожного спеціаліста особисто — тому що клієнти мають право знати, що вони у надійних руках. І тому що ви заслуговуєте на колег, яким можна довіряти.
            </p>

            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-widest mb-4 font-sans">
              Критерії верифікації
            </h3>
            <ul className="space-y-3">
              {criteria.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l2.5 2.5 5.5-5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-stone-700 text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-widest mb-6 font-sans">
              Як проходить верифікація
            </h3>
            <div className="relative">
              <div className="absolute left-5 top-8 bottom-8 w-px bg-stone-200" />
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold font-sans">
                      {step.num}
                    </div>
                    <div className="pt-2.5">
                      <p className="text-stone-700 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-5 bg-orange-50 rounded-2xl border border-orange-100">
              <p className="text-sm text-orange-900 font-medium">
                Зазвичай процес займає 2–3 робочих дні після отримання документів. Ми зв'язуємось особисто.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
