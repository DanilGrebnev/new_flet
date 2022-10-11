import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const $id = id => document.getElementById(id);

const root = ReactDOM.createRoot($id('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
