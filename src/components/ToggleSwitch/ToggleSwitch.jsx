import { useContext } from 'react';
import './ToggleSwitch.scss';
import { ThemeContext } from "../../contexts/ThemeContext";


const ToggleSwitch = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    
  return (

          <div className="toggleSwitch">
            <input type="checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")}/>
          </div> 

  )
}

export default ToggleSwitch