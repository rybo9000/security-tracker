import React from "react";

import "./OverallScore.css";

class OverallScore extends React.Component {
  render() {
    // USE THE BELOW TO SET THE BACKGROUND COLOR BASED ON THE HEALTHNUMBER
    const healthNumber = this.props.healthNumber;

    let bgCol = "";
    let text = "";

    if (healthNumber < 0.25) {
      bgCol = "#990000";
      text = "CRITICAL CONDITION";
    } else if (healthNumber < 0.5) {
      bgCol = "#ff8c00";
      text = "ATTENTION NEEDED";
    } else if (healthNumber < 0.75) {
      bgCol = "#FFd300";
      text = "NEEDS IMPROVEMENT";
    } else if (healthNumber < 1) {
      bgCol = "#228C22";
      text = "HEALTHY";
    } else if (healthNumber === 1) {
      bgCol = "#228C22";
      text = "PERFECT SCORE";
    }

    // END OF BACKGROUND COLOR CODE
    return (
      <div className="scoreSummaryContainer" style={{ backgroundColor: bgCol }}>
        <span className="scoreSummaryHeader">{this.props.header}</span>
        <div className="scoreSummaryInner">
          <div className="scoreSummaryNumber">
            {this.props.secureNumber} / {this.props.totalNumber}
          </div>
          <div className="scoreSummaryText">{text}</div>
        </div>
      </div>
    );
  }
}

export default OverallScore;
