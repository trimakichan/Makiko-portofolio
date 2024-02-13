/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import "./mainItem.scss";
import ProfileImage from '../ProfileImage/ProfileImage';
import { ThemeContext } from "../../contexts/ThemeContext";

const MainItem = () => {
    const {theme} = useContext(ThemeContext)
    // console.log('from Main page;', theme)
    return (

        <div className={`"main" ${theme}`}>
             <h1 className='main__bgText color-decoration'>WEB DEVELOPER</h1>
            <div className="main__contentWrapper"> 
                <section className="main__content">
                    <p className="color-primary">HI, I AM <span className='neon'>MAKIKO</span></p>
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
