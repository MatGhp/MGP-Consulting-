/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Server, Settings, Monitor, ShieldCheck } from "lucide-react";
import { TECH_CATEGORIES } from "../data";

export default function TechStack() {
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
            Tech Focus
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Selected Core Capabilities
          </h2>
          <p className="mt-4 text-base text-slate-600">
            My strongest delivery value is concentrated in .NET, Azure integration, enterprise backend systems, and Angular-based business applications.
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
                        <span className="inline-flex items-center px-2 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-50/75 text-blue-850 border border-blue-105/50 whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Assertion */}
              <div className="mt-8 pt-4 border-t border-slate-100 bg-slate-50/50 -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between text-3xs text-slate-500 select-none">
                <div className="flex items-center space-x-1.5 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Used in production projects</span>
                </div>
                <span>CI/CD project experience</span>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Code Standards callout card */}
        <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-1">
              <span className="font-mono text-3xs font-semibold text-blue-400 uppercase tracking-widest block">
                Quality & Delivery Approach
              </span>
              <h4 className="text-md font-bold text-white">
                How quality is supported in enterprise delivery
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
                I support maintainable implementation and production-oriented delivery with practical testing strategies,
                CI/CD quality gates, and structured release practices appropriate for enterprise teams.
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
