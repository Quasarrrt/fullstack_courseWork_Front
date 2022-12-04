import React from 'react';
import './MoviesCard.css';
import { IMG_URL } from '../../utils/config';
import {useLocation} from 'react-router-dom';

const MoviesCard = ({movie, handleSaveMovie, handleDeleteMovie, savedMovies =[]}) => {
  let location = useLocation();
  let isSavedMovies = location.pathname === '/saved-movies';
  let imageUrl;
  const buttonClass = () => {
    if (isSavedMovies){
      return 'card__button card__button_delete'
    }
    else if (checkSaveMovie()){
      return 'card__button card__button_saved'
    }
    else{
      return 'card__button'
    }
  }
  if (isSavedMovies) {
    imageUrl=movie.image
  }
  else {
    imageUrl = `${IMG_URL}${movie.image?.url}`;
  }
  const getTime = () => {
    if (movie.duration > 60) {
      return (movie.duration / 60 | 0) + " ч " + movie.duration % 60 + " м";
    }
    if (movie.duration === 60) {
      return (movie.duration / 60) + " ч";
    } else {
      return movie.duration + " м";
    }
  }
  const checkSaveMovie = () => {
    if (savedMovies.length === 0) return false
    return savedMovies.find((savedMovie)=> savedMovie.nameRU === movie.nameRU)
  }

  const onSaveMovie = () => {
    const film = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: imageUrl,
      trailer: movie.trailerLink,
      thumbnail: `${IMG_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    isSavedMovies = true
    handleSaveMovie(film)
  }
  const onDeleteMovie = () => {
    let film =checkSaveMovie()
    handleDeleteMovie(film);
    isSavedMovies = false
  }
  const onClick = () => {
    if (checkSaveMovie()){
      onDeleteMovie()
    }
    else {
      onSaveMovie()
    }
  }
  return (
    <li className='card__item'>
      <article className='card'>
        <div className='card__top'>
          <p className='card__title'>{movie?.nameRU}</p>
          <p className='card__duration'>{getTime()}</p>
        </div>
        <a className='card__link' href={movie.trailer || movie.trailerLink} target='_blank'>
          <img className='card__img' alt='фото фильма' src={imageUrl}/>
        </a>
        <button onClick={onClick}
                className={buttonClass()}
                type='button'>{!checkSaveMovie() && 'Сохранить'}</button>
      </article>
    </li>
  );
};

export default MoviesCard;
