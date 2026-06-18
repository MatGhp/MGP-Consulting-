import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { de } from "./translations/de";
import { en } from "./translations/en";
import type { TranslationContent } from "./translations/schema";

export type Locale = "en" | "de";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
  content: TranslationContent;
}

const STORAGE_KEY = "mgp.locale";
const translations: Record<Locale, TranslationContent> = { en, de };

export const getIntlLocale = (locale: Locale): string => (locale === "de" ? "de-DE" : "en-US");

const getSavedLocale = (): Locale | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "en" || value === "de") {
    return value;
  }
  return null;
};

const getBrowserLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return "en";
  }
  return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
};

export const detectInitialLocale = (): Locale => getSavedLocale() ?? getBrowserLocale();

const resolvePath = (obj: unknown, key: string): unknown => {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
};

export const interpolate = (template: string, params?: Record<string, string>): string => {
  if (!params) {
    return template;
  }

  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key: string) => params[key] ?? "");
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const content = translations[locale];

  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      const value = resolvePath(content, key);
      if (typeof value !== "string") {
        return key;
      }
      return interpolate(value, params);
    },
    [content]
  );

  const contextValue = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      content
    }),
    [locale, setLocale, t, content]
  );

  return React.createElement(I18nContext.Provider, { value: contextValue }, children);
}

export const LOCALE_DISPLAY_NAMES: Record<Locale, string> = {
  en: "English",
  de: "Deutsch"
};

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
