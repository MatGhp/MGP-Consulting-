/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-slate-900 border-t border-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-800 pb-8 mb-8">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-12 lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-lg font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                MGP
              </span>
              <span className="font-sans text-md font-semibold text-white tracking-tight">
                MGP Consulting
              </span>
            </div>
            <p className="text-2xs text-slate-400 font-sans leading-relaxed max-w-sm">
              {t("ui.footer.description")}
            </p>
          </div>

          {/* Quick Shortcuts */}
          <div className="md:col-span-6 lg:col-span-3 space-y-3">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
              {t("ui.footer.portfolioIndexTitle").toUpperCase()}
            </span>
            <ul className="space-y-1.5 font-sans">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t("ui.footer.links.services")}
                </a>
              </li>
              <li>
                <a href="#value-add" className="hover:text-white transition-colors">
                  {t("ui.footer.links.valueAdd")}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {t("ui.footer.links.projectExperience")}
                </a>
              </li>
              <li>
                <a href="#tech-focus" className="hover:text-white transition-colors">
                  {t("ui.footer.links.techFocus")}
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Admin Terms */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
              {t("ui.footer.complianceTitle").toUpperCase()}
            </span>
            <ul className="text-3xs text-slate-450 leading-relaxed space-y-2 font-sans">
              <li>
                <a href="/impressum" className="hover:text-white transition-colors">{t("ui.footer.legalLinks.impressum")}</a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-white transition-colors">{t("ui.footer.legalLinks.datenschutz")}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-3xs text-slate-500 font-sans">
          <div>
            <span>{t("ui.footer.copyright")}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="/impressum" className="hover:text-white transition-colors">{t("ui.footer.legalLinks.impressum")}</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">{t("ui.footer.legalLinks.datenschutz")}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
