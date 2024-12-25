import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, message: 'Hi, how are you', likesCount: 1},
    {id: 2, message: 'It\'s my first post', likesCount: 12},
    {id: 3, message: 'Good', likesCount: 11},
    {id: 4, message: 'Yo', likesCount: 18},
    {id: 5, message: 'Yo', likesCount: 3}
];

let dialogs = [
    {id: 1, name: 'Kostya'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Maksim'},
    {id: 5, name: 'Lexa'}
];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi, how are you?'},
    {id: 3, message: 'Good'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
];


ReactDOM.render(<App messages={messages} postsData={postsData} dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
