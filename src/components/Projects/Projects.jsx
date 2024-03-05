import './project.scss';
import { projectsData } from './data-projects'


export const Project = ({ items }) => {
  console.log(items)

  // const techStack = techStack => {
  //   return techStack.replace('')

  // } 

  return items.map((item, index) => {
    console.log('item', item)

    return (
      <div key={index} className="card__container">
        <div className="card">
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
  console.log(projectsData)
  return (
    <section className='projects__container'>

        <p className='title'>Projects</p>

        <div className='projects__content'>
        <Project items={projectsData} />
        </div>
    
    </section>
  )
}

export default Projects