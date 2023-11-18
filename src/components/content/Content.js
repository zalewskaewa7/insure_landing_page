import React from 'react'
import "./scss/content.scss"
import ContentWeAreDifferent from './contentWeAreDifferent'
import mainPhoto from "../images/image-intro-desktop.jpg"
import leftPattern from "../images/bg-pattern-intro-left-desktop.svg"
import rightPattern from "../images/bg-pattern-intro-right-desktop.svg"
import FindHowWeWork from "./findHowWeWork.js"

function Content() {
  return (
    <main>
      <div className="mainInformation">
        <div className="mainText">
            <hr />
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise 
              and technology to help you find the plan that’s right for you. Ensure you 
              and your loved ones are protected.
            </p>
            <button>View plans</button>

        </div>
        <img className="mainPhoto" src={mainPhoto} alt="people"/>
        <img src={leftPattern} alt="left pattern" className="leftPattern"/>
        <img src={rightPattern} alt="right pattern" className="rightPattern" />
      </div>
        
        <ContentWeAreDifferent />
        <FindHowWeWork />
    </main>
  )
}

export default Content