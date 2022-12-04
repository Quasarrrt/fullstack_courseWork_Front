import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

const Header = () => {
  let location = useLocation();
  let isLocation = location.pathname !== '/';
    return (
      <header className={isLocation?'header header_black':'header'}>
          <Link to='/' className='header__logo-link'><img src={logo} className='header__logo' alt='лого'/></Link>
          <div className='header__right'>
            <Navigation/>
          </div>
      </header>
    );
};

export default Header;

