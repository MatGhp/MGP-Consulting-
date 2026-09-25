import { describe, expect, it } from "vitest";
import { de } from "../i18n/translations/de";
import { en } from "../i18n/translations/en";
import { filterProjects, PROJECT_FILTER_KEYS } from "./projectFilter";

const ids = (projects: { id: string }[]) => projects.map((project) => project.id);

describe("filterProjects", () => {
  it("returns every project for the 'all' key in both languages", () => {
    expect(filterProjects(en.data.projects, "all")).toHaveLength(en.data.projects.length);
    expect(filterProjects(de.data.projects, "all")).toHaveLength(de.data.projects.length);
  });

  // Regression: switching EN -> DE used to leave the translated "All" label in state and hide every project.
  it("gives the same, non-empty result for each key in EN and DE", () => {
    for (const key of PROJECT_FILTER_KEYS) {
      const english = ids(filterProjects(en.data.projects, key));
      expect(english.length, key).toBeGreaterThan(0);
      expect(ids(filterProjects(de.data.projects, key)), key).toEqual(english);
    }
  });

  it("matches Azure DevOps and GitHub projects for the DevOps key", () => {
    for (const project of filterProjects(en.data.projects, "devops")) {
      expect(project.techStack.some((tech) => tech.includes("DevOps") || tech.includes("GitHub"))).toBe(true);
    }
  });
});
