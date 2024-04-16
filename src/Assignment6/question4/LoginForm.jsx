import React, { useState } from "react";

const LoginForm = () => {
  const [state, setState] = useState(false);
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="User Name"
        value={input.name}
        onChange={(e) =>
          setInput({
            ...input,
            name: e.target.value,
            password: input.password,
          })
        }
      ></input>
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={input.password}
        onChange={(e) =>
          setInput({
            ...input,
            name: input.name,
            password: e.target.value,
          })
        }
      ></input>
      <br />
      <button
        onClick={() => {
          setState(true);
        }}
      >
        Submit
      </button>
      {state && `${input.name} ${input.password}`}
    </form>
  );
};

export default LoginForm;
