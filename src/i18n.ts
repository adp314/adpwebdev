import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr", "pt"],
    fallbackLng: "en",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: `/src/locales/{{lng}}/{{ns}}.json`,
    },
  });
