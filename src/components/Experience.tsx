/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from "react";
import { Briefcase, Calendar, Clock, ShieldCheck, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../i18n";

export default function Experience() {
  const { content, t } = useI18n();
  const projects = content.data.projects;

  const filterAll = t("ui.experience.filterAll");
  const filterDevOps = t("ui.experience.filterDevOpsPipelines");
  const [filterTech, setFilterTech] = useState<string>(filterAll);

  const filterPills = useMemo(
    () => [filterAll, "Azure Functions", "Azure Service Bus", filterDevOps, "Angular"],
    [filterAll, filterDevOps]
  );

  const filteredProjects = projects.filter((project) => {
    if (filterTech === filterAll) return true;
    if (filterTech === filterDevOps) {
      return project.techStack.some((tech) => tech.includes("DevOps") || tech.includes("GitHub"));
    }
    return project.techStack.some((tech) => tech.includes(filterTech));
  });

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              {t("ui.experience.eyebrow")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("ui.experience.title")}
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
              {t("ui.experience.intro")}
            </p>
          </div>

          {/* Secure NDA Compliance Disclaimer Badge */}
          <div className="mt-4 md:mt-0 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start space-x-2.5 max-w-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-3xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800 uppercase tracking-wide font-bold font-mono">{t("ui.experience.ndaTitle")}</strong>
              <p className="font-normal font-sans">{t("ui.experience.ndaDescription")}</p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-100 select-none">
          {filterPills.map((pill) => (
            <button
              key={pill}
              onClick={() => setFilterTech(pill)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono tracking-wide uppercase transition-all border cursor-pointer ${
                filterTech === pill
                  ? "bg-slate-950 text-white border-slate-950"
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-slate-705"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Project logs cascade */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                id={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-205 p-6 sm:p-8 rounded-xl hover:shadow-xs transition-shadow relative"
              >
                {/* Meta details header band */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6 text-xs text-slate-500">
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
                    <span className="font-mono bg-blue-50 text-blue-700 border border-blue-100/50 px-2.5 py-1 rounded font-bold uppercase tracking-wider text-3xs">
                      {project.sector}
                    </span>
                    <span className="font-sans text-slate-700 font-semibold flex items-center">
                      <Briefcase className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                      {project.clientType}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 font-mono text-3xs font-semibold uppercase tracking-wider">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {project.period}
                    </span>
                    <span className="flex items-center text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded border border-blue-100/30">
                      <Clock className="w-3.5 h-3.5 mr-1 text-blue-500" />
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Role & Title */}
                <div className="space-y-3 mb-5">
                  <span className="block text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
                    {project.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans font-normal">
                    <strong>{t("ui.experience.projectScopeLabel")}: </strong>
                    {project.scope}
                  </p>
                </div>

                {/* Key Achievements Bullet block */}
                <div className="space-y-3 mb-6">
                  <span className="block text-3xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    {t("ui.experience.contributionsLabel")}
                  </span>
                  <ul className="space-y-2.5 text-sm text-slate-700 font-sans font-normal">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="p-0.5 bg-emerald-50 text-emerald-600 border border-emerald-150 rounded-full mr-2.5 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3px]" />
                        </div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges array */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-3xs font-mono font-bold text-slate-400 uppercase tracking-wider mr-2 select-none">
                    {t("ui.experience.technologiesUsedLabel")}
                  </span>
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded text-3xs font-mono font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
