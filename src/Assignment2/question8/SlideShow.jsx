import React, { useEffect, useState } from "react";
const pathArray = [
  "./imagess/image1.jpeg",
  "./imagess/image2.jpeg",
  "./imagess/image3.jpeg",
  "./imagess/image4.jpeg",
];
export default function SlideShow() {
  const [path, setPath] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        if (path === pathArray.length - 1) {
          setPath(0);
        } else {
          setPath(path + 1);
        }
      }, 3000);
      return () => clearTimeout(timer); //for cleanup of previous Timeout
    }
  }, [play, path]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={pathArray[path]} width={300} height={400} alt="slide" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4rem",
          padding: "10px",
        }}
      >
        <button onClick={() => setPlay(true)}>Play</button>
        <button onClick={() => setPlay(false)}>Pause</button>
      </div>
    </div>
  );
}
