import React from 'react';
import './style.css';
import logoNav from '../../logo/airbnb.svg';

export default function Header() {
  return (
    <header className='nav-container'>
      <nav>
        <img src={logoNav} alt='Air Bnb Logo' className='logo-nav' />
      </nav>
    </header>
  );
}
