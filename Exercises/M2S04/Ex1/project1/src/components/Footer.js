import React from "react";
import "../styles/Footer.css";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <div>
      <ul id="footer">
        <li>
          <a href="url">{props.name1}</a>
        </li>
        <li>
          <a href="url">{props.name2}</a>
        </li>
        <li>
          <a href="url">{props.name3}</a>
        </li>
      </ul>
    </div>
  );
}

Footer.propTypes = {
  name1: PropTypes.string,
  name2: PropTypes.string,
  name3: PropTypes.string,
};

export default Footer;
