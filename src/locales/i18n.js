import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.js";
import ru from "./ru.js";
import uz from "./uz.js";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                ...en
            },
            ru: {
                ...ru
            },
            uz: {
                ...uz
            },
        }
    });

export default i18n;

