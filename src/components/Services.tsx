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
              className="group relative bg-slate-50 border border-slate-200/80 p-6 rounded-xl hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Title */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-blue-50/80 group-hover:bg-blue-100/50 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="font-sans text-md font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Scope Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Offerings list */}
                <div className="space-y-2 pt-2">
                  <span className="text-3xs font-mono uppercase text-slate-500 font-semibold tracking-wider block">
                    {t("ui.services.technologiesUsedLabel")}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.keyOfferings.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 font-bold mr-1.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom value benefit highlight card */}
              <div className="mt-6 pt-4 border-t border-slate-200/50">
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <span className="text-3xs font-mono uppercase text-blue-600 font-semibold tracking-wider block mb-1">
                    {t("ui.services.howItHelpsLabel")}
                  </span>
                  <p className="text-2xs text-slate-600 leading-normal">
                    {service.businessBenefit}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
