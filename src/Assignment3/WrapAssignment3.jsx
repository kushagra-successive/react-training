import React from "react";
import Parent from "./question1/Parent";
import Parent2 from "./question2/Parent2";
import Main from "./question3/Main";
import MainCopy from "./question4/MainCopy";
import MainCopy1 from "./question5/MainCopy1";
import App from "./question6/App";
const Wrap = () => {
  return (
    <div>
      <Parent />
      <hr />
      <Parent2 />
      <hr />
      <Main />
      <hr />
      <MainCopy />
      <hr />
      <MainCopy1 />
      <hr />
      <App />
    </div>
  );
};

export default Wrap;
