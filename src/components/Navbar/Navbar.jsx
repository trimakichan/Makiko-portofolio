import { useContext } from "react";
import "./navbar.scss";
import { ThemeContext } from "../../context/ThemeContext";

// icons
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { RiBriefcase3Fill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { LuUser } from "react-icons/lu";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="header-container">
      <nav className="header-nav">
        <div className="nav-close" id="nav-close">
          <IoMdClose />
        </div>

        <a href="#">LOGO</a>

        {/* Toggle button */}
        <div className="header-toggle" id="header-toggle"></div>
        

        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
              <AiOutlineHome />
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
              <LuUser />
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
              <RiBriefcase3Fill />
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
              <FiMessageSquare />
            </a>
          </li>

          <p
            className="theme-icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <MdDarkMode />
          </p>
        </ul>

        <div className="menu-icon">
          <IoMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
