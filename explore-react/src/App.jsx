import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person() {
  const age = 100;
  return (
    <div>
      <h1>My name is Joy shib with age {age}.</h1>
     
    </div>
  )
}

function Student() {
  return (
    <div>
      <h1>My favourite student details.</h1>
      <p> Name : Tahnid Ahmed</p>
      <p>Age : 23</p>
      <p>School : Scholarshome.</p>
     
    </div>
  )
}

export default App
