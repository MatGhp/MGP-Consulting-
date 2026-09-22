import { describe, expect, it } from "vitest";
import {
  getAvailabilityBadgeText,
  getAvailabilityMonthYear,
  getAvailabilitySentence,
  getAvailabilityShortMonthYear,
  getNextAvailabilityDate
} from "./availability";

const at = (iso: string) => new Date(iso);

describe("getNextAvailabilityDate", () => {
  it("returns the following month within a year", () => {
    expect(getNextAvailabilityDate(at("2026-09-22T10:00:00Z"))).toEqual({ year: 2026, month: 10 });
  });

  it("rolls December over to January of the next year", () => {
    expect(getNextAvailabilityDate(at("2026-12-05T10:00:00Z"))).toEqual({ year: 2027, month: 1 });
  });

  it("uses the Berlin calendar day, not UTC, at month boundaries", () => {
    // 31 Oct 23:30 UTC is already 1 Nov 00:30 in Berlin (UTC+1) -> next month is December.
    expect(getNextAvailabilityDate(at("2026-10-31T23:30:00Z"))).toEqual({ year: 2026, month: 12 });
    // 31 Dec 23:30 UTC is 1 Jan 00:30 in Berlin -> next month is February of the new year.
    expect(getNextAvailabilityDate(at("2026-12-31T23:30:00Z"))).toEqual({ year: 2027, month: 2 });
  });
});

describe("formatting", () => {
  const ref = at("2026-09-22T10:00:00Z");

  it("formats month and year per locale", () => {
    expect(getAvailabilityMonthYear("en", ref)).toBe("October 2026");
    expect(getAvailabilityMonthYear("de", ref)).toBe("Oktober 2026");
  });

  it("formats the short year variant", () => {
    expect(getAvailabilityShortMonthYear("en", ref)).toBe("October '26");
    expect(getAvailabilityShortMonthYear("de", ref)).toBe("Oktober '26");
  });

  it("fills templates for badge and sentence", () => {
    expect(getAvailabilityBadgeText("de", "VERFÜGBAR AB {{monthYear}}", ref)).toBe("VERFÜGBAR AB OKTOBER 2026");
    expect(getAvailabilitySentence("en", "Available from {{monthYear}}", ref)).toBe("Available from October 2026");
  });
});
