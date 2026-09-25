/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  situation: string; // The typical problem a client comes with
  approach: string; // What I do about it
  businessBenefit: string;
  technologies: string[]; // Short names, shown as chips
}

export interface ProjectExperience {
  id: string;
  title: string;
  clientType: string; // e.g. "German Energy Provider", "European Logistics Leader"
  sector: string; // e.g. "Energy & Utilities", "Logistics & Supply Chain"
  role: string; // e.g. "Freelance Lead Azure Integration Architect"
  period: string; // e.g. "06/2024 - Present"
  duration: string; // e.g. "9 Months"
  scope: string; // High-level overview of the modernization/integration task
  achievements: string[]; // Bullet-proof delivery items
  techStack: string[]; // Key technologies
  confidentialFlag: boolean; // Indicates the client remains anonymous intentionally
}

export type SkillLevel = "primary" | "experience";

export interface TechSkill {
  name: string;
  description?: string;
  level: SkillLevel;
  badge?: string;
}

export interface TechCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: TechSkill[];
}
