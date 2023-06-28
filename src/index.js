//1) Import the react and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//2) Get a reference to the the div with ID root
const el = document.getElementById('root')
//3) Tell React to take Control of that element
const root = ReactDOM.createRoot(el);
//4) Create a Component
function App(){
    return <h1>Hello React World!</h1>
}
//5) Show the Component on the screen
root.render(<App />)