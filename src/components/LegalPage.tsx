import React, { useEffect } from "react";
import { useI18n } from "../i18n";

interface LegalPageProps {
  type: "impressum" | "datenschutz";
}

export default function LegalPage({ type }: LegalPageProps) {
  const { locale, content, t } = useI18n();
  const personalInfo = content.data.personalInfo;
  const legal = content.ui.legal;

  useEffect(() => {
    document.documentElement.lang = locale;

    const legalSeo = type === "impressum" ? content.seo.legal.impressum : content.seo.legal.datenschutz;
    document.title = legalSeo.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", legalSeo.description);
    }
  }, [locale, type, content.seo.legal.impressum, content.seo.legal.datenschutz]);

  const contactBox = (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 space-y-1">
      <p><strong>{t("ui.legal.providerNameLabel")}:</strong> {personalInfo.name}</p>
      <p><strong>{t("ui.legal.businessLabel")}:</strong> {personalInfo.legalBusinessName}</p>
      <p><strong>{t("ui.legal.locationLabel")}:</strong> {personalInfo.locationShort}</p>
      <p><strong>{t("ui.legal.emailLabel")}:</strong> <a href={`mailto:${personalInfo.email}`} className="text-blue-700 hover:underline">{personalInfo.email}</a></p>
      <p><strong>{t("ui.legal.phoneLabel")}:</strong> <a href={`tel:${personalInfo.phone}`} className="text-blue-700 hover:underline">{personalInfo.phoneFormatted}</a></p>
    </div>
  );

  if (type === "impressum") {
    return (
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{t("ui.legal.impressumTitle")}</h1>
              <p className="text-sm text-slate-600 mt-2">{t("ui.legal.infoAccordingTo")}</p>
            </div>

            {contactBox}

            <p className="text-sm text-slate-600">{t("ui.legal.providerInfoBox")}</p>

            {legal.bindingVersionNote && (
              <p className="text-xs text-slate-500">{legal.bindingVersionNote}</p>
            )}

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
        <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{t("ui.legal.privacyTitle")}</h1>
            <p className="text-sm text-slate-600 mt-2">{t("ui.legal.privacyDataProcessingInfo")}</p>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">{t("ui.legal.privacyIntro")}</p>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">{t("ui.legal.controllerTitle")}</h2>
            {contactBox}
          </section>

          {legal.privacySections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="space-y-1 text-xs text-slate-500 border-t border-slate-100 pt-4">
            <p>{legal.lastUpdated}</p>
            {legal.bindingVersionNote && <p>{legal.bindingVersionNote}</p>}
          </div>

          <a href="/" className="inline-block text-blue-700 hover:underline text-sm font-medium">
            {t("ui.legal.backToHomepage")}
          </a>
        </div>
      </div>
    </main>
  );
}
