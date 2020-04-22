import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Item from "./Item.js";

it("Item Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Item />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
