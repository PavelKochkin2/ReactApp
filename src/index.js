import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, subscribe } from './redux/state'

export let rerenderEntireApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>

                <App globalState={state} addPost={addPost} />
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireApp(state);

subscribe(rerenderEntireApp);