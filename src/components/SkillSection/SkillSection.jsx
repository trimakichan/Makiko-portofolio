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
                <p className='skillSection__texts font-stroke hidden'>bringing <span>i</span><span>d</span><span>e</span><span>a</span><span>s</span> to <span className='life'>life</span> on the web is my calling.
                </p>

                <div className='skillSection__skills'>
                    <SkillScrollSlider />
                </div>
            </div>
        </div>
    )
}

export default SkillSection
