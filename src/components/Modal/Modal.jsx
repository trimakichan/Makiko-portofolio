import {useContext} from 'react'
import './modal.scss'
import { ModalContext } from '../../contexts/ModalContext'

const Modal = () => {
    const {setModalStatus, modalData} = useContext(ModalContext);
  return (
    <div className='modal modal-background'>
        <div className='modal__container'>
            <button onClick={() => setModalStatus(false)}> X </button>
            <div className="modal__title">
                <h1>{modalData.item.name}</h1>
            </div>

            <div className="modal__body">
                <p>{modalData.item.description}</p>
            </div>

            <div className="modal__footer">
            <button onClick={() => setModalStatus(false)}>Cancel</button>
            <button>Link</button>

            </div>
        </div>
    </div>
  )
}

export default Modal