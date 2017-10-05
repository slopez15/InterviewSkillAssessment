import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/components/App.js';
import registerServiceWorker from './js/other/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
