/* ============================================================
   SOFRA — Dil context'i (TR/EN), localStorage'da kalıcı
   ============================================================ */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Lang, Strings } from "./types";
import { STRINGS } from "./strings";

const STORAGE_KEY = "sofra-lang";

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "tr";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "tr" || saved === "en") return saved;
  return "tr";
}

interface LangContextValue {
  lang: Lang;
  t: Strings;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "tr" ? "en" : "tr";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({ lang, t: STRINGS[lang], setLang, toggle }),
    [lang, setLang, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
