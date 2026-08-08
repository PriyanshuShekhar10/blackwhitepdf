export type LangCode =
  | "en"
  | "es"
  | "pt"
  | "fr"
  | "de"
  | "hi"
  | "id"
  | "ja"
  | "it"
  | "ru"
  | "tr"
  | "ar";

export interface LocaleMeta {
  code: LangCode;
  /** Native language name shown in the switcher. */
  label: string;
  /** BCP-47 tag used for hreflang / <html lang>. */
  hreflang: string;
  dir: "ltr" | "rtl";
}

export const defaultLang: LangCode = "en";

export const LOCALES: LocaleMeta[] = [
  { code: "en", label: "English", hreflang: "en-US", dir: "ltr" },
  { code: "es", label: "Español", hreflang: "es-ES", dir: "ltr" },
  { code: "pt", label: "Português", hreflang: "pt-BR", dir: "ltr" },
  { code: "fr", label: "Français", hreflang: "fr-FR", dir: "ltr" },
  { code: "de", label: "Deutsch", hreflang: "de-DE", dir: "ltr" },
  { code: "hi", label: "हिन्दी", hreflang: "hi-IN", dir: "ltr" },
  { code: "id", label: "Bahasa Indonesia", hreflang: "id-ID", dir: "ltr" },
  { code: "ja", label: "日本語", hreflang: "ja-JP", dir: "ltr" },
  { code: "it", label: "Italiano", hreflang: "it-IT", dir: "ltr" },
  { code: "ru", label: "Русский", hreflang: "ru-RU", dir: "ltr" },
  { code: "tr", label: "Türkçe", hreflang: "tr-TR", dir: "ltr" },
  { code: "ar", label: "العربية", hreflang: "ar", dir: "rtl" },
];

export const nonDefaultLocales = LOCALES.filter((l) => l.code !== defaultLang);

export function isRtl(code: string): boolean {
  return LOCALES.find((l) => l.code === code)?.dir === "rtl";
}

export function hreflangOf(code: string): string {
  return LOCALES.find((l) => l.code === code)?.hreflang ?? "en-US";
}
