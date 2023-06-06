import React from "react";
import "../styles/Button.css";
import PropTypes from "prop-types";
function Button(props) {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
