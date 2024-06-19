import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://www.thapatechnical.com";

const root = ReactDOM.createRoot(document.getElementById('root'));

// .heading{
//   color: #fa9191;
//   text-align:center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px #ffe9c5;
//   margin: 70px 0;
//   font-family: 'Josefin Sans', sans-serif;
// }

const heading = {
  color: '#fa9191',
  TextTransform : 'capitalize',
  textAlign: 'center',
  fontWeight : 'bold',
  margin : '70px 0',
  textShadow : '0px 2px 4px #ffe9c5',
  fontFamily: '"Josefin Sans", sans-serif'
}

root.render(
  <>
    <h1 style = {heading}> My name is Yogesh Aggarwal</h1>
    <div className='img_div'>
      <img src = {img1}  alt="randomImages"/>
      <img src = {img2}  alt="randomImages"/>
      <a href= {link} target = "_yogesh">
        <img src = {img3} alt = "randomImages"/>
      </a>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
