import React from "react";
import styles from "../assignment5.module.css";
import { yellow, red } from "../data";
const Button = (props) => {
  const { state } = props;
  console.log(state);
  return (
    <div>
      <h1
        className={
          state.color === yellow
            ? styles.buttonY
            : state.color === red
            ? styles.buttonR
            : styles.buttonG
        }
      >
        {state.text}
      </h1>
    </div>
  );
};

export default Button;
