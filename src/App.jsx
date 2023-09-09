// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Users from "./Users";


function App() {
  
  function HandleClick() {
    alert("Button Clicked");
  }
  
  const HandleClick2 = () => alert("Button 2 clicked");
  const HandleClick4 = (num) => alert(10 + num);
  return (
    <>
    
      <h1>React Core Concept 2</h1>
      <Users></Users>
      
      <Counter></Counter>
      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick2}>Click 2 Me</button>
      <button onClick={() => alert("button 3 clicked")}>Click 3 Me</button>
      <button onClick={() => HandleClick4(5)}>Click 4 Me</button>
    </>
  );
}

export default App;
