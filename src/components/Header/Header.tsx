import "./Header.less";
import CakeIcon from "../../icons/cake.svg";
import MailIcon from "../../icons/mail.svg";
import PhoneIcon from "../../icons/phone.svg";
import SchoolIcon from "../../icons/school.svg";
import GitHubIcon from "../../icons/github.svg";
import TelegramIcon from "../../icons/telegram.svg";
import DownloadIcon from "../../icons/download.svg";
import { Link } from "../Link";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
 EMAIL_LINK,
 GITHUB_LINK,
 PDF_LINK,
 PHONE_LINK,
 TELEGRAM_LINK,
 UNIVERSITY_LINK,
} from "./consts";

export const Header = () => {
 const { t } = useTranslation();
 const { lang } = useParams();

 return (
  <div className="header">
   <div className="header-block">
    <div className="header-block-info">
     <h1>{t("name")}</h1>
     <div className="header-block-info-links">
      <span>
       <CakeIcon /> 15.01.2003
      </span>
      <span>
       <SchoolIcon />
       <Link href={UNIVERSITY_LINK} text={t("university")} />
      </span>
      <span>
       <TelegramIcon /> <Link href={TELEGRAM_LINK} text="Telegram" />
       <PhoneIcon /> <Link href={PHONE_LINK} text="+996558599499" />
      </span>
      <span>
       <MailIcon /> <Link href={EMAIL_LINK} text="yarsitdikov@gmail.com" />
      </span>
      <span>
       <GitHubIcon /> <Link href={GITHUB_LINK} text="GitHub" />
      </span>
      <span>
       <DownloadIcon /> <Link href={PDF_LINK(lang)} text="Pdf" />
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
