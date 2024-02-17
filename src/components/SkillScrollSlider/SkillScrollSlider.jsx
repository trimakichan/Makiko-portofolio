// import { useState, useEffect } from "react"
import "./skillScrollSlider.scss"

const SkillScrollSlider = () => {
//   const [dataAnimated, setDataAnimated] = useState("false")

// useEffect(() => {
//   if(!window.matchMedia("(prefers-reduced-motion: reduce").matches) {

//     addAnimation();
//   }

//   function addAnimation() {
//     setDataAnimated(!dataAnimated);
//   }



// }, [dataAnimated])
const skillArray = ['Html', 'CSS', 'JavaScript', 'React', 'Angular', 'Node.js', 'SASS', 'Boostrap', 'Git & GitHub', 'MongoDB', "Response Design"]
const skillArray2 = skillArray.concat(skillArray)

// eslint-disable-next-line react/prop-types
const Item = ({items}) => {
    return items.map(item => <li key={item}>{item}</li> )
}


  return (
    <div>
      <h1>Skills</h1> 

    <div className='scroller' data-animated='true' >
      <ul className="tag-list scroller__inner">
        <Item  items={skillArray2}/>
        {/* <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Node.js</li>
        <li>Bootstrap</li>
        <li>Sass</li>
        <li>Git & GitHub</li>
        <li>MongoDB</li>
        <li>Response Design</li> */}
      </ul>
    </div>



    </div>
  )
}

export default SkillScrollSlider