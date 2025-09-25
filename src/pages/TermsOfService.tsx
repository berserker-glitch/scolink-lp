import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FloatingHeader from "@/components/FloatingHeader";
import { Footer } from "@/components/ui/footer-section";

const TermsOfService = () => {
  const { t, i18n, ready } = useTranslation('footerPages');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <FloatingHeader />

      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('terms.title')}</h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {t('terms.description')}
          </p>
          <p className="mt-4 text-sm text-slate-500">{t('terms.lastUpdated')}&nbsp;: {new Date().toLocaleDateString(i18n.language === 'ar' ? 'ar-MA' : i18n.language === 'fr' ? 'fr-MA' : 'en-MA')}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.welcome.title')}</h2>
              <p>{t('terms.sections.welcome.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.service.title')}</h2>
              <p>{t('terms.sections.service.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.eligibility.title')}</h2>
              <p>{t('terms.sections.eligibility.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.accounts.title')}</h2>
              <p>{t('terms.sections.accounts.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.usage.title')}</h2>
              <p>{t('terms.sections.usage.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.payments.title')}</h2>
              <p>{t('terms.sections.payments.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.intellectual.title')}</h2>
              <p>{t('terms.sections.intellectual.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.availability.title')}</h2>
              <p>{t('terms.sections.availability.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.modifications.title')}</h2>
              <p>{t('terms.sections.modifications.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.termination.title')}</h2>
              <p>{t('terms.sections.termination.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.limitation.title')}</h2>
              <p>{t('terms.sections.limitation.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.law.title')}</h2>
              <p>{t('terms.sections.law.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('terms.sections.contact.title')}</h2>
              <p>{t('terms.sections.contact.content')}</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
