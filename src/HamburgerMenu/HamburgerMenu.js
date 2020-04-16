import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./HamburgerMenu.css";

class HamburgerMenu extends React.Component {
  render() {
    return (
      <Menu right>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/clients" className="menu-item">
          Clients
        </Link>
        <Link to="/security" className="menu-item">
          Security Items
        </Link>
        <Link to="/categories" className="menu-item">
          Categories
        </Link>
      </Menu>
    );
  }
}

export default HamburgerMenu;
