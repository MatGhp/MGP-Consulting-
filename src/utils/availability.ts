export interface NextAvailabilityDate {
  year: number;
  month: number;
}

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

export const getAvailabilityMonthYear = (referenceDate: Date = new Date()): string => {
  const next = getNextAvailabilityDate(referenceDate);
  const displayDate = toReferenceDate(next);

  const month = new Intl.DateTimeFormat("en-US", {
    timeZone: BUSINESS_TIMEZONE,
    month: "long"
  }).format(displayDate);

  return `${month} ${next.year}`;
};

export const getAvailabilityShortMonthYear = (referenceDate: Date = new Date()): string => {
  const next = getNextAvailabilityDate(referenceDate);
  const displayDate = toReferenceDate(next);

  const month = new Intl.DateTimeFormat("en-US", {
    timeZone: BUSINESS_TIMEZONE,
    month: "long"
  }).format(displayDate);

  const yearShort = String(next.year).slice(-2);
  return `${month} '${yearShort}`;
};

export const getAvailabilityBadgeText = (referenceDate: Date = new Date()): string =>
  `AVAILABLE FROM ${getAvailabilityMonthYear(referenceDate).toUpperCase()}`;

export const getAvailabilitySentence = (referenceDate: Date = new Date()): string =>
  `Available from ${getAvailabilityMonthYear(referenceDate)}`;
