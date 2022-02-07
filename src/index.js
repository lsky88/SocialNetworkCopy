// Imports ========================
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let dialogs = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Maria"},
    {id: 3, name: "Jose"},
    {id: 4, name: "Danny"},
    {id: 5, name: "Hans"},
]

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hello :)"},
    {id: 3, message: "What are you doing?"}
];

let posts = [
    {userName: "James", id: 1, message: "Hello", likesCount: 3},
    {userName: "Sandra", id: 2, message: "What's up?", likesCount: 5},
    {userName: "Andy", id: 3, message: "Yo!", likesCount: 7},
];

// Index.js ========================
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
