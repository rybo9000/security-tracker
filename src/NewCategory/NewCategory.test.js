import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NewCategory from "./NewCategory.js";

it("NewCategory Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <NewCategory />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
