import useTimer from "./useTimer";
export default function Timer() {
  const { count, start, pause, reset } = useTimer(27);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "larger",
      }}
    >
      <h1>{count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
