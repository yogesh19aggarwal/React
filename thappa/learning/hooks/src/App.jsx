import React, {useState} from 'react';

const App = () => {

  const state = useState();

  let date = new Date().toLocaleTimeString();

  // const [count, setCount] = useState(date);
  // let count = 1;

  const [time, setTime] = useState(date);

  // const IncNum = () =>{
  //   setCount(count+1);
  //   // count++;
  // };

  const UpdateTime = () => {
    date = new Date().toLocaleTimeString();
    setTime(date);
  }

  setInterval(UpdateTime, 1000)

  return (
   <>
    <h1> {time} </h1>
    {/* <button onClick={IncNum}> Click Me </button> */}
   </>
  );
}

export default App;
