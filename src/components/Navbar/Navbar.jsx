import { useContext } from "react";
import "./navbar.scss";
import { NavContext } from "../../contexts/NavContext";
import logo from '../../assets/images/logo.svg';

// icons
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
      <nav className="nav ">
        <div className="nav__close"  onClick={() => setShowNav(!showNav)}>
          <IoMdClose/>
        </div>

        <a href="#" className="nav__logo" onClick={() => setShowNav(!showNav)}>
          <img className='logo' src={logo} alt="Logo" />
     
        </a>

        <ul className="nav__list nav-color"  onClick={handleLinkClick}>
          <li className="nav__list__item ">
            <a href="#" className="nav-link ">
            {/* nav-link */}
              Home
              <AiOutlineHome  />
            </a>

          </li>
          <li className="nav__list__item">
            <a href="#about" className="nav-link" >
              About
              <LuUser />
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#projects" className="nav-link">
              Projects
              <RiBriefcase3Fill />
            </a>
          </li>
          <li className="nav__list__item">
            <a href="#contact" className="nav-link" >
              Contact
              <FiMessageSquare />
            </a>
          </li>
          <li>
          <ToggleSwitch />
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
