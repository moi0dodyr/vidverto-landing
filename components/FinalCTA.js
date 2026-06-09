import { TELEGRAM_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-stone-900 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/25 via-transparent to-emerald-900/15 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl text-white mb-4">
          Готові спробувати?
        </h2>
        <p className="text-stone-400 text-lg mb-10 leading-relaxed">
          Подайте заявку зараз — і станьте одним з перших терапевтів на
          платформі.
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-orange-500 text-white hover:bg-orange-600 font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-orange-900/30"
        >
          Подати заявку через Telegram →
        </a>
        <p className="mt-5 text-stone-500 text-sm">
          Безкоштовно. Без зобов'язань. Відповідаємо протягом 3 днів.
        </p>
      </div>
    </section>
  );
}
