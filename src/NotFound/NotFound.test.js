import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NotFound from "./NotFound.js";

it("NotFound Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <NotFound />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
