import homeStyles from '../styles/Home.module.css';

import { useColorMode }  from 'theme-ui';
import { useState } from 'react';

export default function Cover() {
    const [mode, setMode] = useColorMode()

    return (
        <img src={ mode === 'light' ? "/cover.png" : "/cover-dark.png" } className={homeStyles.cover}/>
    );
}