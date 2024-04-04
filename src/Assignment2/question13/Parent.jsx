import React, { useCallback, useState } from "react";
import Child from "./Child";
export default function Parent() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <Child increment={increment} count={count} setCount={setCount} />
    </>
  );
}
