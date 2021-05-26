import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    userName: "",
    currentName: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName } = this.state;
    if (userName !== "") {
      this.saveLocalStorage();
    }
  };

  updateName = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ userName: value });
  };

  saveLocalStorage = () => {
    const { userName } = this.state;
    localStorage.setItem("userName", userName);
    this.setState({ currentName: userName });
  };

  render() {
    const { userName, currentName } = this.state;
    return (
      <HomePresenter
        userName={userName}
        handleSubmit={this.handleSubmit}
        updateName={this.updateName}
        currentName={currentName}
      />
    );
  }
}
