import React, {useState} from 'react';
import "./scss/navigation.scss";
import hamburgerIcon from "../images/icon-hamburger.svg"
import hamburgerIconClose from "../images/icon-close.svg"
import MobileMenu from "./mobileMenu"

function Navigation(props) {
const[showMenu, setShowMenu] = useState(false);

 function showMobileMenu(){
  setShowMenu(!showMenu);
}

  return (
    <nav>
        <img  onClick={()=>showMobileMenu()} className="hamburgerIcon" src={showMenu ? hamburgerIconClose : hamburgerIcon} alt={"hamburger icon"}/>
      { 
      showMenu ? <MobileMenu /> : ""
      }  
        <ul >
            <li>How we work</li>
            <li>Blog</li>
            <li>Account</li>
            <li className="liViewPlans">View plans</li>
        </ul>

    </nav>
  )
}

export default Navigation