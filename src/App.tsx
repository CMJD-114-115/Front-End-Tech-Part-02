import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let number = 0;
  const [number, setNumber] = useState(0);
  const valueUp = () =>{
    // number+=1;
    setNumber(number+1)
    console.log(number)
  }
  const valueDown = () => {
    // number-=1;
    setNumber(number - 1)
    console.log(number)
  }
  return (
    <>
      <h1>Number is: {number}</h1>
      <button onClick={valueUp}>Plus</button>
      <button onClick={valueDown}>Minus</button>
    </>
  );
}

export default App;
