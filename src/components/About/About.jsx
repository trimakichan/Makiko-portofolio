import './about.scss'

// import woman from '../../assets/images/woman.svg'

import nature from '../../assets/images/natureandI.jpg'
import Joy from '../../assets/images/Joy.jpg'
import diy from '../../assets/images/diy.jpg'
import SkillScrollSlider from '../SkillScrollSlider/SkillScrollSlider'

const About = () => {
    return (
        <section className="about">
            <div className='about__container'>
                <div className='about__photo'>
                    <div className='image'><div className='image-overlay'></div><img src={nature}></img></div>
                    <div className='image image-Joy'><div className='image-overlay'></div><img src={Joy}></img></div>
                    <div className='image'><div className='image-overlay'></div><img src={diy}></img></div>

                </div>
                <div className='about__content'>
                    <p className='title' >About me.</p>
                    <div className='about-background'>
                        <h2>Frontend Developer based in Seatte 🌿</h2>
                        <div className='text-container'>
                            <p>
                                Greetings! 👋 I'm a junior frontend developer originally from Japan, now thriving in the vibrant city of Seattle.
                                My passion lies in bringing the technical and visual elements of digital products to life, and with every problem I solve, I feel an inch taller! </p>

                            <p> Previously an IT support engineer and currently a stay-at-home mom, I've transitioned into web development to pursue my dream of crafting visually appealing and responsive designs, delivering robust user experiences.</p>
                            <p> Beyond coding, you'll find me immersed in woodworking/DIY projects, enjoying hot yoga, capturing moments through photography, and experimenting with new recipes. As a mother of two girls and a proud owner of a golden retriever🐶, life is always an exciting adventure.</p>

                            <p> Embracing the Japanese philosophy of "kaizen" or continuous improvement, I'm dedicated to enhancing digital experiences one line of code at a time.🖥️💪</p>
                        </div>
                    </div>
                    {/* <div className='scrollSlider'>
                        <SkillScrollSlider />
                    </div>  */}
                </div>
            </div>

        </section>
    )
}

export default About