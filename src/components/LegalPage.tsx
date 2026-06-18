import React, { useEffect } from "react";
import { useI18n } from "../i18n";

interface LegalPageProps {
  type: "impressum" | "datenschutz";
}

export default function LegalPage({ type }: LegalPageProps) {
  const { locale, content, t } = useI18n();
  const personalInfo = content.data.personalInfo;

  useEffect(() => {
    document.documentElement.lang = locale;

    const legalSeo = type === "impressum" ? content.seo.legal.impressum : content.seo.legal.datenschutz;
    document.title = legalSeo.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", legalSeo.description);
    }
  }, [locale, type, content.seo.legal.impressum, content.seo.legal.datenschutz]);

  if (type === "impressum") {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{t("ui.legal.impressumTitle")}</h1>
              <p className="text-sm text-slate-600 mt-2">{t("ui.legal.infoAccordingTo")}</p>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <p><strong>{t("ui.legal.providerNameLabel")}:</strong> {personalInfo.name}</p>
              <p><strong>{t("ui.legal.businessLabel")}:</strong> MGP Consulting</p>
              <p><strong>{t("ui.legal.locationLabel")}:</strong> {personalInfo.locationShort}</p>
              <p><strong>{t("ui.legal.emailLabel")}:</strong> {personalInfo.email}</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
              {t("ui.legal.providerInfoBox")}
            </div>

            <a href="/" className="inline-block text-blue-700 hover:underline text-sm font-medium">
              {t("ui.legal.backToHomepage")}
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
            <h1 className="text-3xl font-bold text-slate-900">{t("ui.legal.privacyTitle")}</h1>
            <p className="text-sm text-slate-600 mt-2">{t("ui.legal.privacyDataProcessingInfo")}</p>
          </div>

          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>{t("ui.legal.privacyIntro")}</p>
            {content.ui.legal.privacyItems.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 space-y-1">
            <p><strong>{t("ui.legal.providerLabel")}:</strong> {personalInfo.name} (MGP Consulting)</p>
            <p><strong>{t("ui.legal.locationLabel")}:</strong> {personalInfo.locationShort}</p>
            <p><strong>{t("ui.legal.emailLabel")}:</strong> {personalInfo.email}</p>
          </div>

          <a href="/" className="inline-block text-blue-700 hover:underline text-sm font-medium">
            {t("ui.legal.backToHomepage")}
          </a>
        </div>
      </div>
    </main>
  );
}
