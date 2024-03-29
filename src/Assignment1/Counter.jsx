import React, { useState } from "react";
import "./Button.css";

const change = {
  color: "pruple",
  backgroundColor: "bisque",
  border: "3px solid black",
  padding: "16px",
  fontSize: "larger",
  display: "flex",
};
export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="border">
      <button type="button" style={change} onClick={increase}>
        Increment
      </button>

      <button type="button" style={change} onClick={decrease}>
        Decrement
      </button>
      <h2>{count}</h2>
    </div>
  );
}
