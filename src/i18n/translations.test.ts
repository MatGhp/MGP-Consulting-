import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
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

const resolve = (tree: unknown, path: string): unknown =>
  path.split(".").reduce<unknown>(
    (node, key) => (node && typeof node === "object" ? (node as Record<string, unknown>)[key] : undefined),
    tree
  );

describe("translations", () => {
  it("EN and DE have the same structure", () => {
    expect(shape(de)).toEqual(shape(en));
  });

  it("EN and DE link to the same section anchors", () => {
    expect(de.ui.navbar.navLinks.map((link) => link.href)).toEqual(en.ui.navbar.navLinks.map((link) => link.href));
  });

  // t() falls back to printing the key itself, so a removed key would show up as raw text on the page.
  it("every t() key used in a component exists in both languages", () => {
    const componentsDir = fileURLToPath(new URL("../components/", import.meta.url));
    const keys = new Set<string>();
    for (const file of readdirSync(componentsDir).filter((name) => name.endsWith(".tsx"))) {
      const source = readFileSync(join(componentsDir, file), "utf8");
      for (const match of source.matchAll(/\bt\(\s*"([^"]+)"/g)) {
        keys.add(match[1]);
      }
    }

    expect(keys.size).toBeGreaterThan(0);
    for (const key of keys) {
      expect(typeof resolve(en, key), `en: ${key}`).toBe("string");
      expect(typeof resolve(de, key), `de: ${key}`).toBe("string");
    }
  });
});
