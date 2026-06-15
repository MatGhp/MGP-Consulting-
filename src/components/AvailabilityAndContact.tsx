/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Mail, Linkedin, FileText, CheckCircle, MapPin, Calendar, Globe, HelpCircle, ChevronDown, Check, Send, Download } from "lucide-react";
import { PERSONAL_INFO, COLLABORATION_FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface AvailabilityAndContactProps {
  onCvRequestedSuccess?: () => void;
}

export default function AvailabilityAndContact({ onCvRequestedSuccess }: AvailabilityAndContactProps) {
  const [activeTab, setActiveTab] = useState<"inquiry" | "cv">("inquiry");
  
  // Inquiry form states
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryCompany, setInquiryCompany] = useState("");
  const [inquiryType, setInquiryType] = useState(".NET Modernization / Architecture Refactoring");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  // CV request states
  const [cvEmail, setCvEmail] = useState("");
  const [cvCompany, setCvCompany] = useState("");
  const [cvSent, setCvSent] = useState(false);

  // FAQ collapses - index array of open items
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);

  const toggleFaq = (idx: number) => {
    if (openFaqIndices.includes(idx)) {
      setOpenFaqIndices(openFaqIndices.filter((i) => i !== idx));
    } else {
      setOpenFaqIndices([...openFaqIndices, idx]);
    }
  };

  // Immediate Profile Download Function
  const handleImmediateDownload = () => {
    const profileText = `======================================================================
MOJTABA GHANAAT-PISHEH
SENIOR .NET / AZURE INTEGRATION CONSULTANT
Official Freelance Profile & Contract Specifications (2026 Edition)
======================================================================

CONTACT DETAILS:
----------------
Email: ${PERSONAL_INFO.email}
Phone/Direct: Request via email
Location: Frankfurt am Main, Germany
Availability: ${PERSONAL_INFO.availability.status} ${PERSONAL_INFO.availability.dateText}
Preferred contract structures: GULP, freelancermap, or direct agency billing

CORE POSITIONING:
-----------------
Freelance developer specializing in .NET (8 & 9), cloud integration, message-driven backend systems, passwordless security integrations, CI/CD pipelines, and structured modern Angular-based administration applications.

SUMMARY OF MASTERY MATRIX:
-------------------------
1. .NET Ecosystem: C#, ASP.NET Core Web API (REST/gRPC), EF Core, clean architectural boundaries (DDD), xUnit testing suites.
2. Azure Cloud Platforms: Azure Service Bus (Resilient Message queues), Azure Functions (Isolated workers), Key Vault, Managed Identities, APIM, Cosmos DB.
3. DevOps Operations: Automated release pipes via YAML (Azure DevOps / GitHub actions), Infrastructure as Code (Azure Bicep), Docker containers.
4. Business Interfaces: Single-Page applications using Angular, TypeScript, and responsive Tailwind styling.

SELECTED RETROSPECTIVE PROJECT OUTLINES:
--------------------------------------
* Role: Freelance Lead Azure Integration Developer (German Utility Grid)
  Telemetry collection re-architecture. Processed massive telemetry files via event hub grids. Replaced legacy message pipelines with robust dead-letter queue rules, achieving 99.99% operational continuity.
  
* Role: Freelance Senior .NET Cloud Backend Developer (European Logistics Carrier)
  API decoupled monolithic migration to Container Apps with isolated function workers. Hosted Angular-based package dispatcher grids with multi-environment Azure DevOps release pipelines.

* Role: Senior integration engineer (German Financial Broker Agency)
  Established BaFin compliant secure document intake systems. Eliminated hardcoded connection connection passwords utilizing passwordless Azure Managed Identities.

======================================================================
This document is prepared as a standard resume snapshot. Please forward direct project scopes to: mojtaba@mgp-consulting.de
MGP Consulting (c) 2026. Frankfurt, Germany
======================================================================
`;

    const blob = new Blob([profileText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Freelance_Profile_Mojtaba_Ghanaat_Pisheh.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Submit Inquiry handler
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) {
      alert("Please enter Name, Email, and message contents.");
      return;
    }

    // Prepare Mailto string
    const emailSubject = encodeURIComponent(`[MGP Project Inquiry] Scope: ${inquiryType}`);
    const emailBody = encodeURIComponent(
      `Hello Mojtaba,\n\nWe have a project request for you.\n\nSender: ${inquiryName}\nCompany: ${inquiryCompany}\nEmail: ${inquiryEmail}\nInquiry Focus: ${inquiryType}\n\nProject Scope details:\n-------------------------------\n${inquiryMessage}\n\n-------------------------------\nSent from mgp-consulting.de Portfolio`
    );
    
    // Simulate offline storing first
    setInquirySent(true);

    // Open mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  // Submit CV Request handler
  const handleCvSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvEmail) return;
    setCvSent(true);
    if (onCvRequestedSuccess) {
      onCvRequestedSuccess();
    }
    // Automatically trigger immediate download to be helpful!
    handleImmediateDownload();
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            Availability & Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let's Start a Discussion about Your Project
          </h2>
          <p className="mt-4 text-base text-slate-600">
            I operate based in Frankfurt am Main, Germany, accepting assignments across the DACH and European Union regions on a remote-first basis. Let's trace how your integration project starts.
          </p>
        </div>

        {/* Info Grid block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Admin details & Availability Checklist */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 font-sans">
                Administrative Framework Details
              </h3>

              {/* Status capsule */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">
                      FREELANCE AVAILABILITY STATUS
                    </span>
                    <span className="text-slate-800 font-bold block">
                      {PERSONAL_INFO.availability.status} — Booking {PERSONAL_INFO.availability.dateText}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">
                      BASE OF OPERATIONS
                    </span>
                    <span className="text-slate-700 font-normal">
                      {PERSONAL_INFO.locationShort}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">
                      INTEGRATED LANGUAGE FLUENCY
                    </span>
                    <span className="text-slate-700 font-normal block font-sans">
                      German (Professional, fluent) & English (Native/Fluent business)
                    </span>
                  </div>
                </div>
              </div>

              {/* Partner Compliance List */}
              <div className="space-y-3.5">
                <span className="font-mono text-3xs font-bold text-slate-400 uppercase tracking-widest block">
                  SERVICE PRE-REQUISITES & TERMS
                </span>
                <ul className="space-y-2 text-xs text-slate-650">
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>No structural hiring overhead. Fully registered freelance entity (Gewerbebetrieb)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>GULP, freelancermap, SOLCOM, and direct organizational master billing compatible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>100% remote-ready setup containing fiber connectivity and containerised staging models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>Willingness to join local key workshops or kickoff sprints in Frankfurt, Berlin, Munich, or Cologne</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email contact block */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono w-full justify-center transition-colors select-none"
              >
                <Mail className="w-4 h-4 fill-blue-100" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-3 bg-slate-50 hover:bg-slate-150 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono w-full justify-center transition-colors select-none"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Form Console */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              
              {/* Tab Toggles */}
              <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-100 p-1">
                <button
                  id="tab-btn-inquiry"
                  onClick={() => setActiveTab("inquiry")}
                  className={`py-3.5 text-xs uppercase tracking-wider font-mono font-bold rounded-lg text-center transition-all cursor-pointer ${
                    activeTab === "inquiry"
                      ? "bg-white text-slate-900 shadow-3xs border border-slate-200"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/40"
                  }`}
                >
                  Project Request
                </button>
                <button
                  id="tab-btn-cv"
                  onClick={() => setActiveTab("cv")}
                  className={`py-3.5 text-xs uppercase tracking-wider font-mono font-bold rounded-lg text-center transition-all cursor-pointer ${
                    activeTab === "cv"
                      ? "bg-white text-slate-900 shadow-3xs border border-slate-200"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/40"
                  }`}
                >
                  Request Full CV Snap / Profile
                </button>
              </div>

              {/* Form Content area */}
              <div className="p-6 bg-white sm:p-8 min-h-[420px]">
                {activeTab === "inquiry" ? (
                  /* Inquiry Form */
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-mono block border-b border-slate-50 pb-2 mb-4">
                      Initialize Project Discussion
                    </h4>

                    {inquirySent ? (
                      /* Success State */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center space-y-4 py-12"
                      >
                        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                        <div className="space-y-1">
                          <h5 className="text-base font-bold text-slate-900">
                            Request Prepared Successfully!
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                            I have formatted your request and redirected you to your email client. You can send the preformatted email or copy the direct support lines below:
                          </p>
                        </div>
                        <div className="bg-white border border-emerald-250 p-3 rounded text-[11px] font-mono text-slate-700 select-all max-w-sm mx-auto">
                          Recruits to: <strong>{PERSONAL_INFO.email}</strong>
                        </div>
                        <button
                          type="button"
                          onClick={() => setInquirySent(false)}
                          className="text-xs font-semibold text-blue-600 hover:underline"
                        >
                          Modify or send another request form
                        </button>
                      </motion.div>
                    ) : (
                      /* Active Input Form */
                      <div className="space-y-4 text-xs font-sans">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5 animate-none">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Your Name *</label>
                            <input
                              required
                              type="text"
                              value={inquiryName}
                              onChange={(e) => setInquiryName(e.target.value)}
                              placeholder="e.g. Dr. Thomas Klein"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Your Corporate Email *</label>
                            <input
                              required
                              type="email"
                              value={inquiryEmail}
                              onChange={(e) => setInquiryEmail(e.target.value)}
                              placeholder="e.g. klein@enterprise-solutions.de"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Organizational Body (Company)</label>
                            <input
                              type="text"
                              value={inquiryCompany}
                              onChange={(e) => setInquiryCompany(e.target.value)}
                              placeholder="e.g. Siemens AG / GULP Agency"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Assignment Classification</label>
                            <select
                              value={inquiryType}
                              onChange={(e) => setInquiryType(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            >
                              <option>.NET Modernization / Architecture Refactoring</option>
                              <option>Azure Cloud-Native integration / APIM API setup</option>
                              <option>Angular business dashboard control portal design</option>
                              <option>DevOps YAML Multi-tier Pipeline configuration</option>
                              <option>Urgent short-term systems consulting (Ad-hoc review)</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Project Scope Outline *</label>
                          <textarea
                            required
                            rows={4}
                            value={inquiryMessage}
                            onChange={(e) => setInquiryMessage(e.target.value)}
                            placeholder="Please outline the software target, environment architecture constraints, expected duration, and direct contact options..."
                            className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm leading-relaxed"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          id="btn-submit-inquiry"
                          type="submit"
                          className="w-full py-3 bg-slate-950 text-white rounded font-semibold text-xs tracking-wider uppercase hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer mt-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Generate Preformatted Mail & Open Client</span>
                        </button>

                        <span className="block text-center text-3xs font-mono text-slate-400 mt-1 uppercase select-none">
                          Sends directly to: mojtaba@mgp-consulting.de
                        </span>
                      </div>
                    )}
                  </form>
                ) : (
                  /* Profile Tab */
                  <form onSubmit={handleCvSubmit} className="space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-mono block border-b border-slate-50 pb-2 mb-4">
                        Download Freelance CV Snapshot & Profile Archive
                      </h4>

                      {cvSent ? (
                        /* Success Snapshot with Immediate Download override */
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1 }}
                          className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center space-y-4 py-8"
                        >
                          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                          <div>
                            <h5 className="text-base font-bold text-slate-905">
                              Download Stream Processed Successfully!
                            </h5>
                            <p className="text-xs text-slate-650 leading-relaxed mt-1 max-w-sm mx-auto">
                              Your formal technical summary (Text Profile compliant for parsing software architectures) has been compiled and downloaded securely.
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={handleImmediateDownload}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-mono text-2xs uppercase tracking-wide rounded-md inline-flex items-center space-x-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Resume Package Again</span>
                          </button>
                        </motion.div>
                      ) : (
                        /* Input form */
                        <div className="space-y-4 text-xs font-sans">
                          <p className="text-xs text-slate-600 leading-relaxed">
                            No registration is strictly required to contact me, but inputting your details compiles an extensive technical resume summarizing my complete system references and details instantly to your machine.
                          </p>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Your Work Email *</label>
                            <input
                              required
                              type="email"
                              value={cvEmail}
                              onChange={(e) => setCvEmail(e.target.value)}
                              placeholder="e.g. recruiter@it-brokers.de"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Staffing Agency / Enterprise Company</label>
                            <input
                              type="text"
                              value={cvCompany}
                              onChange={(e) => setCvCompany(e.target.value)}
                              placeholder="e.g. GULP / Hays / Siemens"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <button
                            id="btn-trigger-cv-down"
                            type="submit"
                            className="w-full py-3 bg-slate-950 text-white rounded font-semibold text-xs tracking-wider uppercase hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer mt-4"
                          >
                            <FileText className="w-4 h-4" />
                            <span>Request & Download TXT Profile snapshot</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Direct immediate download alternative link */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-2xs text-slate-400 select-none">
                      <span>Recruiter shortcut:</span>
                      <button
                        type="button"
                        onClick={handleImmediateDownload}
                        className="text-blue-600 hover:underline font-mono font-bold"
                      >
                        Download immediately (.txt raw profiling template) 💾
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic FAQ dropdown accordion matrix */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="font-mono text-3xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">
              Q&A CONSOLE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              Collaboration & Assignment FAQ
            </h3>
            <p className="text-xs text-slate-500 leading-normal mt-1.5">
              Clear corporate answers to frequent inquiries raised by staffing coordinators and compliance managers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {COLLABORATION_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-slate-200 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between font-sans font-bold text-sm text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-150 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
