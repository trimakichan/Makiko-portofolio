import { useContext } from "react";
import "./navbar.scss";
import { ThemeContext } from "../../context/ThemeContext";

// icons
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiBriefcase3Fill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="container-nav">
      <nav className="nav">
        <a href="#">LOGO</a>
        <label className="icons">
          <IoMenu />
        </label>

        <ul className="links-container">
          <li>
            <a href="#">
              Home
              <AiOutlineHome />
            </a>
          </li>
          <li>
            <a href="#">
              About
              <FaRegUserCircle />
            </a>
          </li>
          <li>
            <a href="#">
              Projects
              <RiBriefcase3Fill />
            </a>
          </li>
          <li>
            <a href="#">
              Contact
              <FiMessageSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <p onClick={() => setTheme(theme === 'light' ? 'dark' : 'light') }>
                <MdDarkMode />
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
