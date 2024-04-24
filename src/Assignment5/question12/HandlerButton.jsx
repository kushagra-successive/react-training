import React, { useState } from "react";
import Button from "./Button";
import styles from "../assignment5.module.css";
import {
  object,
  yellow,
  green,
  red,
  primary,
  secondary,
  danger,
} from "../data";
const HandlerButton = () => {
  const [state, setState] = useState(object);
  return (
    <div>
      <button
        className={state.color === yellow ? styles.buttonY : ""}
        onClick={() => setState({ ...state, text: primary, color: yellow })}
      >
        PRIMARY
      </button>
      <button
        className={state.color === green ? styles.buttonG : ""}
        onClick={() => setState({ ...state, text: secondary, color: green })}
      >
        SECONDARY
      </button>
      <button
        className={state.color === red ? styles.buttonR : ""}
        onClick={() => setState({ ...state, text: danger, color: red })}
      >
        DANGER
      </button>
      <Button state={state} />
    </div>
  );
};

export default HandlerButton;
