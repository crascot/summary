import React from "react";
import { Typography } from "@mui/material";
import { content } from '../content/content';
import s from './skills.module.css';


const Skills = () => {
    const skills = content.skills.map(el => (
        <div key={el.id}>
            <Typography variant="h5" fontWeight={700}>
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
                Навыки
            </Typography>
            {skills}
        </div>
    )
}

export default Skills;