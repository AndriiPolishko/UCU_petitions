import React from "react";
import "./PageLayout.css";
import "../App.css";
import logo from "../media/ucu_logo.svg";

function PageLayout(props) {
  return (
    <div className="main">
      <header>
        <img src={logo} alt="logo" className="header-logo" />
      </header>
      <div className="content">{props.children}</div>
      <footer></footer>
    </div>
  );
}

export default PageLayout;
