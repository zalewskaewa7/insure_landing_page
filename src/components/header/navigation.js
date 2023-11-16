import React from 'react';
import "./scss/navigation.scss";

function navigation() {
  return (
    <nav>
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