/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Server, Settings, Monitor, ShieldCheck, Star } from "lucide-react";
import { TECH_CATEGORIES } from "../data";

export default function TechStack() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "dotnet-ecosystem":
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case "azure-cloud":
        return <Server className="w-5 h-5 text-blue-600" />;
      case "devops-iac":
        return <Settings className="w-5 h-5 text-blue-600" />;
      case "frontend-business":
        return <Monitor className="w-5 h-5 text-blue-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="tech-matrix" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            Technology Matrix
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Selected Core Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-600">
            I specialize in .NET frameworks and enterprise Azure topologies. I do not pretend to hold equal mastery in every tool. I deliver senior value in these defined clusters:
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_CATEGORIES.map((category) => (
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
                        {skill.level === "Expert" ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-750 border border-blue-150">
                            <Star className="w-2.5 h-2.5 mr-1 fill-blue-500 text-blue-500" />
                            EXPERT (PRIMARY)
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                            ADVANCED (CORE)
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Assertion */}
              <div className="mt-8 pt-4 border-t border-slate-100 bg-slate-50/50 -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between text-3xs text-slate-500 select-none">
                <div className="flex items-center space-x-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Production Tested & Audited</span>
                </div>
                <span>100% CI/CD Integrated</span>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Code Standards callout card */}
        <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-1">
              <span className="font-mono text-3xs font-semibold text-blue-400 uppercase tracking-widest block">
                Quality Assertion Frameworks
              </span>
              <h4 className="text-md font-bold text-white">
                How I enforce structural sanity in .NET integrations
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
                I do not ship software with untested core endpoints. I integrate automated architecture assertions (like ArchUnitNET or clean assembly checks), SonarQube quality gates on Azure Pipelines, and full integration suites testing Service Bus mock runtimes automatically.
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-750 font-mono text-[10px] space-y-1.5 text-slate-300">
              <div className="text-emerald-400">// Integrity assertions:</div>
              <div>[Fact] public void Domain_ShouldNotNull()</div>
              <div>[Fact] public void DB_ShouldNoHardcodedCreds()</div>
              <div className="text-blue-400">// Security configuration audit passed</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
