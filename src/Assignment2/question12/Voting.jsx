import React, { useReducer } from "react";
import styles from "../assignment.module.css";
import { initialstate, BJP, Congress, Aap } from "../data";
const Voting = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "BJP":
        return { ...state, BJP: state.BJP + 1 }; //it creates new object with same propert as original state
      case "Congress":
        return { ...state, Congress: state.Congress + 1 };
      case "Aap":
        return { ...state, Aap: state.Aap + 1 };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className={styles.div}>
      <ul>
        <li>
          <button onClick={() => dispatch({ type: BJP })}>{BJP} 🚩</button>
          <p>{state.BJP}</p>
        </li>
        <li>
          <button onClick={() => dispatch({ type: Congress })}>
            {Congress} 🖐️
          </button>
          <p>{state.Congress}</p>
        </li>
        <li>
          <button onClick={() => dispatch({ type: Aap })}>{Aap} 🧹</button>
          <p>{state.Aap}</p>
        </li>
      </ul>
    </div>
  );
};

export default Voting;
