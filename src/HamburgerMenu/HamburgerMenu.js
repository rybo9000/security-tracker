import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./HamburgerMenu.css";

class HamburgerMenu extends React.Component {
  render() {
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
      </Menu>
    );
  }
}

export default HamburgerMenu;
