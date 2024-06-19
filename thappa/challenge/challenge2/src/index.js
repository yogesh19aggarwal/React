import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const date = new Date();
const currTime = date.toLocaleTimeString();
const currData = date.toLocaleDateString()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <h1> Hello, My name is Yogesh Aggarwal </h1>
      <p> todays Date is {currData} </p>
      <p> Current time is {currTime}  </p>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
