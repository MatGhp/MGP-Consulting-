/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Server, Settings, Monitor } from "lucide-react";
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
                    <span className="font-sans text-2xs text-slate-500 mt-1.5 block">
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
                          <span className="block font-mono text-3xs text-slate-500">
                            {skill.badge}
                          </span>
                        )}
                      </div>

                      {/* Expertise Pill badge */}
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded text-3xs font-mono font-bold uppercase tracking-wider border whitespace-nowrap ${
                            skill.level === "primary"
                              ? "bg-blue-50 text-blue-800 border-blue-100"
                              : "bg-slate-50 text-slate-600 border-slate-200"
                          }`}
                        >
                          {content.ui.techStack.levelLabels[skill.level]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
