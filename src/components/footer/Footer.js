import React from 'react'
import "./scss/footer.scss"
import FooterBar from "./footerBar"
import FooterMenu from './footerMenu'
import patternFooter from "../images/bg-pattern-footer-desktop.svg"


function Footer() {
  return (
    <footer>       
         <img src={patternFooter} className="patternFooter"/>

        <FooterBar />
        <FooterMenu />

    </footer>
    
  )
}

export default Footer