import React from "react";

import "./AddNewButton.css";

function AddNewButton(props) {
  return (
    <div className="addNewContainer">
      <a href={props.link}>
        <button>Add New {props.thing}</button>
      </a>
    </div>
  );
}

export default AddNewButton;
