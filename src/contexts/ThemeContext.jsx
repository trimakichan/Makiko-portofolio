/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
import Loading from '../components/Loading/loading';

export const ThemeContext = createContext({ theme: '', setTheme: () => {window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'} });

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState();

    // console.log(theme)

    useEffect(() => {
        const savedTheme = localStorage.getItem('themeSetting');

        if(savedTheme) {
            setTheme(savedTheme);
        } else {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const defaultTheme = systemTheme ? 'dark' : 'light'
            localStorage.setItem('themeSetting', defaultTheme);
            setTheme(defaultTheme); 
            
        console.log('test', defaultTheme);
        }


console.log('first theme', theme);

    }, [])

    const handleThemeChange = (newTheme) => {
        localStorage.setItem('themeSetting', newTheme);
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme: handleThemeChange}}>
            {theme ? children : <Loading />}
     
   </ThemeContext.Provider>
    )
}

