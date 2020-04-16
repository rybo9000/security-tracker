import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faShieldAlt,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav class="sideNav">
      <Link to="/clients">
        <div className="navLink">
          <FontAwesomeIcon icon={faUserFriends} className="navIcon" />
          <span className="navText">Clients</span>
        </div>
      </Link>
      <Link to="/security">
        <div className="navLink">
          <FontAwesomeIcon icon={faShieldAlt} className="navIcon" />
          <span className="navText">Security Items</span>
        </div>
      </Link>
      <Link to="/categories">
        <div className="navLink">
          <FontAwesomeIcon icon={faStickyNote} className="navIcon" />
          <span className="navText">Categories</span>
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
