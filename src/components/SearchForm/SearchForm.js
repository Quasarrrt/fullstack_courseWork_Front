import React, { useState, useRef } from 'react';
import './SearchForm.css';
import logo from '../../images/searchicon.svg';

const SearchForm = ({movies, handleSearchSubmit }) => {
  const [value, setValue] = useState('')
  const checkboxRef = useRef();
  const onCheck = (e) => {
    handleSearchSubmit(movies, value, e.target.checked )
  }
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchSubmit(movies, value, checkboxRef.current.checked)
  }

  return (
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='search-form__container'>
            <img className='search-form__image' src={logo} alt='поиск'/>
            <input type='text' placeholder='Фильм' className='search-form__input' value={value} onChange={handleChange} required/>
            <button type='submit' className='search-form__submit'>Найти</button>
          </div>
          <label className='search-form__checkbox-wrapper'>
            <div className='search-form__checkbox-container'>
              <input type='checkbox' className='search-form__checkbox' onChange={(e)=>onCheck(e)} ref={checkboxRef}    />
              <span className='search-form__switcher'/>
            </div>
            <p className='search-form__text'>Короткометражки</p>
          </label>
        </form>
  );
};

export default SearchForm;
