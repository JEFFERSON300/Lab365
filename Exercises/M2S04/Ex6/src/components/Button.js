import React from "react";
import "../styles/Button.css";
import PropTypes from "prop-types";
function Button({ prop1, prop2, prop3 }) {
  return (
    <React.Fragment>
      <button className="Btn">{prop1}</button>
    </React.Fragment>
  );
}

Button.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number.isRequired,
  prop3: PropTypes.bool,
};

export default Button;
