import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from './translations/en/common.json';
import common_pt from './translations/pt/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: common_en,
      },
      pt: {
        translation: common_pt,
      }
    },
    lng: "en",
    fallbackLng: ["en", "pt"],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;