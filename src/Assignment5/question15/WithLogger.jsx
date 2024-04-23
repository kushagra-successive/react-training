import React, { useReducer } from "react";

const WithLogger = (MyComponent) => {
  const EnhancedComponent = () => {
    const reducer = (state, action) => {
      switch (action) {
        case "incre":
          return state + 1;
        default:
          return state;
      }
    };
    const [count, dispatch] = useReducer(reducer, 1);
    return (
      <>
        <button onClick={() => dispatch("incre")}>Toggle</button>
        {count && <MyComponent count={count} />}
      </>
    );
  };
  return EnhancedComponent;
};

export default WithLogger;
