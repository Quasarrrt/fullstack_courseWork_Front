import React from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm'
import logo from '../../images/logo.svg';

const Registration = ({handleRegister, errorMessage}) => {
  const { handleChange, handleSubmit, values, errors, isValid } = useForm(handleRegister);

  return (
    <section className='registration'>
      <form className='registration__form' onSubmit={handleSubmit}>
        <img alt='лого' src={logo} className='registration__logo'/>
        <h1 className='registration__title'>Добро пожаловать!</h1>
        <fieldset className='registration__fieldset'>
          <label className='registration__label'>Имя
            <input type='text' className='registration__input' name='name' value={values?.name || ''} required minLength='2' onChange={handleChange}/>
            {errors?.name && <p className='registration__input-error'>{errors.name}</p>}
          </label>
          <label className='registration__label'>E-mail
            <input type='email' className='registration__input' name='email' value={values?.email || ''} required minLength='4'
                   onChange={handleChange}/>
            {errors?.email && <p className='registration__input-error'>{errors.email}</p>}
          </label>
          <label className='registration__label'>Пароль
            <input type='password' className='registration__input' name='password' required minLength='8'  value={values?.password || ''}
                   onChange={handleChange}/>
            {errors?.password && <p className='registration__input-error'>{errors.password}</p>}
          </label>
        </fieldset>
        <span className='registration__input-error'>{errorMessage}</span>
        <button type='submit' className={!isValid ? 'registration__submit_disabled registration__submit':'registration__submit'} disabled={!isValid}>Зарегистрироваться</button>
        <p className='registration__text'>Уже зарегистрированы? <Link to='/signin'
                                                                      className='registration__link'>Войти</Link></p>
      </form>
    </section>
  );
};

export default Registration;
