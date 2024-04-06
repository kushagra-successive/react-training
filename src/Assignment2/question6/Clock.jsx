import { useEffect, useState } from "react";
import styles from "../assignment.module.css";

const Clock = () => {
  const [currentTime, setTime] = useState();

  useEffect(() => {
    const value = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    console.log("mount");
    return () => {
      clearInterval(value);
      //post-unmounting
    };
  }, []);

  return (
    <div className={styles.div}>
      <h1>CLOCK ⏰</h1>
      <h1>{currentTime}</h1>
    </div>
  );
};
export default Clock;
//In this only when toogle button is pressed first it changes false to true which in Wrapper it shows the component in UI mounting done then again useEffect runs first time and clock time start showing and now if we again toggle to hide it where states comes to false and now from Wrapper component it sends null means whole component will removed from DOM and unmounting done which later invoke clearInterval.
