import React from 'react';
import { Logo } from '../logo/logo';
import { SearchButton } from '../searchButton/searchButton';
import { AboutMovie } from '../aboutMovie/aboutMovie';

import './movieInfo.scss';

export const MovieInfo = () => {
  return (
    <div>
      <div className="movieInfo__header">
        <Logo />
        <SearchButton classNames="search__button search__button-second button" />
      </div>
      <AboutMovie
        thumbnailPath="https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg"
        title="Hello"
        rating="5.0"
        subtitle="Hello2"
        year="1994"
        minutes="192"
        text="Write components implementing HTML markup for required design (see
          images at the beginning of the document). For this part, no need
          to implement API calls and routing, the task can be done with
          mocked data. Use ErrorBoundary component for catching and
          displaying errors. You could create one component and wrap all
          your application, or use several components. Write components
          implementing HTML markup for required design (see images at the
          beginning of the document). For this part, no need to implement
          API calls and routing, the task can be done with mocked data. Use
          ErrorBoundary component for catching and displaying errors. You
          could create one component and wrap all your application, or use
          several components."
      />
    </div>
  );
};
