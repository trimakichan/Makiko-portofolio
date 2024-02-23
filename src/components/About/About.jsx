import React, { useContext } from 'react'
import './about.scss'
import { ThemeContext } from '../../contexts/ThemeContext';
import woman from '../../assets/images/woman.svg'

const About = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`about ${theme}`}>
            <div className='about__container'>
                <div className='about__photo'>
                    <img src={woman} alt='about me image' />

                </div>
                <div className='about__content'>
                    <p className='title'>About <span>me.</span></p>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi est, eligendi eos odio, alias iusto magni facilis incidunt sunt laboriosam ad amet ipsam quos cumque maxime repellendus, nesciunt fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi aliquam dolore necessitatibus, aliquid sequi ab pariatur veritatis, alias blanditiis nihil tenetur eveniet repudiandae consequuntur quia officia ipsum nemo laudantium.</div>
                </div>
            </div>

        </div>
    )
}

export default About