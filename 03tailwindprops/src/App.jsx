import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: 'Sudhakar',
    age: 24
  }
  let newArray = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind Test</h1>
      <Card username="React with chai" btnText= "Click me" />
      <Card username="Sudha" btnText= "visit me" />
    </>
  )
}
export default App
