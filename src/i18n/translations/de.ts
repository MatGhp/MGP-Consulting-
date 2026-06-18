import { TranslationContent } from "./schema";

export const de: TranslationContent = {
  seo: {
    home: {
      title: "Mojtaba Ghanaat Pisheh | Freiberuflicher Senior .NET & Azure Entwickler",
      description:
        "Freiberuflicher Senior .NET- und Azure-Entwickler in Frankfurt am Main. Enterprise-Integration, schrittweise .NET-Modernisierung, Azure-Backend-Services, CI/CD und Angular Business Applications."
    },
    legal: {
      impressum: {
        title: "Impressum | MGP Consulting",
        description: "Anbieter- und Pflichtangaben für MGP Consulting."
      },
      datenschutz: {
        title: "Datenschutzerklärung | MGP Consulting",
        description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von MGP Consulting."
      }
    }
  },
  ui: {
    navbar: {
      navLinks: [
        { name: "Leistungen", href: "#services" },
        { name: "Mehrwert", href: "#value-add" },
        { name: "Projekte", href: "#experience" },
        { name: "Tech", href: "#tech-focus" },
        { name: "Kontakt", href: "#contact" }
      ],
      companyTagline: ".NET & Azure Enterprise Delivery",
      contactCta: "Projekt besprechen",
      toggleMenuAria: "Menü umschalten",
      officeLocationLabel: "Standort",
      languageSwitcherAria: "Sprache wechseln",
      languageOptionEn: "EN",
      languageOptionDe: "DE"
    },
    hero: {
      identityCapsule: "Unabhängiger Senior Consultant",
      kpiYearsValue: "20+",
      kpiLanguageValue: "C1 / C1",
      kpiRemoteValue: "Remote",
      kpiYearsExp: "Jahre Erfahrung",
      kpiLanguageFluency: "DE & EN C1",
      kpiRemoteRegion: "Deutschland & EU",
      kpiAvailableFrom: "Verfügbar ab",
      profileWindowTitle: "Profil",
      coreCapabilitiesLabel: "Kernkompetenzen",
      coreCapabilitiesText: "Zuverlässige Azure-Integrationen und schrittweise .NET-Modernisierung",
      whatIHelpWithLabel: "Wobei ich unterstütze",
      helpItems: [
        "Sichere API-Integration und belastbarer Umgang mit Credentials in modernen Azure-Services",
        "Azure-basierte Integrationskomponenten für zuverlässige Systemkommunikation",
        "Wartbare Angular Business Applications mit sauberer Backend-API-Anbindung"
      ],
      projectSetupLabel: "Projektsetup",
      projectSetupText:
        "Verfügbar für Remote-first-Einsätze mit strukturiertem Onboarding und NDA-konformer Kommunikation.",
      discussProjectCta: "Projekt besprechen"
    },
    services: {
      eyebrow: "Leistungen",
      title: "Wobei ich unterstützen kann",
      intro:
        "Mein Fokus liegt auf schrittweiser .NET-Modernisierung, Azure-Integration, wartbaren Backend-Services und pragmatischer Projektumsetzung.",
      technologiesUsedLabel: "Eingesetzte Technologien",
      howItHelpsLabel: "Ihr Nutzen",
      calloutTag: "Legacy zu Cloud",
      calloutTitle: "Bestehende Systeme modernisieren – ohne riskante Big-Bang-Rewrites",
      calloutDescription:
        "Modernisierung beginnt selten auf der grünen Wiese. Ich setze Integrationsschichten und Delivery-Muster um, mit denen bestehende Systeme sicher weiterentwickelt werden, während neue Services entstehen.",
      calloutCta: "Projekt besprechen"
    },
    valueAdd: {
      eyebrow: "Typische Software-Probleme",
      title: "Typische Software-Probleme",
      intro:
        "In modernen Projekten geht es meist um mehr als Features. Ich bearbeite Architektur- und Delivery-Probleme, die Änderungen, Deployments und Betrieb unnötig erschweren.",
      problemLabel: "Problem",
      approachLabel: "Vorgehen",
      technologiesUsedLabel: "Eingesetzte Technologien:",
      howItHelpsLabel: "Ihr Nutzen:",
      scenarioRisks: {
        "val-1": "Führt zu fragilen Releases, unklaren Verantwortlichkeiten und hohem Supportaufwand in Produktion.",
        "val-2": "Verlangsamt Feature-Lieferung, erhöht Regressionsrisiken und vergrößert die technische Schuld.",
        "val-3": "Erzeugt inkonsistente Umgebungen, manuelle Fehler und unvorhersehbare Deployments.",
        "val-4": "Führt zu langsamen UI-Änderungen, instabiler State-Behandlung und mehr Wartungsaufwand."
      },
      collaboration: {
        eyebrow: "So arbeite ich",
        title: "So arbeite ich",
        intro:
          "Freelance-Zusammenarbeit funktioniert am besten mit klarer Verantwortung, pragmatischer Kommunikation und verlässlichen Delivery-Gewohnheiten."
      }
    },
    experience: {
      eyebrow: "Ausgewählte Projekterfahrung",
      title: "Woran ich gearbeitet habe",
      intro:
        "Anonymisierte Projektbeispiele mit Umfang, Beiträgen und Ergebnissen aus Modernisierung und Integration.",
      ndaTitle: "NDA- und datenschutzkonform",
      ndaDescription:
        "Konkrete Firmennamen, interne URLs und sensible Implementierungsdetails werden aus laufenden NDA-Verpflichtungen anonymisiert oder abstrahiert.",
      filterAll: "Alle",
      filterDevOpsPipelines: "DevOps Pipelines",
      projectScopeLabel: "Projektumfang / Ziel",
      contributionsLabel: "Beiträge & Ergebnisse",
      technologiesUsedLabel: "Eingesetzte Technologien:"
    },
    techStack: {
      eyebrow: "Tech-Fokus",
      title: "Kernkompetenzen",
      intro:
        "Meine stärkste Projekterfahrung liegt in .NET, Azure-Integration, Enterprise-Backends und Angular Business Applications.",
      footerUsedInProduction: "In Produktionsprojekten eingesetzt",
      footerCiCdExperience: "CI/CD-Projekterfahrung",
      calloutEyebrow: "Delivery-Gewohnheiten, die Projektrisiko reduzieren",
      calloutTitle: "Delivery-Gewohnheiten, die Projektrisiko reduzieren",
      calloutDescription:
        "Ich arbeite mit kleinen, reviewbaren Änderungen, praxisnahen Tests, CI/CD-Checks, sicherer Konfiguration und klaren Handover-Notizen.",
      checklistTitle: "Delivery-Checkliste",
      checklistItems: [
        "Kleine, reviewbare Änderungen",
        "Praxisnahe Unit- und Integration-Tests",
        "CI/CD-Checks vor dem Release",
        "Keine Secrets im Quellcode",
        "Klare Handover-Notizen"
      ]
    },
    contact: {
      eyebrow: "Verfügbarkeit & Kontakt",
      title: "Projektanfrage starten",
      intro:
        "Verfügbar für Remote-first-Projekte in Deutschland und der EU. Kontakt per E-Mail, Telefon, LinkedIn oder GitHub.",
      availabilityCardTitle: "Verfügbarkeit & Standort",
      availabilityCardIntro: "Aktuelle Verfügbarkeit und Arbeitssetup für Remote-first-Projekte.",
      availabilityLabel: "Verfügbarkeit",
      locationLabel: "Standort",
      remoteSetupLabel: "Remote-Setup",
      directContactTitle: "Direkter Kontakt",
      directContactIntro: "Für Projektanfragen können Sie jeden der folgenden Kanäle nutzen.",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      linkedinLabel: "LinkedIn",
      linkedinValue: "LinkedIn-Profil",
      githubLabel: "GitHub",
      githubValue: "GitHub-Profil",
      copyEmailAria: "E-Mail-Adresse {{email}} kopieren",
      copyPhoneAria: "Telefonnummer {{phone}} kopieren",
      copyEmailSuccess: "E-Mail kopiert",
      copyPhoneSuccess: "Telefonnummer kopiert",
      copyFailed: "Kopieren fehlgeschlagen",
      phoneUnavailable: "Telefonnummer nicht verfügbar",
      linkedinAria: "LinkedIn-Profil in neuem Tab öffnen",
      githubAria: "GitHub-Profil in neuem Tab öffnen",
      faqEyebrow: "FAQ",
      faqTitle: "Zusammenarbeit FAQ",
      faqIntro: "Kurze Antworten zu Setup, Vertraulichkeit, Verfügbarkeit und Profilanfragen."
    },
    footer: {
      description:
        "Unabhängige Beratung für Enterprise .NET-Modernisierung, zuverlässige Azure-Integrationen und produktionsnahe Software-Delivery in Deutschland und der EU.",
      portfolioIndexTitle: "Portfolio-Übersicht",
      links: {
        services: "Leistungen",
        valueAdd: "Mehrwert",
        projectExperience: "Projekterfahrung",
        techFocus: "Tech-Fokus"
      },
      complianceTitle: "Rechtliches",
      legalLinks: {
        impressum: "Impressum",
        datenschutz: "Datenschutzerklärung"
      },
      copyright: "© 2026 Mojtaba Ghanaat Pisheh. Alle Rechte vorbehalten."
    },
    legal: {
      impressumTitle: "Impressum",
      privacyTitle: "Datenschutzerklärung",
      businessLabel: "Geschäftsbezeichnung",
      locationLabel: "Standort",
      providerInfoBox: "Diese Seite enthält Anbieter- und Kontaktangaben für diese Website.",
      backToHomepage: "← Zur Startseite",
      privacyIntro: "Informationen zur Datenverarbeitung auf dieser Website",
      privacyItems: [
        "Diese Website verwendet derzeit keine Tracking-Cookies.",
        "Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Nachricht und Kontaktdaten zur Bearbeitung und Beantwortung Ihrer Anfrage verwendet.",
        "Die Daten werden ausschließlich für Kommunikation zu Projektanfragen und Profilanfragen genutzt."
      ],
      providerLabel: "Anbieter",
      emailLabel: "E-Mail",
      infoAccordingTo: "Angaben gemäß § 5 TMG",
      privacyDataProcessingInfo: "Informationen zur Datenverarbeitung auf dieser Website",
      providerNameLabel: "Name"
    },
    app: {
      modalTitle: "Freelancer-Profil anfragen",
      modalSubtitle: "Mojtaba Ghanaat-Pisheh • MGP Consulting",
      modalCloseAria: "Dialog zum Profil anfragen schließen",
      modalCloseTitle: "Schließen",
      successTitle: "Capability Snapshot heruntergeladen",
      successDescription:
        "Die Datei {{fileName}} wurde lokal für die erste Prüfung gespeichert.",
      successPrimaryCta: "Projekt besprechen",
      successSecondaryCta: "Freelancer-Profil anfragen",
      formIntro: "Füllen Sie die Felder aus, um das aktuelle Freelancer-Profil anzufordern.",
      workEmailLabel: "Geschäftliche E-Mail *",
      workEmailPlaceholder: "z. B. hiring@enterprise-example.de",
      companyLabel: "Unternehmen / Organisation",
      companyPlaceholder: "z. B. Enterprise Solutions GmbH",
      directDownloadLink: "Capability Snapshot herunterladen (.txt)",
      submitButton: "Freelancer-Profil anfragen",
      privacyNoteTitle: "Datenschutzhinweis:",
      privacyNoteText:
        "Kontaktdaten werden ausschließlich für Projektkommunikation und Profilanfragen verwendet.",
      profileFileName: "Capability_Snapshot_Mojtaba_Ghanaat_Pisheh.txt",
      profileSnapshotText:
        "Dieser Capability Snapshot dient der ersten Projektabstimmung.\nEin aktuelles Freelancer-Profil ist auf Anfrage verfügbar.\nBitte senden Sie Projektinformationen an: mojtaba@mgp-consulting.de\nMGP Consulting (c) 2026. Frankfurt, Deutschland"
    },
    availability: {
      fromPrefix: "Ab",
      badgeTemplate: "VERFÜGBAR AB {{monthYear}}",
      sentenceTemplate: "Verfügbar ab {{monthYear}}"
    }
  },
  data: {
    personalInfo: {
      name: "Mojtaba Ghanaat Pisheh",
      role: "Freiberuflicher Senior .NET & Azure Entwickler mit Fokus auf Integration und Legacy-Modernisierung",
      tagline: "Legacy .NET Modernisierung | Azure Integration | pragmatische Delivery",
      headline: "Freiberuflicher Senior .NET & Azure Entwickler",
      subheadline:
        "Ich unterstütze Teams dabei, bestehende .NET-Systeme schrittweise zu modernisieren, Azure-Integrationen aufzubauen und geschäftskritische Anwendungen ohne riskante Rewrites zuverlässig weiterzuentwickeln.",
      location: "Standort Frankfurt am Main, Deutschland • Remote-first in Deutschland und der EU",
      locationShort: "Frankfurt am Main, Deutschland",
      email: "mojtaba@mgp-consulting.de",
      phone: "+4917643674802",
      phoneFormatted: "+49 176 4367 4802",
      linkedin: "https://www.linkedin.com/in/mojtabaghp/",
      github: "https://github.com/MatGhp",
      languages: [
        { name: "Deutsch", level: "C1 (flüssige Projektkommunikation)" },
        { name: "Englisch", level: "C1 (flüssige Projektkommunikation)" },
        { name: "Persisch", level: "Muttersprache" }
      ],
      availability: {
        status: "Verfügbar",
        remotePreference: "Remote-first in Deutschland und der EU",
        euEligible: "Verfügbar für Projekte in Deutschland und der EU"
      },
      trustFacts: [
        "20+ Jahre Software-Engineering-Erfahrung",
        "Standort Frankfurt am Main, Deutschland",
        "Remote-first in Deutschland und der EU",
        "Projektkommunikation auf Deutsch und Englisch (C1)",
        "{{availabilitySentence}}",
        "Starker Fokus auf .NET, Azure-Integration, APIs, CI/CD und Angular"
      ]
    },
    services: [
      {
        id: "enterprise-api",
        title: "Enterprise API- & Integrationsentwicklung",
        description:
          "Konzeption und Umsetzung wartbarer APIs, Backend-Services und Integrationskomponenten für Enterprise-Umgebungen.",
        iconName: "Cable",
        businessBenefit:
          "Hilft Teams, Geschäftssysteme stabil zu verbinden, API-Verantwortlichkeiten klar zu halten und Integrationsrisiken in der Umsetzung zu reduzieren.",
        keyOfferings: [
          "Modern .NET / ASP.NET Core, C#, Entity Framework Core, REST APIs, Unit- und Integration-Tests",
          "Azure Service Bus Messaging (Topics und Queues)",
          "Azure Functions für asynchrone Integrations-Workflows",
          "Azure API Management und sichere API-Integration"
        ]
      },
      {
        id: "azure-integration",
        title: "Azure Integration & Backend-Services",
        description:
          "Entwicklung Azure-basierter Backend- und Integrationskomponenten für zuverlässige Kommunikation, Automatisierung und einfacheren Support.",
        iconName: "Cloud",
        businessBenefit:
          "Reduziert Störungen durch fragile Integrationen über verlässliches Messaging, sichere Konfiguration und praxisnahe Telemetrie.",
        keyOfferings: [
          "Azure Functions, Azure Service Bus und Logic Apps",
          "Azure Key Vault für Secrets und Zertifikate",
          "Application Insights und Azure Monitor Telemetrie",
          "Azure App Service und Azure SQL Integration"
        ]
      },
      {
        id: "dotnet-modernization",
        title: ".NET-Modernisierung & Delivery Readiness",
        description:
          "Schrittweise Modernisierung bestehender .NET-Anwendungen für bessere Wartbarkeit, stabilere Releases und zuverlässigen Betrieb.",
        iconName: "History",
        businessBenefit:
          "Reduziert Regressionsrisiken und verbessert Wartbarkeit ohne disruptive Komplett-Neuentwicklung.",
        keyOfferings: [
          "Modern .NET und ASP.NET Core Delivery inklusive Upgrades älterer .NET-Versionen",
          "Refactoring mit Clean Architecture und DDD-Prinzipien",
          "Entity Framework Core Optimierung und Verbesserungen im Datenzugriff",
          "Testautomatisierung und containerisierte lokale Umgebungen mit Docker"
        ]
      },
      {
        id: "angular-business-apps",
        title: "Angular Business Applications",
        description:
          "Umsetzung und Modernisierung von Angular-Anwendungen mit wartbarer Architektur und verlässlicher API-Integration.",
        iconName: "Layout",
        businessBenefit:
          "Erleichtert UI-Änderungen und stabilisiert die Integration mit Backend-Services.",
        keyOfferings: [
          "Angular, TypeScript und RxJS für Business-Workflows",
          "Nx-Workspace-Struktur und modulare Architektur",
          "Angular Material und Kendo UI Enterprise-Komponenten",
          "Cypress- und Jest-Testsetup"
        ]
      }
    ],
    valueAddScenarios: [
      {
        id: "val-1",
        title: "Instabile oder eng gekoppelte Integrationen",
        situation:
          "Kritische Integrationen sind eng gekoppelt, sodass ein einzelner Ausfall Kettenreaktionen in mehreren verbundenen Systemen auslösen kann.",
        solution:
          "Klare API-Grenzen definieren, asynchrone Muster dort einsetzen, wo sie helfen, und Retry-/Fehlerbehandlung mit praxisnaher Telemetrie ergänzen.",
        technicalDepth: ".NET, Azure Service Bus, ASP.NET Core Web API, Application Insights",
        businessImpact:
          "Macht Integrationen robuster und reduziert fragile Releases, unklare Ownership und teuren Supportaufwand."
      },
      {
        id: "val-2",
        title: "Legacy-.NET-Anwendungen, die schwer zu ändern sind",
        situation:
          "Gewachsene Codebasen mit hoher technischer Schuld machen selbst kleine Feature-Änderungen langsam, riskant und teuer.",
        solution:
          "Schrittweise modernisieren, zentrale Systemteile isolieren, Architekturgrenzen verbessern und automatisierte Tests rund um kritisches Verhalten stärken.",
        technicalDepth:
          "Modern .NET / ASP.NET Core, C#, Entity Framework Core, REST APIs, Unit- und Integration-Tests. Aktuelle Projektarbeit mit .NET 8–10 sowie Modernisierung älterer .NET-Versionen.",
        businessImpact:
          "Hilft Teams, Änderungen schneller zu liefern und gleichzeitig Regressionsrisiken sowie technische Schuld zu reduzieren."
      },
      {
        id: "val-3",
        title: "Manuelle oder unzuverlässige Deployments",
        situation:
          "Manuelle Deployment-Schritte und uneinheitliche Umgebungen führen zu vermeidbaren Release-Fehlern.",
        solution:
          "Wiederholbare CI/CD-Pipelines umsetzen, Konfiguration vom Code trennen und Infrastruktur-Provisioning standardisieren.",
        technicalDepth: "Azure DevOps, GitHub Actions, Docker, Bicep, Terraform",
        businessImpact:
          "Macht Releases planbarer und reduziert manuelle Fehler, Umgebungsdrift und Unsicherheit."
      },
      {
        id: "val-4",
        title: "Frontend-Anwendungen mit wachsender Komplexität",
        situation:
          "Business-UIs werden schwerer weiterzuentwickeln, wenn State-Handling, Komponentenabgrenzung und API-Flows inkonsistent sind.",
        solution:
          "Angular-Komponentenstruktur refaktorieren, State-Management-Muster klären und API-Verträge sauber ausrichten.",
        technicalDepth: "Angular, TypeScript, RxJS, Nx",
        businessImpact:
          "Hilft Teams, UI-Änderungen schneller umzusetzen, State stabil zu halten und langfristigen Wartungsaufwand zu senken."
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Supplier Onboarding & Integrationsplattform",
        clientType: "Enterprise Supplier Platform",
        sector: "Enterprise / Maschinenbau",
        role: "Freelance Senior .NET & Integration Developer",
        period: "2025 - 2026",
        duration: "12 Monate",
        scope:
          "Mitarbeit an Onboarding- und Supplier-Integrations-Workflows in einer Enterprise-Umgebung mit mehreren beteiligten Systemen.",
        achievements: [
          "Backend-API-Änderungen und Angular-Workflow-Screens mit rollenbasierten Business-States umgesetzt.",
          "Integrationspunkte zwischen externen Systemen und internen Workflows erweitert.",
          "CI/CD-Delivery, Release-Vorbereitung, Debugging und Analyse von Produktionsproblemen unterstützt.",
          "Aktuelle Projektarbeit umfasst .NET 10 und ASP.NET Core in der täglichen Enterprise-Delivery."
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
        title: "Azure-Integrationsplattform für Kern-Workloads",
        clientType: "Enterprise-Umfeld für Integrationsservices",
        sector: "IT Services / Enterprise Integration",
        role: "Lead Technical Consultant / Azure Integration Developer",
        period: "2024 - 2025",
        duration: "10 Monate",
        scope:
          "Azure-basierte Integrationskomponenten entwickelt, um Legacy-Systeme mit modernen APIs und eventgetriebenen Workflows zu verbinden.",
        achievements: [
          "Azure Functions und Messaging-getriebene Integrationsservices konzipiert und umgesetzt.",
          "Infrastruktur- und Deployment-Setup für wiederholbare Delivery automatisiert.",
          "Sichere Konfiguration und Secret-Handling mit Azure Key Vault implementiert.",
          "Wartbarkeit und täglicher Support für Integrations-Workloads über .NET 8/9 und ältere .NET-Versionen verbessert."
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
        title: "Cloud-Plattform-Erweiterungen für eine Energieplattform",
        clientType: "Enterprise Cloud Business Platform",
        sector: "Energiebranche",
        role: "Senior Full-Stack / Cloud Developer",
        period: "2023 - 2024",
        duration: "14 Monate",
        scope:
          "Backend- und Frontend-Funktionen für eine Enterprise-Energieplattform mit Anforderungen an Security, APIs und Monitoring erweitert.",
        achievements: [
          "Backend-Services und Angular-Features für operative Workflows geliefert.",
          "Cloud-Infrastruktur und Deployment-Automatisierung unterstützt.",
          "An Authentication, API Management und Telemetrie-basiertem Support mitgewirkt.",
          "Wartbarkeit und Release-Zuverlässigkeit der Produktionsplattform verbessert."
        ],
        techStack: [
          ".NET (inkl. .NET 6/7 in früheren Plattformphasen)",
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
        title: "Angular Business Applications und Real-Time Interfaces",
        clientType: "Enterprise-Umfeld für medizinische und industrielle Software",
        sector: "Business Applications / Medical & Manufacturing",
        role: "Senior Angular / Full-Stack Developer",
        period: "2021 - 2023",
        duration: "20 Monate",
        scope:
          "Angular Business Applications modernisiert, mit Fokus auf wartbare Komponentenstruktur und stabiles Real-Time-Verhalten.",
        achievements: [
          "Angular-Module und UI-Workflows refaktoriert, um Ownership klarer zu machen und Wartung zu vereinfachen.",
          "Frontend-Features mit Backend-APIs und Real-Time-Schnittstellen integriert.",
          "Testbarkeit und Zuverlässigkeit in kritischen UI-Komponenten verbessert.",
          "Langlaufende Delivery mit praxisnahen Engineering-Routinen unterstützt."
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
          "Modern .NET / ASP.NET Core, C#, Entity Framework Core, REST APIs, Unit- und Integration-Tests. Aktuelle Projektarbeit mit .NET 10; umfangreiche Produktionserfahrung mit .NET 8/9 und Modernisierung älterer .NET-Versionen.",
        skills: [
          { name: "Modern .NET", level: "Schwerpunkt", badge: "Primary focus" },
          { name: "ASP.NET Core Web API", level: "Schwerpunkt", badge: "RESTful architecture" },
          { name: "Entity Framework Core", level: "Praxiserfahrung", badge: "Data access / ORM" },
          { name: "REST APIs", level: "Schwerpunkt", badge: "Web services" },
          { name: "Clean Architecture / DDD", level: "Praxiserfahrung", badge: "Design discipline" },
          { name: "Authentication & Authorization", level: "Praxiserfahrung", badge: "Identity / Security" },
          { name: "SQL Server / PostgreSQL", level: "Praxiserfahrung", badge: "Relationale Datenhaltung" }
        ]
      },
      {
        id: "azure-integration",
        categoryName: "Azure & Integration",
        description: "Azure-Integrationsservices, sichere Konfigurationsverwaltung und Monitoring.",
        skills: [
          { name: "Azure Functions", level: "Schwerpunkt", badge: "Serverless runtime" },
          { name: "Azure Service Bus", level: "Schwerpunkt", badge: "Message queues & topics" },
          { name: "Azure API Management (APIM)", level: "Projekterfahrung", badge: "API Gateways" },
          { name: "Logic Apps", level: "Projekterfahrung", badge: "Workflow automation" },
          { name: "Azure Key Vault", level: "Schwerpunkt", badge: "Secure configuration" },
          { name: "Azure App Service", level: "Projekterfahrung", badge: "App hosting" },
          { name: "Azure SQL", level: "Projekterfahrung", badge: "Cloud Database" },
          { name: "Application Insights & Monitor", level: "Praxiserfahrung", badge: "Telemetry" }
        ]
      },
      {
        id: "devops-delivery",
        categoryName: "DevOps & Cloud Delivery",
        description: "CI/CD-Umsetzung, containerisierte Workflows und wiederholbare Deployment-Praktiken.",
        skills: [
          { name: "Azure DevOps Pipelines", level: "Praxiserfahrung", badge: "Build & release YAML" },
          { name: "GitHub Actions", level: "Projekterfahrung", badge: "Continuous Integration" },
          { name: "Docker", level: "Praxiserfahrung", badge: "Containerization" },
          { name: "Kubernetes (AKS basics)", level: "Projekterfahrung", badge: "Container orchestration" },
          { name: "Terraform", level: "Projekterfahrung", badge: "Infrastructure as Code" },
          { name: "Bicep", level: "Projekterfahrung", badge: "Azure-native IaC" },
          { name: "CI/CD Pipelines", level: "Praxiserfahrung", badge: "Quality & automation gates" }
        ]
      },
      {
        id: "frontend-tech",
        categoryName: "Frontend",
        description: "Angular-Frontends mit wartbarem State-Management und modularer Architektur.",
        skills: [
          { name: "Angular", level: "Schwerpunkt", badge: "SPA Framework" },
          { name: "TypeScript", level: "Schwerpunkt", badge: "Type-safe language" },
          { name: "RxJS", level: "Kernkompetenz", badge: "Asynchronous streams" },
          { name: "Nx Workspaces", level: "Projekterfahrung", badge: "Monorepo design" },
          { name: "Angular Material", level: "Praxiserfahrung", badge: "UI components" },
          { name: "Kendo UI", level: "Projekterfahrung", badge: "Enterprise controls" },
          { name: "Cypress & Jest", level: "Projekterfahrung", badge: "Test suites" },
          { name: "HTML & SCSS / Tailwind", level: "Praxiserfahrung", badge: "Responsive layout styling" }
        ]
      }
    ],
    collaborationValues: [
      {
        title: "Senior Ownership",
        description:
          "Nach dem Onboarding arbeite ich selbstständig, kläre offene Punkte proaktiv und übernehme klare technische Verantwortung in der Umsetzung."
      },
      {
        title: "Klare Kommunikation",
        description:
          "Ich kommuniziere auf Deutsch und Englisch (C1) und lege Wert auf nachvollziehbare Trade-offs, praktikable Optionen und transparente Status-Updates."
      },
      {
        title: "Delivery-Gewohnheiten mit geringerer Projektrisiko",
        description:
          "Ich fokussiere mich auf wartbare Implementierung, pragmatische Delivery und CI/CD-Erfahrung für stabile Übergabe und Betrieb."
      },
      {
        title: "Enterprise-Zusammenarbeit",
        description:
          "Verfügbar für Direktkunden, Supplier-Onboarding-Prozesse und etablierte Agentur-Modelle mit NDA-konformer Kommunikation und strukturiertem Onboarding."
      }
    ],
    collaborationFaqs: [
      {
        q: "Arbeiten Sie als unabhängiger Freelancer?",
        a: "Ja. Ich arbeite als unabhängiger Freelancer in Deutschland und unterstütze Direktkunden, Supplier-Onboarding-Prozesse sowie Agentur-Setups."
      },
      {
        q: "Wie gehen Sie mit NDA und Vertraulichkeit um?",
        a: "Ich arbeite selbstverständlich unter NDA. Projektbeispiele auf dieser Website sind anonymisiert und vereinfacht dargestellt, um Vertraulichkeit und laufende vertragliche Verpflichtungen zu wahren."
      },
      {
        q: "Wie sieht Ihr Remote- und Onsite-Setup aus?",
        a: "Ich arbeite Remote-first aus Frankfurt am Main und kann bei Bedarf zu Kick-offs, Workshops und wichtigen Delivery-Meilensteinen vor Ort unterstützen."
      },
      {
        q: "Wie können wir Profil und Verfügbarkeit anfragen?",
        a: "Die aktuelle Verfügbarkeit ist auf dieser Website sichtbar ({{availabilitySentenceLowercase}}). Ein aktuelles Freelancer-Profil stelle ich gerne für Projektbewertung, Kundenvorstellung und Supplier-Onboarding bereit."
      }
    ]
  }
};
