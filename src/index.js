import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import state from './redux/state' 


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <App globalState = {state} />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);