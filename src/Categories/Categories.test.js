import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Categories from "./Categories.js";

it("Categories Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Categories />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
