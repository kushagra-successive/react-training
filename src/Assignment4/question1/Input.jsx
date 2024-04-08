import React, { useState } from "react";

const Input = () => {
  const [state, setState] = useState();
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        onChange={(e) => setState(e.target.value)}
      />
      <h1>{state}</h1>
    </div>
  );
};

export default Input;
