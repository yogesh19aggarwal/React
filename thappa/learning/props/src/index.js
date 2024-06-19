import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata'
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// function ncard(val, ind, arr){
  
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 className='heading_style'> Top 5 Netflix Series in 2024 </h1>
    {/* {Sdata.map(ncard)} */}
    {Sdata.map((val)=>{
        return (
          <Card
            key = {val.id} 
            imgsrc = {val.imgsrc}
            title = {val.title}
            sname = {val.sname}
            link = {val.link}
          />
        );
    })}
  
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
