import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({movies, savedMovies, handleSaveMovie, handleDeleteMovie, isLoading, countOfMovies, handleAddMovies}) => {
  let location = useLocation();
  if(isLoading){
    return <Preloader />
  }
  if (!movies?.length || !movies) return <span className='card__text'>Ничего не найдено</span>
  return (
    <>
    <ul className='card__list'>
      {location.pathname !== '/saved-movies' ?
        movies.slice(0, countOfMovies).map((movie) => <MoviesCard movie={movie} key={movie.id} handleDeleteMovie={handleDeleteMovie} handleSaveMovie={handleSaveMovie} movies={movies} savedMovies={savedMovies} />):
        movies.map((movie) => <MoviesCard handleDeleteMovie={handleDeleteMovie} handleSaveMovie={handleSaveMovie} movie={movie} key={movie?.id || movie._id} movies={movies} savedMovies={savedMovies}/>)}
    </ul>
      {location.pathname !== '/saved-movies' && movies.length>countOfMovies && <button className='card__more-btn' onClick={handleAddMovies}>Ещё</button>}

    </>
  );
};

export default MoviesCardList;
