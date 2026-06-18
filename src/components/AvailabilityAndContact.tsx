/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Linkedin, FileText, CheckCircle, MapPin, Calendar, Globe, ChevronDown, Send, Download } from "lucide-react";
import { PERSONAL_INFO, COLLABORATION_FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface AvailabilityAndContactProps {
  onCvRequestedSuccess?: () => void;
}

export default function AvailabilityAndContact({ onCvRequestedSuccess }: AvailabilityAndContactProps) {
  const [activeTab, setActiveTab] = useState<"inquiry" | "cv">("inquiry");

  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryCompany, setInquiryCompany] = useState("");
  const [inquiryType, setInquiryType] = useState("Legacy .NET modernization");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [inquirySent, setInquirySent] = useState(false);

  const [profileEmail, setProfileEmail] = useState("");
  const [profileCompany, setProfileCompany] = useState("");
  const [profileSent, setProfileSent] = useState(false);

  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);

  const toggleFaq = (idx: number) => {
    if (openFaqIndices.includes(idx)) {
      setOpenFaqIndices(openFaqIndices.filter((i) => i !== idx));
    } else {
      setOpenFaqIndices([...openFaqIndices, idx]);
    }
  };

  const handleCapabilitySnapshotDownload = () => {
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

POSITIONING:
------------
Freelance Senior .NET & Azure Developer for Enterprise Integration and Legacy Modernization.
Two decades of software engineering experience focused on enterprise delivery.

CORE FOCUS:
-----------
- Legacy .NET modernization
- Reliable Azure integrations
- Maintainable backend services
- Production-oriented delivery
- Angular business applications

NOTE:
-----
This capability snapshot is intended for initial project evaluation.
A current freelance profile is available upon request for client submission and supplier onboarding.

======================================================================
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
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) {
      alert("Please enter your name, work email, and project scope.");
      return;
    }

    const emailSubject = encodeURIComponent(`[Project Discussion] ${inquiryType}`);
    const emailBody = encodeURIComponent(
      `Hello Mojtaba,\n\nI would like to discuss a project.\n\nName: ${inquiryName}\nCompany: ${inquiryCompany}\nEmail: ${inquiryEmail}\nFocus: ${inquiryType}\n\nProject scope:\n-------------------------------\n${inquiryMessage}\n\n-------------------------------\nSent from mgp-consulting.de`
    );

    setInquirySent(true);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileEmail) return;

    setProfileSent(true);
    if (onCvRequestedSuccess) {
      onCvRequestedSuccess();
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            Availability & Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Start a Project Discussion</h2>
          <p className="mt-4 text-base text-slate-600">
            Available for remote-first enterprise assignments across Germany and the EU. Supported collaboration models include
            direct client engagement, approved supplier onboarding, and professional agency frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 font-sans">Project Onboarding</h3>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">
                      Availability
                    </span>
                    <span className="text-slate-800 font-bold block">{PERSONAL_INFO.availability.status} — {PERSONAL_INFO.availability.dateText}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">Location</span>
                    <span className="text-slate-700 font-normal">{PERSONAL_INFO.locationShort}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">Collaboration Scope</span>
                    <span className="text-slate-700 font-normal block font-sans">Remote-first across Germany and the EU</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5">
                <span className="font-mono text-3xs font-bold text-slate-400 uppercase tracking-widest block">Agency & Client Note</span>
                <ul className="space-y-2 text-xs text-slate-650">
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>Independent freelance consultant based in Germany</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>NDA-ready communication and structured project onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>Supports direct clients, approved supplier channels, and professional agency frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 font-bold mr-2">✓</span>
                    <span>Optional on-site workshops and kickoff alignment where needed</span>
                  </li>
                </ul>
              </div>
            </div>

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

          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
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
                  Discuss Project
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
                  Request Freelancer Profile
                </button>
              </div>

              <div className="p-6 bg-white sm:p-8 min-h-[420px]">
                {activeTab === "inquiry" ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-mono block border-b border-slate-50 pb-2 mb-4">Start a Project Discussion</h4>

                    {inquirySent ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center space-y-4 py-12"
                      >
                        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                        <div className="space-y-1">
                          <h5 className="text-base font-bold text-slate-900">Project Discussion Prepared</h5>
                          <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">Your email client has been opened with prefilled project details for quick review and sending.</p>
                        </div>
                        <div className="bg-white border border-emerald-250 p-3 rounded text-[11px] font-mono text-slate-700 select-all max-w-sm mx-auto">
                          Send to: <strong>{PERSONAL_INFO.email}</strong>
                        </div>
                        <button type="button" onClick={() => setInquirySent(false)} className="text-xs font-semibold text-blue-600 hover:underline">
                          Edit and send another request
                        </button>
                      </motion.div>
                    ) : (
                      <div className="space-y-4 text-xs font-sans">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5 animate-none">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Name *</label>
                            <input
                              required
                              type="text"
                              value={inquiryName}
                              onChange={(e) => setInquiryName(e.target.value)}
                              placeholder="e.g. Martina Becker"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Work Email *</label>
                            <input
                              required
                              type="email"
                              value={inquiryEmail}
                              onChange={(e) => setInquiryEmail(e.target.value)}
                              placeholder="e.g. team@enterprise-example.de"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Company / Organization</label>
                            <input
                              type="text"
                              value={inquiryCompany}
                              onChange={(e) => setInquiryCompany(e.target.value)}
                              placeholder="e.g. Enterprise Solutions GmbH"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Project Focus</label>
                            <select
                              title="Project Focus"
                              value={inquiryType}
                              onChange={(e) => setInquiryType(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            >
                              <option>Legacy .NET modernization</option>
                              <option>Azure integration and API platform delivery</option>
                              <option>Angular business application modernization</option>
                              <option>CI/CD and release reliability improvements</option>
                              <option>Senior technical consulting</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-semibold text-slate-700 font-mono block uppercase text-[10px]">Project Scope *</label>
                          <textarea
                            required
                            rows={4}
                            value={inquiryMessage}
                            onChange={(e) => setInquiryMessage(e.target.value)}
                            placeholder="Please describe your current system landscape, project scope, timeline, and key delivery expectations."
                            className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm leading-relaxed"
                          />
                        </div>

                        <button
                          id="btn-submit-inquiry"
                          type="submit"
                          className="w-full py-3 bg-slate-950 text-white rounded font-semibold text-xs tracking-wider uppercase hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer mt-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Discuss Project</span>
                        </button>

                        <span className="block text-center text-3xs font-mono text-slate-400 mt-1 uppercase select-none">Sends directly to: mojtaba@mgp-consulting.de</span>
                      </div>
                    )}
                  </form>
                ) : (
                  <form onSubmit={handleProfileSubmit} className="space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-mono block border-b border-slate-50 pb-2 mb-4">Request Freelancer Profile</h4>

                      {profileSent ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1 }}
                          className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center space-y-4 py-8"
                        >
                          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                          <div>
                            <h5 className="text-base font-bold text-slate-905">Profile Request Received</h5>
                            <p className="text-xs text-slate-650 leading-relaxed mt-1 max-w-sm mx-auto">Thank you. Your request has been received.</p>
                          </div>

                          <button
                            type="button"
                            onClick={handleCapabilitySnapshotDownload}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-mono text-2xs uppercase tracking-wide rounded-md inline-flex items-center space-x-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Capability Snapshot</span>
                          </button>
                        </motion.div>
                      ) : (
                        <div className="space-y-4 text-xs font-sans">
                          <p className="text-xs text-slate-600 leading-relaxed">A current freelance profile is available upon request for project evaluation, client submission, and supplier onboarding. It includes relevant project experience, technology focus, availability, and collaboration details.</p>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Work Email *</label>
                            <input
                              required
                              type="email"
                              value={profileEmail}
                              onChange={(e) => setProfileEmail(e.target.value)}
                              placeholder="e.g. hiring@enterprise-example.de"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-semibold text-slate-705 font-mono block uppercase text-[10px]">Company / Organization</label>
                            <input
                              type="text"
                              value={profileCompany}
                              onChange={(e) => setProfileCompany(e.target.value)}
                              placeholder="e.g. Enterprise Solutions GmbH"
                              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-hidden text-sm"
                            />
                          </div>

                          <button
                            id="btn-trigger-cv-down"
                            type="submit"
                            className="w-full py-3 bg-slate-950 text-white rounded font-semibold text-xs tracking-wider uppercase hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 cursor-pointer mt-4"
                          >
                            <FileText className="w-4 h-4" />
                            <span>Request Freelancer Profile</span>
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-2xs text-slate-400 select-none">
                      <span>Optional:</span>
                      <button type="button" onClick={handleCapabilitySnapshotDownload} className="text-blue-600 hover:underline font-mono font-bold">
                        Download Capability Snapshot
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="font-mono text-3xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">FAQ</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Collaboration FAQ</h3>
            <p className="text-xs text-slate-500 leading-normal mt-1.5">Practical answers for project onboarding, confidentiality, availability, and profile requests.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {COLLABORATION_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div key={idx} className="bg-slate-50 hover:bg-slate-100/50 border border-slate-200 rounded-lg overflow-hidden transition-all">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between font-sans font-bold text-sm text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
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
                        <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-150 bg-white">{faq.a}</div>
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
