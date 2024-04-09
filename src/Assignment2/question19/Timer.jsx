import useTimer from "./useTimer";
import styles from "../assignment.module.css";
const Timer = () => {
  const { count, start, pause, reset } = useTimer(50);
  return (
    <div className={styles.div}>
      <h1>{count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Timer;
