import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import { Snake } from './snake/ui';

const snake = {
  dummy: "something",
  children: [
    { name: "head", dir: "up", coord: { top: 100, left: 200 } },
    { name: "tail", dir: "down", coord: { top: 200, left: 200 } },
    { name: "body", dir: "down", coord: { top: 150, left: 200 } },

  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Snake data={snake} />

  </React.StrictMode>
);


reportWebVitals();
