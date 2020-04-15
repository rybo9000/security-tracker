import React from "react";

import StatsHalf from "../StatsHalf/StatsHalf";
import StatsFull from "../StatsFull/StatsFull";
import StatsContainer from "../StatsContainer/StatsContainer";

function Welcome() {
  return (
    <div>
      <h1>Welcome to the Axxys Security Manager!</h1>
      <StatsContainer>
        <StatsHalf>Test</StatsHalf>
        <StatsHalf>Test</StatsHalf>
        <StatsFull>Stats Full</StatsFull>
      </StatsContainer>
    </div>
  );
}

export default Welcome;
