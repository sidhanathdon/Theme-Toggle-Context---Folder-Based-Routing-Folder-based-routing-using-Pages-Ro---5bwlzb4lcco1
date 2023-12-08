'use client'
import React from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext } from './components/ThemeProvider';

const Main = () => {
const {theme}=React.useContext(ThemeContext);
const textColor= `txt-${theme}`;
    return(
        <div className={"container " + `bg-${theme}`} id="themed-page">
            <p className={textColor} id="themed-text-container">
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${theme} ${textColor}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Main }