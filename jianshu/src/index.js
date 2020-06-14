import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style'
import { GlobalStyled }  from './style.js';
import './static/iconfont/iconfont.css'


ReactDOM.render(
  // <React.StrictMode>
  <div>
     <GlobalStyled />

<App />
  </div>,
       
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
