import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/header/header';
import { Additional } from './components/additional/additional';
import { MoviesList } from './components/moviesList/moviesList';
import { Footer } from './components/footer/footer';
import { ErrorBoundary } from './containers/errorBoundary/errorBoundary';

import './main.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="content-wrapper">
        <Header />
        <Additional foundedMovies="8" />
        <MoviesList />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
