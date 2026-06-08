import { TELEGRAM_HANDLE, EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">V</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Vidverto</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Платформа для онлайн-терапевтів. Прозора тарифікація, чесні умови.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div>
              <p className="text-slate-300 font-medium mb-2">Контакти</p>
              <div className="space-y-1">
                <a
                  href={`https://t.me/${TELEGRAM_HANDLE.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  Telegram: {TELEGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="block hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div>
              <p className="text-slate-300 font-medium mb-2">Документи</p>
              <div className="space-y-1">
                <a href="/terms" className="block hover:text-white transition-colors">
                  Умови використання
                </a>
                <a href="/privacy" className="block hover:text-white transition-colors">
                  Політика конфіденційності
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-600">
          © {new Date().getFullYear()} Vidverto. Всі права захищено.
        </div>
      </div>
    </footer>
  );
}
