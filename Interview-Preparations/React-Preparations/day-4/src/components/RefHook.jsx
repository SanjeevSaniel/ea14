import { useRef } from "react";

const RefHook = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");

  return <button onClick={handleClick}>Click Me</button>;
};

export default RefHook;
