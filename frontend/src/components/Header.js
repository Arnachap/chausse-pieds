import React from 'react';
import logo from '../img/logo-white.png';

const Header = () => {
  return (
    <header>
      <div id='intro'>
        <img src={logo} id='logo-header' alt='Logo Chausse Pieds Blanc' />

        <h1>Cordonnerie / Pressing à Sneakers / Clés / Multiservices</h1>

        <a
          className='intro-logo'
          href='https://www.instagram.com/chausse.pieds/'
          target='_blank'
        >
          <i className='fab fa-instagram'></i>
        </a>

        <a
          className='intro-logo'
          href='https://www.facebook.com/Chausse-Pieds-106818545156437/'
          target='_blank'
        >
          <i class='fab fa-facebook-square'></i>
        </a>

        <a className='intro-logo' href='mailto:contact@chaussepieds.fr'>
          <i class='far fa-envelope'></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
