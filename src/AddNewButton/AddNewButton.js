import React from "react";
import { Link } from "react-router-dom";

import "./AddNewButton.css";

// USED FOR THE ADD NEW XXXXXXX BUTTON

function AddNewButton(props) {
  return (
    <div className="addNewContainer">
      <Link to={props.link}>
        <button>Add New {props.thing}</button>
      </Link>
    </div>
  );
}

AddNewButton.defaultProps = {
  link: "test",
};

export default AddNewButton;
