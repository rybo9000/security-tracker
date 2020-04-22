import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AddNewButton from "./AddNewButton.js";

it("AddNewButton Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <AddNewButton />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
