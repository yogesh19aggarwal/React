import React from 'react';
// import './index.css';

function App() {
  let text = "";
  const cssStyle = {};
  
  let currDate = new Date();
  currDate = currDate.getHours();
  
  if(currDate <= 11 && currDate >= 1){
      text = "Good Morning";
      cssStyle.color = 'green'
  }
  else if(currDate >= 12 && currDate <= 19){
    text = "Good Afternoon";
    cssStyle.color = 'Orange'
  }
  else{
    text = "Good Night";
    cssStyle.color = 'Black'
  }

  return(
    <>
      <div>
        <h1> Hello Sir,  <span style = {cssStyle}> {text} </span></h1>
      </div>
    </>
  );
}

export default App;
