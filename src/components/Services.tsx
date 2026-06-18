/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cable, Cloud, History, Layout, GitMerge } from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
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
            My Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Where I Deliver Senior-Level Value
          </h2>
          <p className="mt-4 text-base text-slate-600">
            I focus on the areas where I can deliver senior-level value quickly and reliably: legacy .NET modernization,
            Azure integration, maintainable backend services, and production-oriented project delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
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
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider block">
                    Core Technical Actions
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-650">
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
                <div className="p-3 bg-white border border-slate-150 rounded-lg">
                  <span className="text-[10px] font-mono uppercase text-blue-600 font-semibold tracking-wider block mb-1">
                    Business Impact
                  </span>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {service.businessBenefit}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Modernization Callout block */}
        <div className="mt-12 p-6 bg-slate-950 text-slate-200 rounded-xl overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-blue-900/10 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-3xl">
              <span className="font-mono text-[10px] bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded uppercase tracking-wider">
                Legacy-to-Cloud Delivery
              </span>
              <h4 className="text-lg font-bold text-white pt-1">
                Modernizing enterprise systems without risky rewrites
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enterprise modernization rarely starts from zero. I implement integration layers and delivery patterns that
                let existing business systems evolve safely while new services are introduced.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex self-start md:self-auto items-center space-x-1.5 px-4.5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              Discuss Project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
