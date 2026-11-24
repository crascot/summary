import { Helmet } from "react-helmet";
import "../../styles/global.less";
import { Header } from "../Header";
import { ProfileSections } from "../ProfileSections";
import { useTranslation } from "react-i18next";

export const Main = () => {
 const { t } = useTranslation();

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
