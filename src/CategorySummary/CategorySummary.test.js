import React from "react";
import ReactDOM from "react-dom";

import CategorySummary from "./CategorySummary.js";

it("CategorySummary Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<CategorySummary />, div);

  ReactDOM.unmountComponentAtNode(div);
});
