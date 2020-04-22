import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./Main.js";

it("Main Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Main />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
