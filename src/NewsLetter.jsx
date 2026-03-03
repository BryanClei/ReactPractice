import { ActionButton } from "./ActionButton";

export const NewsLetter = () => {
  const handlSubscribe = () => {
    alert("Thank you for subscribing!");
  };
  return (
    <div>
      <h2>Subscribe to Newsletter</h2>
      <ActionButton text="Subscribe" onClick={handlSubscribe} />
    </div>
  );
};
