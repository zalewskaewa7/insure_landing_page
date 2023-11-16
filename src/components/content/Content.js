import React from 'react'
import "./scss/content.scss"
import mainPhoto from "../images/image-intro-desktop.jpg"

function Content() {
  return (
    <main>
        <div className="mainText">
            <hr />
            <h1>Humanizing your insurance.</h1>

        </div>
        <img src={mainPhoto} alt="people"/>
    </main>
  )
}

export default Content