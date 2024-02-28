import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './footer.scss'
import logoLight from '../../assets/images/logoLight.svg';
import logoDark from '../../assets/images/logoDark.svg';

//icons
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";




const Footer = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="footer__container">
            <div className="footer">
                <div className="footer__logo">
                    <img src={theme === 'light' ? logoLight : logoDark} className='logo' />
                    <p> Creating innovative and user-friendly solutions that bring ideas to life on the web.</p>
                </div>

                <div className='footer__content'>
                    <div className='icons'>
                        <a href='mailto:your@email.com'><ImMail4 /></a>
                        <a href='https://www.linkedin.com/in/makiko-yokoyama' target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
                        <a href='https://github.com/trimakichan' target='_blank' rel='noopener noreferrer'><FaGithub/></a>
                    </div>
                </div>
            </div>
                <p className='copyRight'>&#169; 2024 Handcrafted by me</p>


        </div>


    )
}

export default Footer