import React, { useContext } from 'react'
import './phraseItem.scss'
import { ThemeContext } from '../../contexts/ThemeContext'

const PhraseItem = () => {
    const { theme } = useContext(ThemeContext)
  
    return (
        <div className={`phrase ${theme}`}>
            <div className='phrase__container bg-color'>
                <p className='phrase__container__text font-stroke'>bringing <span>ideas</span> to <span>life</span>
                </p>
                <p className='phrase__container__text font-stroke'>
                    on the web is my calling.</p>
            </div>
        </div>
    )
}

export default PhraseItem
