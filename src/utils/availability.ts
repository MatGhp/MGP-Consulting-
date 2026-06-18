export interface NextAvailabilityDate {
  year: number;
  month: number;
}

export type AvailabilityLocale = "en" | "de";

const BUSINESS_TIMEZONE = "Europe/Berlin";

const getBerlinYearMonth = (referenceDate: Date = new Date()): { year: number; month: number } => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: BUSINESS_TIMEZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).formatToParts(referenceDate);

  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);

  if (!Number.isFinite(year) || !Number.isFinite(month)) {
    const fallback = new Date(referenceDate);
    return { year: fallback.getFullYear(), month: fallback.getMonth() + 1 };
  }

  return { year, month };
};

const toReferenceDate = ({ year, month }: NextAvailabilityDate): Date =>
  new Date(Date.UTC(year, month - 1, 15, 12, 0, 0));

export const getNextAvailabilityDate = (referenceDate: Date = new Date()): NextAvailabilityDate => {
  const berlin = getBerlinYearMonth(referenceDate);
  const isDecember = berlin.month === 12;

  return {
    year: isDecember ? berlin.year + 1 : berlin.year,
    month: isDecember ? 1 : berlin.month + 1
  };
};

const toIntlLocale = (locale: AvailabilityLocale): string =>
  locale === "de" ? "de-DE" : "en-US";

export const getAvailabilityMonthYear = (
  locale: AvailabilityLocale,
  referenceDate: Date = new Date()
): string => {
  const next = getNextAvailabilityDate(referenceDate);
  const displayDate = toReferenceDate(next);

  const month = new Intl.DateTimeFormat(toIntlLocale(locale), {
    timeZone: BUSINESS_TIMEZONE,
    month: "long"
  }).format(displayDate);

  return `${month} ${next.year}`;
};

export const getAvailabilityShortMonthYear = (
  locale: AvailabilityLocale,
  referenceDate: Date = new Date()
): string => {
  const next = getNextAvailabilityDate(referenceDate);
  const displayDate = toReferenceDate(next);

  const month = new Intl.DateTimeFormat(toIntlLocale(locale), {
    timeZone: BUSINESS_TIMEZONE,
    month: "long"
  }).format(displayDate);

  const yearShort = String(next.year).slice(-2);
  return `${month} '${yearShort}`;
};

export const getAvailabilityBadgeText = (
  locale: AvailabilityLocale,
  template: string,
  referenceDate: Date = new Date()
): string =>
  template.replace("{{monthYear}}", getAvailabilityMonthYear(locale, referenceDate).toUpperCase());

export const getAvailabilitySentence = (
  locale: AvailabilityLocale,
  template: string,
  referenceDate: Date = new Date()
): string =>
  template.replace("{{monthYear}}", getAvailabilityMonthYear(locale, referenceDate));
