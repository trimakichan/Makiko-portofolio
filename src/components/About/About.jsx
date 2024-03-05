import './about.scss'

// import woman from '../../assets/images/woman.svg'

import nature from '../../assets/images/natureandI.jpg'
import Joy from '../../assets/images/Joy.jpg'
import diy from '../../assets/images/diy.jpg'

const About = () => {
    return (
        <section className= "about">
            <div className='about__container'>
                <div className='about__photo'>
                    <div className='image'><img src={nature}></img></div>
                    <div className='image image-Joy'><img src={Joy}></img></div>
                    <div className='image'><img src={diy}></img></div>

                </div>
                <div className='about__content'>
                    <p className='title'>About me.</p>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi est, eligendi eos odio, alias iusto magni facilis incidunt sunt laboriosam ad amet ipsam quos cumque maxime repellendus, nesciunt fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi aliquam dolore necessitatibus, aliquid sequi ab pariatur veritatis, alias blanditiis nihil tenetur eveniet repudiandae consequuntur quia officia ipsum nemo laudantium.</div>
                </div>
            </div>

        </section>
    )
}

export default About