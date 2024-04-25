import React from "react";
import Assignment1 from "./Assignment1/Assignment_1";
import Wrap from "./Assignment2/Wrap";
import WrapAssignment3 from "./Assignment3/WrapAssignment3";
import WrapAssignment4 from "./Assignment4/WrapAssignment4";
import WrapAssignment5 from "./Assignment5/WrapAssignment5";
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
      <h1>Assignment3</h1>
      <hr />
      <WrapAssignment3 />
      <h1>Assignment4</h1>
      <hr />
      <WrapAssignment4 />
      <h1>Assignment5</h1>
      <hr />
      <h1>Assignment5</h1>
      <WrapAssignment5 />
    </>
  );
}

export default App;
