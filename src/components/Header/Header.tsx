import "./Header.less";
import MailIcon from "../../icons/mail.svg";
import { useParams } from "react-router-dom";
import SchoolIcon from "../../icons/school.svg";
import GitHubIcon from "../../icons/github.svg";
import TelegramIcon from "../../icons/telegram.svg";
import DownloadIcon from "../../icons/download.svg";
import GlobeIcon from "../../icons/globe.svg";
import LocationIcon from "../../icons/location.svg";
import { Link } from "../Link";
import { useTranslation } from "react-i18next";
import { EMAIL_LINK, GITHUB_LINK, TELEGRAM_LINK, PDF_LINK } from "./consts";

export const Header = () => {
 const { t } = useTranslation();
 const { lang } = useParams();

 return (
  <div className="header">
   <div className="header-block">
    <div className="header-block-info">
     <h1>{t("name")}</h1>
     <div className="header-block-info">
      <div className="header-block-info-section">
       <h4>{t("information.contacts")}</h4>
       <span>
        <LocationIcon />
        <span>{t("information.city")}</span>
       </span>
       <span>
        <MailIcon />
        <Link href={EMAIL_LINK} text="yarsitdikov@gmail.com" />
       </span>
       <span>
        <TelegramIcon />
        <Link href={TELEGRAM_LINK} text="Telegram" />
       </span>
       <span>
        <GitHubIcon />
        <Link href={GITHUB_LINK} text="GitHub" />
       </span>
      </div>

      <div className="header-block-info-section">
       <h4>{t("information.resumeAndDiploma")}</h4>
       <span>
        <SchoolIcon />
        <span>{t("university")}</span>
       </span>
      </div>

      <div className="header-block-info-section">
       <h4>{t("information.languages")}</h4>
       <span className="header-block-info-section-languages">
        <GlobeIcon />
        <ul>
         {(t("languages.compact", { returnObjects: true }) as string[]).map(
          (lan: string, i: number) => (
           <li key={i}>{lan}</li>
          ),
         )}
        </ul>
       </span>
      </div>
     </div>

     <div className="header-block-info-section header-block-info-section-pdf">
      <span>
       <DownloadIcon />
       <Link href={PDF_LINK(lang!)} text="PDF" />
      </span>
     </div>
    </div>
    <img className="header-block-image" src="me.jpg" alt="me" />
   </div>
   <div className="header-about-me">
    <h2>{t("aboutMe.title")}</h2>
    <p>{t("aboutMe.text")}</p>
   </div>
  </div>
 );
};
