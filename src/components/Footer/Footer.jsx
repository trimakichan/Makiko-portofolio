import './footer.scss'
import logo from '../../assets/images/logo.webp'

//icons
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <div>
                <img src={logo} className='footer__left__logo' />
                </div>
                <p>MAKIKO YOKOYAMA</p>
            </div>
            <div className='footer__right'>
                <div className='footer__right__info'>
                    <p>Phone: (206)488-7550</p>
                    <p>Email: trimakichan@gmail.com</p>
                    <div className='footer__right__icons'>
                        <AiTwotoneMail />
                        <FaLinkedin />
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer