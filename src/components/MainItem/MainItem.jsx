/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import "./mainItem.scss";
import ProfileImage from '../ProfileImage/ProfileImage';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTypingEffect } from '../../hooks/typing-effect';

const MainItem = () => {
    const text = useTypingEffect("Makiko", 500);
    const { theme } = useContext(ThemeContext);


    return (

        <div className={`"main" ${theme}`}>
            <h1 className='main__bgText color-decoration'>WEB DEVELOPER</h1>
            <div className="main__contentWrapper">
                <section className="main__content">
                    <p className="color-primary">HI, I AM <span>{text}</span></p>
                    <p className='color-secondary'>
                        I am a web designer and developer.
                    </p>
                </section>
                <section className="main__image">
                    <ProfileImage />
                </section>

            </div>
        </div>



    );
};

export default MainItem;
