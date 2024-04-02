import './App.css';
import hero from './images/hero.jpg';
import { RxHamburgerMenu } from 'react-icons/rx';

function App() {
  return (
    <div className='App'>
      <nav className='mainNav'>
        <a href='/' className='brand'>
          <span>💍 J+O</span>
        </a>
        <input id='bmenub' type='checkbox' className='show' />
        <label htmlFor='bmenub' className='burger pseudo button'>
          <RxHamburgerMenu />
        </label>

        <div className='menu'>
          <a href='/'>Our Story</a>
          <a href='/'>Travel & Stay</a>
          <a href='/'>
            <span>Registry</span>
          </a>
          <a href='/'>
            <span>RSVP</span>
          </a>
        </div>
      </nav>
      <img src={hero} alt='hero' style={{ width: '100%', height: '100%' }} />
      <h1>Coming soon!</h1>
    </div>
  );
}

export default App;
