import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1> Thapa Technical Netflix Pick </h1>
        <p> List of 5 Best Series </p>
        <ol>
            <li> Dark </li>
            <li> Extra curricular </li>
            <li> My Holo Love </li>
            <li> My First-2 Love </li>
            <li> Mr Robot </li>
        </ol>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

