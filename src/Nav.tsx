import { RxHamburgerMenu } from 'react-icons/rx';

export const Nav = () => {
  return (
    <nav className='mainNav'>
      <a href='/' className='brand'>
        <span>💍 J+O</span>
      </a>
      <input id='bmenub' type='checkbox' className='show' />
      <label htmlFor='bmenub' className='burger pseudo button'>
        <RxHamburgerMenu />
      </label>

      <div className='menu'>
        <a href='/' className='pseudo button'>
          Our Story
        </a>
        <a href='/' className='pseudo button'>
          Travel & Stay
        </a>
        <a href='/' className='pseudo button'>
          <span>Registry</span>
        </a>
        <a href='/' className='pseudo button'>
          <span>RSVP</span>
        </a>
      </div>
    </nav>
  );
};
