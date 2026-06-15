/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, FileText, Mail, CheckCircle2, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  onContactClick: () => void;
  onCvRequestClick: () => void;
}

export default function Navbar({ onContactClick, onCvRequestClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Value Add", href: "#value-add" },
    { name: "Selected Experience", href: "#experience" },
    { name: "Tech Matrix", href: "#tech-matrix" },
    { name: "Contact", href: "#contact" },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex flex-col group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                MGP
              </span>
              <span className="font-sans text-lg font-semibold text-slate-900 tracking-tight">
                Consulting
              </span>
            </div>
            <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest leading-none mt-0.5">
              .NET & Azure Integration
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50/50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Availability Status & Main CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                {PERSONAL_INFO.availability.status} {PERSONAL_INFO.availability.dateText}
              </span>
            </div>

            <button
              id="nav-cta-cv-req"
              onClick={onCvRequestClick}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 border border-slate-300 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Request CV</span>
            </button>

            <button
              id="nav-cta-contact"
              onClick={onContactClick}
              className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors shadow-xs"
            >
              Project Request
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] font-semibold text-emerald-800 uppercase tracking-wide">
                Available
              </span>
            </div>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-slate-900 focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <div className="py-2 border-b border-slate-100">
                <span className="text-xs font-mono text-slate-400 block mb-1">OFFICE LOCATION</span>
                <span className="text-sm text-slate-700 flex items-center">
                  <MapPin className="w-4 h-4 text-blue-600 mr-1.5 flex-shrink-0" />
                  {PERSONAL_INFO.locationShort}
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2.5">
                <button
                  id="mobile-cta-cv"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onCvRequestClick();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-2.5 border border-slate-300 text-slate-700 rounded-md font-medium text-sm hover:bg-slate-50"
                >
                  <FileText className="w-4.5 h-4.5 text-slate-500" />
                  <span>Request Full CV / Profile</span>
                </button>

                <button
                  id="mobile-cta-inquiry"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-2.5 bg-slate-900 text-white rounded-md font-medium text-sm hover:bg-blue-600"
                >
                  <Mail className="w-4.5 h-4.5" />
                  <span>Send Project Inquiry</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
