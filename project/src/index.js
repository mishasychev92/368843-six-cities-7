import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PLACES = ['firstPlace', 'secondPlace', 'thirdPlace', 'fourthPlace', 'fifthPlace'];

ReactDOM.render(
  <React.StrictMode>
    <App places = {PLACES} />
  </React.StrictMode>,
  document.getElementById('root'));
