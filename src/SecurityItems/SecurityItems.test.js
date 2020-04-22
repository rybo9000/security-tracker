import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import SecurityItems from "./SecurityItems";

it("SecurityItems Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <SecurityItems />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
