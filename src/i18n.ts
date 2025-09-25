import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import footerPagesEn from './locales/footer-pages-en.json';
import footerPagesFr from './locales/footer-pages-fr.json';
import footerPagesAr from './locales/footer-pages-ar.json';

const resources = {
  en: {
    translation: en,
    footerPages: footerPagesEn
  },
  fr: {
    translation: fr,
    footerPages: footerPagesFr
  },
  ar: {
    translation: ar,
    footerPages: footerPagesAr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
