/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { m, AnimatePresence } from "motion/react";
import { getAvailabilityBadgeText } from "../utils/availability";
import { useI18n } from "../i18n";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const { locale, setLocale, content, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const personalInfo = content.data.personalInfo;

  const navLinks = content.ui.navbar.navLinks;
  const availabilityBadgeText = getAvailabilityBadgeText(locale, content.ui.availability.badgeTemplate);
  const availabilityBadgeTextShort = getAvailabilityBadgeText(locale, content.ui.availability.badgeTemplateShort);

  const languageSwitcher = (
    <div
      className="inline-flex items-center rounded-md border border-white/15 bg-white/5 overflow-hidden"
      role="group"
      aria-label={t("ui.navbar.languageSwitcherAria")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en" ? "true" : "false"}
        className={`px-2.5 py-1.5 text-xs font-mono font-semibold transition-colors ${
          locale === "en" ? "bg-white text-slate-900" : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        {t("ui.navbar.languageOptionEn")}
      </button>
      <button
        type="button"
        onClick={() => setLocale("de")}
        aria-pressed={locale === "de" ? "true" : "false"}
        className={`px-2.5 py-1.5 text-xs font-mono font-semibold transition-colors ${
          locale === "de" ? "bg-white text-slate-900" : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        {t("ui.navbar.languageOptionDe")}
      </button>
    </div>
  );

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-50 py-3 bg-slate-950/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex flex-col group min-w-0"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-sans text-lg font-semibold text-white tracking-tight leading-tight">
              {personalInfo.companyName}
            </span>
            <span className="font-mono text-3xs text-slate-400 uppercase tracking-widest leading-none mt-0.5 truncate">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Availability Status & Main CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {languageSwitcher}
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                {availabilityBadgeText}
              </span>
            </div>

            <button
              id="nav-cta-contact"
              onClick={onContactClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-xs"
            >
              {t("ui.navbar.contactCta")}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2 shrink-0">
            {languageSwitcher}
            {/* Below `sm` the availability is already visible in the hero, so the badge is hidden to keep the menu button on screen. */}
            <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-3xs font-semibold text-emerald-300 uppercase tracking-wide whitespace-nowrap">
                {availabilityBadgeTextShort}
              </span>
            </div>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white focus:outline-hidden"
              aria-label={t("ui.navbar.toggleMenuAria")}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-slate-950 border-b border-white/10 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <div className="py-2 border-b border-white/10">
                <span className="text-xs font-mono text-slate-400 block mb-1">{t("ui.navbar.officeLocationLabel").toUpperCase()}</span>
                <span className="text-sm text-slate-200 flex items-center">
                  <MapPin className="w-4 h-4 text-blue-400 mr-1.5 flex-shrink-0" />
                  {personalInfo.locationShort}
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-2.5">
                <button
                  id="mobile-cta-inquiry"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-2.5 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700"
                >
                  <Mail className="w-4.5 h-4.5" />
                  <span>{t("ui.navbar.contactCta")}</span>
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
