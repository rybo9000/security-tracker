import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import StatsContainer from "./StatsContainer";

it("StatsContainer Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <StatsContainer />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
