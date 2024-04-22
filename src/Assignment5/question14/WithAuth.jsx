import React, { useState } from "react";
const WithAuth = (MyComp) => {
  const EnchancedComponent = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
      setState(!state);
    };
    return (
      <>
        <button onClick={handleClick}>Authorized</button>
        {state && <MyComp />}
      </>
    );
  };
  return EnchancedComponent;
};

export default WithAuth;
