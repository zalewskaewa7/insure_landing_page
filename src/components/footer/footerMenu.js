import React from 'react'
import "./scss/footerMenu.scss"

function footerMenu() {
  return (
    <ol>
      <li>  Our company
        <ul>
        <li>How we work</li>
        <li>Why Insure?</li>
        <li>View plans</li>
        <li>Reviews</li>
        </ul>
      </li>
      <li>Help me
      <ul>
        <li>FAQ</li>
        <li>Terms of use</li>
        <li>Privacy policy</li>
        <li>Cookies</li>
      </ul>
      </li>
      <li>Contact
      <ul>
        <li>Sales</li>
        <li>Support</li>
        <li>Live chat</li>
        </ul>
      </li>
      <li>Others
      <ul>
        <li>Careers</li>
        <li>Press</li>
        <li>Licenses</li>
        </ul>
      </li>

    </ol>
  )
}

export default footerMenu