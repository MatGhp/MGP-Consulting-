/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ValueAddScenario, ProjectExperience, TechCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Mojtaba Ghanaat Pisheh",
  role: "Freelance Senior .NET / Azure Integration Developer",
  tagline: "Enterprise Integration | .NET Modernization | Cloud & Enterprise Delivery",
  headline: "Senior .NET / Azure Integration Developer",
  subheadline: "I help companies modernize, integrate, and stabilize enterprise software systems with .NET, Azure, APIs, Service Bus, Functions, CI/CD, and Angular.",
  location: "Frankfurt am Main, Germany (Remote-First across Germany & Europe)",
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
    remotePreference: "Remote-first freelance projects (optional occasional travel)",
    euEligible: "Fully eligible for European / German assignments"
  },
  trustFacts: [
    "15+ years software development experience",
    "Based in Frankfurt am Main, Germany",
    "Remote-first freelance projects",
    "German and English project communication",
    "Available from July 2026",
    "Enterprise software, Azure integration, and Angular business applications"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "enterprise-api",
    title: "1. Enterprise API & Integration Development",
    description: "Designing and implementing maintainable APIs, backend services, and integration components for enterprise environments.",
    iconName: "Cable",
    businessBenefit: "Ensures reliable, decoupled client-backend APIs and seamless communication between heterogeneous business programs.",
    keyOfferings: [
      ".NET & ASP.NET Core Web API, REST",
      "Azure Service Bus messaging (Topics, Queues)",
      "Azure Functions serverless background worker triggers",
      "API Management policies, secure authentication & identity integration"
    ]
  },
  {
    id: "azure-integration",
    title: "2. Azure Integration & Cloud-Native Backend Services",
    description: "Building Azure-based backend and integration components that support reliable communication, automation, and operational visibility.",
    iconName: "Cloud",
    businessBenefit: "Guarantees reliable message routing, secure configuration storage, and comprehensive backend monitoring insights.",
    keyOfferings: [
      "Azure Functions, Azure Service Bus, and Logic Apps",
      "Azure Key Vault keys, secrets, and credential storage security",
      "Application Insights & Azure Monitor integration telemetry",
      "Azure SQL Server setups and database schema integration"
    ]
  },
  {
    id: "dotnet-modernization",
    title: "3. .NET Modernization & Production Readiness",
    description: "Modernizing existing .NET applications step by step, improving maintainability, deployment reliability, and operational stability.",
    iconName: "History",
    businessBenefit: "Significantly decreases continuous maintenance liabilities and structural code complexity overheads.",
    keyOfferings: [
      "Modernizing obsolete systems to cross-platform .NET 6/7/8/9",
      "Clean Architecture & Domain-Driven Design (DDD) refactorings",
      "Entity Framework Core query fine-tuning and performance indexing",
      "Test automation suites and local containerization with Docker"
    ]
  },
  {
    id: "angular-business-apps",
    title: "4. Angular Business Applications",
    description: "Building and modernizing Angular-based enterprise applications with a focus on maintainability, performance, secure API integration, and user workflows.",
    iconName: "Layout",
    businessBenefit: "Delivers highly responsive frontend interfaces that match backend APIs flawlessly.",
    keyOfferings: [
      "Angular framework, client TypeScript, & asynchronous RxJS streams",
      "Nx workspace structuring & modular layout design standards",
      "Angular Material or Kendo UI customized widgets",
      "Cypress or Jest browser automated testing setups"
    ]
  }
];

export const VALUE_ADD_SCENARIOS: ValueAddScenario[] = [
  {
    id: "val-1",
    title: "Unstable or tightly coupled integrations",
    situation: "Distributed peripheral endpoints fail cascadingly, resulting in missing requests, broken communications, or missing transactions.",
    solution: "Introduce clearer API boundaries, asynchronous communication using robust message passing, resilient retry / exception handling, and deep monitoring tracing.",
    technicalDepth: ".NET core handlers, Azure Service Bus queues and topics, Application Insights",
    businessImpact: "Improves overall system maintainability, lowers direct operational risk, and makes connected solutions significantly easier to support."
  },
  {
    id: "val-2",
    title: "Legacy .NET applications that are difficult to change",
    situation: "Monolith software systems have gathered major technical debt, turning trivial feature additions into risky releases with frequent regression bugs.",
    solution: "Modernize existing codebases step by step, isolate high-impact product domains, introduce clean abstractions, and build automated regression testing boundaries.",
    technicalDepth: ".NET modernization, modular monorepos, EF Core, Unit & integration tests",
    businessImpact: "Empowers enterprise software development teams to deliver core feature changes securely without implementing massive risky rewrites."
  },
  {
    id: "val-3",
    title: "Manual or unreliable deployments",
    situation: "Releases depend on manual file copying or manual configuration steps, which creates variations across staging and production systems.",
    solution: "Create structured multi-tier CI/CD build and release pipelines, clean separation of configuration variables, and infrastructure definition.",
    technicalDepth: "Azure DevOps, GitHub Actions, Docker containers, Bicep / Terraform",
    businessImpact: "Ensures highly predictable, transparent release cycles and reduces critical manual deployment efforts and human errors."
  },
  {
    id: "val-4",
    title: "Frontend applications with growing complexity",
    situation: "Scalability issues on complex client applications create slow load frames, difficult UI state cycles, or circular data subscriptions.",
    solution: "Revise structure of Angular components, standardize clean state flows, secure API interaction points, and structure clear architectural lines.",
    technicalDepth: "Angular UI modularity, RxJS subscription patterns, state handling, Nx monorepro design",
    businessImpact: "Guarantees robust, maintainable business utilities and supports stable developer velocity over years of roadmap updates."
  }
];

export const PROJECTS: ProjectExperience[] = [
  {
    id: "proj-1",
    title: "Enterprise Supplier Portal & Onboarding Platform",
    clientType: "Mechanical Engineering Corporation",
    sector: "Enterprise / Mechanical Engineering",
    role: "Freelance Senior Full-Stack / Integration Developer",
    period: "2025 - 2026",
    duration: "12 Months",
    scope: "Co-developed an onboarding and supply portal workflow to manage high-security external supplier profile registrations and credentials management.",
    achievements: [
      "Implemented and extended onboarding and integration workflows.",
      "Worked on backend APIs, frontend screens, role-based workflows, and external system communication.",
      "Supported CI/CD, release preparation, debugging, and production issue analysis.",
      "Helped improve maintainability and reliability in a complex enterprise environment."
    ],
    techStack: [
      ".NET",
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
    title: "Azure Cloud-Native Integration Platform",
    clientType: "Enterprise IT Services Hub",
    sector: "IT Services / Enterprise Integration",
    role: "Lead Technical Consultant / Azure Integration Developer",
    period: "2024 - 2025",
    duration: "10 Months",
    scope: "Established decoupled serverless background components, message routers, and gateway filters tying together legacy systems with modern business components.",
    achievements: [
      "Designed and implemented Azure-based integration components.",
      "Automated infrastructure and deployment processes.",
      "Worked with secure configuration, secrets, APIs, and enterprise integration patterns.",
      "Improved delivery structure and maintainability of cloud integration workloads."
    ],
    techStack: [
      ".NET",
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
    title: "Smart Energy Cloud Platform",
    clientType: "German Energy Platform Operator",
    sector: "Energy Sector",
    role: "Senior Full-Stack / Cloud Developer",
    period: "2023 - 2024",
    duration: "14 Months",
    scope: "Supported a cloud business platform delivering administrative features, authentication bindings, monitoring reports, and scalable telemetry components.",
    achievements: [
      "Developed backend services and Angular-based business features.",
      "Supported cloud infrastructure and deployment automation.",
      "Worked with authentication, API management, monitoring, and enterprise delivery processes.",
      "Contributed to maintainable and scalable application architecture."
    ],
    techStack: [
      ".NET 6/7",
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
    title: "Enterprise Angular Applications & Real-Time Interfaces",
    clientType: "Medical and Industrial Solutions Company",
    sector: "Business Applications / Medical & Manufacturing Environments",
    role: "Senior Angular / Full-Stack Developer",
    period: "2021 - 2023",
    duration: "20 Months",
    scope: "Rearchitected heavy UI screens to handle high-performance updates, clear state definitions, and robust live browser components.",
    achievements: [
      "Built and modernized Angular-based enterprise applications.",
      "Integrated frontend applications with backend APIs and real-time communication.",
      "Improved component structure, maintainability, and testability.",
      "Supported complex business workflows and production-oriented delivery."
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
    description: "Robust programming runtimes, ORM engines, and modern backend architectures.",
    skills: [
      { name: "C# / .NET 6-9", level: "Strong focus", badge: "Primary language" },
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
    description: "Cloud-native middleware facilitating enterprise messaging, identity security, and backend tracking.",
    skills: [
      { name: "Azure Functions", level: "Strong focus", badge: "Serverless runtime" },
      { name: "Azure Service Bus", level: "Strong focus", badge: "Message queues & topics" },
      { name: "Azure API Management (APIM)", level: "Project experience", badge: "API Gateways" },
      { name: "Logic Apps", level: "Project experience", badge: "Workflow automation" },
      { name: "Azure Key Vault", level: "Strong focus", badge: "Secure configuration" },
      { name: "Azure App Service", level: "Project experience", badge: "App hosting" },
      { name: "Azure SQL", level: "Project experience", badge: "Cloud Database" },
      { name: "Application Insights & Monitor", level: "Practical experience", badge: "Telemetering" }
    ]
  },
  {
    id: "devops-delivery",
    categoryName: "DevOps & Cloud Delivery",
    description: "Automated pipelines, environmental container virtualization, and repeatable environments.",
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
    description: "Client-side platforms, state engines, and modular UI framework tools.",
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
    title: "1. Senior Autonomy & Readyness",
    description: "Once onboarded, I take absolute ownership of assigned tasks, clarify missing details with other teams proactively, and drive development work independently."
  },
  {
    title: "2. Pragmatic & Truthful Communication",
    description: "I speak German and English at a C1 level. I believe in direct, professional, and fact-based technical alignment. I outline trade-offs and options clearly so you can make informed business decisions."
  },
  {
    title: "3. Focus on Maintainable Code & Deployments",
    description: "I build robust, testable solutions integrated with structured CI/CD pipelines. This ensures long-term system stability, easy handovers, and reliable production environments."
  },
  {
    title: "4. Compliance & Enterprise Standards",
    description: "Operating from Germany, I am naturally aligned with European software standards, GDPR requirements, passwordless security practices, and professional compliance expectations."
  }
];

export const COLLABORATION_FAQS = [
  {
    q: "Are you fully freelance / self-employed?",
    a: "Yes. I operate strictly as a registered freelance professional in Germany. I accept contracting roles directly from corporate clients, IT project providers, or intermediary staffing agencies."
  },
  {
    q: "How do you handle NDA and confidentiality?",
    a: "Strict NDA compliance, data privacy, and confidentiality are essential parts of my professional service. All project examples listed on this site have been anonymized, simplified, and genericized to respect client business secrets and protect NDAs."
  },
  {
    q: "What is your typical remote and travel setup?",
    a: "I work remote-first, equipped with a high-bandwidth, secure work office in Frankfurt am Main. I am fully prepared to join on-site kick-offs, workshops, or critical deployment alignments whenever required."
  },
  {
    q: "How can we check your availability or profile?",
    a: "My current availability details are kept up to date on this website (currently booking for projects starting from July 2026). You can request a copy of my full freelance CV / Profile PDF directly via the contact buttons below."
  }
];
