import React from "react";

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
      <div class="navLink">
        <a href="clients.html">
          <FontAwesomeIcon icon={faUserFriends} className="navIcon" />
          <span class="navText">Clients</span>
        </a>
      </div>
      <div class="navLink">
        <a href="security.html">
          <FontAwesomeIcon icon={faShieldAlt} className="navIcon" />
          <span class="navText">Security Items</span>
        </a>
      </div>
      <div class="navLink">
        <a href="categories.html">
          <FontAwesomeIcon icon={faStickyNote} className="navIcon" />
          <span class="navText">Categories</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
