import React from "react";
import Assignment1 from "./Assignment1/Assignment_1";
import Wrap from "./Assignment2/Wrap";
import WrapAssignment3 from "./Assignment3/WrapAssignment3";
import WrapAssignment6 from "./Assignment6/WrapAssignment6";
import "./App.css";

function App() {
  return (
    <>
      <h1>Assignment1</h1>
      <hr />
      <Assignment1 />
      <h1>Assignment2</h1>
      <hr />
      <Wrap />
      <h1>Assignment6</h1>
      <hr />
      <WrapAssignment6 />
    </>
  );
}

export default App;
