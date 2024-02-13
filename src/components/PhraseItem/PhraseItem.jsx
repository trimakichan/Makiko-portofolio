/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './phraseItem.scss'
import { ThemeContext } from '../../contexts/ThemeContext'

const PhraseItem = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`phrase ${theme} bg-color`}>
            <div className='phrase__container'>
                <p className='phrase__container__text font-stroke hidden'>bringing <span>ideas</span> to <span>life</span>
                </p>
                <p className='phrase__container__text font-stroke hidden'>
                    on the web is my calling.</p>
            </div>

            <div className='phrase__skills'>

            </div>
        </div>
    )
}

export default PhraseItem
