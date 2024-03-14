/* eslint-disable no-unused-vars */

import "./mainItem.scss";
import ProfileImage from '../ProfileImage/ProfileImage';
import { useTypingEffect } from '../../hooks/typing-effect';
import doodle2 from '../../assets/images/doodle2.svg'

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

const MainItem = () => {
    const myName = useTypingEffect("Makiko", 400, 2000);
    const BackgroundTextLeft = useTypingEffect("WEB DEVELOPER", 200, 5000);
    const BackgroundTextRight = useTypingEffect("UX & UI", 200, 8000);

    const resumeUrl = './src/assets/Makiko-resume.pdf'

    return (

        <main className="main">
            <h1 className='main-bgTextLeft color-decoration'>{BackgroundTextLeft}</h1>
            <div className="main__container">

                <div className="main__content">
                    <p className="color-primary"><span className='bold'>HI, I AM </span><span className='main__content__nameText name-color'>{myName}</span></p>
                    <div className='main__content__description'>
                        <p className='color-secondary'>
                            <span>A Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.
                        </p>
                    </div>
             
                        <IconContext.Provider value={{ className: "reactIcons"}} >
                            <div className='main__content__icons' >
                            <a href='https://github.com/trimakichan' target='_blank' rel='noopener noreferrer'><FaGithub/></a>
                                <a href='https://www.linkedin.com/in/makiko-yokoyama' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                                <a ><IoNewspaperOutline onClick={() => window.open(resumeUrl, '_blank')} /></a>
                            </div>
                        </IconContext.Provider>
            
                </div>


                <div className="main__image">
                    <ProfileImage />
                    <img className='profileImage-doodle'src={doodle2} alt='doodle illustration' />
                </div>
            </div>
            <h1 className='main-bgTextRight'>{BackgroundTextRight}</h1>
           
        </main>
    );
};

export default MainItem;
