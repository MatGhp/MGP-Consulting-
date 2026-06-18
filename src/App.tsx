/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ValueAdd from "./components/ValueAdd";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import AvailabilityAndContact from "./components/AvailabilityAndContact";
import Footer from "./components/Footer";
import { useI18n } from "./i18n";

export default function App() {
  const { locale, content } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.seo.home.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", content.seo.home.description);
    }
  }, [locale, content.seo.home.title, content.seo.home.description]);

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
    </div>
  );
}
