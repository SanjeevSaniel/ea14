// import './App.css';
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import "./components/components-styles.css";
import { useState } from "react";

function App() {
  const [funcHidden, setFuncHidden] = useState(true);
  const [clsHidden, setClsHidden] = useState(true);

  return (
    <div className="App">
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="btn-box">
        <button className="btn btn--func" onClick={() => setFuncHidden(false)}>
          To see styling in Functional Component
        </button>
        <button className="btn btn--cls" onClick={() => setClsHidden(false)}>
          To see styling in Class Component
        </button>
      </div>

      <div className="component-box">
        <>{!funcHidden ? <FunctionalComponent /> : null}</>
        <>{!clsHidden ? <ClassComponent /> : null}</>
      </div>
    </div>
  );
}

export default App;
