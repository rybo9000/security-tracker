import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../img/axxys-logo.png";

// HEADER COMPONENT ACROSS ENTIRE SITE
class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="logoContainer">
          <Link to="/">
            <img src={logo} id="logo" alt="Axxys Logo" />
          </Link>
        </div>
        <HamburgerMenu disableAutoFocus />
      </header>
    );
  }
}

export default Header;
