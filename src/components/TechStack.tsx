/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Server, Settings, Monitor, ShieldCheck } from "lucide-react";
import { useI18n } from "../i18n";

export default function TechStack() {
  const { content, t } = useI18n();
  const categories = content.data.techCategories;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "dotnet-backend":
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case "azure-integration":
        return <Server className="w-5 h-5 text-blue-600" />;
      case "devops-delivery":
        return <Settings className="w-5 h-5 text-blue-600" />;
      case "frontend-tech":
        return <Monitor className="w-5 h-5 text-blue-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const getCategoryBadge = (id: string) => {
    switch (id) {
      case "dotnet-backend":
        return t("ui.techStack.categoryBadges.dotnetBackend");
      case "azure-integration":
        return t("ui.techStack.categoryBadges.azureIntegration");
      case "devops-delivery":
        return t("ui.techStack.categoryBadges.devopsDelivery");
      case "frontend-tech":
        return t("ui.techStack.categoryBadges.frontendTech");
      default:
        return "";
    }
  };

  return (
    <section id="tech-focus" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            {t("ui.techStack.eyebrow")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("ui.techStack.title")}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {t("ui.techStack.intro")}
          </p>
        </div>

        {/* Proof Bar */}
        <div className="mb-12 rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {content.ui.techStack.proofIndicators.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-md border border-slate-200/80 bg-slate-50/60 px-3.5 py-2.5"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600/90 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="p-2 bg-blue-50/80 rounded-lg">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-sans text-md font-bold text-slate-900 leading-none">
                      {category.categoryName}
                    </h3>
                    <span className="inline-flex items-center mt-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-100">
                      {getCategoryBadge(category.id)}
                    </span>
                    <span className="font-sans text-[11px] text-slate-400 mt-1 block">
                      {category.description}
                    </span>
                  </div>
                </div>

                {/* Skills Bullet matrix with Level indicators */}
                <div className="space-y-4 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between group"
                    >
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-slate-800 font-sans group-hover:text-blue-700 transition-colors">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="block font-mono text-[10px] text-slate-400">
                            {skill.badge}
                          </span>
                        )}
                      </div>

                      {/* Expertise Pill badge */}
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-50/75 text-blue-850 border border-blue-105/50 whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Code Standards callout card */}
        <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-1">
              <span className="font-mono text-3xs font-semibold text-blue-400 uppercase tracking-widest block">
                {t("ui.techStack.calloutEyebrow")}
              </span>
              <h4 className="text-md font-bold text-white">
                {t("ui.techStack.calloutTitle")}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
                {t("ui.techStack.calloutDescription")}
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-sm text-slate-200">
              <span className="text-3xs font-mono font-semibold uppercase tracking-widest text-blue-300 block mb-3">
                {t("ui.techStack.checklistTitle")}
              </span>
              <ul className="space-y-2.5">
                {content.ui.techStack.checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
