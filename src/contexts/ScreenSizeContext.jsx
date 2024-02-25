import React, { createContext,useState, useEffect } from 'react';

export const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({children}) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth > 767); 
        }; 
  
        handleResize(); 
  
           // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Remove the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  
      } , [isDesktop])



  return (
    <ScreenSizeContext.Provider value={{isDesktop}}>
        {children}
    </ScreenSizeContext.Provider>
    
  )
}

