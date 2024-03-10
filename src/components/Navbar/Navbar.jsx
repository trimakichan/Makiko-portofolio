import { useContext, useEffect } from "react";
import "./navbar.scss";
// import {ToggleSwitch} from 
import { NavContext } from "../../contexts/NavContext";
import logo from '../../assets/images/logo.svg';

// icons
import { MdDarkMode } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiBriefcase3Fill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";


const Navbar = () => {
 const {isDesktop} = useContext(ScreenSizeContext)
  const { showNav, setShowNav } = useContext(NavContext);

  function handleLinkClick() {
    setShowNav(!showNav);
  }

  return (
    <nav className={`nav-container ${!isDesktop && showNav ? 'showNav' : '' }` } >
      <nav className="nav">
        <div className="nav__close"  onClick={() => setShowNav(!showNav)}>
          <IoMdClose/>
        </div>

        <a href="#" className="nav__logo" onClick={() => setShowNav(!showNav)}>
          <img className='logo' src={logo} alt="Logo" />
     
        </a>

        <div className="navSwitch-container">
        <ul className="nav__list"  onClick={handleLinkClick}>
          <li className="nav__list__item">
            <a href="#" className="nav__list__item__link">
              Home
              <AiOutlineHome className="icon" />
            </a>

          </li>
          <li className="nav__list__item">
            <a href="#about" className="nav__list__item__link" >
              About
              <LuUser className="icon" />
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#projects" className="nav__list__item__link">
              Projects
              <RiBriefcase3Fill className="icon" />
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#contact" className="nav__list__item__link" >
              Contact
              <FiMessageSquare className="icon" />
            </a>
          </li>


          {/* <p className="nav__link"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          > */}

          {/* <MdDarkMode className="moonIcon-color" /> */}
          {/* </p> */}

          {/* <div className="button">
            <input type="checkbox" onChange={() => setTheme(theme === "light" ? "dark" : "light")}/>
          </div> */}
        </ul>
        <ToggleSwitch />

        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
