import React, {createContext, useState} from 'react';

export const NavContext = createContext({})

export const NavProvider = ({children}) => {
    const [showNav, setShowNav] = useState(false);
    // console.log('ShowNav from Context:', showNav)

    return (
        <NavContext.Provider value={{showNav, setShowNav}}>
            {children}
        </NavContext.Provider>
    )
}