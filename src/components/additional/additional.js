import React from 'react';
import './additional.scss';

export const Additional = ({ foundedMovies }) => {
  return (
    <nav className="additional">
      <span className="founded">{foundedMovies} movies founded</span>
      <div className="sort">
        <span className="sort__title">Sort by</span>
        <a href="" className="sort__toggle sort__toggle-active sort__release">
          release date
        </a>
        <a href="" className="sort__toggle sort__rating">
          rating
        </a>
      </div>
    </nav>
  );
};
