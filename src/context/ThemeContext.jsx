import React, {createContext, useState} from 'react';

export const ThemeContext = createContext({theme: 'light', undefined})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    console.log(theme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}