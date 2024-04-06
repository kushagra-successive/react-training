import React, { useState } from "react";
import styles from "../assignment.module.css";
const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [fetch, setFetch] = useState();
  return (
    <div className={styles.div}>
      <input
        type="text"
        placeholder="Step"
        value={fetch}
        onChange={(e) => setFetch(e.target.value)}
      />
      <button onClick={() => setCount(count + Number(fetch))}>Increment</button>
      <button onClick={() => setCount(count - Number(fetch))}>Decrement</button>
      <p>{count}</p>
    </div>
  );
};
export default CounterWithStep;
