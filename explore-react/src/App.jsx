import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Student></Student>
      <Counter></Counter>
      
    </>
  )
}

function Student() {
  const name = "John Doe";
  const age = 25;
  const country = "USA";
  
  return (
    <div>
      <h2>Student </h2>
      <p>Student Name : {name}</p>
      <p>Age : { age}</p>
      <p>Country : {country} </p>
    </div>
  )
}

function Counter() {
  let cnt = 0;
  return (
    <div>
      <h2>Counter</h2>
      <p>Count : {cnt}</p>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}
export default App
