import { getAbsoluteLocaleUrl } from "astro:i18n";
import type { SiteContent } from "./types";
import { LOCALES, defaultLang, type LangCode } from "./config";

import en from "./locales/en";
import es from "./locales/es";
import pt from "./locales/pt";
import fr from "./locales/fr";
import de from "./locales/de";
import hi from "./locales/hi";
import id from "./locales/id";
import ja from "./locales/ja";
import it from "./locales/it";
import ru from "./locales/ru";
import tr from "./locales/tr";
import ar from "./locales/ar";

const content: Record<LangCode, SiteContent> = {
  en,
  es,
  pt,
  fr,
  de,
  hi,
  id,
  ja,
  it,
  ru,
  tr,
  ar,
};

export function getContent(lang: string): SiteContent {
  return content[lang as LangCode] ?? content[defaultLang];
}

export interface Alternate {
  hreflang: string;
  href: string;
}

/**
 * hreflang alternates for a multilingual page. `route` is the locale-agnostic
 * path segment: "" for the home page, "about" for the about page.
 */
export function getAlternates(route: string): Alternate[] {
  const alts: Alternate[] = LOCALES.map((l) => ({
    hreflang: l.hreflang,
    href: getAbsoluteLocaleUrl(l.code, route),
  }));
  alts.push({ hreflang: "x-default", href: getAbsoluteLocaleUrl(defaultLang, route) });
  return alts;
}

export { LOCALES, defaultLang, isRtl, hreflangOf, nonDefaultLocales } from "./config";
export type { LangCode, LocaleMeta } from "./config";
export type { SiteContent } from "./types";
