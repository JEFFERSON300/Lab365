import React from "react";
import "../styles/Input.css";
import PropTypes from "prop-types";

function Input({ prop1 }) {
  return (
    <div className="Input">
      <input type="text" placeholder={prop1} />
    </div>
  );
}

Input.propTypes = {
  prop1: PropTypes.string.isRequired,
};

export default Input;
