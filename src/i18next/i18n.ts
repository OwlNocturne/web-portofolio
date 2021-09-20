import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import translation from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";
import translationJA from "./locales/ja/translation.json";

export const defaultNS = "translation";
export const resources = {
    en: {
        translation,
    },
    pt: {
        "translation": translationPT,
    },
    ja: {
        "translation": translationJA,
    }
    
} as const;

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: ["en","pt","ja"],
        supportedLngs : ["en","pt","ja"],
        debug: true,
        ns:["translation", "translationPT", "translationJA"],
        defaultNS,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources,
    });

export default i18n;
