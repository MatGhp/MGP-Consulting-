/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { FileText, X, Check, Download, ShieldCheck } from "lucide-react";
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
  };

  const triggerCvRequestSection = () => {
    setCvModalOpen(true);
  };

  // Immediate Profile Download Function
  const handleImmediateDownload = () => {
    const profileText = `======================================================================
MOJTABA GHANAAT PISHEH
FREELANCE SENIOR .NET & AZURE DEVELOPER
Capability Snapshot
======================================================================

CONTACT DETAILS:
----------------
Email: ${PERSONAL_INFO.email}
Phone/Direct: Request via email
Location: Frankfurt am Main, Germany
Availability: ${PERSONAL_INFO.availability.status} ${PERSONAL_INFO.availability.dateText}
Collaboration: Direct client, approved supplier onboarding, or professional agency framework

CORE POSITIONING:
-----------------
Freelance Senior .NET & Azure Developer for Enterprise Integration and Legacy Modernization.
Two decades of software engineering experience focused on business-critical enterprise delivery.

CORE FOCUS:
-----------
1. Legacy .NET modernization and maintainable backend services.
2. Reliable Azure integrations with APIs, Service Bus, and Functions.
3. Production-oriented delivery with CI/CD project experience.
4. Angular business applications and secure API integration.

SELECTED DELIVERY AREAS:
------------------------
* Enterprise supplier onboarding and integration platforms
* Azure integration services for business-critical workloads
* Energy sector cloud platform enhancements
* Angular business applications with real-time interfaces

======================================================================
This capability snapshot is provided for initial project discussions.
A current freelance profile is available upon request.
Please send project scope details to: mojtaba@mgp-consulting.de
MGP Consulting (c) 2026. Frankfurt, Germany
======================================================================
`;

    const blob = new Blob([profileText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Capability_Snapshot_Mojtaba_Ghanaat_Pisheh.txt");
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
      <Navbar onContactClick={triggerDirectInquiry} />

      <main className="relative">
        {/* Hero Section */}
        <Hero
          onContactClick={triggerDirectInquiry}
        />

        {/* Services Section */}
        <Services />

        {/* Value Addition Scenarios */}
        <ValueAdd />

        {/* Selected Project Experience */}
        <Experience />

        {/* Core Technologies focus */}
        <TechStack />

        {/* Availability details & direct contact */}
        <AvailabilityAndContact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Profile Request Modal */}
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
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Request Freelancer Profile</h4>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mt-0.5 font-mono">
                      Mojtaba Ghanaat-Pisheh • MGP Consulting
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setCvModalOpen(false)}
                  aria-label="Close profile request dialog"
                  title="Close"
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
                        Capability Snapshot Downloaded
                      </h5>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                        The file <strong>Capability_Snapshot_Mojtaba_Ghanaat_Pisheh.txt</strong> has been saved locally for initial review.
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
                        Discuss Project
                      </button>
                      <button
                        onClick={() => setDownloadSuccess(false)}
                        className="text-xs text-slate-450 hover:text-slate-700 hover:underline font-medium"
                      >
                        Request Freelancer Profile
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive compilation form */
                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Complete the fields below to request the current freelance profile.
                    </p>

                    <div className="space-y-3 text-xs">
                      <div className="space-y-1.5 animate-none">
                        <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Work Email *</label>
                        <input
                          required
                          type="email"
                          value={inputEmail}
                          onChange={(e) => setInputEmail(e.target.value)}
                          placeholder="e.g. hiring@enterprise-example.de"
                          className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-650 focus:outline-hidden text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Company / Organization</label>
                        <input
                          type="text"
                          value={inputCompany}
                          onChange={(e) => setInputCompany(e.target.value)}
                          placeholder="e.g. Enterprise Solutions GmbH"
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
                        Download Capability Snapshot (.txt)
                      </button>

                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-slate-950 text-white hover:bg-blue-601 rounded text-xs font-semibold uppercase tracking-wider font-mono flex items-center justify-center space-x-1.5 cursor-pointer ml-auto"
                      >
                        <Download className="w-4 h-4" />
                        <span>Request Freelancer Profile</span>
                      </button>
                    </div>
                  </form>
                )}

                {/* Secure information guarantee */}
                <div className="mt-4 p-3 bg-blue-50/50 border border-blue-105 rounded-lg flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-600 leading-normal font-sans">
                    <strong>Privacy Note:</strong> Contact details are used only to support project communication and profile requests.
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
