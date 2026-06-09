import { TELEGRAM_URL } from "@/lib/constants";

const perks = [
  "Довічний безкоштовний доступ до базового плану",
  "Пріоритетне розміщення в каталозі з першого дня",
  "Прямий зв'язок з командою і вплив на розвиток продукту",
  'Статус "Засновник платформи" в профілі',
];

export default function ForFirstMembers() {
  return (
    <section className="bg-stone-900 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Лише 25 місць
            </div>
            <h2 className="text-3xl sm:text-4xl text-white mb-5 leading-tight">
              Для перших 25 терапевтів
            </h2>
            <p className="text-stone-400 leading-relaxed mb-8">
              Ми будуємо платформу разом з тими, хто прийшов першим. Перші
              учасники отримують ексклюзивні умови — і безпосередній вплив на
              те, якою буде платформа.
            </p>

            <ul className="space-y-3 mb-10">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mt-0.5">
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
                  <span className="text-stone-300 text-sm">{perk}</span>
                </li>
              ))}
            </ul>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-full text-base transition-colors"
            >
              Подати заявку →
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-full bg-orange-500/10 absolute -inset-8" />
              <div className="relative w-40 h-40 rounded-full border-2 border-dashed border-stone-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-black text-white font-sans">25</div>
                  <div className="text-stone-400 text-sm mt-1">місць</div>
                </div>
              </div>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 rounded-full bg-stone-700 border-2 border-stone-600 flex items-center justify-center"
                  style={{
                    top: `${50 + 70 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    left: `${50 + 70 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="text-stone-400 text-xs font-bold font-sans">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
