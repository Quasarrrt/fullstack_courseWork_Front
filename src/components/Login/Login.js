import React from 'react';
import '../Registration/Registration.css';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';

const Login = ({handleLogin, errorMessage}) => {
  const { handleChange, handleSubmit, values, errors, isValid } = useForm(handleLogin);
  return (
    <section className='registration'>
      <form className='registration__form' onSubmit={handleSubmit}>
        <img alt='лого' src={logo} className='registration__logo'/>
        <h1 className='registration__title'>Рады видеть!</h1>
        <fieldset className='registration__fieldset'>
          <label className='registration__label'>E-mail
            <input type='email' className='registration__input' required minLength='4' name='email' value={values?.email || ''} onChange={handleChange}/>
            {errors?.email && <p className='registration__input-error'>{errors.email}</p>}
          </label>
          <label className='registration__label'>Пароль
            <input type='password' className='registration__input'  required minLength='8' name='password' value={values?.password || ''} onChange={handleChange}/>
            {errors?.password && <p className='registration__input-error'>{errors.password}</p>}
          </label>
        </fieldset>
        <span className='registration__input-error'>{errorMessage}</span>
        <button type='submit' className={!isValid ? 'registration__submit_disabled registration__submit':'registration__submit'}>Войти</button>
        <p className='registration__text'>Еще не зарегестрированы?   <Link to='/signup' className='registration__link'>Регистрация</Link></p>
      </form>
    </section>
  );
};

export default Login;
