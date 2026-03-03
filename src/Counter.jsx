export const Counter = () => {
  let count = 0;
  console.log("Counter component rendered");
  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return <button onClick={handleClick}>Count: {count}</button>;
};
