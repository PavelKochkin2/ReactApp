import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore'
import { Provider } from 'react-redux';

let rerenderEntireApp = (state) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireApp(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireApp(state);
}); //index subscribes on changes in state