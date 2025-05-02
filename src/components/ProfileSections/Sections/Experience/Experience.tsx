import { v4 as uuidv4 } from "uuid";
import "../Section.less";
import { useTranslation } from "react-i18next";
import { ContentType } from "../../../../types/contentType";

export const Experience = () => {
 const { t } = useTranslation();

 const experienceJson = t("content.experience", {
  returnObjects: true,
 }) as ContentType;

 return (
  <div className="section">
   <div className="section-content">
    {experienceJson.info.map(content => (
     <div className="section-content-block" key={uuidv4()}>
      <h4>{content.title}</h4>
      <p className="section-content-block-time">{content.time}</p>
      <div className="section-content-block-lists">
       <div className="section-content-block-lists-list">
        <h5>{t("responsibilities")}</h5>
        <ul>
         {content.list.map(element => (
          <li key={uuidv4()}>{element}</li>
         ))}
        </ul>
       </div>
       <div className="section-content-block-lists-list">
        <h5>{t("achievements")}</h5>
        <ul>
         {content.achievements?.map(element => (
          <li key={uuidv4()}>{element}</li>
         ))}
        </ul>
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};
