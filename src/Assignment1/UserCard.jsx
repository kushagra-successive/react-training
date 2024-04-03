import React from "react";
import styles from "./assignment.module.css";
const UserCard = (props) => {
  return (
    <>
      {props.info.map(({ name, age, avatarURL }) => (
        <div className={styles.card_style}>
          <h1>{name}</h1>
          <img src={avatarURL} alt="avatar" />
          <h2>{age}</h2>
        </div>
      ))}
    </>
  );
};
export default UserCard;
