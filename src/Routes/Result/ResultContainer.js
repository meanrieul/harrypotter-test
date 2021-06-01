import React from "react";
import ResultPresenter from "./ResultPresenter";

export default class extends React.Component {
  state = { copied: false };
  handleShare = () => {
    const element = document.createElement("textarea");
    element.value = `${window.location.host}/harrypotter-test`;
    element.setAttribute("readonly", "");
    element.style.position = "absolute";
    element.style.left = "-9999px";
    document.body.appendChild(element);
    element.select();
    var returnValue = document.execCommand("copy");
    document.body.removeChild(element);
    this.setState({ copied: true });
  };
  render() {
    const { copied } = this.state;
    return <ResultPresenter handleShare={this.handleShare} copied={copied} />;
  }
}
