import React from "react";
import { Typography } from "@mui/material";
import s from './works.module.css';
import { useTranslation } from "react-i18next";


const Works = () => {
    const { t } = useTranslation()

    const works = t('works', { returnObjects: true }).map((work, i) => (
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

    return (
        <div className={s.works}>
            <Typography variant="h3" className={s.title}>
                {t('titleWorks')}
            </Typography>
            {works}
        </div>
    )
}

export default Works;