import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import about_en from './locales/en/about.json';
import about_es from './locales/es/about.json';
import rotatingText_en from './locales/en/rotatingText.json';
import rotatingText_es from './locales/es/rotatingText.json';
import navbar_en from './locales/en/navbar.json';
import navbar_es from './locales/es/navbar.json';
import header_en from './locales/en/header.json';
import header_es from './locales/es/header.json';
import services_en from './locales/en/services.json';
import services_es from './locales/es/services.json';
import portfolio_en from './locales/en/portfolio.json';
import portfolio_es from './locales/es/portfolio.json';
import contact_en from './locales/en/contact.json';
import contact_es from './locales/es/contact.json';



const resources = {
  en: {
    about: about_en,
    rotatingText: rotatingText_en,
    navbar: navbar_en,
    header: header_en,
    services: services_en,
    portfolio: portfolio_en,
    contact: contact_en
  },
  es: {
    about: about_es,
    rotatingText: rotatingText_es,
    navbar: navbar_es,
    header: header_es,
    services: services_es,
    portfolio: portfolio_es,
    contact: contact_es
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    ns: ['about', 'navbar', 'header', 'rotatingText', 'services', 'portfolio', 'contact'],
    interpolation: { escapeValue: false },
  });

export default i18n;
