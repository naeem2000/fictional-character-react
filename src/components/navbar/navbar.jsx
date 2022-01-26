import React from 'react';
import './Navbar.scss';

export default function navbar() {
  return (
    <div className='NavBar'>
          <div id="navigation-bar">
    <nav>
      <ul>
        <li><a href="#about" id="logo">About</a></li>
        <li><a href="#background" id="logo">Background</a></li>
        <li><a href="#" id="logo">Personality</a></li>
        <li><a href="#" id="logo">Appearance</a></li>
        <li><a href="#" id="logo">Abilities</a></li>
        <li><a href="#" id="logo">Sharingan</a></li>
        <li><a href="#" id="logo">Rinnegan</a></li>
      </ul>
    </nav>
  </div>
    </div>
  );
}

