/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import "./mainItem.scss";
import ProfileImage from '../ProfileImage/ProfileImage';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTypingEffect } from '../../hooks/typing-effect';
import { IconContext } from "react-icons";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";



const MainItem = () => {
    const myName = useTypingEffect("Makiko", 500, 2000);
    const BackgroundText = useTypingEffect("WEB DEVELOPER", 200, 5000)
    const { theme } = useContext(ThemeContext);


    return (

        <main className={`"main" ${theme}`}>
            <h1 className='main__bgText color-decoration'>{BackgroundText}</h1>
            <div className="main__contentWrapper">
                <section className="main__content">
                    <p className="color-primary"><span className='bold'>HI, I AM </span><span className='main__content__nameText name-color'>{myName}</span></p>
                    <div className='main__content__description'>
                        <p className='color-secondary'>
                            A Front-End Web Developer passionate about creating interactive applications and experiences on the web.
                        </p>
                    </div>

                    <div>
                        <IconContext.Provider value={{ className: "reactIcons"}} >
                            <div className='main__content__icons' >
                                <FaGithub/>
                                <FaLinkedin />
                                <IoNewspaperOutline />
                            </div>
                        </IconContext.Provider>
                    </div>
                </section>
                <section className="main__image">
                    <ProfileImage />
                </section>

            </div>
        </main>



    );
};

export default MainItem;
