import { TELEGRAM_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-blue-600 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Готові спробувати?
        </h2>
        <p className="text-blue-200 text-lg mb-10 leading-relaxed">
          Подайте заявку зараз — і станьте одним з перших терапевтів на
          платформі.
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
        >
          Подати заявку через Telegram →
        </a>
        <p className="mt-5 text-blue-300 text-sm">
          Безкоштовно. Без зобов'язань. Відповідаємо протягом 3 днів.
        </p>
      </div>
    </section>
  );
}
