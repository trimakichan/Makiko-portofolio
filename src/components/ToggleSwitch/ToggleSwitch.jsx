import { useContext } from 'react';
import './ToggleSwitch.scss';
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavContext } from '../../contexts/NavContext';



const ToggleSwitch = () => {
  const {showNav, setShowNav} = useContext(NavContext)
    const { theme, setTheme } = useContext(ThemeContext);

    const checkboxFunc = () => {
      setTheme(theme === "light" ? "dark" : "light");
      setShowNav(!showNav);

    }    
  return (

          <div className="toggleSwitch">
            <input type="checkbox" onChange={checkboxFunc}/>
          </div> 

  )
}

export default ToggleSwitch