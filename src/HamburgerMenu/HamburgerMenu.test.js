import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu.js";

it("HamburgerMenu Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <HamburgerMenu />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
