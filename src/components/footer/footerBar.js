import React from 'react'
import "./scss/footerBar.scss"
import logo from "../images/logo.svg"
import facebookIcon from "../images/icon-facebook.svg"
import instagramIcon from "../images/icon-instagram.svg"
import twitterIcon from "../images/icon-twitter.svg"
import pinterestIcon from "../images/icon-pinterest.svg"


function footerBar() {

    const icons = [
        {src: facebookIcon, name:"facebook icon"},
        {src: instagramIcon, name:"instagram icon"},
        {src: twitterIcon, name:"twitter icon"},
        {src: pinterestIcon, name:"pinterest icon"},


    ]
  return (
    <div className="footerBar">
        <img src={logo} alt="logo" />
        <ul className="icons">
        {     icons.map((icon) => 
        <li key={icon.name}><img src={icon.src} alt={icon.name}/></li>
        )   
        }       
         </ul>
         <hr />
    </div>
  )
}

export default footerBar