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
    <nav>
      <div className="navLink">
        <Link to="/clients">
          <FontAwesomeIcon icon={faUserFriends} className="navIcon" />
          <span className="navText">Clients</span>
        </Link>
      </div>
      <div className="navLink">
        <Link to="/security">
          <FontAwesomeIcon icon={faShieldAlt} className="navIcon" />
          <span className="navText">Security Items</span>
        </Link>
      </div>
      <div className="navLink">
        <Link to="/categories">
          <FontAwesomeIcon icon={faStickyNote} className="navIcon" />
          <span className="navText">Categories</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
