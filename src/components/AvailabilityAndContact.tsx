/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Calendar, Globe, ChevronDown, Phone, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { interpolate, useI18n } from "../i18n";
import { getAvailabilityMonthYear, getAvailabilitySentence } from "../utils/availability";

export default function AvailabilityAndContact() {
  const { locale, content, t } = useI18n();
  const personalInfo = content.data.personalInfo;
  const faqs = content.data.collaborationFaqs;
  const availabilityDateText = `${t("ui.availability.fromPrefix")} ${getAvailabilityMonthYear(locale)}`;
  const availabilitySentenceLower = getAvailabilitySentence(
    locale,
    content.ui.availability.sentenceTemplate
  ).toLocaleLowerCase(locale === "de" ? "de-DE" : "en-US");

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
      await navigator.clipboard.writeText(personalInfo.email);
      showCopyFeedback("email", t("ui.contact.copyEmailSuccess"));
    } catch {
      showCopyFeedback("email", t("ui.contact.copyFailed"));
    }
  };

  const handleCopyPhone = async () => {
    if (!personalInfo.phone) {
      showCopyFeedback("phone", t("ui.contact.phoneUnavailable"));
      return;
    }
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      showCopyFeedback("phone", t("ui.contact.copyPhoneSuccess"));
    } catch {
      showCopyFeedback("phone", t("ui.contact.copyFailed"));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            {t("ui.contact.eyebrow")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t("ui.contact.title")}</h2>
          <p className="mt-4 text-base text-slate-600">
            {t("ui.contact.intro")}
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-slate-50/70 p-6 sm:p-8 border-b border-slate-200 lg:border-b-0 lg:border-r">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-sans">{t("ui.contact.availabilityCardTitle")}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t("ui.contact.availabilityCardIntro")}
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">
                        {t("ui.contact.availabilityLabel")}
                      </span>
                      <span className="text-slate-800 font-bold block">{personalInfo.availability.status} — {availabilityDateText}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">{t("ui.contact.locationLabel")}</span>
                      <span className="text-slate-700 font-normal">{personalInfo.locationShort}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-3xs font-bold text-slate-400 block uppercase tracking-wider">{t("ui.contact.remoteSetupLabel")}</span>
                      <span className="text-slate-700 font-normal">{personalInfo.availability.remotePreference}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">{t("ui.contact.directContactTitle")}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t("ui.contact.directContactIntro")}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs text-slate-500 block">{t("ui.contact.emailLabel")}</span>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="mt-1 inline-flex items-center gap-1.5 text-left text-sm font-medium text-slate-900 break-all transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm cursor-pointer"
                          aria-label={t("ui.contact.copyEmailAria", { email: personalInfo.email })}
                        >
                          <span>{personalInfo.email}</span>
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
                        <span className="text-xs text-slate-500 block">{t("ui.contact.phoneLabel")}</span>
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          className="mt-1 inline-flex items-center gap-1.5 text-left text-sm font-medium text-slate-900 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm cursor-pointer"
                          aria-label={t("ui.contact.copyPhoneAria", { phone: personalInfo.phoneFormatted })}
                        >
                          <span>{personalInfo.phoneFormatted}</span>
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
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-50 border border-slate-200 rounded-lg p-4 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                    aria-label={t("ui.contact.linkedinAria")}
                  >
                    <div className="flex items-start gap-3">
                      <Linkedin className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs text-slate-500 block">{t("ui.contact.linkedinLabel")}</span>
                        <span className="mt-1 block text-sm font-medium text-slate-900">{t("ui.contact.linkedinValue")}</span>
                      </div>
                    </div>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-50 border border-slate-200 rounded-lg p-4 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                    aria-label={t("ui.contact.githubAria")}
                  >
                    <div className="flex items-start gap-3">
                      <Github className="w-4.5 h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs text-slate-500 block">{t("ui.contact.githubLabel")}</span>
                        <span className="mt-1 block text-sm font-medium text-slate-900">{t("ui.contact.githubValue")}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-12">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="font-mono text-3xs font-semibold text-blue-600 uppercase tracking-widest block mb-1">{t("ui.contact.faqEyebrow")}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">{t("ui.contact.faqTitle")}</h3>
            <p className="text-xs text-slate-500 leading-normal mt-1.5">{t("ui.contact.faqIntro")}</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
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
                        <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-150 bg-white">
                          {interpolate(faq.a, {
                            availabilitySentenceLowercase: availabilitySentenceLower,
                            availabilitySentenceLower: availabilitySentenceLower
                          })}
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
