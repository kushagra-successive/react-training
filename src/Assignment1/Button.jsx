import React from "react";
import styles from "./assignment.module.css";
const Button = (props) => {
  return (
    <>
      <div className={styles.border}>
        <button className={styles.button} style={{ color: props.color }}>
          {props.text}
        </button>
      </div>
    </>
  );
};
export default Button;
