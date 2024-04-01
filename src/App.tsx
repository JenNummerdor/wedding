import React from 'react';
import logo from './logo.svg';
import './App.css';
import hero from './images/hero.jpg';

function App() {
  return (
    <div className='App'>
      <nav className='demo'>
        <a href='#' className='brand'>
          <span>Our Story</span>
        </a>
        <a href='#' className='brand'>
          <span>Travel & Stay</span>
        </a>
        <a href='#' className='brand'>
          <span>Registry</span>
        </a>
      </nav>
      <img src={hero} alt='hero' style={{ width: '100%', height: '100%' }} />
      <h1>Coming soon!</h1>
    </div>
  );
}

export default App;
