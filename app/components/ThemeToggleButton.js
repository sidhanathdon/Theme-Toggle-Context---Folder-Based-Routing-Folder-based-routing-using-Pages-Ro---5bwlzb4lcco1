'use client';
import React from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () => {
    const {theme,toggleTheme}= React.useContext(ThemeContext);

    return (
       <button 
       className={`btn btn-${theme} txt-${theme}`}
       id='global-theme-toggler'
       onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" :"light"} theme
       </button>
    );

};
export {ThemeToggleButton}