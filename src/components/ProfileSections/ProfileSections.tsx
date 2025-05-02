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
 //  PetProjects = "petProjects",
}

export const ProfileSections = () => {
 const { t } = useTranslation();
 const [activeSection, setActiveSection] = useState<Section>(Section.Skills);

 const renderSection = () => {
  switch (activeSection) {
   case Section.Skills:
    return <Skills />;
   case Section.Experience:
    return <Experience />;
   //  case Section.PetProjects:
   // return <PetProjects />;
   // return <div>PetProjects</div>;
   default:
    return null;
  }
 };

 return (
  <div className="profile-sections">
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
    {/* <button
     className={`${activeSection === Section.PetProjects ? "profile-sections-navigation-button-active" : ""} profile-sections-navigation-button`}
     onClick={() => setActiveSection(Section.PetProjects)}
    >
     Проекты
    </button> */}
   </div>
   <div className="profile-sections-content">{renderSection()}</div>
  </div>
 );
};
