import React from "react";
import "Components/checkbox.css";

const Checkbox = ({ num, size, options }) => {
  if (size == 4) {
    return (
      <div className="checkbox">
        <label className="container">
          <input type="radio" name={num} value={options[0].score} required />
          <div className="checkmark">
            <span>{options[0].text}</span>
          </div>
        </label>
        <label className="container">
          <input type="radio" name={num} value={options[1].score} />
          <div className="checkmark">
            <span>{options[1].text}</span>
          </div>
        </label>
        <label className="container">
          <input type="radio" name={num} value={options[2].score} />
          <div className="checkmark">
            <span>{options[2].text}</span>
          </div>
        </label>
        <label className="container">
          <input type="radio" name={num} value={options[3].score} />
          <div className="checkmark">
            <span>{options[3].text}</span>
          </div>
        </label>
      </div>
    );
  } else if (size == 3) {
    return (
      <div className="checkbox">
        <label className="container">
          <input type="radio" name={num} value={options[0].score} required />
          <div className="checkmark">
            <span>{options[0].text}</span>
          </div>
        </label>
        <label className="container">
          <input type="radio" name={num} value={options[1].score} />
          <div className="checkmark">
            <span>{options[1].text}</span>
          </div>
        </label>
        <label className="container">
          <input type="radio" name={num} value={options[2].score} />
          <div className="checkmark">
            <span>{options[2].text}</span>
          </div>
        </label>
      </div>
    );
  } else {
    return (
      <div className="checkbox">
        <label className="container">
          <input type="radio" name={num} value={options[0].score} required />
          <div className="checkmark">
            <span>{options[0].text}</span>
          </div>
        </label>
        <label className="container">
          <input type="radio" name={num} value={options[1].score} />
          <div className="checkmark">
            <span>{options[1].text}</span>
          </div>
        </label>
      </div>
    );
  }
};

export default Checkbox;
