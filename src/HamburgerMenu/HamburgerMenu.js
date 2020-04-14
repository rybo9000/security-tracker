import React from "react";

import "./HamburgerMenu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HamburgerMenu() {
  const element = <FontAwesomeIcon icon={faBars} />;

  return <div id="hamburgerMenu">{element}</div>;
}

export default HamburgerMenu;
