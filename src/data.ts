/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ValueAddScenario, ProjectExperience, TechCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Mojtaba Ghanaat-Pisheh",
  role: "Freelance Senior .NET / Azure Integration Developer",
  tagline: "Enterprise Integration | Cloud-Native Systems | Stable Digital Modernization",
  headline: "Senior .NET / Azure Integration Developer",
  subheadline: "I help companies modernize, integrate, and stabilize enterprise software systems with .NET, Azure, APIs, Service Bus, Functions, CI/CD, and Angular.",
  location: "Frankfurt am Main, Germany (Remote-First across Germany & Europe)",
  locationShort: "Frankfurt am Main, Germany",
  email: "mojtaba@mgp-consulting.de",
  linkedin: "https://www.linkedin.com/in/your-profile", // Placeholder that user can customize
  github: "https://github.com/#", // Professional design
  languages: [
    { name: "German", level: "Professional / Fluent" },
    { name: "English", level: "Fluent / Business English" }
  ],
  availability: {
    status: "Available", // "Available" or "Partially Booked" or "Selected Capacity"
    dateText: "Immediately (Q3 2026)",
    remotePreference: "Up to 100% Remote, optional occasional travel to Frankfurt/Main & DE-wide hubs",
    euEligible: "Fully eligible for EU-wide assignments & contracts"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "enterprise-integration",
    title: "1. Enterprise API & Message-Driven Integration",
    description: "Designing and implementing highly decoupled, fault-tolerant message topologies for distributed enterprise networks.",
    iconName: "Cable",
    businessBenefit: "Eliminates hard dependencies, guarantees message delivery under peak loads, and connects legacy components with modern cloud stacks.",
    keyOfferings: [
      "Azure Service Bus implementation (Topics, Queues, Sessions, Dead Lettering)",
      "RESTful API & gRPC architecture using ASP.NET Core Web API",
      "Event-driven integration via Azure Event Hubs and Event Grid",
      "Migration of legacy queueing mechanics (e.g. MSMQ, activeMQ) to Azure Cloud native"
    ]
  },
  {
    id: "cloud-native-serverless",
    title: "2. Cloud-Native & Serverless Backends",
    description: "Building auto-scaling cloud microservices that run efficiently and minimize infrastructure cost overheads.",
    iconName: "Cloud",
    businessBenefit: "Drastically reduces server costs, ensures sub-second reaction times under heavy scale, and simplifies deployment models.",
    keyOfferings: [
      "Serverless pipelines with Azure Functions (.NET Isolated Worker Model)",
      "Containerized microservices via Azure Container Apps & Azure Kubernetes Service (AKS)",
      "Database schema tuning & secure persistence on Azure SQL, Cosmos DB, and Firestore",
      "Enterprise security integration via Azure Key Vault, Managed Identities, and OAuth2/OIDC"
    ]
  },
  {
    id: "software-modernization",
    title: "3. Enterprise .NET Modernization",
    description: "Refactoring obsolete, fragile monolithic code projects into modular, testable, and future-proof software architectures.",
    iconName: "History",
    businessBenefit: "Lowers continuous maintenance costs, empowers teams to release features faster, and solves the 'unmaintainable legacy legacy' problem.",
    keyOfferings: [
      "Migration strategies from old .NET Framework 4.x to modern cross-platform .NET 8 / 9",
      "Domain-Driven Design (DDD) & Clean Architecture structural refactorings",
      "Comprehensive test automation layers (Unit, Integration, and Architectural assertions with xUnit)",
      "Optimizing performance critical queries and resolving asynchronous resource locks"
    ]
  },
  {
    id: "angular-business-apps",
    title: "4. Business Application Development",
    description: "Creating responsive, secure, and clean Angular-based web interfaces to control and monitor backend systems.",
    iconName: "Layout",
    businessBenefit: "Provides intuitive UI/UX for internal business operations, customer profiles, or data dashboard analytics.",
    keyOfferings: [
      "Responsive Single-Page Applications (SPA) with Angular (Core, RxJS, NgRx)",
      "Secure Azure AD / MSAL API authorization layers on client-side SPA",
      "Consistent UI/UX styling with Tailwind CSS or component libraries",
      "Smooth integration with modular backend API contracts"
    ]
  },
  {
    id: "automated-devops",
    title: "5. Production-Ready CI/CD & Security Automation",
    description: "Setting up robust pipeline topologies that guarantee zero-downtime, fully audited, reproducible cloud releases.",
    iconName: "GitMerge",
    businessBenefit: "Removes manual deployment risks, enables safe deployments several times a day, and assures robust code quality checks.",
    keyOfferings: [
      "Infrastructure as Code (IaC) via Azure Bicep & Terraform",
      "Comprehensive Azure DevOps Pipelines and GitHub Actions setup",
      "Automated static analysis, code coverage thresholds, and credential hunting",
      "Multi-stage release configurations with blue/green deployment paths"
    ]
  }
];

export const VALUE_ADD_SCENARIOS: ValueAddScenario[] = [
  {
    id: "val-1",
    title: "Unstable Integration & Missing Resiliency",
    situation: "Distributed subsystems fail cascadingly. Requests are randomly lost, resulting in inconsistent state database records and business friction.",
    solution: "Introduce Azure Service Bus with exponential back-off retries, dead-letter routing rules, Peek-Lock transaction mechanics, and outbox patterns.",
    technicalDepth: ".NET Background Services, Outbox design patterns, Azure Service Bus SDK with automatic retries and dead-lettering alerts.",
    businessImpact: "99.99% transactional reliability. Disrupted peripheral endpoints no longer bring down the central billing or shipping workflows."
  },
  {
    id: "val-2",
    title: "Slow, Prevalent Technical Debt in Monoliths",
    situation: "A 10-year-old on-premise registry. A single minor update breaks unrelated services, developers are afraid to make structural extensions.",
    solution: "Isolate high-impact domains into containerized Azure Container Apps, migrate to modern .NET cross-platform on Linux, set up automated pipelines.",
    technicalDepth: ".NET 8, Linux Containers, Dockerfile multi-stage builds, Azure DevOps secure pipelines.",
    businessImpact: "Release cycle speeds up from once per quarter to several times a day. Hosting costs drop by 45% due to flexible Linux nodes."
  },
  {
    id: "val-3",
    title: "Security and Secret Management Compliancy",
    situation: "Vulnerable hardcoded database passwords and Azure API variables stored inside VCS repositories or plain config text fields.",
    solution: "Eliminate static passwords entirely. Provision Passwordless Azure Managed Identities, bind strictly using Azure Key Vault with RBAC permissions.",
    technicalDepth: "Azure Active Directory/Entra ID, Managed Identities, Key Vault SDK access, RBAC IAM assignments.",
    businessImpact: "Full compliance with enterprise security requirements and ISO/IEC 27001 checklists, removing credentials from dev access scopes."
  }
];

export const PROJECTS: ProjectExperience[] = [
  {
    id: "proj-1",
    title: "Fault-Tolerant IoT Storage & Integration Engine",
    clientType: "German Renewable Energy Leader",
    sector: "Energy & Smart Utilities",
    role: "Freelance Senior Lead Azure Integration Developer",
    period: "09/2024 - Present",
    duration: "Ongoing",
    scope: "Rearchitected telemetry collection that aggregates millions of event packets daily from remote localized wind/solar park installations.",
    achievements: [
      "Spearheaded distributed Event-Hub-to-Service-Bus topologies with isolated workers processing peak loads smoothly.",
      "Replaced synchronous HTTP API locks with consumer-driven worker apps, neutralizing database load spikes.",
      "Established multi-environment Infrastructure as Code (IaC) using Azure Bicep, reducing setup time for fresh environments from weeks to 20 minutes.",
      "Integrated continuous architectural validation tests, halting cyclic dependencies before deployment."
    ],
    techStack: [".NET 8", "Azure Service Bus", "Azure Functions", "Bicep IaC", "Entra ID", "xUnit", "ARM Templates"],
    confidentialFlag: true
  },
  {
    id: "proj-2",
    title: "Legacy Backend Migration & Logistics Hub Modernization",
    clientType: "European Logistics & Cargo Group",
    sector: "Logistics, Shipping & Supply Chain",
    role: "Freelance Senior .NET Cloud Backend Engineer",
    period: "11/2023 - 08/2024",
    duration: "10 Months",
    scope: "Decomposed a fragile monolithic .NET Framework logistics engine into highly cohesive serverless micro-backends and modern UI dashboards.",
    achievements: [
      "Successfully decoupled the core dispatch registry using clean hexagonal structures on .NET Isolated worker functions.",
      "Integrated secure Azure API Management (APIM) layers, enabling external logistics partners to search dispatch items securely.",
      "Co-implemented a highly responsive Angular 17 control deck featuring real-time package updates via SignalR.",
      "Optimized legacy SQL Server queries with proper index distributions, boosting critical execution speed by 300%."
    ],
    techStack: [".NET Core 8", "Angular 17", "Azure Functions", "Azure APIM", "SignalR", "SQL Server", "GitHub Actions"],
    confidentialFlag: true
  },
  {
    id: "proj-3",
    title: "Secure Enterprise B2B Document Integration Platform",
    clientType: "German Financial Infrastructure Provider",
    sector: "Financial Tech & Securitization",
    role: "Senior Integrations Developer (.NET / Azure)",
    period: "02/2022 - 10/2023",
    duration: "21 Months",
    scope: "Enabled critical paperless, highly compliant PDF and metadata ingestion mechanics matching rigorous German BaFin audits.",
    achievements: [
      "Configured robust message-level encryption on RESTful API payloads containing sensitive European corporate client metrics.",
      "Leveraged Azure Cosmos DB and Azure Blob cold storage tiers, organizing file records with custom lifecycle retention rules.",
      "Set up full-scale, multi-tier Azure DevOps YAML CI/CD orchestrations with automated white-box testing.",
      "Authored extensive technical architectural runbooks, reducing external contractor onboarding time by 50%."
    ],
    techStack: [".NET Core 6", "Azure Key Vault", "Azure Blob Storage", "Cosmos DB", "Azure DevOps Pipelines", "REST APIs", "SonarQube"],
    confidentialFlag: true
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "dotnet-ecosystem",
    categoryName: ".NET Ecosystem",
    description: "Core programming runtime and framework frameworks. Focusing on premium backend structure.",
    skills: [
      { name: "C# / .NET 8 & 9", level: "Expert", badge: "Primary language" },
      { name: "ASP.NET Core Web API", level: "Expert", badge: "REST & gRPC" },
      { name: "Entity Framework Core", level: "Expert", badge: "ORM" },
      { name: "Clean Architecture / DDD", level: "Expert", badge: "Design discipline" },
      { name: "xUnit / FluentAssertions", level: "Expert", badge: "Test suites" },
      { name: "SignalR / WebSockets", level: "Advanced", badge: "Real-time" }
    ]
  },
  {
    id: "azure-cloud",
    categoryName: "Azure Cloud & Serverless",
    description: "Cloud-native services supporting robust telemetry, secure scaling, and decoupled integrations.",
    skills: [
      { name: "Azure Service Bus", level: "Expert", badge: "Integrations & Queues" },
      { name: "Azure Functions", level: "Expert", badge: "Serverless (Isolated)" },
      { name: "Azure APIM", level: "Advanced", badge: "API Gateways" },
      { name: "Azure Key Vault", level: "Expert", badge: "Secret Security" },
      { name: "Managed Identities (Entra ID)", level: "Expert", badge: "Passwordless IAM" },
      { name: "Cosmos DB / Azure SQL", level: "Advanced", badge: "Databases" }
    ]
  },
  {
    id: "devops-iac",
    categoryName: "DevOps & Infrastructure",
    description: "Complete release lifecycle, environmental isolation, and automation.",
    skills: [
      { name: "Azure DevOps Pipelines", level: "Expert", badge: "YAML CI/CD" },
      { name: "GitHub Actions", level: "Advanced", badge: "CI/CD" },
      { name: "Azure Bicep / IaC", level: "Advanced", badge: "Infrastructure as Code" },
      { name: "Docker Containers", level: "Advanced", badge: "Linux runtime consistency" },
      { name: "IIS & Linux Host Tuning", level: "Advanced", badge: "Environment Hosting" }
    ]
  },
  {
    id: "frontend-business",
    categoryName: "Frontend & Tooling",
    description: "Sleek frontend controls that map cleanly to senior backend integration endpoints.",
    skills: [
      { name: "Angular (Core, RxJS, Signals)", level: "Advanced", badge: "Core UI Engine" },
      { name: "TypeScript", level: "Advanced", badge: "Strict client code" },
      { name: "Tailwind CSS", level: "Advanced", badge: "Responsive styles" },
      { name: "Git / Trunk-Based Flow", level: "Expert", badge: "SCM Discipline" }
    ]
  }
];

export const COLLABORATION_VALUES = [
  {
    title: "1. Senior Autonomy",
    description: "You do not need to micro-manage me. Once onboarded, I take absolute ownership of tickets, clarify requirements proactively, and coordinate technical details with peripheral teams directly on eye-level."
  },
  {
    title: "2. Clean, Resilient Code is Cheaper",
    description: "I write stable, self-documenting code supported by strong unit/integration test assertions. It stops bugs from manifesting in production and makes the system understandable for future maintenance teams."
  },
  {
    title: "3. Clear Non-Desperate Communication",
    description: "I speak German and English fluently. I am direct, honest, and pragmatic. If a technical direction is highly risky or introduces critical technical debt, I will articulate alternatives clearly with clear trade-offs, supporting business decisions."
  },
  {
    title: "4. German & European Compliance Focus",
    description: "Operating from Frankfurt am Main, I understand critical local regulatory conditions, GDPR, secure credential guidelines, and business processes standard in central EU enterprise projects."
  }
];

export const COLLABORATION_FAQS = [
  {
    q: "Are you fully freelance / self-employed?",
    a: "Yes. I operate strictly as a registered freelancer. I accept contract projects directly from enterprise clients, staffing solution providers, or agencies."
  },
  {
    q: "How do you work with NDA and customer privacy?",
    a: "Strict confidentiality is a given. I never use proprietary schemas, customer names, or trademarked solutions in open portfolios. All project descriptions above are genericised to respect client non-disclosure agreements."
  },
  {
    q: "What are your standard remote setup preferences?",
    a: "I work Remote-First. I maintain a high-end secure development office in Frankfurt am Main with dual redundant fiber access, backup power, and fully compliant hardware. I am happy to join sprint planning, workshops, or kickoffs on-site whenever needed."
  },
  {
    q: "What is your notice period / availability?",
    a: "My availability is updated transparently on this landing page. Normally I am booked for 3-9 month waves, but slots open up and I often maintain 4-8 hours a week of buffer for modernization consulting, high-impact architecture reviews, or emergencies."
  }
];
