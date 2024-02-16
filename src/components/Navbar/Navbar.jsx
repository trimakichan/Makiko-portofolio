import { useContext, useEffect } from "react";
import "./navbar.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavContext } from "../../contexts/NavContext";
import logo from '../../assets/images/logo.webp'

// icons
import { MdDarkMode } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiBriefcase3Fill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { LuUser } from "react-icons/lu";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const {showNav, setShowNav} = useContext(NavContext);

  function handleLinkClick () {
    setShowNav(false);
    // console.log('showNav:', showNav)
  }

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav__close" onClick={() => setShowNav(false)}>
          <IoMdClose />
        </div>

        <a href="#" className="nav__logo">
          <img src={logo} />
        </a>

        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link" onClick={handleLinkClick}>
              Home
              <AiOutlineHome className="icon"/>
            </a>
          
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleLinkClick}>
              About
              <LuUser className="icon"/>
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link" onClick={handleLinkClick}>
              Projects
              <RiBriefcase3Fill className="icon" />
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link" onClick={handleLinkClick}>
              Contact
              <FiMessageSquare className="icon"/>
            </a>
          </li>

          <p
            className="nav__link"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <MdDarkMode className="moonIcon-color" />
          </p>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
