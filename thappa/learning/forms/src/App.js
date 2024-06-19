import React, {useState} from 'react';
import './App.css';

function App() {

  const [fullName, setFullName] = useState({
    fname:'',
    lname:'',
    email:'',
    num:'',
  });
  // const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");

  const inputEvent=(event)=>{
    // console.log(event.target.value);
    // setName(event.target.value);

    // const value = event.target.value;
    // const name = event.target.name;

    const {name , value} = event.target;

    setFullName((preValue)=>{

      return{
        ...preValue,
        [name]: value,
      };
      // if(name == 'fname'){
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //   }
      // }else if(name == 'lname'){
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     num: preValue.num
      //   }
      // }else if(name == 'email'){
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     num: preValue.num
      //   }
      // }else if(name == 'number'){
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     num: value
      //   }
      // }


    })
  }

  // const inputEventTwo=(event)=>{
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const onSubmit=(event)=>{
    event.preventDefault();
    // setFullName(name+lastName);
    alert("form submitted");
  }
  return (
    <>
    <div className="main_div">
      <form onSubmit={onSubmit}>
        <div>
          <h1> Hello, {fullName.fname} {fullName.lname}</h1>
          <p> {fullName.email} </p>
          <p> {fullName.num} </p>
          <input type = 'text' placeholder = 'Enter Your Name' name= 'fname' onChange={inputEvent} value={fullName.fname}/>

          <input type='text' placeholder='Enter Your Last Name' name='lname' onChange={inputEvent} value={fullName.lname}/>

          <input type='email' placeholder='Enter Your Email' name='email' onChange={inputEvent} value={fullName.email}/>

          <input type='number' placeholder='Enter Your Number' name='num' onChange={inputEvent} value={fullName.num}/>

          <br/>
          <button type='submit' onClick={onSubmit}> Submit </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
