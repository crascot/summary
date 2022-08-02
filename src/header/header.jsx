import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material';
import s from './header.module.css';
import avatar from './me.jpg';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const Header = () => {
    const [size, setSize] = useState(9)

    useEffect(() => window.innerWidth <= 899 ? setSize(12) : setSize(9), [])

    return (
        <div className={s.header}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={s.mainGrid}
            >
                <Grid className={s.containerInfo} item xs={size}>
                    <h1>Ситдиков Ярослав</h1>
                    <div className={s.info}>
                        <span><SchoolIcon className={s.icon} /> КГТУ им. Раззакова</span>
                        <span><CakeIcon className={s.icon} /> 15.01.2003</span>
                    </div>
                    <div className={s.contacts}>
                        <LocalPhoneIcon className={s.icon} />
                        <div>
                            <a href="https://t.me/crascot" target="_blank" rel="noreferrer">Telegram</a>
                            <a href="https://join.skype.com/invite/jw2FSUrQojO5" target="_blank" rel="noreferrer">Skype</a>
                            <a href="https://github.com/crascot" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                </Grid>
                <Grid
                    item xs
                    container
                    justifyContent="flex-end"
                    className={s.gridAvatar}
                >
                    <img className={s.avatar} src={avatar} alt="avatar" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;