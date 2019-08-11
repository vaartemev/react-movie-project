import React from 'react';
import { MovieInfo } from '../movieInfo/movieInfo';
import { MovieDetails } from '../../containers/movieDetails/movieDetails';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <MovieDetails />
    </div>
  );
};
