import React from "react";
import "Components/checkbox.css";

const Checkbox = ({ num, options }) => (
  <div className="checkbox">
    <label className="container">
      <input type="radio" name={num} value={0} required />
      <div className="checkmark">
        <span>{options[0]}</span>
      </div>
    </label>
    <label className="container">
      <input type="radio" name={num} value={1} />
      <div className="checkmark">
        <span>{options[1]}</span>
      </div>
    </label>
    <label className="container">
      <input type="radio" name={num} value={2} />
      <div className="checkmark">
        <span>{options[2]}</span>
      </div>
    </label>
    <label className="container">
      <input type="radio" name={num} value={3} />
      <div className="checkmark">
        <span>{options[3]}</span>
      </div>
    </label>
  </div>
);

export default Checkbox;
