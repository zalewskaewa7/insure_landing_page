import React from 'react'
import logoimg from "../images/logo.svg"
import "./scss/logo.scss"

function logo() {
  return (
    <div className="logoComponent">
        <img className="logoimg" src={logoimg} alt="logo" />
    </div>
  )
}

export default logo