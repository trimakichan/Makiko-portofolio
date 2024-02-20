import "./skillScrollSlider.scss";
import { dataSkills } from "./data-skill";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { ScreenSizeContext } from "../../contexts/ScreenSizeContext";

const SkillScrollSlider = () => {
  const {isDesktop} = useContext(ScreenSizeContext)
  
  const skill = dataSkills
  const skills = dataSkills.concat(dataSkills);
  // Creat an component for this part 
  // eslint-disable-next-line react/prop-types
  const Item = ({ items }) => {

    return items.map((item, index) =>
      <div key={index} >
        <li className="skill skill-bgColor">
          <div className="skill__icon">
            <IconContext.Provider value={{ color: `${item.color}`, size: "3rem" }}>
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
   <p className="font-style font-stroke">Skills</p>
      <div className='scroller' data-animated='true' >
        <ul className="tag-list scroller__inner">
       
          {isDesktop ? 
           <Item items={skills} /> : <Item items={skill}/>}

        </ul>
      </div>

    </div>
  )
}

export default SkillScrollSlider