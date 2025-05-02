import { v4 as uuidv4 } from "uuid";
import "../Section.less";
import { useTranslation } from "react-i18next";
import { ContentType, InfoType } from "../../../../types/contentType";

export const Skills = () => {
 const { t } = useTranslation();

 const skillsJson = t("content.skills", { returnObjects: true }) as ContentType;

 return (
  <div className="section">
   <div className="section-content">
    {skillsJson.info.map((content: InfoType) => (
     <div className="section-content-block" key={uuidv4()}>
      <h4>{content.title}</h4>
      <p>{content.text}</p>
      <ul>
       {content.list.map(element => (
        <li key={uuidv4()}>{element}</li>
       ))}
      </ul>
     </div>
    ))}
   </div>
  </div>
 );
};
