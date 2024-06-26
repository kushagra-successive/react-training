import React from "react";

const Child = ({ increment, count, setCount }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
export default Child;
