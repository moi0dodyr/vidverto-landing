const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    tag: "Підписка",
    title: "Підписка замість комісії",
    description:
      "Ви платите фіксовану суму на місяць — і ведете стільки сесій, скільки хочете. Платформа не заробляє більше, якщо клієнт приходить частіше. Її інтерес — щоб вам було зручно, а не щоб сесії тривали довше.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    tag: "Нові клієнти",
    title: "Одноразовий збір за нового клієнта",
    description:
      "Коли платформа приводить вам нового клієнта — ми беремо фіксований збір лише за першу сесію. Далі — цей клієнт ваш, ми не беремо нічого.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    tag: "Ваші дані",
    title: "Ваші клієнти залишаються вашими",
    description:
      "Ми зберігаємо повну історію — але не ховаємо її за paywall і не використовуємо як важіль тиску. Ваші дані, ваші клієнти — завжди.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-stone-900">
            Інакший підхід
          </h2>
          <p className="mt-3 text-stone-500 max-w-xl mx-auto">
            Модель, де наш успіх залежить від вашого — а не від кількості ваших сесій.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={f.title} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0">
                  {f.icon}
                </div>
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-xl text-stone-900 mb-3 leading-snug font-medium">
                {f.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">{f.description}</p>
              {i < features.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-px bg-stone-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
