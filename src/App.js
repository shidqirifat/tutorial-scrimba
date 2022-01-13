import React from 'react';
import './main.css';
import Profile from './Component/ProfileCard/Profile';
import About from './Component/AboutCard/About';
import Social from './Component/SocialCard/Social';

function App() {
  return (
    <div className="container">
      <Profile />
      <About />
      <Social />
    </div>
  );
}

export default App;
