import { useState } from "react";

export const Counter = () => {
  // const [count, setCount] = useState(0);
  //currentValue, setterFunction = useState(initialValue)
  const [count, setCount] = useState(() => {
    console.log("Initial state function called");
    return 0;
  });
  //currentValue, setterFunction = useState(fn)

  // let count = 0;
  console.log("Counter component rendered with count:", count);
  const handleClick = () => {
    // count = count + 1;
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Count: {count}</button>;
};
