//1) Import the react and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
//2) Get a reference to the the div with ID root
const el = document.getElementById('root')
//3) Tell React to take Control of that element
const root = ReactDOM.createRoot(el);

root.render(<App />)