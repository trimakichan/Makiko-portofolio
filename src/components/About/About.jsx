import './about.scss';

import nature from '../../assets/images/natureandI.jpg';
import Joy from '../../assets/images/joy.svg';
import myPhoto from '../../assets/images/myPhoto.svg';
import diy from '../../assets/images/diy.jpg';
import SkillItems from '../SkillItems/SkillItems';
import SkillScrollSlider from '../SkillScrollSlider/SkillScrollSlider';

const About = () => {
    return (
        <section className="about">
            <p className='title' >About me.</p>

            <div className='about__container'>
                <div className='about__photo'>
                    <div className='image'><div className='image-overlay'></div><img className=" color-thick-border" src={nature}></img></div>
                    <div className='image image-makiko'><div className='image-overlay'></div><img  className=" color-thick-border" src={myPhoto}></img></div>
                    <div className='image'><div className='image-overlay'></div><img  className=" color-thick-border" src={diy}></img></div>
                </div>
                <div className='about__content'>
                    <div className='about-background color-background-accent'> 
                        <h2>Frontend Developer based in Seatte 🌿</h2>
                        <div className='text-container'>
                            <p>
                                Hey there! 👋 I'm a junior frontend developer originally from Japan, based in Seattle. I thrive on bringing the technical and visual aspects of digital products to life.  Right now, my main focus is on front-end web development, but I'm eager to explore the backend side of things in the future. </p>

                            <p> Previously an IT support engineer and currently a stay-at-home mom, I've transitioned into web development to pursue my dream of crafting visually appealing and responsive designs, delivering robust user experiences.</p>

                            <p> I'm dedicated to enhancing digital experiences one line of code at a time.🖥️💪</p>
                        </div>
                        <div className='scroller-container'>
                             <SkillScrollSlider />
                                </div> 
                    </div>
                </div>
                <div className='about__funFacts'>
                        <ul className='funFacts-content color-background-accent'>
                            <li>😊<em>Hobbies</em>: Woodworking/DIY + Hot Yoga + Photography + Cooking </li>
                            <li>🧒<em>kids</em>: Two girls👩‍👧‍👧</li>
                            <li>🐶<em>Pet</em>: One dog, golden retriever named &#8220;Joy&#8221;</li>
                            <li>🌱<em>Personality Type</em>: Enneagram Type 9 &#8317;THE PEACEMAKER&#8318;</li>
                            <li>🩷<em>Favorite Quote</em>: &#8220;Your future is created by what you do today, not tomorrow.&#8221; - Robert Kiyosaki.</li>
                            <li>📙<em>Favorite Books</em>:  &#8220;Atomic Habits&#8221; - James Clear,  &#8220;Limitless&#8221; - Jim Kwik </li>
                        </ul>
                    <div className='funFacts-image'>
                        <img src={Joy} alt='my dog picture' />

                    </div>

                </div>
            </div>

        </section>
    )
}

export default About