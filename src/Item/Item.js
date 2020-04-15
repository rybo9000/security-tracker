import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Item(props) {
  const editLink = props.editLink ? (
    <Link to={props.editLink}>
      <FontAwesomeIcon icon={faEdit} className="itemIcon" />
    </Link>
  ) : (
    ""
  );

  const reportLink = props.reportLink ? (
    <Link to={props.reportLink}>
      <FontAwesomeIcon icon={faArrowRight} className="itemIcon" />
    </Link>
  ) : (
    ""
  );

  const checkBox = props.checkBox ? <input type="checkbox"></input> : "";

  return (
    <div className="itemDiv">
      <span>{props.itemName}</span>
      <div>
        {editLink}
        {reportLink}
        {checkBox}
      </div>
    </div>
  );
}

export default Item;
