import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Clients from "./Clients.js";

it("Clients Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Clients />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
