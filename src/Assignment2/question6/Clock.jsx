import React, { useEffect, useState } from "react";

export default function Clock() {
  const [currentTime, setTime] = useState();

  useEffect(() => {
    const value = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(value); //post-unmounting
    };
  }, [currentTime]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>CLOCK ⏰</h1>
      <h1>{currentTime}</h1>
    </div>
  );
}
