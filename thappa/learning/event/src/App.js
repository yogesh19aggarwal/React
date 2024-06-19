import React, {useState} from 'react';
import './App.css';

function App() {

  const color = "#8e44ad";
  const [bg, setBg] = useState(color);

  const [name, setName] = useState("click Me");

  const bgChange = () =>{
    let newBg = '#34495e'
    setBg(newBg);
    setName("Ouch!")
  }

  const bgBack = () =>{
    setBg(color);
    setName("Click Me");
  }


  return (
    <>
      <div style={ { backgroundColor: bg} }>
        <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
      </div>
    </>
  );
}

export default App;
