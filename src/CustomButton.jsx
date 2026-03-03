export const CustomButton = ({ text }) => {
  const name = "Evolution";

  const handleClick = (e) => {
    console.log(`Hey ${name}, you clicked ${text}`);
  };

  return <button onClick={handleClick}>{text}</button>;
  //   return <button onClick={() => alert("Thanks for liking!")}>Like</button>;
};
