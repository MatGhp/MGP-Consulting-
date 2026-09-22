import { describe, expect, it } from "vitest";
import { resolveLegalRoute, resolveRoute } from "./routes";

describe("resolveLegalRoute", () => {
  it("maps the two legal paths, ignoring case and trailing slashes", () => {
    expect(resolveLegalRoute("/impressum")).toBe("impressum");
    expect(resolveLegalRoute("/IMPRESSUM/")).toBe("impressum");
    expect(resolveLegalRoute("/datenschutz")).toBe("datenschutz");
  });

  it("returns null for the home page and unknown paths", () => {
    expect(resolveLegalRoute("/")).toBeNull();
    expect(resolveLegalRoute("/foo")).toBeNull();
    expect(resolveLegalRoute("impressum")).toBeNull();
  });
});

describe("resolveRoute", () => {
  it("uses the pathname when no page parameter is present", () => {
    expect(resolveRoute("", "/datenschutz")).toEqual({ route: "datenschutz", canonicalPath: null });
    expect(resolveRoute("", "/")).toEqual({ route: null, canonicalPath: null });
  });

  it("restores a whitelisted path from the 404 redirect", () => {
    expect(resolveRoute("?page=%2Fimpressum", "/")).toEqual({ route: "impressum", canonicalPath: "/impressum" });
  });

  it("never writes back unknown or cross-origin page values", () => {
    expect(resolveRoute("?page=%2F%2Fevil.example", "/")).toEqual({ route: null, canonicalPath: "/" });
    expect(resolveRoute("?page=https%3A%2F%2Fevil.example", "/")).toEqual({ route: null, canonicalPath: "/" });
    expect(resolveRoute("?page=%2Fold-page", "/")).toEqual({ route: null, canonicalPath: "/" });
  });
});
