import React, { useContext } from "react";
import { LoginProvider } from "./Parent";
import { logIn, logOut, pleaseLogIn, welcome } from "../data.js";

const Child = () => {
  const { val, state, setVal, setState } = useContext(LoginProvider);

  return (
    <div>
      <input
        type="text"
        placeholder="User Name"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          setState(!state);
          if (state) {
            setVal("");
          }
        }}
      >
        {state ? logOut : logIn}
      </button>
      <h2>{state ? `${welcome},${val}` : pleaseLogIn}</h2>
    </div>
  );
};

export default Child;
