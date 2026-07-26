import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';

function App() {
  // let number = 0;
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("Hello");

  useEffect(() => {
    console.log("Hello useEffect")
  },[value])



  const numberUp = () => {
    // number+=1;
    setNumber(number + 1)
    console.log(number)
  }
  const numberDown = () => {
    // number-=1;
    setNumber(number - 1)
    console.log(number)
  }
  const changeValue = () => {
    setValue("CMJD")
  }

  return (
    <>
      <h1>Number is: {number}</h1>
      <h1>String Value is: {value}</h1>
      <button onClick={numberUp}>Plus</button>
      <button onClick={numberDown}>Minus</button>
      <button onClick={changeValue}>Change</button>
    </>
  );
}

export default App;
