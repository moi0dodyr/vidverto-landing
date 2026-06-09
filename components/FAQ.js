"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Коли запуститься платформа?",
    a: "Ми плануємо відкритий запуск у найближчі місяці. Зараз збираємо заявки від терапевтів для закритої бети. Ви отримаєте доступ першими.",
  },
  {
    q: "Я вже працюю на іншій платформі. Чи можу я бути на двох одночасно?",
    a: "Так, ніяких обмежень. Ви можете паралельно використовувати будь-які інші інструменти.",
  },
  {
    q: "Що буде з моїми клієнтами, якщо я вирішу піти?",
    a: "Ваша історія та дані залишаються вашими. Ми надаємо повний експорт в будь-який момент. Ніякого локапу.",
  },
  {
    q: "Чи можу я вести клієнтів, яких знайшов сам — без комісії?",
    a: "Так. Реферальний збір стягується лише коли клієнта привела платформа. Ваші особисті клієнти — без жодної комісії.",
  },
  {
    q: "Як відбувається верифікація? Це довго?",
    a: "Зазвичай 2–3 робочих дні після того, як ви надіслали документи. Ми зв'язуємось особисто і пояснюємо кожен крок.",
  },
  {
    q: "Що якщо мені не підійде платформа?",
    a: "Ви можете скасувати підписку в будь-який момент. Ніяких штрафів, ніякого локапу.",
  },
  {
    q: "Які методи терапії ви приймаєте?",
    a: "КПТ, гештальт, психоаналіз, ACT, схема-терапія, EMDR та інші доказові підходи. Основна вимога — підтверджена освіта і практика.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-stone-900 text-sm sm:text-base">{q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center transition-transform mt-0.5 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="w-3 h-3 text-stone-500" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-stone-900">
            Часті запитання
          </h2>
        </div>
        <div className="divide-y divide-stone-200 border-t border-stone-200">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
