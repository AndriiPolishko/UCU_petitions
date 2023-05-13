import React from "react";
import "./PageLayout.css";
import "../App.css";

function PageLayout(props) {
  return (
    <div className="main">
      <header></header>
      <div className="content">{props.children}</div>
      <footer></footer>
    </div>
  );
}

export default PageLayout;
