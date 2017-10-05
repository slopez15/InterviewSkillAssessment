import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './css/index.css';
import App from './js/components/App.js';
import registerServiceWorker from './js/other/registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
