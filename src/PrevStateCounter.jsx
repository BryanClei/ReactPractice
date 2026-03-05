import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render phase: Component rendering with count = ", count);
  const handleClick = () => {
    // console.log("Before setCount, count is: ", count);
    setCount((prev) => {
      console.log("First updater fn: prev count = ", prev);
      return prev + 1;
    });
    console.log("After setCount(prev => prev + 1), count is: ", count);
    setCount((prev) => {
      console.log("Second updater fn: prev count = ", prev);
      return prev + 5;
    });
    console.log("After setCount(prev => prev + 5), count is: ", count);
    setCount((prev) => {
      console.log("Third updater fn: prev count = ", prev);
      return prev + 10;
    });
    console.log("After setCount(prev => prev + 10), count is: ", count);
    // console.log("Still in trigger phase. After setCount, count is: ", count);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
