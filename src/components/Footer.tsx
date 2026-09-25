/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useI18n } from "../i18n";

export default function Footer() {
  const { content, t } = useI18n();
  const personalInfo = content.data.personalInfo;

  return (
    <footer className="bg-slate-900 border-t border-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-800 pb-8 mb-8">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-6 lg:col-span-7 space-y-4">
            <div className="flex flex-col">
              <span className="font-sans text-md font-semibold text-white tracking-tight">
                {personalInfo.companyName}
              </span>
              <span className="font-mono text-3xs text-slate-400 uppercase tracking-widest mt-0.5">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-2xs text-slate-400 font-sans leading-relaxed max-w-sm">
              {t("ui.footer.description")}
            </p>
          </div>

          {/* Quick Shortcuts */}
          <div className="md:col-span-6 lg:col-span-5 space-y-3">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
              {t("ui.footer.portfolioIndexTitle").toUpperCase()}
            </span>
            <ul className="space-y-1.5 font-sans">
              {content.ui.navbar.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-3xs text-slate-400 font-sans">
          <div>
            <span>{t("ui.footer.copyright", { year: String(new Date().getFullYear()) })}</span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <a href="/impressum" className="hover:text-white transition-colors">{t("ui.footer.legalLinks.impressum")}</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">{t("ui.footer.legalLinks.datenschutz")}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
