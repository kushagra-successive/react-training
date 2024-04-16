import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
};
const Check = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch("increment")}>Incre</button>
      <button onClick={() => dispatch("decrement")}>Decre</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      {count}
    </div>
  );
};

export default Check;
