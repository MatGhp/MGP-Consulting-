/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { m } from "motion/react";
import { getAvailabilityShortMonthYear } from "../utils/availability";
import { useI18n } from "../i18n";

interface HeroProps {
  onContactClick: () => void;
  onExperienceClick: () => void;
}

export default function Hero({ onContactClick, onExperienceClick }: HeroProps) {
  const { locale, content, t } = useI18n();
  const personalInfo = content.data.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const kpis = [
    { value: t("ui.hero.kpiYearsValue"), label: t("ui.hero.kpiYearsExp") },
    { value: t("ui.hero.kpiLanguageValue"), label: t("ui.hero.kpiLanguageFluency") },
    { value: t("ui.hero.kpiLocationValue"), label: t("ui.hero.kpiLocationLabel") },
    { value: getAvailabilityShortMonthYear(locale), label: t("ui.hero.kpiAvailableFrom") },
  ];

  const handleExperienceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onExperienceClick();
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-14 md:pt-36 md:pb-24 overflow-hidden grid-bg bg-slate-950 text-white"
    >
      {/* Soft ambient glow, CSS only */}
      <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col space-y-5 sm:space-y-6"
        >
          {/* Name, role and headline */}
          <div className="space-y-3 sm:space-y-4">
            <m.p
              variants={itemVariants}
              className="font-mono text-sm text-slate-300"
            >
              <span className="font-semibold text-white">{personalInfo.name}</span>
              <span className="text-slate-400" aria-hidden="true"> · </span>
              <span>{personalInfo.role}</span>
            </m.p>

            <m.h1
              variants={itemVariants}
              className="text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:text-6xl font-bold tracking-tight text-white text-balance"
            >
              {personalInfo.headline}{" "}
              <span className="text-blue-400">{personalInfo.headlineAccent}</span>
            </m.h1>
          </div>

          {/* Value Proposition Subhead */}
          <m.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
          >
            {personalInfo.subheadline}
          </m.p>

          {/* Core Action Callouts */}
          <m.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:pt-2"
          >
            <button
              id="btn-hero-contact"
              onClick={onContactClick}
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>{t("ui.hero.discussProjectCta")}</span>
            </button>
            <a
              href="#experience"
              onClick={handleExperienceClick}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <span>{t("ui.hero.secondaryCta")}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </m.div>

          {/* Key facts */}
          <m.dl
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 mt-4"
          >
            {kpis.map((kpi, idx) => (
              <div key={idx} className="flex flex-col-reverse bg-slate-950 px-4 py-3">
                <dt className="text-xs text-slate-400 mt-1">{kpi.label}</dt>
                <dd className="font-mono text-xl font-semibold text-white tracking-tight">{kpi.value}</dd>
              </div>
            ))}
          </m.dl>
        </m.div>
      </div>
    </section>
  );
}
