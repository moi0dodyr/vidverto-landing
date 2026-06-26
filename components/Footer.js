"use client";

import { TELEGRAM_HANDLE, EMAIL } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-black py-14 text-white/60">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-9">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <span className="font-heading text-[28px] leading-none tracking-[-0.02em] text-white">Vidverto</span>
            <p className="mt-3 max-w-xs text-sm text-white/50">{f.tagline}</p>
          </div>

          <div className="flex flex-col gap-8 text-sm sm:flex-row">
            <div>
              <p className="mb-2 font-medium text-white/80">{f.contactsLabel}</p>
              <div className="space-y-1">
                <a
                  href={`https://t.me/${TELEGRAM_HANDLE.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-white"
                >
                  Telegram: {TELEGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="block transition-colors hover:text-white"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div>
              <p className="mb-2 font-medium text-white/80">{f.docsLabel}</p>
              <div className="space-y-1">
                <a href="/terms" className="block transition-colors hover:text-white">
                  {f.terms}
                </a>
                <a href="/privacy" className="block transition-colors hover:text-white">
                  {f.privacy}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Vidverto. {f.rights}
        </div>
      </div>
    </footer>
  );
}
