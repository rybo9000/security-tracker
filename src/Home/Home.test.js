import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home.js";

it("Home Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Home />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
