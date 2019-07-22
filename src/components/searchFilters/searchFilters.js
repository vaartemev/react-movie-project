import React from 'react';
import { SearchButton } from '../searchButton/searchButton';

export const SearchFilters = () => {
  return (
    <div className="filters">
      <div className="filters__title">Search by</div>
      <div className="filters__buttons">
        <input type="radio" value="Title" className="filters__button filters__button-active button filter-by-title" />
        <input type="radio" value="Genre" className="filters__button button filter-by-genre" />
      </div>
      <SearchButton />
  </div>
  )
}
