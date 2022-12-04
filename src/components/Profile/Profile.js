import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import UserContext from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';

const Profile = ({handleEditUser, handleSignOut, errorMessage}) => {
  const user = useContext(UserContext);
  const { handleChange, handleSubmit, values, errors, isValid, setValues } = useForm(handleEditUser);
  useEffect(() => {
    setValues(user)
  },[user])
  const [isApproved, setIsApproved] = useState(false);
  const handleEditClick = () => {
    setIsApproved(true)
  }

  return (
    <>
      <Header/>
      <section className='account'>
        <form className='account__container' onSubmit={handleSubmit}>
          <h1 className='account__title'>{`Привет, ${user.name}!`}</h1>
          <div className='account__data'>
            <div className='account__text-wrapper account__text-wrapper_name'>
              <p className='account__text-label'>Имя</p>
              <div className='account__input-container'>
              <input
                className='account__input'
                value={values?.name || '' }
                type='text'
                minLength='2'
                maxLength='30'
                required
                onChange={handleChange}
                name='name'
              />
              <span className='account__error'>{errors?.name}</span>
              </div>
            </div>

            <div className='account__text-wrapper account__text-wrapper_email'>
              <p className='account__text-label'>E-mail</p>
              <div className='account__input-container'>
              <input className='account__input'
                     value={values?.email || ''}
                     type='text'
                     minLength='2'
                     maxLength='30'
                     required
                     onChange={handleChange}
                     name='email'
              />
              <span className='account__error'>{errors?.email}</span>
                {errorMessage&&<span className='account__error'>{errors?.email}</span>}
                {!errorMessage&& isApproved && <p className='account__confirm'>Данные изменены</p>}
            </div>
            </div>
          </div>
            <button className={`${isValid ?'account__button account__button_type_edit': 'account__button account__button_type_edit account__button_disabled'}`}
                  type='submit' disabled={!isValid} onClick={handleEditClick} >Редактировать</button>
        </form>
        <button className='account__button account__button_type_signout' onClick={handleSignOut} type='button'>Выйти из аккаунта</button>
      </section>
    </>
  );
};

export default Profile;
