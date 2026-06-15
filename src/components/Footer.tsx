/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              Operational freelancing entity for Mojtaba Ghanaat Pisheh, delivering high-performance Distributed Integration Services, passwordless Entra configurations and cross-platform backend modernization solutions for European enterprise clients.
            </p>
          </div>

          {/* Quick Shortcuts */}
          <div className="md:col-span-6 lg:col-span-3 space-y-3">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
              PORTFOLIO INDEX
            </span>
            <ul className="space-y-1.5 font-sans">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Technical Services
                </a>
              </li>
              <li>
                <a href="#value-add" className="hover:text-white transition-colors">
                  Resolution Values
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Project Logbook
                </a>
              </li>
              <li>
                <a href="#tech-focus" className="hover:text-white transition-colors">
                  Tech Focus
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Admin Terms */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
              COMPLIANCE & LEGAL
            </span>
            <div className="text-3xs text-slate-450 leading-relaxed space-y-2">
              <p>
                <strong>Impressum (Imprint):</strong> Mojtaba Ghanaat Pisheh, Freelance Senior .NET / Azure Integration Developer. Based in Frankfurt am Main, Germany. Contact: mojtaba@mgp-consulting.de. Final registered corporate entity details can be provided upon final agreement.
              </p>
              <p>
                <strong>Datenschutzerklärung (Privacy Policy):</strong> This website complies with European GDPR policies. No tracking cookies are used. Any data submitted via the contact form is processed strictly to manage project inquiries.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-3xs text-slate-500 font-sans">
          <div>
            <span>&copy; {currentYear} {PERSONAL_INFO.name}. All corporate rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-slate-600">|</span>
            <span className="font-mono uppercase tracking-wider text-slate-500">
              Active Server Status: Operational (Frankfurt)
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
