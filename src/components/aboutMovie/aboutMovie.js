import React from 'react';
import { MovieTitle } from '../movieTitle/movieTitle';
import { Thumbnail } from '../thumbnail/thumbnail';

import './aboutMovie.scss';

export const AboutMovie = ({
  thumbnailPath,
  title,
  rating,
  subtitle,
  year,
  minutes,
  text
}) => {
  return (
    <div className="about">
      <div className="about__img">
        <Thumbnail src={thumbnailPath} className="about__thumbnail" />
      </div>
      <div className="about__content">
        <MovieTitle className="about__title" title={title} />
        <div className="about__rating">4.1</div>
        <h4 className="about__subtitle">{subtitle}</h4>
        <div className="about__additional">
          <h5 className="release-date">{year}</h5>
          <h5 className="runtime">{minutes} min</h5>
        </div>
        <p className="about__text">{text}</p>
      </div>
    </div>
  );
};
