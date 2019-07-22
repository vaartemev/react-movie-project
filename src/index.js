import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
