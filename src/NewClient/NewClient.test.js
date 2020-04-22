import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NewClient from "./NewClient.js";

it("NewClient Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <NewClient />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
