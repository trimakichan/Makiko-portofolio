import "./skillScrollSlider.scss"
import { dataSkills } from "./data-skill"
import { IconContext } from "react-icons";




const SkillScrollSlider = () => {
  
  const skills = dataSkills.concat(dataSkills)

  // Creat an component for this part 
  // eslint-disable-next-line react/prop-types
  const Item = ({ items }) => {

    return items.map((item, index) =>
      <div key={index} >
        <li className="skill" >
          <div className="skill__icon">
            <IconContext.Provider value={{ color: `${item.color}`, className: "global-class-name", size: "3rem" }}>
              {item.icon}
            </IconContext.Provider>
          </div>
          <div className="skill__name">{item.skill}</div>
        </li>
      </div>
    )
  }



  return (
    <div>
      <h1>Skills</h1>

      <div className='scroller' data-animated='true' >
        <ul className="tag-list scroller__inner">
          <Item items={skills} />

        </ul>
      </div>

    </div>
  )
}

export default SkillScrollSlider