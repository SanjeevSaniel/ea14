import React, { Component } from "react";

export default class ComponentDidMountMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This name will change in 5 sec",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "This is a componentDidMount Method" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
