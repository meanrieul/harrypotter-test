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
    const scores = event.target.elements.Question.value.split(",");
    const { id } = this.state;
    const scoreA = parseInt(
      localStorage.getItem("scoreA") ? localStorage.getItem("scoreA") : 0
    );
    localStorage.setItem("scoreA", scoreA + parseInt(scores[0]));

    const scoreB = parseInt(
      localStorage.getItem("scoreB") ? localStorage.getItem("scoreB") : 0
    );
    localStorage.setItem("scoreB", scoreB + parseInt(scores[1]));

    const scoreC = parseInt(
      localStorage.getItem("scoreC") ? localStorage.getItem("scoreC") : 0
    );
    localStorage.setItem("scoreC", scoreC + parseInt(scores[2]));

    const scoreD = parseInt(
      localStorage.getItem("scoreD") ? localStorage.getItem("scoreD") : 0
    );
    localStorage.setItem("scoreD", scoreD + parseInt(scores[3]));

    if (id != "8") {
      window.location.replace(`#/question/${parseInt(id) + 1}`);
      window.location.reload();
    } else {
      if (scoreA >= 100) {
        if (scoreB >= 100) {
          if (scoreC >= 100) {
            if (scoreD >= 100) {
              // OOOO
              window.location.replace("#/Fleur");
            } else {
              window.location.replace("#/Dumbledore");
              // OOOX
            }
          } else {
            if (scoreD >= 100) {
              // OOXO
              window.location.replace("#/McGonagall");
            } else {
              //OOXX
              window.location.replace("#/Hermione");
            }
          }
        } else {
          if (scoreC >= 100) {
            if (scoreD >= 100) {
              // OXOO
              window.location.replace("#/HarryPotter");
            } else {
              // OXOX
              window.location.replace("#/TomRiddle");
            }
          } else {
            if (scoreD >= 100) {
              // OXXO
              window.location.replace("#/Hagird");
            } else {
              //OXXX
              window.location.replace("#/RonaldWeasley");
            }
          }
        }
      } else {
        if (scoreB >= 100) {
          if (scoreC >= 100) {
            if (scoreD >= 100) {
              // XOOO
              window.location.replace("#/SeverusSnape");
            } else {
              // XOOX
              window.location.replace("#/Cedric");
            }
          } else {
            if (scoreD >= 100) {
              // XOXO
              window.location.replace("#/GinevraWeasley");
            } else {
              // XOXX
              window.location.replace("#/LunaLovegood");
            }
          }
        } else {
          if (scoreC >= 100) {
            if (scoreD >= 100) {
              // XXOO
              window.location.replace("#/GeorgeAndFred");
            } else {
              // XXOX
              window.location.replace("#/Malfoy");
            }
          } else {
            if (scoreD >= 100) {
              // XXXO
              window.location.replace("#/Neville");
            } else {
              //XXXX
              window.location.replace("#/ChoChang");
            }
          }
        }
      }
    }
  };

  render() {
    const { id } = this.state;
    return <QuestPresenter handleSubmit={this.handleSubmit} questionId={id} />;
  }
}
