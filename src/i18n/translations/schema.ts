import { ProjectExperience, ServiceItem, TechCategory, ValueAddScenario } from "../../types";

export interface PersonalLanguage {
  name: string;
  level: string;
}

export interface PersonalInfoContent {
  name: string;
  role: string;
  tagline: string;
  headline: string;
  subheadline: string;
  location: string;
  locationShort: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  linkedin: string;
  github: string;
  languages: PersonalLanguage[];
  availability: {
    status: string;
    remotePreference: string;
    euEligible: string;
  };
  trustFacts: string[];
}

export interface CollaborationValue {
  title: string;
  description: string;
}

export interface CollaborationFaq {
  q: string;
  a: string;
}

export interface TranslationContent {
  seo: {
    home: {
      title: string;
      description: string;
    };
    legal: {
      impressum: {
        title: string;
        description: string;
      };
      datenschutz: {
        title: string;
        description: string;
      };
    };
  };
  ui: {
    navbar: {
      navLinks: Array<{ name: string; href: string }>;
      companyTagline: string;
      contactCta: string;
      toggleMenuAria: string;
      officeLocationLabel: string;
      languageSwitcherAria: string;
      languageOptionEn: string;
      languageOptionDe: string;
    };
    hero: {
      identityCapsule: string;
      kpiYearsValue: string;
      kpiLanguageValue: string;
      kpiRemoteValue: string;
      kpiYearsExp: string;
      kpiLanguageFluency: string;
      kpiRemoteRegion: string;
      kpiAvailableFrom: string;
      profileWindowTitle: string;
      coreCapabilitiesLabel: string;
      coreCapabilitiesText: string;
      whatIHelpWithLabel: string;
      helpItems: string[];
      projectSetupLabel: string;
      projectSetupText: string;
      discussProjectCta: string;
    };
    services: {
      eyebrow: string;
      title: string;
      intro: string;
      technologiesUsedLabel: string;
      howItHelpsLabel: string;
      calloutTag: string;
      calloutTitle: string;
      calloutDescription: string;
      calloutCta: string;
    };
    valueAdd: {
      eyebrow: string;
      title: string;
      intro: string;
      problemLabel: string;
      approachLabel: string;
      technologiesUsedLabel: string;
      howItHelpsLabel: string;
      scenarioRisks: Record<string, string>;
      collaboration: {
        eyebrow: string;
        title: string;
        intro: string;
      };
    };
    experience: {
      eyebrow: string;
      title: string;
      intro: string;
      ndaTitle: string;
      ndaDescription: string;
      filterAll: string;
      filterDevOpsPipelines: string;
      projectScopeLabel: string;
      contributionsLabel: string;
      technologiesUsedLabel: string;
    };
    techStack: {
      eyebrow: string;
      title: string;
      intro: string;
      footerUsedInProduction: string;
      footerCiCdExperience: string;
      calloutEyebrow: string;
      calloutTitle: string;
      calloutDescription: string;
      checklistTitle: string;
      checklistItems: string[];
    };
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
      availabilityCardTitle: string;
      availabilityCardIntro: string;
      availabilityLabel: string;
      locationLabel: string;
      remoteSetupLabel: string;
      directContactTitle: string;
      directContactIntro: string;
      emailLabel: string;
      phoneLabel: string;
      linkedinLabel: string;
      linkedinValue: string;
      githubLabel: string;
      githubValue: string;
      copyEmailAria: string;
      copyPhoneAria: string;
      copyEmailSuccess: string;
      copyPhoneSuccess: string;
      copyFailed: string;
      phoneUnavailable: string;
      linkedinAria: string;
      githubAria: string;
      faqEyebrow: string;
      faqTitle: string;
      faqIntro: string;
    };
    footer: {
      description: string;
      portfolioIndexTitle: string;
      links: {
        services: string;
        valueAdd: string;
        projectExperience: string;
        techFocus: string;
      };
      complianceTitle: string;
      legalLinks: {
        impressum: string;
        datenschutz: string;
      };
      copyright: string;
    };
    legal: {
      impressumTitle: string;
      privacyTitle: string;
      businessLabel: string;
      locationLabel: string;
      providerInfoBox: string;
      backToHomepage: string;
      privacyIntro: string;
      privacyItems: string[];
      providerLabel: string;
      emailLabel: string;
      infoAccordingTo: string;
      privacyDataProcessingInfo: string;
      providerNameLabel: string;
    };
    app: {
      modalTitle: string;
      modalSubtitle: string;
      modalCloseAria: string;
      modalCloseTitle: string;
      successTitle: string;
      successDescription: string;
      successPrimaryCta: string;
      successSecondaryCta: string;
      formIntro: string;
      workEmailLabel: string;
      workEmailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      directDownloadLink: string;
      submitButton: string;
      privacyNoteTitle: string;
      privacyNoteText: string;
      profileFileName: string;
      profileSnapshotText: string;
    };
    availability: {
      fromPrefix: string;
      badgeTemplate: string;
      sentenceTemplate: string;
    };
  };
  data: {
    personalInfo: PersonalInfoContent;
    services: ServiceItem[];
    valueAddScenarios: ValueAddScenario[];
    projects: ProjectExperience[];
    techCategories: TechCategory[];
    collaborationValues: CollaborationValue[];
    collaborationFaqs: CollaborationFaq[];
  };
}
