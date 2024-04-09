import React, { useState } from "react";
import { useNavigate } from "react-router";
import { nameMock, passwordMock, invalid } from "../data";
const MainPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const authentication = () => {
    if (name === nameMock && password === passwordMock) navigate("/about");
    else {
      setStatus(invalid);
      setPassword("");
      setName("");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <h2>{status}</h2>
      <button onClick={authentication}>About</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default MainPage;
