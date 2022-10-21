import "./App.css";
import Counter from "./Counter";
import Question1 from "./Question1";
import Todos from "./Todos";
import CalculateFactorial from "./Memo";
import Child from "./Child";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const parentToChild = () => {
    setData("This data is from Parent Component to the Child Component.");
  };
  return (
    <div className="App">
      <Question1 />
      <hr />
      <Counter />
      <hr />
      <h2>useReducer Example.</h2>
      <Todos />
      <hr />
      <h2>useMemo Example.</h2>
      <CalculateFactorial />
      <hr />
      <h2>How do you pass data from parent to child ?</h2>
      <h4>Props Example.</h4>
      <Child parentToChild={data} />
      <div>
        <button primary onClick={() => parentToChild()}>
          Click Parent
        </button>
      </div>
    </div>
  );
}

export default App;
