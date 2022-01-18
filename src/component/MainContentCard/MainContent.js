import React from 'react';
import './style.css';
import imageJumbotron from '../../images/jumbotron.svg';

export default function MainContent() {
  return (
    <main>
      <img src={imageJumbotron} alt='Jumbotron' className='jumbotron-img' />
      <h1>Online Experiences</h1>
      <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
    </main>
  )
}
