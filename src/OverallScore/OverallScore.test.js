import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import OverallScore from "./OverallScore.js";

it("OverallScore Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <OverallScore />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
