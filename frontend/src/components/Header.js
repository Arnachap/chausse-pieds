import React from 'react'
import logo from '../img/logo-white.png'

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
          <i className='fab fa-facebook-square'></i>
        </a>

        <a className='intro-logo' href='mailto:contact@chaussepieds.fr'>
          <i className='far fa-envelope'></i>
        </a>
      </div>

      <div className='read-more'>
        <p>En savoir plus...</p>

        <a href='#services'>
          <i className='fa fa-chevron-down fa-3x bounce'></i>
        </a>
      </div>
    </header>
  )
}

export default Header
