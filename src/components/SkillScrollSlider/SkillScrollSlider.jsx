import { useState, useEffect } from "react"
import "./skillScrollSlider.scss"

const SkillScrollSlider = () => {
  const [dataAnimated, setDataAnimated] = useState("false")

useEffect(() => {
  function addAnimation() {
    
  }

  if(!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
    addAnimation();
  }

}, [dataAnimated])


  return (
    <div>
      <h1>Skills</h1> 

    <div className={`scroller data-animated=${dataAnimated} `}>
      <ul className="tag-list scroller__inner">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Angular</li>
        <li>Node.js</li>
        <li>Bootstrap</li>
        <li>Sass</li>
        <li>Git & GitHub</li>
        <li>MongoDB</li>
        <li>Response Design</li>
      </ul>
    </div>



    </div>
  )
}

export default SkillScrollSlider