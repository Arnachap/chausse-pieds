import React from 'react';

const Menu = () => {
  return (
    <div id='menu'>
      <ul>
        <li>
          <a href='#accueil' class='active'>
            <span></span>
          </a>

          <div class='menu-tooltip'>Accueil</div>
        </li>

        <li>
          <a href='#services'>
            <span></span>
          </a>

          <div class='menu-tooltip'>Services</div>
        </li>

        <li>
          <a href='#noustrouver'>
            <span></span>
          </a>

          <div class='menu-tooltip'>Nous trouver</div>
        </li>

        <li>
          <a href='#contact'>
            <span></span>
          </a>

          <div class='menu-tooltip'>Contact</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
