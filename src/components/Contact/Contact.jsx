import "./contact.scss";
import chatDark from "../../assets/images/chat-dark.svg";
import chatLight from "../../assets/images/chat-light.svg";


import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


const Contact = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="container">

            <div className="contactInfo">
                <p className="contactTitle">Contact Info</p>
                <div className="info">
                    <p><MdOutlinePhoneIphone /><span>(206)488-7550</span></p>
                    <p><CiMail /><span>trimakichan@gmail.com</span></p>

                </div>
                <div className="icons">
                    <a href='mailto:your@email.com'><ImMail4 /></a>
                    <a href='https://www.linkedin.com/in/makiko-yokoyama' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                    <a href='https://github.com/trimakichan' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                </div>


                <div className="chat-image">
                    <img className='image-woman' src={theme === "light" ? chatLight : chatDark} alt="talking woman illustration" />
                </div>

            </div>

            <div className="contactForm">
                <p className="title">Send a Message</p>
                <form className="formBox" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="97f0fff2-2d01-47fc-8b0f-7f72303d8a0f" />

                    <div className="inputBox w50">
                        <input type='text' name="fname" required />
                        <span>First Name</span>
                    </div>
                    <div className="inputBox w50">
                        <input type='text' name="lname" required />
                        <span>Last Name</span>
                    </div>

                    <div className="inputBox w50">
                        <input type='email' name="email" required />
                        <span>Email Address</span>
                    </div>

                    <div className="inputBox w50">
                        <input type='text' name="phone" />
                        <span>Phone Number</span>
                    </div>

                    <div className="inputBox w100">
                        <textarea name="message" placeholder="Your message here..." required></textarea>
                        <span>Write your message here...</span>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>

    )
}

export default Contact