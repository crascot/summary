import React from "react";
import { Typography } from "@mui/material";
import { content } from '../content/content';
import s from './works.module.css';


const Works = () => {
    return (
        <div className={s.works}>
            <Typography variant="h3" className={s.title}>
                Опыт работы
            </Typography>
            {
                content.works.map((work, i) => (
                    <div key={i}>
                        <div className={s.header}>
                            <Typography variant="h5" fontWeight={700}>
                                {work.name}
                            </Typography>
                            <Typography variant="subtitle1">
                                {work.time}
                            </Typography>
                        </div>
                        <Typography variant="body1" className={s.text}>
                            {work.text}
                        </Typography>
                    </div>
                ))
            }
        </div>
    )
}

export default Works;