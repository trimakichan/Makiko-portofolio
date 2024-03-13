
import { IconContext } from "react-icons";
import './skillItem.scss'

const SkillItem = ({items}) => {

  return items.map((item, index) =>
    <div key={index}>
      <div className="skill skill-bgColor">
        <div className="skill__icon">
          <IconContext.Provider value={{ color: `${item.color}`, size: "3rem" }}>
            {item.icon}
          </IconContext.Provider>
        </div>
        <div className="skill__name">{item.skill}</div>
      </div>
    </div>
  )
}

export default SkillItem