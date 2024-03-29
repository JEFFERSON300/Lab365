import "../styles/Header.css";
import apps from "../images/apps.png";
import signInLogo from "../images/profile.png";

import React from "react";

function Header() {
  return (
    <div className="Header">
      <ul className="Menu">
        <li>
          <a className="menu-icon" href="https://mail.google.com">
            Gmail
          </a>
        </li>
        <li>
          <a
            className="menu-icon"
            href="https://www.google.com.br/imghp?hl=pt-BR&ogbl"
          >
            Imagens
          </a>
        </li>
        <li>
          <img id="menu" src={apps} alt="menu" />
        </li>
        <li>
          <img id="profile" src={signInLogo} alt="profile" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
