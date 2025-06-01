import React, { Component } from "react";

class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Kobe",
      lastName: "Bryant",
    };
  }

  PrintUserName = () => {
    return `${this.state.firstName} ${this.state.lastName}`;
  };

  render() {
    return <div>{`Hello my name is ${this.PrintUserName()}`}</div>;
  }
}

export default CreateUserForm;
