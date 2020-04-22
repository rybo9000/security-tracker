import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import EditClient from "./EditClient";

it.skip("EditClient Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <EditClient />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
