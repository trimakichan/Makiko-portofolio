import { useContext, useEffect } from 'react';
import './ToggleSwitch.scss';
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavContext } from '../../contexts/NavContext';



const ToggleSwitch = () => {
  const {showNav, setShowNav} = useContext(NavContext)
    const { theme, setTheme } = useContext(ThemeContext);


    const checkboxFunc = () => {

      // setShowNav(!showNav);
      setTheme(theme === "light" ? "dark" : "light");
      setShowNav(!showNav);
    }  


   return (
        <div className={`${theme === 'light' ?"toggleSwitch" : "toggleSwitch-dark" }`}>
    <input type="checkbox" onChange={checkboxFunc}/>
  </div> 
   )

}

export default ToggleSwitch