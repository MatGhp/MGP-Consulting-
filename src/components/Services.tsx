/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cable, Cloud, History, Layout, GitMerge } from "lucide-react";
import { useI18n } from "../i18n";

export default function Services() {
  const { content, t } = useI18n();
  const services = content.data.services;

  const getIcon = (name: string) => {
    switch (name) {
      case "Cable":
        return <Cable className="w-6 h-6 text-blue-600" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-blue-600" />;
      case "History":
        return <History className="w-6 h-6 text-blue-600" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-blue-600" />;
      case "GitMerge":
        return <GitMerge className="w-6 h-6 text-blue-600" />;
      default:
        return <Cable className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            {t("ui.services.eyebrow")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("ui.services.title")}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {t("ui.services.intro")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-xl flex flex-col"
            >
              {/* Header Icon & Title */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-lg bg-blue-50/80">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="font-sans text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
              </div>

              {/* Typical situation and what I do about it */}
              <dl className="space-y-4 text-sm leading-relaxed flex-1">
                <div>
                  <dt className="text-3xs font-mono uppercase text-slate-500 font-semibold tracking-wider mb-1">
                    {t("ui.services.situationLabel")}
                  </dt>
                  <dd className="text-slate-600">{service.situation}</dd>
                </div>
                <div>
                  <dt className="text-3xs font-mono uppercase text-blue-700 font-semibold tracking-wider mb-1">
                    {t("ui.services.approachLabel")}
                  </dt>
                  <dd className="text-slate-800 font-medium">{service.approach}</dd>
                </div>
              </dl>

              {/* Technology chips */}
              <div className="mt-6">
                <span className="text-3xs font-mono uppercase text-slate-500 font-semibold tracking-wider block mb-2">
                  {t("ui.services.technologiesUsedLabel")}
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded text-3xs font-mono font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business benefit */}
              <div className="mt-6 pt-4 border-t border-slate-200/70">
                <span className="text-3xs font-mono uppercase text-emerald-700 font-semibold tracking-wider block mb-1">
                  {t("ui.services.howItHelpsLabel")}
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.businessBenefit}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
