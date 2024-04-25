import React, { useState } from "react";
import styles from "./assignment.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.border}>
      <button type="button" className={styles.button} onClick={increase}>
        Increment
      </button>

      <button type="button" className={styles.button} onClick={decrease}>
        Decrement
      </button>
      <h2>{count}</h2>
    </div>
  );
};
export default Counter;
