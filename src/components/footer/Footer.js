import React from 'react'
import "./scss/footer.scss"
import FooterBar from "./footerBar"
import FooterMenu from './footerMenu'
import patternFooter from "../images/bg-pattern-footer-desktop.svg"
import patternFooterMobile from "../images/bg-pattern-footer-mobile.svg"


function Footer() {
  return (
    <footer>       
         <img src={patternFooter} className="patternFooter" alt="footer pattern"/>
         <img src={patternFooterMobile} className="patternFooterMobile" alt="footer pattern"/>


        <FooterBar />
        <FooterMenu />

    </footer>
    
  )
}

export default Footer