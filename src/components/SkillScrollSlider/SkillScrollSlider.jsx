import "./skillScrollSlider.scss";
import { dataSkills } from "../data/data-skills";
import SkillItem from "../SkillItem/SkillItem";


const SkillScrollSlider = () => {

  const skillDuplicated = dataSkills.concat(dataSkills, dataSkills);

  return (
      <div className="scroller">
        <div className='scroller__container' >
          <div className="scroller__inner">
            <SkillItem items={skillDuplicated} />
          </div>
        </div>
      </div>
  )
}


export default SkillScrollSlider




