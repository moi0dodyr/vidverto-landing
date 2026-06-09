export default function Referral() {
  return (
    <section className="bg-emerald-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold text-orange-600 uppercase tracking-widest mb-4 font-sans">
              Реферальна програма
            </span>
            <h2 className="text-3xl sm:text-4xl text-stone-900 mb-5">
              Клієнти рекомендують вас — і отримують бонус за це
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Кожен ваш клієнт може поділитися реферальним посиланням з друзями. Коли ті запишуться на першу сесію — клієнт отримає безкоштовну сесію у вас.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Ви самі налаштовуєте поріг: скільки друзів треба запросити. Новий спеціаліст може поставити 1–2, досвідчений з чергою — 4–5. Це ваш інструмент залучення — і ви ним керуєте.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                step: "1",
                title: "Клієнт ділиться посиланням",
                desc: "Ваш клієнт отримує особисте реферальне посилання і надсилає другу",
                bg: "bg-orange-500",
              },
              {
                step: "2",
                title: "Друг записується на сесію",
                desc: "Новий клієнт реєструється та бронює першу сесію у вас",
                bg: "bg-amber-500",
              },
              {
                step: "3",
                title: "Всі у виграші",
                desc: "Друг отримує терапевта, ваш клієнт — безкоштовну сесію, ви — нового клієнта",
                bg: "bg-emerald-600",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm"
              >
                <div
                  className={`w-9 h-9 rounded-full ${item.bg} text-white flex items-center justify-center font-bold text-sm flex-shrink-0 font-sans`}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm mb-1">{item.title}</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
