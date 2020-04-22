import React from "react";

import "./CategorySummary.css";

// CATEGORY SUMMARY DIV USED ON THE /REPORT PAGE

class CategorySummary extends React.Component {
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

    // END COLOR ASSIGNMENT

    return (
      <div className="catSummaryContainer" style={{ backgroundColor: bgCol }}>
        <span className="catSummaryHeader">{this.props.header}</span>
        <div className="catSummaryInner">
          <span className="catSummaryNumber">
            {this.props.secureNumber} / {this.props.totalNumber}
          </span>
        </div>
      </div>
    );
  }
}

export default CategorySummary;
