/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, HelpCircle, Activity, Lightbulb, CheckCircle2 } from "lucide-react";
import { VALUE_ADD_SCENARIOS, COLLABORATION_VALUES } from "../data";

export default function ValueAdd() {
  const getScenarioIcon = (id: string) => {
    switch (id) {
      case "val-1":
        return <Activity className="w-5 h-5 text-amber-500" />;
      case "val-2":
        return <HelpCircle className="w-5 h-5 text-blue-500" />;
      case "val-3":
        return <Shield className="w-5 h-5 text-emerald-500" />;
      default:
        return <Lightbulb className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="value-add" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            Where I Add Value
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Resolving Real Enterprise Challenges
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Many developers can write boilerplate code. I bridge the gap between abstract business problems and bullet-proof technical implementations.
          </p>
        </div>

        {/* Value Add Scenarios Matrix */}
        <div className="space-y-8">
          {VALUE_ADD_SCENARIOS.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Problem Left Grid */}
              <div className="p-6 lg:p-8 lg:col-span-5 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded-md bg-white border border-slate-150 shadow-2xs">
                      {getScenarioIcon(scenario.id)}
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      IDENTIFIED BOTTLENECK
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {scenario.situation}
                  </p>
                </div>
                <div className="pt-4 text-xs font-mono text-rose-600 flex items-center space-x-1 font-semibold select-none">
                  <span>⚠</span>
                  <span>Results in high operations maintenance & developer exhaustion</span>
                </div>
              </div>

              {/* Solution Right Grid */}
              <div className="p-6 lg:p-8 lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-150 px-2 py-0.5 rounded uppercase tracking-wider font-bold inline-block">
                    PROVEN MITIGATION STRATEGY
                  </span>
                  <h4 className="text-md font-bold text-slate-900">
                    {scenario.solution}
                  </h4>
                  
                  {/* Technical Depth Specs tag */}
                  <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold tracking-wider block mb-1">
                      Technical implementation tools:
                    </span>
                    <span className="font-mono text-xs text-blue-800 font-semibold leading-relaxed">
                      {scenario.technicalDepth}
                    </span>
                  </div>
                </div>

                {/* Measurable Business Outcome */}
                <div className="flex items-center space-x-3 pt-2">
                  <div className="p-1 rounded-full bg-emerald-100 flex-shrink-0 text-emerald-600">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-xs">
                    <span className="font-mono uppercase text-[10px] font-bold text-emerald-700 block tracking-wider">
                      BUSINESS RETURN:
                    </span>
                    <span className="text-slate-700 font-medium font-sans">
                      {scenario.businessImpact}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Senior Collaboration Philosophy block */}
        <div className="mt-20 border-t border-slate-200/60 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
              HOW I COLLABORATE
            </span>
            <h3 className="text-2xl font-bold text-slate-950">
              The Professional Mindset of a Senior Consultant
            </h3>
            <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
              Hiring a senior developer is an investment. These are the principles that guarantee our collaboration will be efficient, low-overhead, and high-impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COLLABORATION_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-205/60 p-5 rounded-lg shadow-2xs hover:border-slate-350 transition-colors"
              >
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
