import React from 'react';
import './style.css';
import logo from '../../images/shidqi.png';

export default function Profile() {
  return (
    <div className='profile-container'>
      <img src={logo} alt='Profile' className='profile-image' />
      <div className='profile-content'>
        <h3>Shidqi Rifat Pangestu</h3>
        <h4>Frontend Developer</h4>
      </div>
      <div className='profile-social'>
        <button className='email-btn'><a href='mailto:rifatpangestu87@gmail.com'><i className="fas fa-envelope email-icon"></i>Email</a></button>
        <button className='linkedin-btn'><a href='https://www.linkedin.com/in/shidqirifatpangestu/'><i className="fab fa-linkedin linkedin-icon"></i>LinkedIn</a></button>
      </div>
    </div>
  )
}
