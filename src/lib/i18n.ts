﻿import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../../public/locales/en/translation.json';
import translationVI from '../../public/locales/vi/translation.json';

const resources = {
    en: { translation: translationEN },
    vi: { translation: translationVI },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        supportedLngs: ['vi', 'en'],
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
