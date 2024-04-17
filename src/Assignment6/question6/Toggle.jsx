import { useState } from "react";
import Modal from "./Modal";
const Toggle = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <button onClick={() => setStatus(!status)}>Toggle</button>
      <h1>Modal</h1>
      {status ? <Modal status={status} setStatus={setStatus} /> : null}
    </div>
  );
};

export default Toggle;
