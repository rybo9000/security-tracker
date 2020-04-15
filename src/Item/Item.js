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

  return (
    <div className="itemDiv">
      <span>{props.itemName}</span>
      <div>
        {editLink}
        {reportLink}
      </div>
    </div>
  );
}

export default Item;
