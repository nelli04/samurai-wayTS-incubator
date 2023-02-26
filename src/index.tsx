import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import {rerenderEntireTree} from "./render";
import {state} from "./Components/Profile/state";
/*
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./Components/Profile/state";
*/

rerenderEntireTree(state)

/*
ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>,
    document.getElementById('root')
);*/
