import React from "react";
import { Link } from "react-router-dom";

import "./AddNewButton.css";

function AddNewButton(props) {
  return (
    <div className="addNewContainer">
      <Link to={props.link}>
        <button>Add New {props.thing}</button>
      </Link>
    </div>
  );
}

export default AddNewButton;
