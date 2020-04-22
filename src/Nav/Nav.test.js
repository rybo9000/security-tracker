import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./Nav.js";

it("Nav Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Nav />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
