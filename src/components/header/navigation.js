import React from 'react';
import "./scss/navigation.scss";
import hamburgerIcon from "../images/icon-hamburger.svg"

function navigation() {
  return (
    <nav>
        <img src={hamburgerIcon} alt={"hamburger icon"}/>
        <ul>
            <li>How we work</li>
            <li>Blog</li>
            <li>Account</li>
            <li className="liViewPlans">View plans</li>
        </ul>

    </nav>
  )
}

export default navigation