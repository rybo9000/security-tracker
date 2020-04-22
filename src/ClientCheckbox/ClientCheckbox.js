import React from "react";

import "./ClientCheckbox.css";

// CHECKBOX COMPONENT USED TO TOGGLE THE SECURITY STATUS OF AN ITEM FOR CLIENTS

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
