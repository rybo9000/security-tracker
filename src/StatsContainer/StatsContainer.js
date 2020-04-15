import React from "react";

import "./StatsContainer.css";

function StatsContainer(props) {
  return <div className="statsContainer">{props.children}</div>;
}

export default StatsContainer;
