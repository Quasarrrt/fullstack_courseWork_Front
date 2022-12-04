import React from 'react';
import { useHistory  } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();
  return (
    <section className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__text'>Страница не найдена</p>
      <button className='notfound__btn' onClick={() => history.goBack()}>Назад</button>
    </section>
  );
};

export default NotFound;
