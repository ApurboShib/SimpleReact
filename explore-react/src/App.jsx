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
      <Student name="Joy Shib" age="30" Deposite="10000" region="Bangladeshi"/>
      <Person />
      <FreshersInfo />
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
      My name is {name}, my age is {age}, and I earn approx {money}. I have some
      hobbies like {hobbies.join(", ")}.
    </h3>
  );
}

function FreshersInfo() {
  const name = "Sajjad";
  const age = 22;
  const region = "USA";
  return (
    <div>
      <h1>Freshers Information:</h1>
        <li>My name is: {name}</li>
        <li>My age is: {age}</li>
        <li>My region is: {region}</li>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non quia
        magni maxime odio. Maxime eveniet sunt ut maiores a!
      </p>
    </div>
  );
}

export default App;