import React from 'react';
import './style.css';

export default function Header() {
  return (
    <header className='nav-container'>
      <nav>
        <img src='./images/logo.svg' alt='Earth Logo' className='logo-nav' />
        <h3>my travel journal</h3>
      </nav>
    </header>
  );
}
