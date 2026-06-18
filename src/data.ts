/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ValueAddScenario, ProjectExperience, TechCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Mojtaba Ghanaat Pisheh",
  role: "Freelance Senior .NET & Azure Developer for Enterprise Integration and Legacy Modernization",
  tagline: "Legacy .NET Modernization | Reliable Azure Integration | Production-Oriented Delivery",
  headline: "Freelance Senior .NET & Azure Developer",
  subheadline:
    "I help enterprise teams modernize legacy .NET systems, build reliable Azure integrations, and stabilize business-critical applications without risky rewrites.",
  location: "Based in Frankfurt am Main, Germany • Remote-first across Germany and the EU",
  locationShort: "Frankfurt am Main, Germany",
  email: "mojtaba@mgp-consulting.de",
  linkedin: "https://www.linkedin.com/in/mojtaba-ghanaat-pisheh",
  github: "https://github.com/mojtabagp",
  languages: [
    { name: "German", level: "C1 (Fluent Project Communication)" },
    { name: "English", level: "C1 (Fluent Project Communication)" },
    { name: "Persian", level: "Native" }
  ],
  availability: {
    status: "Available",
    dateText: "From July 2026",
    remotePreference: "Remote-first across Germany and the EU",
    euEligible: "Eligible for enterprise assignments in Germany and the EU"
  },
  trustFacts: [
    "20+ years software engineering experience",
    "Based in Frankfurt am Main, Germany",
    "Remote-first across Germany and the EU",
    "German and English project communication (C1)",
    "Available from July 2026",
    "Strong focus on .NET, Azure integration, APIs, CI/CD, and Angular"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "enterprise-api",
    title: "Enterprise API & Integration Development",
    description:
      "Design and implementation of maintainable APIs, backend services, and integration components for enterprise environments.",
    iconName: "Cable",
    businessBenefit:
      "Supports reliable communication across business systems, clearer API ownership, and lower integration risk in ongoing delivery.",
    keyOfferings: [
      "Modern .NET / ASP.NET Core, C#, Entity Framework Core, REST APIs, unit & integration testing",
      "Azure Service Bus messaging (topics and queues)",
      "Azure Functions for background integration workflows",
      "Azure API Management and secure API integration"
    ]
  },
  {
    id: "azure-integration",
    title: "Azure Integration & Backend Services",
    description:
      "Development of Azure-based backend and integration components for reliable communication, automation, and operational visibility.",
    iconName: "Cloud",
    businessBenefit:
      "Helps reduce incidents caused by brittle integrations through reliable messaging, secure configuration management, and observable operations.",
    keyOfferings: [
      "Azure Functions, Azure Service Bus, and Logic Apps",
      "Azure Key Vault for secrets and certificate handling",
      "Application Insights and Azure Monitor telemetry",
      "Azure App Service and Azure SQL integration"
    ]
  },
  {
    id: "dotnet-modernization",
    title: ".NET Modernization & Production Readiness",
    description:
      "Step-by-step modernization of existing .NET applications to improve maintainability, release reliability, and operational stability.",
    iconName: "History",
    businessBenefit:
      "Contributes to faster change cycles, lower regression risk, and a more maintainable codebase without disruptive rewrites.",
    keyOfferings: [
      "Modern .NET and ASP.NET Core delivery, plus modernization from older .NET versions",
      "Refactoring with Clean Architecture and DDD principles",
      "Entity Framework Core optimization and data access improvements",
      "Test automation and containerized local environments with Docker"
    ]
  },
  {
    id: "angular-business-apps",
    title: "Angular Business Applications",
    description:
      "Implementation and modernization of Angular-based enterprise applications with maintainable architecture and reliable API integration.",
    iconName: "Layout",
    businessBenefit:
      "Improves frontend maintainability, speeds up UI change cycles, and supports stable integration with backend services.",
    keyOfferings: [
      "Angular, TypeScript, and RxJS for business workflows",
      "Nx workspace structuring and modular architecture",
      "Angular Material and Kendo UI enterprise components",
      "Cypress and Jest test setup"
    ]
  }
];

export const VALUE_ADD_SCENARIOS: ValueAddScenario[] = [
  {
    id: "val-1",
    title: "Unstable or tightly coupled integrations",
    situation:
      "Critical integrations are tightly coupled, so one failing dependency can cause cascading issues across connected systems.",
    solution:
      "Define clear API boundaries, introduce asynchronous integration patterns, and add resilient retry and error handling with meaningful telemetry.",
    technicalDepth: ".NET, Azure Service Bus, ASP.NET Core Web API, Application Insights",
    businessImpact:
      "Leads to more stable integrations and helps reduce fragile releases, unclear ownership, and expensive production support."
  },
  {
    id: "val-2",
    title: "Legacy .NET applications that are difficult to change",
    situation:
      "Aging codebases with high technical debt make even small feature updates slow, risky, and expensive.",
    solution:
      "Modernize incrementally, isolate high-impact domains, improve architecture boundaries, and strengthen automated tests around critical behavior.",
    technicalDepth: "Modern .NET / ASP.NET Core, C#, Entity Framework Core, REST APIs, unit and integration testing. Recent project work with .NET 8–10 and modernization from older .NET versions.",
    businessImpact:
      "Supports faster feature delivery while helping reduce regression risk and growing technical debt."
  },
  {
    id: "val-3",
    title: "Manual or unreliable deployments",
    situation:
      "Manual deployment steps and inconsistent environment configuration create avoidable release defects.",
    solution:
      "Implement repeatable CI/CD pipelines, separate configuration from code, and standardize infrastructure provisioning practices.",
    technicalDepth: "Azure DevOps, GitHub Actions, Docker, Bicep, Terraform",
    businessImpact:
      "Creates more predictable deployments and helps reduce manual errors, environment drift, and release uncertainty."
  },
  {
    id: "val-4",
    title: "Frontend applications with growing complexity",
    situation:
      "Business UI layers become difficult to evolve when state handling, component boundaries, and API flows are inconsistent.",
    solution:
      "Refactor Angular component structure, clarify state management patterns, and align API integration contracts.",
    technicalDepth: "Angular, TypeScript, RxJS, Nx",
    businessImpact:
      "Results in faster UI changes, more stable state handling, and lower long-term maintenance effort."
  }
];

export const PROJECTS: ProjectExperience[] = [
  {
    id: "proj-1",
    title: "Supplier Onboarding & Integration Platform",
    clientType: "Enterprise supplier platform",
    sector: "Enterprise / Mechanical Engineering",
    role: "Freelance Senior .NET & Integration Developer",
    period: "2025 - 2026",
    duration: "12 Months",
    scope:
      "Extended onboarding and supplier integration workflows in a high-security multi-system enterprise environment.",
    achievements: [
      "Implemented backend API changes and Angular workflow screens with role-based business states.",
      "Extended integration points for external system communication and process reliability.",
      "Supported CI/CD delivery, release preparation, debugging, and production issue analysis.",
      "Current project delivery includes Modern .NET with .NET 10 and ASP.NET Core in production-oriented enterprise workflows."
    ],
    techStack: [
      ".NET 10",
      "ASP.NET Core",
      "Angular",
      "TypeScript",
      "Azure Service Bus",
      "Docker",
      "Kubernetes",
      "SQL Server",
      "Azure DevOps",
      "GitHub Enterprise"
    ],
    confidentialFlag: true
  },
  {
    id: "proj-2",
    title: "Azure Integration Platform for Business-Critical Workloads",
    clientType: "Enterprise integration services environment",
    sector: "IT Services / Enterprise Integration",
    role: "Lead Technical Consultant / Azure Integration Developer",
    period: "2024 - 2025",
    duration: "10 Months",
    scope:
      "Built Azure-based integration components to connect legacy systems with modern APIs and event-driven workflows.",
    achievements: [
      "Designed and implemented Azure Functions and messaging-driven integration services.",
      "Automated infrastructure and deployment setup for repeatable project delivery.",
      "Implemented secure configuration and secret handling using Azure Key Vault.",
      "Improved maintainability and operational visibility for integration workloads with strong production experience across .NET 8/9 and modernization from older .NET versions."
    ],
    techStack: [
      ".NET 8/9/10",
      "C#",
      "Azure Functions",
      "Azure Service Bus",
      "Logic Apps",
      "API Management",
      "Azure Key Vault",
      "Bicep",
      "Terraform",
      "Azure DevOps"
    ],
    confidentialFlag: true
  },
  {
    id: "proj-3",
    title: "Cloud Platform Enhancements for the Energy Sector",
    clientType: "Enterprise cloud business platform",
    sector: "Energy Sector",
    role: "Senior Full-Stack / Cloud Developer",
    period: "2023 - 2024",
    duration: "14 Months",
    scope:
      "Enhanced backend and frontend capabilities for an enterprise energy platform with security, API, and observability requirements.",
    achievements: [
      "Delivered backend services and Angular business features for operational workflows.",
      "Supported cloud infrastructure and deployment automation activities.",
      "Contributed to authentication, API management, and telemetry-driven support processes.",
      "Strengthened maintainability and release reliability for a business-critical platform."
    ],
    techStack: [
      ".NET (incl. .NET 6/7 in earlier platform phases)",
      "Angular",
      "Azure App Service",
      "Azure Service Bus",
      "Azure API Management",
      "Keycloak",
      "Terraform",
      "Azure Monitor",
      "Application Insights",
      "SQL Server"
    ],
    confidentialFlag: true
  },
  {
    id: "proj-4",
    title: "Angular Business Applications & Real-Time Interfaces",
    clientType: "Enterprise medical and industrial software environment",
    sector: "Business Applications / Medical & Manufacturing Environments",
    role: "Senior Angular / Full-Stack Developer",
    period: "2021 - 2023",
    duration: "20 Months",
    scope:
      "Modernized complex Angular business applications with focus on maintainable component architecture and stable real-time behavior.",
    achievements: [
      "Refactored Angular modules and UI workflows for clearer ownership and maintainability.",
      "Integrated frontend features with backend APIs and real-time interfaces.",
      "Improved testability and reliability across business-critical UI components.",
      "Supported long-running delivery streams with production-oriented engineering practices."
    ],
    techStack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Nx",
      "Kendo UI",
      "SignalR",
      "Cypress",
      "Jest",
      ".NET APIs",
      "Azure App Service"
    ],
    confidentialFlag: true
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "dotnet-backend",
    categoryName: ".NET & Backend",
    description:
      "Modern .NET / ASP.NET Core, C#, Entity Framework Core, REST APIs, unit and integration testing. Current project work with .NET 10; strong production experience with .NET 8/9 and enterprise modernization from older .NET versions.",
    skills: [
      { name: "Modern .NET", level: "Strong focus", badge: "Primary focus" },
      { name: "ASP.NET Core Web API", level: "Strong focus", badge: "RESTful architecture" },
      { name: "Entity Framework Core", level: "Practical experience", badge: "Data access / ORM" },
      { name: "REST APIs", level: "Strong focus", badge: "Web services" },
      { name: "Clean Architecture / DDD", level: "Practical experience", badge: "Design discipline" },
      { name: "Authentication & Authorization", level: "Practical experience", badge: "Identity / Security" },
      { name: "SQL Server / PostgreSQL", level: "Practical experience", badge: "Relational persistence" }
    ]
  },
  {
    id: "azure-integration",
    categoryName: "Azure & Integration",
    description:
      "Reliable Azure integration services, secure configuration management, and operational observability.",
    skills: [
      { name: "Azure Functions", level: "Strong focus", badge: "Serverless runtime" },
      { name: "Azure Service Bus", level: "Strong focus", badge: "Message queues & topics" },
      { name: "Azure API Management (APIM)", level: "Project experience", badge: "API Gateways" },
      { name: "Logic Apps", level: "Project experience", badge: "Workflow automation" },
      { name: "Azure Key Vault", level: "Strong focus", badge: "Secure configuration" },
      { name: "Azure App Service", level: "Project experience", badge: "App hosting" },
      { name: "Azure SQL", level: "Project experience", badge: "Cloud Database" },
      { name: "Application Insights & Monitor", level: "Practical experience", badge: "Telemetry" }
    ]
  },
  {
    id: "devops-delivery",
    categoryName: "DevOps & Cloud Delivery",
    description: "CI/CD implementation, containerized workflows, and repeatable deployment practices.",
    skills: [
      { name: "Azure DevOps Pipelines", level: "Practical experience", badge: "Build & release YAML" },
      { name: "GitHub Actions", level: "Project experience", badge: "Continuous Integration" },
      { name: "Docker", level: "Practical experience", badge: "Containerization" },
      { name: "Kubernetes (AKS basics)", level: "Project experience", badge: "Container orch." },
      { name: "Terraform", level: "Project experience", badge: "Infrastructure as Code" },
      { name: "Bicep", level: "Project experience", badge: "Azure-native IaC" },
      { name: "CI/CD Pipelines", level: "Practical experience", badge: "Quality & automation gates" }
    ]
  },
  {
    id: "frontend-tech",
    categoryName: "Frontend",
    description:
      "Angular-based business frontends with maintainable state management and modular architecture.",
    skills: [
      { name: "Angular", level: "Strong focus", badge: "SPA Framework" },
      { name: "TypeScript", level: "Strong focus", badge: "Type-safe script language" },
      { name: "RxJS", level: "Core skill", badge: "Asynchronous streams" },
      { name: "Nx Workspaces", level: "Project experience", badge: "Monorepo design" },
      { name: "Angular Material", level: "Practical experience", badge: "UI components" },
      { name: "Kendo UI", level: "Project experience", badge: "Enterprise controls" },
      { name: "Cypress & Jest", level: "Project experience", badge: "Test suites" },
      { name: "HTML & SCSS / Tailwind", level: "Practical experience", badge: "Responsive layout styling" }
    ]
  }
];

export const COLLABORATION_VALUES = [
  {
    title: "Senior Ownership",
    description:
      "After onboarding, I work independently, clarify open points proactively, and drive delivery with clear technical accountability."
  },
  {
    title: "Clear Communication",
    description:
      "I communicate in German and English (C1) and focus on clear trade-offs, practical options, and transparent status updates."
  },
  {
    title: "Quality & Delivery Approach",
    description:
      "I focus on maintainable implementation, production-oriented delivery, and CI/CD project experience to support stable handover and operations."
  },
  {
    title: "Enterprise Collaboration",
    description:
      "Available for direct clients, approved supplier onboarding, and professional agency frameworks with NDA-ready communication and structured onboarding."
  }
];

export const COLLABORATION_FAQS = [
  {
    q: "Do you work as an independent freelancer?",
    a: "Yes. I work as an independent freelance consultant based in Germany and support enterprise assignments through direct client engagement, approved supplier channels, and professional agency frameworks."
  },
  {
    q: "How do you handle NDA and confidentiality?",
    a: "NDA-ready communication and confidentiality are standard. Project references on this website are anonymized and simplified to protect client confidentiality and active contractual obligations."
  },
  {
    q: "What is your remote and on-site setup?",
    a: "I work remote-first from Frankfurt am Main and can join on-site kick-offs, workshops, and key delivery milestones when required by the project setup."
  },
  {
    q: "How can we request your profile and availability details?",
    a: "Current availability is shown on this website (currently from July 2026). A current freelance profile is available upon request for project evaluation, client submission, and supplier onboarding."
  }
];
