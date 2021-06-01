import React from "react";
import "Components/checkbox.css";

const Checkbox = ({ num, options }) => (
  <div className="checkbox">
    <label className="container">
      <input type="radio" name={num} value={0} required />
      <span className="checkmark">{options[0]}</span>
    </label>
    <label className="container">
      <input type="radio" name={num} value={1} />
      <span className="checkmark">{options[1]}</span>
    </label>
    <label className="container">
      <input type="radio" name={num} value={2} />
      <span className="checkmark">{options[2]}</span>
    </label>
    <label className="container">
      <input type="radio" name={num} value={3} />
      <span className="checkmark">{options[3]}</span>
    </label>
  </div>
);

export default Checkbox;
