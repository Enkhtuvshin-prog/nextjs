import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addCount}>add</button>
      <button onClick={() => setCount(count - 1)}>Mint</button>
    </>
  );
};

export default Count;
