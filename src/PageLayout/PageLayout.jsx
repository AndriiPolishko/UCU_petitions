import React from "react";
import "./PageLayout.css";
import "../App.css";
import logo from "../media/ucu_logo.svg";
import { NavLink, Outlet } from "react-router-dom";

function PageLayout(props) {
  return (
    <div className="main">
      <header>
        <img src={logo} alt="logo" className="header-logo" />
        <div className="navigation-wrapper">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Усі петиції
          </NavLink>
          <NavLink
            to="/considered"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            На розгляді
          </NavLink>
          <NavLink
            to="/answered"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Відповіді
          </NavLink>
          <NavLink
            to={"/user-petitions"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            Мої петиції
          </NavLink>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default PageLayout;
