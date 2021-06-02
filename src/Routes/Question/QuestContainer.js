import React from "react";
import QuestPresenter from "./QuestPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = props;
    this.state = { id };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.state;
    const score = parseInt(event.target.elements.Question.value);
    localStorage.setItem(`score${id}`, score);
    if (id != "8") {
      window.location.replace(`#/question/${parseInt(id) + 1}`);
      window.location.reload();
    } else {
      const score =
        parseInt(localStorage.getItem("score1")) +
        parseInt(localStorage.getItem("score2")) +
        parseInt(localStorage.getItem("score3")) +
        parseInt(localStorage.getItem("score4")) +
        parseInt(localStorage.getItem("score5")) +
        parseInt(localStorage.getItem("score6")) +
        parseInt(localStorage.getItem("score7")) +
        parseInt(localStorage.getItem("score8"));
      if (score <= 6) window.location.replace("#/resultA");
      else if (score > 6 && score <= 12) window.location.replace("#/resultB");
      else if (score > 12 && score <= 18) window.location.replace("#/resultC");
      else window.location.replace("#/resultD");
    }
  };

  render() {
    const { id } = this.state;
    return <QuestPresenter handleSubmit={this.handleSubmit} questionId={id} />;
  }
}
