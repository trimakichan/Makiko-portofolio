
import './project.scss';
import { projectsData } from './data-projects'


export const Project = ({ items }) => {
  console.log(items)

  return items.map((item, index) => {
    console.log('item', item)

    return (
      <div  key={index} className="card">
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
  return (
    <section className='projects'>

    <div className='projects__container'>

      <p className='title'>Projects</p>

      <div className='projects__content'>
        <Project className="project-item" items={projectsData} />
      </div>

    </div>
    </section>
  )
}

export default Projects