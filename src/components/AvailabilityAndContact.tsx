/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Mail, Linkedin, Github, FileText, MapPin, Calendar, Globe, ChevronDown, Phone, Copy } from "lucide-react";
import { PERSONAL_INFO, COLLABORATION_FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface AvailabilityAndContactProps {
  onCvRequestedSuccess?: () => void;
}

export default function AvailabilityAndContact({ onCvRequestedSuccess }: AvailabilityAndContactProps) {
  const [copyFeedback, setCopyFeedback] = useState<{ email: string | null; phone: string | null }>({
    email: null,
    phone: null
  });
  const feedbackTimers = useRef<{ email?: number; phone?: number }>({});

  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);

  useEffect(() => {
    return () => {
      Object.values(feedbackTimers.current).forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

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

  const showCopyFeedback = (field: "email" | "phone", message: string) => {
    const existingTimer = feedbackTimers.current[field];
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }

    setCopyFeedback((current) => ({ ...current, [field]: message }));

    feedbackTimers.current[field] = window.setTimeout(() => {
      setCopyFeedback((current) => ({ ...current, [field]: null }));
    }, 1800);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      showCopyFeedback("email", "Email copied");
    } catch {
      showCopyFeedback("email", "Copy failed");
    }
  };

  const handleCopyPhone = async () => {
    if (!PERSONAL_INFO.phone) {
      showCopyFeedback("phone", "Phone unavailable");
      return;
    }
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      showCopyFeedback("phone", "Phone copied");
    } catch {
      showCopyFeedback("phone", "Copy failed");
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
            Available for remote-first enterprise assignments across Germany and the EU. For project inquiries, freelance profile requests, or supplier onboarding, please contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 font-sans">Project setup</h3>

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
                    <span>NDA-friendly communication and structured project setup</span>
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


          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-900">Direct Contact</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Direct contact details for enterprise project inquiries, freelance profile requests, and technical discussions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-slate-500 block">Email</span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="mt-1 inline-flex items-center gap-1.5 text-left text-sm font-medium text-slate-900 break-all transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm cursor-pointer"
                        aria-label={`Copy email address ${PERSONAL_INFO.email}`}
                      >
                        <span>{PERSONAL_INFO.email}</span>
                        <Copy className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      </button>
                      {copyFeedback.email && (
                        <div className="mt-1 text-xs text-slate-500" role="status" aria-live="polite">
                          {copyFeedback.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-slate-500 block">Phone</span>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="mt-1 inline-flex items-center gap-1.5 text-left text-sm font-medium text-slate-900 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm cursor-pointer"
                        aria-label={`Copy phone number ${PERSONAL_INFO.phoneFormatted}`}
                      >
                        <span>{PERSONAL_INFO.phoneFormatted}</span>
                        <Copy className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      </button>
                      {copyFeedback.phone && (
                        <div className="mt-1 text-xs text-slate-500" role="status" aria-live="polite">
                          {copyFeedback.phone}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                  aria-label="Open LinkedIn profile in a new tab"
                >
                  <div className="flex items-start gap-3">
                    <Linkedin className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-slate-500 block">LinkedIn</span>
                      <span className="mt-1 block text-sm font-medium text-slate-900">LinkedIn Profile</span>
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                  aria-label="Open GitHub profile in a new tab"
                >
                  <div className="flex items-start gap-3">
                    <Github className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-slate-500 block">GitHub</span>
                      <span className="mt-1 block text-sm font-medium text-slate-900">GitHub Profile</span>
                    </div>
                  </div>
                </a>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-500 block">Location</span>
                      <span className="mt-1 block text-sm font-medium text-slate-900">{PERSONAL_INFO.locationShort}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-500 block">Availability</span>
                      <span className="mt-1 block text-sm font-medium text-slate-900">
                        {PERSONAL_INFO.availability.status} — {PERSONAL_INFO.availability.dateText}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex flex-col sm:flex-row gap-3">
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
                </div>

              </div>

              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                NDA-ready communication and structured onboarding for enterprise assignments.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="font-mono text-3xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">FAQ</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Collaboration FAQ</h3>
            <p className="text-xs text-slate-500 leading-normal mt-1.5">Practical answers about setup, confidentiality, availability, and profile requests.</p>
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
