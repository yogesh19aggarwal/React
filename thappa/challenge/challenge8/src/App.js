import React, {useState} from 'react';
import './App.css';

function App() {

  // const count = 0;
  const [num, setNum] = useState(0);

  const inc = ()=>{
    setNum(num+1); 
  };

  const dec = () =>{
    if(num > 0){
      setNum(num-1);
    }else{
      setNum(0);
      alert("number should be greater than 0")    
    }
  }

  return (
    <>
      <div className='main_div'>
        <div className = 'center_div'>
          <h1> {num} </h1>
          <div className = 'btn_div'>
            <button onClick={inc}> Increm </button>
            <button onClick={dec}> Decrem </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
