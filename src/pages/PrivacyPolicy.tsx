import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FloatingHeader from "@/components/FloatingHeader";
import { Footer } from "@/components/ui/footer-section";
import { useIsMobile } from "@/hooks/use-mobile";

const PrivacyPolicy = () => {
  const { t, i18n, ready } = useTranslation('footerPages');
  const isMobile = useIsMobile();

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
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold mb-4`}>{t('privacy.title')}</h1>
          <p className={`text-base ${isMobile ? 'text-sm' : 'md:text-lg'} text-slate-600 max-w-2xl mx-auto`}>
            {t('privacy.description')}
          </p>
          <p className={`mt-4 ${isMobile ? 'text-xs' : 'text-sm'} text-slate-500`}>{t('privacy.lastUpdated')}&nbsp;: {new Date().toLocaleDateString(i18n.language === 'ar' ? 'ar-MA' : i18n.language === 'fr' ? 'fr-MA' : 'en-MA')}</p>
        </div>
      </section>

      <section className={`py-12 ${isMobile ? 'px-4' : ''}`}>
        <div className={`container mx-auto px-4 max-w-4xl ${isMobile ? 'px-2' : ''}`}>
          <div className={`${isMobile ? 'space-y-6' : 'space-y-10'} leading-relaxed`}>
            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.welcome.title')}</h2>
              <p>{t('privacy.sections.welcome.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.dataCollection.title')}</h2>
              <p>{t('privacy.sections.dataCollection.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.dataUse.title')}</h2>
              <p>{t('privacy.sections.dataUse.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.dataSharing.title')}</h2>
              <p>{t('privacy.sections.dataSharing.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.dataSecurity.title')}</h2>
              <p>{t('privacy.sections.dataSecurity.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.userRights.title')}</h2>
              <p>{t('privacy.sections.userRights.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.retention.title')}</h2>
              <p>{t('privacy.sections.retention.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.international.title')}</h2>
              <p>{t('privacy.sections.international.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.updates.title')}</h2>
              <p>{t('privacy.sections.updates.content')}</p>
            </section>

            <section>
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-3`}>{t('privacy.sections.contact.title')}</h2>
              <p>{t('privacy.sections.contact.content')}</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;