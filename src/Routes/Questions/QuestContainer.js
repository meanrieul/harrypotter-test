import React from "react";
import QuestPresenter from "./QuestPresenter";

export default class extends React.Component {
  state = {};

  handleSubmitA = (event) => {
    event.preventDefault();
    const scoreA =
      parseInt(event.target.elements.Q1.value) +
      parseInt(event.target.elements.Q2.value) +
      parseInt(event.target.elements.Q3.value) +
      parseInt(event.target.elements.Q4.value) +
      parseInt(event.target.elements.Q5.value);
    localStorage.setItem("scoreA", scoreA);
  };

  handleSubmitB = (event) => {
    event.preventDefault();
    const scoreB =
      parseInt(event.target.elements.Q1.value) +
      parseInt(event.target.elements.Q2.value) +
      parseInt(event.target.elements.Q3.value) +
      parseInt(event.target.elements.Q4.value) +
      parseInt(event.target.elements.Q5.value);
    localStorage.setItem("scoreB", scoreB);
  };

  handleSubmitC = (event) => {
    event.preventDefault();
    const scoreC =
      parseInt(event.target.elements.Q1.value) +
      parseInt(event.target.elements.Q2.value) +
      parseInt(event.target.elements.Q3.value) +
      parseInt(event.target.elements.Q4.value) +
      parseInt(event.target.elements.Q5.value);
    localStorage.setItem("scoreC", scoreC);
  };
  render() {
    return (
      <QuestPresenter
        handleSubmitA={this.handleSubmitA}
        handleSubmitB={this.handleSubmitB}
        handleSubmitC={this.handleSubmitC}
      />
    );
  }
}
