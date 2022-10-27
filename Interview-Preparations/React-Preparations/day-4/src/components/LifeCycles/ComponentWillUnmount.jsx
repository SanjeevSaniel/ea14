import React, { Component } from "react";

export default class ComponentWillUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <>
        <p>{this.state.show ? <Child /> : null}</p>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Click me to toggle
        </button>
      </>
    );
  }
}

export class Child extends Component {
  componentWillUnmount() {
    alert("This will unmount");
  }
  render() {
    return <>I am a child component</>;
  }
}
