import React, {useEffect} from 'react';
import { MovieTitle } from '../movieTitle/movieTitle';
import { Thumbnail } from '../thumbnail/thumbnail';

import './aboutMovie.scss';

export const AboutMovie = ({movie: {poster_path, title, tagline, vote_average, overview, release_date, runtime}}) => {
    return (
    <div className="about">
      <div className="about__img">
        <Thumbnail src={poster_path} className="about__thumbnail" />
      </div>
      <div className="about__content">
        <MovieTitle className="about__title" title={title} />
        <div className="about__rating">{vote_average}</div>
        <h4 className="about__subtitle">{tagline}</h4>
        <div className="about__additional">
          <h5 className="release-date">{new Date(release_date).getFullYear()}</h5>
          <h5 className="runtime">{runtime} min</h5>
        </div>
        <p className="about__text">{overview}</p>
      </div>
    </div>
  );  
};
