import {Parse} from "parse";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Keys from "./Keys.key";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
Parse.initialize(Keys.appId);
Parse.serverURL = Keys.serverURL;
