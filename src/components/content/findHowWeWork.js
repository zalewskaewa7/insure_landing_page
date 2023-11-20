import React from 'react'
import "./scss/findHowWeWork.scss"
import rightPattern from "../images/bg-pattern-how-we-work-desktop.svg"
import rightPatternMobile from "../images/bg-pattern-how-we-work-mobile.svg"


function findHowWeWork() {
  return (
    <div className="componentFindHowWeWork" >
      <h2>Find out more about how we work</h2>
      <button>How we work</button>
      <img src={rightPattern} alt="right pattern" className="rightPattern"/>
      <img src={rightPatternMobile} alt="right pattern" className="rightPatternMobile"/>

      </div>
  )
}

export default findHowWeWork