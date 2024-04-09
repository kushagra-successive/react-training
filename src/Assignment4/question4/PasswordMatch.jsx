import React, { useState } from "react";
import { login, cantLogin } from "../data";
const PasswordMatch = () => {
  const [passwordOne, setpasswordOne] = useState("");
  const [passwordTwo, setpasswordTwo] = useState("");
  const [state, setState] = useState(false);
  const check = () => {
    if (passwordOne === passwordTwo) {
      setState(true);
    } else {
      setState(false);
    }
    setpasswordOne("");
    setpasswordTwo("");
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="password"
        placeholder="password1"
        value={passwordOne}
        onChange={(e) => setpasswordOne(e.target.value)}
      />
      <input
        type="password"
        placeholder="password2"
        value={passwordTwo}
        onChange={(e) => setpasswordTwo(e.target.value)}
      />
      <button onClick={check}>Login</button>
      {state ? login : cantLogin}
    </form>
  );
};

export default PasswordMatch;
