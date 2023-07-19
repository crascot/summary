import React from "react";
import { Typography } from "@mui/material";
import s from './skills.module.css';
import { useTranslation } from "react-i18next";



const Skills = () => {
    const { t } = useTranslation()

    const skills = t('skills', { returnObjects: true }).map((el, i) => (
        <div key={i}>
            <Typography className={s.name} variant="h5" fontWeight={700}>
                {el.name}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
                {el.title}
            </Typography>
            <ul>
                {el.list.map(skill => <li key={skill}><Typography variant="overline">{skill}</Typography></li>)}
            </ul>
        </div>
    ))

    return (
        <div className={s.skills}>
            <Typography variant="h2" className={s.title}>
                {t('titleSkills')}
            </Typography>
            {skills}
        </div>
    )
}

export default Skills;