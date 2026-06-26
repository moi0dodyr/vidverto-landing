"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_LANG, LANGUAGES, translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "vidverto-lang";

const LanguageContext = createContext(null);

function isSupported(code) {
  return LANGUAGES.some((l) => l.code === code);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Restore the saved choice on mount (falls back to the browser language).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && isSupported(saved)) {
      setLangState(saved);
      return;
    }
    const browser = window.navigator.language?.slice(0, 2);
    if (browser && isSupported(browser)) setLangState(browser);
  }, []);

  // Keep <html lang> and persistence in sync with the active language.
  useEffect(() => {
    const meta = LANGUAGES.find((l) => l.code === lang);
    document.documentElement.lang = meta?.htmlLang ?? lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (code) => {
    if (isSupported(code)) setLangState(code);
  };

  const value = {
    lang,
    setLang,
    languages: LANGUAGES,
    t: translations[lang] ?? translations[DEFAULT_LANG],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
