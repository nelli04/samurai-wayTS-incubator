import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export type DataType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    postData: Array<PostDataType>
}

export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    message: string
    likeCount: number
}

export let dialogsData = [
    {
        id: 'User1',
        name: 'User1'
    },
    {
        id: 'User2',
        name: 'User2'
    },
    {
        id: 'User3',
        name: 'User3'
    },
    {
        id: 'User4',
        name: 'User4'
    },
]
export let messagesData = [
    {
        id: 1,
        message: 'Hello'
    },
    {
        id: 2,
        message: 'Hello'
    },
    {
        id: 3,
        message: 'Hello'
    },
    {
        id: 4,
        message: 'Hello'
    },
]
export let postData = [
    {
        id: 1,
        message: 'Hey He',
        likeCount: 12
    },
    {
        id: 2,
        message: 'Hey Hey friends',
        likeCount: 10
    }
]

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);