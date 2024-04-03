import React from "react";
import styles from "./assignment.module.css";
const UserCard = (props) => {
  return (
    <>
      {props.info.map((element) => (
        <div className={styles.card_style}>
          <h1>{element.name}</h1>
          <img src={element.avatarURL} alt="avatar" />
          <h2>{element.age}</h2>
        </div>
      ))}
    </>
  );
};
export default UserCard;
