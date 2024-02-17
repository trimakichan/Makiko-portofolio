/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './skillSection.scss'
import { ThemeContext } from '../../contexts/ThemeContext'
import SkillScrollSlider from '../SkillScrollSlider/SkillScrollSlider'

const SkillSection = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`skillSection ${theme} bg-color`}>
            <div className='skillSection__container'>
                <p className='skillSection__container__text font-stroke hidden'>bringing <span>ideas</span> to <span>life</span>
                </p>
                <p className='skillSection__container__text font-stroke hidden'>
                    on the web is my calling.</p>
            </div>

            <div className='skillSection__skills'>
            <SkillScrollSlider />
            </div>
        </div>
    )
}

export default SkillSection
