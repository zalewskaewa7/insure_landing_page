import React from 'react'
import "./scss/findHowWeWork.scss"
import rightPattern from "../images/bg-pattern-how-we-work-desktop.svg"

function findHowWeWork() {
  return (
    <div className="componentFindHowWeWork" >
      <h2>Find out more about how we work</h2>
      <button>How we work</button>
      <img src={rightPattern} alt="right pattern" />
      </div>
  )
}

export default findHowWeWork