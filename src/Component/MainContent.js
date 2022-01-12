import React from 'react'
import reactLogo from '../logo.svg';

export default function MainContent() {
  return (
    <main>
      <h1>Fun Fact About React</h1>
      <ul className='list-items'>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={reactLogo} alt='Background' className='bg-image' />
    </main>
  )
}
