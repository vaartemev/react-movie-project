import React from 'react';
import './movieItem.scss';

export const MovieItem = (props) => {
  return (
    <div className="movie">
					<img src={props.src} className="movie__thumbnail"
						alt="Guardian" />
					<div className="movie__info">
						<a className="movie__title">Guardian galaxy</a>
						<span className="movie__year">2004</span>

						<div className="movie__genre">
							Comedy
						</div>
					</div>
				</div>
  )
}