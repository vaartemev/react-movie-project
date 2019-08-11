import React from 'react';
import { MovieItem } from '../movieItem/movieItem';
import './resultBody.scss';

export const ResultBody = () => {
  return (
    <div className="content">
      <div className="films-list">
        <MovieItem
          title="Star Wars"
          src="https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg"
          year="2008"
          genre="comedy"
        />
        <MovieItem
          title="Guardian Galaxy"
          src="https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg"
          year="1996"
          genre="drama"
        />
        <MovieItem
          title="Spider Man"
          src="https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"
          year="2004"
          genre="comedy"
        />
        <MovieItem
          title="Batman"
          src="https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
          year="2010"
          genre="triller"
        />
        <MovieItem
          title="Black Panther"
          src="https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg"
          year="2008"
          genre="comedy"
        />
        <MovieItem
          title="Star Wars"
          src="https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg"
          year="2008"
          genre="comedy"
        />
      </div>
    </div>
  );
};
