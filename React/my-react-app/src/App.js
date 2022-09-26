// import './App.css';
import React,{ useState } from "react";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import "./components/components-styles.css";

function App() {
  const [funcHidden, setFuncHidden] = useState(true);
  const handleClickFunction = (e) => setFuncHidden((current) => !current);

  const [clsHidden, setClsHidden] = useState(true);
  const handleClickClass = (e) => setClsHidden((current) => !current);

  return (
    <div className="App">
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="btn-box">
        <button className="btn btn--func" onClick={handleClickFunction}>
          To see styling in Functional Component
        </button>
        <button className="btn btn--cls" onClick={handleClickClass}>
          To see styling in Class Component
        </button>
      </div>

      <div className="component-box">
        {!funcHidden ? <FunctionalComponent /> : null}
        {!clsHidden ? <ClassComponent /> : null}
      </div>
    </div>
  );
}

export default App;
