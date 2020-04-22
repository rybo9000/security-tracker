import React from "react";
import ReactDOM from "react-dom";

import Content from "./Content";

it("Content Component Renders Without Crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Content />, div);

  ReactDOM.unmountComponentAtNode(div);
});
