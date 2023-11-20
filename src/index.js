import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import { SnakeHead, SnakeTail } from './snake/ui';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnakeTail top={100} left= {200} name='tail'/>
    <SnakeHead top={250} left= {200} name='head'/>
  
  </React.StrictMode>
);


reportWebVitals();
