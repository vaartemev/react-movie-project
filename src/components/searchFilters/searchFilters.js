import React from 'react';
import { SearchButton } from '../searchButton/searchButton';

import './searchFilters.scss';

export const SearchFilters = () => {
  return (
    <div className="filters">
      <div className="filters__title">Search by</div>
      <div className="filters__buttons">
        <a className="filters__button filters__button-active button filter-by-title">Title</a>
        <a className="filters__button button filter-by-genre">Genre</a>
      </div>
      <SearchButton />
  </div>
  )
}
