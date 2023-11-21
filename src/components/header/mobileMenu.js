import React from 'react'
import "./scss/mobileMenu.scss"
import mobileMenuPattern from "../images/bg-pattern-mobile-nav.svg"

function mobileMenu() {
  return (
    <div className="mobileMenuComponent" >
      <ul className="mobileMenu">
            <li>How we work</li>
            <li>Blog</li>
            <li>Account</li>
            <li className="liView">View plans</li>
        </ul>
        <img src={mobileMenuPattern} alt="decoration pattern"/>
    </div>
  )
}

export default mobileMenu