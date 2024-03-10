
import { useState, useContext } from 'react';
import './projects.scss';
import { projectsData } from '../data/data-projects'
import Modal from '../Modal/Modal';
import { ModalContext } from '../../contexts/ModalContext';
import { useInView } from 'react-intersection-observer';
import { ScreenSizeContext } from '../../contexts/ScreenSizeContext';

import { GrGroup } from "react-icons/gr";



export const Card = ({ items }) => {
  const { modalStatus, setModalStatus, setModalData } = useContext(ModalContext);
  const { ref: projectRef, inView: projectIsVisible } = useInView();
  const { isDesktop } = useContext(ScreenSizeContext);
  console.log('desktopsize', isDesktop)

  const handleModalStatus = (item) => {
    setModalStatus(true);
    setModalData(item)
  }

  return items.map((item, index) => {

    return (

      <div key={index} className={`card   ${isDesktop &&projectIsVisible ? `showLeft index${index}` : ''} ${isDesktop && !projectIsVisible ? 'hiddenLeft' : ''}`} onClick={item.status === "active" ? () => handleModalStatus({ item }) : null} ref={projectRef}>
        <div className={`card__container  ${item.status === 'inactive' ? 'card-inactive' : ''}`}>
          {item.status === 'inactive' &&
            <div className='inactive-text'>

{/* ${!cardIsVisible && !isDesktop ? 'hiddenFadeIn' : ''} */}
{/* ${!isDesktop && cardIsVisible ? 'showFadeInMobile' : ''} */}
            
              <p>In Progress</p>

            </div>
          }
          <div className='card__image'>
            <img src={item.image} />
          </div>

          <div className='card__content'>
            <h2 className='card-title'><div>{item.name} </div> {item.group ? <GrGroup /> : ''}</h2>
            <p className='card-techstack'>Tech Stack:{item.teckStack.join(', ')}</p>
            <p className='card-description'>{item.description}</p>
          </div>
        </div>
      </div>
    )
  }
  )

}


const Projects = () => {
  const { ref: projectRef, inView: projectIsVisible } = useInView();


  return (
    <section className='projects' ref={projectRef}>

      <div className='projects__container'>

        <p className={`title ${projectIsVisible ? 'showFadeIn' : 'hiddenFadeIn'}`}>Projects</p>

        <div className='projects__content'>
          <Card items={projectsData} />
        </div>

      </div>
    </section>
  )
}

export default Projects