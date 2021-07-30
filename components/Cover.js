import homeStyles from '../styles/Home.module.css';
import { useColorMode } from "theme-ui"
import { useState } from 'react';

export default function Cover() {
    const [mode] = useColorMode()
    const isDark = mode === "dark"
    return (
        <img 
            src={
                isDark
                ? "/cover-dark.png"
                : "/cover.png"
            }

            className={homeStyles.cover}
        />
    );
}