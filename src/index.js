import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js'
import {Provider} from 'react-redux';
import {configureStore} from './store';

import './main.scss';

const initialState = {};
const store = configureStore(initialState);

const rootElement = document.getElementById('content-wrapper');
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  , rootElement);
