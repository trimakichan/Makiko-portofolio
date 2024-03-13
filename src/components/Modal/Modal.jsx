import { useContext } from 'react'
import './modal.scss'
import { ModalContext } from '../../contexts/ModalContext';

import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";




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

                    <div className="modal-body">
                        <p>{modalData.item.description}</p>

                        <p><em>Teck Stack: </em> {modalData.item.teckStack.join(', ')}</p>
                    </div>

                    <div className="modal-footer">

                        {modalData.item.site && <IconContext.Provider
                            value={{ color: '#8060f6', size: '3rem' }}
                        >
                            <a href={modalData.item.site} target='_blank' rel='noopener noreferrer'>
                                <HiOutlineDesktopComputer /></a>
                        </IconContext.Provider>}

                        {modalData.item.github &&

                            <IconContext.Provider
                                value={{ color: '#171515', size: '3rem' }}
                            >      <a href={modalData.item.github} target='_blank' rel='noopener noreferrer'><FaGithub /></a></IconContext.Provider>}

                        {modalData.item.youtube &&

                            <IconContext.Provider
                                value={{ color: '#FF0000', size: '3rem' }}
                            > <a href={modalData.item.youtube} target='_blank' rel='noopener noreferrer'><FaYoutube /></a></IconContext.Provider>}

                        {/* <button onClick={() => setModalStatus(false)}>close</button> */}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal