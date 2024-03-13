/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './skillSection.scss';
import SkillItems from '../SkillItems/SkillItems';
import { useInView } from 'react-intersection-observer';

const SkillSection = () => {
    const { ref: phraseRef, inView: phraseIsVisible } = useInView();
    const { ref: skillRef, inView: skillIsVisible } = useInView();


    return (
        <section className='skillSection' >       
            <div className='skillSection__container'>
                <p className={`skillSection__texts font-stroke ${phraseIsVisible ? 'showLeft' : 'hiddenLeft'}`}  ref={phraseRef}>bringing <span>i</span><span>d</span><span>e</span><span>a</span><span>s</span> to <span className='life'>life</span> on the web is my calling.
            
                </p>

                <div className={`skillSection__skills ${skillIsVisible ? 'showScale' : 'hiddenScale'}`} ref={skillRef}>
                    <SkillItems />
                </div>

            </div>
        </section>
    )
}

export default SkillSection
