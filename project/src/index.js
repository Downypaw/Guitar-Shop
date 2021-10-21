import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import './scss/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
