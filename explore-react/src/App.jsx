import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Student from './Students.jsx';

function App() {
  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <Device name = "Iphone" price = "1000"> </Device>
      <Device name = "Samsung" price = "800"> </Device>
      <Device name = "Google" price = "600"> </Device>
      <Device name="OnePlus" price="700"> </Device> */}
      <Student name="Joy Shib" age = "30" Deposite = "10000" region = "Bangladeshi"> </Student>
      
      <Person> </Person>
    </>
  );
}

// function Device(props) {
//   console.log(props);
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }


function Person() {
  const age = 25;
  const name = "Joy";
  const isStudent = true;
  const money = 202002;
  const hobbies = ["reading", "coding", "gaming"];
  const demo = {
    name: "joy",
    age: 25,
    isStudent: true,
    money: 202002,
  };
  return (
    <h3>
      My name is {name} and my age is {age} and I earn approx {money}, and I
      have some hobbies like {hobbies.join(", ")}
    </h3>
  );
}

function MyInfo() {
  
}
export default App;
