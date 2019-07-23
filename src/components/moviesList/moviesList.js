import React from 'react';
import { MovieItem } from '../movieItem/movieItem';
import './moviesList.scss';

export const MoviesList = () => {
  return (
    <div className="content">
		<div className="films-list">
			<MovieItem src='https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'/>
			<MovieItem src='https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg'/>
			<MovieItem src='https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg'/>
			<MovieItem src='https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg'/>
			<MovieItem src='https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg'/>
			<MovieItem src='https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg'/>
		</div>
    </div>
  )
}
