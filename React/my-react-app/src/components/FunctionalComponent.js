import React from "react";

const FunctionalComponent = () => {
  return (
    <div className="functional-component">
      <h1>This is created using Functional Component</h1>
      <p className="paragraph">This is done using external CSS</p>
      <p style={{ fontFamily: "sans-serif", color: "blue" }}>
        This is done using inline CSS
      </p>
    </div>
  );
};

export default FunctionalComponent;
