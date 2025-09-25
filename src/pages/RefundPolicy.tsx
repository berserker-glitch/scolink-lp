import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FloatingHeader from "@/components/FloatingHeader";
import { Footer } from "@/components/ui/footer-section";

const RefundPolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('refund.title')}</h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            {t('refund.description')}
          </p>
          <p className="mt-4 text-sm text-slate-500">{t('refund.lastUpdated')}&nbsp;: {new Date().toLocaleDateString(i18n.language === 'ar' ? 'ar-MA' : i18n.language === 'fr' ? 'fr-MA' : 'en-MA')}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('refund.sections.policy.title')}</h2>
              <p>{t('refund.sections.policy.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('refund.sections.reasoning.title')}</h2>
              <p>{t('refund.sections.reasoning.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('refund.sections.beforePurchase.title')}</h2>
              <p>{t('refund.sections.beforePurchase.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('refund.sections.cancellation.title')}</h2>
              <p>{t('refund.sections.cancellation.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('refund.sections.alternatives.title')}</h2>
              <p>{t('refund.sections.alternatives.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('refund.sections.contact.title')}</h2>
              <p>{t('refund.sections.contact.content')}</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;