import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NewSecurity from "./NewSecurity.js";

it("NewSecurity Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <NewSecurity />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
