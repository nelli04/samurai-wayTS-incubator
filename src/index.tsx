import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {DataType, store, StoreType} from "./Components/Profile/state";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()


