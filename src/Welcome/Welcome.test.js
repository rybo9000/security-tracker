import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Welcome from "./Welcome";

it("Welcome Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Welcome />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
