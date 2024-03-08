
import { useState, useContext } from 'react';
import './projects.scss';
import { projectsData } from '../data/data-projects'
import Modal from '../Modal/Modal';
import { ModalContext } from '../../contexts/ModalContext';
import { useInView } from 'react-intersection-observer';


export const Card = ({ items }) => {
  const {modalStatus, setModalStatus, setModalData} = useContext(ModalContext);


  const handleModalStatus = (item) => {
    setModalStatus(true);
    setModalData(item)
  }

  return items.map((item, index) => {  
    return (
      <div  key={index} className='card' onClick={() => handleModalStatus({item})} >
        <div  className="card__container">
          <div className='card__image'>
            <img src={item.image} />
          </div>

          <div className='card__content'>
            <h2 className='card-title'>{item.name}</h2>
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

      <p className='title'>Projects</p>

      <div className='projects__content'>
        <Card items={projectsData} />
    
      </div>

    </div>
    </section>
  )
}

export default Projects