import { useState } from "react";
import "./ProfileSections.less";
import { Skills } from "./Sections/Skills";
import { Experience } from "./Sections/Experience";
import { useTranslation } from "react-i18next";

enum Section {
 // eslint-disable-next-line no-unused-vars
 Skills = "skills",
 // eslint-disable-next-line no-unused-vars
 Experience = "experience",
}

export const ProfileSections = () => {
 const { t } = useTranslation();
 const [activeSection, setActiveSection] = useState<Section>(Section.Skills);
 const [printMod] = useState<boolean>(false);

 const renderNavigation = () => {
  if (printMod) {
   return null;
  }
  return (
   <div className="profile-sections-navigation">
    <button
     className={`${activeSection === Section.Skills ? "profile-sections-navigation-button-active" : ""} profile-sections-navigation-button`}
     onClick={() => setActiveSection(Section.Skills)}
    >
     {t("buttons.skills")}
    </button>
    <button
     className={`${activeSection === Section.Experience ? "profile-sections-navigation-button-active" : ""} profile-sections-navigation-button`}
     onClick={() => setActiveSection(Section.Experience)}
    >
     {t("buttons.experience")}
    </button>
   </div>
  );
 };

 const renderContent = () => {
  if (printMod) {
   return renderAll();
  } else {
   return renderSection();
  }
 };

 const renderSection = () => {
  switch (activeSection) {
   case Section.Skills:
    return <Skills />;
   case Section.Experience:
    return <Experience />;
   default:
    return null;
  }
 };

 const renderAll = () => {
  return (
   <div className="profile-sections-content-list">
    <div className="profile-sections-content-list-item">
     <h1>{t("content.skills.title")}</h1>
     <Skills />
    </div>
    <div className="profile-sections-content-list-item">
     <h1>{t("content.experience.title")}</h1>
     <Experience />
    </div>
   </div>
  );
 };

 return (
  <div className="profile-sections">
   {renderNavigation()}
   <div className="profile-sections-content">{renderContent()}</div>
  </div>
 );
};
