import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import "../../styles/global.less";
import { Header } from "../Header";
import { ProfileSections } from "../ProfileSections";
import { useTranslation } from "react-i18next";

export const Main = () => {
 const { lang } = useParams();
 const { t, i18n } = useTranslation();

 useEffect(() => {
  if (lang && ["en", "ru"].includes(lang)) {
   i18n.changeLanguage(lang);
  }
 }, [lang, i18n]);

 return (
  <div className="container">
   <Helmet>
    <title>{t("head.title")}</title>
    <meta name="description" content={t("head.description")} />
   </Helmet>
   <div className="container-block">
    <Header />
    <ProfileSections />
   </div>
  </div>
 );
};
