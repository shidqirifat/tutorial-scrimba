import React from 'react';
import './style.css';

export default function Profile() {
  return (
    <div className='social-container'>
      <a href='#twitter'><i className="fab fa-twitter-square social-icon"></i></a>
      <a href='#facebook'><i className="fab fa-facebook-square social-icon"></i></a>
      <a href='#instagram'><i className="fab fa-instagram-square social-icon"></i></a>
      <a href='#github'><i className="fab fa-github-square social-icon"></i></a>
    </div>
  )
}
