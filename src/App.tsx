/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { FileText, X, Mail, Check, Linkedin, Download, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ValueAdd from "./components/ValueAdd";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import AvailabilityAndContact from "./components/AvailabilityAndContact";
import Footer from "./components/Footer";
import { PERSONAL_INFO } from "./data";

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputCompany, setInputCompany] = useState("");

  const handleScrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const triggerDirectInquiry = () => {
    handleScrollToSection("#contact");
    // If we want to set active tab as inquiry
    const tabInquiry = document.getElementById("tab-btn-inquiry");
    if (tabInquiry) {
      tabInquiry.click();
    }
  };

  const triggerCvRequestSection = () => {
    setCvModalOpen(true);
  };

  // Immediate Profile Download Function
  const handleImmediateDownload = () => {
    const profileText = `======================================================================
MOJTABA GHANAAT PISHEH
SENIOR .NET / AZURE INTEGRATION DEVELOPER
Official Freelance Profile & Contract Specifications
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
Senior Freelance Developer with 15+ years of software development experience specializing in .NET, Azure integration, cloud-native backend services, CI/CD, and Angular business applications.

SUMMARY OF MASTERY MATRIX:
-------------------------
1. .NET Ecosystem: C#, ASP.NET Core Web API, EF Core, Clean Architecture, test automation.
2. Azure Cloud Platforms: Azure Functions, Azure Service Bus, Logic Apps, Key Vault, API Management, Application Insights, Azure SQL.
3. DevOps Operations: Pipelines YAML (Azure DevOps / GitHub actions), Infrastructure as Code (Bicep/Terraform), Docker.
4. Frontend: Angular, TypeScript, RxJS, Nx, Angular Material / Kendo UI.

SELECTED EXPERIENCE SUMMARY:
---------------------------
* Project: Enterprise Supplier Portal & Onboarding Platform
  Role: Freelance Senior Full-Stack / Integration Developer
  Implemented and extended onboarding and integration workflows using .NET, ASP.NET Core, Angular, TypeScript, Azure Service Bus, and Docker. Supported production setups and CI/CD releases.
  
* Project: Azure Cloud-Native Integration Platform
  Role: Lead Technical Consultant / Azure Integration Developer
  Designed and implemented Azure-based integration components, securing credentials via Key Vault, routing with Service Bus, and automating workflows.

* Project: Smart Energy Cloud Platform
  Role: Senior Full-Stack / Cloud Developer
  Developed backend features and Angular business structures, working with API management, Keycloak authentication, monitoring telemetry, and Cloud deployments.

* Project: Enterprise Angular Applications & Real-Time Interfaces
  Role: Senior Angular / Full-Stack Developer
  Modernized Angular frontend interfaces, integrating real-time server interfaces and complex workflows.

======================================================================
This document is prepared as a standard resume snapshot. Please forward direct project scopes to: mojtaba@mgp-consulting.de
MGP Consulting (c) 2026. Frankfurt, Germany
======================================================================
`;

    const blob = new Blob([profileText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Freelance_Profile_Mojtaba_Ghanaat_Pisheh.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleImmediateDownload();
  };

  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-blue-100 select-auto">
      {/* Navigation Header */}
      <Navbar
        onContactClick={triggerDirectInquiry}
        onCvRequestClick={triggerCvRequestSection}
      />

      <main className="relative">
        {/* Hero Section */}
        <Hero
          onContactClick={triggerDirectInquiry}
          onCvRequestClick={triggerCvRequestSection}
        />

        {/* Services Section */}
        <Services />

        {/* Value Addition Scenarios */}
        <ValueAdd />

        {/* Deliveries Logbook */}
        <Experience />

        {/* Core Technologies focus */}
        <TechStack />

        {/* Availability details & direct contact */}
        <AvailabilityAndContact
          onCvRequestedSuccess={() => {
            // Optional callback
          }}
        />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* High-End Custom CV Request Modal */}
      <AnimatePresence>
        {cvModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCvModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      Enterprise Core profile request
                    </h4>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mt-0.5 font-mono">
                      Mojtaba Ghanaat-Pisheh • MGP Consulting
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-5">
                {downloadSuccess ? (
                  /* Success Notice */
                  <div className="text-center space-y-4 py-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center mx-auto text-emerald-600">
                      <Check className="w-6 h-6 stroke-[3px]" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-md font-bold text-slate-900">
                        Profile Snap Downloaded Successfully!
                      </h5>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                        The structured profile <strong>Freelance_Profile_Mojtaba_Ghanaat_Pisheh.txt</strong> has been dispatched to your files directory. It serves as an immediate offline database of skills, certs, and project descriptions.
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 pt-2">
                      <button
                        onClick={() => {
                          setCvModalOpen(false);
                          triggerDirectInquiry();
                        }}
                        className="px-4 py-2 bg-slate-950 text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-blue-600 transition-colors"
                      >
                        Send project inquiry
                      </button>
                      <button
                        onClick={() => setDownloadSuccess(false)}
                        className="text-xs text-slate-450 hover:text-slate-700 hover:underline font-medium"
                      >
                        Request again
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive compilation form */
                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Complete your coordinates below to instantaneously compile and download Mojtaba's comprehensive technical summary resume sheet directly to your local file path.
                    </p>

                    <div className="space-y-3 text-xs">
                      <div className="space-y-1.5 animate-none">
                        <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Your Corporate Email *</label>
                        <input
                          required
                          type="email"
                          value={inputEmail}
                          onChange={(e) => setInputEmail(e.target.value)}
                          placeholder="e.g. broker@gulp-recruitment.de"
                          className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-650 focus:outline-hidden text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Staffing Agency / Enterprise Partner</label>
                        <input
                          type="text"
                          value={inputCompany}
                          onChange={(e) => setInputCompany(e.target.value)}
                          placeholder="e.g. Hays AG / freelance-partner.com"
                          className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-650 focus:outline-hidden text-sm"
                        />
                      </div>
                    </div>

                    {/* Action Panel */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Immediate download link */}
                      <button
                        type="button"
                        onClick={handleImmediateDownload}
                        className="text-3xs text-blue-600 hover:underline font-mono text-left"
                      >
                        Or bypass details & download immediately (.txt)
                      </button>

                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-slate-950 text-white hover:bg-blue-601 rounded text-xs font-semibold uppercase tracking-wider font-mono flex items-center justify-center space-x-1.5 cursor-pointer ml-auto"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download profile snap</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* Secure information guarantee */}
                <div className="mt-4 p-3 bg-blue-50/50 border border-blue-105 rounded-lg flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-600 leading-normal font-sans">
                    <strong>GDPR Statement:</strong> No cookie profiles, data tracking, or newsletter subscriptions are registered. Your details are treated with immediate operational priority and confidentiality.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
