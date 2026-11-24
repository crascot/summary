import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common from "./locales/common.json";
import { SPECIALTY } from "./specialty";

i18n.use(initReactI18next).init({
 resources: {
  en: { common, specialty: SPECIALTY },
 },
 lng: "en",
 fallbackLng: "en",
 defaultNS: "specialty",
 fallbackNS: "common",
 interpolation: {
  escapeValue: false,
 },
});

export default i18n;
