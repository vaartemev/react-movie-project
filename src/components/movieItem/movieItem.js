import React from 'react';
import { MovieTitle } from '../movieTitle/movieTitle';
import './movieItem.scss';

export const MovieItem = ({ src, title, year, genre }) => {
  return (
    <div className="movie">
      <img src={src} className="movie__thumbnail" alt="Guardian" />

      <div className="movie__info">
        <MovieTitle className="movie__title" title={title} />

        <span className="movie__year">{year}</span>
        <div className="movie__genre">{genre}</div>
      </div>
    </div>
  );
};
