import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  });

  return (
    <div>
      <h2>useState Example.</h2>
      <p>
        You clicked{" "}
        <span style={{ color: "red", fontWeight: 500 }}>{count}</span> times.
      </p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <hr />
      <br />

      <h2>useEffect Example.</h2>
      <p>
        I've rendered{" "}
        <span style={{ color: "red", fontWeight: 500 }}>{timer}</span> times!
      </p>
    </div>
  );
};

export default Counter;
