/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  businessBenefit: string;
  keyOfferings: string[];
}

export interface ValueAddScenario {
  id: string;
  title: string;
  situation: string;
  solution: string;
  technicalDepth: string;
  businessImpact: string;
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

export interface TechSkill {
  name: string;
  description?: string;
  level: string;
  badge?: string;
}

export interface TechCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: TechSkill[];
}

export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  role: string;
  messageType: "Project Inquiry" | "Staffing Request" | "General Collaboration";
  message: string;
  freelanceDocRequested: boolean;
}
