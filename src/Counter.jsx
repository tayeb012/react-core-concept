import { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState(0);
  //   const abc = useState(0);
  //   console.log(abc);
  const HandleAdd = () => {
    const newCount = Count + 1;
    setCount(newCount);
  };
  return (
    <div
      style={{ border: "5px solid purple", padding: "10px", margin: "20px" }}
    >
      <h2>Counter: {Count}</h2>
      <button onClick={HandleAdd}>Add</button>
    </div>
  );
}
