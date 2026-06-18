/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Search, Mail, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data";
import { getAvailabilityShortMonthYear } from "../utils/availability";

interface HeroProps {
  onContactClick: () => void;
  onCvRequestClick: () => void;
}

export default function Hero({ onContactClick, onCvRequestClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const kpis = [
    { value: "20+", label: "Years Exp." },
    { value: "C1 / C1", label: "DE & EN Fluency" },
    { value: "Remote", label: "Germany & EU" },
    { value: getAvailabilityShortMonthYear(), label: "Available From" },
  ];

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden grid-bg border-b border-slate-100"
    >
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-radial from-blue-50/40 via-transparent to-transparent pointer-events-none rounded-full" />
      <div className="absolute -bottom-12 left-10 w-80 h-80 bg-blue-50/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Identity Capsule */}
            <motion.div
              variants={itemVariants}
              className="inline-flex self-start items-center space-x-2 bg-slate-100 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-2xs"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Independent Senior Consultant
              </span>
            </motion.div>

            {/* Main Headlines */}
            <div className="space-y-3">
              <motion.span
                variants={itemVariants}
                className="block text-sm font-mono font-semibold text-blue-600 uppercase tracking-widest"
              >
                {PERSONAL_INFO.name}
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-[2.85rem] font-bold text-slate-900 tracking-tight leading-tight"
              >
                {PERSONAL_INFO.headline}
              </motion.h1>
            </div>

            {/* Value Proposition Subhead */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.subheadline}
            </motion.p>

            {/* Trust Facts Grid List */}
            <motion.div
              variants={itemVariants}
              className="py-3 border-y border-slate-200 text-sm text-slate-700 space-y-2.5 font-medium"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {PERSONAL_INFO.trustFacts.map((fact, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-slate-650 text-xs sm:text-sm font-medium">{fact}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Action Callouts */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <button
                id="btn-hero-contact"
                onClick={onContactClick}
                className="px-6 py-3 bg-slate-950 text-white rounded-md font-semibold text-sm hover:bg-blue-600 transition-colors shadow-sm text-center flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Discuss Project</span>
              </button>

              <button
                id="btn-hero-cv-req"
                onClick={onCvRequestClick}
                className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-md font-semibold text-sm hover:bg-slate-50 transition-colors text-center flex items-center justify-center space-x-2 ml-0 sm:ml-1 shrink-0"
              >
                <FileText className="w-4.5 h-4.5 text-slate-500" />
                <span>Request Freelancer Profile</span>
              </button>
            </motion.div>

          </div>

          {/* Hero Right Visuals: Developer Credentials Board */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* The Floating Code/Metrics Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200 shadow-lg rounded-xl overflow-hidden p-6 hover:shadow-xl transition-shadow"
            >
              {/* Fake window controls */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 bg-rose-400 rounded-full inline-block" />
                  <span className="w-3 h-3 bg-amber-400 rounded-full inline-block" />
                  <span className="w-3 h-3 bg-emerald-400 rounded-full inline-block" />
                </div>
                <div className="font-mono text-2xs text-slate-400 select-none flex items-center space-x-1">
                  <Terminal className="w-3 h-3 text-slate-300" />
                  <span>Profile</span>
                </div>
              </div>

              {/* Enterprise Profile Highlight Info */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core capabilities</h3>
                  <p className="font-sans text-xl font-bold text-slate-900 leading-snug">
                    Reliable Azure integrations and legacy .NET modernization
                  </p>
                </div>

                {/* Hero trust indicators */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-150 p-3 rounded-lg flex flex-col justify-between"
                    >
                      <span className="text-2xl font-bold text-blue-600 font-mono tracking-tight">
                        {kpi.value}
                      </span>
                      <span className="text-3xs tracking-wide uppercase font-mono font-bold text-slate-400 mt-1">
                        {kpi.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bullet Proof Commitments */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-3xs font-mono uppercase tracking-wider text-slate-400 block">What I help with</span>
                  <ul className="space-y-2 text-xs text-slate-650">
                    <li className="flex items-start">
                      <span className="text-emerald-500 font-bold mr-2">✓</span>
                      <span>Secure API integration and robust credential handling with modern Azure services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 font-bold mr-2">✓</span>
                      <span>Reliable Azure Service Bus integration patterns for enterprise workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 font-bold mr-2">✓</span>
                      <span>Maintainable Angular business applications aligned with backend API delivery</span>
                    </li>
                  </ul>
                </div>

                {/* German freelance statement */}
                <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg flex items-start space-x-2.5">
                  <Search className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-2xs text-slate-600 leading-relaxed">
                    <strong>Project setup:</strong> Available for remote-first assignments with structured onboarding and NDA-friendly communication.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
