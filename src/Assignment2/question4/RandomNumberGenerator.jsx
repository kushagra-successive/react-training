import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [random, setState] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setState(Math.floor(Math.random() * 100 + 1))}>
          Press
        </button>
        <h2>{random}</h2>
      </div>
    </>
  );
};
export default RandomNumberGenerator;
