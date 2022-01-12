import React from 'react';
import Navbar from './Component/Navbar';
import MainContent from './Component/MainContent';
import './style/main.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
}