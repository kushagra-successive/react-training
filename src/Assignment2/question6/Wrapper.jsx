import React, { useState } from "react";
import Clock from "./Clock";

const Wrapper = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      {show ? <Clock /> : null}
      {/* In null part it is unmounting bcz as we press toggle button to hide it removes from DOM and unmounting done  */}
    </div>
  );
};

export default Wrapper;
