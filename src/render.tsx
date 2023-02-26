import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppType} from './App';
import {BrowserRouter} from "react-router-dom";
import {DataType, state} from "./Components/Profile/state";


export let rerenderEntireTree = (state: DataType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
