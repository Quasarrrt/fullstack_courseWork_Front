import React, { useState } from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import './Navigation.css'

const Navigation = ({}) => {
  let location = useLocation();
  let isLocation = location.pathname === '/';
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function burgerOnClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <nav className='nav'>
      <div className={isBurgerMenuOpen?'nav__burger nav__burger_opened':'nav__burger'} onClick={burgerOnClick}/>
      <div className={isBurgerMenuOpen?'nav__links':''}>
        <div className={isBurgerMenuOpen?'nav__links-wrapper':''}>
          {isLocation ? (<>
            <Link to='/signup' className='nav__link nav__link_type_register'>Регистрация</Link>
            <Link to='/signin' className=' nav__link nav__link_type_login'>Войти</Link>
            </>
            ):<>
            <NavLink activeClassName="nav__link_active" to='/' className={isBurgerMenuOpen ?' nav__link nav__link_show nav__link_type_main':'nav__link nav__link_type_main'}>Главная</NavLink>
            <NavLink activeClassName="nav__link_active" to='/movies' className={isBurgerMenuOpen ?'nav__link nav__link_show': 'nav__link'}>Фильмы</NavLink>
            <NavLink activeClassName="nav__link_active" to='/saved-movies' className={isBurgerMenuOpen ?'nav__link nav__link_show': 'nav__link'}>Сохранённые фильмы</NavLink>
            <NavLink to='/profile' className={isBurgerMenuOpen ?'nav__link nav__link_type_account nav__link_show':'nav__link nav__link_type_account'}>Аккаунт</NavLink>
          </> }
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
