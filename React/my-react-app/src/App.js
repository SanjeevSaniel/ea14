// import './App.css';
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import "./components/components-styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="btn-box">
        <button className="btn btn--func">
          To see styling in Functional Component
        </button>
        <button className="btn btn--cls">
          To see styling in Class Component
        </button>
      </div>
      <div className="component-box">
        <FunctionalComponent />
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;
