import type { ProjectExperience } from "../types";

// Filters are identified by locale-independent keys, so the selection survives a language switch.
export const PROJECT_FILTER_KEYS = ["all", "azure-functions", "azure-service-bus", "devops", "angular"] as const;

export type ProjectFilterKey = (typeof PROJECT_FILTER_KEYS)[number];

// Substrings matched against a project's techStack entries; an empty list matches every project.
const FILTER_TERMS: Record<ProjectFilterKey, string[]> = {
  all: [],
  "azure-functions": ["Azure Functions"],
  "azure-service-bus": ["Azure Service Bus"],
  devops: ["DevOps", "GitHub"],
  angular: ["Angular"],
};

export const filterProjects = (projects: ProjectExperience[], key: ProjectFilterKey): ProjectExperience[] => {
  const terms = FILTER_TERMS[key];
  if (terms.length === 0) return projects;
  return projects.filter((project) => project.techStack.some((tech) => terms.some((term) => tech.includes(term))));
};
