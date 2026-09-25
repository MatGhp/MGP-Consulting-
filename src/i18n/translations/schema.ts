import { ProjectExperience, ServiceItem, SkillLevel, TechCategory } from "../../types";

export interface PersonalLanguage {
  name: string;
  level: string;
}

export interface PersonalInfoContent {
  name: string;
  companyName: string;
  legalBusinessName: string;
  role: string;
  roleLine: string;
  tagline: string;
  headline: string;
  headlineAccent: string;
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
}

export interface CollaborationValue {
  title: string;
  description: string;
}

export interface ApproachStep {
  title: string;
  description: string;
}

export interface CollaborationFaq {
  q: string;
  a: string;
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
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
      contactCta: string;
      toggleMenuAria: string;
      officeLocationLabel: string;
      languageSwitcherAria: string;
      languageOptionEn: string;
      languageOptionDe: string;
    };
    hero: {
      kpiYearsValue: string;
      kpiLanguageValue: string;
      kpiRemoteValue: string;
      kpiYearsExp: string;
      kpiLanguageFluency: string;
      kpiRemoteRegion: string;
      kpiAvailableFrom: string;
      discussProjectCta: string;
      secondaryCta: string;
    };
    services: {
      eyebrow: string;
      title: string;
      intro: string;
      situationLabel: string;
      approachLabel: string;
      technologiesUsedLabel: string;
      howItHelpsLabel: string;
    };
    approach: {
      eyebrow: string;
      title: string;
      intro: string;
      steps: ApproachStep[];
      collaborationTitle: string;
      cta: string;
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
      levelLabels: Record<SkillLevel, string>;
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
      phoneLabel: string;
      providerInfoBox: string;
      backToHomepage: string;
      privacyIntro: string;
      privacySections: LegalSection[];
      providerLabel: string;
      emailLabel: string;
      infoAccordingTo: string;
      privacyDataProcessingInfo: string;
      providerNameLabel: string;
      controllerTitle: string;
      bindingVersionNote: string;
      lastUpdated: string;
    };
    availability: {
      fromPrefix: string;
      badgeTemplate: string;
      badgeTemplateShort: string;
      sentenceTemplate: string;
    };
  };
  data: {
    personalInfo: PersonalInfoContent;
    services: ServiceItem[];
    projects: ProjectExperience[];
    techCategories: TechCategory[];
    collaborationValues: CollaborationValue[];
    collaborationFaqs: CollaborationFaq[];
  };
}
