import React, { useEffect } from "react";
import WithLogger from "./WithLogger";
const Component = ({ count }) => {
  useEffect(() => {
    console.log("mount");
    console.log("update");

    return () => console.log("unmount");
  }, [count]);
  return <div>LifeCycle</div>;
};

export default WithLogger(Component);
