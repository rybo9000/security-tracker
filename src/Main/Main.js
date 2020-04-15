import React from "react";

import "./Main.css";

function Main(props) {
  return (
    <main>
      <div className="mainWrapper">{props.children}</div>
    </main>
  );
}

export default Main;
