import { TranslationContent } from "./schema";

export const en: TranslationContent = {
  seo: {
    home: {
      title: "Mojtaba Ghanaat Pisheh – Freelance Senior .NET & Azure Developer | MGP Consulting",
      description:
        "Freelance Senior .NET and Azure Developer based in Frankfurt am Main, Germany. Enterprise integration, legacy .NET modernization, Azure backend services, CI/CD, and Angular business applications."
    },
    legal: {
      impressum: {
        title: "Impressum | MGP Consulting",
        description: "Provider and legal notice information for IT Consulting - Mojtaba Ghanaat Pisheh."
      },
      datenschutz: {
        title: "Privacy Policy | MGP Consulting",
        description: "Privacy and data processing information for visitors of IT Consulting - Mojtaba Ghanaat Pisheh website."
      }
    }
  },
  ui: {
    navbar: {
      navLinks: [
        { name: "Services", href: "#services" },
        { name: "Approach", href: "#approach" },
        { name: "Experience", href: "#experience" },
        { name: "Tech", href: "#tech-focus" },
        { name: "Contact", href: "#contact" }
      ],
      contactCta: "Discuss Project",
      toggleMenuAria: "Toggle menu",
      officeLocationLabel: "Office location",
      languageSwitcherAria: "Switch language",
      languageOptionEn: "EN",
      languageOptionDe: "DE"
    },
    hero: {
      kpiYearsValue: "20+",
      kpiLanguageValue: "C1",
      kpiLocationValue: "Frankfurt",
      kpiYearsExp: "Years of experience",
      kpiLanguageFluency: "German & English",
      kpiLocationLabel: "Remote-first, DE & EU",
      kpiAvailableFrom: "Available from",
      discussProjectCta: "Discuss Project",
      secondaryCta: "View project experience"
    },
    services: {
      eyebrow: "Services",
      title: "What I can help with",
      intro:
        "I focus on legacy .NET modernization, Azure integration, maintainable backend services, and practical project delivery.",
      situationLabel: "Typical situation",
      approachLabel: "What I do",
      technologiesUsedLabel: "Technologies used",
      howItHelpsLabel: "How it helps"
    },
    approach: {
      eyebrow: "Approach",
      title: "From first review to clean handover",
      intro: "Every system is different, but the order of the work is usually the same.",
      steps: [
        {
          title: "Understand the system",
          description: "Review the codebase, integrations and release process, and agree on the risky parts first."
        },
        {
          title: "Protect critical behavior",
          description: "Add tests around critical paths and CI checks before anything larger changes."
        },
        {
          title: "Improve in small steps",
          description:
            "Small, reviewable changes that can each be released: .NET upgrades, clearer boundaries, and Azure services where they help."
        },
        {
          title: "Hand over cleanly",
          description:
            "Handover notes, documentation and no secrets in source code, so your team can keep maintaining the system."
        }
      ],
      collaborationTitle: "Working together",
      cta: "Discuss Project"
    },
    experience: {
      eyebrow: "Selected project experience",
      title: "What I’ve worked on",
      intro:
        "Anonymized project references showing scope, contribution areas, and outcomes across modernization and integration work.",
      ndaTitle: "NDA & privacy aware",
      ndaDescription:
        "Specific corporate names, internal URLs, and sensitive implementation details are anonymized or generalized to respect ongoing partner NDAs.",
      filterAll: "All",
      filterDevOpsPipelines: "DevOps Pipelines",
      projectScopeLabel: "Project Scope / Mission",
      contributionsLabel: "Contributions & results",
      technologiesUsedLabel: "Technologies used:"
    },
    techStack: {
      eyebrow: "Tech focus",
      title: "Core capabilities",
      intro:
        "My strongest experience is in .NET, Azure integration, enterprise backend systems, and Angular-based business applications.",
      levelLabels: {
        primary: "Primary focus",
        experience: "Project experience"
      }
    },
    contact: {
      eyebrow: "Availability & Contact",
      title: "Start a project discussion",
      intro:
        "Available for remote-first projects across Germany and the EU. Reach out directly by email, phone, LinkedIn, or GitHub.",
      availabilityCardTitle: "Availability & Location",
      availabilityCardIntro: "Current availability and working setup for remote-first projects.",
      availabilityLabel: "Availability",
      locationLabel: "Location",
      remoteSetupLabel: "Remote setup",
      directContactTitle: "Direct Contact",
      directContactIntro: "Use any of the channels below for project inquiries.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      linkedinValue: "LinkedIn Profile",
      githubLabel: "GitHub",
      githubValue: "GitHub Profile",
      copyEmailAria: "Copy email address {{email}}",
      copyPhoneAria: "Copy phone number {{phone}}",
      copyEmailSuccess: "Email copied",
      copyPhoneSuccess: "Phone copied",
      copyFailed: "Copy failed",
      phoneUnavailable: "Phone unavailable",
      linkedinAria: "Open LinkedIn profile in a new tab",
      githubAria: "Open GitHub profile in a new tab",
      faqEyebrow: "FAQ",
      faqTitle: "Questions about working together",
      faqIntro:
        "Practical answers about setup, confidentiality, availability, and profile requests."
    },
    footer: {
      description:
        "Independent freelance consulting for enterprise .NET modernization, reliable Azure integrations, and production-oriented software delivery across Germany and the EU.",
      portfolioIndexTitle: "Navigation",
      legalLinks: {
        impressum: "Impressum",
        datenschutz: "Privacy Policy"
      },
      copyright: "© {{year}} Mojtaba Ghanaat Pisheh. All rights reserved."
    },
    legal: {
      impressumTitle: "Impressum",
      privacyTitle: "Privacy Policy",
      businessLabel: "Business name",
      locationLabel: "Location",
      phoneLabel: "Phone",
      providerInfoBox: "This page provides provider and contact information for this website.",
      backToHomepage: "← Back to Homepage",
      privacyIntro:
        "This is a purely informational website. It sets no cookies, uses no advertising or tracking services, and requires no registration. Below I explain which data is still processed when you visit and what happens to it.",
      privacySections: [
        {
          title: "Hosting",
          paragraphs: [
            "This website is hosted on GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you open the site, GitHub processes technically necessary data such as your IP address, time of access, requested page, browser type, and referrer in server log files.",
            "The legal basis is Art. 6 (1) (f) GDPR; my legitimate interest is the secure and stable operation of the website. GitHub is certified under the EU-US Data Privacy Framework. See GitHub's privacy statement: https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
          ]
        },
        {
          title: "Audience measurement with Cloudflare Web Analytics",
          paragraphs: [
            "To understand which content is viewed, I use Cloudflare Web Analytics by Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA. The service sets no cookies, uses no client-side identifiers, and does not store IP addresses. It collects aggregated data such as requested page, referrer, browser type, country, and load times.",
            "The legal basis is Art. 6 (1) (f) GDPR; my legitimate interest is analysing and improving the site. Cloudflare is certified under the EU-US Data Privacy Framework. Details: https://www.cloudflare.com/privacypolicy/"
          ]
        },
        {
          title: "Fonts",
          paragraphs: [
            "The fonts used on this site are served from this website itself. No connection to Google Fonts or any other external font provider is made when the page loads."
          ]
        },
        {
          title: "Language setting",
          paragraphs: [
            "When you switch between German and English, your choice is stored only in your browser's local storage (localStorage) so the site opens in the same language next time. This value is not transmitted to me or to third parties and is required for the function you requested (§ 25 (2) no. 2 TDDDG)."
          ]
        },
        {
          title: "Contacting me",
          paragraphs: [
            "If you contact me by email or phone, I process the details you provide (name, contact data, content of your request) to answer your request and discuss a possible project. The legal basis is Art. 6 (1) (b) GDPR where the request aims at a contract, otherwise Art. 6 (1) (f) GDPR.",
            "The data is deleted once it is no longer needed for handling your request and no statutory retention periods apply."
          ]
        },
        {
          title: "Links to LinkedIn and GitHub",
          paragraphs: [
            "This website links to my profiles on LinkedIn and GitHub. Simply loading this page transfers no data to those services. Only when you click a link do you leave this website; the privacy policy of the respective provider then applies."
          ]
        },
        {
          title: "Your rights",
          paragraphs: [
            "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and objection to processing based on legitimate interests (Art. 21). Please use the email address above.",
            "You may also lodge a complaint with a data protection supervisory authority, for example the Hessian Commissioner for Data Protection and Freedom of Information, Postfach 3163, 65021 Wiesbaden, Germany."
          ]
        }
      ],
      providerLabel: "Provider",
      emailLabel: "Email",
      infoAccordingTo: "Information according to § 5 DDG (German Digital Services Act)",
      privacyDataProcessingInfo: "Information on data processing on this website",
      providerNameLabel: "Name",
      controllerTitle: "Controller",
      bindingVersionNote: "This is a convenience translation. The German version is the legally binding one.",
      lastUpdated: "Last updated: September 2026"
    },
    availability: {
      fromPrefix: "From",
      badgeTemplate: "AVAILABLE FROM {{monthYear}}",
      badgeTemplateShort: "FROM {{monthYear}}",
      sentenceTemplate: "Available from {{monthYear}}"
    }
  },
  data: {
    personalInfo: {
      name: "Mojtaba Ghanaat Pisheh",
      companyName: "MGP Consulting",
      legalBusinessName: "IT Consulting - Mojtaba Ghanaat Pisheh",
      role: "Freelance Senior .NET & Azure Developer",
      headline: "Modernizing legacy .NET systems and Azure integrations",
      headlineAccent: "without risky rewrites.",
      subheadline:
        "I work inside your team on existing .NET applications, Azure integrations and Angular frontends – making them easier to change, safer to release and reliable in production.",
      locationShort: "Frankfurt am Main, Germany",
      email: "mojtaba@mgp-consulting.de",
      phone: "+4917643674802",
      phoneFormatted: "+49 176 4367 4802",
      linkedin: "https://www.linkedin.com/in/mojtabaghp/",
      github: "https://github.com/MatGhp",
      availability: {
        status: "Available",
        remotePreference: "Remote-first across Germany and the EU"
      }
    },
    services: [
      {
        id: "enterprise-api",
        title: "Enterprise API & Integration Development",
        iconName: "Cable",
        situation:
          "Critical integrations are tightly coupled, so one failing dependency can cause cascading issues across connected systems.",
        approach:
          "Define clear API boundaries, use asynchronous messaging where it helps, and add retry and error handling with practical telemetry.",
        businessBenefit:
          "Helps teams keep business systems in sync, clarify API ownership, and reduce integration risk during delivery.",
        technologies: ["ASP.NET Core Web API", "C#", "REST APIs", "Azure Service Bus", "Azure Functions", "Azure API Management"]
      },
      {
        id: "azure-integration",
        title: "Azure Integration & Backend Services",
        iconName: "Cloud",
        situation:
          "Integrations fail without anyone noticing: messages get lost, secrets sit in configuration files, and there is too little telemetry to find the cause.",
        approach:
          "Build Azure-based integration components with reliable messaging, keep secrets in Key Vault, and add telemetry that shows where a problem starts.",
        businessBenefit:
          "Helps reduce incidents caused by brittle integrations and makes problems easier to find when they happen.",
        technologies: ["Azure Functions", "Azure Service Bus", "Logic Apps", "Azure Key Vault", "Application Insights", "Azure App Service", "Azure SQL"]
      },
      {
        id: "dotnet-modernization",
        title: ".NET Modernization & Delivery Readiness",
        iconName: "History",
        situation:
          "Aging codebases make even small changes slow and risky, and manual deployment steps add avoidable release defects.",
        approach:
          "Modernize step by step, isolate important parts of the system, strengthen automated tests around critical behavior, and set up repeatable CI/CD pipelines.",
        businessBenefit:
          "Helps teams deliver changes faster, with less regression risk and more predictable releases.",
        technologies: [".NET 8–10", "ASP.NET Core", "Entity Framework Core", "Clean Architecture / DDD", "Docker", "Azure DevOps", "GitHub Actions", "Bicep / Terraform"]
      },
      {
        id: "angular-business-apps",
        title: "Angular Business Applications",
        iconName: "Layout",
        situation:
          "Business UIs become hard to change when state handling, component boundaries, and API flows are inconsistent.",
        approach:
          "Refactor the Angular component structure, clarify state management patterns, and align API integration contracts.",
        businessBenefit:
          "Helps teams make UI changes faster, keep state handling stable, and reduce long-term maintenance effort.",
        technologies: ["Angular", "TypeScript", "RxJS", "Nx", "Angular Material", "Kendo UI", "Cypress", "Jest"]
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Supplier Onboarding & Integration Platform",
        clientType: "Enterprise supplier platform",
        sector: "Enterprise / Mechanical Engineering",
        role: "Freelance Senior .NET & Integration Developer",
        period: "2025 - 2026",
        duration: "12 Months",
        scope:
          "Worked on onboarding and supplier integration workflows in an enterprise environment with multiple systems.",
        achievements: [
          "Implemented backend API changes and Angular workflow screens with role-based business states.",
          "Extended integration points between external systems and internal workflows.",
          "Supported CI/CD delivery, release preparation, debugging, and production issue analysis.",
          "Current work includes .NET 10 and ASP.NET Core in day-to-day enterprise delivery."
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
        title: "Azure Integration Platform for Core Workloads",
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
          "Improved maintainability and day-to-day support for integration workloads across .NET 8/9 and older .NET versions."
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
        title: "Cloud Platform Enhancements for an Energy Platform",
        clientType: "Enterprise cloud business platform",
        sector: "Energy Sector",
        role: "Senior Full-Stack / Cloud Developer",
        period: "2023 - 2024",
        duration: "14 Months",
        scope:
          "Extended backend and frontend capabilities for an enterprise energy platform with security, API, and monitoring needs.",
        achievements: [
          "Delivered backend services and Angular features for operational workflows.",
          "Supported cloud infrastructure and deployment automation activities.",
          "Contributed to authentication, API management, and telemetry-based support.",
          "Improved maintainability and release reliability for a production platform."
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
        title: "Angular Business Applications and Real-Time Interfaces",
        clientType: "Enterprise medical and industrial software environment",
        sector: "Business Applications / Medical & Manufacturing Environments",
        role: "Senior Angular / Full-Stack Developer",
        period: "2021 - 2023",
        duration: "20 Months",
        scope:
          "Modernized Angular business applications with a focus on maintainable component structure and stable real-time behavior.",
        achievements: [
          "Refactored Angular modules and UI workflows to make ownership clearer and maintenance easier.",
          "Integrated frontend features with backend APIs and real-time interfaces.",
          "Improved testability and reliability across critical UI components.",
          "Supported long-running delivery work with practical engineering routines."
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
    ],
    techCategories: [
      {
        id: "dotnet-backend",
        categoryName: ".NET & Backend",
        description:
          "Modern .NET / ASP.NET Core, C#, Entity Framework Core, REST APIs, unit and integration testing. Current project work with .NET 10; strong production experience with .NET 8/9 and modernization from older .NET versions.",
        skills: [
          { name: "Modern .NET", level: "primary", badge: "C# / .NET 8–10" },
          { name: "ASP.NET Core Web API", level: "primary", badge: "RESTful architecture" },
          { name: "Entity Framework Core", level: "experience", badge: "Data access / ORM" },
          { name: "REST APIs", level: "primary", badge: "Web services" },
          { name: "Clean Architecture / DDD", level: "experience", badge: "Design discipline" },
          { name: "Authentication & Authorization", level: "experience", badge: "Identity / Security" },
          { name: "SQL Server / PostgreSQL", level: "experience", badge: "Relational persistence" }
        ]
      },
      {
        id: "azure-integration",
        categoryName: "Azure & Integration",
        description: "Azure integration services, secure configuration management, and monitoring.",
        skills: [
          { name: "Azure Functions", level: "primary", badge: "Serverless runtime" },
          { name: "Azure Service Bus", level: "primary", badge: "Message queues & topics" },
          { name: "Azure API Management (APIM)", level: "experience", badge: "API Gateways" },
          { name: "Logic Apps", level: "experience", badge: "Workflow automation" },
          { name: "Azure Key Vault", level: "primary", badge: "Secure configuration" },
          { name: "Azure App Service", level: "experience", badge: "App hosting" },
          { name: "Azure SQL", level: "experience", badge: "Cloud Database" },
          { name: "Application Insights & Monitor", level: "experience", badge: "Telemetry" }
        ]
      },
      {
        id: "devops-delivery",
        categoryName: "DevOps & Cloud Delivery",
        description: "CI/CD implementation, containerized workflows, and repeatable deployment practices.",
        skills: [
          { name: "Azure DevOps Pipelines", level: "experience", badge: "Build & release YAML" },
          { name: "GitHub Actions", level: "experience", badge: "Continuous Integration" },
          { name: "Docker", level: "experience", badge: "Containerization" },
          { name: "Kubernetes (AKS basics)", level: "experience", badge: "Container orch." },
          { name: "Terraform", level: "experience", badge: "Infrastructure as Code" },
          { name: "Bicep", level: "experience", badge: "Azure-native IaC" },
          { name: "CI/CD Pipelines", level: "experience", badge: "Quality & automation gates" }
        ]
      },
      {
        id: "frontend-tech",
        categoryName: "Frontend",
        description: "Angular frontends with maintainable state management and modular architecture.",
        skills: [
          { name: "Angular", level: "primary", badge: "SPA Framework" },
          { name: "TypeScript", level: "primary", badge: "Type-safe script language" },
          { name: "RxJS", level: "primary", badge: "Asynchronous streams" },
          { name: "Nx Workspaces", level: "experience", badge: "Monorepo design" },
          { name: "Angular Material", level: "experience", badge: "UI components" },
          { name: "Kendo UI", level: "experience", badge: "Enterprise controls" },
          { name: "Cypress & Jest", level: "experience", badge: "Test suites" },
          { name: "HTML & SCSS / Tailwind", level: "experience", badge: "Responsive layout styling" }
        ]
      }
    ],
    collaborationValues: [
      {
        title: "Senior Ownership",
        description:
          "After onboarding, I work independently, clarify open points proactively, and take clear technical responsibility for delivery."
      },
      {
        title: "Clear Communication",
        description:
          "I communicate in German and English (C1) and focus on clear trade-offs, practical options, and transparent status updates."
      },
      {
        title: "Enterprise Collaboration",
        description:
          "Available for direct clients, supplier onboarding processes, and established agency contract setups with NDA-friendly communication and structured onboarding."
      }
    ],
    collaborationFaqs: [
      {
        q: "Do you work as an independent freelancer?",
        a: "Yes. I work as an independent freelance consultant based in Germany and support direct clients, supplier onboarding processes, and agency contract setups."
      },
      {
        q: "How do you handle NDA and confidentiality?",
        a: "I can work under NDA, and confidentiality is standard. Project references on this website are anonymized and simplified to protect client confidentiality and active contractual obligations."
      },
      {
        q: "What is your remote and on-site setup?",
        a: "I work remote-first from Frankfurt am Main and can join on-site kick-offs, workshops, and key delivery milestones when needed."
      },
      {
        q: "How can we request your profile and availability details?",
        a: "Current availability is shown on this website ({{availabilitySentenceLowercase}}). A current freelance profile is available upon request for project evaluation, client submission, and supplier onboarding."
      }
    ]
  }
};
