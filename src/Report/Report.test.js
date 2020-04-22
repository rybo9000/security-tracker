import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Report from "./Report.js";

it.skip("Report Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Report />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
