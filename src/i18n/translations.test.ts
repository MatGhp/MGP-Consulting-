import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { resolvePath } from "./index";
import { de } from "./translations/de";
import { en } from "./translations/en";

// Replaces every leaf with its type so two translation trees can be compared by structure, including array lengths.
const shape = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shape(child)]));
  }
  return typeof value;
};

// Every t(...) call in the app's .tsx files, split into literal keys and calls the test cannot resolve statically.
const collectTranslationCalls = () => {
  const srcDir = fileURLToPath(new URL("../", import.meta.url));
  const literalKeys = new Set<string>();
  const nonLiteralCalls: string[] = [];

  const files = readdirSync(srcDir, { recursive: true, encoding: "utf8" }).filter((file) => file.endsWith(".tsx"));
  for (const file of files) {
    const source = readFileSync(join(srcDir, file), "utf8");
    for (const match of source.matchAll(/\bt\(\s*(?:"([^"]+)"|'([^']+)'|(`[^`]*`|[^\s)]+))/g)) {
      const [, doubleQuoted, singleQuoted, other] = match;
      const key = doubleQuoted ?? singleQuoted;
      if (key !== undefined) {
        literalKeys.add(key);
      } else if (other.startsWith("`") && !other.includes("${")) {
        literalKeys.add(other.slice(1, -1));
      } else {
        nonLiteralCalls.push(`${file}: t(${other}`);
      }
    }
  }
  return { literalKeys, nonLiteralCalls };
};

describe("translations", () => {
  it("EN and DE have the same structure", () => {
    expect(shape(de)).toEqual(shape(en));
  });

  it("EN and DE link to the same section anchors", () => {
    expect(de.ui.navbar.navLinks.map((link) => link.href)).toEqual(en.ui.navbar.navLinks.map((link) => link.href));
  });

  // t() falls back to printing the key itself, so a removed or misspelled key would show up as raw text on the page.
  it("every t() key used in the app exists in both languages", () => {
    const { literalKeys, nonLiteralCalls } = collectTranslationCalls();

    // Dynamic keys cannot be checked here; read the value from `content` instead so TypeScript checks it.
    expect(nonLiteralCalls).toEqual([]);
    expect(literalKeys.size).toBeGreaterThan(0);
    for (const key of literalKeys) {
      expect(typeof resolvePath(en, key), `en: ${key}`).toBe("string");
      expect(typeof resolvePath(de, key), `de: ${key}`).toBe("string");
    }
  });
});
