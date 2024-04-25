import React from "react";
import Greeting from "./Greeting";
import UserCard from "./UserCard";
import Temperature from "./Temperature";
import Counter from "./Counter";
import Tasklist from "./Tasklist";
import Button from "./Button";
import styles from "./assignment.module.css";
import { array, taskArray, temp } from "./data";
const Assignment_1 = () => {
  return (
    <>
      <Greeting />
      <div className={styles.greeting}>
        <UserCard info={array} />
      </div>
      <hr />
      <Temperature value={temp} />
      <Counter />
      <hr />
      <Tasklist taskArray={taskArray} />
      <hr />
      <Button text="Button1" color="red" />
      <br />
      <Button text="Button2" color="blue" />
      <hr />
    </>
  );
};

export default Assignment_1;
