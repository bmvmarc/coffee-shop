import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <span>the font should work</span>
    </React.StrictMode>,
  document.getElementById('root')
);

