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
    {experienceJson.info.map(content => {
     const hasLists =
      content.list.length > 0 || content.achievements!.length > 0;

     return (
      <div className="section-content-block" key={uuidv4()}>
       <h3 className="section-content-block-title">{content.title}</h3>
       <h5 className="section-content-block-subtitle">
        <strong>{content.time}</strong>
       </h5>
       <div className="section-content-block-lists">
        <div className="section-content-block-lists-list">
         {hasLists && (
          <h5 className="section-content-block-lists-list-title">
           {t("responsibilities")}
          </h5>
         )}
         <ul>
          {content.list.map(element => (
           <li key={uuidv4()}>{element}</li>
          ))}
         </ul>
        </div>
        <div className="section-content-block-lists-list">
         {hasLists && (
          <h5 className="section-content-block-lists-list-title">
           {t("achievements")}
          </h5>
         )}
         <ul>
          {content.achievements?.map(element => (
           <li key={uuidv4()}>{element}</li>
          ))}
         </ul>
        </div>
       </div>
      </div>
     );
    })}
   </div>
  </div>
 );
};
