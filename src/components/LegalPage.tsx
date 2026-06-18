import React from "react";
import { PERSONAL_INFO } from "../data";

interface LegalPageProps {
  type: "impressum" | "datenschutz";
}

export default function LegalPage({ type }: LegalPageProps) {
  if (type === "impressum") {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Impressum</h1>
              <p className="text-sm text-slate-600 mt-2">Angaben gemäß § 5 TMG</p>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>Name:</strong> {PERSONAL_INFO.name}</p>
              <p><strong>Business Label:</strong> MGP Consulting</p>
              <p><strong>Location:</strong> Frankfurt am Main, Germany</p>
              <p><strong>Email:</strong> {PERSONAL_INFO.email}</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
              This page provides provider and contact information for this website.
            </div>

            <a href="/" className="inline-block text-blue-700 hover:underline text-sm font-medium">
              ← Back to Homepage
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Datenschutzerklärung</h1>
            <p className="text-sm text-slate-600 mt-2">Informationen zur Datenverarbeitung auf dieser Website</p>
          </div>

          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>This website currently does not use tracking cookies.</p>
            <p>If you contact via email, your message and contact details are used to process and respond to your inquiry.</p>
            <p>Data is used only for communication related to project inquiries and profile requests.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 space-y-1">
            <p><strong>Provider:</strong> Mojtaba Ghanaat Pisheh (MGP Consulting)</p>
            <p><strong>Location:</strong> Frankfurt am Main, Germany</p>
            <p><strong>Email:</strong> {PERSONAL_INFO.email}</p>
          </div>

          <a href="/" className="inline-block text-blue-700 hover:underline text-sm font-medium">
            ← Back to Homepage
          </a>
        </div>
      </div>
    </main>
  );
}
