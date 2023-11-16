import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import './scss/header.scss';

function Header() {
  return (
    <header>
        <Logo />
        <Navigation />
    </header>
  )
}

export default Header