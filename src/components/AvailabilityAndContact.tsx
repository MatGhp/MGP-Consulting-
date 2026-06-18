/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from "react";
import { Mail, Linkedin, FileText, MapPin, Calendar, Globe, ChevronDown, Phone, Copy, Check } from "lucide-react";
import { PERSONAL_INFO, COLLABORATION_FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface AvailabilityAndContactProps {
  onCvRequestedSuccess?: () => void;
}

export default function AvailabilityAndContact({ onCvRequestedSuccess }: AvailabilityAndContactProps) {
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);

  const toggleFaq = (idx: number) => {
    if (openFaqIndices.includes(idx)) {
      setOpenFaqIndices(openFaqIndices.filter((i) => i !== idx));
    } else {
      setOpenFaqIndices([...openFaqIndices, idx]);
    }
  };

  const profileRequestMailto = useMemo(() => {
    const subject = encodeURIComponent("Freelancer Profile Request – .NET / Azure Project");
    const body = encodeURIComponent(
      "Hello Mojtaba,\n\nI would like to request your current freelance profile for a potential project opportunity.\n\nProject context:\nCompany:\nRole / focus:\nStart:\nDuration:\nRemote / onsite setup:\n\nBest regards,"
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  }, []);

  const showFeedback = (message: string) => {
    setFeedbackMessage(message);
    window.setTimeout(() => setFeedbackMessage(""), 2500);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      showFeedback("Email copied.");
    } catch {
      showFeedback("Could not copy email. Please copy manually.");
    }
  };

  const handleCopyPhone = async () => {
    if (!PERSONAL_INFO.phone) {
      showFeedback("Phone number is shared on request.");
      return;
    }

    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      showFeedback("Phone copied.");
    } catch {
      showFeedback("Could not copy phone. Please copy manually.");
    }
  };

  const handleRequestFreelancerProfile = () => {
    if (onCvRequestedSuccess) {
      onCvRequestedSuccess();
    }
    window.location.href = profileRequestMailto;
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
            Available for remote-first enterprise assignments across Germany and the EU. For project inquiries, profile requests, or supplier onboarding, please contact me directly.
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
                <span className="font-mono text-3xs font-bold text-slate-400 uppercase tracking-widest block">Collaboration Note</span>
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
                    <span>Supports direct client collaboration and approved supplier onboarding</span>
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
                aria-label="Email Mojtaba"
                className="flex items-center space-x-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 rounded-lg text-sm font-semibold w-full justify-center transition-colors"
              >
                <Mail className="w-4 h-4 fill-blue-100" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex items-center space-x-2 px-4 py-3 bg-slate-50 hover:bg-slate-150 border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold w-full justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-900">Direct Contact</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Quick contact details for recruiters, enterprise teams, and technical decision makers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <span className="text-xs text-slate-500">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-sm font-medium text-slate-900 mt-1 break-all" aria-label="Email address">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <span className="text-xs text-slate-500">Phone</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="block text-sm font-medium text-slate-900 mt-1" aria-label="Phone number">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <span className="text-xs text-slate-500">LinkedIn</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="block text-sm font-medium text-slate-900 mt-1" aria-label="Open LinkedIn profile">
                    LinkedIn Profile
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <span className="text-xs text-slate-500">GitHub</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="block text-sm font-medium text-slate-900 mt-1" aria-label="Open GitHub profile">
                    GitHub Profile
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <span className="text-xs text-slate-500">Location</span>
                  <span className="block text-sm font-medium text-slate-900 mt-1">{PERSONAL_INFO.locationShort}</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <span className="text-xs text-slate-500">Availability</span>
                  <span className="block text-sm font-medium text-slate-900 mt-1">{PERSONAL_INFO.availability.status} — {PERSONAL_INFO.availability.dateText}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email me"
                  className="px-5 py-2.5 bg-slate-950 text-white hover:bg-blue-600 rounded-md text-sm font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <button
                  type="button"
                  onClick={handleRequestFreelancerProfile}
                  aria-label="Request freelancer profile by email"
                  className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-md text-sm font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>Request Freelancer Profile</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="px-4 py-2.5 bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-150 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="px-4 py-2.5 bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-150 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Copy Phone</span>
                </button>
              </div>

              {feedbackMessage && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800 flex items-center space-x-2" role="status" aria-live="polite">
                  <Check className="w-4 h-4" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg flex items-start space-x-2.5">
                <Globe className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Project Onboarding:</strong> Available for remote-first enterprise assignments with structured onboarding, NDA-ready communication, and professional freelance collaboration.
                </p>
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
