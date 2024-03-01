import "./contact.scss";
import pic from "../../assets/images/woman.svg";

import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { MdOutlinePhoneIphone } from "react-icons/md";




const Contact = () => {
    return (
            <div className="container">
            
                <div className="contactInfo">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li><span><MdOutlinePhoneIphone /></span><span>(206)488-7550</span></li>
                        <li>
                            <span><CiMail /></span>
                            <span>trimakichan@gmail.com</span>
                        </li>
                    </ul>
                    <ul className="icons">
                        <li>  <a href='mailto:your@email.com'><ImMail4 /></a></li>
                        <li>  <a href='https://www.linkedin.com/in/makiko-yokoyama' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a></li>
                        <li>     <a href='https://github.com/trimakichan' target='_blank' rel='noopener noreferrer'><FaGithub /></a></li>
                    </ul>

                </div>
              
                <div className="contactForm">
                    <p className="contact-title">Send a Message</p>
                    <form className="formBox"  action="https://api.web3forms.com/submit" method="POST">
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
                            <input type='text' name="" required />
                            <span>Phone Number</span>
                        </div>

                        <div className="inputBox w100">
                            <textarea name="message" placeholder="Your message" required></textarea>
                            <span>Write your message here...</span>
                        </div>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
    
    )
}

export default Contact