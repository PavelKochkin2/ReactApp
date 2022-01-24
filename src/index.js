import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import state from './redux/state' 
import {addPost} from './redux/state' 
import {rerenderEntireApp} from './render'


rerenderEntireApp(state);
