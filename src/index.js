import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state'

let rerenderEntireApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>

                <App globalState={state} addPost={store.addPost.bind(store)} />
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireApp(store.getState());

store.subscribe(rerenderEntireApp); //index subscribes on changes in state