import React from "react";
import Greeting from "./Greeting";
import UserCard from "./UserCard";
import Temperature from "./Temperature";
import Counter from "./Counter";
import Tasklist from "./Tasklist";
import Button from "./Button";
import styles from "./assignment.module.css";
const taskArray = ["Learn JS", "Learn React", "Learn Node", "Learn MongoDB"];
const array = [
  {
    name: "Shames",
    age: "shames641@gmail.com",
    avatarURL:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
  },
  {
    name: "Maicky",
    age: "maicky701@gmail.com",
    avatarURL: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
  },
  {
    name: "Goen",
    age: "goen161@gmail.com",
    avatarURL: "https://placebear.com/250/250",
  },
];
const Assignment_1 = () => {
  return (
    <>
      <Greeting />
      <div className={styles.greeting}>
        <UserCard info={array} />
      </div>
      <hr />
      <Temperature value="29" />
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
