import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  // let counter = 5 

  // const addValue = () => {
  //   // counter = counter + 1
  //   setCounter(counter + 1)
  //   // console.log("value added", counter);
  // }
  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }
  function increment(){
    if(counter + 1 > 20){
      alert("Limit exceed")
    } else {
      setCounter(counter + 1)
      // console.log(counter);
    }
  }

  function decrement(){
    if(counter - 1 < 0){
      alert("Value can't be negetive")
    } else {
      setCounter(counter - 1)
      // console.log(counter)
    }
  }

  return (
    <>
      <h1>React with Chai</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={increment}>Add Value</button> 
      <br />
      <button onClick={decrement}>Remove Value</button>
    </>
  )
}

export default App
