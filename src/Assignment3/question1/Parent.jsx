import  { createContext, useState } from "react";
import Child from "./Child.jsx";
export const LoginProvider = createContext();
const Parent = () => {
  const [val, setVal] = useState();
  const [state, setState] = useState(false);
  return (
    <div>
      <LoginProvider.Provider value={{ val, state, setVal, setState }}>
        <Child />
      </LoginProvider.Provider>
    </div>
  );
};

export default Parent;
