import { useEffect, useState } from "react";

export default function useTimer(time) {
  const [count, setCount] = useState(time);
  const [run, setRun] = useState(false);
  useEffect(() => {
    let interval;
    if (run && count !== 0) {
      interval = setInterval(() => {
        setCount(count - 1);
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [run, count]);

  function start() {
    setRun(true);
  }
  function pause() {
    setRun(false);
  }
  function reset() {
    setCount(25);
  }
  return { count, pause, reset, start };
}
