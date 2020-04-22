import React from "react";
import ReactDOM from "react-dom";

import ClientCheckbox from "./ClientCheckbox.js";

it("ClientCheckbox Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ClientCheckbox />, div);

  ReactDOM.unmountComponentAtNode(div);
});
