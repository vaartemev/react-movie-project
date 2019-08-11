import React, {useEffect} from 'react';
import { Logo } from '../logo/logo';
import { SearchButton } from '../searchButton/searchButton';
import { AboutMovie } from '../aboutMovie/aboutMovie';


import './movieInfo.scss';

export const MovieInfo = ({movie,fetchMovie}) => {
  useEffect(() => {
    fetchMovie(5);
  }, []);
  return (
    <div>
      <div className="movieInfo__header">
        <Logo />
        <SearchButton classNames="search__button search__button-second button" />
      </div>
      
      {typeof movie !== 'undefined' ? <AboutMovie movie={movie} /> : false}
      
    </div>
  );
};
