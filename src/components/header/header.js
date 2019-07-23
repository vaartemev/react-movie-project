import React from 'react';
import { MovieInfo } from '../movieInfo/movieInfo';
import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <MovieInfo />
    </div>
  );
};
