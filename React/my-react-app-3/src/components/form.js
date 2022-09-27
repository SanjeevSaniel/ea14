import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.displayData = [];

    this.state = {
      hideForm: false,
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    };

    this.appendData = this.appendData.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
    this.hideTheForm = this.hideTheForm.bind(this);
    this.showTheForm = this.showTheForm.bind(this);
  }

  appendData() {
    this.displayData.push(
      <div className="display-data">
        Name: {this.state.name} | Department: {this.state.department} | Rating:{" "}
        {this.state.rating}
      </div>
    );

    this.setState({
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    });
  }

  hide(e) {
    this.setState({
      hideForm: !e.target.value,
    });
  }

  setName(e) {
    let getName = e.target.value;
    this.setState({
      name: getName,
    });
  }

  setDepartment(e) {
    let getDepartment = e.target.value;
    this.setState({
      department: getDepartment,
    });
  }

  setRating(e) {
    let getRating = e.target.value;
    this.setState({
      rating: getRating,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  hideTheForm() {
    this.appendData();
    this.setState({
      hideForm: !this.state.hideForm,
    });
  }

  showTheForm() {
    this.setState({
      hideForm: !this.state.hideForm,
    });
  }

  render() {
    return (
      <div id="container">
        <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>

        {this.state.hideForm ? (
          <>
            <div id="display-form-data">{this.displayData}</div>
            <button onClick={this.showTheForm}>Go Back</button>
          </>
        ) : null}

        {!this.state.hideForm ? (
          <form className="form" onSubmit={this.handleSubmit}>
            <label>
              Name:{" "}
              <input
                type="text"
                value={this.state.name}
                onChange={this.setName}
              />
            </label>
            <label>
              Department:{" "}
              <input
                type="text"
                value={this.state.department}
                onChange={this.setDepartment}
              />
            </label>
            <label>
              Rating:{" "}
              <input
                type="text"
                value={this.state.rating}
                onChange={this.setRating}
              />
            </label>
            <button onClick={this.hideTheForm}>Submit</button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default Form;
