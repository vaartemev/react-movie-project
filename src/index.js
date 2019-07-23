import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/header/header';
import { Additional } from './components/additional/additional';
import { MoviesList } from './components/moviesList/moviesList';
import { Footer } from './components/footer/footer';

import './main.scss';

const App = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <Additional foundedMovies="8" />
      <MoviesList />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
