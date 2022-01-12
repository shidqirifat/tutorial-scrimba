import React from 'react'
import reactLogo from '../logo.svg';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className='logo-container'>
          <img src={reactLogo} alt='React Logo' className='nav-logo' />
          <h2>ReactFacts</h2>
        </div>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  )
}
