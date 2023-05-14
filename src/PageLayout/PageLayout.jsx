import React from "react";
import "./PageLayout.css";
import "../App.css";
import logo from "../media/ucu_logo.svg";
import loginIcon from "../media/login_icon.svg";
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
            <nav>Усі петиції</nav>
          </NavLink>
          <NavLink
            to="/considered"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            <nav>На розгляді</nav>
          </NavLink>
          <NavLink
            to="/answered"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            <nav>Відповіді</nav>
          </NavLink>
          <NavLink
            to={"/user-petitions"}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            <nav>Мої петиції</nav>
          </NavLink>
        </div>
        <div className="buttons-wrapper">
          <button>НОВА ПЕТИЦІЯ</button>
          <button>
            <img src={loginIcon} />
          </button>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default PageLayout;
