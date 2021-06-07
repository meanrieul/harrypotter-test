import React from "react";
import ResultPresenter from "./ResultPresenter";

export default class extends React.Component {
  state = { copied: false, resultCopied: false };
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
    this.setState({ copied: true, resultCopied: false });
  };
  handleShareResult = () => {
    const element = document.createElement("textarea");
    element.value = `${window.location.href}`;
    element.setAttribute("readonly", "");
    element.style.position = "absolute";
    element.style.left = "-9999px";
    document.body.appendChild(element);
    element.select();
    var returnValue = document.execCommand("copy");
    document.body.removeChild(element);
    this.setState({ copied: false, resultCopied: true });
  };
  render() {
    const { copied, resultCopied } = this.state;
    return (
      <ResultPresenter
        handleShare={this.handleShare}
        handleShareResult={this.handleShareResult}
        copied={copied}
        resultCopied={resultCopied}
      />
    );
  }
}
