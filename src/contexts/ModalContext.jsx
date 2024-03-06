import React, {createContext, useState} from 'react';

export const ModalContext = createContext({})

export const ModalProvider = ({children}) => {
    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState()
    // console.log("ModalStatus", modalStatus)
    // console.log('ModalProp', modalData)
    
    return (
        <ModalContext.Provider value={{modalStatus, setModalStatus, modalData, setModalData}}>
            {children}
        </ModalContext.Provider>
    )
}