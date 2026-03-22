import "./ProfileSections.less";
import { Skills } from "./Sections/Skills";
import { Experience } from "./Sections/Experience";
import { useTranslation } from "react-i18next";

export const ProfileSections = () => {
 const { t } = useTranslation();

 return (
  <div className="profile-sections">
   <div className="profile-sections-content">
    <div className="profile-sections-content-list">
     <div className="profile-sections-content-list-item">
      <Experience />
     </div>
     <hr />
     <div className="profile-sections-content-list-item">
      <Skills />
     </div>
    </div>
   </div>
  </div>
 );
};
