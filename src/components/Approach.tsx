/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail } from "lucide-react";
import { useI18n } from "../i18n";

interface ApproachProps {
  onContactClick: () => void;
}

export default function Approach({ onContactClick }: ApproachProps) {
  const { content, t } = useI18n();
  const steps = content.ui.approach.steps;
  const collaborationValues = content.data.collaborationValues;

  return (
    <section id="approach" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">
            {t("ui.approach.eyebrow")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("ui.approach.title")}
          </h2>
          <p className="mt-4 text-base text-slate-300">
            {t("ui.approach.intro")}
          </p>
        </div>

        {/* Numbered steps */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <li key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <span className="font-mono text-2xl font-semibold text-blue-400" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Working together */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">
            {t("ui.approach.collaborationTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collaborationValues.map((val, idx) => (
              <div key={idx} className="rounded-lg border border-white/10 p-5">
                <h4 className="text-sm font-bold text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <button
            id="btn-approach-contact"
            onClick={onContactClick}
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm inline-flex items-center space-x-2.5 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{t("ui.approach.cta")}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
