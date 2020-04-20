import React from "react";

import "./ClientCheckbox.css";

class ClientCheckbox extends React.Component {
  render() {
    return (
      <label className="checkboxContainer">
        {this.props.name}
        <input
          type="checkbox"
          checked={this.props.isChecked}
          onChange={this.props.handleChecked}
        />
        <span className="checkmark"></span>
      </label>
    );
  }
}

export default ClientCheckbox;
