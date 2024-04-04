import React, { useState } from "react";

export default function RandomNumberGenerator() {
  const [random, setState] = useState(0);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            color: "olive",
            borderColor: "brown",
          }}
          onClick={() => setState(Math.floor(Math.random() * 100 + 1))}
        >
          Press
        </button>

        <h2 style={{ color: "Orange" }}>{random}</h2>
      </div>
    </>
  );
}
