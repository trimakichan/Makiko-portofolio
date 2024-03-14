import { useContext } from 'react'
import './modal.scss'
import { ModalContext } from '../../contexts/ModalContext';

import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";


const IconLink = ({ href, color, name, children }) => (
    <IconContext.Provider value={{ color, size: '3rem' }} className='icon-hover'>
        <div className='icon-container'>
        <a href={href} target='_blank' rel='noopener noreferrer'>
            {children}
        </a>
        <p>{name}</p>
        </div>
    </IconContext.Provider>
);


const Modal = () => {
    const { modalData, setModalStatus } = useContext(ModalContext);
    console.log(modalData)
    return (
        <div className='modal modal-background'>

            <div className='modal__container'>
                <p className="modal-close" onClick={() => setModalStatus(false)}><IoMdClose /></p>

                <div className='modal__image'>
                    <img src={modalData.item.image} />
                </div>

                <div className='modal__content'>
                    <div className="modal-title">
                        <h1>{modalData.item.name}</h1>
                    </div>

                    <div className="modal-description">
                        <p>{modalData.item.description}</p>

                        <p><em>Teck Stack: </em> {modalData.item.teckStack.join(', ')}</p>
                    </div>

                    <div className="modal-button">

                        {modalData.item.site && (
                            <IconLink href={modalData.item.site} color="#8060f6" name='Live Site'>
                                <HiOutlineDesktopComputer />

                            </IconLink>
                        )}
                        {modalData.item.github && (
                            <IconLink href={modalData.item.github} color="#171515" name='GitHub'>
                                <FaGithub />
                            </IconLink>
                        )}
                        {modalData.item.youtube && (
                            <IconLink href={modalData.item.youtube} color="#FF0000" name="Youtube">
                                <FaYoutube />
                            </IconLink>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal