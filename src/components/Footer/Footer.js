import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__description'>Только лучшие фильмы</p>
      <div className='footer__bottom'>
        <p className='footer__copyright'>© 2022</p>
        <ul className='footer__socials'>
          <li className='footer__link'><a href='https://github.com/Quasarrrt?tab=repositories' target="_blank" className='footer__social-link'>Github</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
