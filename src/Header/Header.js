import React from "react";

import "./Header.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../img/axxys-logo.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="logoContainer">
          <img src={logo} id="logo" alt="Axxys Logo" />
        </div>
        <HamburgerMenu />
      </header>
    );
  }
}

export default Header;
