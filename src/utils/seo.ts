import type { Locale } from "../i18n";

const OG_LOCALES: Record<Locale, string> = { en: "en_US", de: "de_DE" };

const setMeta = (selector: string, value: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.setAttribute("content", value);
  }
};

/** Keeps <title>, description and the Open Graph tags in sync with the active locale and page. */
export const applyPageSeo = (locale: Locale, title: string, description: string): void => {
  document.documentElement.lang = locale;
  document.title = title;

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:locale"]', OG_LOCALES[locale]);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
};
