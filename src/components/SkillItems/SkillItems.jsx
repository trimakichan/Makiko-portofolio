
import './skillItems.scss'
import SkillItem from '../SkillItem/SkillItem'
import {dataSkills} from '../data/data-skills';


const SkillItems = () => {
    return (
        <div className='skills'>
            <p className="font-style font-stroke">My Skills</p>
            <div className='skills__inner' >

                <SkillItem items={dataSkills} />
            </div>
        </div>
    )
}

export default SkillItems
