import React from "react";
import "./PageLayout.css";
import "../App.css";
import logo from "../media/ucu_logo.svg";
import loginIcon from "../media/login_icon.svg";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../Button/Button";

function PageLayout(props) {
  return (
    <div className="main">
      <header>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "navlink active"
              : isPending
              ? "navlink pending"
              : "navlink"
          }
        >
          <img src={logo} alt="logo" className="header-logo" />
        </NavLink>
        <div className="navigation-wrapper">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive
                ? "navlink active"
                : isPending
                ? "navlink pending"
                : "navlink"
            }
          >
            <nav>Усі петиції</nav>
          </NavLink>
          <NavLink
            to="/considered"
            className={({ isActive, isPending }) =>
              isActive
                ? "navlink active"
                : isPending
                ? "navlink pending"
                : "navlink"
            }
          >
            <nav>На розгляді</nav>
          </NavLink>
          <NavLink
            to="/answered"
            className={({ isActive, isPending }) =>
              isActive
                ? "navlink active"
                : isPending
                ? "navlink pending"
                : "navlink"
            }
          >
            <nav>Відповіді</nav>
          </NavLink>
          <NavLink
            to={"/user-petitions"}
            className={({ isActive, isPending }) =>
              isActive
                ? "navlink active"
                : isPending
                ? "navlink pending"
                : "navlink"
            }
          >
            <nav>Мої петиції</nav>
          </NavLink>
        </div>
        <div className="buttons-wrapper">
          <Button><span className="button-text">НОВА ПЕТИЦІЯ</span></Button>
          <Button>
            <img src={loginIcon} />
          </Button>
        </div>
      </header>
      <Outlet />
      <footer>
        <ul className="footerGroup">
          <h4>Розробники</h4>
          <li>Роман Мутель</li>
          <li>Андрій Полішко</li>
          <li>Микола Яковкін</li>
          <li>Роман Науменко</li>
        </ul>
        <ul className="footerGroup">
          <h4>Репозиторій</h4>
          <li>
            <a href="https://github.com/AndriiPolishko/UCU_petitions">
              github.com/AndriiPolishko/UCU_petitions
            </a>
          </li>
        </ul>
        <ul className="footerGroup">
          <h4>Зворотній зв'язок</h4>
          <li>
            <a href="mailto:roman.mutel@ucu.edu.ua">roman.mutel@ucu.edu.ua</a>
          </li>
          <li>
            <a href="mailto:andrii.polishko@ucu.edu.ua">
              andrii.polishko@ucu.edu.ua
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default PageLayout;
