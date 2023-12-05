/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext} from "react";
import "./header.scss";
import { NavContext } from "../../contexts/NavContext";
import { IoMenu } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const {showNav, setShowNav} = useContext(NavContext);
  const [isDesktop, setIsDesktop] = useState(false);
 
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 576); 
      }; 

      handleResize(); 

         // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    } , [isDesktop])

  return (
    <>

    {isDesktop && (<Navbar />)}

      {showNav && !isDesktop ? (
        <Navbar />
      ) : (
        <div className="header">
          <nav className="header__nav">
            <a href="#" className="header__logo">
              Makiko
            </a>

            {/* Toggle Button */}
            <div className="header__toggle" id="header-toggle">
              <div className="header__toggle__menuIcon" onClick={() => setShowNav(true)}>
                <IoMenu className="menu-icon"/>
              </div>
            </div>
          </nav>
        </div>
      ) }
    </>
  );
};

export default Header;
