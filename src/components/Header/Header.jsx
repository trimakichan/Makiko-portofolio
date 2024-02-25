/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext} from "react";
import "./header.scss";
import { NavContext } from "../../contexts/NavContext";
import { IoMenu } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/images/logo.svg"
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";

const Header = () => {
  const {showNav, setShowNav} = useContext(NavContext);
  const {isDesktop} = useContext(ScreenSizeContext)
  // const [isDesktop, setIsDesktop] = useState(false);
 
    // useEffect(() => {
    //   const handleResize = () => {
    //     setIsDesktop(window.innerWidth > 576); 
    //   }; 

    //   handleResize(); 

    //      // Add event listener for window resize
    // window.addEventListener('resize', handleResize);

    // // Remove the event listener on component unmount
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };

    // } , [isDesktop])

  return (
    <>
  {/* Show Navbar when the screen size is desktop */}
    {isDesktop && (<Navbar />)}
      {showNav && !isDesktop ? (
        <Navbar />
      ) : (
        <header className="header">
          <nav className="header__nav">
            <img href="#" src={logo} className="header__nav__logo" />

            {/* Toggle Button */}
            <div className="header__nav__toggle" id="header-toggle">
              <div onClick={() => setShowNav(true)}>
                <IoMenu className="menu-icon"/>
              </div>
            </div>
          </nav>
        </header>
      ) }
    </>
  );
};

export default Header;
