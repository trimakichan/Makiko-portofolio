/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./header.scss";
import { NavContext } from "../../contexts/NavContext";
import { IoMenu } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/images/logo.svg"
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";

const Header = () => {
  const { showNav, setShowNav } = useContext(NavContext);
  const { isDesktop } = useContext(ScreenSizeContext);

  return (
    <>
      {/* Show Navbar when the screen size is desktop */}
      {isDesktop && (<Navbar />)}
      {showNav && !isDesktop ? (
        <Navbar />
      ) : (
        <header className="header">
          <nav className="header__nav">
            <a href="#"  className="header__nav__logo" >
              {/* <img src={logo} /> */}
              <p className="mylogo color-logo">M.Y.</p>
            </a>

            {/* Toggle Button */}
            <div className="header__nav__toggle" id="header-toggle">
              <div onClick={() => setShowNav(true)}>
                <IoMenu className="menu-icon" />
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
