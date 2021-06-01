import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    userName: "",
    currentName: "",
    loading: true,
  };
  reset = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("score1");
    localStorage.removeItem("score2");
    localStorage.removeItem("score3");
    localStorage.removeItem("score4");
    localStorage.removeItem("score5");
    localStorage.removeItem("score6");
    localStorage.removeItem("score7");
    localStorage.removeItem("score8");
    this.setState({ loading: false });
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
    const { userName, currentName, loading } = this.state;
    return (
      <HomePresenter
        userName={userName}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateName={this.updateName}
        currentName={currentName}
        reset={this.reset}
      />
    );
  }
}
