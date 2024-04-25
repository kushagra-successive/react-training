import React from "react";
import styles from "../assignment.module.css";
import useLocalStorge from "./useLocalStorge";
const ManageStorage = () => {
  const { setKey, setValue, get, val, key, setting, getting, removing } =
    useLocalStorge();
  return (
    <div className={styles.div}>
      <input
        type="text"
        placeholder="key"
        onChange={(e) => setKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setting(key, val)}>ADD</button>
      <input
        type="text"
        placeholder="key"
        onChange={(e) => setKey(e.target.value)}
      />
      <button onClick={() => getting(key)}>GET</button>
      <input
        type="text"
        placeholder="key"
        onChange={(e) => setKey(e.target.value)}
      />
      <button onClick={() => removing(key)}>REMOVE</button>
      <h1>{get}</h1>
    </div>
  );
};

export default ManageStorage;
