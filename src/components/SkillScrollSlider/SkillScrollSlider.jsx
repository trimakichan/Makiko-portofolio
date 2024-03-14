import "./skillScrollSlider.scss";
import { dataSkills } from "../data/data-skills";
import { IconContext } from "react-icons";

const IconItem = ({items}) => {

  return items.map((item, index) =>
  <div key={index}>
        <IconContext.Provider value={{ color: `${item.color}`, size: "4rem" }}>
          {item.icon}
        </IconContext.Provider>
  </div>
)
}


const SkillScrollSlider = () => {

  const skillDuplicated = dataSkills.concat(dataSkills, dataSkills);

  return (
      <div className="scroller">
      
        <div className='scroller__container' >
          <div className="scroller__inner">
            <IconItem items={skillDuplicated} />
          </div>
        </div>
      </div>
  )
}


export default SkillScrollSlider




