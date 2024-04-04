import React, { useState } from "react";

export default function CounterWithStep() {
  const [count, setCount] = useState(0);
  const [fetch, setFetch] = useState();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Step"
        value={fetch}
        onChange={(e) => setFetch(e.target.value)}
      />
      <button onClick={() => setCount(count + Number(fetch))}>Increment</button>
      <button onClick={() => setCount(count - Number(fetch))}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}
