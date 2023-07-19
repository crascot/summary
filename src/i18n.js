import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./locales/en.json";
import RU from "./locales/ru.json";

const resources = {
  en: {
    translation: EN
  },
  ru: {
    translation: RU
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;