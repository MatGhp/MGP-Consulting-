import { TranslationContent } from "./schema";

export const de: TranslationContent = {
  seo: {
    home: {
      title: "Mojtaba Ghanaat Pisheh – Freiberuflicher Senior .NET- & Azure-Entwickler | MGP Consulting",
      description:
        "Freiberuflicher Senior .NET- und Azure-Entwickler in Frankfurt am Main. Enterprise-Integration, schrittweise .NET-Modernisierung, Azure-Backend-Services, CI/CD und Angular Business Applications."
    },
    legal: {
      impressum: {
        title: "Impressum | MGP Consulting",
        description: "Anbieter- und Pflichtangaben für IT Consulting - Mojtaba Ghanaat Pisheh."
      },
      datenschutz: {
        title: "Datenschutzerklärung | MGP Consulting",
        description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von IT Consulting - Mojtaba Ghanaat Pisheh."
      }
    }
  },
  ui: {
    navbar: {
      navLinks: [
        { name: "Leistungen", href: "#services" },
        { name: "Vorgehen", href: "#approach" },
        { name: "Projekte", href: "#experience" },
        { name: "Tech", href: "#tech-focus" },
        { name: "Kontakt", href: "#contact" }
      ],
      contactCta: "Projekt besprechen",
      toggleMenuAria: "Menü umschalten",
      officeLocationLabel: "Standort",
      languageSwitcherAria: "Sprache wechseln",
      languageOptionEn: "EN",
      languageOptionDe: "DE"
    },
    hero: {
      kpiYearsValue: "20+",
      kpiLanguageValue: "C1",
      kpiRemoteValue: "Frankfurt",
      kpiYearsExp: "Jahre Erfahrung",
      kpiLanguageFluency: "Deutsch & Englisch",
      kpiRemoteRegion: "Remote-first, DE & EU",
      kpiAvailableFrom: "Verfügbar ab",
      discussProjectCta: "Projekt besprechen",
      secondaryCta: "Projekterfahrung ansehen"
    },
    services: {
      eyebrow: "Leistungen",
      title: "Wobei ich unterstützen kann",
      intro:
        "Mein Fokus liegt auf schrittweiser .NET-Modernisierung, Azure-Integration, wartbaren Backend-Services und pragmatischer Projektumsetzung.",
      situationLabel: "Typische Ausgangslage",
      approachLabel: "Mein Vorgehen",
      technologiesUsedLabel: "Eingesetzte Technologien",
      howItHelpsLabel: "Ihr Nutzen"
    },
    approach: {
      eyebrow: "So arbeite ich",
      title: "Von der ersten Analyse bis zur sauberen Übergabe",
      intro: "Jedes System ist anders, die Reihenfolge der Arbeit ist aber meist dieselbe.",
      steps: [
        {
          title: "System verstehen",
          description: "Codebasis, Integrationen und Release-Prozess prüfen und die riskanten Stellen zuerst klären."
        },
        {
          title: "Kritisches Verhalten absichern",
          description: "Tests für kritische Abläufe und CI-Checks ergänzen, bevor sich Größeres ändert."
        },
        {
          title: "In kleinen Schritten verbessern",
          description:
            "Kleine, reviewbare Änderungen, die einzeln ausgeliefert werden können: .NET-Upgrades, klarere Grenzen und Azure-Services, wo sie helfen."
        },
        {
          title: "Sauber übergeben",
          description:
            "Übergabenotizen, Dokumentation und keine Secrets im Quellcode, damit Ihr Team das System weiter betreuen kann."
        }
      ],
      collaborationTitle: "Zusammenarbeit",
      cta: "Projekt besprechen"
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
      levelLabels: {
        primary: "Schwerpunkt",
        experience: "Projekterfahrung"
      }
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
      faqTitle: "Fragen zur Zusammenarbeit",
      faqIntro: "Kurze Antworten zu Setup, Vertraulichkeit, Verfügbarkeit und Profilanfragen."
    },
    footer: {
      description:
        "Unabhängige Beratung für Enterprise .NET-Modernisierung, zuverlässige Azure-Integrationen und produktionsnahe Software-Delivery in Deutschland und der EU.",
      portfolioIndexTitle: "Navigation",
      legalLinks: {
        impressum: "Impressum",
        datenschutz: "Datenschutzerklärung"
      },
      copyright: "© {{year}} Mojtaba Ghanaat Pisheh. Alle Rechte vorbehalten."
    },
    legal: {
      impressumTitle: "Impressum",
      privacyTitle: "Datenschutzerklärung",
      businessLabel: "Geschäftsbezeichnung",
      locationLabel: "Standort",
      phoneLabel: "Telefon",
      providerInfoBox: "Diese Seite enthält Anbieter- und Kontaktangaben für diese Website.",
      backToHomepage: "← Zur Startseite",
      privacyIntro:
        "Diese Website ist eine reine Informationsseite. Sie setzt keine Cookies, verwendet keine Werbe- oder Tracking-Dienste und verlangt keine Registrierung. Nachfolgend erläutere ich, welche Daten beim Besuch dennoch anfallen und was damit geschieht.",
      privacySections: [
        {
          title: "Hosting",
          paragraphs: [
            "Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Website verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, Browsertyp und Referrer in Server-Logdateien.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt im sicheren und stabilen Betrieb der Website. GitHub ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub: https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
          ]
        },
        {
          title: "Reichweitenmessung mit Cloudflare Web Analytics",
          paragraphs: [
            "Um zu verstehen, welche Inhalte aufgerufen werden, nutze ich Cloudflare Web Analytics der Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA. Der Dienst setzt keine Cookies, verwendet keine clientseitigen Kennungen und speichert keine IP-Adressen. Erfasst werden aggregierte Angaben wie aufgerufene Seite, Referrer, Browsertyp, Land und Ladezeiten.",
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in der Analyse und Verbesserung des Angebots. Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert. Details: https://www.cloudflare.com/privacypolicy/"
          ]
        },
        {
          title: "Schriftarten",
          paragraphs: [
            "Die verwendeten Schriftarten werden lokal von dieser Website ausgeliefert. Beim Seitenaufruf wird keine Verbindung zu Google Fonts oder anderen externen Schriftanbietern aufgebaut."
          ]
        },
        {
          title: "Spracheinstellung",
          paragraphs: [
            "Wenn Sie zwischen Deutsch und Englisch wechseln, wird Ihre Auswahl ausschließlich im lokalen Speicher Ihres Browsers (localStorage) abgelegt, damit die Seite beim nächsten Besuch in derselben Sprache erscheint. Diese Angabe wird nicht an mich oder Dritte übertragen und ist für die gewünschte Funktion erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG)."
          ]
        },
        {
          title: "Kontaktaufnahme",
          paragraphs: [
            "Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich Ihre Angaben (Name, Kontaktdaten, Inhalt der Anfrage), um Ihre Anfrage zu beantworten und ein mögliches Projekt zu besprechen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn die Anfrage auf einen Vertrag zielt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO.",
            "Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen."
          ]
        },
        {
          title: "Links zu LinkedIn und GitHub",
          paragraphs: [
            "Diese Website verlinkt auf mein Profil bei LinkedIn und GitHub. Beim reinen Laden dieser Seite werden keine Daten an diese Dienste übertragen. Erst wenn Sie einen Link anklicken, verlassen Sie diese Website; es gelten dann die Datenschutzhinweise des jeweiligen Anbieters."
          ]
        },
        {
          title: "Ihre Rechte",
          paragraphs: [
            "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen (Art. 21). Wenden Sie sich dazu an die oben genannte E-Mail-Adresse.",
            "Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren, zum Beispiel beim Hessischen Beauftragten für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden."
          ]
        }
      ],
      providerLabel: "Anbieter",
      emailLabel: "E-Mail",
      infoAccordingTo: "Angaben gemäß § 5 DDG",
      privacyDataProcessingInfo: "Informationen zur Datenverarbeitung auf dieser Website",
      providerNameLabel: "Name",
      controllerTitle: "Verantwortlicher",
      bindingVersionNote: "",
      lastUpdated: "Stand: September 2026"
    },
    availability: {
      fromPrefix: "Ab",
      badgeTemplate: "VERFÜGBAR AB {{monthYear}}",
      badgeTemplateShort: "AB {{monthYear}}",
      sentenceTemplate: "Verfügbar ab {{monthYear}}"
    }
  },
  data: {
    personalInfo: {
      name: "Mojtaba Ghanaat Pisheh",
      companyName: "MGP Consulting",
      legalBusinessName: "IT Consulting - Mojtaba Ghanaat Pisheh",
      role: "Freiberuflicher Senior .NET & Azure Entwickler mit Fokus auf Integration und Legacy-Modernisierung",
      roleLine: "Freiberuflicher Senior .NET- & Azure-Entwickler",
      tagline: "Legacy .NET Modernisierung | Azure Integration | pragmatische Delivery",
      // Non-breaking space keeps the dash on the same line as "modernisieren".
      headline: "Legacy-.NET-Systeme und Azure-Integrationen modernisieren –",
      headlineAccent: "ohne riskante Neuentwicklung.",
      subheadline:
        "Ich arbeite in Ihrem Team an bestehenden .NET-Anwendungen, Azure-Integrationen und Angular-Frontends – damit sie leichter änderbar, sicherer auszuliefern und im Betrieb zuverlässig sind.",
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
      }
    },
    services: [
      {
        id: "enterprise-api",
        title: "Enterprise API- & Integrationsentwicklung",
        iconName: "Cable",
        situation:
          "Kritische Integrationen sind eng gekoppelt, sodass ein einzelner Ausfall Kettenreaktionen in mehreren verbundenen Systemen auslösen kann.",
        approach:
          "Klare API-Grenzen definieren, asynchrones Messaging dort einsetzen, wo es hilft, und Retry-/Fehlerbehandlung mit praxisnaher Telemetrie ergänzen.",
        businessBenefit:
          "Hilft Teams, Geschäftssysteme stabil zu verbinden, API-Verantwortlichkeiten klar zu halten und Integrationsrisiken in der Umsetzung zu reduzieren.",
        technologies: ["ASP.NET Core Web API", "C#", "REST APIs", "Azure Service Bus", "Azure Functions", "Azure API Management"]
      },
      {
        id: "azure-integration",
        title: "Azure Integration & Backend-Services",
        iconName: "Cloud",
        situation:
          "Integrationen fallen unbemerkt aus: Nachrichten gehen verloren, Secrets liegen in Konfigurationsdateien, und es fehlt Telemetrie, um die Ursache zu finden.",
        approach:
          "Azure-basierte Integrationskomponenten mit verlässlichem Messaging umsetzen, Secrets in Key Vault ablegen und Telemetrie ergänzen, die zeigt, wo ein Problem entsteht.",
        businessBenefit:
          "Reduziert Störungen durch fragile Integrationen und macht Probleme schneller auffindbar, wenn sie auftreten.",
        technologies: ["Azure Functions", "Azure Service Bus", "Logic Apps", "Azure Key Vault", "Application Insights", "Azure App Service", "Azure SQL"]
      },
      {
        id: "dotnet-modernization",
        title: ".NET-Modernisierung & Delivery Readiness",
        iconName: "History",
        situation:
          "Gewachsene Codebasen machen selbst kleine Änderungen langsam und riskant, und manuelle Deployment-Schritte führen zu vermeidbaren Release-Fehlern.",
        approach:
          "Schrittweise modernisieren, zentrale Systemteile isolieren, automatisierte Tests rund um kritisches Verhalten stärken und wiederholbare CI/CD-Pipelines aufsetzen.",
        businessBenefit:
          "Hilft Teams, Änderungen schneller zu liefern – mit weniger Regressionsrisiko und planbareren Releases.",
        technologies: [".NET 8–10", "ASP.NET Core", "Entity Framework Core", "Clean Architecture / DDD", "Docker", "Azure DevOps", "GitHub Actions", "Bicep / Terraform"]
      },
      {
        id: "angular-business-apps",
        title: "Angular Business Applications",
        iconName: "Layout",
        situation:
          "Business-UIs werden schwer änderbar, wenn State-Handling, Komponentenabgrenzung und API-Flows inkonsistent sind.",
        approach:
          "Angular-Komponentenstruktur refaktorieren, State-Management-Muster klären und API-Verträge sauber ausrichten.",
        businessBenefit:
          "Hilft Teams, UI-Änderungen schneller umzusetzen, State stabil zu halten und langfristigen Wartungsaufwand zu senken.",
        technologies: ["Angular", "TypeScript", "RxJS", "Nx", "Angular Material", "Kendo UI", "Cypress", "Jest"]
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
          { name: "Modern .NET", level: "primary", badge: "C# / .NET 8–10" },
          { name: "ASP.NET Core Web API", level: "primary", badge: "RESTful architecture" },
          { name: "Entity Framework Core", level: "experience", badge: "Data access / ORM" },
          { name: "REST APIs", level: "primary", badge: "Web services" },
          { name: "Clean Architecture / DDD", level: "experience", badge: "Design discipline" },
          { name: "Authentication & Authorization", level: "experience", badge: "Identity / Security" },
          { name: "SQL Server / PostgreSQL", level: "experience", badge: "Relationale Datenhaltung" }
        ]
      },
      {
        id: "azure-integration",
        categoryName: "Azure & Integration",
        description: "Azure-Integrationsservices, sichere Konfigurationsverwaltung und Monitoring.",
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
        description: "CI/CD-Umsetzung, containerisierte Workflows und wiederholbare Deployment-Praktiken.",
        skills: [
          { name: "Azure DevOps Pipelines", level: "experience", badge: "Build & release YAML" },
          { name: "GitHub Actions", level: "experience", badge: "Continuous Integration" },
          { name: "Docker", level: "experience", badge: "Containerization" },
          { name: "Kubernetes (AKS basics)", level: "experience", badge: "Container orchestration" },
          { name: "Terraform", level: "experience", badge: "Infrastructure as Code" },
          { name: "Bicep", level: "experience", badge: "Azure-native IaC" },
          { name: "CI/CD Pipelines", level: "experience", badge: "Quality & automation gates" }
        ]
      },
      {
        id: "frontend-tech",
        categoryName: "Frontend",
        description: "Angular-Frontends mit wartbarem State-Management und modularer Architektur.",
        skills: [
          { name: "Angular", level: "primary", badge: "SPA Framework" },
          { name: "TypeScript", level: "primary", badge: "Type-safe language" },
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
          "Nach dem Onboarding arbeite ich selbstständig, kläre offene Punkte proaktiv und übernehme klare technische Verantwortung in der Umsetzung."
      },
      {
        title: "Klare Kommunikation",
        description:
          "Ich kommuniziere auf Deutsch und Englisch (C1) und lege Wert auf nachvollziehbare Trade-offs, praktikable Optionen und transparente Status-Updates."
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
