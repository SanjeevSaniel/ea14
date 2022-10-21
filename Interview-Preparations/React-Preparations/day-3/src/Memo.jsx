import { useState, useMemo } from "react";
export default function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setIncrement((i) => i + 1);

  return (
    <div>
      Factorial of
      <input
        type="number"
        value={number}
        onChange={onChange}
        style={{ margin: "0 10px" }}
      />
      is {factorial}
      <p>{increment}</p>
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log(`factorialOf${n} called!`);
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
