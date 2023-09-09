import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ["Sakib", "Nisho", "Raj", "Conchol Chowdury"];

  const singers = [
    { id: 1, name: "Xenifar", age: 26 },
    { id: 2, name: "Pretom", age: 32 },
    { id: 3, name: "Tanveer", age: 28 },
    { id: 4, name: "Baccu", age: "Expair" },
  ];

  const books = [
    { id: 1, name: "Xenifar", price: 26 },
    { id: 2, name: "Pretom", price: 32 },
    { id: 3, name: "Tanveer", price: 28 },
    { id: 4, name: "Baccu", price: "Expair" },
  ];
  // console.log(books);
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {/* {singers.map((Singer) => (
        <Singers Singer={Singer}></Singers>
      ))} */}

      {/* <Actor Name={"Crishamson"}></Actor>
      {
        actors.map(actor => <Actor Name={actor}></Actor>)
      } */}

      {/* <Todo Task={'Learn React'} isDone={true}></Todo>
      {/* <Todo ></Todo> */}
      {/* <Todo Task={'Explore core concept'} isDone={false}></Todo> */}

      {/* <Todo ></Todo> */}
      {/* <Device name="Laptop" price="65000"></Device>
      <Device name="Desktop" price="45000"></Device>
      <Device name="MacBook" price="150000"></Device>
      <Student grade="10" score="60%"></Student>
      <Student grade={6} score="50%"></Student>
      <Student></Student>
      <Person></Person>
      <Person></Person>
      <Person2></Person2> */}
    </>
  );
}

function Device(props) {
  return (
    <h2>
      This device: {props.name} price: {props.price}
    </h2>
  );
}

// const { grade, score } = { grade: "10", score: "60%" };
function Student({ grade = 1, score = 0 }) {
  return (
    <>
      <h2>This is a Student</h2>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </>
  );
}

function Person() {
  const name = "Tayeb";
  const money = "ache";
  const age = 30;
  const person = { name: "Tanvir", age: 24, money: "nai" };
  return (
    <>
      <h3 className="person">
        This is {person.name}, age: {person.age}, have money {person.money}
      </h3>

      <h2>
        This is {name}, age: {age}, have money {money}
      </h2>
    </>
  );
}

function Person2() {
  const cssStyle = {
    margin: "20",
    border: "5px solid aqua",
    background: "purple",
    borderRadius: "20px",
  };
  return (
    <>
      <div style={cssStyle}>
        <h2>Lemon sus le</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat distinctio illo.
        </p>
      </div>

      <div>
        <h2>Sooooooooooooooooooooo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat distinctio illo.
        </p>
      </div>
    </>
  );
}

export default App;

// npm run dev
