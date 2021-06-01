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
  };
  handleClick = () => {
    const { id } = this.state;
    if (id != "8") {
      window.location.replace(`#/question/${parseInt(id) + 1}`);
      window.location.reload();
    } else {
      window.location.replace(`#/result`);
    }
  };

  render() {
    const { id } = this.state;
    return (
      <QuestPresenter
        handleClick={this.handleClick}
        handleSubmit={this.handleSubmit}
        questionId={id}
      />
    );
  }
}
