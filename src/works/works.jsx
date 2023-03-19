import React from "react";
import { Typography } from "@mui/material";
import { content } from '../content/content';
import s from './works.module.css';


const Works = () => {
    const skills = content.works.map((el, i) => (
        <div key={i}>
            <Typography variant="h5" fontWeight={700}>
                {el.name}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
                {el.title}
            </Typography>
            <Typography variant="subtitle1">
                {el.time}
            </Typography>
            <Typography variant="body1" className={s.text}>
                {el.text}
            </Typography>
        </div>
    ))

    return (
        <div className={s.works}>
            <Typography variant="h3" className={s.title}>
                Опыт работы
            </Typography>
            {skills}
        </div>
    )
}

export default Works;