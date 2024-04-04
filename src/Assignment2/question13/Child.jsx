import React from "react";

export default function Child({ increment, count, setCount }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
